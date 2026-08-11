# Pillar 5 — The Sales Conversation

**Status:** complete
**Written:** 2026-07-28
**Wave:** 2 (depends on Wave 1: P1 price architecture, P2 buyer selection, P3 positioning)
**Predecessors read:** `research-plan.md`, `pillar-01-price-architecture.md`, `pillar-02-buyer-selection.md`, `pillar-03-positioning-category.md`, `pillar-04-demand-generation.md`, `pricing/claude-response3.md`, `pricing/chatgpt3.md`
**Standing rules applied:** report and cite, do not recommend · preserve contradictions · every persuasion technique labelled **legitimate / grey / misrepresentation** · source tier and retrieval date on every finding
**Retrieval date for all web findings:** 2026-07-28 unless otherwise stated

---

## 0. Scope, Inheritance, and the Shape of the Evidence

### 0.1 What this pillar covers

Discovery and diagnostic method; question sequencing; quantifying cost of inaction with the buyer; price presentation (single vs three options, ordering, timing, written vs verbal, precise vs round, whether to price in the meeting at all); anchoring in negotiation and its limits; a full objection library; the no-decision/indecision failure mode; timeline-commitment language; selling speed; negotiation mechanics (concession discipline, trading, BATNA, procurement); multi-stakeholder consensus; mutual action plans; close mechanics; talk-listen ratios.

### 0.2 The five constraints inherited, restated as they bind this pillar

| # | Inherited constraint | Source | How it binds P5 |
|---|---|---|---|
| I1 | **FOMU is structural.** 40–60% of qualified B2B deals die in no-decision; ~56% of that is indecision (fear of messing up), not status-quo preference. The instruments that address indecision are clauses, not talk tracks. | P2 C2.3, P4 P4.5, Dixon & McKenna 2022 `[PRACTITIONER, large-n]` | The objection library's answer to most risk objections is a **contract clause from P4's F/36**, not a sentence. §7.3 marks which. |
| I2 | **Both ends of the price range damage quality perception.** Free/too-cheap depresses perceived service quality (Gorn et al.); high-end prices trigger monetary-sacrifice concern (Monroe/Rao). | P1 P1.6, P4 C4.12 | The defensible band may be narrow. §7.4's decision tree therefore asks *where in the band*, not *how high*. |
| I3 | **No source tests anchoring under a credibility deficit.** | P1 C8, P3 C3.5 | Not discharged here either. But two new primaries change its *shape* — see §1 P5.7 and C5.4. |
| I4 | **P3's competitive-alternatives table is the discovery spine.** Dunford's "what would this buyer do if we didn't exist?" is a discovery question that simultaneously yields the reference price, the frame, and P2's conscious-loss evidence. | P3 §6.1 row 1, handoff | §7.1's question set is built on it. |
| I5 | **Do not build door-in-the-face in.** DITF produces verbal compliance without behavioural compliance. | P4 P4.12 | Excluded from §3 and §7.3 by construction. Recorded as an exclusion, not an omission. |

### 0.3 The honest shape of the evidence in this pillar

This pillar has a worse evidence base than P1–P4, and the reason is structural: **the sales conversation is the least-instrumented commercial activity in the corpus.** What exists divides into four kinds, and they are not interchangeable:

1. **Behavioural-decision primaries** (prospect theory, anchoring, precision, decoys, labor illusion, expectancy-disconfirmation, pain of paying). Peer-reviewed, replicable in principle, and almost entirely conducted on **individuals making one-shot decisions about consumer goods or negotiation scenarios**, not on multi-stakeholder B2B service purchases over months. Transfer is an assumption in every case.
2. **Behavioural-coding programmes** (Rackham/Huthwaite on SPIN and on negotiation). Large, methodologically explicit, **never independently replicated**, and commercially owned by the training firm that sells the method.
3. **Conversation-intelligence corpora** (Gong, Chorus, Challenger's JOLT dataset). Enormous n, real calls, and **entirely vendor-produced, non-peer-reviewed, correlational, and selection-biased** — the population is companies that bought call-recording software. Every number from this tier is labelled `[VENDOR]` below and none of it establishes causation.
4. **Practitioner canon** (Enns, Weiss, Miller Heiman, Voss). Argued, internally coherent, and unevidenced. Voss additionally carries a **domain-transfer** problem: it is FBI hostage-negotiation-derived, and the one scholarly engagement found concludes the precepts are hard to transfer to environments of structural long-term mutual dependency — which is exactly a software delivery relationship.

**There is no tier-1 evidence for: question sequencing, objection handling, price-presentation timing, timeline language, or concession discipline in B2B services.** Every framework in §2 that touches those is either a practitioner import or my own derivation, and it says which.

---

## 1. Pillars — Load-Bearing Principles

**P5.1 — The dominant outcome of a qualified B2B pipeline is no outcome.**
40–60% of qualified opportunities end in no decision `[PRACTITIONER, 2.5M calls]`. At a 19–21% win rate `[VENDOR: Ebsta/Pavilion 2025; multiple 2024–26 benchmark aggregators]`, no-decision is a larger revenue category than all competitive losses combined. **The primary adversary in the sales conversation is not a competitor. It is the buyer's own inability to decide.** Everything downstream in this pillar is organised by that fact.

**P5.2 — Indecision and status-quo preference are different diseases with opposite treatments.**
Dixon & McKenna's decomposition: ~56% of no-decision losses are indecision (fear of failing personally by choosing wrongly), ~44% are genuine preference for the status quo. Fear-of-change is treated by intensifying the case for change; fear-of-failure is *worsened* by it. In the JOLT corpus, **73% of reps responded to late cold feet by re-litigating the status quo, and in 84% of those interactions this increased the probability of losing the deal** `[PRACTITIONER, 2.5M calls]`. This is the single most decision-relevant empirical finding in the pillar and it is a direct instruction to *stop selling* at a specific moment.

**P5.3 — Diagnosis before prescription is the only discovery principle with a coherent mechanism behind it, and its evidence is weaker than its reputation.**
SPIN's Implication/Need-payoff logic — that the seller's job is to make the buyer articulate the size of the problem rather than the seller assert the size of the solution — rests on Rackham's 35,000-call programme. That programme is methodologically explicit (trained coders, 0.85 inter-rater correlation against standard tapes) `[PRACTITIONER-PRIMARY]` and **has never been independently replicated in 40 years.** No academic replication, refutation, or systematic review of SPIN was located. It is the most-cited and least-tested framework in the corpus.

**P5.4 — Cost of inaction is arithmetic the buyer must perform, not a number the seller may supply.**
The mechanism is self-generated-argument: a figure the buyer computes from their own inputs is not available for the buyer to dispute. This is the operational core of SPIN's Implication questions and of Weiss' conceptual agreement (objectives → measures → value, in that order, before any fee) `[PRACTITIONER]`. It is also where the corpus's own numbers live: P1's EVE, P2's conscious-loss signals, P3's competitive-alternatives table. **No primary source quantifies the effect of buyer-computed vs seller-supplied CoI.** The one relevant number is web-tier and unverifiable: "in over 75% of calls, reps failed to establish a clear, quantified cost of inaction" `[WEB]`.

**P5.5 — Price presentation is a sequencing problem before it is a level problem.**
Four independent primaries converge: order matters (high-then-low beats low-then-high where preferences are unclear — Sitzia & Zizzo, inherited P4), precision matters (Janiszewski & Uy; Mason et al.), first-mover matters (Galinsky & Mussweiler), and information asymmetry can invert first-mover (Maaravi & Levy). **None of them measures level.** The corpus's instinct is to ask "how high can we anchor"; the literature answers "what, when, and in what form" and is silent on how high.

**P5.6 — Three options is the best-supported price architecture available and its supporting mechanism is partially discredited.**
Enns' Rule 2/Rule 3 (always three; lead with the most expensive) `[PRACTITIONER]` is normally justified by the decoy/attraction effect (Huber, Payne & Puto 1982). Frederick, Lee & Baskin 2014 `[PRIMARY, JMR]` found the attraction effect is **largely restricted to stylised representations where every attribute is a number**, and does not reliably appear when consumers experience the product or when even one attribute is represented perceptually. A software engagement is the second case: scope, team, and outcome are not numbers. **Three-option architecture may still work — via choice-set framing, self-selection, and Enns' outcome-count argument (three options convert a 50/50 yes-no into a mostly-yes) — but the decoy mechanism specifically should not be relied on.**

**P5.7 — Making the first offer helps when you hold the information and hurts when you don't.**
Galinsky & Mussweiler 2001 `[PRIMARY, JPSP]`: across three experiments, whichever party made the first offer obtained the better outcome — **and the advantage was eliminated** when the receiving party focused on information inconsistent with the anchor (the offeror's alternatives, the offeror's reservation price, or their own target). Maaravi & Levy 2017 `[PRIMARY, JDM]`: under extreme information asymmetry, **the uninformed party making the first offer suffers massively** (d = 0.96–1.68; in a field study the uninformed party opened at $45.07 against an informed counterpart's $14.02). **This is the closest the literature comes to P1's C8, and it does not answer it.** Credibility deficit ≠ information deficit. A young studio quoting into an unfamiliar market may be the *uninformed* party about the buyer's budget and market rates while being the *informed* party about the cost of the build. See C5.4.

**P5.8 — Precise numbers anchor harder than round ones, and expertise may reverse it.**
Janiszewski & Uy 2008 `[PRIMARY, Psych Sci, 5 studies]`: adjustment away from a precise anchor is smaller than from a rounded one. Mason, Lee, Wiley & Ames 2013 `[PRIMARY, JESP]`: precise first offers produce more conciliatory counteroffers **and** attributions of knowledge — recipients infer the offeror has thought about what the thing is worth. Both carry the same caution: **an aggressive precise offer can damage the relationship**, and pre-registered field work (Loschelder et al., *Experimental Psychology* 2019) reports that different forms of expertise moderate — and can reverse — anchor precision effects in price decisions. Thorsteinson 2021 `[PRIMARY, JTSP]` adds that *knowing* precision is a tactic does not reduce its effect. **Net: precision is cheap and directionally supported; it is not free against an expert buyer.**

**P5.9 — Underpromise-and-overdeliver is contradicted by the best available meta-analysis.**
Schiebler, Lee & Brodbeck 2025 `[PRIMARY, JAMS, 150 records, 168 studies, N = 58,597]`: expectations → satisfaction is **r = .29 [.24, .34]** — a strong *assimilation* effect. "There currently exists little empirical evidence for contrast effects; the empirical evidence generally supports the prediction of assimilation theories." Higher expectations were associated with **higher**, not lower, satisfaction. Out of 99 studies only two found a significantly negative expectation–satisfaction relationship. **This is the pillar's largest single collision with the internal corpus** (`chatgpt3.md` is built entirely on the contrast prediction) and it is determination 3's decisive evidence. See §1 P5.10, C5.7, and the determination in the session review.

**P5.10 — Visible effort raises perceived value; invisible speed does not.**
Buell & Norton 2011 `[PRIMARY, Management Science, 5 experiments]`: operational transparency about effort raised service valuation by ~8%, and people sometimes **preferred longer waits with visible work to instantaneous identical results**. The critical asymmetry: the labor illusion makes good outcomes look better **and bad outcomes look worse**. This is the only primary evidence located that speaks to the internal speed disagreement, and it supports neither doc's headline: it does not support sandbagging the date (P5.9 kills that), and it does not support hiding the efficiency (`chatgpt3.md`'s "keep it internal"). It supports **showing the work while committing to a date you can hold** — which is `claude-response3.md`'s "give the speed a cause," arriving from a different direction.

**P5.11 — Prepayment is not only a cash-flow instrument; it changes the experience of the purchase.**
Prelec & Loewenstein 1998 `[PRIMARY, Marketing Science]`: double-entry mental accounting, with **prospective accounting** (consumption is more enjoyable when payment precedes it) and **coupling** (the degree to which payment is salient during consumption). Zellermayer 1996 coined "pain of paying." Consequence for P1's deposit/milestone question (C9): milestone billing during delivery is maximally *coupled* — the buyer is reminded of payment at every moment of consumption — while a front-loaded deposit is decoupled. **No source found tests this on B2B project work, and it cuts against the buyer-protective milestone structure that P4's F/36 relies on as a bond.** See C5.9.

**P5.12 — Consensus, not persuasion, is the binding constraint in a multi-branch purchase.**
Gartner `[VENDOR/ANALYST]`: average enterprise buying group 11 stakeholders in 2024 vs 7 in 2017; 77% of buyers describe their last purchase as complex or difficult with consensus-building the most-cited friction; buying groups that reach consensus are **2.5× more likely to report a high-quality deal** (survey of 632 buyers, Aug–Sep 2024); 74% of buying teams display "unhealthy conflict" (2025). **P2's entire thesis is that the multi-branch mid-market buyer has a short decision chain — one person can decide and sign.** If that holds, most of this literature is out of scope; if P2's C2.12 resolves against it, this becomes the dominant constraint. The two are in direct tension and the tension is unresolved (C5.11).

**P5.13 — Skilled negotiators are distinguished by what they omit.**
Rackham & Carlisle's behavioural-coding research `[PRACTITIONER-PRIMARY, published]`: skilled negotiators used **2–3 "irritators" per hour of speaking against an average of 10–11**; defend/attack behaviour was **1.9% of skilled vs 6.3% of average** behaviour; skilled negotiators avoided immediate counter-proposals; and they spent planning time on **issues rather than sequence** (they planned around each issue independently rather than fixing an order). Irritators are defined as self-praising or condescending phrases with no persuasive function used to describe one's own position — *"generous offer," "fair price," "world-class team."* **This is the most directly actionable negotiation finding located, and it is entirely about subtraction.**

**P5.14 — Every technique in this pillar has an honesty boundary, and two of them sit at the boundary by construction.**
Manufactured urgency (a deadline that does not exist, or that resets) and capability buffering (a committed date materially longer than the honest forecast, presented as the honest forecast) are the two places where an ordinary professional practice becomes a misrepresentation. Both internal docs already rejected faking team size; **the buffer question is the same question one step further in** and neither doc resolves it. §5 draws the line explicitly.

---

## 2. Frameworks

### F/41 — The Diagnostic Ladder `[SYNTHESIS: SPIN + P3 §6.1 + P2 conscious-loss + Weiss conceptual agreement]`

Five rungs, in order. Each rung's output is the next rung's input. The seller may not skip upward.

| Rung | Question class | Output | Inherited from |
|---|---|---|---|
| 0 | **Situation** — how the operation is actually run today, per location | factual baseline; the pre-engagement measurement P4 F/34 step 2 needs | SPIN S |
| 1 | **Alternatives** — "what would you do if we didn't exist?" priced and annualised | reference-price band (P1 EVE step 1); the frame (P3 F/23) | P3 §6.1 row 1 (I4) |
| 2 | **Problem** — where the current arrangement fails, in the buyer's words | conscious-loss evidence (P2 A3 signals) | SPIN P |
| 3 | **Implication** — what that failure costs, computed by the buyer | CoI figure (§7.2) | SPIN I |
| 4 | **Need-payoff / Value** — what a fixed version is worth, stated by the buyer | the number P1's fee is set against | SPIN N + Weiss |
| 5 | **Anxiety** — "what would make you hesitate to hand this to an outside team?" | the objection set, elicited before it is raised as resistance | P4 F/37 (the missing four-forces question) |

**Rung 5 is the addition, and it is the pillar's cheapest instrument.** P4 F/37 established that the Anxiety force is absent from every intake instrument in the corpus and that Anxiety is the force mapping onto FOMU. Asking it in discovery converts the objection library from a script the seller memorises into a list the buyer dictates. `[DERIVED — mine; the four-forces basis is Moesta & Spiek, practitioner tier]`

**What F/41 is not.** SPIN's evidence is for Implication and Need-payoff questions correlating with success in *large* sales; the ladder's ordering above Rung 1 is Rackham's, and Rungs 1 and 5 are grafted on from P3 and P4. **No source validates the composite.**

### F/42 — The Cost-of-Inaction Co-Computation `[DERIVED — arithmetic, not a published formula]`

Fully specified as a worksheet in §7.2. Four rules, which are the framework:

1. **The buyer holds the pen.** Every input is stated by the buyer or read off a buyer-supplied artefact.
2. **Per-location, then multiplied.** P2's A1 thesis (pain × locations ÷ single decision chain) is the arithmetic structure. Note that P2 verified the *denominator* and did **not** verify the linear `× N` numerator in any source (P2's own caveat carries forward).
3. **Annualise, then state the horizon.** A monthly figure understates; a lifetime figure invites disbelief. Annual is the convention in every practitioner source consulted.
4. **Stop at the buyer's own ceiling.** If the buyer's arithmetic produces a number that fails P2's F2.2 ROI screen, that is a disqualification result, not a prompt to inflate the inputs. **Inflating inputs to clear your own screen is the misrepresentation boundary of this framework.**

### F/43 — The Refusal-to-Quantify Protocol `[DERIVED — the brief's "what to do when they can't or won't"]`

When the buyer cannot or will not put numbers on the problem. Three distinct causes with different readings:

| Cause | Diagnostic signal | What it means | Documented handling |
|---|---|---|---|
| **Doesn't know** | wants to help, guesses wildly, no instrumentation exists | the operation is unmeasured — which is often the actual problem | offer a **bounded measurement engagement** (P4 F/35 Rung 2, paid audit): the deliverable is the number itself |
| **Won't say** | knows, deflects, protects negotiating position | procurement posture, or the number is embarrassing | switch to **ranges and public proxies** — P2's compliance-penalty route is the only class where a third party publishes the loss figure |
| **Can't be quantified** | the value is genuinely non-monetary (licence risk, board pressure, founder sanity) | Weiss' intangible/peripheral value | state it as a qualitative stake and **do not fabricate a monetary equivalent** |

**The fourth possibility, which the practitioner canon does not name:** the buyer will not quantify because there is no problem worth money. F/43's honest output includes "disqualify."

### F/44 — The JOLT Method `[PRACTITIONER — Dixon & McKenna 2022, 2.5M recorded calls]`

Reported verbatim in structure, with the corpus mapping added.

| Step | Content | Maps to |
|---|---|---|
| **J** — Judge the indecision | distinguish *fear of change* (status quo preference) from *fear of failure* (indecision); they require opposite responses | P5.2; P2 C2.3 |
| **O** — Offer a recommendation | stop presenting options and choices; make one clear recommendation | **direct collision with Enns' three-option rule — see C5.5** |
| **L** — Limit exploration | cap the buyer's information-gathering; take responsibility for what they need to know rather than answering every request | no corpus analogue |
| **T** — Take risk off the table | guarantees, bounded pilots, implementation plans, opt-outs | **P4's F/36 six bonds, exactly** |

**Two things to hold onto.** First, the **T** step is the same instrument set P4 arrived at independently from Spence's separating condition and Boulding & Kirmani's warranty finding — three independent routes to the same six clauses. That is the strongest cross-framework convergence in this pillar. Second, the **O** step contradicts the corpus's price architecture, and the contradiction is not reconcilable by preference; see §7.4's decision tree, which routes on indecision level.

### F/45 — The Price-Presentation Decision Tree `[DERIVED — composed from Enns, Weiss, JOLT, and four primaries]`

Fully specified in §7.4. Its five decision nodes: (1) has the value conversation happened? (2) is the buyer's indecision level high? (3) is the number verbal-range or written? (4) precise or round? (5) one option or three, and in what order?

### F/46 — Anchoring Under Asymmetry: the Four-Cell Read `[DERIVED — Galinsky & Mussweiler × Maaravi & Levy]`

The two primaries cross to give a table the corpus does not have. **Cells are mine; the axes and the two diagonal findings are the sources'.**

| | **Seller informed about buyer's economics** | **Seller uninformed** |
|---|---|---|
| **Buyer uninformed about market rates** | First offer favours seller (G&M) | Unstable — both parties anchoring on nothing |
| **Buyer well informed (procurement, prior quotes)** | Contested — G&M's advantage is available but eliminable by a buyer who focuses on your alternatives | **First offer favours the buyer (M&L, d ≈ 1.0–1.7). Do not open.** |

**Operational reading.** P2's A3 "prior quote" signal — treated there as a *positive* buying signal — is simultaneously the marker that moves the buyer into the bottom row. **Discovery Rung 1 (F/41) is the instrument that moves the seller from the right column to the left**, because it is precisely an inquiry into the buyer's alternatives. That is the tightest causal argument in this pillar for doing discovery before pricing, and it is my construction on top of two primaries, not a finding.

### F/47 — The Speed Decomposition `[from `claude-response3.md`, tested against evidence]`

The internal Claude doc's three-way split, with an evidence verdict on each. This is determination 3's spine.

| Component | Claim | Evidence status |
|---|---|---|
| **Responsiveness** (reply/turnaround speed) | always maximise; costs nothing; counters the offshore "goes quiet" fear | **Asserted, plausible, untested.** No source found on responsiveness→win rate in services. The "goes quiet" fear is real in the P3 offshore-trust literature but its cure is unmeasured. |
| **Delivery speed** (how fast it ships) | a genuine asset that must be priced, not given | **Partially supported.** Buell & Norton's labor illusion says invisible speed forfeits value; expedite-tier pricing is universal practice in logistics and creative services `[WEB/PRACTITIONER]` but **no source found prices an expedited tier for bespoke software.** |
| **Speed of committing** (how fast you promise in the room) | the only one to slow down | **Supported by two independent routes.** Enns Rule 1 ("the sooner in the sale you offer a price, the lower it is likely to be") `[PRACTITIONER]` and Weiss ("never quote before objectives and value are stipulated") `[PRACTITIONER]`; and F/46, since committing early is offering first while still in the right-hand column. |

**The attribution claim** — "fast because we've built it fourteen times and 60% already exists" beats "fast because it's simple" — is **asserted in the internal doc and directionally supported by Buell & Norton** (attributed, visible effort/capability raises valuation) but the specific reuse-attribution wording is tested nowhere. It is also P7's territory: the claim must be *true* or it is misrepresentation, and whether it is true is a reuse-percentage fact, not a sales choice.

### F/48 — The Timeline Commitment Language Set `[DERIVED — the ethics line is mine and argued]`

Fully specified in §7.6. The framework is a three-term distinction the internal docs conflate:

- **Capability** — what the team could do under favourable conditions. Never stated as a date.
- **Forecast** — the honest expected date given current knowledge, with its uncertainty stated. `"Based on what we know today, eight to ten weeks; after discovery we'll narrow it."`
- **Commitment** — the contractual date, equal to forecast plus a stated buffer, offered as the date the firm will be held to.

**The ethics line.** A buffer is **legitimate** when the committed date is presented *as a commitment* and the buffer exists to absorb identified uncertainty. It becomes **misrepresentation** when the buffer is presented *as the forecast* — i.e. when the seller says "this will take ten weeks" while believing it will take six, in order to harvest a delight effect. `chatgpt3.md`'s Agency B ("we'll deliver within 14 days," delivering in 7, to produce "wow") is on the wrong side of that line **and** is contradicted on its own terms by P5.9. Note the asymmetry: `chatgpt3.md`'s own preferred wording — *"our target delivery is two weeks... a professional forecast"* — is on the **right** side of the line. The doc's language is defensible; its stated mechanism is not.

### F/49 — The Objection Library `[SYNTHESIS — fully specified in §7.3]`

Eight objection families in a fixed six-column format: objection → what it usually means → documented response → mechanism → ethics label → source tier. The library's organising claim, inherited from P4: **for risk objections the response column contains a clause, not a sentence.**

### F/50 — Concession Discipline `[PRACTITIONER — Huthwaite; no formalism exists]`

Four rules, all practitioner-tier, no quantification located:

1. **Trade, never concede.** Every movement is conditional: *"if you can do X, then I can do Y."* Huthwaite's term is **conditional proposals**; the coding research's finding is that skilled negotiators trade across variables rather than moving on price.
2. **Plan issues, not sequence** (Rackham & Carlisle, P5.13): prepare each variable independently rather than a fixed order, so the order can follow the room.
3. **Suppress irritators and defend/attack** (P5.13, with numbers).
4. **Never counter-propose immediately.** Skilled negotiators avoid answering a proposal with a proposal.

**Explicit statement: there is no formula for concession size, concession decay, or reservation-price setting in any source consulted.** The commonly-repeated "decreasing concession pattern signals a limit" is folk practice; I found no test of it. §7.7 states this as a no-formalism zone rather than inventing one.

### F/51 — Trading Variables Inventory `[DERIVED — from P1's price architecture and P6's scope levers]`

What a young studio can trade *instead of* price. Each row is a variable whose value to the buyer exceeds its cost to the seller, or vice versa, making a trade possible.

| Variable | Cheap for seller when | Valuable to buyer when |
|---|---|---|
| Payment timing / deposit size | cash position is strong | cash is tight, or CFO wants milestone control |
| Scope depth (feature count) | reuse library covers the core | the extras are wishlist, not need |
| Timeline (standard vs expedited) | slack capacity exists | a seasonal or compliance date binds |
| Location/branch rollout order | all branches are similar | one branch is the political win |
| Training and handover depth | material is templated | internal team is thin |
| IP / source-code custody | you keep the reusable modules | lock-in fear is the live anxiety |
| Named reference / case-study rights | the result will be good | brand-shy buyer; **this is P4's `A_value` currency** |
| Support window length | the build is clean | the buyer fears abandonment |

**The last row is the most under-used and the corpus's own finding says so:** P4 scored the campaign's `A_value` at 0.23 precisely because reference rights were not contracted. Reference rights are a **tradeable variable**, and trading a discount for a named reference converts a margin loss into a credibility asset. `[DERIVED — mine; the A_value arithmetic is P4's]`

### F/52 — BATNA Discipline for a Seller Without Pipeline `[PRIMARY basis, derived application]`

Galinsky & Mussweiler's own mechanism: the anchoring advantage is eliminated when the receiving party **focuses on the offeror's alternatives, the offeror's reservation price, or their own target.** Read from the seller's side, this is a two-part instruction:

1. **Before the meeting, write down your walk-away and your target.** The primary evidence is that holding your own target in attention is one of the three things that neutralises the other side's anchor.
2. **A seller with no pipeline has no BATNA, and the buyer can often tell.** `claude-response3.md`'s observation that *"we can start Monday" signals slack capacity* is the same point in the internal corpus. **No source quantifies BATNA-weakness detection in services sales.** P4's F/39 (trigger-to-conversation chain) is the only instrument in the program that manufactures a BATNA, because a second live prospect is the only real one.

### F/53 — Procurement Interface `[PRACTITIONER + inherited C11, unresolved]`

P1's C11 (never expose an hourly rate vs procurement's rate-card mandate) is **not resolved here.** What was found:

- Enns' answer is Rule 6, **invoke a policy** — "policies trump wants every time" — plus a public argument that the debate is settled by the firm declining to participate `[PRACTITIONER, and P3's handoff warns this only reads as professional from a firm already accepted as a specialist practice: the Enns expertise premise, unevidenced in P1, P3 and now P5].`
- Weiss' answer is refusal plus reframing: never quote a time-unit basis; *"my fee represents my contribution to this project with a dramatic return on investment for you and equitable compensation for me"*; and resist comparison by pointing out the buyer's own operations differ from their competitors' `[PRACTITIONER]`.
- Huthwaite trains **both sides** of this table from the same behavioural research `[PRACTITIONER]`. The seller should assume a trained procurement counterpart is running conditional-proposal discipline and irritator suppression too.
- **What was not found:** any instrument that satisfies a rate-card requirement without creating the cost-plus lens. C11 stands open into P9.

### F/54 — Mutual Action Plan `[VENDOR evidence only]`

A jointly-authored, dated, two-column plan of what each side does between now and go-live, including the buyer's internal steps (legal, security, board paper, branch sign-off). Evidence: Outreach reports deals with a buyer-engaged MAP win at **26% higher rates**; RAIN reports a 47% baseline win rate across 472 sellers and executives. **All of it is vendor-originated, self-reported, and correlational — a MAP may be a marker of an engaged buyer rather than a cause of engagement.** Label `[VENDOR]` and treat as directional.

The MAP's non-obvious function for this pillar: it is the **L** of JOLT made into a document (it bounds what the buyer needs to explore by naming the remaining steps) and it is the only located instrument that addresses P5.12's consensus problem without requiring the seller to be in the room with all 11 stakeholders.

### F/55 — Conversation-Intelligence Benchmarks `[VENDOR — label on every use]`

Gong's corpus (519,000+ recorded discovery calls, analysed by their own models):

- Winning discovery calls: **talk-to-listen 46/54**; average performers talk **68%** of the time.
- **11–14 questions** per discovery call is the success band; struggling sellers asked ~20.
- Top performers covered **3–4 customer problems** and spread questions through the call rather than front-loading them.

**Three cautions that must travel with these numbers.** (i) Correlational — winners may talk less *because* an engaged buyer talks more, not the reverse. (ii) Population is Gong customers: mostly US B2B SaaS inside-sales teams, not cross-border bespoke-software founders selling to ops leaders. (iii) The vendor sells the software that measures the metric. **No peer-reviewed talk-ratio finding for B2B services was located.**

### F/56 — The Value-Mode Migration Test `[the framework P3 asked for; the answer is negative — see determination 2]`

P3's F/27 asks whether a seller can move a buyer from intrinsic/price mode to extrinsic/value mode within one sales cycle. Rackham & DeVincentis' *Rethinking the Sales Force* supplies the taxonomy (transactional / consultative / enterprise, indexed on how well-defined the buyer's needs are and how differentiated the offer is) `[PRACTITIONER]`. **What no source supplies is evidence that the migration can be performed by a seller inside a single cycle, at what rate, or at what cost in lost deals.**

What was found instead, and it is adjacent rather than on-point:
- Value-based-selling research in B2B (Terho/Haas/Eggert lineage; `Industrial Marketing Management` review 2023) treats value-based selling as a **seller capability with performance correlates**, not as a buyer-state transition, and the review's own framing is a "research agenda" — i.e. the field says this is not yet established `[PRIMARY-adjacent, review]`.
- One cross-sectional study of ~250 US firms reports value-based selling **mitigating** the negative effect of customer price sensitivity on provider profitability `[PRIMARY, cross-sectional]`. That is a moderation result at firm level over time, not a within-cycle mode change, and cross-sectional design cannot establish that the seller moved the buyer.
- Practitioner literature (Enns, Weiss) asserts the migration confidently and supplies no measurement. Weiss' four resistances (trust, need, urgency, budget) are a taxonomy of why it fails, not evidence that it succeeds.

**Verdict: F/27 is not proven and not killed — it is unmeasured, and the nearest evidence is a firm-level moderation finding that cannot bear the weight P3 needs.** Full statement in the session review.

---

## 3. Techniques (each with its trigger condition and ethics label)

Format: **T5.n — name** · *trigger* · content · `[tier]` · **label** · reason.

**T5.1 — Ask the alternatives question first.** *Trigger: any first substantive conversation.* "If we didn't exist, what would you do about this?" Produces reference band, frame, and BATNA read simultaneously. `[PRACTITIONER: Dunford; PRIMARY basis for the BATNA use: Galinsky & Mussweiler]` **legitimate** — it is an honest question whose answer belongs to the buyer.

**T5.2 — Hand the buyer the pen on the CoI arithmetic.** *Trigger: Rung 3.* Seller supplies structure and asks for every input. `[PRACTITIONER: SPIN, Weiss]` **legitimate** — the buyer owns the inputs and can revise them.

**T5.3 — Annualise and per-locate.** *Trigger: buyer states a per-shift or per-branch figure.* Multiply out loud, then ask the buyer to correct it. `[DERIVED from P2 A1]` **legitimate**, conditional on stating that the `× N` multiplication is an assumption — P2 verified the decision-chain denominator and **not** the linear numerator.

**T5.4 — Ask the anxiety question in discovery.** *Trigger: end of every discovery call.* "What would make you hesitate to hand this to an outside team?" `[PRACTITIONER: Moesta four forces; P4 F/37]` **legitimate**.

**T5.5 — Judge before you push.** *Trigger: buyer goes quiet or hedges late.* Establish whether the hesitation is fear-of-change or fear-of-failure before responding. `[PRACTITIONER: JOLT, 2.5M calls]` **legitimate**.

**T5.6 — Stop selling the problem when indecision is the diagnosis.** *Trigger: T5.5 returns fear-of-failure.* Do not re-run the case for change; 73% of reps do, and it raised loss probability in 84% of those cases. `[PRACTITIONER: JOLT]` **legitimate** — this is a technique of restraint.

**T5.7 — Make one recommendation to an indecisive buyer.** *Trigger: high indecision.* Replace the option set with a single named recommendation and a stated reason. `[PRACTITIONER: JOLT]` **legitimate**. **Collides with T5.13 — see C5.5.**

**T5.8 — Bound the buyer's exploration by naming what remains.** *Trigger: buyer requests a fifth reference, a third demo, another spreadsheet.* Take responsibility for the sufficiency of the information rather than supplying more. `[PRACTITIONER: JOLT "L"]` **grey** — restricting a buyer's information search is legitimate as advice and becomes misrepresentation the moment it withholds something material the buyer asked for. The boundary: you may say "you don't need that to decide"; you may not say "that doesn't exist."

**T5.9 — Answer risk objections with a clause.** *Trigger: any objection whose content is fear.* Convert to one of F/36's six instruments. `[PRACTITIONER: JOLT "T"; PRIMARY: Boulding & Kirmani]` **legitimate**, guarded by P3's T3.8: never offer a bond you could not honour.

**T5.10 — State a verbal range before writing anything.** *Trigger: end of the value conversation.* Enns Rule 4: "early objections are your friends and late objections are your enemies." `[PRACTITIONER]` **legitimate**.

**T5.11 — Do not put a number in the room before Rung 4.** *Trigger: buyer asks "roughly what does something like this cost?" in the first meeting.* Enns Rule 1; Weiss' conceptual-agreement precondition; F/46's asymmetry argument. `[PRACTITIONER × 2 + PRIMARY basis]` **legitimate** — deferring is not concealing, provided you say you are deferring and why.

**T5.12 — Use precise, not round, numbers.** *Trigger: any written figure.* AUD 47,500 rather than AUD 50,000. `[PRIMARY: Janiszewski & Uy 2008; Mason et al. 2013]` **grey→legitimate**: legitimate when the precision reflects real underlying arithmetic (P1's cost floor plus margin produces precise numbers naturally); **grey** when precision is manufactured to simulate rigour that was not performed. Note the expert-moderation caveat (Loschelder et al. 2019) and the relationship-damage caveat in Mason et al.

**T5.13 — Present three ranked options, most expensive first.** *Trigger: written proposal, buyer not in high indecision.* `[PRACTITIONER: Enns Rules 2–3]` **legitimate** as an architecture; **the decoy justification for it is not available** (Frederick, Lee & Baskin 2014). If the cheapest option is priced or scoped so as to be non-viable and exists only to make the middle look reasonable, that is **grey** — a decoy the seller would refuse to deliver is a fictitious option.

**T5.14 — Keep the proposal to one page and use it as a discussion guide.** *Trigger: proposal stage.* `[PRACTITIONER: Enns Rule 5]` **legitimate**.

**T5.15 — Invoke a policy rather than a preference.** *Trigger: buyer pushes on terms, rate card, or payment schedule.* `[PRACTITIONER: Enns Rule 6]` **legitimate iff the policy actually exists and is applied to other buyers.** A policy invented in the room to win a point is **misrepresentation** — this is the same boundary P4 drew for a scarcity claim (legitimate iff real and enforced). Inherits P3's warning that policy-invocation reads as professional from a specialist practice and as difficult from a generalist vendor.

**T5.16 — Change the comparison set instead of defending the price.** *Trigger: "a freelancer would do this for a fifth."* Move the reference to the salaried reconciler, the annual loss, or the incumbent SaaS bill. `[PRACTITIONER: P3 T3.2]` **legitimate** if the substituted comparison is one the buyer would recognise as genuinely comparable; **grey** if it substitutes an alternative the buyer never considered in order to inflate the band. **P3 C3.4 records this as untested and warns the origin penalty and the low-price quality penalty may compound rather than cancel.**

**T5.17 — Separate the value claim from the capability claim in compliance verticals.** *Trigger: regulated buyer (NDIS, aged care).* The statute establishes the value and needs no vouching; it establishes nothing about whether you can build the thing. `[P3 T3.13]` **legitimate** — and letting a buyer conflate them is **grey by omission.**

**T5.18 — Answer the youth objection with a structure, not an argument.** *Trigger: any question about team age, size, or history.* Milestone acceptance, escrow, source-code custody, short bounded first engagement. `[P3 T3.19; PRIMARY: Boulding & Kirmani]` **legitimate**. The boundary both internal docs already drew: **stating or implying a headcount you do not have is misrepresentation.** Recorded, not re-litigated.

**T5.19 — Suppress irritators.** *Trigger: always.* Delete "generous," "fair," "world-class," "market-leading," "reasonable" from proposals and speech. Skilled negotiators: 2–3/hour vs 10–11. `[PRACTITIONER-PRIMARY: Rackham & Carlisle]` **legitimate**.

**T5.20 — Never counter-propose immediately.** *Trigger: buyer makes a proposal.* Label and question it first. `[PRACTITIONER-PRIMARY: Rackham & Carlisle]` **legitimate**.

**T5.21 — Trade conditionally, never concede.** *Trigger: any price pressure.* "If X, then Y." `[PRACTITIONER: Huthwaite]` **legitimate**.

**T5.22 — Trade a discount for reference rights.** *Trigger: buyer wants a lower number and the build will go well.* `[DERIVED — mine, on P4's A_value arithmetic]` **legitimate**, and requires P9's testimonial-consent instrument to be real.

**T5.23 — Show the work.** *Trigger: any moment the buyer would otherwise experience the delivery as effortless.* Operational transparency raised valuation ~8% in five experiments. `[PRIMARY: Buell & Norton 2011]` **legitimate** — with the source's own warning that transparency makes **bad** outcomes look worse, so this technique is a bet on delivery quality.

**T5.24 — Attribute the speed to a cause.** *Trigger: buyer remarks that the timeline seems short.* "60% of this already exists because we've built it before" rather than "it's simple." `[ASSERTED: `claude-response3.md`; directionally supported by Buell & Norton]` **legitimate iff the reuse claim is true** — the percentage is a P7 fact. A reuse figure stated without measurement is **misrepresentation**, and it is a *load-bearing* one because it is also the mechanism by which the seller later justifies a longer timeline on a non-reusable project.

**T5.25 — Price speed as a tier.** *Trigger: buyer has a date-bound driver (season, compliance, acquisition).* Standard vs expedited at a stated premium. `[ASSERTED: `claude-response3.md`; practice-universal in adjacent industries; no software-services evidence]` **legitimate** — an honestly priced optional service. Note: it is also the cleanest available answer to P5.10, because a price on speed makes the effort visible without lying about the date.

**T5.26 — Commit to a buffered date, forecast an honest one, never state a capability as a date.** *Trigger: any timeline question.* F/48's three-term set. `[DERIVED; the ethics line is mine]` **legitimate** at the commitment/forecast distinction; **misrepresentation** if the buffer is presented as the forecast.

**T5.27 — Deliver early as an event, not as a pattern.** *Trigger: work finishes ahead of the committed date.* `[ASSERTED by both internal docs]` **grey.** P5.9's meta-analysis removes the satisfaction rationale (no contrast effect), and P4's Mela et al. finding (promotion depth ratchets expectations) suggests systematic early delivery resets the baseline — the same ratchet `claude-response3.md` warns about. **Delivering early is not the grey part; engineering the gap in order to deliver early is.**

**T5.28 — Write the mutual action plan with the buyer, including their internal steps.** *Trigger: post-proposal, pre-signature.* `[VENDOR: Outreach 26%]` **legitimate**.

**T5.29 — Ask who else has to be comfortable, and what they need.** *Trigger: any multi-branch or 5M+ buyer.* Miller Heiman's four buying influences (Economic, User, Technical, Coach). `[PRACTITIONER]` **legitimate**.

**T5.30 — Treat "send me a proposal" as a yellow light.** *Trigger: the phrase.* Practitioner-consensus reading: it is frequently a brush-off rather than an objection. Documented handling is to convert it into a scheduled review of a draft rather than a delivered document. `[PRACTITIONER/WEB consensus; no measurement located]` **legitimate**.

**T5.31 — Convert an unqualifiable buyer into a paid audit rather than a free proposal.** *Trigger: F/43 returns "doesn't know."* `[P4 F/35 Rung 2; Sierra practitioner case: 10–20% of contract value, 40 names screened to 6, 100% conversion]` **legitimate**. **P4's Gate 3 — whether to credit the audit fee against the build — remains unresolved and is a sales-conversation decision.**

**T5.32 — Take the deposit before delivery begins, and say why.** *Trigger: contracting.* Prospective accounting: payment before consumption is associated with greater enjoyment of the consumption. `[PRIMARY: Prelec & Loewenstein 1998, on consumer goods]` **grey** — the mechanism is real but the transfer to B2B project work is untested, and the move runs against the buyer-protective direction of F/36's milestone bond. See C5.9.

**Excluded by inheritance, recorded so the exclusion is visible:**
- **Door-in-the-face** (large ask then real ask). Excluded: P4 P4.12, verbal compliance without behavioural compliance.
- **Manufactured urgency** (a deadline that does not exist, or resets). Excluded as **misrepresentation** per P4 T4.18.
- **Headcount inflation.** Excluded as **misrepresentation**; both internal docs already rejected it.

---

## 4. Hacks (asymmetric, low-effort)

**H5.1 — The anxiety question on the application form.** One extra field on P4's existing intake instrument generates the objection library from real buyer language at zero marginal cost. Cheapest instrument in the program (P4's own assessment; carried forward unchanged).

