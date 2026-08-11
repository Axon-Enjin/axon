# Axon Enjin — Research Queue

**Raised:** 3 August 2026
**Relationship to the source of truth:** this is a **delta**, not a replacement. The Company Document's Working Document 4 (§2 Tier 1, §3 Tier 2, §4 standing monitoring) remains the research agenda. This file records (a) what a verification pass against live sources actually found, (b) what that changed, and (c) research the repo is missing that WD4 does not cover.

Filter inherited from WD4 §1, and it still applies: **if an item would not change a decision, it is procrastination dressed as diligence.**

> **Updated 3 August 2026.** A seven-agent sequential research chain was run against this queue. **Sub-agent 1 completed; sub-agents 2–7 were halted by an org billing ceiling, not a technical failure.** Closed this pass: **R-04** (settled by RMC 12-2024), **R-05** (answered from RR 11-2025 primary text), **A2** (re-verified, one material correction). Promoted: **R-11**, now the highest-value unresolved regulatory item in the repo. Added: **R-10a/R-10b** discovery questions, and four §9.4 monitoring rows. Still open and scoped to the halted agents: **R-01, R-02, R-03, R-06** and all of §D. Resume instructions at the foot of [`FLAGS.md`](FLAGS.md). Full evidence: [`research/verified/01-regulatory-tax-fx-baseline.md`](research/verified/01-regulatory-tax-fx-baseline.md).

---

## A. Verified this pass — results

Desk-checkable claims in the Company Document, checked against live sources on 3 August 2026.

| # | Claim as written | Verdict | Finding |
| ----- | ----- | ----- | ----- |
| A1 | ₱58/USD internal peg, reopen at ₱62 or ₱55 | ❌ **breached in substance** | USD/PHP ≈ **₱61.24** on 2 Aug 2026; Aug forecast high ₱61.99. Peg 5.5% out of the money, ~1.3% from the hard trigger. → [FLAGS.md](FLAGS.md) F-01 |
| A2 | EIS deadline extended to 31 Dec 2026 by RR 26-2025 | ⚠️ **correct on the date, materially wrong on coverage** | RR 26-2025 confirmed; moved the mandate from **14 March 2026** to **31 December 2026**. **CORRECTION (3 Aug 2026):** the third covered group is *not* "Ease of Paying Taxes Act taxpayers" generally — it is taxpayers **classified as Large Taxpayers** under RA 11976 / RR 8-2024, a **₱1,000,000,000 gross-sales test**. The loose phrasing invited the inference that Tier 1 franchisors are caught by size. They are not: 8 branches × ₱1.5M/branch/month = ₱144M/year = **Medium**; roughly **56 MVC-sized branches** are needed to reach Large. A2 also omitted limb §3(A)(4) as distinct (CAS/CBA-with-e-invoicing **and other invoicing software**) and omitted the Track 1 / Track 2 split entirely, under which POS-user coverage is **conditional and not yet mandated**. See §7 of the verified baseline. |
| A3 | ~120,000 franchise outlets, below a ~200,000 pre-pandemic peak | ❌ **stale** | 2026 trade press reports **more than 200,000 outlets**. The peak has been recovered; the parenthetical is wrong and the figure understates the market ~40%. → F-08 |
| A4 | ~1,800–2,000 franchise brands | ✅ corroborated | Also reported as ~55% local / 45% foreign. |
| A5 | ~7% of the economy, ~2 million jobs | ⚠️ **close, imprecise** | Jobs figure corroborated. GDP contribution more commonly **7.8%** (US ITA, on 2022 data). |
| A6 | ~₱800 billion industry earnings | ⚠️ plausible, FX-sensitive | F&B >$10.8B ≈ 80% of sector → total ≈ $13.5B. Converts to ₱783B at ₱58 or ₱826B at ₱61.2. Restate with the rate and year attached. |
| A7 | StoreHub Pro ≈ ₱8,600/branch | ✅ consistent | StoreHub Pro lists at **$149/mo** = ₱8,642 at ₱58. Note this makes Core ($150) *parity*, not premium. → F-09 |
| A8 | Odoo ≈ ₱8,700–14,500/branch at five users | ❌ **looks overstated** | Odoo PH regional pricing commonly reported ~**$13.60/user/mo** custom, from **₱1,000/user/mo** standard → ≈₱4,000–5,000/branch at five users. Makes the Growth-plan premium larger, not smaller. → F-20 |
| A9 | Philippines is the largest franchising market in SEA | ✅ corroborated | US ITA also ranks it **7th largest globally**. Stronger claim than the document makes — usable. |

