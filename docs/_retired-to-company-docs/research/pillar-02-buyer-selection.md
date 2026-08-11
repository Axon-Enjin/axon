# Pillar 2 — Buyer Selection & Qualification

**Sub-agent:** 2 of 9
**Retrieval date for all web findings:** 2026-07-28 (unless a different date is stamped inline)
**Corpus grounding:** `pricing/chatgpt2.md`, `pricing/claude-response2.md`, `research/pillar-01-price-architecture.md`
**Standing rules observed:** report and cite, do not recommend; preserve contradictions; stamp source tier and retrieval date.

---

## 0. Corpus grounding — what the internal docs already assert

Five claims carry the whole pillar. They are stated here as claims, not findings, and each is tested in §7 and §8.

| # | Internal claim | Source |
|---|---|---|
| A1 | **The multi-branch thesis.** "Pain multiplies by location count while the buying decision stays single." A leak costing ₱40k/mo at one branch costs ₱480k/mo across twelve, but you still sell to one COO. Enterprise has the loss but a nine-month cycle; single-site SMB has the short cycle but too little loss. | `claude-response2.md` ¶2 |
| A2 | **The willingness-to-spend inversion.** "Doesn't care about spending money" is the *wrong* filter. The right buyer "cares intensely about money and is therefore capable of doing the arithmetic that makes your fee obviously correct." | `claude-response2.md` ¶4 |
| A3 | **The conscious-loss condition.** "Loss aversion only converts when the loss is already conscious." Signals: an elaborate coping spreadsheet, a *hired* manual reconciler, a prior competing quote. Otherwise you fund an education campaign. | `claude-response2.md` ¶5 |
| A4 | **The firmographic filter set.** AUD 5–50M revenue; 5–50 locations; has an ops manager/COO but **no CTO**; paying for ≥3 non-integrating SaaS tools; recently opened or acquired a location; operates under an audit or compliance regime. | `claude-response2.md` §"Qualification filters worth writing down" |
| A5 | **The ROI-multiple floor.** Avoid "any client whose quantified annual loss is less than about five times your fee. Below that multiple, the ROI argument stops being obvious and you're back to negotiating on price." | `claude-response2.md` ¶ after vertical list |

`chatgpt2.md` supplies a partially conflicting frame: four buyer characteristics (loses money daily; has authority and budget; cost of inaction exceeds the proposal; treats software as investment not expense), a PH-first geography preference, six candidate verticals, an explicit avoid-list (single-location restaurants, small online sellers, freelancers, tiny startups, <10 employees) with the stated reason that *"they usually negotiate aggressively on price because every expense is highly visible"* — **which is the direct negation of A2** (see C2.1). It also supplies the reframe question: not "who needs software" but *"who loses the most money every month because they don't have software?"*

Handoff from Pillar 1 that this pillar is built on:
- **F5/EVE** is the scoring engine. Reference Value (RV) is findable pre-sale; PDV and NDV_neg are not, without the buyer.
- **C2** (is the value ceiling knowable pre-sale?) converts into a screening criterion here.
- **F/8 metric density** is the formal name for the branch-homogeneity problem.
- **F18 Deposit Coverage Ratio** functions as a disqualifier.
- Cost-floor arithmetic (F1–F4) implies a hard minimum viable deal size.

---

## 1. Pillars — load-bearing principles

**P2.1 — Qualification is a *pricing* instrument, not a sales-efficiency instrument.**
The Pillar 1 chain is: value-based price requires a computed value ceiling → the ceiling requires Reference Value and Positive Differentiation Value → those require a buyer who has, or can produce, the arithmetic. Therefore a buyer who cannot quantify their own loss is not merely a slow buyer; they are a buyer against whom value-based pricing is *structurally unavailable*. This is the pillar's central proposition and it is derived, not cited.

**P2.2 — The unit of qualification is the *ratio*, not the pain.**
Both internal docs and the vertical-SaaS literature converge on the same shape: what is being hunted is a ratio of quantified annual loss to decision-chain length. Tidemark's vertical-SaaS work states the buyer-side half of this explicitly: *"There's no 18-month procurement process with seven stakeholders. One person can decide and sign. Sales cycles compress from 6 months to 6 weeks."* (practitioner tier). Gartner-derived benchmarks state the enterprise half: median 11 stakeholders for technology purchases above $100k ACV. The gap between those two sentences is the entire opportunity described in A1.

**P2.3 — Disqualification is a measurable, positive-yield activity.**
Practitioner benchmark data reports that eliminating small/unlikely deals raises average deal size ~18%, that disqualifying earlier cuts cycle length ~23%, and that a "healthy" disqualification rate is 30–50% of qualified-stage opportunities (web/practitioner tier, 2026 retrieval — see §7.4 for the reliability caveat). MEDDPICC's own literature names the discipline as the hardest and most valuable part of the method: *"Downgrading a deal when the team needs the number is the hardest discipline in MEDDPICC, and the most valuable."*

**P2.4 — Pain is not one variable; it is *latent* and *explicit*, and only explicit pain correlates with closing in large sales.**
Rackham's SPIN research (35,000 calls / 12 years; primary-tier, published research programme) found that implied needs correlate with closing in *small* sales, and that in *large* sales only explicit needs do. A3's "conscious loss" is a firmographic-screening restatement of Rackham's explicit-need condition. The literature's difference from A3: Rackham treats the implied→explicit conversion as *the seller's job* (the Implication and Need-payoff questions exist for exactly that), whereas A3 treats an unconverted buyer as *disqualified*. This is C2.2.

**P2.5 — Absence of an economic buyer is a disqualifier; absence of a champion is a forecast defect.**
MEDDPICC separates these. The Economic Buyer is *"the sole person authorized to release budget… not the project sponsor, not the user, not the IT director running the proof of concept."* Miller Heiman's Strategic Selling names the same role as able to *"say yes when everyone else says no, or vice versa."* Both frameworks treat *access* to that person as the binary gate. A1's whole claim is that in a multi-branch mid-market operator the Economic Buyer, the User Buyer and the Champion are frequently the **same person** — which is what collapses the decision chain.

**P2.6 — "No decision" is the largest competitor, and a conscious loss does not immunise against it.**
Dixon & McKenna's JOLT Effect research (2.5M recorded sales conversations; practitioner-authoritative, large-N) reports 40–60% of B2B deals ending in no decision, and — critically for A3 — that of those, only **44% were lost to preference for the status quo** while **56% were lost to indecision driven by risk/fear of failure ("FOMU," fear of messing up)**. A3 assumes conscious loss converts. The JOLT split says the majority of no-decision losses come from a mechanism that conscious loss does not address and may aggravate. This is C2.3.

**P2.7 — Metric density constrains which multi-branch buyers are actually good buyers.**
Pillar 1's F/8 criterion: a price metric is high-density when each unit carries roughly equal value. Branch count is a high-density metric only if branches are comparable in revenue, headcount, process and system. A twelve-branch group where two flagship sites carry 60% of revenue is a *low-density* per-location buyer. No external source was found that applies density analysis to multi-location professional-services buyers; the transfer is derived from F/8 and flagged as thin (§ session review).

**P2.8 — Firmographics select for *structure*; triggers select for *timing*; the two are separately scored and must not be summed into one number without weights.**
The ICP-scoring literature converges on a four-category split — firmographic, technographic, strategic intent, behavioural — with weights set by historical predictive power on a 100-point scale, and tiering at A 80–100 / B 50–79 / C 0–49. Axon Enjin has no historical close data, so any weights it uses are *priors*, not fitted coefficients. That is a stated limitation of the rubric in §6.5, not a defect of it.

**P2.9 — The buyer's *type* may matter more than the buyer's *firmographics*, and the corpus is split on which type to hunt.**
Rackham & DeVincentis (*Rethinking the Sales Force*, 1999) partition buyers into intrinsic-value, extrinsic-value and strategic-value customers and argue the sales model must be customised per type — intrinsic-value buyers are the ones who already know what they want and buy on price/convenience, and are structurally hostile to consultative value creation. Wickersham's practitioner taxonomy (price / value / relationship / poker-face buyer, on axes of price-importance × value-or-relationship-importance, credited in lineage to Holden & Nagle) puts true price buyers at 15–20% of the population and names the **poker-face buyer** — someone who negotiates hard on price but is actually a value or relationship buyer — as the category most often misread. A2's "CFO who scrutinises every peso" is, in this taxonomy, a *poker-face buyer*, not a price buyer. `chatgpt2.md`'s avoid-list treats the same behaviour as evidence of a *price* buyer. The taxonomy explains how both internal docs can be describing the same observed behaviour and drawing opposite conclusions.

**P2.10 — Compliance-driven loss is the only category where the loss figure is published by a third party.**
For every other loss category the buyer must supply the number. Where a statutory penalty exists, the number is in legislation and the seller can cite it without the buyer's cooperation. This is the one class of buyer for whom the Pillar 1 C2 problem does not arise. Verified magnitudes for Australia in §7.5.

---

## 2. Frameworks — named, multi-step, reusable

### F/11 — MEDDPICC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition)
Origin: PTC, 1990s (MEDDIC) → MEDDICC adds Competition → MEDDPICC adds Paper Process. Practitioner-authoritative.
Element definitions as published:
- **Metrics** — the quantified business outcome the buyer expects. *"Not 'improve productivity' — closer to 'reduce close-cycle time by 20% on a $400M pipeline.'"*
- **Economic Buyer** — sole person authorised to release budget.
- **Decision Criteria** — *"the written and unwritten standards the buyer will use to compare options."*
- **Decision Process** — the approval sequence: who reviews, recommends, approves.
- **Paper Process** — procurement, legal, security, IT-governance, MSA redlines, DPAs.
- **Identify Pain** — the cost of inaction; must be specific, owned and quantified.
- **Champion** — actively sells for you when you are not in the room; distinguished from a *coach* who merely shares information.
- **Competition** — including "do nothing."

**Published 0–4 confidence scale (this is the reusable part):**
`0 = unknown · 1 = assumed · 2 = stated by the buyer · 3 = tested with the buyer · 4 = documented and confirmed.`
Guidance: a forecastable deal has **no element scored zero**. No universal numeric threshold is published. Reported case (WBM Technologies): *"98% close rate on opportunities scored 4.4 or above."* One reported implementation saw pipeline shrink 18% while forecast win rate climbed materially over two quarters. Recommended applicability band: deals with 5+ stakeholders, $50k+ ACV, 6+ month cycles — **note that A1's whole thesis is that Axon Enjin's target deals sit *outside* that band on stakeholder count and cycle length**, which is why F/11 is used here as a *gate-and-evidence* instrument rather than as a deal-management system.

### F/12 — SPICED (Situation, Pain, Impact, Critical Event, Decision) — Winning by Design
Jacco van der Kooij / Winning by Design. Practitioner-authoritative. Positioned by the literature as consultative rather than deal-mechanical, optimised for the **$50k–$250k ACV** band, and as one of four elements of WbD's operating model alongside the Bowtie customer-journey/data model, the rational-vs-emotional impact split, and critical events.
- **Situation** — current world: stack, team structure, growth.
- **Pain** — specific challenges/bottlenecks.
- **Impact** — consequence of not addressing them (the cost-of-inaction slot).
- **Critical Event** — a pivotal date or shift that creates a deadline. *This is the trigger-event slot inside a discovery framework.*
- **Decision** — buying process, committee, criteria.
Relevance to this pillar: SPICED is the only mainstream framework that treats **Critical Event as a co-equal qualification element** rather than as a prospecting input. A4's "recently opened or acquired a location" is a Critical Event in SPICED terms.

### F/13 — Miller Heiman Strategic Selling buying influences + Blue Sheet
Four roles: **Economic Buyer** (final budget authority), **User Buyer** (judges usability and day-to-day impact; governs adoption and referenceability), **Technical Buyer** (gatekeeper on technical/security/integration fit — CIO, IT director, security officer), **Coach** (internal advocate). Instruments: the **Blue Sheet**, which forces listing of every buying influence, their degree of influence, their *response mode*, and the **Win-Result** that lets each say yes; and **Red Flags**, the explicit register of gaps in knowledge or influence.
Direct bearing on A4's "has a COO but no CTO": in F/13 terms that firmographic filter is a claim that **the Technical Buyer role is vacant or weakly held**, removing the most common blocker seat. No source was found that tests whether an absent Technical Buyer raises or lowers win rate; the absence cuts both ways (no blocker, but also no internal integration owner). Flagged as C2.5.

### F/14 — Challenger Customer stakeholder taxonomy (Dixon, Adamson, Spencer, Toman; CEB research, 700 stakeholders)
Seven profiles split into three classes:
- **Mobilizers** — **Go-Getter** (seeks new ideas, over-delivers), **Teacher** (explains insights, sought out by peers and executives, motivates others), **Skeptic** (open but dissects detail, sees unclear projects as risky, wants small wins first).
- **Talkers** — Guide, Friend, Climber. Generous with information; *"often don't have sufficient urge or impetus to build group consensus or champion an idea."*
- **Blocker** — treats stability as a goal in itself; *"believe improvement projects are distractions."*
Bearing on A2: the **Skeptic** is a Mobilizer. A buyer who scrutinises every peso and *"believes changes require small wins first"* is, in this taxonomy, a preferred profile — which is corroboration for A2 from an independent research programme. It also implies a specific offer shape (small first win) rather than a large first build. That shape belongs to Pillar 4.