**H5.2 — Ask "what did the last quote say?"** P2 lists a prior quote as a buying signal. It is also a free read on the buyer's reference price and — via F/46 — a warning that the seller has moved into the row where opening first is costly.

**H5.3 — Record and count your own talk ratio.** No software needed; a phone timer and a tally. Even if Gong's 46/54 is correlational, measuring your own ratio costs nothing and is the only self-diagnostic in this pillar available for free.

**H5.4 — Delete five words from every proposal.** "Generous," "fair," "world-class," "market-leading," "reasonable." Rackham & Carlisle's irritator finding, applied with find-and-replace.

**H5.5 — Use the buyer's own artefact as the CoI worksheet.** The coping spreadsheet P2 lists as a conscious-loss signal is already the instrument; asking to open it in the meeting converts a discovery question into a co-computation, and it is P4's F/34-step-2 baseline measurement obtained for free at the exact moment it is still recoverable.

**H5.6 — Publish the ROI floor.** P2's H2.6 already argues this for qualification. In the conversation it does double duty: it is the policy T5.15 invokes, and it exists in writing before the buyer arrives, which is what makes the invocation truthful.

**H5.7 — One-page proposal as a live document.** Enns Rule 5. The asymmetry: a one-page document is cheap to revise in the room, which converts a proposal from a submission into the discussion T5.30 wants.

**H5.8 — Name the regulator instead of vouching for yourself.** In compliance verticals the loss figure is published by a third party (P2 §7.5: NDIS penalties to AUD 15M+ where a participant is harmed; Aged Care Act 2024 penalty units). The only class of buyer where a studio with no logos can make an unarguable value claim.

**H5.9 — Ask the buyer to write the success criterion.** One sentence, in their words, in the proposal. Cheap; it is simultaneously Weiss' measures step, P6's acceptance gate, and P4's checkable-number source.

---

## 5. Ethics Labels

Every technique named in this pillar, labelled. Reason lines are one line each. **These labels are argued judgements, not findings** — the same caveat P4 attached to its own labels.

### 5.1 Legitimate (22)

| # | Technique | Reason |
|---|---|---|
| T5.1 | Alternatives question | An honest question; the answer is the buyer's own |
| T5.2 | Buyer-computed CoI | Buyer owns and can revise every input |
| T5.3 | Annualise and per-locate | Legitimate *conditional on* naming the `× N` as an assumption |
| T5.4 | Anxiety question | Elicits objections rather than pre-empting them |
| T5.5 | Judge the indecision | Diagnostic, not persuasive |
| T5.6 | Stop selling when indecision is diagnosed | Restraint cannot mislead |
| T5.7 | Single recommendation to indecisive buyer | Advice openly given as advice |
| T5.9 | Answer risk with a clause | A real obligation, honourable |
| T5.10 | Verbal range before written | Surfaces objections early; conceals nothing |
| T5.11 | No number before the value conversation | Deferring while saying you are deferring |
| T5.14 | One-page proposal | Format choice |
| T5.15 | Invoke a policy | **Iff the policy exists and is applied to others** |
| T5.17 | Separate value from capability claim | Prevents a conflation that would favour the seller |
| T5.18 | Structural answer to the youth objection | Bonds instead of arguments; no claim about team made |
| T5.19 | Suppress irritators | Subtraction |
| T5.20 | No immediate counter-proposal | Listening discipline |
| T5.21 | Conditional trading | Both sides see the condition |
| T5.22 | Discount for reference rights | An explicit exchange of stated value |
| T5.23 | Show the work | True information about real effort |
| T5.25 | Priced speed tier | An honestly priced optional service |
| T5.28 | Mutual action plan | Joint, written, symmetric |
| T5.29 / T5.30 / T5.31 | Buying-influence mapping · yellow-light handling · paid audit | Qualification, openly conducted |

### 5.2 Grey (7)

| # | Technique | Where it turns |
|---|---|---|
| T5.8 | Limit exploration | Legitimate as advice ("you don't need that to decide"); misrepresentation as concealment ("that doesn't exist") |
| T5.12 | Precise numbers | Legitimate when precision reflects real arithmetic; grey when manufactured to simulate rigour |
| T5.13 | Three ranked options | Grey if the low option is one the seller would refuse to deliver — a fictitious option is a lie about the choice set |
| T5.16 | Change the comparison set | Grey if the substituted alternative is one the buyer would not recognise as comparable |
| T5.27 | Deliver early | Grey when the gap is engineered in order to produce the delight |
| T5.32 | Front-loaded deposit for the coupling effect | Mechanism untested in B2B; and it moves risk toward the buyer while being justified by buyer psychology |
| — | Attributed reuse figures stated approximately ("most of this exists") | Grey while unmeasured; becomes misrepresentation the moment a number is attached without measurement |

### 5.3 Misrepresentation — excluded (6)

| Technique | Why it is over the line |
|---|---|
| Headcount / team-size inflation | A false statement of fact about capability. **Boundary recorded; both internal docs already rejected it; not re-litigated.** |
| Manufactured urgency — deadlines that do not exist or that reset | A false statement of fact about the offer's availability (P4 T4.18) |
| Buffer presented as forecast | Stating a date you believe is wrong, to harvest a delight effect. **F/48's line. This is the boundary the internal docs do not draw.** |
| Reuse percentage asserted without measurement | A false statement of fact about the production method, and load-bearing for later timeline claims (T5.24) |
| A policy invented in the room | A false statement of fact about the firm's practice (T5.15's inverse) |
| A bond that could not be honoured | P3 T3.8 / P4's F/36 T-guard: misrepresentation with a contract attached |

### 5.4 Counts

| Label | Count |
|---|---|
| **Legitimate** | 22 |
| **Grey** | 7 |
| **Misrepresentation (excluded)** | 6 |
| **Excluded on efficacy rather than ethics** | 1 (door-in-the-face) |

### 5.5 The two boundary findings this pillar adds

1. **The professional buffer becomes a misrepresentation of capability at the point where the buffered number is presented as the forecast rather than as the commitment.** Every construction and engineering firm buffers; that is `claude-response3.md`'s defence and it is correct. What those firms do *not* do is describe the buffered date as their expected date. The distinction is linguistic and it is the whole line. Notably, `chatgpt3.md`'s recommended *wording* ("our target delivery is two weeks... a professional forecast") sits on the legitimate side while its stated *mechanism* (Agency B engineering a "wow") sits on the other. The doc contradicts itself and does not notice.
2. **Manufactured urgency has a legitimate twin that the corpus already owns.** P4's F/38 Track B is a *dated, capacity-bounded activation window*. Real capacity limits stated honestly are legitimate and are the strongest form of urgency available to a two-founder studio, because the constraint is true.

---

## 6. Terms

| Term | One line |
|---|---|
| **BATNA** | Best alternative to a negotiated agreement; the value of walking away |
| **Buying influence** | Miller Heiman's four roles: Economic, User, Technical, Coach |
| **Capability / forecast / commitment** | F/48's three timeline terms; only the last is contractual |
| **Category entry point (CEP)** | Ehrenberg-Bass; the buying situation that triggers recall (inherited P3/P4) |
| **Coupling** | Prelec & Loewenstein; how salient payment is during consumption |
| **CoI (cost of inaction)** | The annualised cost to the buyer of continuing as-is |
| **Conceptual agreement** | Weiss; objectives + measures + value, agreed before any fee is named |
| **Conditional proposal** | Huthwaite; movement offered only in exchange ("if X, then Y") |
| **Decoy / attraction effect** | A dominated third option shifting choice; robustness limited to numeric stimuli (FLB 2014) |
| **DITF (door-in-the-face)** | Large ask then real ask; excluded (P4 P4.12) |
| **Expectancy-disconfirmation** | The 40-year satisfaction paradigm; assimilation vs contrast predictions |
| **FOMU** | Fear of messing up; indecision as distinct from status-quo preference |
| **Implication question** | SPIN; a question that makes the buyer state the size of the problem |
| **Irritator** | Rackham & Carlisle; a self-praising or condescending phrase with no persuasive function |
| **JOLT** | Judge, Offer recommendation, Limit exploration, Take risk off the table |
| **Labor illusion** | Buell & Norton; visible effort raises perceived value |
| **λ (lambda)** | Prospect theory's loss-aversion coefficient; conventionally ≈2.25; contested |
| **MAP (mutual action plan)** | Jointly authored dated plan of both sides' remaining steps |
| **No-decision** | An opportunity that closes with neither purchase nor competitive loss |
| **Pain of paying** | Zellermayer/Loewenstein; the negative affect of the payment act itself |
| **Prospective accounting** | Payment before consumption increases enjoyment of consumption |
| **Reservation price** | The worst number a party will accept |
| **Sandbag** | A commitment deliberately set below believed capability to manufacture over-delivery |
| **SPIN** | Situation, Problem, Implication, Need-payoff |
| **Talk-to-listen ratio** | Share of speaking time; Gong's winning discovery figure is 46/54 `[VENDOR]` |
| **Value mode** | Rackham & DeVincentis; intrinsic/extrinsic/strategic — a buyer *state*, not a trait |

---

## 7. Formulas and Instruments

> **Statement required by the brief.** Most of this pillar has **no legitimate formalism**, and considerably less than P1 had. There is **no published formula** for: question sequencing, objection handling, concession size or decay, reservation-price setting, talk-ratio optimum, price-presentation timing, timeline buffer magnitude, or value-mode migration. I have not invented formulas for those. What follows is: **three genuine published formulas** (§7.7 items 1–3), **one arithmetic worksheet** (§7.2 — arithmetic, not a formalism), **five structured instruments** (§7.1, §7.3, §7.4, §7.5, §7.6), and an explicit no-formalism register (§7.8). Where a number appears without a source it is a prior of mine and it says so.

### 7.1 — The Discovery Question Set, built on the competitive-alternatives table

