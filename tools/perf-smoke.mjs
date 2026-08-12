// Runs the genesis engine out of index.html under a minimal DOM/canvas stub and
// drives 400 frames. Zero dependencies: `node tools/perf-smoke.mjs`.
//
// This is NOT a visual test — the cinema can only be judged by eye in a browser.
// What it does catch is every way the quality-tier and loop-gating work can break
// silently: a typo'd style property, a tier table that drifts from the CSS, a
// watchdog that ratchets the wrong way, a loop that will not stop off-screen.
import { readFileSync } from 'node:fs';
import assert from 'node:assert';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const src = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
  .map(m => m[1])
  .reduce((a, b) => (b.length > a.length ? b : a));       // the engine is the big one

const noop = () => {};
const grad = { addColorStop: noop };
const ctxStub = () => new Proxy({}, {
  get: (t, k) => (k in t ? t[k] : (t[k] = /^create\w*Gradient$/.test(k) ? () => grad : noop)),
  set: (t, k, v) => ((t[k] = v), true),
});

const el = id => ({
  id, style: {}, dataset: {}, textContent: '', width: 0, height: 0,
  classList: { add: noop, remove: noop, contains: () => false },
  appendChild: noop, remove: noop, removeChild: noop, addEventListener: noop,
  closest: () => null, getContext: ctxStub,
  getBoundingClientRect: () => ({ top: 0, left: 0, width: 1440, height: 9000 }),
  offsetTop: 0, offsetHeight: 9000,
  querySelector: () => el('q'), querySelectorAll: () => [],
});

