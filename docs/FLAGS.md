# Axon Enjin — Flag Register

**Raised:** 3 August 2026 · **Against:** [`AXON ENJIN Document.md`](AXON%20ENJIN%20Document.md) as source of truth, plus every other file in this repo  
**GTM update:** 8 August 2026 — see [`COMMERCIAL-MODEL-V2.md`](COMMERCIAL-MODEL-V2.md)  
**Owner:** unassigned — assign before the next 90-day review  
**Rule:** a flag is closed by a decision recorded in the Company Document §14, not by discussion. GTM packaging decisions are closed in **Commercial Model v2**.

Line numbers are as of this revision of the source document. Section references (§) are stable and preferred — use those if the document is re-exported from Google Docs.

---

## GTM status — 8 August 2026

**Public offers and website copy follow Commercial Model v2**, not the old 5-rung audit ladder or Starter/Growth/Enterprise table.

| Flag cluster | Status under V2 |
| ----- | ----- |
| **F-01, F-02, F-03** (FX / MVC unit / plan contents) | Still **do not quote** old §6 Growth / audit / sprint pesos on the site. V2 requires a **new pricing pass**. Blocking for *old* rate card; site should use “talk to us” until then. |
| **F-04, F-05, F-07, F-21, F-23** (rate-card arithmetic / stale fees) | **Superseded for GTM packaging** — do not publish those numbers. Keep open until Company Document §6 is rebuilt or formally retired. |
| **F-12** (campaign plans contradict doctrine) | Still superseded campaigns; also superseded by V2. |
| **F-27 … F-33** and other **§8 regulatory** flags | **Still active.** Voice and product constraints (no accreditation claims, no payment acceptance claims, Accounting safe scope) remain binding. |
| **Audit-first site / archetype hub** | **Retired for GTM** by V2 + [`SITEMAP.md`](SITEMAP.md) v2. |
| **F-34, F-35** (no public pesos; live FX on quotes) | **Raised 8 Aug 2026.** Site never shows ₱. Quotes use an up-to-date converter. |

**Do:** Ship Operating Layer + three offers + module catalog **without any public peso amounts**.  
**Do not:** Publish ₱95k audit / Growth plan / module list prices on the website.

---

## New flags — 8 August 2026 (Commercial Model v2)

### F-34 — No peso amounts on the public website (quotations only)

**Where:** Site (`index.html`, future `/pricing`), [`COMMERCIAL-MODEL-V2.md`](COMMERCIAL-MODEL-V2.md) pricing stance  
**Severity:** 🟠 High (GTM / publication rule)  
**Status:** **Locked decision** — open until §14 / V2 explicitly records it and site + docs are consistent everywhere.

**Decision (founder, 8 Aug 2026):** Public site must **not** show peso (or other currency) prices. Prices appear **only in quotations** sent to prospects/clients.

**Do:** Keep “talk to us” / “book a call” / “how buying works” copy. Internal rate cards and quote templates may hold numbers.  
**Do not:** Publish Core/module/Offer pesos on the marketing site, even after a V2 pricing pass — that pass feeds **quotations**, not the website.  
**Closes when:** Written into Company Document §14 (or V2 locked decisions) and a site audit confirms zero public price figures.

**Related:** F-01–F-03 (old rate card); A1 in V2 §10 (repriced for quotes, not for the site).

---

### F-35 — Quotations need a dynamic FX converter (no stale peg)

**Where:** Quotation workflow; Company Document §1 / §6 / §14 currency peg (₱58, reopen at ₱62/₱55); F-01  
**Severity:** 🟠 High (commercial accuracy)  
**Status:** Open — capability not built.

**Decision (founder, 8 Aug 2026):** When quoting, currency conversions must be **up to date** via a **dynamic converter**, not a hand-copied stale peg.

**Why:** F-01 already showed the fixed ₱58 peg was ~6% off market and near its own reopen trigger. Publishing or quoting off a stale internal number recreates margin error.

**Do:** Spec and implement a quote-time converter (source + rate date stamped on every quote; e.g. BAP / BSP / agreed feed). Align with RMC 12-2024 if invoices stay PHP-denominated but USD is the system of record.  
**Do not:** Paste last month’s Google-search FX into a quote, or lock the website to a fixed ₱/USD table.  
**Closes when:** Quote template/tool uses a live (or same-day) rate, stamps the rate + source + date on the PDF/proposal, and §14 records the conversion rule.

**Related:** F-01; research verified FX baseline; V2 §10 A3.

---

## Resolution status — updated 3 August 2026

A sequential research chain was run against this register. **Sub-agent 1 of 7 completed; the remaining six were halted by an org billing ceiling, not by any technical failure.** What that means for this register:

| | |
| ----- | ----- |
| **Delivered** | [`research/verified/01-regulatory-tax-fx-baseline.md`](research/verified/01-regulatory-tax-fx-baseline.md) — 1,769 lines, 24 PH regulatory instruments verified issuance by issuance against primary text, each with URL, retrieval date and source tier |
| **Closed** | R-04 (settled by RMC 12-2024), R-05 (answered from RR 11-2025 primary text), A2 (re-verified with one material correction) |
| **Evidence closed, decision pending** | F-01 — the FX facts are now firm and one figure was corrected; the peg choice itself is a founder call recorded in Company Document §14 |
| **Partly served** | F-06 (regulatory derivation supplied), F-13 (regulatory half of the provenance gap closed, pricing half still open), F-15 (the correct clearance test supplied) |
| **New flags raised** | **F-27 … F-33** (regulatory, 3 Aug); **F-34, F-35** (no public pesos; dynamic FX on quotes, 8 Aug) |
| **Still untouched** | F-02, F-03, F-04, F-05, F-07, F-08, F-09, F-10, F-11, F-12, F-14, F-16 … F-26 — these were scoped to sub-agents 2–7 |
| **GTM packaging** | Superseded by [`COMMERCIAL-MODEL-V2.md`](COMMERCIAL-MODEL-V2.md) (8 Aug 2026) for public offers; regulatory flags unchanged |