Runs top to bottom. The right column names what each answer feeds. **Rungs and ordering: SPIN (practitioner-primary). Rung 1 block: P3 §6.1 row 1. Rung 5: P4 F/37. Composite unvalidated.**

```
BEFORE THE CALL
  [ ] Written down: our target number, and our walk-away.
      (Galinsky & Mussweiler: holding your own target in attention is one of
       three things that neutralises the other side's anchor.)
  [ ] Trigger date identified (P2 F2.9 / P4 F/39): what happened recently
      that makes this live now?
  [ ] Artefact in hand (P4 F/39): the falsifiable public thing about THEIR
      situation. Approach without one = Enns' bottom rung.

RUNG 0 — SITUATION  (target: 3-4 questions, not more)
  1. Walk me through how [the process] actually runs today, in one branch.
  2. And how does that differ at your other locations?
  3. Who touches it? What does each person do?
  4. What do you use to keep track — can we open it?      → H5.5; P4 F/34 step 2
                                                            baseline, recoverable
                                                            ONLY before kickoff

RUNG 1 — ALTERNATIVES  (the spine; P3 §6.1 row 1)
  5. If we didn't exist, what would you do about this?      → reference band
  6. Has anyone quoted you for this before? What did it say? → H5.2; F/46 row read
  7. Have you looked at [named SaaS] / a freelancer / hiring someone?
  8. What would it cost to hire a person to do this manually? → P1 EVE step 1
  9. What happens if you do nothing for another year?        → status-quo price
                                                              (row 1 of the CoI sheet)

RUNG 2 — PROBLEM  (Gong: 3-4 problems, not more)  [VENDOR]
 10. Where does the current arrangement break down first?
 11. When it breaks, who finds out, and how?
 12. What has it already cost you — has there been an incident?
     → P2 conscious-loss evidence: coping spreadsheet, hired reconciler,
       prior quote. If NONE of the three is present, the loss is not conscious
       and P2's screen says this is a weaker buyer.

RUNG 3 — IMPLICATION  (hand over the pen: §7.2)
 13. How often does that happen? — buyer states frequency
 14. When it happens, how long does it take to fix? — buyer states hours
 15. Who fixes it, and what does that person cost you? — buyer states rate
 16. Across [N] branches, that's ___ a year. Is that roughly right,
     or am I over/understating it?          ← the buyer must correct you
 17. Is there a compliance or licence exposure in this? → H5.8; if regulated,
     the loss figure is published by a third party and needs no vouching

RUNG 4 — NEED-PAYOFF / VALUE  (Weiss: objectives → measures → value)
 18. If this were fixed, what changes for you personally?
 19. How would you know it worked? Write me the one sentence.   → H5.9
 20. What's that worth to the business over a year?
     → the number P1's fee is set against. Apply P2 F2.2's ROI screen HERE,
       silently. If it fails, F/43's fourth outcome (disqualify) applies.

RUNG 5 — ANXIETY  (the addition; P4 F/37)
 21. What would make you hesitate to hand this to an outside team?
 22. What's the worst version of how this goes?
 23. Who else has to be comfortable with this before it happens?  → T5.29;
     P5.12 vs P2's short-chain thesis is unresolved (C5.11) — ASK, don't assume
 24. If it went wrong, what would that mean for you?     → FOMU, in their words

CLOSE OF DISCOVERY
  [ ] Verbal range stated? (T5.10, Enns Rule 4)  — range, not number
  [ ] Mutual action plan started? (F/54)
  [ ] Talk ratio self-tallied? (H5.3)  Target 46/54  [VENDOR, correlational]
  [ ] Question count: 11-14 is the vendor success band; 20+ is the
      laggard signature  [VENDOR, correlational]
```

**Question count check.** The set above contains 24 prompts against Gong's 11–14 band. That is deliberate and it is a **conflict, not an oversight**: Gong's band is measured on SaaS inside-sales discovery calls of 30–45 minutes, while the set above spans what Sierra's documented practice calls a 60–90 minute kickoff discovery `[PRACTITIONER, single case]`. **Either the set is too long or the band does not transfer, and nothing found adjudicates.** Recorded as C5.13.

### 7.2 — Cost-of-Inaction Worksheet (the buyer fills this in, with you)

`[DERIVED — this is arithmetic, not a published formula. The structure is SPIN's Implication logic and P2's A1 multiplication. The multiplication's linear form is NOT verified in any source (P2's caveat).]`

```
COST OF INACTION — worksheet
Buyer: ________________  Date: ________  Locations (N): ______
Every figure below is stated by the buyer or read off a buyer document.
Seller writes nothing the buyer has not said.

A. RECURRING LABOUR LEAK
   A1  Task that shouldn't need doing:        ______________________
   A2  Hours per occurrence                   ______  (buyer)
   A3  Occurrences per month                  ______  (buyer)
   A4  Fully-loaded hourly cost of the person ______  (buyer)
   A5  Per location per year   = A2 x A3 x A4 x 12      = ________
   A6  Across N locations      = A5 x N                 = ________
       ⚠ ask: "does this scale linearly across branches, or not?"

B. ERROR / REWORK COST
   B1  Error type:                            ______________________
   B2  Incidents per month (all locations)    ______  (buyer)
   B3  Average cost per incident              ______  (buyer)
   B4  Annual  = B2 x B3 x 12                           = ________

C. DECISION-LATENCY COST     (often the real multi-branch cost)
   C1  Decision that waits on data:           ______________________
   C2  Days of delay per cycle                ______  (buyer)
   C3  Cycles per year                        ______  (buyer)
   C4  Cost per day of delay                  ______  (buyer — often "don't know";
                                                       if so leave blank, do NOT
                                                       supply an estimate)
   C5  Annual  = C2 x C3 x C4                           = ________

D. HEADCOUNT ALREADY SPENT COPING     (P2's "hired reconciler" signal)
   D1  Role(s) existing only because of this: ______________________
   D2  Annual fully-loaded cost                          = ________
       ⚠ P2 §note: integration upkeep and manual reporting are UNBUDGETED
         and therefore appear as headcount rather than software spend.
         This row is often the largest and the buyer rarely volunteers it.

E. FOREGONE / AT-RISK REVENUE
   E1  What can't happen because of this:     ______________________
   E2  Buyer's own estimate of annual value              = ________
       (label as buyer estimate; do not firm it up)

F. REGULATORY / LICENCE EXPOSURE     (only if applicable)
   F1  Instrument and published penalty:      ______________________
   F2  Buyer's own assessment of likelihood   ______%
   F3  Expected annual exposure = penalty x F2           = ________
       ⚠ This is the ONE row where the figure comes from a third party
         (statute) rather than from the buyer or the seller. P2 §7.5.
       ⚠ Do NOT compute F3 for the buyer if they decline to state F2.
         A published maximum penalty presented as an expected cost is
         MISREPRESENTATION.

   ANNUAL COST OF INACTION (sum, showing blanks as blanks) = __________
   Rows left blank: ______   Rows that are buyer estimates: ______

CROSS-CHECKS
   [ ] P2 F2.2 ROI screen: is CoI >= (P1 target fee) x (screen multiple)?
       P2's A5 proposes ~5x. P2's OWN F2.3 finding: at P1's worked pricing,
       BOTH archetypes fail the 5x screen (1.3x and 1.2x headroom), and 5x
       would require 19-27 locations against A4's stated 5-50 band.
       → C2.6 / C2.7 are UNRESOLVED. Record the multiple you actually used.
   [ ] Reference band from §7.1 Rung 1: does the fee sit inside it?
       P1 P1.6 / P4 C4.12: near the bottom -> quality doubt;
       near the top -> monetary-sacrifice concern. Record which risk you took.
   [ ] Did the buyer correct at least one of your restatements? If not, the
       buyer has not engaged with the arithmetic and the number is yours,
       not theirs — which forfeits the entire mechanism.
```

### 7.3 — The Objection Library

Format per row: **objection → what it usually means → documented response → mechanism → ethics label → source tier.** Eight families. Where the response column contains a clause rather than a sentence, it is marked **[CLAUSE]** — that is P4's inherited finding (I1) made visible.

#### Family 1 — PRICE

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "That's more than we expected." | The reference price was set by a different alternative than the one you are competing with | Return to Rung 1: "what were you comparing it to?" Then change the comparison set to the salaried role, the annual loss, or the incumbent bill | Reference-price substitution (P3 T3.2) | **legitimate** if the substituted alternative is genuinely comparable; **grey** otherwise | PRACTITIONER; **P3 C3.4 records this as untested and warns the origin penalty and low-price quality penalty may compound** |
| "A freelancer would do this for a fifth." | True, and the buyer knows the freelancer carries different risk | Do not defend the price. Name the difference in *risk borne*, then attach a bond that the freelancer cannot: milestone acceptance, source-code custody, bounded guarantee **[CLAUSE]** | Warranty as a signal; strongest precisely for sellers lacking reputation | **legitimate** | PRIMARY (Boulding & Kirmani 1993, *JCR* 20(1):111–123) + PRACTITIONER |
| "Can you do it for X?" | A trade is available | Conditional proposal only: "if you can move to 50% on signature / drop features 4–6 / give us a named reference, then yes" | Trading not conceding; F/51's inventory | **legitimate** | PRACTITIONER (Huthwaite) |
| "Just give me an hourly rate." | Procurement posture, or genuine mandate | Enns Rule 6, invoke the policy; Weiss' refusal-plus-reframe. **No instrument was found that satisfies a genuine rate-card mandate without creating the cost-plus lens.** | Policy invocation | **legitimate iff the policy exists and is applied to others**; otherwise **misrepresentation** | PRACTITIONER; **P1 C11 unresolved, hands to P9** |
| "Your cheapest option is fine." | Either a real budget ceiling or the low option is doing its job | Deliver it as specified. **If the low option is one you would refuse to deliver, it should not have been on the page** | Choice-set honesty | **grey→misrepresentation** if the option was decorative | DERIVED; the decoy justification is weakened by PRIMARY (Frederick, Lee & Baskin 2014, *JMR*) |
| "We only have budget in the next FY." | Timing, or a soft no | Ask which. Then either a bounded paid audit now (P4 F/35 Rung 2) or a dated re-approach tied to their trigger | Rung-laddering | **legitimate** | PRACTITIONER (Sierra case) |

#### Family 2 — TRACK RECORD

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "Have you done this before?" | Testing whether the answer will be honest | Answer literally, then substitute the credibility item you actually hold: working demonstration on the buyer's own data > case study with figures > reference > testimonial | Demonstration beats description; verbal descriptions produce *larger* origin penalties than a product present, and single cues larger penalties than multiple cues | **legitimate** | PRIMARY (Peterson & Jolibert, via P3) |
| "Who else in our industry do you work with?" | Wants a peer signal | If none: say so, then offer a bond in place of the reference — bounded pilot, payment on acceptance **[CLAUSE]** | Spence's separating condition: cheap if good, expensive if bad | **legitimate** (T-guard: never a bond you could not honour) | PRIMARY (Spence) + P3 §6.2 |
| "Can we talk to a past client?" | Reference check | Provide, or state plainly that you cannot yet and substitute. **P4's finding: reference rights must be *contracted* during delivery or they do not exist** | — | **legitimate**; fabricating or coaching a reference is **misrepresentation** | P4 F/34 |
| "You won a hackathon — that's not the same thing." | Correct | Concede it. The hackathon is externally administered proof **of build skill, not of delivery reliability**, and it may reinforce the "clever students" reading | Signal specificity | **legitimate**; presenting it as delivery evidence is **grey** | P3 C3.17 |

#### Family 3 — OFFSHORE

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "We'd rather use someone local." | Fear of going dark, timezone friction, and country-of-origin discount | Multiple independent cues plus a working demonstration, not a verbal reassurance | Peterson & Jolibert: multiple cues reduce origin penalty; a present product reduces it more than description | **legitimate** | PRIMARY, via P3; **P3 C3.12 warns the COO effects were measured on consumer products** |
| "How do we know you won't go quiet?" | The buried offshore fear | A cadence commitment in writing: weekly standup, persistent channel, named contact **[CLAUSE]** | Structural, not rhetorical | **legitimate** | PRACTITIONER (Sierra cadence: 60–90 min kickoff, weekly 30-min standups, persistent channel) |
| "What about our data / privacy?" | Real, and in PH↔AU a genuine legal question | Data residency and Privacy Act / DPA terms in the contract **[CLAUSE]** | — | **legitimate** | Hands to **P8 and P9** |
| "Your price is low — what's the catch?" | The origin penalty and the price-quality inference compounding | This is the C4.12 band problem, not an objection with a talk track | Both ends of the range damage quality perception | — | PRIMARY (Gorn et al.; Monroe/Rao) — **unresolved, I2** |

#### Family 4 — YOUTH / FIRM SIZE

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "How big is your team?" | Continuity risk | Answer truthfully. Then bonds: source-code custody, documentation-as-deliverable, milestone acceptance **[CLAUSE]** | Liability of newness is about trust between strangers over time; the antidote is structure | **legitimate**. **Inflating the number is misrepresentation — boundary recorded, both internal docs already rejected it** | P3 T3.19 |
| "You're very young." | Same fear, stated as the observable | Do not argue about age or talent. Shorten the first commitment: bounded first engagement with a defined exit | Small first loss ceiling | **legitimate** | P3 T3.19 + JOLT "T" |
| "What if you get hit by a bus?" | Bus-factor of two | Escrow / repository access / handover clause **[CLAUSE]** | — | **legitimate** | P3 §6.2 |
| "Aren't you students?" | Category assignment | The category answer is P3's, not a talk track. **P3 C3.15: the internal corpus contains two different specialisations and does not notice they conflict** | — | — | P3, unresolved |

#### Family 5 — TIMING

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "Not right now." | Either no trigger or fear of failing | **Judge first (T5.5).** If no trigger: date a re-approach to their trigger. If fear: this is FOMU, go to Family 8 | JOLT "J" | **legitimate** | PRACTITIONER (2.5M calls) |
| "Let's revisit next quarter." | Frequently a soft no | Ask what will be different then, and write it into the MAP. If nothing will be different, it is a no | — | **legitimate** | PRACTITIONER |
| "We're too busy to start now." | Real capacity constraint on the *buyer's* side | Reduce the buyer's implementation load in the proposal, and say what you will do instead of them | Effort reduction | **legitimate** | DERIVED |
| "We need it before [date]." | The expedited-tier trigger | T5.25: standard vs expedited at a stated premium | Price on speed makes effort visible without lying about the date | **legitimate** | ASSERTED (`claude-response3.md`); **no software-services evidence for the premium level** |

#### Family 6 — "SEND ME A PROPOSAL"

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "Send me a proposal." | Practitioner consensus: frequently a polite exit, not a buying signal | Convert to a scheduled review of a one-page draft: "I'll draft one page — can we walk through it Thursday?" | Enns Rule 5 (proposal as discussion guide); avoids the un-reviewed document | **legitimate** | PRACTITIONER/WEB consensus; **no measurement located** |
| "Just email me pricing." | Wants to compare on price alone — intrinsic value mode | The verbal range (T5.10) rather than a document. **Whether this can be migrated to value mode is F/56 / determination 2: unmeasured** | Enns Rule 4 | **legitimate** | PRACTITIONER; migration **unevidenced** |
| "We need it in our RFP format." | Procurement Paper Process | P2's C2.4: this is a *positioning* consequence — the category you claim determines whether you meet a Technical Buyer and a Paper Process | — | — | P2, unresolved |

#### Family 7 — INTERNAL BUILD / INCUMBENT

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "Our IT team could build this." | Sometimes true; usually an opportunity-cost question the buyer has not priced | Rung 1 row "internal IT build," priced: salary-months, opportunity cost, and the maintenance tail | Competitive-alternatives pricing | **legitimate** | P3 §6.1 |
| "We already pay for [SaaS]; can't it do this?" | Genuine uncertainty about their own stack | Ask them to show you. **P2's most useful transferable finding: integration upkeep and manual reporting are unbudgeted, which is why they appear as headcount rather than software spend** — worksheet row D | — | **legitimate** | P2 |
| "The vendor says they'll build it in the next release." | Roadmap deferral — the classic no-decision generator | Ask for the dated commitment in writing from the vendor. If it does not exist, the alternative is not real | JOLT "L": bound exploration by naming what would settle it | **legitimate** | PRACTITIONER |
| "We'd rather wait and do it properly / all at once." | Status-quo preference (the 44%), not indecision | This is the one family where intensifying the case for change is *correct*. **Judge first** | JOLT "J" | **legitimate** | PRACTITIONER (2.5M calls) |

#### Family 8 — "WE'LL THINK ABOUT IT" / THE NO-DECISION FAMILY

**This family is the pillar's centre of gravity and its response column is almost entirely clauses.**