### F/15 — The four-category weighted ICP rubric (composite of the ICP-scoring literature)
1. **Firmographics** — revenue band, employee count, location count, business model.
2. **Technographics** — existing stack, complementary software, competitor presence, integration state.
3. **Strategic intent** — recent funding, leadership change, announced expansion, acquisition.
4. **Behavioural** — account-level engagement signals.
Method as published: distribute 100 points across categories, weighting by historical predictive power; tier at A 80–100 (pursue now), B 50–79 (market to, not first call), C 0–49 (no outbound investment). Web/practitioner tier, multiple concurring sources, no primary validation study found.

### F/16 — Signal stacking / trigger-event selling
Six published signal categories: hiring surges and job postings; funding rounds and M&A; technology-stack changes; leadership changes in the target persona; intent data and content engagement; earnings calls and filings. Reported effect sizes (web tier, unaudited — treat as directional only): trigger-based approaches "4× higher conversion, 30% shorter cycles, 5× better win rates when first to respond"; **37% win rate on accounts with an active trigger vs 19% cold**; **stacked signals (2–3 on one account) convert at 5–10× cold outreach**. Highest-converting single signals reported: leadership change in the buyer persona (new executives re-evaluate the stack inside 90 days) and funding events.

### F/17 — Rackham/DeVincentis three value modes
- **Intrinsic-value customer** — knows the product, knows the application, wants it cheap and convenient; value sits *in* the product. Consultative selling destroys margin here.
- **Extrinsic-value customer** — wants help configuring, applying, integrating; value sits in the *advice and the wrapper*.
- **Strategic-value customer** — wants a deep, mutual, capability-level relationship.
Explicit caution in the source: *"today's Intrinsic Value Customer may soon be motivated primarily by extrinsic or strategic considerations"* — value mode is a state, not a trait, so it cannot be treated as a permanent firmographic.

### F/18 — Holden/Nagle → Wickersham four buyer types
Axes: perceived value of differentiation × pain of price. Types: **Price buyer** (15–20% of population), **Value buyer** (maximises benefit-minus-price gap; the modal client), **Relationship buyer** (pays a premium), **Poker-face buyer** (negotiates like a price buyer, is actually a value or relationship buyer). The taxonomy's operational content is that price-signalling behaviour is *not diagnostic of buyer type*.