To resume the remaining six agents, raise the credit ceiling and re-run the workflow with `resumeFromRunId` — sub-agent 1 replays from cache at no cost. Details at the bottom of this file.

---

## Summary

| Severity | Count | Meaning |
| ----- | ----- | ----- |
| 🔴 Blocking | 3 | Do not quote **old** §6 prices until resolved or replaced by a V2 pricing pass |
| 🟠 High | 15 | Resolve inside the 60-day window in §16 (includes F-34, F-35) |
| 🟡 Medium | 16 | Resolve at the next 90-day review |
| ⚪ Low | 1 | Hygiene on a currently-correct figure |

**The three blocking flags are all in the old rate card.** Under V2, the public site must **not** use those numbers. Regulatory flags (especially F-27…F-33) still bind copy and product scope.

**What the first research pass changed about that judgement.** The regulatory foundation is in better shape than expected — the compliance doctrine survives contact with primary sources, and the one item the document calls existential (the BSP boundary) turns out to have a cheaper and more answerable framing than §8.7 assumed. But §8 carried seven substantive errors, one of which (RMO 9-2021's per-franchisee registration rule) changes how the implementation fee should be *structured*, not just priced. That is now F-28.

---

## 🔴 Blocking

### F-01 — The FX peg is stale and roughly 1% from its own reopen trigger

**Where:** §1 (line 177), §6 preamble (line 439), §9.4 (line 708), §14 (line 816); repeated in WD2 (line 878), WD3 (line 1359), WD4 (line 1410)

The document pegs USD/PHP at **₱58** and sets a hard reopen trigger at **₱62 or ₱55** (§14), with monthly monitoring mandated (§9.4). USD/PHP was **≈₱61.24 on 2 August 2026**, with August forecasts ranging to **₱61.99**.

**Corrected 3 August 2026 against primary data.** The peg is **6.2% out of the money** against the trailing-20-day average of **₱61.611**, and the ₱62 trigger came within **0.27%** on 24 July 2026, when the ECB fixing reached ₱61.835 and Inquirer Business reported a close of ₱61.847 under the headline "62 in sight". **The trigger is armed, not distant** — it nearly fired nine days before the Company Document was written, and §9.4's monthly monitor did not catch it. The original "about 1.3% from the trigger" understated the proximity by roughly a factor of five.

Every ₱ price in §6 realises ~6% less USD than its stated anchor:

| Item | $ anchor | At ₱58 | At ₱61.2 | Shortfall |
| ----- | ----- | ----- | ----- | ----- |
| Core Platform | $150 | ₱8,700 | ₱9,180 | ₱480/branch/mo |
| Growth plan | $420 | ₱24,360 | ₱25,704 | ₱1,344/branch/mo |
| Readiness Audit | $1,650 | ₱95,000 | ₱100,980 | ₱5,980 |
| Custom-build floor | $8,000 | ₱464,000 | ₱489,600 | ₱25,600 |
| 8-branch reference client, year 1 | — | ₱2,358,800 | ₱2,488,860 | **₱130,060** |

Secondary observation: the ₱62/₱55 band is symmetric around ₱58.5, i.e. around the peg rather than around the market. A band set around a stale midpoint will keep tripping on one side only — and the measured data confirms it. **In 255 trading days from 1 August 2025 to 31 July 2026 the rate spent zero days at or above ₱62 and zero days at or below ₱55.** The lower trigger has not been within 10% of spot at any point in a year. The band has one live side and one dead side, so it is not functioning as a band.

Twelve-month statistics from a 255-observation ECB daily reference series, retrieved and analysed 3 August 2026: mean **₱59.337**, min **₱56.648** (13 Aug 2025), max **₱61.835** (24 Jul 2026), annualised volatility **6.16%**, latest **₱61.269** (31 Jul 2026). The move was a **regime break, not drift** — February month-end ₱57.683 to March month-end ₱60.689, **+5.2% in one month**, then a four-month plateau at 61.3–61.6. Full series and method in [`research/verified/01-regulatory-tax-fx-baseline.md`](research/verified/01-regulatory-tax-fx-baseline.md) §6.1.

**The tax question is settled, and it is not the problem.** BIR **RMC 12-2024** (22 January 2024) governs, and nobody in this corpus had found it. Because the Company Document invoices in PHP (§6 preamble, §14), there is no foreign-currency-denominated transaction and the internal USD anchor is a **pricing convention with no tax dimension** — the ₱58 peg was never unlawful on the document's own facts. Had contracts been USD-denominated and PHP-settled, a fixed peg would *not* be permitted: conversion must use the spot rate on the transaction date at BAP published rates, governing VAT and every non-income tax as well as income tax; monthly averaging is expressly prohibited; a non-BAP source requires a notarised sworn statement 30 days before the taxable year, irrevocable for at least a year. The one sanctioned smoothing lever is electing *which* spot rate — open, close, high, low or weighted average — at the start of the taxable year.

**Do:** re-decide the reference before publishing any rate card. The exposure is margin, roughly 6% of it, not regulatory. The recommendation on the table, with its falsifiers, is now recorded in Company Document §14 under "Currency — the reopened decision": an annual PHP price list at an internal reference of **₱61.50**, USD retained as system of record, with an **asymmetric** review trigger at +4% (≈₱63.95) and −6% (≈₱57.80) of the trailing-20-day average — asymmetric because the upside is a margin hole and the downside is a windfall, and because twelve months of data show a one-directional trend.

**Do not convert the numbers twice.** Repricing §6 interacts with F-03, F-07, F-21 and F-23. Decide the reference, then rebuild §6 in a single pass — this is the one moment when repricing carries no incumbency cost.

**R-04 is closed.** The residual question for counsel is narrow and cheap: does a PHP-denominated invoice priced off an internal USD reference constitute a foreign-currency-denominated transaction for RMC 12-2024 purposes? It is now item 1 of the §8.7 second wave. Commissioning an open FX opinion would have meant paying counsel to find a two-year-old circular.

---

### F-02 — "₱1.5M+ per month" is used as both network revenue and per-branch revenue

**Where:** §4.5 (line 369) and §7.2 (line 563); repeated as *network* in WD2 (line 950) and WD4 §0 (line 1420)

The minimum-viable-client filter reads **"₱1.5M+ per month network revenue."** The pricing-defensibility argument in §7.2 uses the same ₱1.5M as **per-branch** revenue: *"₱24,360/branch/month is roughly 1.6% of network revenue for a client with ₱1.5M monthly revenue per branch."*

| Reading | 8-branch network revenue | Subscription | Software as % of revenue |
| ----- | ----- | ----- | ----- |
| ₱1.5M **per branch** | ₱12,000,000/mo | ₱194,880/mo | **1.6%** — matches §7.2 |
| ₱1.5M **network-wide** | ₱1,500,000/mo | ₱194,880/mo | **13.0%** — unsellable |

Both readings cannot hold. Under the network reading the MVC floor is ~8× too low **and** §7.2's central defence of the rate card collapses. Under the per-branch reading the MVC bullet is mis-stated in three places.

This is the highest-leverage single-word fix in the repo, and it changes who gets qualified in the very first discovery conversation.

**Do:** decide the unit, then correct §4.5, WD2, and WD4 §0 together. If per-branch is intended, state the implied network floor explicitly (≈₱12M/mo at 8 branches) — because that materially shrinks the addressable set and should be pressure-tested against §13 row 1.

---

### F-03 — The packaged-plans table has four defects and is not quotable

**Where:** §6.4 (lines 496–512)

| # | Defect | Detail |
| ----- | ----- | ----- |
| 1 | **Plan contents undefined** | Nothing states which modules are in Starter / Growth / Enterprise, so no plan reconciles against §6.1–6.3. Growth's ₱24,360 happens to equal Core + Store Ops + Royalty exactly. Starter's ₱12,760 is **below** Core + the cheapest archetype pack (₱15,370), so Starter cannot contain an archetype pack — contradicting §6.1 ("mandatory with every subscription") and the Path 1 definition in §5. |
| 2 | **Volume curve inverted** | Enterprise is ₱37,700/branch vs Growth ₱24,360/branch. Bigger networks pay *more* per branch. Only defensible if Enterprise bundles materially more, which defect 1 leaves unstated. |
| 3 | **Two Enterprise prices, ~4.5× apart** | At 20 branches: per-branch pricing = ₱754,000/mo. The base-plus-add-on alternative in the very next paragraph = ₱133,000–169,000/mo. Growth at 20 branches = ₱487,200/mo. Three incompatible prices for one customer. |
| 4 | **Overlapping bands, one below the floor** | 5 branches is both Starter and Growth; 20 is both Growth and Enterprise. Starter's "2–5 branches" sits below the §4.5 MVC floor of 3+. |

**Do:** define plan contents as module lists, pick one Enterprise mechanism, make the per-branch curve non-increasing (or justify it), and set non-overlapping bands starting at 3 branches.

---

## 🟠 High

### F-04 — Reference-bundle arithmetic does not close

**Where:** WD2 §5.6 (line 1107)

Home-services row: Core 8,700 + Field Ops 8,700 + Royalty 6,960 + LMS 3,480 = **₱27,840**, not the stated ₱32,340 (₱222,720 at 8 branches, not ₱258,720). The gap is ₱4,500 and no module in §5.2/§5.4 costs ₱4,500. Rows 1 and 2 reconcile exactly, which makes row 3 look like an error rather than an undocumented inclusion. Flagged inline in the document.

**Do:** fix the total or complete the configuration list.

---

### F-05 — Two different implementation fees were both live in the same document

**Where:** §6.5 (line 517, corrected) vs WD2 §6 (line 1120, superseded) and WD4 §2.3 (line 1523)

The Document Control block (line 160) states the 1.0–1.5×-of-subscription rule was corrected to ₱180,000 base + ₱25,000/branch — but the old rule and its ₱174,000 minimum survived unchanged in WD2's service catalog, which is a *rate card someone would quote from*. Now marked ⚠️ SUPERSEDED inline, but the underlying hygiene problem stands: **a correction was recorded in one place and not propagated.**

**Do:** propagate corrections to every table that repeats the number, and add a rule to the review cadence: after any §14 change, grep the whole document for the old figure.

---

### F-06 — The replacement implementation fee has no stated hour assumption

**Where:** §6.5 (line 517), §7.4 (line 585), §13 (line 813), WD4 §2.3 (line 1523)

The superseded ₱174,000 minimum at least declared its basis: ~120 hours. The replacement (₱180,000 + ₱25,000/branch) declares none. But §7.4, §13, and WD4 §5 all set triggers in hours ("average exceeds 200 hours"). Without a stated hours assumption those triggers cannot be evaluated — you cannot tell whether 200 hours is a comfortable margin or already a loss.

Working the arithmetic backwards at the §6.5 customization rate of ₱2,320/hr: for 8 branches the ₱380,000 fee implies **≈164 billable-equivalent hours**. So the 200-hour trigger is *already above* the fee's implied basis. At WD4's plausible-worst 300 hours the effective rate is ₱1,267/hr, which against the 45–55% services margin target in §7.3 requires a fully-loaded delivery cost at or below ~₱570–700/hr.

**Do:** state the assumed hours behind the base and the per-branch increment, then re-derive the §13 trigger from it rather than leaving 200 as an inherited number.

---

### F-07 — Bundling the Regulatory Update Subscription gave away ~17% of Core with no reprice

**Where:** §6.1 (line 461), §14 (line 822) vs WD2 §6 (line 1126), WD2 §8.3 (line 1155), WD3 §3 (line 1276)

Regulatory updates were priced at **₱1,500/branch/mo** as a separate SKU (WD2). They are now locked as bundled and not separately sold (§6.1, §14). But **Core stayed at ₱8,700 in both versions** — so ₱1,500/branch/mo, ~17% of Core, was folded in for free. The decision may still be right (it removes an awkward conversation and stops clients running non-compliant versions under your name), but it was taken as a packaging decision without the pricing consequence being recorded anywhere.

Three downstream inconsistencies: WD2 still prices it separately, WD2 §8.3 still lists it as an *open* decision, and WD3's recurring-revenue list still names it as its own stream — while §7.1 correctly omits it.

**Do:** decide whether Core absorbs the ₱1,500 or rises to ₱10,200. Then reconcile WD2 §6, WD2 §8.3, and WD3 §3.

---

### F-08 — The only market-size statement in the document is uncited and partly stale

**Where:** §4.1 (line 318)

| Claim | Status |
| ----- | ----- |
| 1,800–2,000 franchise brands | ✅ corroborated |
| ~2 million direct and indirect jobs | ✅ corroborated |
| ~₱800 billion industry earnings | ⚠️ plausible (≈$13.5B across food and non-food) but sensitive to the FX rate in F-01 |
| **~120,000 outlets, "below the pre-pandemic peak of about 200,000"** | ❌ **stale.** 2026 trade press reports **more than 200,000 outlets** — the peak has been recovered. The figure understates the market by ~40% and the parenthetical is now wrong. |
| ~7% of the economy | ⚠️ more commonly reported as **7.8%** (US ITA, 2022 data) |

No citation and no date stamp on any of it — which conflicts with the standing rule that findings carry source tier and retrieval date. Separately, **BusinessWorld reported on 26 April 2026 that PH franchising growth is slowing on Persian Gulf crisis exposure.** That is a live macro headwind and it appears nowhere in the §13 risk register.

**Do:** replace with primary PFA figures, date-stamped, before this paragraph appears in a deck. Add the demand-shock risk to §13. See [RESEARCH-QUEUE.md](RESEARCH-QUEUE.md) R-01.

---

### F-09 — The rate card's own benchmark sits one data point from tripping its own rewrite trigger

**Where:** §13 row 3 (line 814) vs §7.2 (line 563)

§13 says: rewrite the rate card if **current all-in spend is below ₱8,000/branch/month**. §7.2 cites **StoreHub Pro at ~₱8,600/branch** as the competitive reference. A prospect running StoreHub Pro alone is at ₱8,600 — **7% above the trigger.** The margin between "proceed" and "rewrite the entire rate card" is one data point wide, and the document already contains a data point that nearly closes it.

Related imprecision in the same paragraph: §7.2 says "we are pricing at a premium to both, deliberately." The actual multiple is **2.8×** (₱24,360 Growth vs ₱8,600 StoreHub Pro). And *Core alone* ($150) is at parity with StoreHub Pro ($149), not at a premium — it is the bundle that carries the premium. Stating the multiple explicitly makes the bet honest and testable; "a premium" hides it.

**Do:** state the multiple. Then treat the ₱8,000 trigger as effectively pre-armed and expect to rewrite from discovery data rather than hoping not to.

---

### F-10 — Path 6 is described as both "price at the top of range" and "priced to lose"

**Where:** §5 note on Path 6 (line 435) and §14 licensing row (line 815); repeated WD3 (line 1200)

§5 says price the perpetual client-owned licence at the **top** of range because the client is acquiring an asset and PH SME buyers pay a premium to own — and calls it "the deliberate answer to compliance risk," i.e. something you actively want to sell. §14 says the perpetual licence is **"priced to lose."** Those are opposite intents.

The arithmetic says it is not priced to lose. For the 8-branch reference client: licence ≈3× annual subscription = ₱5,846,400 plus 20% AMC = ₱1,169,280/yr, versus subscription ₱1,948,800/yr.

| Horizon | Subscription | Path 6 licence | Cheaper |
| ----- | ----- | ----- | ----- |
| 3 years | ₱5,846,400 | ₱8,184,960 | Subscription |
| 5 years | ₱9,744,000 | ₱10,523,520 | Subscription |
| 6 years | ₱11,692,800 | ₱11,692,800 | **Break-even** |
| 7 years | ₱13,641,600 | ₱12,862,080 | **Path 6** |

So it is priced to lose only against horizons under ~6 years. A family franchisor with a twenty-year operating history — exactly the buyer §2.3 describes — will run this table and will reach a different conclusion than the document expects.

**Do:** pick one intent. If Path 6 is a real product, drop "priced to lose" from §14 and set the AMC so the crossover lands where you want it. If it is a fallback, raise the multiple above 3×.

---

### F-11 — Governance rule §7.6.2 will trip in year 1 by design

**Where:** §7.6 rule 2 (line 608), §7.4 (line 581), §11.1 (line 752)

The rule: if one-time services exceed 60% of revenue for two consecutive quarters, stop selling custom and rebalance. But the offer ladder **mandates** that every client starts with a paid Audit (₱95,000) and usually a Sprint (₱145,000) before any subscription exists, and §12 targets only 2–3 design partners in months 0–3. In months 0–9 one-time revenue will be well above 60% of a small base — necessarily, and correctly.

As written the rule forces "stop selling custom" at precisely the moment the ladder requires selling custom.

**Do:** date the rule (e.g. applies from month 13) or express it against the 55/40/5 month-24 target as a glide path rather than a flat threshold. Same treatment for the NRR<100% rule, which cannot be computed before the first renewal cohort exists.

---

### F-12 — The two campaign plans contradict canonical doctrine on four load-bearing points

**Where:** [`Axon_Enjin_7_Day_Campaign_Plan.md`](Axon_Enjin_7_Day_Campaign_Plan.md), [`Axon_Enjin_MSME_Ad_Campaign_Plan.md`](Axon_Enjin_MSME_Ad_Campaign_Plan.md) — both ~June 2026, neither marked superseded

| Campaign plans say | Company Document says |
| ----- | ----- |
| Sponsored / free MVP builds as the lead offer | §11.1: rung 1 is a **paid** ₱95,000 audit that *"replaces the free proposal"* and *"filters tyre-kickers"* |
| Target MSMEs who *"cannot afford enterprise software"* | §4.5: 3+ branches, ₱1.5M+/mo, named project owner — smaller prospects get a waitlist |
| Day 6 = "Scarcity & Urgency", countdowns, "FINAL HOURS" | §2.3: buyers *"do not respond to … urgency theatre"* |
| Lead credibility with hackathon wins and "startup mindset" | §2.3: we are **not** "startup-cute"; buyers are family businesses with twenty years of operating history |

Pillar 1 of the research already registers the underlying economic collision (C10: does a sponsored build establish a zero reference price with the segment you then want to charge?) and leaves it open. It is not open in the Company Document — §11.1 settled it.

These files are the only ready-to-execute marketing assets in the repo. If someone runs them as written they will execute against the superseded strategy. Both now carry a superseded banner.

**Do:** either rewrite them against §2.4 voice rules and the §11.1 ladder, or move them to an `archive/` folder. Note the MSME plan is largely a duplicate of the 7-day plan — consolidate to one.

---

### F-13 — Working Document 1 is cited as retained but does not exist in this repo

**Where:** Document Control (lines 153–160)

The Document Control block names four retained working documents. The file contains Working Documents 2, 3, and 4. **Working Document 1 — *Productization, Pricing & Revenue-Model Recommendation*, described as holding "benchmark research and sourcing" — is absent.**

That is the document containing the provenance for every number in §6. Without it, **no price in the rate card has traceable sourcing**, the ₱58 peg has no documented derivation, and the correction recorded at line 160 cannot be audited against what it corrected. The `pricing/` folder does not substitute: those six files are raw model transcripts about pricing *method*, not the benchmark study.

**Do:** locate it in the source Google Doc and export it, or mark it lost and reconstruct the sourcing for at least Core, the Growth plan, and the custom-build floor.

---

## 🟡 Medium

### F-14 — Internal alignment notes sit inside the canonical document and carry sensitive content

**Where:** lines 1–128

The notes precede the Company Document in the same file and include individual compensation ("10k Salary"), personal goals ("May motor na pang transpo", "May MacBook si Gerald"), named individual capability ratings, and a third-party revenue split. §Document Control declares this file the artifact that "wins" on conflict — and §8.7 says the legal opinions in it "will be shown to clients and to investors in diligence."

**Do:** split the notes into a separate internal file. The company document should be safe to hand to counsel, a client, or an investor without redaction.

---

### F-15 — Current and pipeline work is nowhere reconciled against the MVC or the do-not-touch list

**Where:** lines 46–61 vs §4.5 (line 368) and §4.6 (line 388)

The alignment notes list live commitments — ChaChing (quotation due 4 Aug), BlueBiz LMS, Full Cup, HeyPro! (NFC business card + portfolio + social), Vaelryn, CycleForge, Meridian Net, plus hackathons — and the Company Document mentions none of them. Every one appears to sit outside the franchise-operating-layer thesis, and several look below the MVC floor.

One needs an explicit check rather than an assumption: **the do-not-touch list (§4.6) excludes payments, wallets, and bills payment outright, and the one-line test is "if money would move *through* our system rather than *past* it, we don't build it."** Confirm on the record which side of that line ChaChing falls on **before the quotation goes out**, not after.

**Do:** add a short "current engagements" annex mapping each live and pipeline item to a purchase path in §5, a position relative to the §4.5 floor, and a §4.6 clearance. Where something fails, say whether it is a deliberate exception, legacy to be wound down, or a reason to revise the doctrine.

---

### F-16 — Orphan diagram with undocumented contents

**Where:** line 1404 (reference), line 1630 (33 KB base64 definition)

A PNG is embedded at the WD3/WD4 boundary as a base64 data URI with no caption and no surrounding text explaining it. Nobody reading the document can tell what it depicts, and it accounts for roughly 20% of the file's bytes. Alt text has been added pointing here.

**Do:** caption it and state what decision it supports, or extract it to `assets/` and link it. If it is superseded, delete it.

---

### F-17 — §16 omits its own riskiest assumption from its own 60-day plan

**Where:** §16 (line 871)

§16 lists five things that are not yet true and then says *"The next 60 days should convert items 1, 3, and 4 from unknown to known."* Item 5 is **"the riskiest assumption is untested" — and the same sentence notes it is testable for free.** WD4 §6 says it is answerable in the first five conversations. It is dropped from the 60-day list anyway.

**Do:** add item 5 to the 60-day list. It is the cheapest item on it.

---

### F-18 — Version numbering cannot express precedence

**Where:** line 138 vs lines 891, 1169, 1410

The Company Document is "Version 1.0 · August 2026". All three subordinate Working Documents are also "v1 · August 2026". The Company Document supersedes them, but nothing in any version block says so — a reader landing mid-file has no way to tell which page wins. (Now partly mitigated by the renamed section headers.)

**Do:** version the working documents distinctly (e.g. WD2 v1.0, frozen 2026-08-01) and put the precedence rule in each one's header, not only in Document Control.

---

### F-19 — WD4 declares a 90-day shelf life and no expiry date

**Where:** line 1414

*"This one has a shelf life of about 90 days by design."* Dated August 2026, so it expires around **31 October 2026**. Undated shelf lives do not expire; they rot.

**Do:** write the expiry date into the header, and put the review on the calendar with the §14 90-day cadence.

---

### F-20 — The Odoo benchmark looks overstated, which understates the size of the pricing bet

**Where:** §7.2 (line 563)

§7.2 cites Odoo at **₱8,700–14,500/branch at five users**. Odoo applies regional pricing to the Philippines — commonly reported around **$13.60/user/month** for its custom tier and from **₱1,000/user/month** on standard, which at five users is roughly **₱4,000–5,000/branch**, materially below the cited band. The cited figure may be bundling implementation or hosting, or may be using non-PH pricing; the document does not say.

If the lower figure is right, the Growth plan is a **~5× premium** to Odoo rather than the ~2× implied — so this correction makes the bet larger, not smaller. Both benchmarks in §7.2 are undated.

**Do:** re-pull both benchmarks from vendor PH pricing pages, date-stamp them, and state clearly what is and is not included on each side.

---

### F-21 — There is no volume or bundle discount anywhere in the rate card

**Where:** §6.1–6.4, WD2 §5.6

Every published bundle is an exact sum of its parts. Growth = Core + Store Ops + Royalty at list. The reference bundles in WD2 §5.6 are straight sums. The only discount mechanism in the document is annual prepay (2 months free). Meanwhile WD2 §5.3 says archetype packs are "bundled at roughly 25% below the sum of parts" — but that is a discount on *features inside a pack*, not on buying more packs or more branches.

So a client has no economic reason to add the fifth module rather than the third, and no reason to consolidate more branches onto the platform. For a per-branch product sold to a network, that is a live gap in the pricing architecture.

**Do:** decide deliberately whether module count and branch count earn a discount. "No discounts" is a valid answer — but it should be a recorded decision, not an omission.

---

### F-22 — Malformed revenue split

**Where:** line 61

*"= 50% Gianne, 40% Axon Enjin 10%"* — three shares are implied but only two are attributed. Sums to 100% only if the trailing 10% belongs to an unnamed party.

**Do:** name the third party or fix the split. If HeyPro! is on the venture path, this is a cap-table entry, not a note.

---

### F-23 — AMC stated two ways

**Where:** §6.5 (line 522) says 18–20% of build value; §5 Path 6 (line 435) and WD3 (line 1200) say "mandatory 20%"

Not a contradiction — 20% is inside the band — but two numbers for one term in one document invites a client to negotiate to 18%.

**Do:** state 20% for Path 6 and 18–20% for custom builds explicitly, or collapse to one figure.

---

### F-24 — `research/research-plan.md` has gone stale in three places

**Where:** [`research/research-plan.md`](research/research-plan.md) lines 124–139

1. **Known Gaps** lists *"Discovery/paid-audit as a standalone product"* as uncovered. The Company Document §11.1 now defines exactly that — the ₱95,000 Readiness Audit. Gap closed.
2. The **Open Question for the Operator** — *"What has Axon Enjin actually shipped, and for whom?"* — is partly answered by the alignment notes (hackathon builds, ChaChing, BlueBiz LMS, Full Cup, HeyPro!). It declares P2, P3 and P8 "theoretical until this is filled in"; they are still marked theoretical.
3. **Corpus** points at `*.md` and `pricing/*.md` and predates the Company Document, so the pillars were written against a corpus that no longer includes the source of truth.

**Do:** update the plan header, close gap 6, fold the shipped-work answer in from F-15, and note that pillars 1–5 predate the Company Document.

---

### F-25 — Four of nine research pillars were never produced

**Where:** `research/` contains pillars 01–05; `research-plan.md` §"The 9 Pillars" defines nine

Missing: **P6 Delivery Discipline as Margin Defense**, **P7 Productization & Reuse Economics**, **P8 Geography & Market Arbitrage**, **P9 Commercial & Legal Instruments (PH-first)**.

Two of those matter now. **P6** is the margin defence for the implementation fee that F-06 shows is un-derived. **P9** covers the SOW/MSA/liability-cap/IP-on-final-payment instruments that §8.5 and §8.7 depend on — the Company Document specifies *what* the clauses must do and cites ₱150,000–300,000 of legal opinion, with no drafting research behind it.

**Do:** produce P6 and P9 before the first paid engagement. P7 and P8 can wait — and P8 may be moot, see F-26.

---

### F-26 — The research corpus assumes an Australia beachhead that the Company Document overrides

**Where:** [`pricing/claude-response2.md`](pricing/claude-response2.md) lines 13–24 and 44–50; `research-plan.md` P8; pillar 1 §8 C5; pillar 2

The pricing research argues **"Australia is your strongest beachhead"** with PH domestic as "portfolio and cash-flow engine, not your profit center," and builds downstream reasoning on AUD 150–250/hr reference rates, .com.au presence, and Australian data residency. Pillar 1's contradiction C5 is framed around where an offshore studio should sit inside the AU rate band.

The Company Document is unambiguous: **"Philippines-only market for now"** (§1), PHP invoicing, PH regulatory doctrine throughout, BOI/PEZA IT-export registration explicitly deferred *"unless foreign revenue exceeds 20%"* (§8.6).

The canonical doc wins. But nothing in the research files says so, and they read as current recommendations. Anyone using the pillars for pricing will import an AU rate reference that no longer applies — and the AU-derived benchmarks are load-bearing in pillar 1's formulas.

**Do:** add a status header to the affected research files recording that geography was decided PH-only by the Company Document §1, and that AU-referenced benchmarks are retained for method, not for numbers. Do not delete them — if the PH rate card fails F-09's willingness-to-pay test, the AU analysis becomes relevant again.

---

## Raised by the regulatory research pass — 3 August 2026

Seven defects in §8 that this register had not caught. Every one is sourced to primary text in [`research/verified/01-regulatory-tax-fx-baseline.md`](research/verified/01-regulatory-tax-fx-baseline.md) §8.4. Severities follow the same rule as above: **High** where it changes a price, a product decision, or creates a dated obligation; **Medium** where it changes a stated number or a monitoring duty; **Low** where it is hygiene on a currently-correct figure.

### 🟠 F-27 — Generating the principal Invoice puts the release cadence inside the BIR

**Where:** §8.4 deployment rules, §14 "Regulated modules" row, §15 glossary — all corrected inline

RMO 24-2023: *"in general, version upgrades and application/system enhancements are considered as Major Enhancements which will merit reaccreditation"* — with a Technical Working Group system demonstration each time. Subscription-based e-invoicing/e-receipting software is expressly in scope and receives an **Authority to Generate** rather than a PTU. But RMO 24-2023 **expressly excludes Computerized Accounting Systems** from the accreditation regime, and the RMC 5-2021 / RMO 9-2021 route for CAS is documents-only: no demo, no pre-evaluation, AC in 3 working days.

So there are two doors with very different costs, and the distinction is **not** "POS versus CAS" as a product category — it is **whether our software generates the principal Invoice.** §14 frames "integrate, don't build" as a 12-month risk judgement revisitable at 15+ client requests. On this evidence it is not a timing call: it is a permanent architectural rule.

Two related corrections applied to §15: the Acknowledgement Certificate **never replaced the PTU for CRM/POS** — RMC 5-2021's own subject line is limited to CAS, CBA, components, ESS and middleware. The PTU remains operative for CRM, POS and other sales machines via the Enhanced eAccReg System, and is listed in the BIR Citizen's Charter 2026. The glossary previously said the PTU was "obsolete for CRM/POS and CAS", which would have sent a client to the wrong counter — and §8.2 identifies a client failing registration as the most expensive possible failure in a referral-driven business.

**Do:** restate the rule as **"do not generate the principal Invoice"** and treat it as a design constraint, not a revisitable decision.

---

### 🟠 F-28 — Each franchisee registers separately, so the implementation fee is mis-specified

**Where:** §8.3 (corrected inline), §6.5 implementation fee, §14 implementation-fee row

RMO 9-2021 requires affiliated companies, sister companies, **franchisees** and related companies to each register the System at their own RDO and each receive their own AC — verbatim, *"regardless of whether these companies are sharing servers and using exactly the same 'System'."*

A 20-branch network that is 15 franchisee-owned taxpayers is **16 AC filings across up to 16 RDOs**, not one. Two consequences:

1. The **Compliance Pack is a per-registering-entity deliverable, not a per-client one.** §6.5 prices it at ₱30,000 + ₱5,000 per additional entity, which is directionally right but was never connected to this rule — and "entity" is undefined.
2. The **₱25,000/branch implementation increment finally has a regulatory derivation** (which F-06 said it lacked) — and that derivation shows it is mis-specified. It should scale with **registering taxpayer entities**, not branches. A 20-branch company-owned network and a 20-branch franchised network are completely different filing workloads at the same price.

**Do:** add one discovery question — *how many branches are franchisee-owned, and are those franchisees separate taxpayers?* — and re-specify the increment per registering entity before repricing. This should be resolved in the same pass as F-03 and F-06.

---

### 🟠 F-29 — Axon Enjin is probably itself a covered taxpayer under the EIS mandate it intends to sell against

**Where:** nothing in §8, §9 or §12 addresses the company's own compliance

RR 11-2025 §3(A)(1) covers taxpayers engaged in e-commerce or internet transactions, and the regulation's definition is very wide. Axon Enjin sells software subscriptions online. It therefore probably faces **the same 31 December 2026 deadline it plans to use as a commercial wedge** — and §6.1 sells regulatory updates as a bundled paid entitlement, which makes being late on its own compliance a misrepresentation rather than an oversight.

The whole of §8 is written about the client. The company has no compliance line of its own anywhere in the document: not EIS, not NPC registration as a Personal Information Processor (which §8.4 concedes it is for ordinary operational data), not DPO designation.

**Do:** add Axon Enjin's own EIS readiness and own NPC status as monitored rows — done, in §9.4 — and name an owner. You cannot sell readiness you do not have.

---

### 🟡 F-30 — §8.6 understates corporate EWT and points referrers at a superseded document

**Where:** §8.6 EWT row (corrected inline), §11.3 referral program

Two errors against RR 11-2018 §2.57.2(A)(11), plus three missing mechanics:

- The flat **10% for corporations is wrong.** 10% applies only if gross income is estimated not to exceed **₱720,000** *and* the president or managing partner files notarised sworn statement Annex B-3 with a COR on time. Otherwise it is **15%**. ₱720,000 of annual gross income is a very low bar for any franchise consultant capable of referring a multi-branch franchisor, so **15% is the realistic default** — a 5-point change in the net-of-tax value of the §11.3 referral fee.
- Instructing referrers to issue an **Official Receipt** is out of date. RR 7-2024 reduced ORs to supplementary documents stamped "not valid for claim of input tax" in April 2024. The referrer issues an **Invoice**. As written, the document collects a document class that does not cleanly support Axon Enjin's own deduction.
- Missing: our own obligation to execute sworn declaration Annex C; the Form 2307 deadline (20th day of the month following the taxable quarter); and RR 4-2024's shift of the withholding trigger to when income becomes **payable** — due, demandable, accrued, recorded or invoiced, whichever comes first.

**Do:** corrected inline. Model the referral program at 15% for corporate referrers before publishing the reward rates.

---

### 🟡 F-31 — Three BSP instruments from June–July 2026 post-date the document's evidence base

**Where:** §8.7 opinion 1, §4.6, §2.4, §13 — all corrected inline

- **Circular 1238** (17 June 2026) amends the NRPS and MPAA frameworks. Circular 1198 is amended, not superseded; the perimeter is unchanged but MORPS 503.7 adds merchant due diligence and sanctions obligations.
- **M-2026-030** (24 June 2026) supplies a **five-factor substance test** for whether a technology arrangement results in an entity effectively performing a BSP-authorised activity: actual functions performed, allocation of responsibilities and risks, **customer-facing representations**, control over funds or accounts, and whether another entity effectively performs a BSP-authorised activity.
- **M-2026-039** (17 July 2026) supersedes M-2019-023 and **mandates a self-assessment** as a retained document.

Two structural consequences. First, **§8.7 opinion 1 asks the wrong question.** It frames OPS-under-1049 versus MPAA-under-1198 as alternatives, but Circular 1198's own scope provision covers *"OPS engaged in or intending to engage in MPAA"* — **MPAA presupposes OPS status.** The real perimeter line is in the Circular 1049 FAQ: a service provider supplying technology to an operator *"can also be an OPS … if such service provider performs OPS activities in its own name and not merely as an incident of the services that it provides to an OPS."* Reframed inline as three sequential questions with the governing sentences quoted, which should **reduce** the ₱80–120k estimate rather than raise it.

Second, and less obvious: because **customer-facing representations** is one of the five factors, **marketing language is evidence in a perimeter assessment regardless of what the code does.** That makes it a §2.4 voice rule, not an §8 consideration — the people who write copy read §2.4. Added inline.

**Do:** produce the M-2026-039 self-assessment and retain it. It is also the correct instrument for the F-15 ChaChing clearance.

---

### 🟡 F-32 — §8.6 cites the criminal DPA ceiling and omits the fines the regulator actually uses

**Where:** §8.6 Data Privacy row (corrected inline)

The row cited "penalties reach ₱5M", which is the **criminal** ceiling under RA 10173 §33 and requires a DOJ prosecution. It omitted **NPC Circular 2022-01**, the regulator's operative administrative instrument, which needs no prosecution and is **turnover-linked**:

| Infraction | Data subjects | Fine |
| ----- | ----- | ----- |
| Grave | 1,000+ | **0.5–3% of annual gross income** |
| Major | 1–1,000 | **0.25–2% of annual gross income** |
| Other, incl. failure to register | — | ₱50,000–₱200,000 |

Capped at **₱5,000,000 per act** — per act, not per pattern. A multi-tenant breach touching 1,000 data subjects across a franchise network is a grave infraction by definition, and at Axon Enjin's scale a percentage-of-turnover fine is a materially different risk from a fixed ₱5M ceiling. Registration thresholds and the 1 October 2024 fee commencement were also missing.

**Do:** corrected inline. Note the row now also records that **Axon Enjin is itself a PIP** and needs its own DPO and NPC filing — see F-29.

---

### ⚪ F-33 — The ₱3,000,000 VAT threshold is not a constant

**Where:** §8.6 VAT registration row, §9.4 (row added)

§8.6 states the mandatory VAT registration threshold as ₱3,000,000, which is currently correct. But it sits on a **live CPI-indexation mechanism** under NIRC §109 as amended by the Ease of Paying Taxes Act, and the BIR has demonstrated willingness to use the analogous mechanism — RR 1-2024 lifted the housing ceiling from ₱3.199M to ₱3.6M.

Treating it as a constant is the kind of assumption that silently expires. It needs its own monitored row with a date stamp rather than being folded into "BIR issuances".

**Do:** row added to §9.4 at semi-annual cadence. Date-stamp the figure wherever it appears.

---

## How to resume the remaining research

Six of seven sub-agents were halted by the org's monthly credit ceiling. Their scope is unchanged and their prompts are cached.

```bash
git -C D:/PROJECTS/axon-enjin log --oneline -1
```

Raise the ceiling (`/usage-credits`, or claude.ai → admin settings → usage), then re-run the workflow with `resumeFromRunId: "wf_7a5a6164-9c7"` against the saved script. Sub-agent 1 replays from cache at no token cost; sub-agents 2–7 run live. What each would close:

| Sub-agent | Would close |
| ----- | ----- |
| **2 — Market & competitive** | F-08, F-09, F-20 · R-01, R-02, R-03 · A3–A6, A9 · plus the first SOM estimate for the 5–50 branch band |
| **3 — Pricing rebuild** | F-01 (applied), **F-02, F-03**, F-04, F-05, F-06, F-07, F-09, F-10, F-11, F-20, F-21, F-23, F-28 · R-06 |
| **4 — Pillar 6** | F-25 (part) · the margin defence behind the implementation hour model |
| **5 — Pillar 9** | F-25 (part) · the §8.5 clause drafting and the D3 proposal-mechanics gap |
| **6 — Site map** | Superseded — delivered directly, see [`SITEMAP.md`](SITEMAP.md) |
| **7 — Adversarial review** | Independent arithmetic recheck of everything above, plus a strict resolved/unresolved audit of this whole register |

---

## Closed by this pass

Documentation defects fixed rather than flagged:

| Item | Fix |
| ----- | ----- |
| 231 stray Markdown escape artifacts from the Google Docs export (`\-`, `\+`, `\&`, `\#`, `1\.` …) rendering as literal backslashes | Removed across lines 1–1578; the base64 image definition left untouched |
| Section separators named `# Tab 3`, `# Tab 4`, `# Tab 5`, `# Company` — no indication of hierarchy or precedence | Renamed to `# Working Document 2/3/4 — <title>` and `# Company Document — CANONICAL`, each with a one-line precedence note |
| Superseded implementation fee and Regulatory Update Subscription quotable from WD2's rate card | Struck through and marked ⚠️ SUPERSEDED with a pointer to the governing section |
| WD2 §8 and WD3 §6 presenting already-locked decisions as open | Banner added naming which items are closed by §14 and which remain genuinely open |
| Orphan image with no alt text | Alt text added pointing to F-16 |
| No repo index, no flag register, no consolidated research queue | [`README.md`](README.md), this file, [`RESEARCH-QUEUE.md`](RESEARCH-QUEUE.md) |