| Objection | What it usually means | Documented response | Mechanism | Label | Tier |
|---|---|---|---|---|---|
| "We'll think about it." | Undiagnosed. **Do not respond until judged.** | T5.5: is this fear-of-change or fear-of-failure? | JOLT "J" | **legitimate** | PRACTITIONER |
| "I need to think it through." + asks for more information | Fear of failure (FOMU) presented as diligence | **Do not supply more.** Limit exploration; name what remains; make one recommendation | JOLT "L" + "O". **73% of reps re-litigate the status quo here; in 84% of those cases it increased loss probability** | **legitimate**; **grey** if limiting slides into withholding something material | PRACTITIONER (2.5M calls) |
| "What if it doesn't work?" | The FOMU question, stated plainly | Bounded outcome guarantee, or payment on acceptance, or a paid pilot with a stated exit **[CLAUSE]** | JOLT "T" = F/36 rows 5, 3, 6 | **legitimate** (T-guard) | PRACTITIONER + PRIMARY (Boulding & Kirmani) |
| "What if we pick wrong?" | Personal career risk, not company risk | Milestone acceptance gates: the buyer controls continuation, so no single decision is irreversible **[CLAUSE]** | F/36 row 2 | **legitimate** | P4 F/36 |
| "I need to socialise this internally." | Consensus constraint (P5.12) | Write the MAP with them, including *their* internal steps; ask who else must be comfortable and what each needs | F/54 + Miller Heiman | **legitimate** | VENDOR (26%, self-reported) + PRACTITIONER |
| "Can you hold this price / can we just do a small piece first?" | The Skeptic-Mobilizer asking for a small win | Give them the small win. **Three independent lines converge here** — Challenger's Skeptic ("changes require small wins first"), JOLT's paid-pilot de-risking, and Spence's separating condition | Small first loss ceiling | **legitimate** | P2 + P4, triple convergence |
| Silence / ghosting | Frequently the same fear, unspoken | The pre-agreed MAP date is the only non-pressuring re-entry instrument located | — | **legitimate**. A fabricated deadline used to re-open is **misrepresentation** | VENDOR + P4 T4.18 |

**What the library deliberately does not contain.** No door-in-the-face sequence (I5). No manufactured deadline. No "assumptive close," "alternative close," or "takeaway close" — **Rackham's own finding is that closing techniques correlate with success in small sales and with *failure* in large ones** `[PRACTITIONER-PRIMARY, unreplicated]`, and no source was found that rehabilitates them for high-value services.

### 7.4 — Price-Presentation Decision Tree

```
                      ┌─────────────────────────────────────────┐
                      │ Has the VALUE conversation happened?    │
                      │ (Rung 4 answered; CoI computed BY buyer)│
                      └───────────────┬─────────────────────────┘
                          NO          │          YES
              ┌───────────────────────┘          └──────────────────┐
              ▼                                                      ▼
  ┌───────────────────────────────┐              ┌────────────────────────────────┐
  │ DO NOT PRICE.                 │              │ Judge indecision level (T5.5)  │
  │ Enns R1: "the sooner in the   │              └───────────┬────────────────────┘
  │ sale you offer a price, the   │                  HIGH    │    LOW/MODERATE
  │ lower it is likely to be."    │        ┌────────────────┘    └──────────────┐
  │ Weiss: never before objectives│        ▼                                     ▼
  │ + value are stipulated.       │  ┌──────────────────────┐   ┌──────────────────────────┐
  │ F/46: you are still in the    │  │ ONE RECOMMENDATION   │   │ THREE RANKED OPTIONS     │
  │ uninformed column.            │  │ + de-risking clause  │   │ most expensive first     │
  │ [PRACTITIONER x2 + PRIMARY]   │  │ JOLT "O": options    │   │ Enns R2/R3               │
  │                               │  │ feed indecision      │   │ [PRACTITIONER]           │
  │ If pressed: state a VERBAL    │  │ [PRACTITIONER, 2.5M] │   │ ⚠ decoy mechanism NOT    │
  │ RANGE only (Enns R4) and say  │  └──────────┬───────────┘   │   available (FLB 2014)   │
  │ you are deferring, and why.   │             │               │ ⚠ low option must be one │
  └───────────────────────────────┘             │               │   you would deliver      │
                                                │               └────────────┬─────────────┘
                                                └───────────┬────────────────┘
                                                            ▼
                                        ┌───────────────────────────────────────┐
                                        │ TIMING: verbal range BEFORE written   │
                                        │ Enns R4: "early objections are your   │
                                        │ friends, late objections your enemies"│
                                        └───────────────────┬───────────────────┘
                                                            ▼
                                        ┌───────────────────────────────────────┐
                                        │ FORM: precise, not round              │
                                        │ AUD 47,500 not AUD 50,000             │
                                        │ [PRIMARY: Janiszewski & Uy 2008;      │
                                        │  Mason et al. 2013 — precise offers   │
                                        │  draw conciliatory counters AND       │
                                        │  attributions of knowledge]           │
                                        │ ⚠ expertise can reverse this          │
                                        │   (Loschelder et al. 2019, pre-reg)   │
                                        │ ⚠ aggressive + precise damages the    │
                                        │   relationship (Mason et al.)         │
                                        └───────────────────┬───────────────────┘
                                                            ▼
                                        ┌───────────────────────────────────────┐
                                        │ WHO OPENS?  Read F/46's four cells    │
                                        │ Buyer has a prior quote / procurement │
                                        │   function?  → you are in the bottom  │
                                        │   row. Maaravi & Levy: the uninformed │
                                        │   party opening first loses badly     │
                                        │   (d = 0.96-1.68). Let them open.     │
                                        │ Buyer uninformed + you informed       │
                                        │   (Rung 1 answered fully)?            │
                                        │   → Galinsky & Mussweiler: opening    │
                                        │   favours you.                        │
                                        │ ⚠⚠ NEITHER source tests a CREDIBILITY │
                                        │   deficit. P1 C8 / P3 C3.5 STAND OPEN.│
                                        └───────────────────┬───────────────────┘
                                                            ▼
                                        ┌───────────────────────────────────────┐
                                        │ LEVEL: where in the band? (§7.2)      │
                                        │ Bottom → quality doubt (Gorn et al.)  │
                                        │ Top → monetary-sacrifice concern      │
                                        │        (Monroe/Rao)                   │
                                        │ ⚠ BOTH ends penalised. The band's     │
                                        │   edges are unmeasured for a young    │
                                        │   cross-border studio. P4 C4.12.      │
                                        │ RECORD WHICH RISK YOU TOOK.           │
                                        └───────────────────┬───────────────────┘
                                                            ▼
                                        ┌───────────────────────────────────────┐
                                        │ ATTACH A BOND (F/36)                  │
                                        │ P3's handoff: "if P5 tests only one   │
                                        │ thing, test whether a bond makes a    │
                                        │ high anchor hold." Boulding & Kirmani:│
                                        │ warranty effects are STRONGEST for    │
                                        │ sellers lacking reputation. This is   │
                                        │ the one directional primary available │
                                        │ and it cuts FOR THE BOND, not for the │
                                        │ anchor.                               │
                                        └───────────────────────────────────────┘
```

### 7.5 — FOMU Countermeasures mapped to P4's F/36 Instruments

The mapping I1 requires: each FOMU expression → the clause that answers it. **The left column is buyer language from the objection library; the right is F/36 verbatim.**

| FOMU expression | Underlying fear | F/36 instrument | Cost if you are good | Cost if you are bad | JOLT step |
|---|---|---|---|---|---|
| "What if it costs more than quoted?" | overrun | Bounded scope, fixed price | 0 | overrun absorbed | T |
| "What if we're locked in after we start?" | irreversibility | Milestone acceptance gates | 0 | early termination | T |
| "What if we pay and get nothing?" | seller default | Payment on acceptance | working-capital drag | unpaid work | T |
| "What if you disappear and we can't maintain it?" | abandonment / lock-in | Source-code custody, IP on final payment | 0 | nothing to hold | T |
| "What if it doesn't actually fix the problem?" | outcome failure | Bounded outcome guarantee | 0 | payout | T |
| "What if we pick wrong?" | personal career risk | Paid pilot before full commitment | small revenue delay | exposed early | T |
| "I need to think it through" + more information requests | decision paralysis | *not a clause* — JOLT "L": limit exploration, name what remains | — | — | L |
| "We can't agree internally" | consensus failure | *not a clause* — MAP with the buyer's own internal steps | — | — | L |
| Undiagnosed hesitation | unknown | *no instrument* — judge first (T5.5). **Acting before judging is the 84% failure mode.** | — | — | J |

**Two structural observations.** (i) **Six of the nine rows are clauses**, which is I1 confirmed at the row level: the majority of FOMU is answered by the contract, not the conversation. (ii) **The three rows that are not clauses are the three that require the seller to do less** — judge, limit, and co-author rather than persuade. The T-guard governs all six clause rows: never offer a bond you could not honour.

### 7.6 — Timeline Commitment Language Set

`[DERIVED. The three-term distinction and the ethics line are mine, argued. P5.9's meta-analysis is the primary that removes the contrast rationale.]`

| Situation | **Do not say** | **Say** | Why |
|---|---|---|---|
| First meeting, asked how long | "I can have that done by Friday." | "I don't know yet, and I'd be guessing. Let me scope it and come back with a date I'll stand behind." | Enns R1; F/46 (you are in the uninformed column); `claude-response3.md`'s credibility point: an instant confident date reads as *you don't understand my problem yet* |
| Asked for a ballpark and will not accept a refusal | "Two weeks." | "Engagements of this shape have run six to ten weeks. I'll narrow that after discovery." | A range is a forecast; a number is heard as a commitment |
| Presenting the forecast | "It'll probably take about eight weeks." | "Based on what we know today, our forecast is eight weeks. The three things that could move it are [X, Y, Z]." | Named uncertainty is the honest form; it is also T5.23 (showing the work) |
| Presenting the commitment | "We'll deliver within fourteen days." *(when you believe seven)* | "The forecast is eight weeks. The date we'll commit to contractually is ten, which gives us room for [named uncertainty]. If we're early, you'll have it early." | **F/48's line.** The buffer is disclosed as a buffer. `chatgpt3.md`'s Agency B is the left cell |
| Asked why you are fast | "It's easy for us." / "It's simple." | "About 60% of this exists already — we've built the branch-reconciliation layer before. The custom part is [X]." **Only if measured.** | Attribution (T5.24); Buell & Norton's labor illusion. An unmeasured percentage is misrepresentation, and it is the same number you will need later to justify a *longer* timeline |
| Buyer wants it faster | "We'll try." | "Standard is ten weeks. Expedited is five, at +[X]%, and here's what changes." | T5.25; a price makes the effort visible |
| Delivering early | "We always finish ahead." | "We're done, three weeks early." *(as an event)* | T5.27; Mela et al.'s ratchet + `claude-response3.md`'s baseline warning |
| Asked when you can start | "We can start Monday." | "We can start on the 15th." | `claude-response3.md`: eagerness signals slack capacity, i.e. a weak BATNA (F/52). **Asserted, untested** — and note it is **grey if the 15th is not actually the earliest date and the delay is manufactured to simulate demand** |
| A date slips | silence, or a new date without explanation | The named uncertainty that fired, the new committed date, and what changes for the buyer | P5.12's consensus problem: your contact must be able to explain the slip internally |

**The last row's status.** The "we can start on the 15th" move is in the internal corpus as advice and appears nowhere in the researched literature. It is **grey** by my labelling, and it is the clearest small example of the general boundary this pillar draws: *the same sentence is legitimate when the constraint is real and a misrepresentation when it is manufactured.* That is the same rule P4 applied to scarcity.

### 7.7 — The Three Genuine Formulas

**1. Prospect theory value function** `[PRIMARY — Kahneman & Tversky 1979; Tversky & Kahneman 1992 cumulative form]`

```
v(x) =   x^α           for x >= 0   (gains)
       -λ·(-x)^β       for x <  0   (losses)

α, β  curvature (diminishing sensitivity). K&T 1992 median estimates: α = β ≈ 0.88
λ     loss-aversion coefficient. K&T 1992 median estimate: λ ≈ 2.25
x     outcome measured as a deviation FROM A REFERENCE POINT, not in absolute wealth
```

**Worked, and the worked example is the problem.** A buyer facing a PHP 900,000 annual loss and a PHP 600,000 fee. Framed as a *gain* of 900,000: v = 900,000^0.88 ≈ 155,000 utils (arbitrary scale). Framed as a *loss avoided*: −λ·(900,000)^0.88 ≈ −349,000 utils, i.e. **2.25× the psychological weight**. The internal corpus's loss-framing instinct rests entirely on λ > 1.

**λ ≈ 2.25 is the single most contested parameter in this pillar. See determination 1 and C5.1.** Mrkva et al.'s own defence concedes moderators: more domain knowledge and more experience are associated with **lower** loss aversion, across five samples totalling **N = 17,720** — and a professional ops leader buying operational systems is, by construction, a high-domain-knowledge decision-maker in a familiar domain. **Applying λ = 2.25 to this buyer is the least defensible transfer in the whole program.**

**2. Anchoring index** `[PRIMARY — Jacowitz & Kahneman 1995]`

```
AI = (E_high − E_low) / (A_high − A_low)

E_high  mean estimate after exposure to the high anchor
E_low   mean estimate after exposure to the low anchor
A_high, A_low  the two anchors
AI = 0  → no anchoring;  AI = 1 → complete assimilation to the anchor
Typical published AI values fall in the 0.3–0.6 range for numeric judgements.
```

**Use and limit.** This is a *measurement* instrument, not a pricing instrument. It quantifies how much a population moves toward an anchor; it says nothing about whether anchoring wins or loses a deal, and it has never been computed under a credibility deficit. **It is included here specifically because it is the formalism the corpus's anchoring advice implicitly invokes and does not possess.**

**3. Expectancy-disconfirmation, as the meta-analytic path** `[PRIMARY — Schiebler, Lee & Brodbeck 2025, JAMS 54:91–112]`

```
Satisfaction ← Perceived performance  (direct, positive)
Satisfaction ← Expectations           (direct, positive:  r = .29 [.24, .34])
Satisfaction ← Disconfirmation        (mediating both paths)

150 records · 168 independent studies · N = 58,597
Assimilation prediction: expectations POSITIVELY related to satisfaction  → SUPPORTED
Contrast prediction:     expectations NEGATIVELY related to satisfaction  → little
                         empirical evidence; 2 of 99 studies significant negative
```

**Worked, as a refutation.** `chatgpt3.md`'s Agency A/Agency B thought experiment predicts Agency B (promise 14, deliver 7) ends with higher satisfaction than Agency A (promise 7, deliver 7). The meta-analytic estimate predicts the opposite direction for the expectations term: r = +.29 means the agency that set the *higher* expectation and met it is, on average, associated with *higher* satisfaction. The contrast effect the thought experiment depends on is the effect the meta-analysis could not find. **This does not prove Agency B is wrong in the specific case — the meta-analysis is on consumer satisfaction generally, not on software delivery dates — but it removes the evidential basis for the claim, and the claim was presented as "this advice is repeated because it works."**

### 7.8 — Explicit No-Formalism Register

The following sub-topics have **no formula, index, or quantified model in any source consulted, and none is invented here**:

| Sub-topic | Status |
|---|---|
| Question sequencing / optimal order | No formalism. SPIN's order is a coded correlation, never modelled |
| Optimal question count | A vendor band (11–14), correlational, not a model. Conflicts with the 24-item set (C5.13) |
| Talk-to-listen optimum | A vendor ratio (46/54), correlational; direction of causation unestablished |
| Objection-handling efficacy | No formalism at any tier. The library is a structured practice list |
| Concession size, decay, or reservation-price setting | **No formalism.** The "decreasing concessions signal a limit" heuristic is folk practice; no test located |
| Timeline buffer magnitude | **No formalism.** Nothing found gives a defensible `b`. Buffer sizing is P6's estimation-under-uncertainty question |
| Expedited premium level | No formalism for software services. `claude-response3.md`'s +35% is an internal assertion with no source |
| Value-mode migration rate or cost | **No measurement at all.** F/56 / determination 2 |
| Cost-of-inaction | Arithmetic (§7.2), not a formalism. The `× N` linear form is P2's unverified numerator |
| Stakeholder-count penalty | A web-tier restatement ("each additional stakeholder reduces purchase probability ~10pp") that I could not trace to a Gartner primary. **Not formalised here** |
| Anchor level (how high) | **No formalism, and this is the corpus's central pricing want.** The literature models *adjustment*, never *optimum* |

---

## 8. Benchmarks

All retrieved 2026-07-28. Tier and date-of-underlying-data stated.

### 8.1 No-decision and win rates

| Metric | Value | Underlying data | Tier |
|---|---|---|---|
| Qualified B2B deals ending in no decision | **40–60%** | 2.5M recorded calls, Dixon & McKenna, pub. 2022 | PRACTITIONER, large-n |
| Share of no-decision attributable to indecision (vs status-quo preference) | **~56% / ~44%** | same corpus | PRACTITIONER |
| Deals showing medium-to-high indecision | **87%** | same corpus | PRACTITIONER |
| Average win rate in the JOLT corpus | **26%** | same corpus | PRACTITIONER |
| Reps who respond to late cold feet by re-litigating the status quo | **73%** | same corpus | PRACTITIONER |
| Share of those interactions where this **increased** loss probability | **84%** | same corpus | PRACTITIONER |
| High-performer win-rate multiple using an indecision playbook | **~2×** average | same corpus | PRACTITIONER |
| Average B2B win rate 2024–26 | **19–21%** | Ebsta/Pavilion 2025 reports 19%, down from 29% in 2024 | VENDOR |
| Win rate on qualified opportunities where a proposal was delivered | **47%** (472 sellers/executives) | RAIN Group | VENDOR |
| Win rate by deal size | **28–38%** under USD 25k; **8–16%** over USD 2M | aggregator | WEB/VENDOR |
| B2B tech sales cycle | **6.5 months** (2023) vs **4.9** (2019) | aggregator | WEB/VENDOR |
| Buyers reporting a stalled deal in the past year | **89%** | aggregator | WEB/VENDOR |