**New finding not in any document:** BusinessWorld, **26 April 2026** — PH franchising growth reported slowing on **Persian Gulf crisis** exposure. A demand-side macro headwind absent from the §13 risk register. Article was not directly retrievable (HTTP 403); headline and date are from search results and need confirmation from the source before use.

---

## B. Verify next — desk-researchable, cheap, decision-changing

| # | Question | Changes | Effort |
| ----- | ----- | ----- | ----- |
| R-01 | **Primary PFA figures** for brands, outlets, sector revenue, GDP share, jobs — with publication year. | The only TAM statement in the document (§4.1), and every deck built on it | 1 call or the PFA site; free |
| R-02 | **Confirm the Gulf-crisis slowdown** and size it: which franchise categories, how much, PFA's own revised forecast. | §13 risk register; whether the beachhead should still be F&B | Free |
| R-03 | **Re-pull StoreHub and Odoo PH pricing** from vendor pages, with what is included on each side, date-stamped. Add the local vendors WD4 §3 item 1 asks for. | §7.2 defensibility; the whole rate card | Free |
| ~~R-04~~ | ~~**Does BIR accept a fixed internal FX peg**~~ | ✅ **CLOSED 3 Aug 2026** | **RMC 12-2024** (22 Jan 2024) governs. A PHP-denominated invoice is not a foreign-currency transaction, so the internal USD anchor has **no tax dimension** — the peg was never unlawful on the document's own facts, and the exposure is margin, not regulatory. On a USD-denominated, PHP-settled contract a fixed peg is *not* permitted: spot rate on the transaction date, BAP published rates, governing VAT and every non-income tax; monthly averaging expressly prohibited; non-BAP source needs a notarised sworn statement 30 days ahead, irrevocable for a year. Sanctioned smoothing lever: elect **which** spot rate (open/close/high/low/weighted average) at the start of the taxable year. Residual narrow question moved to §8.7 second wave item 1. |
| ~~R-05~~ | ~~**EIS covered-taxpayer test**~~ | ✅ **ANSWERED 3 Aug 2026, one ambiguity promoted to R-11** | **Near-term wedge for a defined subset, qualified per prospect** — not blanket, not year-2. RR 11-2025 §3(A) has two tracks. Track 1 (31 Dec 2026): e-commerce/internet transactions · LTS taxpayers · Large Taxpayers (₱1B test) · CAS/CBA-with-e-invoicing/other invoicing software users. Track 2 (**not yet mandated** — needs BIR system readiness *and* a separate RR that has not issued): exporters, RBEs, **POS System users**. So the size limbs are irrelevant to Tier 1 and coverage runs through e-commerce or CAS. By vertical: **QSR/café/milk tea/bakery YES** in most cases (delivery-platform listings, own-app ordering); **derma PROBABLE**; **fitness OFTEN**; **salons CONDITIONAL**; **auto service LEAST LIKELY**. A covered head office pulls in every branch. Micro exempt, but no MVC-qualifying franchisor is Micro. Having a POS is *not* compliance — paper invoices without transmission capability do not qualify. **Commercial hook:** RR 11-2025 grants an additional deduction of 100% (Micro/Small) or 50% (Medium/Large) of the cost of setting up an electronic sales reporting system, available to voluntary compliers, importation tax-exempt. |
| **R-11** | 🔴 **Does the amended Section 14 of RR 11-2025 impose a 31 December 2026 obligation on taxpayers whose §3(A)(5) coverage remains conditional?** | **The highest-value unresolved regulatory item in the repo.** Reading A (transitory provision governs) makes EIS a **blanket** Tier 1 wedge with five months on the clock — the largest commercial opportunity of the next two quarters. Reading B (the §3(A)(5) condition survives) makes it the targeted wedge in R-05. Professional consensus leans B and B is adopted as operative, but the RR 26-2025 primary PDF is a scanned image with no text layer and could not be read. | Verify against the instrument, or a one-paragraph BIR ruling request. Added to §8.7 second wave item 2 |
| R-06 | **Implementation hour benchmarks** for comparable multi-branch SaaS rollouts, to give F-06 a starting estimate before real data exists. | The ₱180,000 + ₱25,000/branch fee, and the 200-hour trigger | Half a day |

**On R-05:** the deadline is **31 December 2026 — about five months out.** The document treats EIS as a background compliance item (§8.2, §9.4). If a meaningful share of Tier 1 prospects are covered taxpayers who are not yet ready, that deadline is the sharpest commercial wedge available in the next two quarters, and it expires. Worth a decision either way rather than drift.

---

## C. Cannot be desk-researched — buyer truth

WD4 §2.1 already specifies this well (15–20 conversations, no pitching, same-day write-ups) and its question set is good. Three additions the flag pass produced:

| # | Add to the discovery script | Tests |
| ----- | ----- | ----- |
| R-07 | *"Per branch, what's a typical month's sales?"* — asked plainly, early. | **F-02.** The ₱1.5M unit ambiguity cannot be resolved from the document; it resolves in the first five conversations, and it determines who is even a prospect. |
| R-08 | *"If you added the fifth module, would you expect a better rate than the third?"* and *"Would you rather pay per branch or one fee for head office?"* | **F-21** and **F-03 defect 3.** The document contains three incompatible prices for a 20-branch network; buyers will tell you which shape they expect. |
| R-09 | *"Have you ever bought software outright instead of subscribing? What made you?"* | **F-10.** Whether Path 6 is a real product or a fallback, and where the ownership premium actually sits. |
| **R-10a** | *"Do you sell or take payment online in any form — delivery apps, your own site, an online store, online bookings with deposits?"* | **R-05.** Determines EIS coverage per prospect, and therefore whether the 31 Dec 2026 deadline is a live wedge for this buyer. One line, changes the pitch. |
| **R-10b** | *"How many of your branches are company-owned versus franchisee-owned, and are the franchisees separate taxpayers?"* | **F-06 and F-28.** Determines how many Acknowledgement Certificate filings the Compliance Pack must produce, which is the derivation the implementation fee lacks. One line, **changes the price.** |

Everything else in WD4 §2.1 stands as written. The single most important question in the repo is still WD4's own: *"who would run this day to day, by name, and have they got the time?"* — §13 row 1, the highest-severity risk, and free to test.

---

## D. Research the repo does not have

### D1 — Working Document 1 is missing entirely

Document Control cites *Productization, Pricing & Revenue-Model Recommendation* as retained for "benchmark research and sourcing." It is not in this repo. **Consequence: no price in §6 has traceable provenance**, the ₱58 peg has no documented derivation, and the correction logged at line 160 cannot be audited against what it corrected. → F-13

**Do:** export it from the source Google Doc. If it is lost, reconstruct sourcing for at least Core, the Growth plan, and the ₱464,000 custom-build floor before publishing a rate card.

### D2 — Four of nine research pillars were never produced

`research/` holds pillars 01–05. The plan defines nine.

| Pillar | Status | Priority now |
| ----- | ----- | ----- |
| P6 — Delivery Discipline as Margin Defense | **missing** | **High.** This is the margin defence for the implementation fee F-06 shows is un-derived. Scope definition, change orders, revision limits, estimation under uncertainty. |
| P7 — Productization & Reuse Economics | missing | Medium. Directly relevant to the five-archetype thesis (§4.2) and to spin-out threshold 6 (§3.3), neither of which has reuse-economics research behind it. |
| P8 — Geography & Market Arbitrage | missing | **Low / possibly moot.** §1 locks PH-only. Do not produce until the F-09 willingness-to-pay test either passes or fails. |
| P9 — Commercial & Legal Instruments (PH-first) | **missing** | **High.** §8.5 specifies what the standard clauses must *do*; nothing researches how they are *drafted*. §8.7 budgets ₱150,000–300,000 of counsel time — going in without P9 means paying counsel to do research you could have framed first. |

### D3 — Gaps the research plan itself flagged and never closed

From `research/research-plan.md` §"Known Gaps":

| Gap | Status |
| ----- | ----- |
| Proposal document mechanics and structure | Still open. Relevant now — the Readiness Audit deliverable is a document, and it is the entry offer. |
| The price-increase ladder | Still open, and pillar 1 C7 records two sourced bands an order of magnitude apart. |
| Referral and introduction systems | **Partly closed** by §11.3, which is detailed. The *tax mechanics* remain open — WD4 §3 item 5. |
| When to fire a client | Still open. §7.6 governance rules imply it (>20% concentration) without saying how. |
| Teardowns of actual Australian agency pricing pages | **Deprioritised** — see F-26, geography is locked PH-only. |
| Discovery / paid-audit as a standalone product | **CLOSED.** §11.1 defines it: ₱95,000, 2 weeks, creditable. Update the plan. |

---

## E. Standing monitoring — one item is already in breach

WD4 §4 defines the cadence and it is sound. Two corrections:

1. **The FX monitor has a live breach and no owner.** ₱58 peg vs ₱61.24 spot, monthly cadence mandated, hard trigger 1.3% away. This is the first test of whether the monitoring cadence is real. → F-01
2. **Nobody is named against any row.** WD4 §4 opens with *"Assign an owner and a cadence. Unowned monitoring doesn't happen."* — the cadences are set and the owner column does not exist. §9.3 puts the regulatory-monitoring owner at **day 30**; that is 2 September 2026 if the clock started 1 August. It is also a **paid product entitlement** under §6.1, which makes late updates a misrepresentation, not an oversight.