const raf = [];
const sandbox = {
  console, Math, JSON, Array, Object, String, Number, Promise, Set, Map, WeakMap,
  Float32Array, Uint8Array, Proxy, Symbol, isNaN, parseFloat, parseInt,
  Path2D: class { moveTo() {} lineTo() {} arc() {} },
  IntersectionObserver: class { observe() {} unobserve() {} },
  innerWidth: 1440, innerHeight: 900, devicePixelRatio: 2, scrollY: 0, pageYOffset: 0,
  scrollTo: noop, setTimeout: noop, clearTimeout: noop, cancelAnimationFrame: noop,
  requestAnimationFrame: fn => raf.push(fn),
  matchMedia: () => ({ matches: false }),
  navigator: { hardwareConcurrency: 8, deviceMemory: 8 },
  location: { search: '' }, history: {},
  addEventListener: noop, removeEventListener: noop,
  getComputedStyle: () => ({ backgroundColor: 'rgb(4, 6, 13)' }),
  document: {
    readyState: 'complete', hidden: false,
    documentElement: el('html'), body: el('body'),
    fonts: { ready: Promise.resolve() },
    getElementById: el, createElement: el,
    querySelector: () => el('stage'),
    querySelectorAll: s => (s === '#sky i' ? [el('sky1'), el('sky2')] : []),
    addEventListener: noop,
  },
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

const ctx = vm.createContext(sandbox);
vm.runInContext(src, ctx, { filename: 'index.html:engine' });
const g = expr => vm.runInContext(expr, ctx);

// ---- boot state ------------------------------------------------------------
assert.strictEqual(g('TIER'), 3, 'desktop hints (8 cores, fine pointer) start at tier 3');
assert.deepStrictEqual(g('JSON.parse(JSON.stringify(Q))'),
  { dpr: 2, echo: true, signals: true, trails: true, dust: 70 }, 'tier 3 quality table');
assert.strictEqual(g('document.documentElement.dataset.tier'), 3,
  'data-tier must reach <html> or the tier CSS rules never match');
assert.strictEqual(g('W'), 1440, 'resize() ran at import');
assert.strictEqual(g('layers[0].c.width'), 2880, 'net canvas is full dpr');
assert.strictEqual(g('layers[1].c.width'), 1440, 'depth canvas is DEPTH_SCALE of it');
assert.ok(g('NALL') > 800, 'geometry built');
assert.ok(g('edges.length') > 3000, 'edge list built');

// ---- drive the loop --------------------------------------------------------
for (let i = 0; i < 10; i++) await new Promise(r => setImmediate(r));   // asset gate
assert.ok(g('assetsReady'), 'asset gate resolved');

let n = 0;
while (raf.length && n < 400) raf.shift()(n++ * 16.7);
assert.strictEqual(n, 400, `loop kept running, stopped after ${n} frames`);
assert.ok(g('booted'), 'boot gate cleared');
assert.ok(g('p') > 0, 'progress advanced');
assert.match(g('rail.style.transform') ?? '', /^scaleX\(/, 'rail animates scaleX');
assert.strictEqual(g('rail.style.width'), undefined, 'rail must never write `width`');

// ---- the style memo must actually suppress repeats -------------------------
const writes = g(`(() => { let c = 0;
  const probe = { style: new Proxy({}, { set: () => (c++, true), get: () => undefined }) };
  for (let i = 0; i < 50; i++) set(probe, 'opacity', '0.500');
  return c; })()`);
assert.strictEqual(writes, 1, `set() memo failed: ${writes} writes for 50 identical values`);

// ---- watchdog: a healthy-but-jittery machine must NOT be downgraded --------
// This is the case that a rolling MEAN got wrong. Measured on a machine holding
// a clean 60fps: p50 16.7ms, p90 16.9ms, ~2% of frames hitching to 33-50ms.
// That profile must survive 600 frames untouched.
{
  const before = g('TIER');
  let ms = 100000;
  for (let i = 0; i < 600 && raf.length; i++) {
    ms += i % 50 === 0 ? 42 : 16.7;                       // one hitch every 50 frames
    raf.shift()(ms);
  }
  assert.strictEqual(g('TIER'), before,
    'watchdog downgraded a machine running at 60fps with occasional hitches');
}

// ---- watchdog: a machine that stutters every other frame MUST step down ----
// Alternating 16.7/33.3 is an effective 45fps and reads as visible stutter, but
// half its frames are perfect. A "count the slow frames" rule tuned loose enough
// to survive the jitter case above would sit right on top of this one; a median
// separates them cleanly.
{
  const before = g('TIER');
  let ms = 200000;
  for (let i = 0; i < 200 && raf.length; i++) { ms += i % 2 ? 33.3 : 16.7; raf.shift()(ms); }
  assert.ok(g('TIER') < before, 'watchdog missed a machine stuttering at ~45fps');
}

// ---- watchdog: a genuinely slow machine MUST be downgraded ----------------
{
  const before = g('TIER');
  let ms = 400000;
  for (let i = 0; i < 200 && raf.length; i++) { ms += 40; raf.shift()(ms); }
  assert.ok(g('TIER') < before,
    'watchdog failed to step down on a machine rendering at 25fps');
}

// ---- the tier table --------------------------------------------------------
// `reduce` is a latch by design — nothing un-sets it in the product, because the
// tier only ever falls. The watchdog cases above may have already tripped it, so
// clear it here to test the table itself rather than the order of this file.
vm.runInContext('reduce = false; TIER = 1; applyTier();', ctx);
assert.strictEqual(g('Q.echo'), false, 'tier 1 drops the blurred depth echo');
assert.strictEqual(g('Q.dpr'), 1, 'tier 1 clamps dpr to 1');
assert.strictEqual(g('reduce'), false, 'tier 1 is not the reduced-motion path');
vm.runInContext('TIER = 0; applyTier();', ctx);
assert.strictEqual(g('reduce'), true, 'tier 0 must land in the reduced-motion path');
assert.strictEqual(g('Q.dust'), 12, 'tier 0 dust count');

// ---- off-screen stop -------------------------------------------------------
vm.runInContext('stageVis = false;', ctx);
raf.length = 0;
vm.runInContext('frame(9999)', ctx);
assert.strictEqual(raf.length, 0, 'the loop must not re-queue when the stage is off screen');
assert.strictEqual(g('running'), false, '`running` must be cleared on stop, or resume deadlocks');

console.log(`ok - ${n} frames driven, ${g('NALL')} nodes, ${g('edges.length')} edges`);