### 8.2 Conversation mechanics `[VENDOR — Gong Labs, 519,000+ recorded discovery calls]`

| Metric | Value |
|---|---|
| Talk-to-listen ratio, winning discovery calls | **46 / 54** |
| Talk share, average performers | **68%** |
| Question count, success band | **11–14** |
| Question count, struggling sellers | **~20** |
| Customer problems covered by top performers | **3–4** |

**Every figure in 8.2 is correlational, vendor-produced, and drawn from a population of call-recording-software customers (predominantly US B2B SaaS inside sales). No peer-reviewed equivalent for B2B services was located.**

### 8.3 Multi-stakeholder `[VENDOR/ANALYST — Gartner]`

| Metric | Value | Data date |
|---|---|---|
| Average enterprise buying-group size | **11** (vs 7 in 2017) | 2024 |
| Buyers describing last purchase as complex/difficult | **77%** | 2024 |
| Consensus-reaching groups reporting a high-quality deal | **2.5×** more likely | survey of 632 buyers, Aug–Sep 2024 |
| Buying teams displaying "unhealthy conflict" | **74%** | 2025 |
| Buyers reaching value clarity reporting a high-quality deal | **2×** more likely | Gartner, undated in source |

**Transfer caveat, and it is severe.** These are *enterprise* figures. P2's target is a 30–500-staff multi-branch operator whose entire thesis is a short decision chain. P2 verified the short-chain claim only for smaller SMB vertical-SaaS buyers (C2.12) and could not verify it at AUD 5–50M revenue. **8.3 and P2's A1 cannot both be describing the same buyer.**

### 8.4 Negotiation behaviour `[PRACTITIONER-PRIMARY — Rackham & Carlisle behavioural coding]`

| Metric | Skilled | Average |
|---|---|---|
| Irritators per hour of speaking | **2–3** | **10–11** |
| Defend/attack as share of behaviour | **1.9%** | **6.3%** |
| Immediate counter-proposals | avoided | frequent |
| Planning focus | issues, independently | sequence |

### 8.5 Anchoring, precision, and framing effect sizes `[PRIMARY]`

| Finding | Effect | Source |
|---|---|---|
| First-offer advantage in distributive negotiation | Present across 3 experiments; **eliminated** when receiver focuses on offeror's alternatives, offeror's reservation price, or own target | Galinsky & Mussweiler 2001, *JPSP* 81:657–669 |
| First-offer *disadvantage* under information asymmetry | **d = 1.32, 1.68, 0.96** across studies 2–4 | Maaravi & Levy 2017, *JDM* 12(5):420–429 |
| Precise vs round anchors: adjustment | Smaller adjustment from precise anchors, 5 studies | Janiszewski & Uy 2008, *Psych Sci* 19:121–127 |
| Precise first offers | More conciliatory counteroffers + attributions of knowledge | Mason, Lee, Wiley & Ames 2013, *JESP* 49:759–763 |
| Precision knowledge as a tactic | Knowing it is a tactic does **not** reduce the effect | Thorsteinson 2021, *JTSP* |
| Expertise × anchor precision | Moderates and can reverse, pre-registered field experiment | Loschelder et al. 2019, *Experimental Psychology* 66(2) |
| Attraction/decoy effect robustness | Largely restricted to stylised all-numeric stimuli; fails with experienced/perceptual attributes | Frederick, Lee & Baskin 2014, *JMR* |
| Operational transparency (labor illusion) | **~8%** higher service valuation; longer visible-work waits sometimes preferred to instant identical results | Buell & Norton 2011, *Mgmt Sci* 57(9):1564–1579 |
| Expectations → satisfaction | **r = .29 [.24, .34]**; assimilation supported, contrast not | Schiebler, Lee & Brodbeck 2025, *JAMS* 54:91–112; 150 records, N = 58,597 |
| Loss-aversion coefficient λ | **≈2.25** median (1992); **contested** — see determination 1 | Tversky & Kahneman 1992; Gal & Rucker 2018; Mrkva et al. 2020 (N = 17,720) |

### 8.6 Mutual action plans and close mechanics `[VENDOR]`

| Metric | Value | Caveat |
|---|---|---|
| Win-rate uplift with a buyer-engaged MAP | **+26%** | Outreach internal analysis, self-reported, correlational |
| Digital-sales-room win-rate uplift | **+57% to +200%** | SaaS vendor customer feedback, Q3 2024. **Implausible as a causal range; report and discount** |
| Losses occurring before needs assessment | **63%** | aggregator, untraceable to a primary. Reported for completeness at WEB tier |

---

## 9. Contradictions (stated as open questions, not resolved)

**C5.1 — Is loss aversion a usable principle at all?**
Gal & Rucker 2018 `[PRIMARY, JCP]`: the evidence does not support a general tendency for losses to loom larger than gains; the phenomena conventionally cited (risky bets, status-quo bias, endowment effect, sunk cost, framing) each admit alternative explanations, and what the evidence better supports is **loss attention** rather than loss aversion. Mrkva et al. 2020 `[PRIMARY, JCP, N = 17,720]`: loss aversion has moderators but is not dead — and among the moderators are **domain knowledge and experience, both associated with lower loss aversion**. Simonson & Kivetz 2018 `[PRIMARY, JCP]`: contingent, down-to-earth loss aversion; the overarching message is a worthwhile contribution but the rejection goes too far. Higgins & Liberman 2018: the reference point is the missing variable. Kahneman **did not participate in the published dialogue**; the only located on-record position is journalistic (Salon, 2021) reporting that he agreed evidence of loss aversion appears only in certain situations `[JOURNALISTIC]`. *Open question: does loss framing retain any usable effect on a high-domain-knowledge professional buyer in a familiar domain — which is exactly P2's target buyer?* **Program-level: this propagates back into P1's and P4's treatment of loss aversion as among the strongest available principles.**

**C5.2 — JOLT's "make one recommendation" vs Enns' "always present three options."**
Both are practitioner-tier; JOLT has 2.5M calls behind it and Enns has an argued outcome-count rationale plus a documented case of 11× profit improvement. They prescribe opposite behaviours at the same moment. §7.4 routes on indecision level, **which is my construction and is not what either source says.** *Open question: is option count a function of buyer indecision, or is one of these simply wrong?*

**C5.3 — Does the decoy mechanism survive for services?**
Frederick, Lee & Baskin 2014 `[PRIMARY, JMR]` restricts the attraction effect to stylised all-numeric stimuli. A software engagement's attributes are not numbers. *Open question: if the decoy mechanism is unavailable, does three-option architecture still work — and if it does, by what mechanism?* Enns' own rationale (three options convert a binary into a mostly-positive outcome set) does not require the decoy effect, which may be the answer, and is unevidenced.

**C5.4 — P1's C8 after three pillars: anchoring under a credibility deficit.**
Two new primaries sharpen without resolving. Galinsky & Mussweiler: first-mover advantage, eliminable. Maaravi & Levy: first-mover *disadvantage* under information asymmetry, at large effect sizes. **Neither manipulates the offeror's credibility.** Credibility deficit and information deficit are different constructs and the literature conflates neither. The one directional primary that bears on the question — Boulding & Kirmani, warranty effects strongest for sellers lacking reputation — **cuts for the bond, not for the anchor**, exactly as P3 said. *Open question, third pillar running: is high anchoring robust in a low-trust, no-track-record, cross-border sale?* **Still not tested by anyone.**

**C5.5 — Where are the band's edges?**
Both ends of the price range are penalised (I2). P4 asked P5 to test where the edges are for a young cross-border studio. **Nothing was found that measures the edges for any services firm, let alone this one.** *Open question: is the defensible band wide enough to contain a three-option ladder at all?* If the top option triggers monetary-sacrifice concern and the bottom triggers quality doubt, a three-option ladder may straddle both penalties simultaneously — a possibility no source considers and no one in this program has raised.

**C5.6 — The talk-listen ratio's direction of causation.**
Gong's 46/54 is presented as a seller behaviour to adopt. It is equally consistent with engaged buyers talking more in deals that were already going to close. *Open question: does reducing seller talk time cause better outcomes, or mark them?* No experimental test located at any tier.

**C5.7 — Underpromise-and-overdeliver vs the expectancy-disconfirmation meta-analysis.**
`chatgpt3.md` presents contrast as settled ("this advice is repeated because it works"). Schiebler et al. 2025 `[PRIMARY, N = 58,597]` finds little empirical evidence for contrast effects and a positive expectations→satisfaction relationship. *Open question: is the internal doc's Agency A/Agency B intuition wrong, or is software-delivery-date disconfirmation a domain the meta-analysis does not cover?* The meta-analysis aggregates consumer satisfaction broadly; a B2B project date is not obviously in-sample. **But the burden has moved: contrast is now the claim requiring evidence.**

**C5.8 — Show the work vs keep the efficiency internal.**
Buell & Norton `[PRIMARY]`: visible effort raises valuation ~8%. `chatgpt3.md`: efficiencies are intellectual capital, keep them internal, "Toyota doesn't tell customers." `claude-response3.md`: attribute the speed to a cause, i.e. reveal a specific efficiency. *Open question: does operational transparency about reuse raise the fee (labor illusion) or commoditise the work (the buyer now knows 60% was pre-built and prices accordingly)?* **Nothing found tests transparency about *reuse* specifically, and this is the exact question P7 inherits.**

**C5.9 — Front-loaded deposit vs milestone bond.**
Prelec & Loewenstein `[PRIMARY]`: prospective accounting and decoupling favour payment before consumption. P4's F/36 and JOLT's "T" favour milestone acceptance and payment on acceptance — maximally *coupled*, and buyer-protective. *Open question: does milestone billing, adopted as a trust bond, degrade the buyer's experience of the delivery it is meant to protect?* No source tests the pain-of-paying literature on B2B project work. **This is a genuine tension between two things the program currently recommends in different pillars.**

**C5.10 — Voss' techniques vs the mutual-dependency structure of a delivery relationship.**
Voss' labelling, mirroring, calibrated questions and accusation audit are widely adopted in B2B. The one scholarly engagement located (a rejoinder in MIT's *Negotiation Journal*) concludes many Vossian precepts are **difficult to transfer to environments of structural long-term mutual dependency**. A software build with a maintenance retainer is precisely such an environment. *Open question: which Voss techniques survive the transfer?* **Not adjudicated. Every Voss element in this pillar is labelled FBI-derived and largely unevidenced for B2B, per the brief.**

**C5.11 — P5.12's 11 stakeholders vs P2's single signatory.**
Gartner's buying-group data describes a consensus problem; P2's A1 thesis describes a single decision-maker, and P2 could verify the short chain only for smaller buyers. **The two cannot both describe the 30–500-staff multi-branch operator.** *Open question: how long is the decision chain at AUD 5–50M revenue?* P2 C2.12 and P3 C3.7 (category choice moves chain length) both bear on it; neither resolves it. §7.1 question 23 is the instrument that answers it per-deal instead of in general.

**C5.12 — Rackham's closing finding vs the entire close-mechanics literature.**
Rackham's coded finding is that closing techniques help in small sales and **hurt** in large ones. Practitioner sales literature continues to teach closes. `[PRACTITIONER-PRIMARY, unreplicated in 40 years]` vs `[PRACTITIONER, no data]`. *Open question: is the finding right, or is it an artefact of a 1980s coding scheme?* No replication exists either way. This pillar's library omits closes on the strength of an unreplicated finding, and says so.

**C5.13 — 24 discovery questions vs the 11–14 vendor band.**
§7.1 exceeds the band by ~2×. The band is measured on short SaaS inside-sales calls; the set is designed for a 60–90 minute founder-led diagnostic. *Open question: does the question-count band transfer to a longer, higher-value, founder-led conversation, or is the set too long?* Nothing found adjudicates.

**C5.14 — Enns' expertise premise, now load-bearing in four pillars.**
P3's warning, unchanged and now compounded: T5.15 (invoke a policy), T5.11 (refuse to price early), F/53 (decline the rate card), and T5.14 (one-page proposal, not a submission) all read as professional from a firm already accepted as a specialist practice and as difficult from a generalist vendor. **The book itself has still not been read by anyone in this program; every Enns finding here is via secondary summaries.** *Open question, fourth pillar running: does Enns' method work for a firm the buyer does not yet accept as an expert?*