### F/19 — Jobs-to-be-Done switch interviews for buyer selection (Moesta / Christensen Institute)
Forces of Progress (Moesta & Spiek, adapted from Lewin's force-field analysis): **push** of the situation, **pull** of the new solution, **anxiety** of the new solution, **habit** of the present. **Big hire** (purchase) vs **little hire** (actual use) — *"value is delivered in the latter."* Method: interview ~10 recent buyers to surface struggling moments, desired outcomes, anxieties and habits; reported to yield *"3–5 distinct buying patterns that cover 90% of the market."* This is the only framework found that produces an ICP *inductively from won deals* rather than deductively from market attractiveness — which is exactly the research plan's own Open Question for the Operator.

### F/20 — Tidemark's vertical-market picking criteria
Three named characteristics of an ideal SMB vertical: **gigantic** (scoped by total size, *number of locations*, initial ARPU, and expansion ARPU), **highly fragmented market**, **highly fragmented value chain**. Mapping method: X-axis = number of companies in a 4-digit NAICS industry; Y-axis = market share of *all but the top 50 companies*; circle size = industry sales. Upper-right = *"Vertical SMB SaaS Heaven."* Also the single strongest external corroboration of A1's decision-chain half (quoted in P2.2) and of the compliance mechanism: *"When mistakes are expensive — fines, safety incidents, license loss — buyers accept premium pricing."*

### F/21 — The gate–score–tier qualification stack (assembled here from F/11, F/15, F/16 and Pillar 1's F5/F18)
The operator-runnable framework. Three sequential layers; a prospect must clear layer 1 entirely before layer 2 is scored.
1. **Hard gates (binary, any failure = disqualified):** minimum viable deal size met (F2.1); ROI-multiple screen passed (F2.2); Economic Buyer identified *and* reachable; quantification capacity present (F2.8); deposit acceptable in principle (F2.12).
2. **Weighted fit score (0–100):** §6.6 rubric.
3. **Tier and pursuit decision:** §6.10 Expected Value of Pursuit against cost-to-pursue.

---

## 3. Techniques — situational, each with its trigger

| # | Technique | Trigger condition |
|---|---|---|
| T2.1 | **Reference-value archaeology.** Before the first call, locate the *paid* alternative already in place: a reconciler's job ad, a named ops-admin role on LinkedIn, an incumbent SaaS logo on the careers page, a published tender. Enter discovery with RV already estimated. | Any prospect where you have web-visible hiring or stack data. Derived from Pillar 1 F5 step 1. |
| T2.2 | **Job-posting as a loss instrument.** A live advertisement for a manual-reconciliation, data-entry, roster-coordination or multi-site-reporting role is a public, dated, salaried statement of a conscious loss. It is also a hiring-surge trigger in F/16. | Prospect has ≥1 relevant open req. |
| T2.3 | **Ask for the buyer's own number first.** MEDDPICC scores Metrics 2 ("stated by the buyer") higher than 1 ("assumed") and 4 only when documented. Do not supply the loss figure; ask for it, then test it. The answer *is* the F2.8 quantification-capacity test. | Every discovery call. |
| T2.4 | **The prior-quote probe.** A previous competing quote is a literal reference price and, per A3, evidence the loss is already priced in the buyer's head. | Any prospect who mentions having "looked into this before." |
| T2.5 | **Branch-homogeneity interrogation before per-location pricing.** Ask for revenue and headcount by site. If the top two sites exceed ~50% of total, per-location pricing is low-density (F/8) and will generate disputes. | Any prospect where a per-location price metric is contemplated. |
| T2.6 | **Blue-Sheet the seat map, not the org chart.** Fill Economic / User / Technical / Coach for a multi-branch operator; expect collisions (one person in three seats). Record every unfilled seat as an explicit Red Flag. | Any deal above the minimum viable size. |
| T2.7 | **Mobilizer sorting.** Classify your contact against F/14. A generous, informative, unurgent contact is a Talker, not a Champion — an information source, not a forecast basis. | After call two. |
| T2.8 | **Critical-event anchoring.** Convert the trigger into a date the buyer already owns (new site opens, audit window, licence renewal, acquisition completion) rather than a deadline you impose. | Any prospect with an F/16 signal. |
| T2.9 | **Cite the statutory penalty, not your value estimate.** In regulated care, the maximum civil penalty is a published number; it does not require the buyer's cooperation to establish (§7.5). | Prospect operates under NDIS, Aged Care Act 2024, childcare or equivalent regime. |
| T2.10 | **Score-zero downgrade.** Any MEDDPICC element still at 0 after two meetings moves the deal out of forecast, regardless of enthusiasm. | Standing rule per F/11. |
| T2.11 | **Signal stacking before outreach.** Do not contact on one signal. Wait for or find a second (e.g. new site + ops-role hire). Reported 5–10× conversion differential vs cold, though the figure is web-tier. | All outbound. |
| T2.12 | **Poker-face disambiguation.** When a buyer negotiates hard on price, test whether they can articulate the *value* gap. A buyer who argues about price but can state their own loss figure is a poker-face/value buyer (F/18); one who cannot is a price buyer. | Any hard price objection at qualification stage. |
| T2.13 | **Deposit as a qualification probe, not a negotiation.** Introduce the deposit requirement early precisely to see who fails it. Per Pillar 1 F18, a deposit that does not cover cost-to-first-milestone means the studio is financing the client. | Before proposal. |
| T2.14 | **Absent-CTO integration-owner check.** A4 selects for no CTO. Immediately establish who will own data access, credentials and integration on the client side. An unfilled Technical Buyer seat with no substitute is a delivery risk, not an advantage. | Any prospect matching A4's no-CTO filter. |
| T2.15 | **Ten switch interviews on won work.** Run F/19 on whatever Axon Enjin has actually delivered, before ranking markets. The research plan's own Open Question makes this the highest-leverage unexecuted step in the pillar. | Available now; blocks nothing else. |

---

## 4. Hacks — asymmetric, low-effort, high-leverage

- **H2.1 — Read the careers page as a P&L.** Every advertised coordination/reconciliation/reporting role is a salaried line item that your build competes against. It is free, dated, public Reference Value.
- **H2.2 — Count the locations from the store-locator page.** Location count — A1's multiplier and F/20's scoping variable — is almost always published by the prospect themselves.
- **H2.3 — Regulator enforcement registers as a target list.** Aged-care and NDIS compliance actions are published by the regulators (Aged Care Quality and Safety Commission compliance register; NDIS Commission). A named provider under an active compliance action has a conscious, dated, third-party-quantified loss.
- **H2.4 — Acquisition announcements are double signals.** An acquisition is simultaneously a Critical Event (F/12), a strategic-intent trigger (F/15), and a guaranteed systems-heterogeneity problem — two stacks that must merge. In a PE roll-up context the acquirer's *integration* need recurs on every add-on.
- **H2.5 — The 0–4 scale as a one-page CRM.** Eight MEDDPICC elements × 0–4 on a single line per deal replaces a pipeline tool for a studio with fewer than twenty live opportunities.
- **H2.6 — Publish the disqualifiers.** Stating the minimum viable deal size and the ROI-multiple screen publicly performs selection (and per Pillar 1's anchoring material, sets a floor) without a single conversation. Grey/legitimate boundary belongs to P4.
- **H2.7 — Invert the funnel metric.** Track *disqualification rate* as a positive KPI against the 30–50% band; a rate below the band is evidence of unqualified pipeline, not of good targeting.
- **H2.8 — Ask for the coping spreadsheet as an artefact.** Requesting the file (not a description) converts a stated pain into a documented one — MEDDPICC 2 → 4 — and yields the actual data model for the build.

---

## 5. Terms — glossary

| Term | One-line definition |
|---|---|
| **ICP (Ideal Customer Profile)** | The firmographic/technographic/behavioural description of accounts that structurally fit, distinct from a persona (a person) and from a lead (an individual). |
| **Fit score vs intent score** | Fit = structural match to the ICP; intent/timing = evidence of an active buying cycle. Scored separately (P2.8). |
| **Economic Buyer** | The sole person able to release budget and to override every other stakeholder. |
| **User Buyer** | Judges day-to-day usability; governs adoption and referenceability. |
| **Technical Buyer** | Gatekeeper on technical, security and integration fit; can veto, cannot approve. |
| **Coach / Champion** | Coach shares information; Champion actively sells for you when you are absent. Not interchangeable. |
| **Mobilizer** | Challenger-taxonomy class (Go-Getter, Teacher, Skeptic) willing to challenge information and build internal consensus. |
| **Talker** | Informative but non-mobilising stakeholder (Guide, Friend, Climber). |
| **Blocker** | Stakeholder for whom stability is itself the goal; treats improvement projects as distractions. |
| **Latent / implied need** | A stated problem or dissatisfaction; correlates with closing in small sales only (Rackham). |
| **Explicit need** | A stated want or desire for a solution; the only need class correlating with closing in large sales. |
| **Conscious loss** | Internal-corpus term: a loss the buyer has already quantified or paid to mitigate. Operationally the explicit-need condition plus a paid artefact. |
| **Coping artefact** | The spreadsheet, hired role, or workaround process that constitutes evidence of conscious loss and supplies Reference Value. |
| **Cost of inaction (COI)** | The quantified consequence of the buyer doing nothing; MEDDPICC's Identify Pain, SPICED's Impact. |
| **Critical Event** | A dated, buyer-owned event that forces a decision by a deadline (SPICED). |
| **Trigger event / signal** | An observable external change indicating an opening buying cycle. |
| **Signal stacking** | Requiring 2–3 concurrent signals on one account before outreach. |
| **Paper Process** | Procurement, legal, security and governance steps *after* commercial agreement. |
| **Decision chain length** | Count of sequential approvals between first meeting and signature. The denominator in A1. |
| **Metric density** | Degree to which each unit of the price metric carries equal value (Pillar 1 F/8); low density in heterogeneous branch estates. |
| **Branch homogeneity** | The comparability of sites on revenue, headcount, process and systems. |
| **Firmographic / technographic** | Company-structure attributes / software-stack attributes. |
| **Intrinsic / extrinsic / strategic value customer** | Rackham & DeVincentis' three value modes; determines whether consultative selling creates or destroys margin. |
| **Price / value / relationship / poker-face buyer** | Holden–Nagle→Wickersham types; price-signalling behaviour is not diagnostic of type. |
| **FOMU** | "Fear of messing up"; the risk-aversion mechanism behind 56% of no-decision losses (JOLT). |
| **No-decision loss** | An opportunity lost to inaction rather than to a competitor; 40–60% of B2B deals. |
| **Disqualification rate** | Share of entered opportunities deliberately exited; benchmark band 30–50%. |
| **Minimum viable deal size (MVDS)** | The smallest fee at which a deal clears its own cost floor plus its cost to acquire. |
| **ROI-multiple screen** | The minimum ratio of the buyer's quantified annual loss to your fee required for the value argument to hold without price negotiation. |
| **Deposit Coverage Ratio (DCR)** | Pillar 1 F18: deposit ÷ cost to first milestone; here used as a screen. |
| **Big hire / little hire** | JTBD: the purchase decision vs the adoption decision; value is delivered in the second. |
| **Forces of Progress** | JTBD push / pull / anxiety / habit force-field on a switching decision. |
| **Roll-up / platform / add-on** | PE consolidation structure: a sponsor buys a platform company then bolts on acquisitions. Each add-on is a systems-integration event. |

---

## 6. Formulas

All formulas below are **derived for this pillar** unless a source is named. Variable definitions follow each. PHP and AUD worked examples use the same two archetype prospects throughout so that the numbers chain:

- **Archetype R (PH):** 6-branch retail/hardware chain, PHP 180M revenue, 95 staff, one full-time reconciler at PHP 30,000/mo fully loaded, three non-integrating SaaS tools, owner-operator + one ops manager, no CTO, opened branch #6 four months ago. (Same buyer as Pillar 1's F5 PHP example.)
- **Archetype C (AU):** 4-clinic allied-health group, AUD 6.2M revenue, 38 staff, practice manager + owner-principal, incumbent PMS plus two bolt-ons, AUD 240,000/yr of no-show revenue, one site added by acquisition six months ago, operates under a health-records and (for one service line) NDIS obligation.

### F2.1 — Minimum Viable Deal Size (MVDS)

```
MVDS = (D_days × R_breakeven) / (1 − m_target)  +  CAC_expected
```
- `D_days` = delivery days the smallest realistic build consumes
- `R_breakeven` = break-even day rate from Pillar 1 F3 (fully-loaded cost ÷ billable days)
- `m_target` = target gross margin as a decimal
- `CAC_expected` = expected acquisition cost per won deal = (cost per pursuit ÷ win rate)

**PHP worked.** Take `R_breakeven = PHP 9,000/day` (illustrative; Pillar 1 F3 governs the real figure), `D_days = 25`, `m_target = 0.55`, cost per pursuit `PHP 18,000` at a `0.30` win rate → `CAC_expected = 60,000`.
`MVDS = (25 × 9,000) / 0.45 + 60,000 = 225,000 / 0.45 + 60,000 = 500,000 + 60,000 =` **PHP 560,000**.
Note this lands inside `chatgpt2.md`'s stated PHP 500k–2M band — but at its *bottom edge*, meaning the lower half of that band is at or below the floor once CAC is loaded.

**AUD worked.** `R_breakeven = AUD 520/day`, `D_days = 25`, `m_target = 0.55`, cost per pursuit `AUD 900` at `0.25` win rate → `CAC_expected = 3,600`.
`MVDS = (25 × 520)/0.45 + 3,600 = 13,000/0.45 + 3,600 = 28,889 + 3,600 =` **≈ AUD 32,500**.

**Screening use:** a prospect whose realistic scope cannot clear MVDS is disqualified on arithmetic, before any judgement about fit.

### F2.2 — ROI-Multiple Screen (minimum required quantified loss)

Inverse of Pillar 1 F7 (`R = V_annualized / P_build`), solved for the buyer-side threshold.

```
L_required = k_ROI × P_expected
Pass if:  L_quantified ≥ L_required
Headroom = L_quantified / P_expected
```
- `k_ROI` = required ROI multiple. A5 asserts **5×**. Pillar 1 records Weiss' secondary-sourced **10:1** target. The screen is run at both.
- `P_expected` = the fee you expect to quote
- `L_quantified` = the buyer's annualised loss, *documented at MEDDPICC ≥2*

**PHP worked (Archetype R).** Pillar 1 F5 computed `NDV = PHP 777,600` and `EV = PHP 1,137,600`. Expected quote `P = PHP 600,000` (at MVDS + margin).
At `k_ROI = 5`: `L_required = 3,000,000`. Against `L_quantified = 777,600` → **FAIL**. Headroom = 1.3×.
At `k_ROI = 10`: fails by a wider margin.
**This is a decision-changing result.** Archetype R — the exact buyer Pillar 1 used for its EVE worked example — fails A5's own 5× screen once MVDS-based pricing is applied. Either the deal size floor is too high for a 6-branch PHP-180M retailer, or A5's 5× multiple is unattainable at PH loss magnitudes, or the loss quantification in Pillar 1 F5 is too conservative. Recorded as **C2.6**, unresolved.

**AUD worked (Archetype C).** Pillar 1 F5 computed `EV = AUD 48,000`, `PDV net = AUD 42,000`. Expected quote `P = AUD 35,000`.
At `k_ROI = 5`: `L_required = 175,000` vs `L_quantified = 42,000` → **FAIL**. Headroom = 1.2×.
Passing at 5× on a 4-clinic group would require `L_quantified ≥ 175,000` — i.e. capturing ~73% of the AUD 240,000 no-show pool rather than 15%, or adding further loss categories (claim rejections, lapsed recalls, compliance exposure).
**Implication for buyer selection:** A5's 5× screen is not satisfiable by *four-site* operators at these loss magnitudes. It becomes satisfiable as location count rises (see F2.3) or as compliance penalty exposure is added (§7.5). This is the strongest internally-derived argument found for the 5–50-location band in A4, and it arrives from cost arithmetic rather than from preference.

### F2.3 — Pain-per-Location Multiplier (PPL) and the location threshold

A1 formalised.

```
L_total = L_per_site × N × ρ
```
- `L_per_site` = quantified annual loss at a representative single site
- `N` = number of sites
- `ρ` = **leak-recurrence coefficient**, 0 < ρ ≤ 1: the fraction of the per-site loss that actually recurs independently at each additional site. ρ = 1 means the leak is fully replicated per site (e.g. per-site stock reconciliation). ρ < 1 means partial centralisation already absorbs it (e.g. one central finance team already consolidates).

Solving F2.2 for the minimum location count:

```
N_min = (k_ROI × P_expected) / (L_per_site × ρ)
```

**PHP worked (Archetype R).** `L_per_site = 777,600 / 6 = PHP 129,600` at observed ρ. Assume `ρ = 0.85`, `P = 600,000`, `k_ROI = 5`:
`N_min = 3,000,000 / (129,600 × 0.85) = 3,000,000 / 110,160 =` **27 sites**.
At `k_ROI = 3`: `N_min ≈ 16 sites`. At `k_ROI = 2`: `N_min ≈ 11 sites`.

**AUD worked (Archetype C).** `L_per_site = 42,000 / 4 = AUD 10,500`; `ρ = 0.9`; `P = 35,000`; `k_ROI = 5`:
`N_min = 175,000 / 9,450 =` **19 sites**.

**Reading:** under A5's own 5× rule and MVDS-derived pricing, the qualifying band is *far* toward the upper end of A4's "5–50 locations" — roughly **19–27+ sites**, not 5. The 5-location end of A4's range only qualifies if `k_ROI` is relaxed to ~1.5–2×, or `L_per_site` is materially larger than Pillar 1's worked examples, or compliance penalty exposure is included. Recorded as **C2.7**.

### F2.4 — Branch Homogeneity Index (BHI) — metric-density test

Derived from Pillar 1 F/8.

```
BHI = 1 − HHI_sites
HHI_sites = Σ (s_i)²      where s_i = site i's share of the relevant driver
```
- `s_i` = site *i*'s share of the driver the price metric would key off (revenue, transactions, headcount, or patient volume)
- BHI → 1 means perfectly even sites (high metric density; per-location pricing defensible). BHI → 0 means one site dominates (low density; per-location pricing will be disputed).
- Reference points: `N` identical sites give `HHI = 1/N`, so `BHI_max = 1 − 1/N`. Express as **normalised BHI**: `BHI_norm = BHI / (1 − 1/N)`, range 0–1.

**PHP worked (Archetype R, 6 sites).** Revenue shares 0.30, 0.22, 0.15, 0.13, 0.11, 0.09.
`HHI = 0.09 + 0.0484 + 0.0225 + 0.0169 + 0.0121 + 0.0081 = 0.208`. `BHI = 0.792`. `BHI_max = 1 − 1/6 = 0.833`. `BHI_norm = 0.792 / 0.833 =` **0.95** → high density; per-location pricing defensible.

**AUD worked (Archetype C, 4 clinics).** Shares 0.46, 0.28, 0.16, 0.10.
`HHI = 0.2116 + 0.0784 + 0.0256 + 0.01 = 0.3256`. `BHI = 0.674`. `BHI_max = 0.75`. `BHI_norm =` **0.90**. Borderline: the flagship clinic is nearly half the estate. A per-clinic price would invite the objection "clinic 4 isn't worth what clinic 1 is worth."
No external source was found that sets a threshold for BHI_norm. Any cut-off used in the rubric below is arbitrary and labelled as such.

### F2.5 — Conscious-Loss Index (CLI)

A3 operationalised. Each artefact is scored on presence and on documentation strength (MEDDPICC 0–4).

```
CLI = Σ (w_j × d_j) / Σ (w_j × 4)          → 0.00–1.00
```
- `w_j` = artefact weight; `d_j` = MEDDPICC documentation score 0–4

Artefact weights (priors, not fitted):

| Artefact | `w` | Rationale |
|---|---|---|
| A person **hired** to do the manual work (salary known) | 5 | Paid, dated, third-party-verifiable; directly = Reference Value |
| A **prior competing quote** (amount known) | 5 | A literal reference price |
| A statutory **penalty exposure** the buyer has already been notified of | 5 | Third-party-quantified; no buyer cooperation needed |
| A **coping spreadsheet/workaround** with a named owner and time cost | 4 | Quantifiable via owner's loaded hourly cost |
| Buyer states a **loss figure unprompted** | 3 | Explicit need in Rackham's sense |
| Incumbent **SaaS spend** on tools that don't integrate | 3 | Reference Value component |
| An **internal project** already attempted and failed | 2 | Evidence of consciousness, ambiguous on budget |
| Buyer agrees the problem exists when described | 1 | Implied need only; does not correlate with closing in large sales |

**PHP worked (Archetype R).** Hired reconciler documented (5×4=20); no prior quote (5×0=0); no penalty (5×0=0); spreadsheet with named owner, described but not supplied (4×2=8); loss figure stated unprompted (3×2=6); 3 SaaS tools confirmed (3×3=9); no failed internal project (0); agrees problem exists (1×4=4).
Numerator = 47. Denominator = (5+5+5+4+3+3+2+1)×4 = 28×4 = 112. `CLI = 47/112 =` **0.42**.

**AUD worked (Archetype C).** No hired reconciler (0); prior quote from a local agency, amount stated (5×2=10); NDIS obligation but no notified breach (5×1=5); spreadsheet supplied as a file (4×4=16); no-show revenue figure supplied from the PMS (3×4=12); PMS + 2 bolt-ons confirmed (3×4=12); a failed internal automation attempt (2×3=6); agrees (1×4=4).
Numerator = 65. `CLI = 65/112 =` **0.58**.

### F2.6 — Quantification Capacity Test (QCT) — binary gate

Pillar 1's C2 converted into a screen, per the sub-agent 1 handoff.

```
QCT = PASS  iff  the buyer, unaided, produces at least one annualised loss
              figure at MEDDPICC ≥ 2 within two meetings
              AND names the data source it came from.
```
Failure modes and their reading:
- Buyer produces no figure and cannot name where one would come from → **fail**. Value-based pricing is unavailable (P2.1); the deal reverts to a cost-plus or day-rate comparison.
- Buyer produces a figure only after you supply the model → **conditional**. The value is *co-constructed*, which is exactly Pillar 1's C2 open question, and the risk of the figure proving wrong is unallocated.
- Buyer produces a figure and cites the system it came from → **pass**.
**PHP worked (Archetype R):** stated a monthly shrinkage figure, sourced to "the stock count sheet" → **conditional/pass** (source named but manual).
**AUD worked (Archetype C):** exported no-show counts from the PMS → **pass**.

### F2.7 — Decision-Chain Length estimate (DCL)

A1's denominator, made estimable pre-close.

```
DCL = S_approvals + P_paper
Cycle_est_days = a + b × DCL
```
- `S_approvals` = count of distinct people who must say yes (Economic + any co-owner/board + any User Buyer with veto)
- `P_paper` = count of formal Paper-Process steps (procurement, legal review, security review, DPA, insurance certificate)
- `a`, `b` calibrated against published benchmarks. Using the ACV-tier benchmark table in §7.3 (≈75 days at $10–50k, ≈120 at $50–100k, ≈170 at $100–250k) against typical stakeholder counts, a serviceable prior is `a ≈ 25`, `b ≈ 20` days per link.

**PHP worked (Archetype R).** Owner signs; ops manager has practical veto; no procurement, no legal review, no security review. `S = 2`, `P = 0`, `DCL = 2` → `Cycle_est = 25 + 40 =` **65 days**.
**AUD worked (Archetype C).** Owner-principal + second partner-principal sign; practice manager veto; insurance certificate + privacy/data-residency review. `S = 3`, `P = 2`, `DCL = 5` → `Cycle_est = 25 + 100 =` **125 days**.
Cross-check: 125 days sits inside the published 60–120-day mid-market band's upper edge, and the AUD 35,000 quote sits in the $10–50k ACV tier whose benchmark is ~75 days — so the estimate is 65% above tier benchmark, attributable to the added Paper Process. The formula is self-consistent with the benchmark table; it has **not** been validated against any Axon Enjin outcome.

### F2.8 — Pain-to-Chain Ratio (PCR) — A1 as a single number

```
PCR = L_total / DCL
```
Units: currency of quantified annual loss per decision link. This is the ratio P2.2 says is actually being hunted.
**PHP (R):** `777,600 / 2 =` **PHP 388,800 per link**.
**AUD (C):** `42,000 / 5 =` **AUD 8,400 per link**.
Normalising to a common currency at an illustrative AUD 1 ≈ PHP 37: Archetype C = ≈ PHP 310,800 per link. The two archetypes are comparable on PCR despite a 22× difference in absolute loss — which is a concrete demonstration that A1's ratio, not the loss, is the selection variable. **No external source was found that defines or benchmarks this ratio.** It is original to this document and unvalidated.

### F2.9 — Trigger Stack Score (TSS)

```
TSS = Σ t_k × r_k
```
- `t_k` = 1 if signal present within the recency window, else 0
- `r_k` = recency weight: 1.0 within 90 days, 0.6 within 180, 0.3 within 365, 0 beyond

Signal weights (from F/16's reported rankings; web tier, directional only):

| Signal | Base points |
|---|---|
| New location opened or acquired | 25 |
| Acquisition of/by another operator | 25 |
| New COO / ops director / GM appointed | 20 |
| Hiring req for a coordination/reconciliation/reporting role | 20 |
| New or tightened compliance/audit obligation, or notified compliance action | 20 |
| Announced expansion plan or funding | 15 |
| Visible stack change (new PMS/POS/ERP purchase) | 10 |
| Prior quote sought from another vendor | 15 |

**PHP (R):** branch #6 opened 4 months ago (25 × 0.6 = 15); reconciler hired 14 months ago (20 × 0 = 0); nothing else → **TSS = 15**.
**AUD (C):** clinic acquired 6 months ago (25 × 0.6 = 15); NDIS obligation tightened within 90 days (20 × 1.0 = 20); prior quote sought 5 months ago (15 × 0.6 = 9) → **TSS = 44**, and three concurrent signals satisfies the F/16 stacking condition.

### F2.10 — Lead / ICP Fit Score (LFS) and Expected Value of Pursuit (EVP)

Fit score is the §6.6 rubric, 0–100. Pursuit decision:

```
EVP = P_expected × m_target × p_win(LFS, TSS)  −  C_pursue
```
- `p_win` = win probability. With no historical data, the priors used below are: Tier A 0.35, Tier B 0.18, Tier C 0.06, each multiplied by `(1 + 0.5 × TSS/100)` to reflect the trigger effect, capped at 0.60. The 0.35/0.18/0.06 ladder is loosely anchored to the published 37%-with-trigger vs 19%-cold differential and to agency win-rate benchmark ranges; **it is a prior, not a measurement.**
- `C_pursue` = fully-loaded cost of pursuing (your time at `R_breakeven`, travel, discovery prep)

**PHP (R):** LFS = 61 (Tier B) → base 0.18 × (1 + 0.5×0.15) = 0.193. `EVP = 600,000 × 0.55 × 0.193 − 18,000 = 63,690 − 18,000 =` **+ PHP 45,690**. Pursue on EVP; but the deal *already failed the F2.2 hard gate*, so EVP is never reached. This ordering matters: gates precede expected value.
**AUD (C):** LFS = 74 (Tier B, upper) → 0.18 × (1 + 0.5×0.44) = 0.220. `EVP = 35,000 × 0.55 × 0.220 − 900 = 4,235 − 900 =` **+ AUD 3,335**.

### F2.11 — Disqualification Rate (DQR)

```
DQR = deals_exited_deliberately / deals_entered
```
Benchmark band 30–50% (web/practitioner tier, 2026). A DQR below 30% is read in that literature as evidence of unqualified pipeline rather than of superior targeting.

### F2.12 — Deposit Screen (from Pillar 1 F18)

```
Screen = PASS iff the buyer accepts, in principle, a deposit D such that
         DCR = D / Cost_to_first_milestone ≥ 1
```
**PHP (R):** 40% of 600,000 = 240,000; cost to first milestone ≈ 108,000 → `DCR = 2.2` → pass if accepted.
**AUD (C):** 40% of 35,000 = 14,000; cost to first milestone ≈ AUD 6,240 (12 days × 520) → `DCR = 2.24` → pass if accepted.
Per the sub-agent 1 handoff, refusal is scored as a **screening failure**, not opened as a negotiation. Note this is a *policy* position from the internal corpus and Pillar 1's benchmarks, not an external finding — §7.6 records that no source was found establishing deposit refusal as predictive of a bad outcome.

---

### 6.5 — Standing limitation on every weight below

The ICP-scoring literature is unanimous that weights should be set by **historical predictive power** on won/lost data. Axon Enjin has no such dataset (the research plan's own Open Question). Every weight in §6.6 is therefore a **prior derived from the internal corpus and the cited frameworks**, not a fitted coefficient. The rubric's function at this stage is to force consistent evidence collection and to make disagreements explicit, not to predict outcomes.

### 6.6 — The scoring rubric (operator-runnable)

**Stage 1 — Hard gates. Any single failure disqualifies. Do not score Stage 2.**

| Gate | Test | Fail condition |
|---|---|---|
| G1 Deal size | F2.1 | Realistic scope cannot clear MVDS |
| G2 ROI multiple | F2.2 at the operator's chosen `k_ROI` | `L_quantified < k_ROI × P_expected` |
| G3 Economic Buyer | F/11, F/13 | Cannot be identified, or identified but not reachable within two meetings |
| G4 Quantification capacity | F2.6 QCT | No unaided annualised figure at MEDDPICC ≥2 within two meetings |
| G5 Deposit | F2.12 | Deposit yielding DCR ≥ 1 refused in principle |
| G6 Zero-score rule | F/11 | Any MEDDPICC element still at 0 after two meetings |

**Stage 2 — Weighted fit score, 100 points.**

| Block | Criterion | Max | Scoring |
|---|---|---|---|
| **A. Loss magnitude & structure — 35** | A1 ROI headroom (`L_quantified / P_expected`) | 15 | ≥10× =15 · 5–10× =12 · 3–5× =8 · 2–3× =4 · <2× =0 |
| | A2 Location count `N` vs `N_min` (F2.3) | 10 | ≥N_min =10 · 0.6–1.0×N_min =6 · 0.3–0.6× =3 · <0.3× =0 |
| | A3 Branch homogeneity `BHI_norm` (F2.4) | 5 | ≥0.95 =5 · 0.90–0.95 =3 · 0.80–0.90 =1 · <0.80 =0 *(thresholds arbitrary — §6.4)* |
| | A4 Leak recurrence `ρ` (F2.3) | 5 | ≥0.85 =5 · 0.6–0.85 =3 · <0.6 =0 |
| **B. Consciousness of loss — 20** | B1 CLI (F2.5) | 15 | ≥0.70 =15 · 0.55–0.70 =11 · 0.40–0.55 =7 · 0.25–0.40 =3 · <0.25 =0 |
| | B2 Explicit vs implied need (Rackham) | 5 | Explicit, buyer-originated =5 · explicit after seller conversion =3 · implied only =0 |
| **C. Decision chain — 15** | C1 DCL (F2.7) | 8 | ≤2 =8 · 3 =6 · 4–5 =4 · 6–7 =2 · ≥8 =0 |
| | C2 Economic Buyer seat collision (EB = User Buyer and/or Champion) | 4 | EB is also User Buyer *and* Champion =4 · EB is one other seat =3 · all seats distinct =1 · EB behind a gatekeeper =0 |
| | C3 Paper Process weight `P_paper` | 3 | 0 steps =3 · 1–2 =2 · 3–4 =1 · ≥5 =0 |
| **D. Firmographics (A4) — 12** | D1 Revenue in band (AUD 5–50M / PHP 150M–1.5B equivalent) | 4 | In band =4 · within 30% of a boundary =2 · outside =0 |
| | D2 COO/ops leader present **and** no CTO | 4 | Both true =4 · ops leader present, CTO also present =2 · no ops leader =0 |
| | D3 Headcount 30–500 (`chatgpt2.md`) | 2 | In band =2 · else =0 |
| | D4 Integration owner identifiable client-side (T2.14) | 2 | Named =2 · plausible =1 · none =0 |
| **E. Technographics — 8** | E1 ≥3 non-integrating SaaS tools | 5 | ≥4 =5 · 3 =4 · 2 =2 · ≤1 =0 |
| | E2 Incumbent spend known in currency | 3 | Documented =3 · stated =2 · unknown =0 |
| **F. Timing — 10** | F1 TSS (F2.9) | 7 | ≥45 =7 · 30–44 =5 · 15–29 =3 · 1–14 =1 · 0 =0 |
| | F2 Critical Event with a buyer-owned date (SPICED) | 3 | Dated and buyer-owned =3 · dated but seller-imposed =1 · none =0 |

**Stage 3 — Tier and act.**
`A = 80–100` · `B = 50–79` · `C = 0–49`, per the F/15 convention. Then run F2.10 EVP. Tier C accounts receive no outbound investment in that literature's formulation.

**Stage 4 — Modifiers applied after tiering (not scored into the 100).**
- **Buyer-type flag** (F/17, F/18): intrinsic-value or true price buyer → downgrade one tier. Poker-face buyer → no adjustment (per F/18, price behaviour is not diagnostic).
- **Stakeholder-profile flag** (F/14): primary contact is a Blocker → suspend. Contact is a Talker only, with no Mobilizer identified → cap at Tier B regardless of score.
- **Compliance flag** (P2.10): a published statutory penalty applies → the A1 headroom score may be recomputed using penalty exposure as `L_quantified`, which frequently moves the score across a tier boundary. See §7.5 for magnitudes.

### 6.7 — Worked example 1: Archetype R (PH, 6-branch retail)

Gates: G1 pass (scope ≈ MVDS 560k, quote 600k). **G2 FAIL** — headroom 1.3× against `k_ROI = 5`. G3 pass. G4 conditional. G5 pass. G6 pass.
**Result under A5's own rule: disqualified at gate 2.**
Scored anyway, for calibration: A1 = 0 (headroom <2×); A2 = 3 (6 sites vs N_min 27, ratio 0.22 → but 0.3–0.6 band not met, so 0 strictly; scored 0); A3 = 5 (BHI_norm 0.95); A4 = 5 (ρ 0.85); B1 = 7 (CLI 0.42); B2 = 5; C1 = 8 (DCL 2); C2 = 4 (owner is EB + User + Champion); C3 = 3; D1 = 4; D2 = 4; D3 = 2 (95 staff); D4 = 1; E1 = 4; E2 = 2; F1 = 3 (TSS 15); F2 = 1.
**LFS = 0+0+5+5+7+5+8+4+3+4+4+2+1+4+2+3+1 = 58 → Tier B.**
Diagnostic reading: this buyer scores well on *everything except the thing that matters most*. The decision chain is ideal (C block 15/15), the firmographics are a near-perfect match to A4 (D block 11/12), and the loss is conscious enough to work with — but the loss magnitude block scores 10/35. A1's thesis is satisfied on the denominator and failed on the numerator. This is the shape of prospect most likely to be over-pursued.

### 6.8 — Worked example 2: Archetype C (AU, 4-clinic allied health)

Gates: G1 pass. **G2 FAIL at `k_ROI = 5`** (headroom 1.2×); **PASS at `k_ROI = 1.5`**. G3 pass. G4 pass. G5 pass. G6 pass.
Scored: A1 = 0; A2 = 0 (4 vs N_min 19); A3 = 3 (BHI_norm 0.90); A4 = 5 (ρ 0.9); B1 = 11 (CLI 0.58); B2 = 5; C1 = 4 (DCL 5); C2 = 3; C3 = 2; D1 = 4 (AUD 6.2M); D2 = 4; D3 = 2 (38 staff); D4 = 2; E1 = 4; E2 = 3; F1 = 7 (TSS 44); F2 = 3.
**LFS = 62 → Tier B.**
**Now apply the compliance modifier.** One service line is NDIS-registered. Under the NDIS Integrity and Safeguarding Act 2026, maximum civil penalties rose from AUD 412,500 to **over AUD 15 million where a participant is harmed**, with **up to AUD 3.64 million per contravention** and new criminal offences for unregistered provision (§7.5). Recomputing A1 with a risk-weighted penalty exposure — even at a 2% annual probability of a AUD 3.64M contravention = AUD 72,800/yr of expected exposure, added to AUD 42,000 of operational loss = AUD 114,800 — gives headroom `114,800 / 35,000 = 3.3×` → A1 = 8, LFS = **70**, still Tier B but at its top edge, and G2 now passes at `k_ROI = 3`.
**This is the mechanism behind `claude-response2.md`'s claim that regulated care is "the purest loss-aversion play that exists" and carries "the highest willingness to pay" — and it is the only modifier found that moves a small-N operator across a gate without the buyer supplying a number.** The probability weighting (2%) is invented for the example and is the weak link; no source was found that publishes contravention probabilities per provider-year.

### 6.9 — Worked example 3: a disqualification (for contrast)

Single-site specialty retailer, PHP 22M revenue, 14 staff, owner does everything, no incumbent SaaS spend, wants "a system." G1: realistic scope ≈ PHP 180,000 → **below MVDS 560,000 → disqualified at G1.** No further scoring. Note this buyer would also fail G4 (no data source exists) and would score 0 on A1–A4 and E1–E2. Both internal docs' avoid-lists point at this buyer; F2.1 explains *why* in one line rather than as a preference.

### 6.10 — What the three worked examples jointly show

Run against Axon Enjin's own stated filters and Pillar 1's own cost arithmetic, **neither archetype clears A5's 5× ROI screen**, and the location count required to clear it (F2.3: 19–27 sites) sits at or above the *top* of A4's stated 5–50 band. Only two levers close the gap: statutory penalty exposure (§7.5), or a materially lower `P_expected` than MVDS permits. That is a real, arithmetic tension inside the internal corpus and it is recorded as C2.6 and C2.7 rather than resolved.

---

## 7. Benchmarks

All retrieved 2026-07-28. Tier labels: **P** = primary/published research programme, **PA** = practitioner-authoritative (named author/firm of record), **J** = journalistic, **W** = web/aggregator (lowest reliability, highest volatility).

### 7.1 Buying committee and decision chain

| Figure | Value | Tier | Note |
|---|---|---|---|
| Stakeholders in an average complex B2B purchase | **11**, flexing to ~20 | W citing Gartner | Reported as Gartner *Future of Sales* (2022); the Gartner original was not accessed |
| Median buying group, technology/SaaS > $100k ACV | **11** | W citing Gartner | Same caveat |
| Buying group for complex B2B solutions | **6–10** decision makers, each arriving with **4–5** independent pieces of research | W citing Gartner | |
| Buyers describing their last purchase as complex or difficult | **77%** | W citing Gartner | Consensus-building named as most-cited friction |
| Average stakeholders per deal, 2026 vs 2022 | **6.8** vs **5.4** | W | Benchmark aggregator |
| Vertical-SaaS SMB buyer decision structure | *"One person can decide and sign. Sales cycles compress from 6 months to 6 weeks."* | PA (Tidemark) | The strongest external statement of A1's denominator |

### 7.2 No-decision and indecision

| Figure | Value | Tier |
|---|---|---|
| Qualified B2B opportunities ending in no decision | **40–60%** | PA (Dixon & McKenna, *The JOLT Effect*, n = 2.5M recorded conversations) |
| No-decision outcomes vs losses to any single competitor | **2–3×** greater | W |
| Split of no-decision losses: status quo preference vs indecision/FOMU | **44% / 56%** | PA (JOLT) |

### 7.3 Sales cycle length by deal size

| ACV tier | Reported median cycle | Tier |
|---|---|---|
| <$1k | ~25 days | W |
| $1–5k | ~40 days | W |
| $5–10k | ~55 days | W |
| $10–50k | ~75 days | W |
| $50–100k | ~120 days | W |
| $100–250k | ~170 days | W |
| SMB (<$15k) | 14–30 days | W |
| Mid-market ($15–100k) | 30–90 days (crept to a 60–120 band) | W |
| Enterprise (>$100k) | 90–180+ days; 2020's 4–6 months now 6–12 | W |
| Median across all B2B SaaS | **84 days** | W (one aggregator cites n = 939 companies) |
| Cycle lengthening since 2022 | **+22%** (one source says +20–30% since 2021) | W |

These are SaaS-derived and Axon Enjin sells fixed-fee builds, not subscriptions. Transfer risk is high; used in F2.7 only to calibrate `a` and `b`.

### 7.4 Qualification and disqualification effects

| Figure | Value | Tier | Reliability note |
|---|---|---|---|
| Effect of eliminating small/unlikely deals on average deal size | **+18%** | W | Single-source, no methodology published |
| Effect of earlier disqualification on cycle length | **−23%** | W | Same |
| "Healthy" disqualification rate | **30–50%** of entered opportunities | W | Same |
| Close-rate lift where qualification criteria are fully documented (MEDDIC/MEDDPICC) | **+40%** | W/PA | Correlational; no control described |
| Reported enterprise case: close rate | **22% → 32%** (+47% relative); **28% fewer** opportunities created, **+15%** closed-won volume | W | Single anonymous case |
| Reported MEDDPICC case (WBM Technologies) | **98% close rate on opportunities scored ≥4.4** | PA (vendor-published) | Vendor case study; selection effects unaddressed |
| Reported MEDDPICC implementation | pipeline **−18%**, forecast win rate up "materially" over two quarters | PA | Magnitude unstated |

**Reliability warning on this whole table:** these are the most decision-relevant numbers in the pillar and the *worst-sourced*. Every one is a practitioner or vendor assertion without published methodology, control group, or sample. They are recorded because they are what exists, not because they are reliable.

### 7.5 Compliance penalty magnitudes — Australia (the only third-party-quantified loss found)

| Regime | Figure | Effective | Tier |
|---|---|---|---|
| NDIS — maximum civil penalty where a participant is harmed | **from AUD 412,500 → over AUD 15,000,000** | NDIS Amendment (Integrity and Safeguarding) Bill 2025 passed federal Parliament **April 2026** | PA/J (law-firm and legal-media reporting of the Act) |
| NDIS — civil penalty per contravention | up to **AUD 3,640,000** | NDIS Integrity and Safeguarding Act 2026 | PA/J |
| NDIS — unregistered provision of designated high-risk supports (e.g. Supported Independent Living) | criminal: max **2 years imprisonment** or **120 penalty units** | Same | PA/J |
| Aged care — new regulatory framework | **Aged Care Act 2024 commenced 1 July 2025**; strengthened Quality Standards; expanded civil and criminal penalties | — | PA (regulator + law firm) |
| Aged care — penalties for significant failure / systematic pattern | **250 penalty units ≈ AUD 82,500** or **500 units ≈ AUD 165,000** | Aged Care Act 2024 / Aged Care Rules 2025 | PA |
| Compliance obligations context | Registration entails formal audits, full NDIS Practice Standards, worker screening, reportable-incident lodgement | 2026 | PA |

**Verification verdict:** `claude-response2.md`'s claim that regulated care (aged care, disability, childcare) is a loss-aversion play where *"non-compliance isn't opportunity cost, it's fines and licence risk"* — **VERIFIED, and understated.** The penalty ceiling moved by roughly 36× in April 2026. The corroborating mechanism from the vertical-SaaS literature: *"When mistakes are expensive — fines, safety incidents, license loss — buyers accept premium pricing."*

### 7.6 SaaS sprawl (A4's "≥3 tools that don't talk to each other")

| Figure | Value | Tier |
|---|---|---|
| Mid-market (500–10,000 employees) app count | **100–300 tools**; one source: mid-market average **254**; another: mid-sized average **275** | W |
| Duplicate subscriptions per organisation, 2025 | **7.6** duplicates, **4.3** orphaned apps | W |
| Reported duplication by category | 15 duplicate training apps, 11 project-management tools, 10 collaboration apps | W |
| Unused SaaS licences | **51%** | W citing Zylo *2025 SaaS Management Index* |
| Average annual waste on unused/underutilised software per organisation | **≈ USD 21M** | W citing Zylo |
| SaaS spend per employee | **USD 4,830**, +21.9% YoY | W |
| Gartner-attributed projection | organisations without central SaaS lifecycle management will overspend **≥25%** through 2027 | W citing Gartner |
| Hidden-cost observation | *"the largest costs (integration upkeep and manual reporting) never appear as a software line item"* | W |

**Note on transfer:** these counts are for 500–10,000-employee organisations. A4's target is 30–500 staff. A 40-person clinic group does not run 254 apps. The *direction* of A4's filter is corroborated; the magnitudes are not transferable, and no source was found reporting app counts for the 30–500 band. The last row is the most useful finding for Pillar 5: integration upkeep and manual reporting are unbudgeted, which is why they show up as headcount rather than as software spend — i.e. as A3's hired reconciler.

### 7.7 Coordination cost in multi-site operations (A1's numerator mechanism)

| Figure | Value | Tier |
|---|---|---|
| Share of employee time on "work about work" (coordination, status updates, searching, duplicated effort across disconnected tools) | **≈ 60%** | W citing Asana *Anatomy of Work Index 2023* |
| Reported effect of unified campaign management in multi-location businesses | cost-per-location **−34%**, launch speed **+52%** | W (vendor) |
| Economics of diseconomies of scale | beyond minimum efficient scale, average cost per unit rises through communication breakdown, coordination difficulty and management complexity | W (A-level economics teaching material) |
| Qualitative | *"When each location operates in isolation, information travels slowly, inconsistencies multiply, and costs rise with every new site you add."* | W (vendor) |

**Verification verdict on A1's numerator:** the *mechanism* (coordination cost rises super-linearly with sites) is standard, textbook economics and is qualitatively corroborated everywhere. The *specific claim* that operational loss scales approximately linearly with location count — A1's `× N` — **was not found stated, measured, or tested in any source, academic or practitioner.** The diseconomies-of-scale literature actually implies something stronger than linear (cost per unit *rises*), while partial centralisation implies something weaker (the `ρ` coefficient in F2.3). The direction is safe; the functional form is unsourced.

### 7.8 Firmographic base rates

| Figure | Value | Reference period | Tier |
|---|---|---|---|
| Australian businesses with turnover < AUD 2M | **91.5%** | 2024-25 (released 2025-12-16) | **P** (ABS, *Counts of Australian Businesses*) |
| Australian businesses with turnover ≥ AUD 2M | increased **4.1%** (+9,168) | 2024-25 | P (ABS) |
| Fastest-growing turnover band | **AUD 5M–<10M**, **+4.7%** | 2024-25 | P (ABS) |
| Australian businesses with 20–199 employees | **67,857** (−0.5%, a decrease of 1,735) | 2024-25 | P (ABS) |
| Australian businesses with 200+ employees | **5,322** (+2.6%, +133) | 2024-25 | P (ABS) |
| Australian medium businesses as share of all businesses | **2.4%** | recent | W citing ABS |
| Philippine registered establishments | **1,241,476**, of which **99.63%** (1,236,908) MSME and **0.37%** (4,568) large | 2023 statistics, published 2024-11-22 | P/PA (DTI, *Philippine MSME Statistics in Brief*) |

**ABS did not publish exact counts per turnover bracket above AUD 2M in the accessed release**, so the size of A4's AUD 5–50M band cannot be stated. What *can* be said: the 20–199-employee population (67,857) is the closest available proxy for A4's structural target, it is **shrinking** while the 200+ band grows, and the AUD 5–10M turnover band is the fastest-growing turnover segment. The DTI PDF for the Philippine medium-enterprise sub-count could not be parsed (binary PDF); the medium-only figure remains **unretrieved**.

### 7.9 Verified consolidation activity (the roll-up trigger)

**Australian dental — VERIFIED.**

| Figure | Value | Tier |
|---|---|---|
| Australian dental practices, total | **≈ 7,000** | J (*Bite Magazine*) |
| Corporate-owned share | **≈ 12%**, up from **≈ 6% a decade earlier** | J |
| Pacific Smiles | **≈ 130** practices | J / company |
| National Dental Care | **88** dental centres | J |
| Maven Dental | **100+** general and specialist practices | J / company |
| Abano Healthcare | **≈ 260** trans-Tasman practices | J |
| Bupa | **≈ 200** practices | J |
| National Dental Care → Pacific Smiles | scheme of arrangement, **AUD 1.90/share, AUD 303M**, agreed **2024** | J (business media) + **P** (Takeovers Panel, *2024 ATP 12*) |

**Australian veterinary — VERIFIED.**

| Figure | Value | Tier |
|---|---|---|
| Greencross | **165+** general practices, **≈30** specialist/emergency hospitals | J / industry directory |
| Greencross ownership | TPG Capital (US PE) acquired **55%** in **2019** | J |
| Vets Central (Pemba Capital Partners) | **45+** clinics | J |
| PetO | took over **41 stores and 25 co-located vet clinics** divested by Petspiration Group post-Woolworths deal, **2024** | J |
| Independent share | **≈ 85%** of vet clinics remain independent as of **2023** | W citing PitchBook |

**Australian allied health generally — PARTIALLY VERIFIED.** Practitioner/advisory sources state roll-ups are underway in GP clinics, physiotherapy, veterinary and allied health, with the playbook described as acquiring at **5–7× EBITDA** individually and exiting the platform at **10–15×** to institutional investors (PA, advisory-firm tier — the firm has a commercial interest in the claim). Physiotherapy-specific and aesthetics-specific consolidation figures were **not found**.

**Australian trades / field service — NOT VERIFIED.** Four separate searches returned overwhelmingly **US** evidence and no Australian platform data. The US evidence is strong and specific:

| Figure | Value | Tier |
|---|---|---|
| PE deployed into residential HVAC/plumbing/electrical roll-ups since 2018 | **> USD 50bn** | W |
| Platform recapitalisations clearing USD 20bn+ | **5**, between Nov 2024 and Feb 2026 | W |
| Apollo → Apex Service Partners | **≈ USD 2bn** at a **≈ USD 10bn** valuation, **May 2026** | W |
| Apex Service Partners | **≈ 60** add-on acquisitions in 2025; **≈ 300** businesses; **≈ USD 1.3bn** revenue | W |
| Acquisition/exit multiples | buy at **5–8× EBITDA**, sell platform at **17–20×** | W |
| Independents remaining in critical/rare home services | **76%** | W |

The one adjacent Australian data point found: **Johns Lyng Group** (ASX-listed Australian building/restoration services) agreed to be acquired for **USD 725M** (2025, Reuters via aggregator) — an Australian services take-private, but not a trades roll-up platform.

---

## 8. Contradictions — stated as open questions, deliberately unresolved

**C2.1 — The two internal docs give opposite readings of the same buyer behaviour.**
`chatgpt2.md` avoids sub-10-employee and single-site businesses *because* "they usually negotiate aggressively on price because every expense is highly visible." `claude-response2.md` argues the buyer who "cares intensely about money" is the *best* buyer, because they can do the arithmetic. F/18 supplies the reconciling vocabulary — price buyer vs poker-face buyer — but not the test: *price-signalling behaviour is not diagnostic of type, so what observable distinguishes a scrutinising value buyer from a genuine price buyer before you have quoted?* T2.12 proposes one (can they state their own loss figure) but it is untested.

**C2.2 — Is an unconverted latent need a disqualifier or the seller's job?**
A3 says target buyers whose loss is *already* conscious, otherwise you fund an education campaign. Rackham's research says converting implied needs into explicit needs is precisely what top performers in large sales do, and that the conversion *is* the method. *Open question: is A3 a sound economic constraint for a studio that cannot afford a long education cycle, or is it the abandonment of the highest-value activity in complex selling to competitors who can afford it?*

**C2.3 — Conscious loss does not address the dominant no-decision mechanism.**
JOLT's split says **56%** of no-decision losses come from indecision/FOMU (fear of messing up), not from status-quo preference. A buyer with a vividly conscious loss may be *more* FOMU-exposed, not less, because the stakes of choosing wrong are higher and already salient. *Open question: does selecting for conscious loss trade a status-quo problem (44%) for an indecision problem (56%)?* Nothing in the corpus or the literature found addresses the interaction.

**C2.4 — MEDDPICC is prescribed for exactly the deals A1 says to avoid.**
The published applicability band for MEDDPICC is 5+ stakeholders, $50k+ ACV, 6+ month cycles. A1's entire selection thesis is short chains and few stakeholders. SPICED's band ($50k–$250k ACV, consultative) fits better on cycle but is a discovery framework, not a gate. *Open question: for a 2-link decision chain at AUD 35k, is any of the named heavyweight qualification machinery net-positive, or does it add cost that the short chain was supposed to eliminate?*

**C2.5 — "No CTO" is scored as a positive and is also an unassessed delivery risk.**
A4 selects for an ops leader with no CTO. In F/13's terms that vacates the Technical Buyer seat — removing the most common blocker, but also removing the person who owns credentials, data access, integration and security review on the client side. No source was found that tests win rate or delivery outcome against Technical-Buyer absence. *Open question: is an absent CTO a shortened chain or a deferred cost that reappears in delivery (Pillar 6) and in the security/data-residency conversation?*

**C2.6 — Neither worked archetype clears A5's own 5× ROI screen once MVDS pricing is applied.**
F2.2 run on Pillar 1's own EVE examples gives headroom of **1.3×** (PHP) and **1.2×** (AUD) against a required 5×. *Open question: is A5's 5× multiple wrong, is Pillar 1's loss quantification too conservative, is MVDS too high for these buyers, or is the true qualifying buyer materially larger than either internal doc describes?* All four are live and the corpus does not distinguish them.

**C2.7 — The location band contradicts the ROI screen.**
F2.3 solves for the location count that clears 5×: **19–27 sites** at the archetypes' per-site loss. A4 states **5–50 locations**. The bottom four-fifths of A4's stated band cannot clear A5's stated screen on these numbers. *Open question: which of the two stated filters is the operative one?*

**C2.8 — A1's `× N` scaling law is asserted, not documented.**
The mechanism (coordination cost rises with sites) is textbook. The functional form is not. Diseconomies-of-scale theory implies super-linear cost growth; partial centralisation implies sub-linear loss replication (F2.3's `ρ`). *Open question: is per-site loss replication closer to linear, super-linear, or strongly damped by whatever central function already exists — and does the answer flip which location band is optimal?*

**C2.9 — Metric density thresholds are invented.**
F2.4 produces a real number (BHI_norm) and §6.6 scores it against thresholds (0.95 / 0.90 / 0.80) for which **no source exists**. Pillar 1's F/8 establishes that density matters; nothing found establishes where the disputes begin. *Open question left open.*

**C2.10 — Deposit refusal as a disqualifier is a policy, not a finding.**
Pillar 1's F18 and the sub-agent 1 handoff treat refusal to pay a deposit as a screening failure. No source was found linking deposit refusal to any downstream outcome (churn, scope disputes, non-payment). *Open question: is the deposit screen predictive, or merely protective of working capital while silently excluding well-run buyers whose procurement policy forbids prepayment?* This also collides with Pillar 1's C11 (never expose an hourly rate vs procurement reality) — both are cases of a studio policy that filters out procurement-driven buyers as a side effect.

**C2.11 — The disqualification benchmarks that justify the discipline are the weakest evidence in the pillar.**
+18% deal size, −23% cycle, 30–50% healthy DQR, +40% close rate: every one is single-source, methodology-free, and frequently published by a vendor selling the practice. *Open question: does disciplined disqualification actually improve outcomes, or is the entire evidence base selection-effect artefact from firms that were already better run?*

**C2.12 — The vertical-SaaS "single decision maker" corroboration comes from a different buyer size.**
Tidemark's *"one person can decide and sign"* describes SMB merchants — restaurants, small clinics — with ARPU in the hundreds of dollars per month. A1 claims the same short chain at AUD 5–50M revenue and 5–50 sites. *Open question: does the single-signatory dynamic survive the jump from a one-site owner-operator to a 20-site group with a board, a CFO and an external accountant?* F2.7's DCL formula assumes it partly does not; no evidence was found either way.

**C2.13 — PE roll-up as a buying trigger is verified in the wrong hemisphere.**
The claim that "private equity has been rolling these up, which means acquirers who need systems" is **strongly verified for US home services** and **not verified for Australian trades**. It is **verified for Australian dental and veterinary**. *Open question: is the trades half of `claude-response2.md`'s vertical list resting on US evidence imported to an Australian thesis?* Note also the second-order problem: in a roll-up, the systems buyer may be the **PE sponsor or the platform's central team**, not the acquired operator — which is a different ICP, a different decision chain, and probably a longer one.

**C2.14 — Geography and buyer selection are entangled and the docs disagree.**
`chatgpt2.md`: PH first, defer AU. `claude-response2.md`: AU beachhead, PH for cash flow and portfolio. This is Pillar 8's contradiction, but it determines which firmographic base rates apply (§7.8) and therefore whether the rubric's D1 revenue band is stated in AUD or PHP. Recorded here as a dependency, not resolved.

**C2.15 — Inductive vs deductive ICP construction.**
F/19 (JTBD switch interviews on won deals) and the research plan's own Open Question both say the ICP should be derived from existing proof. F/15, F/20 and A4 all construct it deductively from market attractiveness. Everything in §6 is deductive because the inductive input does not exist. *Open question, and it is the plan's own: what has Axon Enjin shipped, and for whom?* Until answered, the rubric's weights (§6.5) cannot be fitted and the tier boundaries are conventions.

---

## 9. Sources

### Primary (published research programmes, official statistics, statutory instruments)
- **Australian Bureau of Statistics**, *Counts of Australian Businesses, including Entries and Exits, July 2021 – June 2025*, latest release 16 December 2025. https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release
- **Takeovers Panel (Australia)**, *Pacific Smiles Group Limited*, 2024 ATP 12. https://takeovers.gov.au/reasons-decisions/2024-atp-12
- **Department of Trade and Industry (Philippines)**, *2023 Philippine MSME Statistics in Brief* (as of 22 November 2024). https://dtiwebfiles.s3.ap-southeast-1.amazonaws.com/MSME+Resources/2023+Philippine+MSME+Statistics+in+Brief_as+of+22+November+2024.pdf — *fetched but not parseable (binary PDF); figures cited via secondary reporting.*
- **DTI Philippines**, *MSME Development Plan 2023–2028*. https://dtiwebfiles.s3.ap-southeast-1.amazonaws.com/BSMED/MSMED+Plan+2023-2028/MSMED+Plan+2023-2028_approved+07Nov2024.v2.pdf — *listed, not fetched.*
- **Aged Care Quality and Safety Commission**, *Compliance and Enforcement Policy* (May 2026). https://www.agedcarequality.gov.au/resource-library/compliance-and-enforcement-policy
- **Neil Rackham**, *SPIN Selling* — research programme of 35,000 sales calls over 12 years; implied vs explicit needs finding. Accessed via multiple concurring secondary summaries, **not the primary text**.
- **Neil Rackham & John DeVincentis**, *Rethinking the Sales Force* (McGraw-Hill, 1999) — intrinsic / extrinsic / strategic value customers. Accessed via publisher and bookseller descriptions only; **the primary text was not read**.
- **Matthew Dixon, Brent Adamson, Pat Spenner, Nick Toman**, *The Challenger Customer* — CEB research, 700 customer stakeholders; seven-profile taxonomy. Accessed via the publisher's own (Challenger Inc.) descriptions and secondary summaries.
- **Matthew Dixon & Ted McKenna**, *The JOLT Effect* — analysis of 2.5M recorded sales conversations; 40–60% no-decision, 44/56 status-quo/indecision split. Accessed via secondary summaries and author interviews.

### Practitioner-authoritative (named firms or authors of record)
- **Winning by Design**, *SPICED* / the Modern Revenue Operating Model. https://winningbydesign.com/spiced-framework/
- **Winning by Design**, *CS Operating Model (open source)* — four elements of the operating model incl. Bowtie. https://www.slideshare.net/slideshow/winningbydesigncsoperatingmodelopensourcepdf/264615708
- Winning by Design Bowtie model and benchmarks update, press release, 11 October 2023. https://markets.financialcontent.com/bpas/article/bizwire-2023-10-11-winning-by-design-releases-updated-bowtie-model-and-benchmarks-to-provide-go-to-market-teams-with-a-standardized-customer-journey-and-data-model
- **ARPEDIO**, *MEDDPICC: A Practitioner's Guide* — element definitions, 0–4 confidence scale, WBM Technologies case, disqualification guidance. https://arpedio.com/resources/guides/meddpicc
- **MEDDICC (meddicc.com)**, *MEDDICC versus other qualification frameworks like BANT*. https://meddicc.com/resources/meddicc-versus-other-qualification-frameworks-like-bant
- **Umbrex**, *What is Miller Heiman Strategic Selling?* — four buying influences, Blue Sheet, Red Flags. https://umbrex.com/resources/sales-methodologies/what-is-the-miller-heiman-strategic-selling/
- **Umbrex**, *MEDDIC / MEDDPICC Qualification Framework*. https://umbrex.com/resources/frameworks/marketing-frameworks/meddic-meddpicc-qualification-framework/
- **Challenger Inc.**, *The Challenger Customer: Mobilizers, Talkers, and Blockers*. https://challengerinc.com/the-challenger-customer-profiles/
- **Tidemark**, *Picking Your Market* (Vertical SaaS Knowledge Project) — gigantic / fragmented market / fragmented value chain; NAICS mapping method; location-count scoping. https://www.tidemarkcap.com/vskp-chapter/picking-your-market
- **Tidemark**, *Vertical SaaS Truisms*. https://www.tidemarkcap.com/vskp-chapter/vertical-saas-truisms
- **Activant Capital**, *Vertical Software Is Having A Moment*. https://www.activantcapital.com/research/vertical-software-is-having-a-moment/
- **Mark Wickersham / Value Pricing Academy**, *Understanding the 4 Types of Buyer* — price / value / relationship / poker-face; 15–20% price-buyer share; Holden–Nagle lineage. https://www.valuepricingacademy.com/blog/understanding-the-4-types-of-buyer-will-help-you-stand-strong-with-your-price
- **Laurent Bouty**, *Nagle's 9 Pricing Sensitivity Drivers*. https://laurentbouty.com/blog/pricing-sensitivity-nagle-marketing-strategy
- **Christensen Institute**, *Jobs to Be Done Theory*. https://www.christenseninstitute.org/theory/jobs-to-be-done/
- **Bob Moesta**, Intercom podcast interviews on Jobs-to-be-Done — big hire / little hire, Forces of Progress, switch interviews. https://www.intercom.com/blog/podcasts/bob-moesta-on-unpacking-customer-motivations-with-jobs-to-be-done/ ; https://jobstobedone.org/
- **MinterEllison**, *NDIS and Aged Care Compliance Shift: Penalties, Bans & Fines*. https://www.minterellison.com/articles/new-compliance-risks-for-disability-and-aged-care-providers
- **Mondaq / law-firm commentary**, *NDIS Integrity and Safeguarding Act 2026: The New Cost Of Getting It Wrong*. https://www.mondaq.com/australia/constitutional-administrative-law/1817682/ndis-integrity-and-safeguarding-act-2026-the-new-cost-of-getting-it-wrong
- **Miro Capital**, *Healthcare Practice Valuations in Australia: What the Private Equity Wave Means for Your Practice* — 5–7× / 10–15× roll-up arithmetic; GP, physio, vet, allied health. https://www.mirocapital.com.au/insights/how-much-is-my-healthcare-business-worth/ — *commercially interested source.*
- **Zylo**, *2025 SaaS Management Index* (cited via secondary). 51% unused licences; ≈USD 21M annual waste.
- **Asana**, *Anatomy of Work Index 2023* (cited via secondary). ≈60% of time on "work about work."

### Journalistic
- **Bite Magazine**, *How the corporate dental model is expanding* — 7,000 practices, 12% corporate (from ~6% a decade ago), operator practice counts. https://www.bitemagazine.com.au/how-the-corporate-dental-model-is-expanding/
- **Business News Australia**, *National Dental Care swoops in to buy Pacific Smiles for $303m*. https://www.businessnewsaustralia.com/articles/national-dental-care-swoops-in-to-buy-pacific-smiles-for--303m.html
- **Private Equity Media (AU)**, *Listed dental business set to be acquired by private equity*. https://www.privateequitymedia.com.au/news/investment-activity/listed-dental-business-set-to-be-acquired-by-priva/
- **Dental Assistants Professional Association**, *Private equity buy-up of dentists gathers pace*. https://dapa.asn.au/home/national-dental-care-news
- **Vet Suppliers Directory (AU)**, *The Consolidation of the Veterinary Industry* — Greencross, TPG, Vets Central/Pemba, PetO. https://www.vetsuppliersdirectory.com.au/the-consolidation-of-the-veterinary-industry/
- **Rick LeCouteur**, *Who Owns Your Vet? Transparency in the age of private equity*. https://www.ricklecouteur.com/post/who-owns-your-vet-1-transparency-in-the-age-of-private-equity-424
- **Reuters (via aggregator)**, *Australia's Johns Lyng Group to be acquired for $725 million*, 2025. https://tw.tradingview.com/news/reuters.com,2025:newsml_L4N3T71P1:0-australia-s-johns-lyng-group-to-be-acquired-for-725-million
- **Forbes Tech Council**, *Duplicate Tools, Dormant Users: What SaaS Waste Really Looks Like*, 3 December 2025. https://www.forbes.com/councils/forbestechcouncil/2025/12/03/duplicate-tools-dormant-users-what-saas-waste-really-looks-like-and-how-to-regain-control/

### Web / industry aggregators (lowest tier — used for benchmark ranges, flagged as volatile)
- Salesmotion — MEDDPICC guide; buying-triggers guides; ICP template + scoring rubric; win-rate benchmarks. https://salesmotion.io/blog/meddpicc ; https://salesmotion.io/blog/buying-triggers ; https://salesmotion.io/blog/ideal-customer-profile-template ; https://salesmotion.io/blog/sales-win-rate-benchmarks-2026
- Prospeo — MEDDPICC 2026 guide; SPICED practitioner's guide; ICP template + scoring rubric; Miller Heiman 2026 guide; B2B sales-cycle length; cycle length by industry. https://prospeo.io/s/meddppic ; https://prospeo.io/s/spiced-framework ; https://prospeo.io/s/ideal-customer-profile-template ; https://prospeo.io/s/strategic-selling-miller-heiman ; https://prospeo.io/s/b2b-sales-cycle-length
- Autobound — *Signal-Based Selling: The Complete Framework*; *15 Sales Trigger Events That Convert*. https://www.autobound.ai/guides/signal-based-selling ; https://www.autobound.ai/blog/sales-trigger-events-templates
- Attainment Labs — *B2B Buying Committees: Why 8–13 Stakeholders Changed Enterprise Sales*. https://www.attainmentlabs.com/blog/b2b-buying-committees-doubled
- The Starr Conspiracy — *B2B Buying Committee Benchmarks 2025*; *B2B buyer journey statistics 2026*. https://www.thestarrconspiracy.com/insights/benchmarks/b2b-buying-committee-benchmarks-2025
- Traction Complete — *Mapping the B2B Buying Committee: 10 Roles*. https://tractioncomplete.com/articles/mapping-the-b2b-buying-committee/
- Optifai — *B2B Sales Cycle Length Benchmarks — 939 Companies by Deal Size & Segment*. https://optif.ai/learn/questions/sales-cycle-length-benchmark/
- Human Renaissance — *B2B Tech Sales Cycle Benchmarks by Deal Size (2025 Data)*. https://www.humanr.ai/intelligence/b2b-tech-sales-cycle-benchmarks-by-deal-size
- Saber — *Close Rate: Definition, Calculation & Win Rate Optimization*. https://www.saber.app/glossary/close-rate
- M Accelerator — *How to Disqualify Leads Faster*. https://maccelerator.la/en/blog/entrepreneurship/disqualify-leads-faster-guide/
- Pitchsite — *Proposal Win Rate Benchmarks 2026: Agency Data*. https://pitchsite.io/guides/win-rate-benchmarks
- Demodesk — *Sales Qualification Frameworks: SPICED, MEDDIC, BANT, NEAT, CHAMP, ANUM, FAINT, GPCT, GPCTBA/C&I*. https://demodesk.com/resources-guides/sales-qualification-frameworks-in-2024-how-to-choose-the-right-one-for-your-business
- Weflow — *GPCT vs BANT*; *SPICED sales framework*. https://www.getweflow.com/blog/gpct
- Inversion Selling — *Why 60% of Your Deals End in 'No Decision'*. https://inversionselling.com/blog/why-60-of-your-deals-end-in-no-decision-and-how-to-fix-it/
- Neuron Consulting (AU) — *The Deal Nobody Won: Why B2B Buyers Choose Indecision*. https://neuronconsulting.com.au/blog/b2b-deals-lost-no-decision
- SellingSherpa — *The JOLT Effect (book summary)*. https://sellingsherpa.com/index.php/2022/09/29/the-jolt-effect-book-summary/
- ReadingRaphics; Medium (Enrique Uribe); Marketing Psycho — SPIN Selling summaries (implied vs explicit needs). https://readingraphics.com/book-summary-spin-selling-neil-rackham/
- DemandScience — *Account Scoring for ABM: Beyond Firmographic and Fit*. https://demandscience.com/resources/blog/abm-account-scoring/
- Cleanlist — *ICP Scoring: 3 Real Examples + Build Guide*. https://www.cleanlist.ai/glossary/icp-scoring
- Zylo — *Reduce SaaS Costs*. https://zylo.com/blog/reduce-saas-costs
- tools8020 — *The Real Cost of SaaS Sprawl in 2026*. https://tools8020.com/blog/saas-sprawl-2026/
- SaaSUltra — *How Many SaaS Apps Does the Average Company Use?* https://www.saasultra.com/how-many-saas-apps-does-the-average-company-uses/
- Digital Chiefs — *275 apps, one third invisible: how SaaS sprawl is devouring IT budgets*. https://www.digital-chiefs.de/en/275-apps-one-third-invisible-how-saas-sprawl-is-devouring-it-budgets/
- Vectoron — multi-location marketing operations (Asana index citation; −34% cost-per-location claim). https://www.vectoron.ai/blog/content-scaling/multi-location-businesses
- Mekari — *Multi-Site Operations: Complete Guide to Managing Locations*. https://mekari.com/en/blog/multi-site-operations/
- TutorChase — *Economies and Diseconomies of Scale* (Edexcel A-Level Economics notes). https://www.tutorchase.com/notes/edexcel-a-level/economics/3-3-3-economies-and-diseconomies-of-scale
- CT Acquisitions — *Private Equity Roll-Up Strategy: 2026 Complete Guide*; *Plumbing PE Roll-Up Tracker 2026*; *Pest Control PE Roll-Up Tracker 2026*; *Home Services M&A Multiples Report 2026*; *Australia PE Buyer Landscape 2026*. https://ctacquisitions.com/private-equity-roll-up-strategy/ ; https://ctacquisitions.com/guides/australia-pe-buyer-landscape-2026/
- Profitability Partners — *Who's Buying Home Services Companies in 2026?* https://profitabilitypartners.io/home-services-private-equity-acquirers/
- Pipeline On — *Private Equity Buying HVAC and Home Services in 2026*. https://pipelineon.com/blog/private-equity-buying-hvac/
- Catalyst for the Trades — *How Private Equity Consolidation Is Changing the Home Services Industry: 2026 Guide*. https://www.catalystforthetrades.com/blog/how-private-equity-consolidation-is-changing-the-home-services-industry
- Money.com.au — *Australian Business Statistics 2026*. https://www.money.com.au/business-loans/australian-business-statistics
- Grant Thornton Australia — *The overlooked opportunity in Australia's mid-sized businesses* (2019). https://www.grantthornton.com.au/globalassets/1.-member-firms/australian-website/mid-size-business/pdfs/gtal_2019_msb_report.pdf — *listed, not fetched.*
- KPMG Australia — *Australian mid-market business review 2025*. https://kpmg.com/au/en/insights/economics-geopolitics/australian-mid-market-business-review.html — *listed, not fetched.*
- DAI — *Insights from Emerging Markets: MSMEs and Digital Tool Use, Philippines country brief* (Feb 2022). https://www.dai.com/uploads/final-msme-reports/philippines-country-brief.pdf
- Philippine Information Agency — DTI Pangasinan MSME digital-tool adoption figures. https://pia.gov.ph/news/dti-pangasinan-accelerates-msme-growth-bolstering-local-economy/
- Brevity (AU) — *NDIS Compliance Requirements 2026*. https://www.brevity.com.au/blog/2026-compliance-and-audit-standards-whats-changing-and-how-to-prepare/

### Internal corpus
- `D:\PROJECTS\axon-enjin\research\research-plan.md`
- `D:\PROJECTS\axon-enjin\research\pillar-01-price-architecture.md` (F5/EVE, F7, F18, F/8, C2, C6, C11, and the sub-agent 1 handoff notes)
- `D:\PROJECTS\axon-enjin\pricing\chatgpt2.md`
- `D:\PROJECTS\axon-enjin\pricing\claude-response2.md`

---

## End-to-End Session Review

### What I searched and why

Fifteen web searches and five page fetches, in five deliberate groups.

1. **Named-framework extraction** (MEDDPICC, SPICED, Winning by Design/Bowtie, BANT/CHAMP/ANUM/GPCTBA, Miller Heiman, Challenger Customer). Purpose: get the *published* element definitions and — more valuable — any published *scoring* mechanics, since the brief demanded a runnable rubric. The ARPEDIO fetch was the single highest-yield call of the session: it produced the 0–4 documentation scale that the whole CLI and gate design in §6 rests on.
2. **Buyer-side structural benchmarks** (Gartner committee size, sales cycle by deal size, no-decision rates). Purpose: put numbers on A1's denominator so `DCL` and `PCR` could be estimated rather than asserted. The JOLT 44/56 split was an unplanned find and became C2.3, the most consequential contradiction in the pillar.
3. **The A2 inversion test** (price-sensitive buyer literature, Rackham value modes, Holden/Nagle buyer types, SPIN implied vs explicit needs). Purpose: the brief explicitly asked me to test the "scrutinises every peso" claim against the literature. Found partial corroboration from two independent directions (Challenger's Skeptic-as-Mobilizer; Wickersham's poker-face buyer) and found the vocabulary that explains why the two internal docs disagree.
4. **Empirical-claim verification** (AU trades PE roll-up ×4 attempts, AU allied health/dental/vet consolidation, PH MSME underservice, AU compliance regimes, AU/PH firmographic base rates). Purpose: the brief required verify-or-falsify verdicts. Four attempts at Australian trades roll-up all returned US data, which is itself the finding.
5. **Structural corroboration for the multi-branch thesis** (vertical-SaaS market-picking, multi-site coordination cost). Purpose: find whether A1 is documented anywhere outside the internal docs. Tidemark's chapter is the closest thing that exists.

Two searches I ran and largely wasted: the ABS turnover-bracket query (the release does not publish counts above AUD 2M) and the PH establishment-count query (the definitive DTI PDF would not parse). Both are recorded as unretrieved rather than papered over.

### Coverage confidence per sub-topic

| Sub-topic (from the brief) | Confidence | Basis |
|---|---|---|
| Named frameworks: MEDDPICC/MEDDIC | **High** | Element definitions + published 0–4 scale + disqualification guidance, from a practitioner guide, cross-checked against three others |
| SPICED / Winning by Design | **Medium-high** | Framework fully described; the Bowtie *data model* and WbD's actual ICP methodology are behind consulting engagements and were not obtained |
| Miller Heiman buying influences | **High** | Four roles, Blue Sheet, Red Flags, Win-Results — consistent across four sources |
| Challenger Mobilizer taxonomy | **High** | Seven profiles, three classes, research n and method stated |
| BANT / CHAMP / ANUM / GPCTBA/C&I | **Medium** | Comparative treatment and criticism obtained; no primary source for any of them; deliberately not expanded because the literature itself says they are triage filters, and I judged the gates in §6 the better use of the space |
| ICP scoring rubrics and ABM tiering | **Medium** | Four-category structure and 100-point/A-B-C convention are unanimous across sources — but every source is a vendor blog and none publishes a validation study |
| Trigger events / buying signals | **Medium-low on magnitudes, high on taxonomy** | Six signal categories are consistent; the effect sizes (37/19, 5–10×, 4×) are single-source and unaudited |
| Conscious loss vs latent pain | **High** | Rackham's implied/explicit finding is the strongest-sourced claim in the pillar and maps cleanly onto A3 |
| Effect of pain-consciousness on cycle length | **Low** | Nothing found that measures cycle length as a function of pain consciousness. F2.7 estimates cycle from chain length instead, which is a substitution, not an answer |
| Disqualification as a discipline | **Medium on principle, low on numbers** | MEDDPICC's own literature is explicit and credible on the principle; every quantitative benchmark is weak (see C2.11) |
| Economic/technical/champion/blocker mapping | **High** | Two independent frameworks (F/13, F/14) plus MEDDPICC agree |
| Deal-size floors and ROI-multiple screen | **High on derivation, zero on external validation** | F2.1/F2.2 chain cleanly from Pillar 1's F1–F4 and F7. No external source publishes a minimum-deal-size formula for a studio; agency-minimum-engagement data does not exist publicly in usable form |
| Firmographic filters | **Medium** | A4's individual filters are each plausible and two are corroborated (SaaS sprawl direction; compliance regime magnitude). The *revenue band* could not be sized in either country |
| Segment-level willingness to pay | **Low — the pillar's biggest hole** | Repeats Pillar 1's finding. Every PH source is an outsourcing rate card aimed at foreign buyers. No AU mid-market WTP data for custom operational software was found at any tier |
| PE roll-up dynamics as a buying trigger | **High for US home services; high for AU dental and vet; not verified for AU trades** | See verdicts below |
| The A2 "scrutinises every peso" inversion | **Medium-high** | Two independent corroborations, one direct negation from the sibling internal doc, and a taxonomy that explains the disagreement |
| The multi-branch thesis outside internal docs | **Low-medium** | Denominator half corroborated (Tidemark). Numerator half's `× N` form found nowhere |
| Branch homogeneity / metric density | **Low** | The concept transfers cleanly from Pillar 1 F/8; the BHI formula is mine; the thresholds are invented (C2.9) |

### Well-sourced vs thin claims

**Well sourced.** Rackham's implied/explicit-needs finding (primary research programme, 35,000 calls). The JOLT 40–60% no-decision rate and 44/56 split (2.5M conversations). MEDDPICC's element definitions and 0–4 scale. Miller Heiman's four buying influences. Challenger's seven profiles. Australian dental consolidation figures (journalistic + a Takeovers Panel decision). Australian NDIS and aged-care penalty magnitudes (statutory, reported by law firms and the regulator). ABS business counts by employment size.

**Thin, and labelled thin in the text.** Every number in §7.4 — the disqualification and win-rate effects — which is unfortunate because they are the numbers that justify the pillar's core discipline. All trigger-event effect sizes. All SaaS-sprawl magnitudes as applied to 30–500-employee firms (the data is for 500–10,000). The 34% cost-per-location claim (vendor marketing). The Gartner figures, which I only ever saw at second hand.

**Mine, not anyone's.** F2.1 MVDS, F2.2's inversion of Pillar 1 F7, F2.3 PPL and `ρ`, F2.4 BHI, F2.5 CLI and its artefact weights, F2.6 QCT, F2.7 DCL and its `a`/`b` priors, F2.8 PCR, F2.9 TSS weights, F2.10 EVP and its `p_win` ladder, and every weight and threshold in the §6.6 rubric. These are derivations and priors. The rubric is internally consistent and reproducible; it is not validated, and §6.5 says so in the document rather than in this review only.

### What I could not find

- **Any measurement of the multi-branch thesis.** No source states, tests, or models operational loss as a function of location count for mid-market service businesses. The economics literature implies super-linear cost growth; centralisation implies damping. I introduced `ρ` to hold the uncertainty rather than to resolve it.
- **Any segment-level willingness-to-pay data** for custom operational software in either AU mid-market or PH mid-market. This is the second consecutive pillar to report this gap. It is now the program's most durable blind spot.
- **The size of the AUD 5–50M revenue population.** ABS publishes turnover brackets only up to "$2M or more" in aggregate in the accessed release.
- **The Philippine medium-enterprise sub-count.** The authoritative DTI PDF returned binary content the fetch tool could not parse. Only the aggregate 99.63% MSME / 4,568 large split was obtainable.
- **Any evidence on Australian trades/field-service PE roll-ups.** Four query formulations, zero Australian platform data.
- **Any test of Technical-Buyer absence** (A4's "no CTO") against win rate or delivery outcome.
- **Any threshold for metric density / branch heterogeneity** at which per-unit pricing starts generating disputes.
- **Any link between deposit refusal and downstream client outcomes.**
- **Any study of qualification frameworks applied to 1–3-stakeholder deals.** The entire literature is calibrated to committees, which is precisely the buyer A1 says to avoid (C2.4).
- **Contravention probabilities per provider-year** in NDIS or aged care, which the §6.8 compliance modifier needs and for which I substituted an invented 2%.

### Contradictions surfaced and left unresolved

C2.1 (price-scrutiny read two ways) · C2.2 (latent need: disqualifier or the job) · C2.3 (conscious loss vs FOMU) · C2.4 (heavyweight frameworks aimed at the deals A1 avoids) · C2.5 (no-CTO as asset and as risk) · C2.6 (neither archetype clears the 5× screen) · C2.7 (location band vs ROI screen: 19–27 sites needed vs 5–50 stated) · C2.8 (`× N` unsourced) · C2.9 (invented density thresholds) · C2.10 (deposit screen is policy, not finding) · C2.11 (the disqualification evidence base is the weakest in the pillar) · C2.12 (single-signatory corroboration comes from a much smaller buyer) · C2.13 (roll-up trigger verified in the wrong hemisphere; and the roll-up's real systems buyer may be the sponsor, not the operator) · C2.14 (geography entanglement, inherited) · C2.15 (inductive vs deductive ICP — the plan's own Open Question).

C2.6 and C2.7 are the two I would flag hardest. They are not disagreements between sources; they are arithmetic inconsistencies *inside* the internal corpus, produced by chaining Pillar 1's cost floor to Pillar 1's EVE examples through the internal docs' own 5× rule. They cannot be resolved by more research — only by the operator choosing which stated filter is real.

### Verification verdicts on the internal docs' empirical claims

| Claim | Verdict | Evidence |
|---|---|---|
| PE has been rolling up **trades / field service**, creating acquirers who need systems | **VERIFIED for the United States. NOT VERIFIED for Australia.** | US: >USD 50bn deployed since 2018; Apollo/Apex ≈USD 2bn at ≈USD 10bn (May 2026); Apex ≈60 add-ons in 2025 across ≈300 businesses; buy 5–8× / sell 17–20×. Australia: four query formulations produced no platform data. Nearest AU data point is Johns Lyng Group (building/restoration services) at USD 725M, 2025 — a take-private, not a roll-up platform. |
| **Australian clinic groups have been consolidating fast** | **VERIFIED (dental and veterinary), PARTIALLY VERIFIED (allied health broadly)** | Dental: corporate ownership ≈12% of ≈7,000 practices, up from ≈6% a decade earlier; Pacific Smiles ≈130, NDC 88, Maven 100+, Abano ≈260 trans-Tasman, Bupa ≈200; NDC/Pacific Smiles AUD 303M scheme agreed 2024 (Takeovers Panel 2024 ATP 12). Vet: Greencross 165+ practices, TPG 55% since 2019; Vets Central/Pemba 45+; PetO absorbed 25 co-located clinics in 2024; ≈85% still independent (2023). Physio/aesthetics specifics: not found. |
| **Regulated care is the purest loss-aversion play; non-compliance is fines and licence risk, not opportunity cost; highest willingness to pay** | **VERIFIED, and understated** | NDIS maximum civil penalty AUD 412,500 → **over AUD 15M** where a participant is harmed (Act passed April 2026); up to AUD 3.64M per contravention; criminal liability incl. 2 years imprisonment for unregistered high-risk supports. Aged Care Act 2024 commenced 1 July 2025 with 250/500 penalty-unit penalties (≈AUD 82,500 / 165,000). Independent corroboration of the WTP mechanism from vertical-SaaS literature. |
| **MSME technology underservice in the Philippines** | **VERIFIED in direction; the headline statistic is stale** | DTI undersecretary cited a 2022 survey: **77% of MSMEs eager to adopt digital tools, 16% actually using them**. 1,241,476 registered establishments, 99.63% MSME. Named barriers: financing, digital literacy, change resistance, connectivity. Caveat: the 77/16 figure is 2022 and reported second-hand; it describes *micro* enterprises predominantly, not the 30–500-staff multi-branch operator `chatgpt2.md` actually targets. Underservice of the **mid-market** specifically was not verified. |
| **A1 — pain multiplies by location while the decision stays single** | **Denominator VERIFIED in kind; numerator NOT VERIFIED in form** | Denominator: Tidemark states *"no 18-month procurement process with seven stakeholders. One person can decide and sign. Sales cycles compress from 6 months to 6 weeks"* — but for a smaller buyer than A1 targets (C2.12). Numerator: coordination-cost growth is textbook and qualitatively corroborated; the `× N` linear form appears in no source. |
| **A2 — the money-scrutinising buyer is the better buyer** | **CORROBORATED from two independent directions; DIRECTLY NEGATED by the sibling internal doc** | Corroboration: Challenger's **Skeptic** ("open to new ideas but dissects every detail… believe changes require small wins first") is classed a **Mobilizer**, i.e. a preferred profile from a 700-stakeholder research programme; Wickersham/Holden–Nagle's **poker-face buyer** shows price-signalling is not diagnostic of buyer type, with true price buyers only 15–20% of the population. Negation: `chatgpt2.md` avoids small buyers *because* "every expense is highly visible" makes them negotiate hard. Left open as C2.1. |
| **A5 — avoid buyers whose annual loss is under ~5× your fee** | **Internally inconsistent with the rest of the corpus** | Applied via F2.2 to Pillar 1's own EVE worked examples at MVDS-derived pricing, both archetypes fail (1.3× and 1.2× headroom). F2.3 shows 5× requires 19–27 locations at those per-site loss levels, against A4's stated 5–50 band. C2.6, C2.7. |

### Handoff notes

**For Pillar 3 — Positioning & Category**

- **C2.4 is a positioning problem before it is a sales problem.** Every named qualification framework is calibrated for committees; A1's thesis is calibrated for a single signatory. The category Axon Enjin claims determines which of those two worlds the buyer places it in. Positioning as "software house" invites a Technical Buyer and a Paper Process; positioning as an operations partner to the ops leader may avoid both. That is a *category* choice with a direct, measurable effect on F2.7's `DCL` and therefore on F2.8's PCR.
- **The compliance finding is a positioning asset, not just a vertical filter.** §7.5 and P2.10: regulated care is the only buyer class where the loss figure is published by a third party, which means it is the only class where credibility substitutes (your pillar's term) are *not required* to establish value — the legislation establishes it. If you are looking for a category where a studio with no logos can nonetheless make an unarguable value claim, that is it.
- **A2/C2.1 has a positioning consequence.** If the target buyer is a Skeptic-Mobilizer who "believes changes require small wins first," then the category and the first offer must accommodate a small first win. A positioning that demands a large first commitment selects against the exact buyer the corpus says is best. Coordinate this with Pillar 4.
- **C2.12 is partly yours.** The "one person can decide and sign" corroboration comes from SMB vertical SaaS at low ARPU. Whether it survives at AUD 5–50M revenue is partly determined by how the seller *presents* the purchase — as an operational tool (ops leader decides) or as a system (CFO, board, IT get pulled in). Category framing moves the chain length.
- **Note on F/17:** Rackham & DeVincentis' intrinsic/extrinsic/strategic modes are, read one way, a positioning taxonomy — they describe what the seller must *be* for each mode. The explicit caution that value mode is a state, not a trait, means positioning can *move* a buyer between modes. That is the most interesting lead I did not chase.

**For Pillar 4 — Demand Generation & Offer Design**

- **F2.9 (Trigger Stack Score) is your targeting engine, and it is buildable from public data.** New location opened, acquisition, new COO, coordination-role hiring req, compliance change: all publicly observable, all datable. H2.1 (careers page as P&L), H2.2 (store-locator as location count) and H2.3 (regulator enforcement registers) are three free, repeatable list-building mechanisms. The reported 5–10× stacking differential is web-tier, so treat it as a hypothesis to test, not a benchmark to plan against.
- **The sponsored-work campaign is an ICP-discovery instrument, and F/19 tells you how to use it.** Moesta's switch-interview method — ~10 recent buyers, yields 3–5 patterns covering ~90% of the market — is the inductive counterpart to my deductive rubric, and the plan's campaign docs already describe harvesting a pain-point database from applicants. The non-selected-applicant pool is a switch-interview sample. That connection is not made anywhere in the corpus and it is the cheapest available route out of C2.15.
- **C2.3 should change your offer design, not just your messaging.** If 56% of no-decision losses are FOMU rather than status-quo preference, then loss-aversion framing (which the plan assigns to P5) addresses the minority mechanism. The JOLT literature's own answer is de-risking the decision. A sponsored or small-first-win offer is structurally a de-risking instrument — which is the same conclusion the Challenger Skeptic profile points at from the other direction. Two independent framings converging on the same offer shape is the strongest signal I found for P4.
- **The MVDS floor (F2.1) prices your free work.** PHP ≈560k / AUD ≈32.5k is the cost-plus-CAC floor for a smallest realistic build. A sponsored build is that number spent on marketing. Pillar 1's F16 (Free-Work Payback) plus F2.1 gives you both sides of that arithmetic.
- **Selection framing and the disqualifiers are the same artefact (H2.6).** Publishing the minimum viable deal size and the ROI-multiple screen performs qualification pre-contact *and* supplies the scarcity/selection framing the campaign docs want. Mark the honesty boundary carefully per the standing rule: stating a real floor is legitimate; stating a floor you do not enforce is misrepresentation.
- **One warning.** The rubric in §6.6 will happily score prospects you cannot reach. Nothing in this pillar addresses *access* — whether the identified Economic Buyer of a 20-site clinic group will take a call from a studio with no logos. G3 makes reachability a gate but supplies no method. That method is your pillar's, and if it does not exist, gate G3 disqualifies most of the population the rubric selects.