**Do:** add an owner column to WD4 §4 and fill every row, including the FX one. ✅ *Done in Company Document §9.4 on 3 Aug 2026 — the column now exists and every cell reads `unassigned`, which is at least honest. Naming the owners is a founder action.*

### Four rows added 3 August 2026

The verified baseline found four monitoring duties with no home anywhere in the repo. All are now rows in §9.4:

| Row | Cadence | Why |
| ----- | ----- | ----- |
| VAT registration threshold vs the EOPT CPI indexation under NIRC §109 | Semi-annual | ₱3,000,000 is treated as a constant. The indexation mechanism is live and the BIR has used the analogous one (RR 1-2024 lifted the housing ceiling ₱3.199M → ₱3.6M). See F-33 |
| Whether the BIR has established the RR 11-2025 Track 2 *"system capable of storing and processing the required data"* | Quarterly | **The single monitoring item with the largest commercial consequence.** That event plus a separate RR activates the POS-user limb and turns EIS from a targeted wedge into a blanket requirement. Not found on search — see R-11 |
| **Our own** EIS readiness as a probable §3(A)(1) covered taxpayer | Monthly until 31 Dec 2026 | We cannot sell readiness we do not have. See F-29 |
| **Our own** NPC status: PIP registration or Sworn Declaration and Undertaking, plus DPO designation | Annual, renewal 30 days before certificate expiry | NPC Circular 2022-04; fees payable since 1 Oct 2024. §8.4 already concedes we are a PIP |

**One finding that reframes §E.** The existing cadences are *adequate* — a quarterly BSP review would have caught Circular 1238 (17 June) and M-2026-030 (24 June) at a June-quarter check, and monthly BIR would have caught everything else in the baseline. The failure is **ownership, not frequency**. The evidence that the FX monitor is not running is that USD/PHP came within 0.27% of the ₱62 trigger on 24 July 2026 and nothing happened.

---

## F. Recommended sequence

1. **This week** — R-07 into the discovery script (F-02 blocks qualification). Name the FX and regulatory-monitoring owners. Clear ChaChing against §4.6 before the 4 August quotation goes out (F-15).
2. **Weeks 1–2** — R-01, R-02, R-03 (free, closes the sourcing gap on the TAM and competitive claims). Brief the law firm on §8.7 opinions 1–3 **plus R-04**, one engagement.
3. **Weeks 2–5** — WD4 §2.1 discovery, with R-07/R-08/R-09 added. Resolve F-02 and F-03 from real answers rather than from the document.
4. **By week 6** — produce P9 before counsel drafts, and P6 before the first implementation is scoped.
5. **By week 8** — rewrite the rate card as WD4 §7 already plans, now also resolving F-01, F-03, F-07, F-09, F-20 and F-21.

---

*Research and sourcing notes, not legal or tax advice. Regulatory items in §A and §B exist precisely because they require professional opinions — see Company Document §8.7.*

## Sources consulted this pass

- [CoinCodex — USD/PHP forecast](https://coincodex.com/forex/usd-php/forecast/) · [Long Forecast — USD to PHP](https://longforecast.com/usd-to-php-today-forecast) · [Trading Economics — Philippine Peso](https://tradingeconomics.com/philippines/currency)
- [Philippine News Agency — BIR extends e-invoicing deadline to December 2026](https://www.pna.gov.ph/articles/1262790) · [Sovos — Philippines e-invoicing deadline extended](https://sovos.com/regulatory-updates/vat/philippines-deadline-for-mandatory-structured-e-invoicing-extended/) · [KPMG — Philippines e-invoicing compliance deadline extended](https://kpmg.com/us/en/taxnewsflash/news/2025/10/philippines-e-invoicing-compliance-deadline-extended.html)
- [US ITA — Philippine franchising market intelligence](https://www.trade.gov/market-intelligence/philippine-franchising) · [Philippine Franchise Association](https://www.pfa.org.ph/) · [FranchiseAlpha — PH franchise business 2026](https://franchisealpha.com/franchise-business-in-the-philippines-2026/) · [BusinessWorld — PH franchising growth slowing](https://www.bworldonline.com/economy/2026/04/26/745518/phl-franchising-industry-sees-growth-slowing-down-due-to-persian-gulf-crisis/) *(403 on retrieval — headline unconfirmed)*
- [Software Finder — StoreHub pricing](https://softwarefinder.com/retail/storehub) · [OEC.sh — Odoo pricing Philippines](https://oec.sh/odoo-pricing/philippines) · [Odoo pricing](https://www.odoo.com/pricing)