**C5.15 — The internal speed docs contradict themselves as well as each other.**
`chatgpt3.md` recommends language that is honest ("professional forecast," "based on what we know today, one to two weeks") while justifying it with a mechanism that requires deliberate under-promising (Agency B's "wow"). Those are different practices. `claude-response3.md` says never quote a timeline in the meeting **and** that the gap between capability and commitment "is not sandbagging, every construction and engineering firm on earth works this way" — which is correct about buffers and does not address the case where the buffer is presented as the forecast. **Neither doc draws the line F/48 draws, and the line is where the ethics of this entire sub-topic live.**

**C5.16 — SPIN's unreplicated status vs its foundational role.**
F/41, §7.1, §7.2, and P5.3–P5.4 all rest on Rackham's coded correlations. Forty years, no independent replication, no refutation, method commercially owned. *Open question: would the Implication-question finding replicate today, with modern methods, on services sales?* **The largest single evidential dependency in this pillar is a study nobody has checked.**

---

## 10. Sources

### Primary (peer-reviewed)

**Loss aversion and prospect theory**
- Kahneman, D. & Tversky, A. (1979). "Prospect Theory: An Analysis of Decision under Risk." *Econometrica* 47(2):263–291.
- Tversky, A. & Kahneman, D. (1974). "Judgment under Uncertainty: Heuristics and Biases." *Science* 185:1124–1131.
- Tversky, A. & Kahneman, D. (1992). "Advances in Prospect Theory: Cumulative Representation of Uncertainty." *JRU* 5:297–323. (Source of α = β ≈ 0.88, λ ≈ 2.25.)
- **Gal, D. & Rucker, D. D. (2018).** "The Loss of Loss Aversion: Will It Loom Larger Than Its Gain?" *Journal of Consumer Psychology* 28(3):497–516. https://myscp.onlinelibrary.wiley.com/doi/abs/10.1002/jcpy.1047 · full text: https://statmodeling.stat.columbia.edu/wp-content/uploads/2018/06/Loss-of-Loss-Aversion.pdf · SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3049660
- **Mrkva, K., Johnson, E. J., Gächter, S. & Herrmann, A. (2020).** "Moderating Loss Aversion: Loss Aversion Has Moderators, But Reports of its Death are Greatly Exaggerated." *JCP* 30(3):407–428. https://myscp.onlinelibrary.wiley.com/doi/10.1002/jcpy.1156 · https://researchportal.bath.ac.uk/en/publications/moderating-loss-aversion-loss-aversion-has-moderators-but-reports — **abstract-level only; paywalled (HTTP 402).**
- **Simonson, I. & Kivetz, R. (2018).** "Bringing (Contingent) Loss Aversion Down to Earth — A Comment on Gal & Rucker's Rejection of 'Losses Loom Larger Than Gains'." *JCP*. https://myscp.onlinelibrary.wiley.com/doi/abs/10.1002/jcpy.1046 — **abstract-level only.**
- **Higgins, E. T. & Liberman, N. (2018).** "The Loss of Loss Aversion: Paying Attention to Reference Points." *JCP*. https://myscp.onlinelibrary.wiley.com/doi/10.1002/jcpy.1045 — **abstract-level only.**
- Shavitt, S. (2018). "A New Version of Loss Aversion: Introduction to Research Dialogue." *JCP*. https://myscp.onlinelibrary.wiley.com/doi/10.1002/jcpy.1054 — **not retrieved (HTTP 402).**
- Gal, D. & Rucker, D. D. (2018). "Loss aversion, intellectual inertia, and a call for a more contrarian science: A reply to Simonson & Kivetz and Higgins & Liberman." *JCP*. — **title located via secondary; text not retrieved.**
- "Loss aversion (simply) does not materialize for smaller losses." *Judgment and Decision Making* (2022). https://www.cambridge.org/core/journals/judgment-and-decision-making/article/loss-aversion-simply-does-not-materialize-for-smaller-losses/5B1998E9F1E47F3006235CC57AB51AB7 — **authors not verified; cited for existence of the small-stakes null.**
- "Revise the Belief in Loss Aversion." *Frontiers in Psychology* (2019). https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.02723/full

**Anchoring, precision, and choice architecture**
- **Galinsky, A. D. & Mussweiler, T. (2001).** "First Offers as Anchors: The Role of Perspective-Taking and Negotiator Focus." *JPSP* 81:657–669. https://pubmed.ncbi.nlm.nih.gov/11642352/
- **Maaravi, Y. & Levy, A. (2017).** "When your anchor sinks your boat: Information asymmetry in distributive negotiations and the disadvantage of making the first offer." *Judgment and Decision Making* 12(5):420–429. https://www.sas.upenn.edu/~baron/journal/17/17327a/jdm17327a.html — **full text read.**
- **Janiszewski, C. & Uy, D. (2008).** "Precision of the Anchor Influences the Amount of Adjustment." *Psychological Science* 19:121–127. https://journals.sagepub.com/doi/10.1111/j.1467-9280.2008.02057.x
- **Mason, M. F., Lee, A. J., Wiley, E. A. & Ames, D. R. (2013).** "Precise offers are potent anchors: Conciliatory counteroffers and attributions of knowledge in negotiations." *JESP* 49:759–763. https://columbia.edu/~da358/publications/Precise_offers.pdf
- Thorsteinson, T. (2021). "Knowledge of precise offers as a negotiating tactic does not reduce its effect on counteroffers." *Journal of Theoretical Social Psychology*. https://onlinelibrary.wiley.com/doi/abs/10.1002/jts5.86
- Loschelder, D. D. et al. (2019). "How and Why Different Forms of Expertise Moderate Anchor Precision in Price Decisions: A Pre-Registered Field Experiment." *Experimental Psychology* 66(2). https://econtent.hogrefe.com/doi/10.1027/1618-3169/a000441 · related working paper "When and why precise anchors backfire with experts" — **abstract/title level only; PDF fetch failed (404).**
- **Frederick, S., Lee, L. & Baskin, E. (2014).** "The Limits of Attraction." *Journal of Marketing Research* 51(4). https://journals.sagepub.com/doi/abs/10.1509/jmr.12.0061
- Huber, J., Payne, J. W. & Puto, C. (1982). Asymmetric dominance / attraction effect. (Referenced via P1 and secondary summaries; original not fetched.)
- Jacowitz, K. E. & Kahneman, D. (1995). "Measures of Anchoring in Estimation Tasks." *PSPB* 21:1161–1166. (Source of the anchoring index; cited from standing knowledge, not fetched this session.)

**Perceived value, effort, satisfaction, and payment**
- **Buell, R. W. & Norton, M. I. (2011).** "The Labor Illusion: How Operational Transparency Increases Perceived Value." *Management Science* 57(9):1564–1579. https://pubsonline.informs.org/doi/10.1287/mnsc.1110.1376 · https://www.hbs.edu/ris/Publication%20Files/Norton_Michael_The%20labor%20illusion%20How%20operational_f4269b70-3732-4fc4-8113-72d0c47533e0.pdf
- **Schiebler, T., Lee, N. & Brodbeck, F. C. (2025).** "Expectancy-disconfirmation and consumer satisfaction: A meta-analysis." *Journal of the Academy of Marketing Science* 54:91–112. https://doi.org/10.1007/s11747-024-01078-x — **abstract and key statistics read.**
- **Prelec, D. & Loewenstein, G. (1998).** "The Red and the Black: Mental Accounting of Savings and Debt." *Marketing Science* 17(1):4–28. https://dl.acm.org/doi/abs/10.5555/2880309.2880310
- Zellermayer, O. (1996). *The Pain of Paying.* PhD dissertation, Carnegie Mellon (supervised by Loewenstein). Via https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/pain-of-paying/
- Boulding, W. & Kirmani, A. (1993). "A Consumer-Side Experimental Examination of Signaling Theory." *JCR* 20(1):111–123. (Inherited from P3/P4; not re-fetched.)
- Gorn, G. J. et al. — free provision and perceived service quality. (Inherited from P4; not re-fetched.)
- Rao, A. R. & Monroe, K. B. (1989, 1988); Rao (2005). Price–quality inference. (Inherited from P1.)
- Sitzia, S. & Zizzo, D. J. — price-sequence ordering. (Inherited from P4.)
- Mela, C. F. et al. — long-run promotion effects on price sensitivity. (Inherited from P4.)
- Peterson, R. A. & Jolibert, A. J. P. — country-of-origin effects meta-analysis. (Inherited from P3.)
- Spence, M. (1973). "Job Market Signaling." (Inherited from P3/P4.)

**Value-based selling (adjacent, does not resolve F/56)**
- "Advancing value-based selling research in B2B markets: A theoretical toolbox and research agenda." *Industrial Marketing Management* (2023). https://www.sciencedirect.com/science/article/pii/S0019850123000226
- "Unlocking value-based pricing: the moderating roles of pricing capabilities and contingency factors in B2B markets." *Journal of Revenue and Pricing Management* (2025). https://link.springer.com/article/10.1057/s41272-025-00530-z
- "Value first, then price: the new paradigm of B2B buying and selling." *JRPM* (2021). https://link.springer.com/article/10.1057/s41272-021-00304-3

### Practitioner (argued, method-owning, or single-case)

- **Rackham, N. (1988).** *SPIN Selling.* 35,000 calls, ~10,000 salespeople, 27 countries; coder reliability 0.85 against standard tapes. https://www.huthwaiteinternational.com/blog/neil-rackham-research-spin — **book not read; findings via Huthwaite's own account and secondary summaries. No independent replication located.**
- **Rackham, N. & Carlisle, J.** "The Effective Negotiator" (behavioural coding of skilled vs average negotiators). https://altaprorpg.com/wp-content/uploads/2025/08/Rackham-and-Carlisle-1.pdf · https://altaprorpg.com/wp-content/uploads/2025/08/Rackham-and-Carlisle-2.pdf · Huthwaite's summaries: https://www.huthwaiteinternational.com/blog/huthwaite-negotiations-research · https://www.huthwaiteinternational.com/blog/behaviours-avoided-by-the-skilled-negotiator-irritators
- **Rackham, N. & DeVincentis, J. (1999).** *Rethinking the Sales Force.* Transactional/consultative/enterprise value modes. https://books.google.com/books/about/Rethinking_the_Sales_Force_Redefining_Se.html?id=YFn0bF4w3sEC — **book not read.**
- **Dixon, M. & Adamson, B. (2011).** *The Challenger Sale.* 6,000 reps, 90 companies; ~40% of high performers were Challengers. Critiques: https://openviewpartners.com/blog/the-problem-with-the-challenger-sales-model/ · "Salespeople as knowledge brokers: A review and critique of the challenger sales model" https://www.researchgate.net/publication/271993211 · https://meddic.academy/challenging-the-challenger-sale/ — **no replication study located; the academic literature's own statement is that no systematic in-depth examination has been completed.**
- **Dixon, M. & McKenna, T. (2022).** *The JOLT Effect.* 2.5M recorded sales conversations. https://www.penguinrandomhouse.com/books/697165/the-jolt-effect-by-matthew-dixon-and-ted-mckenna/ · https://challengerinc.com/losing-to-customer-indecision/ · https://www.jolteffect.com/blog/what-is-the-jolt-effect · 84%/73% figures via https://strategicdiscipline.positioningsystems.com/blog-0/the-jolt-effect-eliminate-choice-high-performers-make-recommendations and http://jackmalcolm.com/the-jolt-effect-dont-fight-fear-with-fear/ — **book not read; figures via secondary summaries of the authors' own reporting.**
- **Enns, B.** *Pricing Creativity.* https://www.thedrum.com/news/2023/05/12/putting-the-procurement-debate-bed-blair-enns-s-3-rules-pricing-creativity · https://2bobs.com/podcast/pricing-creativity · https://www.peterkang.com/lessons-from-pricing-creativity-by-blair-enns/ — **book still not read by anyone in this program (C5.14).**
- **Weiss, A.** *Value-Based Fees* (3rd ed.). https://alanweiss.com/shop/books/hardcover/value-based-fees-3rd-edition/ · summaries: https://www.marketingfirst.co.nz/2014/01/value-based-fees-how-to-charge-and-get-what-youre-worth-by-alan-weiss/ · https://scottburleson.substack.com/p/book-summary-value-based-fees — **book not read.**
- **Miller, R. & Heiman, S.** *The New Strategic Selling.* Four buying influences + Blue Sheet. https://www.doescheradvisors.com/wp-content/uploads/2012/06/Strategic-Selling-Excerpted-Outline.pdf
- **Voss, C.** *Never Split the Difference.* **FBI hostage-negotiation-derived; largely unevidenced for B2B.** Scholarly engagement: "Building on the Differences: A Rejoinder to Chris Voss," *Negotiation Journal* (MIT Press). https://direct.mit.edu/ngtn/article/doi/10.1162/NGTN.a.38/134142/Building-on-the-Differences-A-Rejoinder-to-Chris — **rejoinder abstract-level; concludes many precepts are difficult to transfer to environments of structural long-term mutual dependency.**
- **Huthwaite International** — negotiation training for both buyers and sellers; Verbal Behaviour Analysis. https://www.huthwaiteinternational.com/business-performance-solutions/negotiation-training/
- Andy Preston, "Send Me A Proposal — 7 Things You MUST Do First." https://www.andypreston.com/send-me-a-proposal-7-things-you-must-do-first/ · Sticky Branding, "Send Contracts, Not Sales Proposals." https://stickybranding.com/blog/send-contracts-not-sales-proposals
- Sierra (paid-pilot practitioner case; 10–20% of contract value, 40 names screened to 6, 100% conversion; 60–90 min kickoff, weekly 30-min standups). **Inherited from P4; single case.**

### Vendor / analyst (label on every use)

- **Gong Labs** — 519,000+ recorded discovery calls. Talk-to-listen 46/54: https://www.gong.io/resources/labs/talk-to-listen-conversion-ratio/ · 11–14 questions and 3–4 problems: https://www.gong.io/blog/discovery-call · https://www.gong.io/blog/elements-of-effective-sales-conversations
- **Gartner** — buying-group size, consensus, conflict: https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-sales-survey-finds-74-percent-of-b2b-buyer-teams-demonstrate-unhealthy-conflict-during-the-decision-process · secondary compilations: https://www.thestarrconspiracy.com/insights/benchmarks/b2b-buying-committee-benchmarks-2025 · https://www.attainmentlabs.com/blog/b2b-buying-committees-doubled
- **Outreach** — MAP +26% win rate: https://www.outreach.ai/resources/blog/how-to-use-mutual-action-plans
- **RAIN Group** — 47% win rate, 472 sellers/executives (via the Outreach and benchmark compilations above).
- **SalesHood** — digital sales room win-rate claims: https://www.globenewswire.com/news-release/2024/10/28/2970137/0/en/SalesHood-Launches-Interactive-Mutual-Action-Plans-in-Digital-Sales-Rooms-to-Scale-Repeatable-B2B-Sales-Execution
- **Ebsta / Pavilion** and win-rate aggregators: https://salesmotion.io/blog/sales-win-rate-benchmarks-2026 · https://www.gradient.works/blog/2025-b2b-sales-performance-benchmarks · https://developmentcorporate.com/product-management/win-loss-rates-for-enterprise-saas-the-2025-reality-check/

### Journalistic

- Salon (2021-11-27). "Among social scientists, a vigorous debate over loss aversion." https://www.salon.com/2021/11/27/among-social-scientists-a-vigorous-debate-over-loss-aversion_partner/ — **the only located record of Kahneman's position on the Gal & Rucker challenge.**
- Marketing Week (Richard Shotton) on the labor illusion. https://www.marketingweek.com/richard-shotton-labour-illusion/

### Web (lowest tier; used only where nothing better exists)

- Cost-of-inaction practitioner material, including the untraceable "75% of calls failed to establish a quantified CoI" figure: https://www.inflexion-point.com/Blog/bid/103130/Why-the-Cost-of-Inaction-is-so-important-in-B2B-Sales · https://playbook.amplifyscales.com/p/the-cost-of-inaction-in-b2b-sales · https://www.hyperbound.ai/blog/cost-of-inaction-sales
- Rush-fee and expedited-tier practice in adjacent industries: https://thewordling.com/rush-fees-explained/ · https://legalclarity.org/how-much-should-i-charge-for-a-rush-fee-industry-standards/
- Loss-aversion replication commentary: https://atticusli.com/replication-crisis/loss-aversion/ · https://www.jasoncollins.blog/posts/kahneman-and-tverskys-debatable-loss-aversion-assumption · https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/loss-aversion/

### Internal corpus

- `D:\PROJECTS\axon-enjin\pricing\claude-response3.md` — speed decomposition, attribution, never-quote-in-the-meeting, expedited tier, guarantee.
- `D:\PROJECTS\axon-enjin\pricing\chatgpt3.md` — expectation management, Agency A/B, keep efficiency internal, professional-forecast language.
- `pillar-01-price-architecture.md` (F/3, F/4, F/5, T15, C8, C9, C11), `pillar-02-buyer-selection.md` (A1, A3, A5, F2.2, F2.7, F2.9, C2.1, C2.3, C2.4, C2.6, C2.7, C2.12, C2.15, §7.5), `pillar-03-positioning-category.md` (§6.1, §6.2, F/23, F/27, T3.2, T3.8, T3.13, T3.19, C3.4, C3.5, C3.6, C3.12, C3.15, C3.17), `pillar-04-demand-generation.md` (F/34, F/35, F/36, F/37, F/38, F/39, F/40, P4.5, P4.8, P4.10, P4.12, T4.15, T4.18, C4.6, C4.7, C4.12).

---

## End-to-End Session Review

### What I searched and why

Sixteen search clusters, chosen to attack the four required determinations first and fill the objection library second.

| # | Cluster | Why | Yield |
|---|---|---|---|
| 1 | Gal & Rucker "Loss of Loss Aversion" + the *JCP* research dialogue (Mrkva et al., Simonson & Kivetz, Higgins & Liberman, Shavitt intro, G&R reply) | Determination 1 — mandatory | Abstract-level on four of six; full text on Gal & Rucker. Enough to state claim and rebuttal precisely. Kahneman's position located only journalistically |
| 2 | Loss-aversion moderators, small-stakes nulls, replication commentary | To find the *shape* of the surviving claim rather than a verdict | Mrkva's own moderator list (N = 17,720) is the decision-relevant find: domain knowledge and experience → **lower** loss aversion |
| 3 | Rackham / SPIN methodology and any independent replication | P5.3, C5.16 | Method detail found (35,000 calls, 0.85 coder reliability). **No replication, refutation, or systematic review exists.** Negative result, and it is a finding |
| 4 | Rackham & Carlisle negotiation coding, irritators, Huthwaite VBA | Concession discipline had no formalism candidate | Best-yield cluster in the session: 2–3 vs 10–11 irritators/hour, 1.9% vs 6.3% defend-attack. Also revealed Huthwaite trains procurement (F/53) |
| 5 | JOLT Effect four steps + the 73%/84%/87%/56% figures | P5.1, P5.2, F/44 | Figures found via secondary summaries of the authors' own reporting; book not read |
| 6 | Challenger Sale critiques and academic engagement | To rate the tier honestly | "No systematic in-depth examination has been completed" — the field's own words |
| 7 | Rackham & DeVincentis value modes + value-based-selling academic literature (Terho/Haas/Eggert, IMM 2023 review) | Determination 2 | Taxonomy found; **within-cycle migration evidence not found.** The IMM piece is self-described as a research agenda |
| 8 | Galinsky & Mussweiler; Maaravi & Levy | Anchoring and its limits; P1 C8 | Both retrieved; M&L full text. Produced F/46 and sharpened C5.4 without closing it |
| 9 | Janiszewski & Uy; Mason et al.; Thorsteinson; Loschelder et al. | Precise vs round | Directional support plus two real caveats (expert moderation/reversal; relationship damage) |
| 10 | Frederick, Lee & Baskin "The Limits of Attraction" | To test the decoy justification for three options | The session's most consequential single primary: decoy mechanism is not available for a services engagement. Produced P5.6, C5.3 |
| 11 | Expectancy-disconfirmation meta-analysis | Determination 3 | Schiebler et al. 2025, r = .29, N = 58,597. Decisive against the contrast rationale |
| 12 | Buell & Norton labor illusion | Determination 3, the other side | ~8% valuation lift; the asymmetry (bad outcomes look worse) is the underused half |
| 13 | Prelec & Loewenstein, pain of paying, coupling | P1's deposit/milestone question (C9) | Produced C5.9 — a live tension between two pillars of this program |
| 14 | Gong/Chorus corpora; Gartner buying groups; MAP vendor data | Benchmarks the brief asked for, explicitly as vendor data | Retrieved and labelled. Gartner's figures collided with P2's thesis (C5.11) |
| 15 | Voss scholarly engagement | The brief's labelling instruction | The *Negotiation Journal* rejoinder: precepts hard to transfer under structural long-term mutual dependency. Exactly a delivery relationship |
| 16 | Enns rules; Weiss value-based fees; Miller Heiman; "send me a proposal" practitioner consensus; rush-fee practice | Objection library, price presentation, expedited tier | All practitioner/web. **No book in this cluster was read directly — fourth pillar running (C5.14)** |

### Coverage confidence per sub-topic

| Sub-topic | Confidence | Basis |
|---|---|---|
| No-decision / indecision failure mode | **High** | Single large-n practitioner corpus, internally consistent, converges with P2 and P4 independently |
| Anchoring mechanics (who opens, precision) | **High** on mechanics, **nil** on level | Four primaries on adjustment; zero on optimum |
| Negotiation behaviour (irritators, counter-proposals, trading) | **Medium-high** | Published coding research, never replicated, method commercially owned |
| Price presentation architecture (one vs three) | **Medium** | Two practitioner sources in direct contradiction (C5.2); the usual mechanism is discredited (C5.3) |
| Timeline commitment / buffer ethics | **Medium** on the evidence, **high** on the argument | The meta-analysis is strong and off-domain; the ethics line is mine and argued, not found |
| Discovery method and sequencing | **Low-medium** | One unreplicated 40-year-old coded correlation carrying four sections |
| Cost-of-inaction quantification | **Low** | Arithmetic is sound; no source quantifies buyer-computed vs seller-supplied |
| Objection handling efficacy | **Low** | Structured practice, zero measurement at any tier |
| Talk-listen ratio, question count | **Low** | Vendor, correlational, wrong population |
| Multi-stakeholder consensus | **Low for this buyer** | Enterprise data against an SMB thesis (C5.11) |
| Selling speed / expedited premium | **Low** | Practice-universal in adjacent industries, no software-services evidence, premium level unsourced |
| Value-mode migration | **Nil** | Determination 2 |
| Concession size / decay | **Nil** | No formalism located; none invented |
| Anchoring under credibility deficit | **Nil, third pillar running** | C5.4 |

### Evidenced vs asserted

**Evidenced (primary, peer-reviewed):** first-offer advantage and its three neutralisers; first-offer disadvantage under information asymmetry (d = 0.96–1.68); precise-anchor adjustment and knowledge attribution, with expert moderation; attraction-effect boundary conditions; labor illusion ~8%; expectations→satisfaction r = .29; prospect-theory functional form; warranty signalling strongest for low-reputation sellers; prospective accounting and coupling; country-of-origin cue effects (inherited).

**Evidenced (large-n practitioner, unreplicated, method-owned):** every JOLT figure; SPIN's Implication/Need-payoff correlation; Rackham's closing finding; the irritator and defend-attack numbers.

**Vendor, correlational, labelled:** talk-listen 46/54; 11–14 questions; 3–4 problems; MAP +26%; Gartner buying-group and consensus data; all win-rate benchmarks; digital-sales-room claims (reported and discounted as implausible).

**Asserted, untested:** responsiveness → win rate; expedited-premium level for software (the internal +35% has no source); "we can start on the 15th" as a BATNA signal; the reuse-attribution wording; "send me a proposal" as a brush-off (consensus without measurement).

**Mine, and marked as mine:** F/41 Rung 5 and the composite ladder; F/42 and the §7.2 worksheet; F/43; F/46's four cells; F/48's three-term distinction **and its ethics line**; F/51's trading inventory; §7.4's routing on indecision level (which is my resolution of a contradiction neither source resolves); §7.5's mapping; all ethics labels.

### Replication status of every behavioural principle relied on

| Principle | Status |
|---|---|
| Anchoring (adjustment insufficiency) | Robust and replicated broadly; **magnitude and moderators contested**; never tested under credibility deficit |
| First-offer advantage (G&M) | Replicated in the original's three experiments; **reversed under information asymmetry** by M&L |
| Anchor precision | Replicated across labs; **pre-registered field work shows expertise moderates and can reverse** |
| Attraction / decoy effect | **Boundary-conditioned by FLB 2014**: largely restricted to all-numeric stylised stimuli. Do not treat as general |
| Loss aversion | **Actively contested.** See determination 1 |
| Labor illusion | Single research programme, 5 experiments, not independently replicated to my knowledge |
| Expectancy-disconfirmation (assimilation) | **Meta-analytic, 168 studies, N = 58,597.** Strongest replication basis in this pillar |
| Pain of paying / coupling | Replicated in consumer contexts; **untested on B2B project work** |
| Price–quality inference at both ends | Replicated (inherited P1/P4); band edges unmeasured for services |
| Door-in-the-face | Replicated for verbal compliance, **fails on behavioural compliance** — excluded (I5) |
| SPIN | **Never replicated in 40 years** |
| JOLT | Never replicated; single vendor corpus |
| Challenger | Never replicated; the academic literature says so explicitly |
| Voss | Not evidenced for B2B; one scholarly rejoinder doubts transferability |

### The four determinations

**Determination 1 — Loss aversion. The evidence base is genuinely contested, and the specific transfer this program relies on is the least defensible one available.**

*What is claimed by the challenge:* Gal & Rucker (2018, *JCP*) argue the evidence does not support a general principle that losses loom larger than gains. Each canonical demonstration — risky-choice asymmetry, status-quo bias, endowment effect, sunk cost, framing — admits an alternative explanation, and the pattern is better described as **loss attention** (losses draw more attention and effort) than loss aversion (losses are more painful). They call the default assumption of loss aversion a case of intellectual inertia.

*What is rebutted:* Mrkva, Johnson, Gächter & Herrmann (2020, *JCP*, five samples, **N = 17,720**) hold that loss aversion is real but moderated, and report the moderators. Simonson & Kivetz (2018) accept the contribution but say the rejection goes too far, arguing for contingent loss aversion. Higgins & Liberman (2018) argue the reference point is the omitted variable — loss aversion appears when the reference point is the status quo and not otherwise. Gal & Rucker replied. **Kahneman did not participate in the published dialogue**; the only on-record position located is journalistic (Salon, 2021) reporting he agreed the evidence appears only in certain situations. I could not locate a formal Kahneman response, and the brief's premise that one exists is not confirmed by what I found.

*Neither softened nor overstated:* loss aversion is not dead, and it is not a general law. It is a contingent effect with known moderators.

*The program-level finding, and it is worse than the debate itself:* **among Mrkva et al.'s own moderators are domain knowledge and experience, both associated with *lower* loss aversion.** P2's target buyer is an operations leader with deep domain knowledge making a decision in their own familiar operational domain. **The defenders' evidence, not the critics', is what undercuts the transfer here.** λ ≈ 2.25 applied to this buyer is the least defensible parameter transfer in the program. This propagates back into P1 and P4 wherever loss aversion is treated as among the strongest available principles: it should be re-rated to contingent, with an explicit note that the target buyer sits in the low-λ moderator band. Loss *attention* — Gal & Rucker's own preferred construct — may survive the transfer where loss aversion does not, and it would predict something the corpus is not currently doing: framing the loss to secure **attention and effort** (i.e. discovery engagement) rather than to secure **willingness to pay**.

**Determination 2 — F/27 value-mode migration: not proven, not killed, unmeasured; and the nearest evidence cannot bear the weight.**

Rackham & DeVincentis supply the taxonomy (intrinsic/transactional, extrinsic/consultative, strategic/enterprise), indexed on how well-defined the buyer's needs are and how differentiated the offer is. **No source located establishes that a seller can move a buyer between modes inside a single sales cycle, at any rate, at any cost.** The value-based-selling literature (Terho/Haas/Eggert lineage; *IMM* 2023 review) treats value-based selling as a **seller capability with performance correlates**, not a buyer-state transition, and the review is explicitly framed as a research agenda — the field's own statement that this is unestablished. The one on-topic quantitative finding is cross-sectional (~250 US firms): value-based selling *moderates* the negative effect of customer price sensitivity on provider profitability. That is a firm-level moderation over time; it cannot establish that a seller moved a buyer, and cross-sectional design cannot establish direction at all. Practitioner canon (Enns, Weiss) asserts the migration confidently and measures nothing; Weiss' four resistances are a taxonomy of failure modes, not evidence of success.

*What this does to the "Operations Transformation Partner" reframe:* the reframe's purpose in P3 is to move the buyer out of price-comparison mode. **That purpose is unevidenced.** Two readings survive and the corpus should hold both: (a) the reframe works by *selecting* buyers already in value mode rather than converting price-mode buyers — which is a P2 qualification function, not a P5 conversation function, and is consistent with the cross-sectional moderation result; (b) it works by conversion, which no one has measured. Reading (a) requires no new evidence and relocates the reframe's payoff from the sales conversation to buyer selection. **Determination: F/27 cannot be relied on as a within-cycle conversation mechanism.**

**Determination 3 — The internal speed disagreement. ChatGPT's mechanism is refuted; Claude's decomposition is structurally supported but empirically thin; both docs' headline advice is partly wrong.**

*Against ChatGPT's expectation-management/sandbag position:* Schiebler, Lee & Brodbeck (2025, *JAMS*, 150 records, 168 studies, **N = 58,597**) — expectations→satisfaction is **r = .29 [.24, .34]**, a positive assimilation effect; "there currently exists little empirical evidence for contrast effects"; 2 of 99 studies found a significant negative relation. The Agency A/Agency B thought experiment depends on the contrast effect, which is the effect the meta-analysis could not find. The doc's claim that "this advice is repeated because it works" is **not supported**. Caveat stated honestly: the meta-analysis aggregates consumer satisfaction broadly and a B2B software delivery date is not obviously in-sample — so this is not proof that Agency B loses. **But the burden has moved: contrast is now the claim requiring evidence.** Note also that ChatGPT's own recommended *wording* ("our target delivery is two weeks... a professional forecast") is honest and defensible; it is the stated mechanism, not the language, that fails (C5.15).

*Against ChatGPT's "keep the efficiency internal":* Buell & Norton (2011, *Mgmt Sci*, 5 experiments) — operational transparency raised valuation ~8%, and subjects sometimes preferred longer waits with visible work to instantaneous identical results. Invisible speed forfeits value. This cuts against concealment.

*For Claude's decomposition:* the three-way split (responsiveness / delivery speed / speed-of-committing) is **not found in any source** but each branch resolves differently under evidence, which is itself the argument for the split — an undecomposed "speed" claim cannot be evaluated. Branch by branch: **responsiveness** — asserted, plausible, untested; no source on responsiveness→win rate in services. **Delivery speed as a priced asset** — supported in principle by Buell & Norton, universal practice in adjacent industries (logistics, creative rush fees), **and the +35% premium level has no source whatsoever.** **Speed of committing (slow down)** — the best-supported of the three, by two independent practitioner routes (Enns Rule 1; Weiss' conceptual-agreement precondition) plus F/46's asymmetry argument, since committing early is opening first from the uninformed column.

