# `research/` — Value Capture Research Program

**Status:** 5 of 9 pillars complete · **Programme definition:** [`research-plan.md`](research-plan.md)

Knowledge-gathering only. The standing rule is **report and cite, do not recommend** — synthesis happens in the Company Document, not here. Nothing in this folder is canonical; where it conflicts with [`AXON ENJIN Document.md`](../AXON%20ENJIN%20Document.md), the Company Document wins.

---

## Pillars

| # | Pillar | File | Status |
| ----- | ----- | ----- | ----- |
| P1 | Value Capture & Price Architecture | [`pillar-01-price-architecture.md`](pillar-01-price-architecture.md) | ✅ Complete · 11 contradictions registered |
| P2 | Buyer Selection & Qualification | [`pillar-02-buyer-selection.md`](pillar-02-buyer-selection.md) | ✅ Complete |
| P3 | Positioning & Category | [`pillar-03-positioning-category.md`](pillar-03-positioning-category.md) | ✅ Complete |
| P4 | Demand Generation & Offer Design | [`pillar-04-demand-generation.md`](pillar-04-demand-generation.md) | ✅ Complete |
| P5 | The Sales Conversation | [`pillar-05-sales-conversation.md`](pillar-05-sales-conversation.md) | ✅ Complete · carries ethics labels per technique |
| P6 | Delivery Discipline as Margin Defense | — | ❌ **Missing. High priority** |
| P7 | Productization & Reuse Economics | — | ❌ Missing |
| P8 | Geography & Market Arbitrage | — | ❌ Missing, and possibly moot |
| P9 | Commercial & Legal Instruments (PH-first) | — | ❌ **Missing. High priority** |

Every completed pillar returns the same nine-part shape: pillars, frameworks, techniques, hacks, terms, formulas (with worked examples), benchmarks (date-stamped, source-tiered), **contradictions**, sources.

### Read the contradictions sections first

Each pillar's contradictions section states where sources genuinely disagree and **leaves it unresolved on purpose**. That is the highest-value content in this folder — flattening it would destroy the signal it exists to preserve. [`FLAGS.md`](../FLAGS.md) does not duplicate these; it only records where one of them collides with a decision the Company Document has already locked.

Examples worth knowing before you use any number from P1:

- **C3** — utilization assumptions across sources span 55–85%, and the cost floor moves ~30% across that range. No source addresses a team small enough that one person is delivery, sales, and operations simultaneously.
- **C6** — the 15–25% maintenance rule derives from enterprise budgets and does not scale down. On a ₱250,000 build it yields ~₱3,750/month, which may not cover one incident.
- **C10** — does a sponsored build establish a **zero reference price** with the very segment you then want to charge? Directly relevant to the two superseded campaign plans.

---

## Two caveats on using these files

**1. All five pillars predate the Company Document.** They were written against a corpus of the campaign plans and the `pricing/` transcripts — the source of truth did not exist yet. So they do not know that the beachhead, the pricing unit, the compliance posture, and the geography have since been locked (Company Document §14). Method and evidence transfer; conclusions may not.

**2. Geography is decided.** P8 was scoped around AU/NZ/PH/US/Middle East arbitrage, and `pricing/claude-response2.md` recommends an Australia beachhead. §1 locks **Philippines-only for now**. AU-referenced rate benchmarks are retained for method, not for numbers — they are load-bearing in several P1 formulas and will silently inflate anything derived from them. See [`FLAGS.md`](../FLAGS.md) F-26.

---

## What to produce next, and why

**P9 — Commercial & Legal Instruments.** Company Document §8.5 specifies what the three standard clauses must *do*; nothing researches how they are *drafted*. §8.7 budgets ₱150,000–300,000 for three written opinions. Going into that engagement without P9 means paying counsel to frame questions you could have framed yourself. Scope: SOW, MSA, deposits and milestones, IP-on-final-payment, liability caps, abandonment, testimonial consent, Data Privacy Act. Disclaimer mandatory — *structural and regulatory awareness only, not legal advice.*

**P6 — Delivery Discipline as Margin Defense.** The implementation fee (₱180,000 base + ₱25,000/branch) carries **no stated hour assumption**, while §7.4, §13 and WD4 §5 all set triggers in hours. P6 is the research that would let that fee be derived rather than asserted. See [`FLAGS.md`](../FLAGS.md) F-06.

P7 can wait. P8 should wait until the PH rate card either passes or fails its willingness-to-pay test.

---

## Known gaps the plan itself flagged

Tracked in [`RESEARCH-QUEUE.md`](../RESEARCH-QUEUE.md) §D3. One is now **closed**: *"discovery/paid-audit as a standalone product"* — Company Document §11.1 defines it as the ₱95,000 Readiness Audit. `research-plan.md` still lists it as open.

The plan's closing **Open Question for the Operator** — *"What has Axon Enjin actually shipped, and for whom?"* — is partly answerable now from the internal alignment notes at the top of the source document (hackathon builds, ChaChing, BlueBiz LMS, Full Cup, HeyPro!). It declares P2, P3 and P8 "theoretical until this is filled in." Filling it in is free and unblocks three pillars.