*For Claude's attribution claim:* "fast because 60% already exists" is directionally supported by Buell & Norton (attributed visible capability raises valuation) and is **tested nowhere in this specific form.** It carries a hard dependency: the percentage must be measured or the claim is misrepresentation (T5.24), and the measurement is a P7 fact, not a sales choice. It also carries an unexamined risk the corpus has not raised, and it is C5.8: transparency about *reuse* may commoditise rather than elevate — a buyer who learns 60% was pre-built has been handed an argument for a lower price. **No source tests transparency about reuse.**

*What is supported:* stop committing fast; show the work; price speed rather than give it away; use forecast-plus-disclosed-buffer language. *What is asserted:* the whole responsiveness branch, the premium level, the specific attribution wording, the start-date signal. *What is refuted:* the contrast/delight mechanism, and concealing the efficiency. **No preference expressed between the docs; each is right about a different thing and each is wrong about its own headline mechanism.**

**Determination 4 — Ethics labels.** Applied to all 32 techniques and to the three exclusions: **22 legitimate, 7 grey, 6 misrepresentation (excluded), 1 excluded on efficacy rather than ethics** (door-in-the-face). Full tables and reason lines in §5. The two boundary findings the pillar adds (§5.5): (1) **the professional buffer becomes misrepresentation of capability at the point where the buffered number is presented as the forecast rather than as the commitment** — construction firms buffer, but they do not call the buffered date their expected date, and this is the line neither internal doc draws; (2) **manufactured urgency has a legitimate twin the corpus already owns** — P4's F/38 Track B dated, capacity-bounded activation window, legitimate precisely because a two-founder studio's capacity limit is true. The headcount-inflation boundary is **recorded, not re-litigated**, per instruction. The general rule the labels converge on: *the same sentence is legitimate when the constraint is real and a misrepresentation when it is manufactured.*

### What I could not find

- Any independent replication of SPIN, JOLT, or Challenger. Forty, four and fifteen years respectively.
- Any measurement of value-mode migration within a sales cycle (determination 2).
- Any test of anchoring, or of any pricing behaviour, under a **credibility deficit** as distinct from an information deficit. Third pillar running (C5.4).
- Any measurement of where the defensible price band's edges sit for a services firm (C5.5). P4 asked; nothing exists.
- Any expedited-premium benchmark for bespoke software. Rush-fee practice in translation, print and creative services was found at web tier and does not transfer cleanly.
- Any formalism for concession size, concession decay, reservation-price setting, or buffer magnitude. The "decreasing concessions signal a limit" heuristic is folk practice with no located test.
- Any experimental test of talk-listen ratio causation (C5.6).
- Any peer-reviewed objection-handling efficacy study at any tier.
- Any test of pain-of-paying/coupling on B2B project work (C5.9).
- A traceable Gartner primary for the widely-repeated "each additional stakeholder reduces purchase probability ~10pp." Web-tier restatements only; not formalised.
- A traceable primary for "in over 75% of calls reps failed to establish a quantified cost of inaction" (web tier, used once and labelled).
- A formal Kahneman response to Gal & Rucker. Only a journalistic report of his position.
- **Primary texts:** Enns, Weiss, Rackham, Dixon ×2, Rackham & DeVincentis, Voss, Miller Heiman — **no book in this pillar was read directly.** Four paywalled *JCP* dialogue papers were abstract-level only (HTTP 402). This is the pillar's largest methodological limitation and it bears on every practitioner-tier claim.

### Contradictions surfaced and left unresolved

Sixteen, registered C5.1–C5.16 in §9 and not flattened. The five that change decisions: **C5.1** loss aversion's contested status, which propagates backward into P1 and P4. **C5.2/C5.3** one recommendation vs three options, where the contradiction is between two practitioner sources and the mechanism usually invoked to settle it has been boundary-conditioned away; my routing on indecision level is a construction, not a finding. **C5.4** anchoring under credibility deficit, unanswered for the third pillar. **C5.9** front-loaded deposit vs milestone bond — a genuine tension between two things this program currently recommends in different pillars. **C5.11** Gartner's 11 stakeholders vs P2's single signatory, which cannot both describe the target buyer.

### Handoff notes for P6 — Delivery Discipline as Margin Defense

1. **Buffer magnitude is yours, and it is now an ethics-bearing number.** §7.6 and F/48 fix the *language*; nothing found gives a defensible `b`. P6 owns estimation under uncertainty, and F/48's line means the buffer must be sized to *identified* uncertainty and disclosed as a buffer — so P6's estimation method is what makes the sales language honest.
2. **P5.9 is a direct hit on P6's own brief.** The plan lists "expectation-versus-satisfaction mechanics" for P6. Schiebler et al. (r = +.29, N = 58,597) says the assimilation prediction holds and contrast does not. P6 should not rebuild underpromise-and-overdeliver; it should treat contrast as the claim needing evidence.
3. **T5.23 is a bet on delivery quality.** Buell & Norton's asymmetry: operational transparency makes good outcomes look better **and bad outcomes look worse.** Every transparency instrument P5 recommends increases the cost of a bad delivery. That coupling is P6's problem.
4. **Six of the nine FOMU rows (§7.5) are clauses that P6 must be able to honour.** The T-guard is absolute: never a bond you could not honour. Milestone acceptance gates, payment on acceptance, and bounded outcome guarantees are all delivery-side obligations sold in the conversation. **P6 should cost each of F/36's six instruments.**
5. **C5.9 is live for P6.** If milestone billing degrades the buyer's experience of the delivery (maximal coupling) while protecting them, P6 has to choose, and no evidence exists either way.
6. **H5.9 and §7.1 Q19** hand P6 the acceptance gate written in the buyer's own words. That sentence is simultaneously the sales artefact and the scope boundary.
7. **T5.27's ratchet.** Systematic early delivery may reset the baseline (Mela et al.'s promotion-depth analogue). If P6 builds slack in, it should know it is training the buyer's expectation.

### Handoff notes for P7 — Productization & Reuse Economics

1. **T5.24 makes a reuse percentage into a truth claim, not a marketing claim.** "60% already exists" is misrepresentation if unmeasured. **P7 owes a measurement method for reuse percentage**, and it is load-bearing in two directions: it justifies a short timeline on a reusable project *and* a longer one on a non-reusable project.
2. **C5.8 is P7's central strategic question and P5 could not answer it.** Buell & Norton say visible effort raises valuation ~8%; `chatgpt3.md` says keep efficiencies internal; `claude-response3.md` says attribute the speed to reuse. **Nothing tests transparency about *reuse* specifically.** The risk P7 must weigh: a buyer told 60% was pre-built has been handed a discount argument. This is the labor illusion's boundary condition and it may invert for reuse.
3. **The expedited tier (T5.25) needs a cost basis P7 owns.** No source prices an expedited tier for bespoke software; the internal +35% is unsourced. Whether expedite is cheap depends on reuse depth and slack.
4. **F/51 rows 2, 6 and 8** — scope depth, IP/source-code custody, support window — are trading variables whose cost to the seller is a reuse-library fact. **P7 determines which trades are actually cheap.** IP custody in particular: the tradeable version is "buyer gets project source, studio retains reusable modules," and whether that separation is clean is a P7 architecture question before it is a P9 drafting question.
5. **P4's Gate 3 remains open and is now also a P7 question** (T5.31): whether to credit a paid audit fee against the build. If audit output is itself a reusable template, its economics change.
6. **F/56 / determination 2 touches P7.** If the "Operations Transformation Partner" reframe works by *selecting* value-mode buyers rather than converting price-mode buyers, then productization is the instrument that makes the selection affordable — and that is a different strategic role than the corpus currently assigns it.
