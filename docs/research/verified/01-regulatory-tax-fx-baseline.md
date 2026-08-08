# Verified Baseline 01 — Regulatory, Tax & FX (Philippines)

**Sub-agent:** 1 of 7 · sequential research chain
**Goal:** establish a verified, citable regulatory / tax / FX baseline so that Company Document
section 8 and every peso price in section 6 rest on something a lawyer or an investor could check.
**Retrieval window:** all web and primary-document retrievals in this file were made on
**3 August 2026** unless a different date is stamped on the line.
**Jurisdiction:** Philippines. Currency PHP, written `P` throughout.
**Status:** reference document. Where this file recommends, it says so explicitly and in a
recommendation block. Everything else reports and cites.

> **Structural and regulatory awareness only — not legal advice. Consult a licensed Philippine
> attorney.** Axon Enjin holds no BIR accreditation, no BSP registration or licence, and no NPC
> registration. Nothing in this document asserts otherwise, and nothing in it may be repeated to a
> client as a compliance outcome Axon Enjin has achieved.

---

## 0. Scope and method

### 0.1 What was asked and what this answers

| Asked | Answered where | Verdict |
| ----- | ----- | ----- |
| Verify every BIR instrument section 8 relies on | §1, §2, §7 | 9 of 9 verified against primary text or a BIR-published digest; 3 misdescribed in the Company Document |
| Quote the RMC 68-2015 pseudo-supplier operative text | §2.1 | Verbatim from the BIR-hosted PDF |
| Map the BSP OPS / MPAA perimeter | §3 | Mapped; the Company Document's framing of the question is itself wrong (§3.2) |
| Check for circulars superseding or amending 1049 / 1198 | §3.6 | Three material 2026 instruments found, none of them known to section 8 |
| Data Privacy Act thresholds, DPO, sworn declaration, penalties, PIP exit | §4 | Verified; the PIP-exit question has no authority either way (§4.5) |
| Tax profile: CIT, VAT threshold, EWT, Form 2307 | §5 | Verified; two errors and three omissions found |
| F-01 evidence side: current spot and 12-month history | §6.1 | 255-observation daily series pulled; F-01's spot figure corroborated, its trigger-distance understated |
| R-04: does BIR accept a fixed internal FX peg | §6.3 | **Settled.** RMC 12-2024 answers it directly |
| Recommend a peg mechanism | §6.5 | Recommended, with the falsifier stated |
| R-05: which Tier 1 verticals are covered by the 31 Dec 2026 EIS mandate | §7 | Settled to the limb level; one genuine ambiguity preserved (C2) |
| Audit section 8 for superseded / misdescribed / missing | §8 | 6 corrections, 9 omissions, 3 new-since-August findings |
| Re-verify A2 | §7.1 | Confirmed, with a correction to the covered-taxpayer list |

### 0.2 Method, in order

1. Read the Company Document sections that carry regulatory load — §4.6, §5, §6 preamble, §8 in
   full, §9.4, §13, §14, §15 — plus WD2 §1–3 and WD4 §2.2 / §3. Company Document wins on conflict.
2. Consumed `FLAGS.md` (26 flags) and `RESEARCH-QUEUE.md` (A1–A9, R-01..R-09, D/E/F).
3. For every instrument: found the **primary** text or the BIR/BSP/NPC-published digest, downloaded
   the PDF, converted it to text locally, and read the operative provisions. Where a summary from a
   secondary source conflicted with primary text, the primary text won and the conflict is recorded
   in §9.
4. For BSP, probed the BSP 2026 memorandum series directly by document number rather than trusting
   search, because search does not index BSP issuances well. That is how M-2026-030, M-2026-039 and
   Circular 1238 were found. **All three post-date the Company Document's evidence base and none of
   them appear in section 8.**
5. For FX, refused to build a series out of aggregator snapshots. Pulled a 255-observation daily
   USD/PHP series (ECB reference rates, 1 Aug 2025 – 31 Jul 2026) and computed the statistics
   locally. Aggregator claims that contradict that series are recorded as contradictions, not
   averaged into it.

### 0.3 Source tiers used

| Tier | Meaning | Examples in this file |
| ----- | ----- | ----- |
| **Primary** | The instrument itself, or the issuing agency's own published digest / FAQ / register | RMC 68-2015 PDF, RMO 9-2021 digest, RMO 24-2023 digest, RR 11-2025 digest, RMC 12-2024, BSP Circular 1238, BSP M-2026-030 / M-2026-039, BSP OPS and MPAA FAQs, BSP registered-OPS list, RA 10173 text |
| **Expert** | Named professional firm of record commenting on a specific issuance | PwC PH, KPMG PH, Grant Thornton PH, Reyes Tacandong, Forvis Mazars PH, Baker McKenzie, DLA Piper, Ocampo & Suralvo, Aureada Law |
| **Journalistic** | Named outlet with a dateline | BusinessWorld, Inquirer Business, Bloomberg (via BusinessWorld), Manila Bulletin, Philippine News Agency |
| **Web** | Aggregators, vendor blogs, SEO content. **Lowest trust. Used only where nothing better exists, and labelled.** | Trading Economics, CoinCodex, recordinglaw.com (see §4.6 — this one published a false statement of law) |

### 0.4 What "not found" means in this file

Where a fact could not be sourced it says **not found**, states what was searched, and does not
substitute a plausible number. There are four such gaps: §5.2 (whether the P3M VAT threshold has
been CPI-adjusted for 2026), §4.4 (the peso amounts in the NPC fee schedule), §3.5 (whether any
POS-software vendor has been assessed as an OPS), §4.5 (any NPC authority on the PIP exit).

---

## 1. Issuance-by-issuance verification

Every row was checked against primary text or the issuing agency's own digest. "As the Company
Document has it" quotes or paraphrases §8 / §15 / §4.6. Retrieval date for all rows: 3 Aug 2026.

### 1.1 BIR — receipting, CAS and accreditation

| # | Instrument | As the Company Document has it | Verified position | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| 1 | **RMC 5-2021** (28 Dec 2020) | §15: "AC — replaced the Permit to Use for CRM/POS **and** CAS registration under RMC 5-2021; issued within 3 working days" | Subject is *Simplified Policies on the Application for Registration of CAS, CBA and/or its Components, including the Electronic Storage System (ESS), Middleware and Other Similar Systems*. Item 3: "Upon submission of complete documentary requirements, an Acknowledgement Certificate (AC) … shall be issued within three (3) working days from receipt of the complete documents by the RDO where the taxpayer-user of the system is registered." Item 4: "System demonstration or pre-evaluation shall not be required prior to the use of the 'System'. However, post-evaluation shall be conducted…" Supersedes RMC 10-2020 and inconsistent parts of RMO 29-2002. | **Partly wrong.** The 3-working-day AC is correct. **RMC 5-2021 does not touch CRM/POS.** It is a CAS/CBA/ESS/middleware instrument only. See §8.1 correction 1 |
| 2 | **RMO 9-2021** (19 Feb 2021) | Not cited in §8; cited in the goal | Simplified guidelines and procedures on the use of CAS/CBA/components/ESS/middleware. AC issued within 3 working days of complete documents; AC "shall be valid unless revoked by the BIR upon discovery of its non-compliance … during the conduct of post-evaluation"; no system demo or pre-evaluation as a condition. Branch-before-HO and branch-from-HO cases each get their own filing rule and their own AC. | **Verified.** And it contains the single most operationally consequential sentence in the whole BIR set for this business — see §2.4 |
| 3 | **RMC 68-2015** (1 Aug 2015) | §8.3: "Under RMC 68-2015, pseudo-suppliers include taxpayer-users who develop their own sales receipting software for internal use *and/or for distribution to their branches and franchisees*" | Verbatim text at §2.1. The paraphrase is **accurate**. What the Company Document omits from the same instrument is item 1 (developers/distributors/dealers/supplier-vendors must themselves be accredited *prior to selling / distribution / use*) and item 6 (cloud/subscription taxpayer-users must secure accreditation **and** provide local storage, backup and BIR-officer access). | **Verified but materially incomplete.** See §2 |
| 4 | **RMO 24-2023** (26 Jun 2023) | §8.3: "supplier accreditation remains a live separate track under RMO 24-2023, and … **major enhancements trigger reaccreditation** while minor ones require only notification" | Confirmed verbatim from the BIR digest: "In general, version upgrades and application/system enhancements are considered as 'Major Enhancements' which will merit reaccreditation." Minor enhancements "shall not require reaccreditation but the taxpayer must inform the LT Office/RDO." Scope expressly includes "e-Invoicing or e-Receipting System/Software used under a Subscription-Based Agreement" and expressly **excludes** Computerized Accounting System from the accreditation regime. Accreditation application is **free**. TWG system demonstration required, scheduled within 3 working days of complete requirements. Decision within 20 working days (7 for related-company applications where the demo is waived). | **Verified, and worse for the business model than §8.3 implies.** See §2.3 |

### 1.2 BIR — e-invoicing and electronic sales reporting

| # | Instrument | As the Company Document has it | Verified position | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| 5 | **RR 8-2022** (30 Jun 2022) | Not cited anywhere | The instrument that actually carries the 3-day rule: "Transmission of sales data shall be done real-time or near real-time provided that it should be done within three (3) calendar days from the date of the transaction." Establishes the EIS, the JSON payload, the **EIS Certification ("EIS CERT")** and the **Permit to Transmit ("PTT")** — both applied for by the *taxpayer*, with sales reporting starting the day after PTT issuance. Penalty for delayed, late or absent transmission. | **Missing from the document.** §8.6 attributes the 3-calendar-day window to the RR 11-2025 / RR 26-2025 pair. The window is RR 8-2022's. See §8.1 correction 3 |
| 6 | **RR 11-2025** (27 Feb 2025; effective 14 Mar 2025) | §8.6: "E-invoicing (EIS) — RR 11-2025; deadline extended to 31 December 2026 by RR 26-2025. Covered taxpayers transmit within 3 calendar days." | Implements NIRC §237 and §237-A as amended by RA 12066 (CREATE MORE). Section 3(A) list and the two-track timing are reproduced in full at §7.1. Micro taxpayers exempt from the mandatory e-invoice requirement. Additional deduction for the cost of setting up an electronic sales reporting system: **100% for Micro and Small, 50% for Medium and Large**, once per taxable year, plus import-tax exemption on the system. | **Verified.** The document's one-line treatment loses the limb structure, which is exactly what R-05 turns on, and loses the deduction, which is a live commercial hook |
| 7 | **RR 26-2025** | §8.6 and A2: extended the deadline to 31 Dec 2026 | Amends Section 14 (Transitory Provisions) of RR 11-2025. Operative clause as reproduced by Tax and Accounting Center: "The following taxpayers shall have until December 31, 2026 to comply with the electronic invoicing requirements." Effective immediately on publication on the BIR website. Moves the deadline off 14 March 2026. | **A2 confirmed.** Two open points: the issuance date (5 Sep 2025 vs 16 Oct 2025 — see C1) and whether the amended transitory list reaches POS-only taxpayers whose substantive mandate is still conditional (see C2) |

### 1.3 BIR — VAT, CIT and withholding

| # | Instrument | As the Company Document has it | Verified position | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| 8 | **RA 12023 / RR 03-2025** | §8.6: "12% on digital services consumed in PH, effective 2 June 2025" | Effective date **2 June 2025** confirmed. NRDSP registration deadline extended to 1 July 2025 (RMC 47-2025). Further clarified by **RMC 59-2026, issued 2 June 2026**, on the imposition, reporting and registration requirements for VAT on digital services. | **Verified.** But the document does not know about RMC 59-2026 and does not state whether Axon Enjin's own SaaS is within the digital-services definition |
| 9 | **CREATE (RA 11534) / CREATE MORE (RA 12066)** | §8.6: "25%; **20%** if net taxable income ≤ P5M and total assets ≤ P100M (CREATE)" | Confirmed. Domestic corporations with net taxable income not exceeding P5,000,000 **and** total assets not exceeding P100,000,000 (exclusive of land on which the business entity's office, plant and equipment are situated) pay 20%; otherwise 25%. CREATE MORE (signed 11 Nov 2024) did **not** change that MSME test. What CREATE MORE did add, relevantly: it extended the 20% rate to registered business enterprises on the Enhanced Deductions Regime, and it is the statute RR 11-2025 implements. | **Verified. No change required** |
| 10 | **VAT registration threshold** | §8.6: "Mandatory once gross sales exceed **P3,000,000** in any 12 months" | P3,000,000 is still the operative figure in mid-2026 on every source checked. **But** the EOPT Act (RA 11976) reinstated a mechanism under NIRC §109 requiring the threshold to be "adjusted to its present value every three (3) years using the Consumer Price Index, as published by the Philippine Statistics Authority." The BIR has demonstrably used the analogous mechanism elsewhere — RR 1-2024 lifted the residential-dwelling VAT-exemption ceiling from P3.199M to P3.6M effective 1 Jan 2024. | **Correct today, on a live trigger.** No BIR issuance adjusting the general registration threshold was **found** — see §5.2 for exactly what was searched |
| 11 | **EWT on referral commissions** | §8.6: "5%/10% for individuals (5% if payee gross income ≤ P3M), **10% for corporations.** We withhold, remit, and issue Form 2307. Referrer should issue an **official receipt**." | RR 11-2018 §2.57.2(A)(11) covers "Commissions of independent and/or exclusive sales representatives, and marketing agents of companies … on gross commissions, rebates, discounts and other similar considerations." Rates for subsection (A): **individuals** 5% if gross receipts/sales will not exceed P3M **and** the payee files sworn declaration Annex B-1 plus a copy of its COR by 15 January or before the first payment, otherwise 10%. **Non-individuals** 10% only if gross income is estimated not to exceed **P720,000** **and** an authorised officer furnishes notarised sworn statement Annex B-3 plus COR by 15 January or before the first payment; **otherwise 15%.** The withholding agent must itself execute sworn declaration Annex C stating the number of payees who submitted declarations. | **Two errors.** "10% for corporations" is wrong as a flat rate — the default for a corporate referrer earning more than P720,000 is **15%**. And post-RR 7-2024 the referrer issues an **Invoice**, not an Official Receipt. See §5.3 |
| 12 | **RR 7-2024 / RR 11-2024 (EOPT invoicing)** | Not cited | Effective 27 April 2024. The **Invoice** replaced the Official Receipt as the principal document evidencing the sale of goods **and services**. The Official Receipt is now a supplementary document and, once converted, must be stamped "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX". | **Missing, and it makes one line of §8.6 wrong** |
| 13 | **RMC 12-2024** (22 Jan 2024) | Not cited. The question it answers is logged as WD4 Tier 2 item 4 and R-04 | The governing rule on converting foreign-currency-denominated transactions to PHP for tax purposes. Reproduced and analysed at §6.3. | **This is the answer to R-04 and it was sitting in a two-year-old RMC** |
| 14 | **RR 4-2024** | Not cited | EOPT implementing rule on withholding: the obligation to deduct and withhold arises when the income becomes **payable** — the date the obligation becomes due, demandable or legally enforceable, or when accrued or recorded as an expense or asset in the payor's books, or when the seller issues an invoice, **whichever comes first.** | **Missing.** Accelerates the referral-programme withholding trigger off the cash-payment date |

### 1.4 BSP — payment systems

| # | Instrument | As the Company Document has it | Verified position | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| 15 | **RA 11127 (NPSA) / BSP Circular 1049** (9 Sep 2019, effective 1 Oct 2019) | §4.6 and §8.7 opinion 1 | Verified. OPS definition, exemption structure, service-provider carve-out, registration mechanics, fee and sanctions at §3.1 and §3.3. | **Verified and still in force** |
| 16 | **BSP Circular 1198** (issued 19 Jul 2024, published 24 Jul 2024, effective 8 Aug 2024) | §4.6 and §8.7 opinion 1: framed as an alternative to Circular 1049 | Verified. MPAA and merchant-acquisition definitions, the licence-versus-register split, the activity-based approach, and the transitory deadlines (8 Feb 2025 and 8 Aug 2025 — **both already expired**) at §3.2 and §3.4. | **Verified. But the document's framing of the question is structurally wrong** — see §3.2 |
| 17 | **BSP Circular 1238** (17 Jun 2026) | **Not known to the document** | *Amendments to the National Retail Payment System Framework and the Regulatory Framework for Merchant Payment Acceptance Activities.* Monetary Board Resolution No. 498, 4 Jun 2026. Amends MORPS §201 (NRPS pricing, off-us/on-us definitions, switch cost, P2P recipients receive the full amount free of charge) and MORPS §503 by inserting **503.7 Governance for Merchant Acquisition Services** — risk-based tiered merchant due diligence, merchant identification and sanctions screening, periodic merchant monitoring, immediate suspension/termination powers, and a costed pricing mechanism. Effective 15 calendar days after publication. | **New since the document's evidence base.** Circular 1198 is **amended, not superseded.** The perimeter is unchanged; the obligations on a licensed acquirer are heavier |
| 18 | **BSP Memorandum M-2026-030** (24 Jun 2026) | **Not known to the document** | *Arrangements Involving Regulated Electronic Money Activities.* Reproduced at §3.6.2. Establishes an explicit substance-over-form test for arrangements involving "technology services, platform access, co-branding, partnerships, wallet provisioning, outsourcing, or similar structures." | **New, and directly on the §4.6 one-line test** |
| 19 | **BSP Memorandum M-2026-039** (signed 17 Jul 2026) | **Not known to the document** | *Guidelines on the Registration of OPS.* Expressly supersedes M-2019-023. Three-phase evaluation, mandatory self-assessment, email-only filing, three-month cooling-off after return/denial/withdrawal, P20,000 one-time non-refundable COR fee. Reproduced at §3.6.3. | **New. Seventeen days old at the time of writing** |
| 20 | **BSP Memorandum M-2026-025 / M-2026-026** (Jun–Jul 2026) | **Not known to the document** | M-2026-025 lifts the moratorium on InstaPay and PESONet fee increases concurrently with Circular 1238's effectivity. M-2026-026 issues the FAQs on Circular 1238. | **New. Context, not perimeter** |

### 1.5 Data privacy

| # | Instrument | As the Company Document has it | Verified position | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| 21 | **RA 10173 (DPA)** | §8.6: "NPC registration required at thresholds; penalties reach P5M. Sub-threshold entities still file a sworn declaration." | Criminal penalties verified section by section at §4.3. P5,000,000 is the statutory ceiling and it sits in §33 (combination or series of acts), not in the base offences. **The DPA has not been amended.** | **Directionally right, materially incomplete** — it omits the administrative fine regime, which for a company of Axon Enjin's size is the binding exposure |
| 22 | **NPC Circular 2022-04** (5 Dec 2022, effective 11 Jan 2023) | §8.6 "at thresholds"; §8.3 row 4 | Registration mandatory for a PIC **or PIP** that employs 250 or more persons, **or** processes sensitive personal information of 1,000 or more individuals, **or** carries out processing likely to pose a risk to the rights and freedoms of data subjects, or processing that is not occasional. Sub-threshold entities submit a **Sworn Declaration and Undertaking** for exemption. Certificate valid 1 year; renewal 30 days before expiry; minor amendments within 10 days, major within 30. | **Verified** |
| 23 | **NPC Circular 2022-01** (administrative fines, effective 27 Aug 2022) | **Not cited** | Grave infractions (affecting 1,000+ data subjects): **0.5% to 3% of annual gross income.** Major infractions (1–1,000 data subjects): **0.25% to 2% of annual gross income.** Other infractions, including failure to register: **P50,000 to P200,000.** Total for a single act, whether it produces one or multiple infractions: **capped at P5,000,000.** | **Missing, and it is the number that actually matters** — see §4.3 |
| 24 | **NPC Circular 2023-01** (fees, effective 8 Jun 2023; enforced from 1 Oct 2024) | **Not cited** | From 1 October 2024 all PICs and PIPs must pay the scheduled fee to register or renew a data processing system registration. The peso amounts were **not found** — see §4.4. | **Missing** |

---

## 2. The pseudo-supplier keystone, examined

The Company Document calls this "the legal basis for the offload" (§8.3). It is the load-bearing
assumption under purchase paths 1, 3 and 6, under the §8.1 doctrine sentence "the client files", and
under §8.7 opinion 2. It deserves the primary text, so here it is.

### 2.1 The operative text, verbatim

From **Revenue Memorandum Circular No. 68-2015**, 1 August 2015, *Accreditation of Cash Register
Machines / Point-of-Sale Machines and Other Sales Machines/Receipting Software at the BIR National
Office Level*, issued pursuant to NIRC §237 and in conformity with RMC 30-2015. Retrieved
3 Aug 2026 from the BIR's own web-services host.

> **1.** All developers / distributors / dealers / supplier-vendors / pseudo-suppliers who intend to
> sell / distribute / use CRM / POS / other sales machines / receipting software shall secure
> accreditation from the BIR prior to selling / distribution / use of the same.
>
> Pseudo-suppliers shall refer to taxpayer-users of sales machines and/or sales receipting system
> software who are either: (a) direct importers of CRM/POS or other receipt/invoice-generating
> business machines; or (b) taxpayer-users who develop their own sales receipting system software,
> for their own internal use and/or for distribution to their branches/franchisees;

And two further items the Company Document does not mention:

> **5.** Taxpayer-users and/or resellers of CRM / POS / other sales machines / receipting software
> acquired online or abroad (off-the-shelf), for use and/or re-sell in the Philippines, shall be
> treated as pseudo-suppliers; thus, they shall be required to secure an accreditation from the NAB
> prior to use and/or re-selling of the same;
>
> **6.** Taxpayer-users of sales receipting system software or any similar software acquired /
> subscribed via Cloud application service provider shall likewise secure an accreditation, provided
> that the taxpayer-user shall allow a provision for storage and backup of all required data
> including authorized access(es) for BIR Revenue Officers which shall be locally available for
> audit purposes.

Item 4 sets accreditation validity at **five (5) years** from issuance of the Certificate of
Accreditation, with renewal to be applied for within 60 days before expiry.

### 2.2 What the text actually establishes, and what it does not

**Establishes.** A franchisor that develops or acquires receipting software for its own use and for
distribution to its branches and franchisees is a pseudo-supplier and is the accrediting party.
That is the offload the Company Document depends on, and it is real. Item 6 extends it explicitly to
cloud-subscribed software — which is Axon Enjin's path 1, multi-tenant SaaS. So the doctrine
"the client files" survives contact with the primary text even in the subscription case.

**Does not establish.** Item 1 imposes accreditation on the **developer, distributor, dealer and
supplier-vendor** as an independent obligation, "prior to selling / distribution / use." Pseudo-supplier
is one item in that list, not a substitute for the rest of it. The client being a pseudo-supplier does
not relieve the party that built and licensed the software. Whether Axon Enjin is a "developer" of
"receipting software" for these purposes is precisely the question, and RMC 68-2015 does not answer
it in Axon Enjin's favour by default.

So §8.3's sentence — "The pseudo-supplier mechanism is the legal basis for the offload" — is **half
true**. It correctly identifies who registers the *installed system*. It does not address who must be
accredited as the *source* of the system. Those are two obligations in the same numbered paragraph.
Opinion 2 in §8.7 is correctly scoped and correctly priced; the expected answer, on this reading, is
closer to "not automatically" than the document's framing implies.

### 2.3 The reaccreditation treadmill is worse than §8.3 says

§8.3 says "major enhancements trigger reaccreditation while minor ones require only notification"
and treats it as "a further argument for client-owned deployments." Both halves are right. The
severity is understated. From the BIR's own digest of **RMO 24-2023**:

> Enhancements will include but are not limited to: additional functionality, improved field and
> batch validations, additional reports, change of database platform to accommodate new data to be
> captured, change of parameter settings during inquiry or change in hardware … **In general, version
> upgrades and application/system enhancements are considered as "Major Enhancements" which will
> merit reaccreditation.**
>
> "Minor Enhancements" shall not require reaccreditation but the taxpayer must inform the LT
> Office/RDO of such change/minor enhancement. Examples of "Minor Enhancements" are arrangement of
> the field for user interface and adding security control that is transparent to the user or any
> modification that will not change/impact any functionality of the system/application.

The default is that a version upgrade is major. The minor-enhancement examples are cosmetic
and security-transparent changes only. Any new report, any new field validation, any new
functionality is major. A reaccreditation application requires a comparative matrix of functions and
features between the previously accredited version and the new one, and a fresh TWG system
demonstration.

Two further facts from the same digest that change the commercial picture:

- **Scope expressly includes** "e-Invoicing or e-Receipting System/Software used under a
  Subscription-Based Agreement", which is subject to **both** accreditation and registration, with a
  separate **Authority to Generate (ATG)** rather than a Permit to Use. That is Axon Enjin's path 1
  described in BIR language.
- **Scope expressly excludes** Computerized Accounting System from the accreditation regime. The
  covered list ends: "Other sales machines/software issuing invoices/receipts, **except Computerized
  Accounting System.**"
- Accreditation itself is **free**: "Application for Accreditation of 'Sales Machines/Software' is
  for 'FREE'. No charge/fee shall be imposed by any Region/LT Office/RDO." The cost is time, demos
  and change-control drag, not fees.

**The strategic consequence.** There are two regulatory doors, and they are not equally expensive:

| Door | Instrument | Who files | Gate | Change control |
| ----- | ----- | ----- | ----- | ----- |
| **CAS** — register the platform as a Computerized Accounting System or component | RMC 5-2021, RMO 9-2021 | Taxpayer-user, at its own RDO | Documents only. **No demo, no pre-evaluation.** AC in 3 working days. Valid unless revoked | Post-evaluation only |
| **Accreditation** — POS / CRM / subscription e-invoicing or e-receipting software | RMO 24-2023, RMC 68-2015 | Developer / distributor / dealer / supplier-vendor **and** pseudo-supplier | TWG **system demonstration**, notarised sworn statement, 20 working days | **Every version upgrade is presumptively a major enhancement requiring reaccreditation** |

This materially strengthens §14's locked decision "Regulated modules: integrate, don't build. No
own-POS for 12 months." It also suggests a sharper architectural rule than the document currently
states: **do not generate the principal invoice.** Integrate with an accredited POS that generates
it, and register the Axon Enjin layer as a CAS or CAS component. The instant the platform itself
issues the principal Invoice, it is in the RMO 24-2023 regime and every release ships through the
BIR.

### 2.4 The finding that changes the implementation fee

From the BIR's digest of **RMO 9-2021**, verbatim:

> Affiliated companies, sister companies, **franchisees**, closely held corporations, other similar
> companies related to a parent company shall register the "System" to be used with the RDOs/LT
> Office where the aforesaid companies are registered. This requirement shall be applicable
> **regardless of whether these companies are sharing servers and using exactly the same "System"**
> previously registered and used by the parent company or other related companies.

Franchisees are named expressly, and shared-server identity is expressly not a defence. So for a
franchise network of independently-owned franchisees:

- The **franchisor** registers the System at its RDO and receives an AC.
- **Every franchisee that is a separate taxpayer registers the same System at its own RDO** and
  receives its own AC.
- Branch offices adopting a system ahead of, or separately from, the head office have their own
  filing rules and get their own AC, with the AC annex listing the branches using the system.

Three consequences:

1. **F-06 is worse than it looks.** The implementation fee (P180,000 base + P25,000/branch, §6.5)
   has no stated hour assumption. This rule adds a per-registering-entity documentation workload that
   scales with the number of *franchisee taxpayers*, not the number of branches — and for a
   franchised network those differ. A 20-branch network that is 15 franchisee-owned entities is 16
   AC filings across up to 16 RDOs, not one.
2. **It is monetisable.** §8.3 makes the Compliance Pack Axon Enjin's deliverable. If the Compliance
   Pack is per-registering-entity rather than per-client, the implementation fee's per-branch
   increment has a defensible regulatory derivation for the first time — which is exactly what F-06
   says is missing.
3. **It is a discovery question nobody is asking.** "How many of your branches are company-owned and
   how many are franchisee-owned, and are the franchisees separate taxpayers?" belongs in the WD4
   §2.1 script next to R-07. It changes the price.

### 2.5 The build requirement §8.2 is missing

RMC 68-2015 item 6 conditions the cloud/subscription route on the taxpayer-user allowing "a
provision for storage and backup of all required data including authorized access(es) for BIR Revenue
Officers **which shall be locally available for audit purposes**."

§8.2's non-negotiable build list has six items. It does not have this one. For a multi-tenant SaaS
sold to a pseudo-supplier client, locally-available storage, backup and BIR-officer access is a
compliance-by-design requirement of exactly the same character as the six that are listed — and
failing it produces exactly the failure mode §8.2 warns about: "the client fails registration and
blames us."

---

## 3. The BSP OPS / MPAA perimeter

§13 rates this "Catastrophic, low probability" and §8.7 calls it "the only item that can end the
company." That rating is defensible. The framing of the question is not.

### 3.1 The OPS definition — the outer gate

RA 11127 §4(1) defines an operator as any person who provides clearing or settlement services in a
payment system, **or** defines, prescribes, designs, controls or maintains the operational framework
for the system. BSP Circular 1049 then enumerates. From the BSP's own FAQ on Registration of
Operators of Payment Systems (retrieved 3 Aug 2026), an OPS performs any of:

> (a) Maintains the platform that enables payments or fund transfers, regardless of whether the
> source and destination of accounts are maintained within the same or different institutions;
> (b) Operates the systems or network that enables payments or fund transfers to be made through the
> use of payment instrument;
> (c) Provides a system that processes payments on behalf of any person or the government; and
> (d) Performs such other similar activities, as may be determined by the Monetary Board.

"Person" covers natural and juridical persons and all business-organisation forms. Registration is
**not** limited to Philippine entities: a foreign provider without a domestic office must register if
it performs OPS activities "in the Philippines or for customers in the Philippines."

The BSP is explicit that the list is functional and that no entity type is safe by label:

> Independent ATM Deployers, Bayad Centers/bill payment aggregators, online merchants/billers, and
> **payment gateways may be part of the scope if they perform operator functions** relative to a
> payment system.

and

> **Proprietary platforms are considered.**

### 3.2 The single most useful sentence for Axon Enjin

The same FAQ draws the line the Company Document needs, and draws it precisely:

> **Is the definition of OPS in Circular No. 1049 the same as the definition of service provider in
> NPSA?**
>
> No. Service provider, as defined in the NPSA, refers to an entity that supplies process
> arrangements, technology, and/or infrastructure to operators of the payment systems. A service
> provider, however, **can also be an OPS under Circular No. 1049 if such service provider performs
> OPS activities in its own name and not merely as an incident of the services that it provides to
> an OPS.**

That is the perimeter. Not "do you touch money" — the document's own one-line test — but **in whose
name are the payment-enabling functions performed, and are they incidental to a technology service
or are they the service.** An integrator that supplies technology to a licensed gateway and never
performs a payment function in its own name is a *service provider* under the NPSA and outside
Circular 1049. The same integrator that presents payment acceptance to merchants as its own
capability, contracts with merchants for it, or interposes itself in the flow, is inside.

**And this is why §8.7 opinion 1 asks the wrong question.** It asks: "OPS under Circular 1049, or
MPAA under Circular 1198?" — as if those were alternatives. They are not. Circular 1198's own scope
provision, from the BSP FAQ on Circular 1198:

> The policy covers **OPS** engaged in or intending to engage in MPAA in the Philippines.

MPAA status presupposes OPS status. The test is sequential, not disjunctive:

```
Step 1.  Is Axon Enjin an OPS under Circular 1049?
         Test: does it perform an enumerated payment function IN ITS OWN NAME,
               rather than merely as an incident of technology supplied to an OPS?
         If NO  -> Circular 1198 cannot apply. Perimeter cleared. Self-assessment
                   documented and retained (M-2026-039 Part I.1 requires it).
         If YES -> go to Step 2.

Step 2.  Is it engaged in MPAA?
         Activity-based, not entity-based. Includes "providing the means to accept
         various payment instruments and collect, secure, transmit and process
         payment information" and "providing support services related to the payment."
         If NO  -> register as OPS under Circular 1049 / M-2026-039. P20,000 fee.
         If YES -> go to Step 3.

Step 3.  Is it engaged in MERCHANT ACQUISITION specifically?
         Test: an agreement with merchants that results in the transfer of funds
               to the merchant.
         If NO  -> register with BSP under MORPS Section 502. OPS-MPAA becomes a
                   Bangko Sentral Supervised Institution.
         If YES -> Merchant Acquisition Licence required, plus P5M or P10M minimum
                   capital, 2-business-day settlement, merchant due diligence under
                   the new MORPS 503.7, AMLC registration, quarterly statistics.
```

Rewriting opinion 1 as this three-step question, with the service-provider sentence quoted in the
brief, is the highest-value change available to §8.7. It converts an open-ended "where is the line"
question into three answerable ones, and it should reduce the P80,000–120,000 estimate rather than
raise it.

### 3.3 Registration mechanics, fee and sanction

| Item | Position | Source |
| ----- | ----- | ----- |
| Self-assessment | Mandatory. "Circular No. 1049 … requires concerned entities to conduct a self-assessment to determine whether they are operators of payment systems that are required to register." Restated in M-2026-039 Part I.1 | BSP OPS FAQ; M-2026-039 |
| Timing | Within **1 month from the start of operations**, except three pre-commencement cases: another regulator requires BSP action first; the OPS offers remittance or other money-service-business activities; or as the Monetary Board determines | BSP OPS FAQ |
| Fee | **P20,000**, one-time, non-refundable, payable only once the BSP determines the applicant is an OPS and issues the COR. Banks and EMI-NBFIs exempt | BSP OPS FAQ; M-2026-039 Part IV |
| Provisional certificate | PCOR issued automatically on successful online registration; generally valid 3 months | BSP OPS FAQ |
| COR validity | Valid until revoked | BSP OPS FAQ |
| Capital | Only OPS of **designated** payment systems face minimum capital requirements under the NPSA. The BSP has not yet designated any payment system | BSP OPS FAQ |
| Sanction for operating unregistered | Monetary Board directive to comply and to stop operating; if ignored, BSP coordinates with other government agencies under NPSA §9; plus penalties under NPSA §20 and RA 7653 §37 as amended by RA 11211 | BSP OPS FAQ |
| Population | **314 registered OPS** on the BSP's published register; 10 registered in 2026 to date | BSP list of BSP-Registered OPS, retrieved 3 Aug 2026 |

§4.6's assertion that "the BSP has halted unregistered operators" is consistent with the FAQ's
stated sanction ladder. It is a fair characterisation.

### 3.4 The MPAA definitions, verbatim

From the BSP's FAQ on Circular No. 1198 (retrieved 3 Aug 2026):

> MPAA is defined as the set of services provided to a merchant to receive payment for the sale of
> goods and/or services. In general, services include merchant acquisition; **providing the means to
> accept various payment instruments and collect, secure, transmit and process payment information;**
> and providing support services related to the payment.
>
> Merchant acquisition refers to the service of **accepting and processing payment transactions on
> behalf of a merchant under an agreement, resulting in a transfer of funds to the merchant.**

And on the classification approach:

> The Circular employs an **activity-based approach rather than an entity-based approach.**
> Enumerating entities performing MPAA may limit the scope to those specific terms and exclude other
> industry terms. … Generally, common industry terms for OPS-MPAA include, but are not limited to
> "merchant acquirers," "payment facilitators," "payment aggregators," and "payment gateways."
> It is important to note that **most OPS engage in more than one payment activity and MPAA may be
> one of those activities, even if it is not the main business of the OPS.**

WD4 §2.2 says "Circular 1198's MPAA language is broad enough to worry about." That judgement is
correct, and the phrase to worry about is the middle limb — "providing the means to accept various
payment instruments and **collect, secure, transmit and process payment information**." A POS layer
that captures a card or QR payment instrument selection, tokenises or forwards the payment
reference, and reconciles the result is doing something that reads onto that limb on a plain-language
basis, whatever it does with funds.

Two more provisions matter:

- **OPS-MPAA is a Bangko Sentral Supervised Institution (BSI).** Governance policy, an IT risk
  management framework, AML/CTPF measures including AMLC registration, and end-user protection
  mechanisms all attach. Registration is not a filing; it is entry into supervision.
- **Q24 closes the related-party route.** "OPS engaging in merchant acquisition with certain
  activities provided by its related parties are still considered OPS-MAL. The key criterion for
  'merchant acquisition' is the agreement with merchants that results in the transfer of funds…
  The related party engaging in MPAA **may be considered an OPS-MPAA depending on the service it
  provides** to the OPS-MAL." So you cannot park the regulated function in an affiliate; and a
  technology supplier to a licensed acquirer is assessed on what it actually does.

**Transitory deadlines, both expired.** Non-bank/non-EMI OPS already engaged in MPAA had to file a
certification of compliance and a gap assessment by **8 February 2025**, and comply fully by
**8 August 2025**. Merchant acquirers additionally had to file the MAL application pack by
8 February 2025. There is no on-ramp left. An entity that discovers today that it is an OPS-MPAA is
already late.

### 3.5 Where does an integrator that never holds funds and never stores card data sit?

The honest answer, stated as the evidence supports and no further.

**Arguments that it sits outside.**

1. It is not a merchant acquirer: there is no agreement with the merchant that results in a transfer
   of funds to the merchant. Settlement is merchant-direct. Circular 1198 Q24 confirms the transfer
   of funds is "the key criterion."
2. It is an NPSA **service provider** — it supplies technology and infrastructure to an operator —
   and it performs no payment function in its own name. The BSP FAQ carve-out (§3.2) is drafted for
   exactly this position.
3. Circular 1198's obligations bite on OPS. If Step 1 fails, Steps 2 and 3 do not arise.
4. Empirically, the published register of 314 OPS contains no entity that presents as a
   point-of-sale software vendor. StoreHub, the vendor §7.2 of the Company Document uses as its
   competitive reference and which offers integrated payments in the Philippines, **does not appear**
   on the register under that name.

**Arguments that it sits inside.**

1. The MPAA limb "providing the means to accept various payment instruments and collect, secure,
   transmit and process payment information" is written functionally and does not require fund
   custody. Neither does the Circular 1049 limb "maintains the platform that enables payments."
2. The activity-based approach and "MPAA may be one of those activities, even if it is not the main
   business" defeat the argument that payments are a small feature of a large product.
3. Q24 shows the BSP will assess a technology supplier to a licensed acquirer on the service it
   actually provides.
4. **M-2026-030** (§3.6.2) now states the assessment factors explicitly, and one of them is
   "customer-facing representations." Marketing copy is evidence.
5. Absence from the register is weak evidence. It may mean the perimeter is narrow; it may mean the
   vendor routes payments through a licensed partner in that partner's name; it may mean the vendor
   registered under a different corporate name; it may mean it is non-compliant. **Not found:** any
   published BSP determination, enforcement action, or advisory addressing a POS-software vendor's
   OPS status. Searched: the BSP registered-OPS list, BSP 2024–2026 circulars and memoranda by
   number, the two BSP FAQs, and four legal-firm commentaries.

**Where that leaves it.** The evidence supports a *defensible* position that a pure integrator sits
outside, and it does not support a *safe* one. The difference is what an opinion is for. Preserved as
contradiction C6.

### 3.6 What has changed since the document's evidence base

#### 3.6.1 Circular 1238, 17 June 2026

Amends the NRPS framework and the MPAA framework. Does **not** amend the MPAA definition, the
OPS definition, or the register-versus-licence split. Inserts MORPS 503.7 (merchant due diligence,
merchant identification and sanctions screening, monitoring, suspension and termination, costed
pricing) applicable to **OPS-MAL** only. Also mandates that for P2P electronic fund transfers
"recipients shall receive the full amount as credit to their accounts, free of any charges or
deductions."

Read for Axon Enjin: **the perimeter is stable; the cost of being inside it went up.** That
strengthens rather than weakens the §4.6 exclusion.

#### 3.6.2 Memorandum M-2026-030, 24 June 2026 — the substance-over-form test

Addressed to all BSP-Supervised Institutions. Verbatim, the two sentences that matter:

> **Arrangements involving technology services, platform access, co-branding, partnerships, wallet
> provisioning, outsourcing, or similar structures** shall be governed and implemented in a manner
> consistent with Sections 4, 6, and 10 of Republic Act No. 11127 … Section 502 and 503 of the Manual
> of Regulations for Payment Systems (MORPS), and other applicable licensing, registration,
> prudential, consumer protection, and risk management requirements.
>
> In assessing such arrangements, the BSP may consider **the actual functions performed by the
> parties, the allocation of responsibilities and risks, customer-facing representations, control
> over funds or accounts, and the extent to which the arrangement results in another person or
> entity effectively performing activities that require BSP authority.**

Five factors, and Axon Enjin controls four of them by design choice:

| Factor | What Axon Enjin should be able to say | Governance rule it implies |
| ----- | ----- | ----- |
| Actual functions performed | Configuration, data capture, reconciliation display. No initiation, no authorisation, no settlement | Architecture rule: never originate a payment instruction |
| Allocation of responsibilities and risks | Payment risk, chargebacks, disputes and merchant onboarding all sit with the licensed gateway and the merchant | Contract rule: the MSA must allocate payment risk away, explicitly |
| **Customer-facing representations** | Axon Enjin does not offer, market or represent payment acceptance as its capability | **Voice rule.** §2.4 currently governs compliance claims; it should also govern payment claims. Every deck, page and proposal |
| Control over funds or accounts | None. No settlement account, no float, no escrow, no stored value | Already §4.6, and it holds |
| Whether the arrangement results in another entity effectively performing an activity requiring BSP authority | The gateway performs; Axon Enjin supplies technology to it | Partner-selection rule: integrate only with entities that are themselves registered or licensed |

That fourth row is the new one. It makes marketing language a regulatory artefact. A landing page
that says "accept payments with Axon Enjin" is evidence against the company in a perimeter
assessment, regardless of what the code does. This belongs in §2.4 as a hard rule, not in §8 as a
consideration.

#### 3.6.3 Memorandum M-2026-039, signed 17 July 2026 — new OPS registration guidelines

Expressly supersedes M-2019-023. Seventeen days old at the time of writing. Structure:

- **Part I.1** mandates the self-assessment before filing: "All applicants shall conduct a
  self-assessment to determine the applicability of OPS registration under R.A. No. 11127 and BSP
  Circular No. 1049."
- **Three-phase evaluation:** Phase 1 determination of eligibility to apply; Phase 2 evaluation of
  the registration; Phase 3 release of the COR.
- **Filing:** email only, to `PSLD-Applications@bsp.gov.ph`, with a prescribed subject-line format.
  "All submissions must be submitted as direct email file attachments. Submissions through shared
  drives, cloud-based folders, or private file storage links shall not be accepted."
- **Documentary set** for Phase 1–2 includes PCDSS Form 03-001, legal existence documents, and a
  business plan that must describe the business model, operational structure, target customers with
  KYC and CDD, all payment-related products and services, revenue-generating activities, the system
  used for each product with security controls, **end-to-end transaction flows per product including
  fund movements among all parties and third-party providers**, settlement and reconciliation
  processes with funds-flow diagrams, principal agreements with clients and payment partners
  including SLAs, and sample user terms and conditions. Plus a business-model presentation deck.
- **Cooling-off:** three months after a returned, denied or withdrawn application.
- **Fee:** P20,000 one-time, non-refundable, before COR release.
- Signed by Deputy Governor Mamerto E. Tangonan, Payments and Currency Management Sector.

Two things follow. First, the documentary set is a useful negative test: if Axon Enjin cannot produce
an end-to-end funds-flow diagram in which it appears, it is probably not an OPS. Second, §9.4's
"BSP payment circulars — Quarterly" cadence would have caught Circular 1238 (17 June) and
M-2026-030 (24 June) at a June-quarter review and M-2026-039 (17 July) only at the September one. The
cadence is defensible; the absence of a named owner is not, and the document's own §9.3 puts the
regulatory-monitoring owner at day 30.

---

## 4. Data privacy

### 4.1 Registration thresholds and the sworn declaration

NPC Circular 2022-04, *Registration of Personal Data Processing System, Notification Regarding
Automated Decision-Making or Profiling, Designation of Data Protection Officer, and the National
Privacy Commission Seal of Registration*. Issued 5 December 2022, effective 11 January 2023, initial
compliance deadline 10 July 2023.

| Trigger | Threshold |
| ----- | ----- |
| Headcount | PIC **or PIP** employing **250 or more** persons |
| Sensitive personal information | Processing SPI of **1,000 or more** individuals |
| Risk | Processing "likely to pose a risk to the rights and freedoms of data subjects" |
| Frequency | Processing that "is not occasional" |

Any one trigger obliges registration of all data processing systems, through the NPC Registration
System (NPCRS). Registration must be completed within 20 days of implementing a new data processing
system or appointing a DPO. Below the thresholds, the entity files a **Sworn Declaration and
Undertaking for Exemption from Registration of DPS** — so there is no "do nothing" state. §8.6's
"Sub-threshold entities still file a sworn declaration" is correct.

Lifecycle: certificate valid **1 year**; renewal 30 days before expiry; minor amendments (DPO
change, system update) notified within 10 days; major amendments (entity name, business address)
within 30 days.

**Where Axon Enjin actually sits.** Almost certainly below the headcount threshold and below 1,000
SPI subjects at seed stage. But the *risk* and *not occasional* limbs are not headcount-scaled. A
multi-tenant platform that processes health data for derma and aesthetic clinics — Tier 1 vertical
3 in WD2 §1 — and minors' data for tutorial centres (Tier 2) will cross the 1,000-SPI-subject line
early and will engage the risk limb immediately. The document's deployment rule (§8.4) already routes
health, minors' and biometric data to client-hosted single-tenant. That rule is the mitigation. It
needs to hold operationally, not just contractually — which is §8.7 opinion 3.

### 4.2 The DPO requirement

RA 10173 and its IRR require every PIC and PIP to designate an individual accountable for
compliance. No citizenship or residency requirement. DPO registration goes through the same NPCRS.
§8.3 row 4 assigns "NPC registration, DPO, privacy manual" to the client as Personal Information
Controller — correct as to the client. **It does not state that Axon Enjin needs its own DPO.** As a
PIP for ordinary operational data under its own §8.4 row 1, it does. That is an omission, not a
contradiction (see §8.2 omission 6).

### 4.3 Penalties — the document has the wrong number in view

**Criminal, RA 10173 §§25–36.** Verified against the statute text (lawphil, retrieved 3 Aug 2026).

| Section | Offence | Imprisonment | Fine |
| ----- | ----- | ----- | ----- |
| 25 | Unauthorised processing — personal information | 1–3 years | P500,000 – P2,000,000 |
| 25 | Unauthorised processing — sensitive personal information | 3–6 years | P500,000 – P4,000,000 |
| 26 | Access due to negligence — PI | 1–3 years | P500,000 – P2,000,000 |
| 26 | Access due to negligence — SPI | 3–6 years | P500,000 – P4,000,000 |
| 27 | Improper disposal — PI | 6 months – 2 years | P100,000 – P500,000 |
| 27 | Improper disposal — SPI | 1–3 years | P100,000 – P1,000,000 |
| 28 | Processing for unauthorised purposes — PI | 1.5–5 years | P500,000 – P1,000,000 |
| 28 | Processing for unauthorised purposes — SPI | 2–7 years | P500,000 – P2,000,000 |
| 29 | Unauthorised access or intentional breach | 1–3 years | P500,000 – P2,000,000 |
| 30 | Concealment of security breaches | 1.5–5 years | P500,000 – P1,000,000 |
| 31 | Malicious disclosure | 1.5–5 years | P500,000 – P1,000,000 |
| 32 | Unauthorised disclosure — PI | 1–3 years | P500,000 – P1,000,000 |
| 32 | Unauthorised disclosure — SPI | 3–5 years | P500,000 – P2,000,000 |
| **33** | **Combination or series of acts** | **3–6 years** | **P1,000,000 – P5,000,000** |
| 35 | Large-scale — data of at least 100 persons affected | maximum penalty applies | maximum applies |
| 36 | Offence by a public officer | additional disqualification for twice the term | — |

So §8.6's "penalties reach P5M" is accurate as a ceiling. The P5,000,000 lives in §33, not in the
base offences, and it is criminal — it requires prosecution by the DOJ.

**Administrative, NPC Circular 2022-01, in force since 27 August 2022.** This is the regime that
actually operates, and the document does not mention it:

| Class | Definition | Fine |
| ----- | ----- | ----- |
| Grave infraction | Affects **1,000 or more** data subjects | **0.5% – 3% of annual gross income** |
| Major infraction | Affects **1 – 1,000** data subjects | **0.25% – 2% of annual gross income** |
| Other infraction | Anything else — including failure to register, or failure to provide updated information on the PIC's identity or contact details, the data processing system, or automated decision-making | **P50,000 – P200,000** |
| Cap | Total for a single act, whether producing one or multiple infractions | **P5,000,000** |

Why this matters more than the criminal table. The administrative fine is **turnover-linked and
imposed by the regulator without a criminal prosecution**. For a company at Axon Enjin's projected
scale it is the binding number, and it is uncapped in percentage terms until it hits P5M. A grave
infraction — and a multi-tenant breach touching 1,000 data subjects across a franchise network is a
grave infraction by definition — costs 0.5% to 3% of annual gross income. On a P50,000,000 revenue
base that is P250,000 to P1,500,000. On a P200,000,000 base it is P1,000,000 to P5,000,000, i.e. the
cap.

The P5M cap is **per act**. A pattern of acts is not capped at P5M in aggregate.

### 4.4 Fees

NPC Circular 2023-01, *Schedule of Fees and Charges of the National Privacy Commission*, effective
8 June 2023. From **1 October 2024**, the NPCRS integrated the fee schedule and all PICs and PIPs
must pay the corresponding fee to register a data processing system or renew that registration. The
same upgrade added the online submission route for the Sworn Declaration and Undertaking.

**Not found:** the peso amounts. Searched the NPC announcement page, the NPC schedule-of-fees PDF
link, DLA Piper's Philippines registration page, Baker McKenzie's InsightPlus note, and four
practitioner guides. The announcement confirms fees exist and are enforced; none of the accessible
sources states the figures. Get them from the NPCRS portal or from counsel. They are small and they
do not change a decision, but they should be in the compliance budget rather than absent from it.

### 4.5 Does "client-hosted, no production data access" exit Personal Information Processor status?

§8.4 row 2 and §8.5 clause 3 both rest on this. §8.7 opinion 3 correctly identifies it as an open
question and prices it at P40,000–80,000. Here is what the sources actually support.

**The definition is functional, not access-based.** A Personal Information Processor is "any natural
or juridical person qualified to act as such … to whom a personal information controller may
outsource **the processing** of personal data pertaining to a data subject." The NPC's own PIP/PIC
material frames a processor as anyone who processes personal data on behalf of the controller, acting
only on the controller's documented instructions. Nothing in the definition turns on where the data
sits or on whether the vendor holds credentials.

**"Processing" is very broad** under the DPA — any operation performed upon personal data,
including collection, recording, organisation, storage, updating, retrieval, consultation, use,
consolidation, blocking, erasure or destruction, whether or not by automated means.

**The argument for the exit.** If the software runs entirely in the client's own tenancy, the client
holds all credentials, Axon Enjin has no production access, and Axon Enjin performs no operation on
the data on the client's behalf, then it is not processing anything — it is a software licensor,
which is not a role the DPA regulates. The parallel in payments is §3.2's service-provider carve-out,
and the logic is the same shape.

**The argument against.** Support, incident response, upgrades, migration and troubleshooting all
tend to require production access in practice, even where the contract says otherwise. A single
break-glass access event may make the vendor a processor for that engagement. And release deployment
into a client tenancy is itself an operation performed on a system holding personal data.

**Not found:** any NPC circular, advisory or decision addressing whether a software licensor with no
production access to a client-hosted deployment is or is not a PIP. Searched: NPC circulars 2022-01,
2022-04, 2023-01, the NPC PIP/PIC pages and FAQ, NPC Advisory 2017-01, NPC Advisory 2024-04 (AI
systems), and the DLA Piper and Linklaters Philippines chapters. **No authority either way.** This is
a genuine gap, not a settled point either side is ignoring. §8.7 opinion 3 is correctly scoped and
should not be dropped.

**Practical consequence regardless of the answer.** §8.5 clause 3's belt-and-braces drafting — either
we are not a processor **or** we are, under a signed Data Outsourcing Agreement — is the right
posture and should not be softened while the question is open. What should be added is an operational
control: a logged, time-boxed, client-approved break-glass procedure, because "no production access"
has to be true in the logs, not just in the contract. §8.5 says "stated explicitly and true
operationally." It does not say how that is evidenced.

### 4.6 Has the DPA been amended? No — and one published source says otherwise

House Bills 892 and 898 (2022) and Senate Bill 1367 (2022) each proposed amendments, including
increased penalties and an expanded definition of sensitive personal information to include biometric
and genetic data. All remain pending. **No amendment to RA 10173 has been enacted.**

One source encountered in research — `recordinglaw.com`, tier: web — states that "Republic Act 11937
… amends certain aspects of the DPA, introduces graduated penalties tied to global turnover for
cross-border technology companies, with final rules expected in 2025." **This is false.** RA 11937,
approved 12 January 2023, is an act granting Philippine citizenship to Justin Donta Brownlee. Checked
against lawphil and the Senate Legislative Reference Bureau.

Recorded here because the claim is plausible-sounding, it appears high in search results for
"Philippines data privacy 2026", and a researcher in a hurry would have copied it into section 8.
A turnover-linked penalty regime does exist in Philippine data privacy — it is NPC Circular 2022-01
(§4.3) — but it is administrative, domestic and capped, not statutory and global.

---

## 5. Tax profile

### 5.1 Corporate income tax

| Item | Verified position | Company Document |
| ----- | ----- | ----- |
| Regular corporate income tax, domestic corporation | **25%** | Matches |
| Reduced rate | **20%**, where net taxable income does not exceed **P5,000,000** **and** total assets do not exceed **P100,000,000**, exclusive of the land on which the office, plant and equipment sit | Matches, with the land exclusion omitted |
| Source | CREATE (RA 11534), unchanged by CREATE MORE (RA 12066, signed 11 Nov 2024) as to this test | Attributes it to CREATE. Correct |
| CREATE MORE relevance | Extends the 20% rate to registered business enterprises on the Enhanced Deductions Regime; is the statute RR 11-2025 implements | Not mentioned. Only material if BOI/PEZA registration is pursued, which §8.6 defers |

Both conditions are conjunctive. A company can be under P5M taxable income and still pay 25% if
total assets exceed P100M. For Axon Enjin, at seed stage, the binding condition is taxable income,
not assets — which means the 20% rate is available and the effective tax planning question is
timing, not eligibility. **No change required to §8.6 beyond adding the land exclusion.**

### 5.2 VAT

| Item | Verified position |
| ----- | ----- |
| Rate | 12%. Matches §8.6 |
| Registration threshold | **P3,000,000** gross sales or receipts in any 12-month period. Still the operative figure on every source checked in mid-2026 |
| Indexation | EOPT (RA 11976) reinstated a mechanism under NIRC §109: the threshold "shall be adjusted to its present value every three (3) years using the Consumer Price Index, as published by the Philippine Statistics Authority" |
| Has it moved? | **Not found.** No BIR revenue regulation adjusting the general VAT registration threshold was located. Searched: three targeted queries on a 2026 CPI adjustment and on the specific candidate figures P3.5M / P3.6M / P3.8M; the BIR issuance list; RR 3-2024 (EOPT VAT and percentage tax); RR 1-2026 (which turned out to concern VAT on RBE local sales under NIRC §295(D), not the threshold); and five practitioner VAT guides dated 2026, all of which still state P3,000,000 |
| Precedent that the mechanism is live | RR 1-2024 raised the residential-dwelling VAT-exemption ceiling from P3.199M to P3.6M effective 1 Jan 2024 under the analogous §109(P) indexation |
| Digital services VAT | RA 12023 with RR 03-2025, 12% on digital services consumed in the Philippines, **effective 2 June 2025**. Matches §8.6. NRDSP registration deadline extended to 1 July 2025. Further clarified by **RMC 59-2026, 2 June 2026** |
| Invoicing | RR 7-2024 as amended by RR 11-2024: the **Invoice** is the principal document for goods **and services**; the Official Receipt is supplementary and must be stamped "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" |

**Read.** §8.6's P3,000,000 is correct today and sits on a live indexation trigger with demonstrated
BIR willingness to pull it. Treat it as a monitored figure with a date stamp, not a constant. Add it
to §9.4 as its own row rather than folding it into "BIR issuances."

Separately: Axon Enjin's own SaaS revenue is a digital service supplied by a resident provider. It is
VATable at 12% under ordinary rules; RA 12023's machinery is aimed at non-resident providers. But
RMC 59-2026 addresses "imposition, reporting and registration requirements" and has not been read
line by line here. **Read it before the next VAT filing** — it is two months old and it is the only
2026 VAT issuance found that could touch a resident SaaS seller's reporting.

### 5.3 Expanded withholding tax on referral commissions

§11.3 defines the referral programme and §8.6 states its tax mechanics in one line. That line has two
errors and three missing mechanics. Verified against the BIR's own digest of RR 11-2018.

**Classification.** A referral commission paid to an independent introducer falls within
§2.57.2(A)(11): "Commissions of independent and/or exclusive sales representatives, and marketing
agents of companies … on gross commissions, rebates, discounts and other similar considerations
paid/granted to independent and/or exclusive sales representatives and marketing agents and
sub-agents of companies, including multi-level marketing companies, on their sale of goods and
services by way of direct selling or similar arrangements where there is no transfer of title over
the goods from the seller to the agent/sales representative." Subsection (A) rates therefore apply.

**Rates and the condition attached to each.**

| Payee | Rate | Condition |
| ----- | ----- | ----- |
| Individual | **5%** | Gross receipts/sales for the taxable year will not exceed **P3,000,000**, **and** the payee submits sworn declaration **Annex B-1** with a copy of its **Certificate of Registration** to every income payor, not later than **15 January** each year or at least prior to the initial payment. Annex B-2 where there is only one payor |
| Individual | **10%** | Default. Applies where the declaration was not provided, **or** where the payment causes gross income to exceed P3,000,000 despite a declaration having been received |
| Non-individual | **10%** | Gross income is estimated not to exceed **P720,000** for the taxable year, **and** the authorised officer furnishes every income payor with notarised sworn statement **Annex B-3** plus a copy of the COR, by 15 January or before the initial payment. Executed by the president or managing partner |
| Non-individual | **15%** | Default. Applies where the statement was not provided, **or** where the payment exceeds P720,000 despite a statement having been received |

**Error 1.** §8.6 says "10% for corporations". P720,000 of annual gross income is a very low bar for
any franchise consultant, brokerage or agency that would plausibly refer a multi-branch franchisor.
The realistic default for a corporate referrer is **15%**, not 10%. That is a 50% increase in the
withholding drag on the corporate side of the referral programme, and it changes the net-of-tax value
of the referral fee that §11.3 is offering.

**Error 2.** §8.6 says "Referrer should issue an official receipt." Post-RR 7-2024 the referrer
issues an **Invoice**. An Official Receipt is now a supplementary document and is expressly not valid
support for an input tax claim. A referral programme that instructs referrers to issue ORs is
instructing them to hand over a document that cannot support Axon Enjin's own deduction cleanly.

**Missing mechanic 1 — the payor's own filing.** "Income payors/withholding agents shall subsequently
execute a sworn declaration (Annex C) stating the number of payees who have submitted the
declarations." Axon Enjin has a filing obligation of its own, not just a withholding one.

**Missing mechanic 2 — Form 2307 timing.** The certificate of creditable tax withheld at source must
be issued **on or before the 20th day of the month following the close of the taxable quarter** in
which the payment was made, and **simultaneously with the income payment upon the payee's request.**
§8.6 says "issue Form 2307" without the deadline.

**Missing mechanic 3 — when the obligation arises.** RR 4-2024, implementing EOPT, moved the trigger:
the obligation to deduct and withhold arises when the income becomes **payable** — due, demandable or
legally enforceable, or accrued or recorded as an expense or asset in the payor's books, or when the
seller issues an invoice, **whichever comes first.** So the withholding clock can start before cash
moves. A referral programme that accrues commissions on contract signature and pays on collection
withholds at accrual, not at payment.

**The unregistered-referrer question, partially answered.** WD4 §3 item 5 asks "whether unregistered
individual referrers can be paid at all." The 5% rate is conditioned on furnishing a **Certificate of
Registration**. An unregistered individual has no COR, therefore cannot access 5%, and is withheld at
10%. Whether they can be paid at all is a separate question about the payor's substantiation of a
deduction under NIRC §34(K) and about the referrer's own registration duty, and it is not answered
by RR 11-2018. **Partially answered; the deduction-substantiation limb remains open** and belongs in
the §8.7 second wave.

### 5.4 BOI / PEZA

§8.6 defers IT-export registration unless foreign revenue exceeds 20%. Nothing found contradicts
that as a decision. One note: CREATE MORE materially improved the incentive package — including
extending the 20% CIT rate to RBEs on the Enhanced Deductions Regime, and RR 9-2025 / RR 1-2026 now
provide an optional VAT registration route for certain RBEs on local sales. If foreign revenue does
approach the 20% trigger, the incentive landscape is more favourable than it was when the deferral
was decided. That is an argument for revisiting the trigger, not for moving it now.

---

## 6. FX — evidence, options, recommendation

This section closes the evidence side of **F-01** and answers **R-04**.

### 6.1 The evidence

**Series used.** Daily USD/PHP, ECB reference rates via the Frankfurter API, **255 observations,
1 August 2025 to 31 July 2026** inclusive. Pulled and computed locally on 3 August 2026. Tier:
primary for the ECB fixing, though note that the ECB fixing is not the BAP rate the BIR prescribes
(§6.3) and will differ from it by a few centavos.

| Statistic | Value |
| ----- | ----- |
| Latest observation in series | **P61.269** on 31 July 2026 |
| 12-month mean | **P59.337** |
| 12-month median | P59.044 |
| 12-month minimum | **P56.648** on 13 August 2025 |
| 12-month maximum | **P61.835** on 24 July 2026 |
| 12-month range | 9.16% |
| Annualised volatility of daily log returns, 12 months | **6.16%** |
| Annualised volatility, trailing 90 days | 5.76% |
| Trailing 20-day average | **P61.611** |
| Trailing 60-day average | P61.425 |
| Trailing 120-day average | P60.500 |
| H1 2026 mean | P59.979 |
| Q2 2026 mean | P60.965 |
| Days at or above P58 | 207 of 255 — **81%** |
| Days at or above P61 | 58 — 23% |
| **Days at or above P62 (the §14 upper trigger)** | **0** |
| **Days at or below P55 (the §14 lower trigger)** | **0** |

**Month-end series.** The shape matters more than any single print.

| Month end | USD/PHP | Change |
| ----- | ----- | ----- |
| 29 Aug 2025 | 57.203 | — |
| 30 Sep 2025 | 58.236 | +1.8% |
| 31 Oct 2025 | 58.711 | +0.8% |
| 28 Nov 2025 | 58.666 | −0.1% |
| 31 Dec 2025 | 58.950 | +0.5% |
| 30 Jan 2026 | 58.907 | −0.1% |
| 27 Feb 2026 | 57.683 | −2.1% |
| **31 Mar 2026** | **60.689** | **+5.2%** |
| 30 Apr 2026 | 61.458 | +1.3% |
| 29 May 2026 | 61.572 | +0.2% |
| 30 Jun 2026 | 61.358 | −0.3% |
| 31 Jul 2026 | 61.269 | −0.1% |

**Characterisation.** Not drift. A **step change in March 2026** — a single month of 5.2%
depreciation — followed by four months of a new plateau in a tight 61.3–61.6 band. The peso has been
above P61 for essentially the whole of Q2 and July. The pre-March regime averaged roughly P58.3; the
post-March regime averages roughly P61.4. The P58 peg was approximately right for the eight months
before March 2026 and has been approximately 5.5% wrong for the five months since.

**Cause, from journalistic sources.** A crude-oil shock and broad dollar strength. Bloomberg via
BusinessWorld, 24 July 2026: the peso fell to a fresh record low as oil advanced. A more than 30%
surge in crude prices hit oil-importer currencies, prompting intervention by the central banks of
both India and the Philippines. BSP Governor Eli Remolona, reported 28 July 2026: intervention has
been small, because "when it's a strong dollar, we limit intervention to just maintain orderly
markets" and fighting a strong dollar only depletes reserves. Trading Economics commentary (tier:
web) reports Fitch/BMI forecasting a **P61–63 range through 2026**.

Note the collision with F-08: BusinessWorld reported on 26 April 2026 that Philippine franchising
growth is slowing on Persian Gulf crisis exposure. The same oil shock that moved the peso is the
demand-side headwind in the beachhead sector. **Those are one risk, not two**, and neither §13 nor
the FX row in §9.4 connects them.

### 6.2 What this does to F-01

| F-01 as written | Verified position |
| ----- | ----- |
| "USD/PHP was ≈P61.24 on 2 August 2026" | **Corroborated in the right neighbourhood.** The ECB series ends 31 July at P61.269. Trading Economics reports P60.92 on 3 August. A mid-market print of P61.24 on 2 August is consistent with both. F-01's spot figure stands |
| "about 1.3% from the trigger" | **Understated.** On 24 July 2026 the ECB fixing reached P61.835 — **0.27% from the P62 trigger.** Inquirer Business reported a close of P61.847 the same week with "62 in sight." The trigger came within a quarter of a percent nine days before the document was written |
| "the peg is 5.5% out of the money" | **Confirmed and slightly conservative.** Against the trailing 20-day average of P61.611 the peg is **6.2%** out. Against the trailing 60-day average, 5.9% |
| "the band is symmetric around P58.5, i.e. around the peg rather than around the market" | **Confirmed, and the data makes it sharper.** In 255 trading days the rate spent **zero** days at or below P55 and zero at or above P62. The lower trigger is 10.6% below the trailing average and has never been remotely approached. It is not a trigger; it is decoration |
| Implied: the trigger has not yet fired | **Correct, and it is the single most fragile fact in the register.** Zero breaches in 12 months, but the closest approach was nine days ago and the consensus forecast range straddles the trigger |

**One correction to make to F-01, and one addition.**

- Correction: replace "about 1.3% from the trigger" with the 24 July 2026 high of P61.835 — 0.27%
  away — and state that the trigger is armed rather than distant.
- Addition: the P55 lower trigger has not been within 10% of spot at any point in 12 months. A band
  with one live side and one dead side does not function as a band.

### 6.3 R-04, settled: does BIR accept a fixed internal FX peg?

The answer has been in a revenue memorandum circular since January 2024, and no one in the corpus
had found it.

**BIR Revenue Memorandum Circular No. 12-2024, issued 22 January 2024**, *clarifies the treatment of
foreign currency transactions for financial reporting and internal revenue tax purposes.* Full text
retrieved from the BIR CDN on 3 August 2026. The operative provisions:

> Foreign currency transactions are converted into Philippine Peso using the **prevailing spot rate
> on the date of transaction.** This is the basis of the reportable transactions for taxes other than
> Income Tax (e.g., VAT, GRT, OPT, Excise, DST, etc.).

> To standardize the forex rates to be used for tax purposes, the following rules are prescribed to
> govern the conversion of foreign currency denominated transactions to Philippine Peso:
>
> a. The spot rate of exchange on the day of the transaction based on the **Banker's Association of
> the Philippines (BAP) published rates**, or
>
> b. In the event that the forex rate as stated in item (a) is impractical or not feasible, the spot
> rate on the day of the transaction based on other available exchange rates (e.g., Bangko Sentral ng
> Pilipinas (BSP), Bloomberg, Reuters exchange rates, etc.) shall be used subject to the following
> conditions: i. A taxpayer electing to use forex rates other than BAP published rates must submit to
> the [RDO / LTDO / LTS] … **a notarized sworn statement** stating the source of the forex rates to be
> used, the reason for using such forex rates other than BAP published rates and a statement allowing
> the BIR to have an access on the day-to-day forex rates used during BIR audit … **within 30 days
> prior to the start of the taxable year.**

> Election of forex rates are **irrevocable** and must be used consistently both in recording for
> financial accounting purposes and reporting for tax purposes for **at least one taxable year.**

> The taxpayer has the preference to adopt **which spot rate** to be used (e.g., open, close, high,
> low; weighted average, etc.) in the beginning of the taxable year as long as the spot rates adopted
> must be used consistently both in recording for financial accounting purposes and reporting for tax
> purposes for at least one taxable year.

> The exchange rate to be used in converting foreign currency denominated transactions incurred on
> dates where there are no published forex rates available (e.g., weekends, holidays, etc.) shall be
> the **latest closing spot rate available on the business date immediately preceding** the date of
> transaction.

> In case of foreign currency transactions denominated in USD, the same shall be converted using the
> BAP published rates … The taxpayer will still be required to prove the reliability of exchange rate
> used during a tax audit. Moreover, corresponding **administrative penalties under Section 255** of
> the Tax Code, as amended, would be imposed for first and second offenses. **Subsequent offenses
> shall be considered as willful failure, and thus not subject to compromise.**

**The answer, in three parts, because the question conflates two different situations.**

**Part 1 — If the invoice is denominated in PHP, RMC 12-2024 does not apply at all.** There is no
foreign currency transaction. The reportable amount is the peso figure on the Invoice. The internal
USD anchor and the P58 peg are a **pricing convention**, not a tax position, and the BIR has no view
on them. This is the situation the Company Document actually describes: "USD is the system of record
at a P58/USD internal peg" with "PHP invoicing" (§6 preamble, §14). **On that reading the peg is
lawful and always was.** The question in WD4 Tier 2 item 4 and R-04 was framed as a tax question; on
the facts of the document it is a commercial question with no tax dimension.

**Part 2 — If the contract or invoice is denominated in USD and settled in PHP, a fixed peg is not
permitted.** Conversion must use the spot rate on the transaction date, BAP published rates for USD,
and this governs VAT and every non-income tax as well as income tax. A P58 peg applied to a USD
contract in July 2026 would understate the peso VAT base by roughly 5.5% on every invoice. That is a
§255 exposure, escalating to non-compromisable wilful failure on the third offence.

**Part 3 — There is a legitimate smoothing lever, and it is not a peg.** The circular expressly
allows the taxpayer to elect *which* spot rate — open, close, high, low, or **weighted average** —
at the beginning of the taxable year, irrevocably, applied consistently for at least a taxable year.
An election of the BAP weighted-average rate is a real, sanctioned reduction in intra-day noise. What
is unavailable is a rate that does not move: monthly averaging is expressly prohibited, and a fixed
peg is a fortiori prohibited.

**One caveat, honestly stated.** RMC 12-2024 is a circular, not a regulation, and it addresses
conversion of foreign-currency-denominated transactions. It does not directly address a
PHP-denominated invoice whose *price* was derived from a USD reference. Nothing found suggests the
BIR has ever challenged that construction, and nothing found blesses it either. The
second-wave §8.7 item — "VAT treatment of USD-denominated PHP-billed contracts and whether a fixed
peg is acceptable to BIR" — should now be reframed to counsel as: *confirm that a PHP-denominated
invoice priced off an internal USD reference does not constitute a foreign-currency-denominated
transaction for RMC 12-2024 purposes.* That is a narrow question with a likely short answer, and it
should cost far less than an open-ended FX opinion.

**Also relevant, older:** RMC 40-92 addresses the applicable FX conversion rate for the collection of
withholding taxes from foreign-currency-denominated income payments, supplementing RMC 77-89. Not
read in full. Only engaged if Axon Enjin makes or receives FX-denominated payments subject to
withholding.

### 6.4 The options, with the tradeoffs stated

Modelled on the 8-branch reference client (§7.2): P24,360/branch/month Growth plan,
P194,880/month network, P2,338,560/year subscription, plus a P95,000 Audit and a P380,000
implementation fee. USD anchors: Core $150, Growth $420, Audit $1,650, custom floor $8,000.

| # | Mechanism | Peso price to client at 8 branches, year 1 | USD realised vs anchor at P61.4 | Client-side friction | Operational cost | Failure mode |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **A** | **Hold P58, book the haircut** | P2,358,800 unchanged | **−5.5%**, i.e. about P130,060 of the reference year-1 contract | None. Cleanest sale | None | Every month the gap grows, and the concession was never priced or approved. §14 says "reviewed quarterly" and the review did not happen |
| **B** | **Reset to spot, wider band** | P2,479,000 at P61.0; P2,499,000 at P61.5 | ~0% at reset, drifting | A ~5.5% list increase on a rate card that has never been quoted. Zero incumbency cost if done before the first quote | One decision now, one review a quarter | Resets to a plateau that a 6.16%-vol currency can leave. Needs a real band, not a symmetric decoration |
| **C** | **Quote USD, convert at invoice date on the BAP rate** | Varies monthly with spot | 0% by construction | **High.** PH SME buyers budget in pesos. A price that changes every month is a monthly renegotiation. Collides with §2.3's buyer profile — twenty-year family businesses do not want FX exposure from a software vendor | Highest. Brings the engagement inside RMC 12-2024, requiring a documented rate election, BAP rate capture per invoice, weekend/holiday fallback logic, and possibly a notarised sworn statement 30 days before the taxable year | Transfers all FX risk to the buyer, who did not ask for it and will price it in as risk, not as fairness |
| **D** | **Annual PHP price list, USD internal only, hard annual reset** | P2,479,000–P2,499,000 for the year, then reset | ~0% at each reset, up to one year of drift within | Low. One price for a year is exactly what this buyer wants, and it is a natural annual-prepay story | Low. One decision per year plus a monitored trigger | Up to a year of intra-year drift. At 6.16% annualised vol that is a 1-sigma exposure of about ±3.8 pesos |

**On the band.** §14's P62 / P55 pair is symmetric around P58.5 and is therefore symmetric around
the peg, not the market. In 255 trading days the rate touched neither. A band should be set in
volatility units around the *current* reference, not in round numbers around a stale one. At 6.16%
annualised, a 1-sigma one-year band around P61.5 is roughly **P57.7 to P65.3**; 0.65-sigma is roughly
**P59.0 to P64.0**. A band tighter than 0.65-sigma will fire on noise; a band wider than 1-sigma will
not fire before the margin damage is done.

### 6.5 Recommendation

> **Recommended: option D — an annual PHP price list, with USD retained as the internal system of
> record, reset once a year at a published reference, plus an intra-year trigger set in volatility
> units.**

Concretely:

1. **Reset the internal reference to P61.50** for the 2026–27 price list. That is above the trailing
   20-day average (P61.611 rounds against you; P61.50 is a shade conservative), above the trailing
   60-day (P61.425), and inside the Fitch/BMI P61–63 forecast range. Publish the reference, the
   retrieval date, and the source alongside the rate card. Every peso figure in §6 moves up about
   6.0% from the P58 basis.
2. **Publish PHP prices, fixed for the price-list year.** Not USD. The buyer §2.3 describes will not
   absorb monthly FX. This preserves the entire sales advantage of a peso price while keeping the
   internal margin analysis in USD.
3. **Replace the P62 / P55 band with an asymmetric trigger set on the reference, not on round
   numbers.** Suggested: formal repricing review if the trailing 20-day average moves more than
   **+4%** (about P63.95) or more than **−6%** (about P57.80) from the reference. Asymmetric because
   the downside is a windfall and the upside is a margin hole, and because 12 months of data show a
   one-directional trend. Review, not automatic reprice — a trigger that fires a review is
   maintainable; one that fires a price change is not.
4. **Keep invoices PHP-denominated so RMC 12-2024 is not engaged.** If any contract is ever
   USD-denominated — a foreign client, a partner arrangement, a white-label wholesale deal under
   path 8 — that contract converts at the BAP spot rate on the transaction date and needs the rate
   election made at the start of the taxable year.
5. **Name the owner and put the date on the calendar.** §9.4 mandates monthly monitoring of USD/PHP;
   `RESEARCH-QUEUE.md` §E records that no row in WD4 §4 has an owner. A trigger with no owner is not
   a control. The 24 July 2026 approach to within 0.27% of the existing trigger is the evidence.

**Why not the others.**

- **A (hold P58)** is defensible only as an explicit, documented, dated concession with a stated
  expiry. It is not defensible as an unreviewed default, which is what it currently is. If the
  founders want to hold P58 as a deliberate go-to-market concession for the first three design
  partners, that is a legitimate choice — but it must be written into §14 as a concession with an end
  date, not left standing as a peg.
- **B (reset with a wider band)** is almost right and is the fallback. D is B plus an explicit annual
  cadence, which is what makes it operable by a company that has already demonstrated it will not run
  a monthly monitor.
- **C (USD quoting)** is the only mechanism with zero FX leakage, and it is the wrong instrument for
  this buyer. It also pulls the company inside RMC 12-2024 voluntarily, adding a documented rate
  election, per-invoice BAP capture, and holiday fallback logic to a company that has not yet named a
  regulatory-monitoring owner. The FX leakage it saves is smaller than the compliance and sales
  friction it creates.

**What would change this recommendation.**

| Trigger | New recommendation |
| ----- | ----- |
| Discovery finds buyers who genuinely do not care about intra-year price movement — e.g. they already import in USD and hedge | C becomes viable and D's annual-drift cost is no longer worth paying |
| Realised volatility rises above roughly 10% annualised, or a single month moves more than 5% again as March 2026 did | D's annual reset is too slow. Move to a quarterly reset, keeping PHP quoting |
| Foreign revenue approaches the §8.6 20% threshold | The peg question is subsumed by the BOI/PEZA and multi-currency question and should be reopened whole |
| Counsel confirms a PHP invoice priced off a USD reference is itself a foreign-currency-denominated transaction | D survives but the rate election under RMC 12-2024 becomes mandatory, and the annual reset must align with the taxable year |
| The peso strengthens back below P59 and holds for two quarters | Reset down. The reference is a reference, not a floor. A one-way reference is how P58 became a problem |

---

## 7. EIS timing and the commercial read

This closes **R-05** and re-verifies **A2**.

### 7.1 The covered-taxpayer test, from the primary text

RR 11-2025 Section 3(A) has a **two-track structure** that every secondary summary flattens and that
determines the entire answer. From the BIR's own published digest, reproduced faithfully:

**Track 1 — mandated now, deadline 31 December 2026 per RR 26-2025:**

| Limb | Covered taxpayers |
| ----- | ----- |
| 3(A)(1) | Taxpayers engaged in electronic commerce (e-commerce) or internet transactions |
| 3(A)(2) | Taxpayers under the jurisdiction of the Large Taxpayers Service (LTS) |
| 3(A)(3) | Taxpayers classified as Large Taxpayers under RA 11976 (EOPT) and RR 8-2024 |
| 3(A)(4) | Taxpayers using Computerized Accounting System (CAS), and Computerized Books of Accounts (CBA) with Accounting Records (with electronic invoicing) **and other invoicing software** |

**Track 2 — conditional, not yet mandated:**

> **e.** Upon the establishment by the BIR of a system capable of storing and processing the required
> data to be transmitted to it, the following taxpayers are mandated to issue electronic invoices:
> i. exporters under §106 and §108, except those under 3(A)(4);
> ii. Registered Business Enterprises availing of incentives under §304(D), except those under 3(A)(4);
> **iii. Taxpayers using Point-of-Sales (POS) System; and**
> iv. Other taxpayers as may be required by the Commissioner.

And the timing provision, verbatim:

> Taxpayers covered under Section 3(A)(1) to (3) have a period of one (1) year from the effectivity
> date of these Regulations to comply with the electronic invoicing requirements.
>
> Upon the establishment of a system capable of storing and processing the required data by the BIR,
> all taxpayers covered under Sections 3(A)(5)(i), 3(A)(5)(ii), 3(A)(5)(iii) and 3(A)(5)(iv) and 3(B)
> of these Regulations shall be mandated to comply … **A separate Revenue Regulations shall be issued
> for this purpose.**

Three further primary facts:

- **Micro exemption.** "All taxpayers classified as Micro Taxpayers … shall be exempted from the
  mandatory requirement to use and issue electronic invoice," with voluntary use preserved. In the
  absence of an electronic invoice, Micro Taxpayers issue a registered manual invoice, or may use
  CAS, CRM and POS.
- **What does not count.** "Invoices generated by a CAS, and CBA with Accounting Records (with
  electronic invoicing), Cash Register Machines (CRM), POS System, or other invoicing software and
  subsequently printed on paper for issuance to buyers, **without the capability or readiness to
  electronically report** the sales and invoice data, shall not qualify as electronic invoices.
  Instead, they shall be classified as traditional, manually issued invoices." Having a POS is not
  compliance. Having a POS that transmits is.
- **Branches follow the head office.** "In case the above taxpayers or business activities are
  registered as a Branch Office, the taxpayers' Head Office and all its Branch Offices shall also be
  mandated to issue electronic invoices." One covered head office pulls in every branch.

**A2 re-verified.** RR 26-2025 confirmed; it moved the mandate from 14 March 2026 to 31 December
2026. **One correction to A2's covered-group list**: A2 records "e-commerce (excl. micro), Large
Taxpayers Service (excl. existing EIS pilot users), Ease of Paying Taxes Act taxpayers, and CAS/
electronic-books users." The EOPT limb is not "Ease of Paying Taxes Act taxpayers" generally — it is
taxpayers **classified as Large Taxpayers** under RA 11976 and RR 8-2024, which is a P1,000,000,000
gross-sales test. That distinction is the whole of R-05.

### 7.2 The EOPT classification thresholds, applied to Tier 1

RR 8-2024, effective 27 April 2024, implementing NIRC §21(B) as amended by RA 11976:

| Class | Annual gross sales |
| ----- | ----- |
| Micro | Less than P3,000,000 |
| Small | P3,000,000 to less than P20,000,000 |
| Medium | P20,000,000 to less than P1,000,000,000 |
| **Large** | **P1,000,000,000 and above** |

Now run the Company Document's own reference client through it. §4.5's minimum viable client is
3+ branches and P1.5M+ per month. Taking F-02's per-branch reading, which §7.2 requires:

| Network | Monthly network revenue | Annual gross sales | EOPT class | Caught by 3(A)(3)? |
| ----- | ----- | ----- | ----- | ----- |
| 3 branches × P1.5M | P4,500,000 | P54,000,000 | Medium | No |
| 8 branches × P1.5M (the §7.2 reference client) | P12,000,000 | P144,000,000 | Medium | No |
| 20 branches × P1.5M (§6.4 Enterprise band) | P30,000,000 | P360,000,000 | Medium | No |
| ~56 branches × P1.5M | P84,000,000 | ~P1,008,000,000 | **Large** | **Yes** |

**The Large-taxpayer limb needs roughly 56 branches at the MVC revenue level to bite.** Nothing in
the Company Document's target profile — §4.5, §6.4's bands, §7.2's reference client, §12's roadmap —
gets anywhere near it. Under the network reading of F-02 it is even further away. **Limb 3(A)(3) is
effectively irrelevant to Tier 1.** Limb 3(A)(2), LTS jurisdiction, is a BIR selection that tracks
the same size profile and is equally irrelevant.

So the mandate reaches Tier 1 only through limb 1 (e-commerce) or limb 4 (CAS / CBA / other
invoicing software). Limb 3(A)(5)(iii), the POS limb that would catch everyone, is in Track 2.

### 7.3 Limb 1 is wide, and it is the live one

RR 11-2025 defines e-commerce expansively. Verbatim, the categories that matter here:

> a. E-commerce or online businesses, whether formal or informal, including sale, procurement, or
> availment of physical or digital goods … digital content/products, digital financial services,
> entertainment services, social commerce, on-demand labor and repair services, and property and
> space rentals;
> b. Operation of digital platforms, including e-marketplace platforms;
> c. **Sale and/or lease of goods and services through digital platforms;**
> …
> g. **On-demand Services over the internet, available whenever a customer requests them, rather than
> being provided on a fixed schedule such as, but not limited to, ride-sharing, food delivery,
> grocery delivery, home services (like cleaning or repairs), and streaming entertainment;**
> h. **Transport and Delivery Services contracted through an online platform**, application, website,
> webpage or other similar platform operated by the provider, regardless of whether the provider is
> authorized to engage in e-commerce in the Philippines;
> i. Other form of businesses other than those mentioned above which are conducted online.

### 7.4 R-05 answered, vertical by vertical

| Tier 1 vertical (WD2 §1) | Archetype | Caught by limb 1 (e-commerce)? | Caught by limb 4 (CAS / invoicing software)? | Covered by 31 Dec 2026? |
| ----- | ----- | ----- | ----- | ----- |
| **QSR, café, milk tea, bakery chains** | A | **Yes, in most cases.** Delivery-platform listings (GrabFood, foodpanda) are "sale of goods and services through digital platforms" and "food delivery" under limb (g). Own-app or website ordering is limb (a). PH F&B franchise penetration of delivery platforms is close to universal at 3+ branches | Yes wherever a CAS or CBA with e-invoicing is registered | **Yes — highest confidence of any Tier 1 vertical** |
| **Salons, barbershops, nail spas, waxing** | B | **Sometimes.** Online booking alone is arguably not a sale through a digital platform. Online booking with online payment, or product sales through an online store or a marketplace, is | Yes wherever a CAS is registered — less common at this size | **Conditional.** Depends on whether the network sells or collects online |
| **Derma / aesthetic / wellness clinics** | B | **Often.** These sell product lines and packages, frequently through online stores and marketplaces, and take online deposits. Higher ticket, more likely to have a registered CAS | More likely than salons | **Probable, network by network** |
| **Fitness studios, gyms, boxing / muay thai, dance** | B | **Often.** Online membership and class-pack purchase is a sale of services through a digital platform. Note WD2's own caution that prepaid packages edge toward stored value | Moderate | **Probable where memberships are sold online** |
| **Auto service, lube, tire, car wash chains** | E | **Least likely.** Walk-in and phone-booked, mostly. Online booking without payment probably does not engage limb 1. Parts sold through an online store would | Moderate | **Least likely of the five** |

**The answer to R-05, stated plainly.**

EIS transmission capability is a **near-term commercial wedge for a defined subset of Tier 1, not a
blanket Tier 1 requirement.** Specifically:

- **It is a real, dated, five-months-out obligation** for any Tier 1 prospect that sells or collects
  online — which is most F&B chains at 3+ branches, and a material minority of appointment-led
  networks — and for any prospect with a registered CAS or CBA with electronic invoicing.
- **It is not yet an obligation at all** for a prospect whose only qualifying feature is that it uses
  a POS. That limb is 3(A)(5)(iii), it is conditional on the BIR establishing a system capable of
  storing and processing the data, and RR 11-2025 says in terms that "a separate Revenue Regulations
  shall be issued for this purpose." No such regulation was found (searched: BIR 2026 revenue
  regulations and RMC lists, four practitioner e-invoicing trackers, and three vendor guides dated
  2026).
- **The size threshold does not save them.** The Large-taxpayer limb needs ~56 MVC-sized branches
  (§7.2). Nobody should tell a prospect "you're too small to be covered" — the e-commerce limb has no
  size threshold except the Micro exemption, which no MVC-qualifying franchisor meets.
- **One covered head office covers every branch.** That is what makes it a network-level sale rather
  than a per-site one, and it is the sentence to quote to a franchisor.

**Therefore: a near-term commercial wedge, qualified per prospect, not a year-2 feature.** The
qualifying question is one line and belongs in the WD4 §2.1 discovery script: *"Do you sell or take
payment online in any form — delivery apps, your own site, an online store, online bookings with
deposits?"* A yes converts EIS from a background compliance item into a dated obligation with five
months on the clock. §8.2's phrasing — "EIS transmission capability **where the client is a covered
taxpayer**" — is exactly right in principle and has no test attached to it. This is the test.

### 7.5 What the sale actually is

The mechanics, so the offer is concrete rather than a claim.

| Step | Requirement | Source |
| ----- | ----- | ----- |
| Structured invoice | Issue a system-generated invoice in structured invoice data that can be extracted electronically and readily transmitted. Non-structured formats such as PDF do not qualify | RR 11-2025; Sovos on RR 26-2025 |
| Format | JSON, encrypted | RR 8-2022 |
| Certification | Apply for **EIS Certification ("EIS CERT")**, subject to online verification | RR 8-2022 |
| Permit | Apply for a **Permit to Transmit ("PTT")**. Sales reporting starts the day following PTT issuance | RR 8-2022 |
| Transmission window | Real-time or near real-time, and **in any case within three (3) calendar days from the date of the transaction** | RR 8-2022 |
| Penalty | Imposed for delayed, late, or absent transmission of sales data to the EIS | RR 8-2022 |

Both the EIS CERT and the PTT are **taxpayer-side** applications. That is consistent with §8.1's
doctrine sentence "the client files" and with §8.3's assignment of EIS enrolment to the client. §8.2
commits Axon Enjin to ship the transmission capability. Nothing found requires the software vendor
to hold any EIS authorisation. **This is the cleanest of the three BIR-facing offload arguments** —
cleaner than the pseudo-supplier one (§2.2), which has an unresolved vendor-side obligation.

### 7.6 The commercial hook nobody in the corpus has noticed

RR 11-2025, verbatim:

> All taxpayers required under Section 3(A) and 3(B) of the Regulations, including those taxpayers
> who voluntarily complied … shall be granted the following deduction from their taxable income
> amounting to certain percentage of the total cost for setting up an electronic sales reporting
> system, **in addition to the allowable deduction under Section 34(A)(1)** of the Tax Code:
>
> Micro and Small Taxpayers — **100% of the total cost** for setting up an electronic sales reporting
> system
> Medium and Large Taxpayers — **50% of the total cost** for setting up an electronic sales reporting
> system
>
> The foregoing allowable deduction shall be availed of only once within the taxable year the
> electronic sales reporting system has been completed or final payment has been made. The
> **importation of such electronic sales reporting system shall also be exempt from taxes.**

An additional deduction, on top of the ordinary business-expense deduction, for the cost of setting
up an electronic sales reporting system. Available to voluntary compliers, not just mandated ones.

Worked on the §7.2 reference client — 8 branches, P144,000,000 annual gross sales, therefore a
**Medium** taxpayer at a 25% CIT rate:

| Element | Amount |
| ----- | ----- |
| Implementation fee, §6.5, at 8 branches | P380,000 |
| Ordinary deduction under §34(A)(1) | P380,000 |
| **Additional deduction at 50%** | **P190,000** |
| Cash tax saved by the additional deduction at 25% CIT | **P47,500** |
| Effective reduction in the net-of-tax cost of implementation | **12.5%** |

For a Small taxpayer — under P20,000,000 gross sales, so below the MVC and therefore a waitlist or
Path 5 prospect — the additional deduction is 100% and the effective reduction is 25% at a 20% CIT
rate, or more.

Three caveats stated honestly. First, the deduction attaches to "the total cost for setting up an
electronic sales reporting system," and how much of a broader Axon Enjin implementation qualifies is
a question for the client's own tax adviser, not for Axon Enjin. Second, it is once per taxable year.
Third — and this is a hard rule — **Axon Enjin must never quantify this for a client.** §2.4's
compliance-claim rule and §8's warranty scope both bar it: quantifying a client's tax deduction is
tax advice, and §8.5 clause 1 expressly disclaims warranting the client's own filings and standing.
The correct form is to cite RR 11-2025's deduction schedule in the Readiness Audit deliverable, name
it as a matter for the client's accountant, and stop.

Even so: an entry offer that is a paid audit (§11.1, P95,000) whose deliverable includes a dated,
cited EIS coverage determination and a pointer to a statutory deduction the buyer's accountant has
probably not flagged is a materially stronger P95,000 than "a readiness audit."

---

## 8. What section 8 gets wrong, or does not know

### 8.1 Corrections — things that are stated and are wrong

| # | Where | Stated | Correct position | Consequence |
| ----- | ----- | ----- | ----- | ----- |
| **1** | §15 glossary, AC entry | "AC — replaced the Permit to Use for **CRM/POS and CAS** registration under RMC 5-2021" | RMC 5-2021 concerns **CAS, CBA and components, ESS, middleware and similar systems only.** CRM/POS registration remains a separate regime: the BIR's own **2026 Citizen's Charter** still lists "Applications for Permit to Use (PTU) for Cash Register Machines (CRM), Point of Sale (POS) Machines, and other sales machines," and RMO 24-2023 refers throughout to a "PTU Number and the Date Issued **or** Authority to Generate (ATG)" | Three distinct documents — AC (CAS), PTU (CRM/POS machines), ATG (subscription-based e-invoicing / e-receipting software). The Compliance Pack §8.3 promises must produce the right one. Conflating them produces a client that files the wrong application |
| **2** | §8.6 EWT row | "**10% for corporations**" | 10% only if the corporate payee's gross income is estimated not to exceed **P720,000** **and** it furnishes notarised sworn statement Annex B-3 plus a COR by 15 January or before the first payment. **Otherwise 15%** | The realistic default for a corporate referrer is 15%. Changes the net-of-tax value of the §11.3 referral fee by 5 points of the gross commission |
| **3** | §8.6 EWT row | "Referrer should issue an **official receipt**" | Post-RR 7-2024 (effective 27 April 2024) the **Invoice** is the principal document for services. An Official Receipt is supplementary and must be stamped "not valid for claim of input tax" | Referrers instructed to issue ORs are issuing a document that does not cleanly support Axon Enjin's own deduction |
| **4** | §8.6 EIS row | "RR 11-2025; deadline extended to 31 December 2026 by RR 26-2025. Covered taxpayers transmit within 3 calendar days" | The 3-calendar-day window is **RR 8-2022's**, not RR 11-2025's. RR 8-2022 is also the source of the EIS CERT and the PTT | The document cannot cite the rule it relies on. Cite RR 8-2022 for the window, RR 11-2025 for coverage, RR 26-2025 for the date |
| **5** | §8.7 opinion 1 | "OPS under Circular 1049, **or** MPAA under Circular 1198?" | Not alternatives. Circular 1198 covers "**OPS** engaged in or intending to engage in MPAA." MPAA presupposes OPS status. The test is the three-step sequence at §3.2 | Reframing the question makes it answerable and should reduce, not raise, the P80,000–120,000 estimate |
| **6** | §8.3 | "The pseudo-supplier mechanism **is the legal basis for the offload**" | Half true. It correctly identifies who registers the installed system, including in the cloud/subscription case (RMC 68-2015 item 6). It does **not** address RMC 68-2015 item 1, which imposes accreditation on the "developer / distributor / dealer / supplier-vendor" independently, prior to selling, distributing or using | The offload argument as written is stronger than the text supports. §8.7 opinion 2 is correctly identified as critical and the expected answer is closer to "not automatically" |

### 8.2 Omissions — things that are true, load-bearing, and absent

| # | Missing | Where it belongs | Why it matters |
| ----- | ----- | ----- | ----- |
| **1** | **RMO 9-2021's franchisee rule:** affiliated companies, sister companies, **franchisees** and related companies must each register the System at their own RDO, "regardless of whether these companies are sharing servers and using exactly the same 'System'" | §8.3, §6.5, §9.1 | The single most operationally consequential BIR provision for this business. Multiplies the Compliance Pack by the number of franchisee taxpayers. Gives the P25,000/branch implementation increment a regulatory derivation, which is what F-06 says is missing |
| **2** | **RMC 68-2015 item 6's build requirement:** cloud/subscription taxpayer-users must provide "storage and backup of all required data including authorized access(es) for BIR Revenue Officers which shall be locally available for audit purposes" | §8.2 non-negotiable build list | A compliance-by-design requirement of the same character as the six listed. Failing it produces the exact failure §8.2 warns about |
| **3** | **RMO 24-2023 excludes CAS from the accreditation regime**, and the AC route (RMC 5-2021 / RMO 9-2021) has no demo, no pre-evaluation and a 3-working-day turnaround, while the accreditation route treats every version upgrade as presumptively a major enhancement requiring reaccreditation | §8.4, §14 "regulated modules" row | Turns "integrate, don't build" from a risk judgement into a costed architectural rule: **do not generate the principal Invoice.** Register the layer as a CAS or CAS component |
| **4** | **BSP Circular 1238** (17 Jun 2026), **M-2026-030** (24 Jun 2026), **M-2026-039** (17 Jul 2026) | §8.7 opinion 1 brief; §9.4 BSP row | Three instruments post-dating the document's evidence base. M-2026-030's five-factor substance test and M-2026-039's mandatory self-assessment are directly on the perimeter question |
| **5** | **NPC Circular 2022-01 administrative fines:** 0.5–3% of annual gross income for grave infractions, 0.25–2% for major, P50,000–200,000 for other, capped at P5,000,000 per act | §8.6 Data Privacy row | The document cites the criminal ceiling and misses the turnover-linked administrative regime, which is the regulator's actual instrument and the binding exposure at Axon Enjin's scale |
| **6** | **Axon Enjin's own DPO and its own NPC filing.** §8.3 assigns NPC registration and the DPO to the client. Under §8.4 row 1 Axon Enjin is a PIP for ordinary operational data. PIPs are within NPC Circular 2022-04's registration triggers, and below-threshold entities file a Sworn Declaration and Undertaking | §8.3, §9.3 | The compliance doctrine is written entirely about the client. Axon Enjin has its own obligations and no named owner for them |
| **7** | **Axon Enjin is probably itself a covered taxpayer under RR 11-2025 §3(A)(1).** It sells digital services over the internet. Unless it is a Micro taxpayer it must issue structured electronic invoices by **31 December 2026** — the same deadline it intends to sell against | §8.6, §12 roadmap | Selling EIS readiness while not being EIS-ready is the most avoidable credibility failure available. It is also five months out |
| **8** | **RR 11-2025's additional deduction:** 100% of the setup cost for Micro/Small, 50% for Medium/Large, on top of the §34(A)(1) deduction, plus import-tax exemption, available to voluntary compliers | §11.1 Readiness Audit deliverable | A citable statutory reason for the buyer to act now rather than in Q4. Must be cited, never quantified for the client (§7.6) |
| **9** | **RR 4-2024:** the withholding obligation arises when income becomes payable — due, demandable, accrued, recorded, or invoiced, whichever is first — and **Form 2307 is due by the 20th day of the month following the close of the taxable quarter**, or simultaneously with payment on request. Plus the payor's own Annex C sworn declaration | §8.6, §11.3 | The referral programme's tax workflow is stated in one line and has at least four moving parts |

### 8.3 Structural observations, not defects

1. **§8.1's three doctrine sentences are good and they survive scrutiny.** "The software is compliant
   by design," "the client files," "money never moves through our system" are each supported by the
   primary sources — with the qualification at §2.2 on sentence 2 and the reframing at §3.2 on
   sentence 3. The doctrine is not the problem; the citation layer under it is thin in places and
   wrong in six.
2. **§4.6's one-line test is the wrong test, though it reaches the right answer.** "If money would
   move *through* our system rather than *past* it" is a fund-custody test. The BSP's test is
   function-and-name (§3.2) with a five-factor substance overlay (§3.6.2). Fund custody is one of the
   five factors. Keeping the one-liner as a mnemonic is fine; it should not be the basis of the
   self-assessment M-2026-039 requires.
3. **§8.5's belt-and-braces DPA clause is right and should not be softened** while §4.5 has no
   authority either way. What it needs is an operational control — a logged, time-boxed,
   client-approved break-glass procedure — so that "true operationally" is evidenced.
4. **§9.4's cadences are defensible; the absence of owners is not.** Monthly for BIR issuances,
   quarterly for BSP, quarterly for NPC would have caught everything in this document except
   M-2026-039, which is 17 days old. §9.3 puts the regulatory-monitoring owner at day 30 and
   `RESEARCH-QUEUE.md` §E records that no row has one. §6.1 also bundles regulatory updates into
   Core as a paid entitlement, which makes lateness a misrepresentation rather than an oversight.
5. **§8.7's three opinions are the right three.** Opinion 1 needs reframing (correction 5) and should
   get cheaper. Opinion 2 is correctly the second priority and the primary text points against the
   document's assumption (§2.2). Opinion 3 is correctly scoped and there is genuinely no authority
   either way (§4.5). The second-wave FX item is now largely answered (§6.3) and should be narrowed
   to one question.

### 8.4 New flags this pass would raise

Not applied — the orchestrator applies. Listed so they are not lost.

| Proposed | Severity | Substance |
| ----- | ----- | ----- |
| **F-27** | High | Every version upgrade is presumptively a major enhancement requiring reaccreditation under RMO 24-2023. If any Axon Enjin module generates the principal Invoice, the product release cadence runs through the BIR. §14's "integrate, don't build" mitigates it but is stated as a 12-month decision, not an architectural rule |
| **F-28** | High | RMO 9-2021 requires each franchisee taxpayer to register the System at its own RDO regardless of shared servers and identical software. The implementation fee and the Compliance Pack are both priced per client, not per registering entity |
| **F-29** | High | Axon Enjin is likely a covered taxpayer under RR 11-2025 §3(A)(1) and faces the same 31 December 2026 deadline it intends to sell against. No line in §8, §9 or §12 addresses the company's own EIS readiness |
| **F-30** | Medium | §8.6 understates corporate EWT on referral commissions (10% stated; 15% is the realistic default) and instructs referrers to issue a document class superseded in April 2024 |
| **F-31** | Medium | Three BSP instruments issued in June–July 2026 — Circular 1238, M-2026-030, M-2026-039 — post-date the document's evidence base and bear directly on §8.7 opinion 1. M-2026-030 makes customer-facing marketing language a factor in the perimeter assessment, which makes it a §2.4 voice rule |
| **F-32** | Medium | §8.6's Data Privacy row cites the criminal ceiling and omits NPC Circular 2022-01's turnover-linked administrative fines, which are the regulator's operative instrument |
| **F-33** | Low | The P3,000,000 VAT registration threshold sits on a live EOPT CPI-indexation mechanism with demonstrated BIR willingness to use it (RR 1-2024, housing). It needs its own §9.4 row and a date stamp, not a constant |

---

## 9. Contradictions — preserved, not resolved

**C1 — The issuance date of RR 26-2025.** KPMG, Comarch, Aureada Law and several trackers date it
**5 September 2025**. PwC Philippines titles its Tax Alert No. 29 "*Revenue Regulations (RR) No.
26-2025 dated 16 October 2025*". Both are expert-tier. Plausible reconciliation: signed 5 September,
dated or published 16 October. Not resolved because the primary PDF on the BIR CDN is a scanned image
with no text layer and could not be read in this session. *Open question: which date governs for
computing any period reckoned from the issuance?* Low decision impact — the deadline is a fixed
calendar date either way — but it is the kind of small unresolved fact that undermines a citation set
in front of counsel.

**C2 — Does the 31 December 2026 deadline bind POS-only taxpayers?** This is the highest-impact
contradiction in this document. RR 26-2025 amends **Section 14, Transitory Provisions**, and the
amended list as reproduced by Tax and Accounting Center, Sovos and Aureada Law contains **eight**
categories, expressly including "POS System users" and "other taxpayers as designated by the
Commissioner," all given until 31 December 2026. But RR 11-2025 **Section 3(A)(5)** still conditions
the substantive mandate for those same categories on the BIR "establishing a system capable of
storing and processing the required data," and says "a separate Revenue Regulations shall be issued
for this purpose." A transitory provision cannot create a mandate that the coverage provision makes
conditional — but it is drafted as though it does.

- **Reading A (transitory provision governs):** every POS-using franchisor in Tier 1 must be
  e-invoicing by 31 December 2026. EIS readiness is a blanket Tier 1 wedge with five months on the
  clock, and it is the largest single commercial opportunity in the next two quarters.
- **Reading B (the §3(A)(5) condition survives):** the deadline binds limbs 1–4 only. The wedge is
  targeted per §7.4, and the POS limb is a year-2 feature awaiting a separate RR.

The professional consensus in the sources read leans to Reading B — Reyes Tacandong, PwC and Grant
Thornton all treat the POS limb as conditional — and §7 of this document adopts B as the operative
read. **It is not settled.** *Open question, and it should be one line in the §8.7 brief: does the
amended Section 14 of RR 11-2025 impose a 31 December 2026 obligation on taxpayers whose coverage
under Section 3(A)(5) remains conditional?* A single-paragraph BIR ruling request would settle it, and
the commercial value of the answer is large in one direction.

**C3 — USD/PHP all-time high and the record-low chronology.** Trading Economics (tier: web) reported
in one retrieval "an all time high of 62.86 in January of 2026" and in another, the same day, "All-time
high of 63.19 reached in April 2026." The 255-observation ECB series shows a 12-month maximum of
**61.835 on 24 July 2026** and no observation above 62 at any point. Inquirer Business (tier:
journalistic) reports a sequence of successive record lows — 59.38 in early January 2026, past 61 in
April, and a "fresh record low" in the week of 24 July with a close of 61.847. The Inquirer sequence
is internally consistent and consistent with the ECB series; the Trading Economics figures are not
consistent with either, or with each other. *Open question: do the 62.86 / 63.19 figures reflect
intraday spikes on a different fixing, a different series, or an error?* **For any decision in this
document the ECB series governs and the aggregator figures are not used.** Flagged because F-01 cites
Trading Economics as one of three FX sources.

**C4 — The 52-week range.** One aggregator retrieval gave "52.10 to 61.923." The ECB series gives
**56.648 to 61.835**. A 52.10 print would be a 12-year high for the peso and is not corroborated by
any other source, including the same aggregator's own commentary that the peso is down 6.24%
year-on-year. Treated as an error. *Open, but only nominally.*

**C5 — Accreditation validity period.** RMC 68-2015 item 4 states five years from issuance of the
Certificate of Accreditation, renewable on application within 60 days before expiry. A
machine-generated summary of the RMO 24-2023 digest asserted three years. The primary RMO 24-2023
digest text, read directly, states **no** validity period — only that accreditations granted before
its effectivity "is still valid until its expiration or if such 'Sales Machines/Software' have
undergone enhancement." *Open question: did RMO 24-2023 change the five-year term, leave it, or is
validity now event-driven rather than time-driven?* Matters for change-control budgeting if Axon
Enjin ever enters the accreditation regime. The three-year figure is **not** used anywhere in this
document.

**C6 — Is a POS-software vendor that never holds funds an OPS?** Set out in full at §3.5, with four
arguments each way. The BSP FAQ says payment gateways "may be part of the scope if they perform
operator functions"; the service-provider carve-out says only where the entity acts "in its own name
and not merely as an incident of the services that it provides to an OPS"; the MPAA definition sweeps
in "providing the means to accept various payment instruments and collect, secure, transmit and
process payment information" without requiring fund custody; and the published register of 314 OPS
contains no entity presenting as a POS-software vendor, including StoreHub. *Open question, and it is
§8.7 opinion 1 restated properly.* **Not resolvable from public sources.** The absence of a POS
vendor from the register is consistent with a narrow perimeter, with routing through a licensed
partner in that partner's name, with registration under a different corporate name, and with
non-compliance. It does not discriminate between them.

**C7 — Does "client-hosted, no production data access" exit PIP status?** §4.5. The definition of
Personal Information Processor is functional and access-agnostic; "processing" is defined extremely
broadly; and **no NPC circular, advisory or decision addressing the question was found.** *Open
question, no authority either way.* §8.7 opinion 3 should not be dropped, and §8.5's belt-and-braces
drafting should not be softened.

**C8 — FX forecast dispersion.** Fitch/BMI, via Trading Economics commentary, forecasts a **P61–63
range through 2026**. A separate August-specific forecast puts the range at **P62.27–63.98**.
CoinCodex (tier: web, lowest) projects **P66.42 by end-2026**. All three imply the P62 trigger fires
this year; they disagree about whether it fires by a little or by a lot. *Open question: is the
post-March 2026 plateau a new equilibrium or a way-station?* The recommendation at §6.5 is
deliberately built to work under all three — an annual reset with a volatility-scaled review trigger
does not require the forecast to be right.

---

## 10. Sources by tier

All retrieved 3 August 2026 unless otherwise noted.

### Primary — the instrument, or the issuing agency's own digest, FAQ or register

**BIR**

- RMC 68-2015, *Accreditation of CRM / POS Machines and Other Sales Machines/Receipting Software at
  the BIR National Office Level*, 1 Aug 2015 — full text.
  `https://web-services.bir.gov.ph/annual_reports/annual_report_2015/images/Revenue Issuances/Revenue Memorandum Circulars/RMC No 68-2015.pdf`
- RMC 5-2021, *Simplified Policies on the Application for Registration of CAS, CBA and/or its
  Components, including the ESS, Middleware and Other Similar Systems*, 28 Dec 2020 — full text.
  `https://bir-cdn.bir.gov.ph/local/pdf/RMC No. 5-2021 (1).pdf`
- RMO 9-2021 digest, 19 Feb 2021. `https://bir-cdn.bir.gov.ph/local/pdf/RMO No. 9-2021_Digest.pdf`
- RMO 24-2023 digest, 26 Jun 2023. `https://bir-cdn.bir.gov.ph/local/pdf/RMO No. 24-2023 Digest FINAL.pdf`
- RR 11-2025 digest, 27 Feb 2025. `https://bir-cdn.bir.gov.ph/BIR/pdf/RR 11-2025 Digest.pdf`
- RR 26-2025 — `https://bir-cdn.bir.gov.ph/BIR/pdf/RR No. 26-2025.pdf` (scanned image, **no text
  layer, could not be read**; content taken from expert-tier sources, see C1)
- RMC 12-2024, *Treatment of foreign currency transactions for financial reporting and internal
  revenue tax purposes*, 22 Jan 2024 — full text.
  `https://bir-cdn.bir.gov.ph/BIR/pdf/RMC No. 12-2024 Final.pdf`
- RR 11-2018 digest, 15 Mar 2018. `https://bir-cdn.bir.gov.ph/local/pdf/Digest RR 11-2018.pdf`
- RR 1-2026 digest, 16 Feb 2026 (checked, **not relevant** — RBE VAT on local sales under §295(D)).
  `https://bir-cdn.bir.gov.ph/BIR/pdf/RR No. 1-2026 Digest FINAL.pdf`
- BIR Citizen's Charter, 2026 1st Edition (confirms PTU for CRM/POS still exists).
  `https://bir-cdn.bir.gov.ph/BIR/pdf/BIR Citizen's Charter (2026 Edition) final.pdf`
- RR 8-2022, 30 Jun 2022 — located, content taken from expert-tier commentary.
  `https://bir-cdn.bir.gov.ph/local/pdf/RR 8-2022.pdf`

**BSP**

- BSP FAQs on Registration of Operators of Payment Systems, as of 6 May 2021 — full text.
  `https://www.bsp.gov.ph/PaymentAndSettlement/FAQ_OPS_Registration.pdf`
- BSP FAQs on Circular No. 1198 (Regulatory Framework for MPAA), 9 Dec 2024 — full text.
  `https://www.bsp.gov.ph/Regulations/Issuances/2024/1198 - FAQ.pdf`
- BSP Circular No. 1198, s. 2024. `https://www.bsp.gov.ph/Regulations/Issuances/2024/1198.pdf`
- **BSP Circular No. 1238, s. 2026, 17 Jun 2026** — full text.
  `https://www.bsp.gov.ph/Regulations/Issuances/2026/1238.pdf`
- **BSP Memorandum M-2026-030, 24 Jun 2026**, *Arrangements Involving Regulated Electronic Money
  Activities* — full text. `https://www.bsp.gov.ph/Regulations/Issuances/2026/M-2026-030.pdf`
- **BSP Memorandum M-2026-039, 17 Jul 2026**, *Guidelines on the Registration of OPS* — full text.
  `https://www.bsp.gov.ph/Regulations/Issuances/2026/M-2026-039.pdf`
- BSP Memorandum M-2026-025 and M-2026-026, Jun–Jul 2026 (Circular 1238 fee moratorium and FAQs).
- BSP Circular No. 1215, s. 2025 (AFASA temporary holding of funds — checked, **not relevant**).
  `https://www.bsp.gov.ph/Regulations/Issuances/2025/1215.pdf`
- BSP *List of BSP-Registered Operator of Payment System* — **314 registrations**.
  `https://www.bsp.gov.ph/paymentandsettlement/cor.pdf`

**NPC and statute**

- RA 10173, Data Privacy Act of 2012 — penalty provisions §§25–36.
  `https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html`
- RA 11937 (checked to disprove a web-tier claim — citizenship act, not a DPA amendment).
  `https://lawphil.net/statutes/repacts/ra2023/ra_11937_2023.html`
- NPC Circular 2022-04 — located; content taken from the NPC announcement and expert-tier sources
  (direct PDF returned HTTP 403). `https://privacy.gov.ph/wp-content/uploads/2023/05/Circular-2022-04-1.pdf`
- NPC announcement, *NPC implements registration fees and charges, and submission of Sworn
  Declaration and Undertaking for Exemption from Data Processing System Registration.*

**FX data**

- ECB reference rates via the Frankfurter API. Daily USD/PHP, **255 observations,
  1 Aug 2025 – 31 Jul 2026.** `https://api.frankfurter.dev/v1/2025-08-01..2026-08-03?base=USD&symbols=PHP`
  All statistics in §6.1 computed locally from this series.

### Expert — named firm of record

- PwC Philippines — Tax Alert No. 29 (RR 26-2025); *Paperless invoicing and sales reporting*
  (RR 11-2025); *Soon taking effect: the 12% VAT on digital services*; Tax Alert No. 12 (RMC 47-2025);
  *New taxpayer classifications under the Ease of Paying Taxes Law*; *Compliance change on invoicing
  under EoPT*; *CREATE MORE: a better version of the CREATE law*.
- KPMG Philippines / KPMG US TaxNewsFlash — *Philippines e-invoicing compliance deadline extended*;
  *In CAS you missed it*; Special InTAX issues; *Philippines: guidance clarifying VAT on digital
  services* (Jun 2026).
- Grant Thornton Philippines — *Point-of-Sale software challenges in BIR's digitalization era*;
  *Regulatory framework for Merchant Payment Acceptance Activities*; *Creation of the MORPS*;
  *The CREATE MORE Act (RA 12066)*; *Clarifications on the imposition of VAT on Digital Services*
  (RMC 59-2026, 2 Jun 2026); *Clarification on the invoicing requirements per RR 7-2024 as amended by
  RR 11-2024*; *New rules for the tax treatment of foreign currency transactions* (RMC 12-2024);
  *EOPT is here: revised rules on taxpayer classification*.
- Reyes Tacandong & Co. — *BIR Issuances: RR No. 11-2025*; *RMC 12-2024*; *RR 3-2024*; RT ThinkTax
  July 2023 (RMO 24-2023).
- Forvis Mazars Philippines — *Withholding taxes in the Philippines*; *BIR RMC 12-2024*;
  *BIR RR 03-2025*; *BIR RM 09-2021*.
- Baker McKenzie / Global Compliance News / InsightPlus — *Philippine Central Bank issues regulatory
  framework for payment systems engaged in MPAA*; *NPC circular on registration of DPOs and Data
  Processing Systems*; *Administrative fines for data privacy infractions from 27 August 2022*;
  *NPC implements schedule of registration fees*.
- DLA Piper, *Data Protection Laws of the World* — Philippines: registration, and law.
- Ocampo & Suralvo Law Offices — *NPC releases guidelines on administrative fines*; *BIR prescribes
  policies for §237 / §237-A through the EIS*; RR 8-2024 note.
- Aureada Law — *BIR extends compliance period for electronic invoicing*; *Understanding the BIR
  Electronic Invoicing System (EIS)*.
- Sovos — *Philippines: deadline for mandatory structured e-invoicing extended.*
- Tax and Accounting Center Inc. — RR 26-2025 (amending text of Section 14); RA 12066 overview;
  RR 3-2024.
- 8box Solutions — RMO 24-2023 and RMC 5-2021 notes.
- eLegal Philippines — *BSP issues merchant payment rules*; *BSP issues governance standards for
  Operators of Payment System.*
- Vixio — *Philippines introduces new licence requirement for merchant acquirers.*

### Journalistic — named outlet with a dateline

- **BusinessWorld Online, 31 July 2026** — *BSP sets three-phased evaluation process for payment
  system operators' registration.* The lead that produced M-2026-039. Article body returned HTTP 403;
  content taken from search-result extracts and then **confirmed against the primary memorandum**.
- BusinessWorld / Bloomberg, 24 July 2026 — *Philippine peso falls to fresh record low vs US dollar.*
- Bloomberg, 28 July 2026 — *Philippines intervened in small way to defend peso, BSP Governor says.*
- Inquirer Business — *Peso sinks past 61 vs $1, a new record low*; *Peso hits new record low vs $1;
  62 in sight.*
- Diskurso PH, 28 April 2026 — peso at P61.30.
- Philippine News Agency — *BIR extends e-invoicing deadline to December 2026*; *Palace: BSP to
  stabilize peso, curb excessive volatility*; *Payment system operator urged to register with BSP.*
- Manila Bulletin — *NPC sets admin fines vs data privacy infractions*; *BSP issues guidelines for
  merchant payment application.*
- Metrobank Wealth Insights — *Peso dips to record as oil surges, fails to hit P60 as BSP intervenes.*
- SunStar — *Tax Notes: BIR accreditation of sales machines*; *BIR clarifies treatment, conversion of
  foreign currency transactions.*

### Web — lowest tier, used only where nothing better exists

- Trading Economics — Philippine peso quote and commentary; currency forecast. **Contradicted by the
  ECB series on the all-time high and the 52-week range. See C3 and C4.**
- CoinCodex — USD/PHP forecast. Used only to show forecast dispersion in C8.
- Taxumo, ClearTax PH, RTC Suite, LedgerQ, Comarch, EDICOM, Banqup, e-invoice.app, CloudCFO,
  Acclime, Emerhub, Orkids, MPM, QNE, DV Consulting — e-invoicing and VAT explainers, used only for
  corroboration of dates and never as the sole support for a proposition.
- **recordinglaw.com** — *Philippines Data Privacy Laws: RA 10173 & NPC Guide (2026).* **Published a
  false statement of law** (RA 11937 as a DPA amendment). Recorded at §4.6 as a warning, not used as
  a source.

### Internal corpus consumed

- `AXON ENJIN Document.md` — Company Document §4.5, §4.6, §5, §6 preamble, §8.1–8.7, §9.1–9.4, §13,
  §14, §15; WD2 §1–3; WD4 §2.2, §2.3, §3, §4.
- `FLAGS.md` — all 26 flags. Directly engaged: F-01, F-02, F-06, F-08, F-13, F-15.
- `RESEARCH-QUEUE.md` — A1–A9, B (R-01..R-06), C (R-07..R-09), D1–D3, E, F.
- `README.md` — precedence rule and repository index.
- `research/pillar-01-price-architecture.md` — output contract and house style.

---

## End-to-End Session Review

### What I searched and why

Fourteen web searches and roughly thirty document retrievals, in four waves.

**Wave 1 — BIR receipting and accreditation.** Went straight for primary text on RMC 5-2021,
RMO 9-2021, RMC 68-2015, RMO 24-2023. Two of the four primary PDFs would not render through the
fetch tool, so I downloaded them with `curl` and converted them locally with `pdftotext`. That was
the single highest-yield decision in the session: the verbatim pseudo-supplier text, the cloud
provision at item 6, the franchisee rule in RMO 9-2021, and the "version upgrades are major
enhancements" sentence all came from primary PDFs that summarisation had flattened or, in one case,
fabricated around. A machine-generated summary of the RMO 24-2023 digest gave me a three-year
validity period and a 30–45-day processing time, both absent from the actual text. That is why C5
exists.

**Wave 2 — BSP.** Search does not index BSP issuances usefully. After a BusinessWorld headline
mentioned a new OPS registration memorandum with no number, I enumerated the BSP 2026 memorandum
series by document number over HTTP and read the subject line of each. That found M-2026-039 (the
memorandum the article described), M-2026-030 (the substance-over-form test, which no search
surfaced), and the reference to Circular 1238 inside M-2026-025 and M-2026-026. Three material
instruments the Company Document does not know about, found by brute-force enumeration rather than by
search. I would use that technique again on any regulator whose issuances are numbered sequentially
and published at a predictable URL.

**Wave 3 — data privacy and tax.** Mostly conventional. The useful move was checking RA 11937
against lawphil after a search result asserted it amended the DPA. It does not; it grants citizenship
to a basketball player. That one check prevented a false statement of law from entering the
deliverable, and it is recorded at §4.6 because the same source ranks highly and the next researcher
will hit it.

**Wave 4 — FX.** I refused to build a series from aggregator snapshots after two Trading Economics
retrievals on the same day gave two different all-time highs, neither consistent with the third. I
pulled 255 daily observations from a public API and computed everything locally. That produced the
March 2026 step change, the 6.16% annualised volatility, and the fact that in a full year the rate
touched neither trigger — none of which is visible in a spot quote, and the last of which is the
sharpest fact in the FX section.

### What worked

- **Primary text over summaries, without exception.** Four of the six §8.1 corrections and six of
  the nine §8.2 omissions exist only because I read the instrument instead of a note about it. The
  franchisee rule in RMO 9-2021 (§2.4) appears in no secondary source I read, and it is arguably the
  most commercially consequential finding in this document.
- **Enumerating BSP memoranda by number.** Found three instruments search would not surface.
- **Local `pdftotext` as the fallback.** Six primary documents were only readable this way.
- **Computing FX statistics rather than quoting them.** Turned F-01 from an assertion into a
  measurement, and corrected its trigger-distance figure by a factor of five.
- **Treating the two-track structure of RR 11-2025 §3(A) as the whole question.** Every secondary
  source flattens the limb structure into a list. R-05 is unanswerable from the flattened version and
  straightforward from the primary.

### What was thin

- **RR 26-2025's own text.** The BIR's PDF is a scanned image with no text layer and no OCR was
  available in this environment. Everything about RR 26-2025 in this document — including the amended
  Section 14 list that drives contradiction C2, which is the single highest-value open question here
  — rests on expert-tier reproductions rather than on the instrument. **Verify C2 against the
  instrument or a BIR ruling before acting on it commercially.**
- **The OPS perimeter is reasoned, not authoritative.** §3.5 is my construction from a definition, a
  carve-out sentence in an FAQ, an FAQ answer about related parties, a five-factor test in a
  memorandum, and a negative inference from a register. It is a good brief for counsel. It is not an
  opinion and must not be quoted to a client as one.
- **NPC fee amounts: not found.** Six sources, none states them.
- **VAT threshold indexation: not found either way.** I established the mechanism is live and that
  the BIR uses it elsewhere, and could not establish whether it has been applied to the general
  registration threshold for 2026. Stated as a monitored figure rather than guessed.
- **RMC 59-2026 not read line by line.** Two months old, the only 2026 VAT issuance found that could
  touch a resident SaaS seller's reporting, and I have only Grant Thornton's announcement of its
  existence and subject. Read it before the next VAT filing.
- **RMC 40-92 not read.** Only engaged if FX-denominated payments subject to withholding arise.
- **Sector-specific licensing not touched.** §8.3 row 5 lists FDA, DOH, TESDA, LTO, PDEA, DOT and
  PNP-SOSIA. All client-side, none verified here. WD2's per-vertical licensing column is unaudited.
  Out of scope for this sub-agent, and it is a real gap in the chain.

### Sources not reached

- BusinessWorld, 31 July 2026, on the OPS registration guidelines — HTTP 403 on the article body.
  Mitigated: I found and read the primary memorandum instead.
- PwC Philippines Tax Alert No. 29 and *Paperless invoicing and sales reporting* — HTTP 403. This is
  why C1's date question stays open; PwC's is the source asserting 16 October 2025.
- Rappler, *Ask the Tax Whiz* on the e-invoicing regulation — HTTP 403.
- NPC Circular 2022-04 and the NPC Schedule of Fees PDFs — HTTP 403 on both.
- RR 26-2025 primary PDF — retrieved, but a scanned image with no text layer and no OCR available.
- BusinessWorld, 26 April 2026, on franchising growth slowing on Persian Gulf exposure — still 403,
  as `RESEARCH-QUEUE.md` already records. I did independently corroborate the underlying oil shock
  through the FX reporting (§6.1), which raises confidence in the headline without confirming it.
- BSP MORPS consolidated text (updated December 2025) — located but not read. Sections 502, 503 and
  903.1 are cited here through Circular 1198, Circular 1238 and M-2026-030 rather than from the
  Manual itself.

### What a skeptical reader should challenge first

**1. Contradiction C2, and everything in §7 that depends on it.** My operative reading — that the
31 December 2026 deadline binds limbs 1–4 and not the POS limb — matches the professional consensus
in the sources I read, and it is the reading a lawyer would probably defend. But it is a reading of an
instrument I could not open, and the alternative reading changes R-05 from "a targeted wedge" to
"the largest commercial opportunity in the next two quarters." **If one thing in this document gets
re-checked, make it this.**

**2. Every vertical judgement in §7.4.** The e-commerce limb columns are my inference from a
regulatory definition applied to a business-model description, not survey data. "Yes, in most cases"
for QSR rests on an assumption about delivery-platform penetration among 3+ branch PH franchise
networks that I did not source. The right way to resolve it is to ask the question in discovery, per
§7.4, not to trust my column.

**3. §3.5's four-argument balance.** I have tried hard to give both sides their strongest form, and I
am aware that a reader who wants the answer "outside" will read §3.2's carve-out sentence as
dispositive. It is not. It is one sentence in an FAQ dated 6 May 2021, and M-2026-030 (June 2026)
adds a factor — customer-facing representations — that no 2021 FAQ anticipated. **The direction of
travel in BSP's 2026 issuances is toward substance over form, which is the direction that makes a
software vendor's position harder, not easier.**

**4. §6.5's specific numbers.** P61.50 as the reference, +4% / −6% as the trigger, annual as the
cadence. The *mechanism* is well-grounded. The *parameters* are judgement calls sitting on 6.16%
realised volatility and one 12-month sample that contains a single regime break. Someone with a real
view on oil should override the +4%.

**5. §7.6's worked deduction example.** P47,500 of cash tax saved is arithmetically correct on the
assumptions stated and is **not a tax opinion.** How much of an Axon Enjin implementation is "the
total cost for setting up an electronic sales reporting system" is genuinely uncertain, and the
answer belongs to the client's accountant. If this number ever appears in a client-facing document
without that qualification, §2.4's compliance-claim rule has been breached.

**6. My characterisation of §8.3 as "half true."** A reader could reasonably say I have overread
RMC 68-2015 item 1 — that "developers / distributors / dealers / supplier-vendors" is aimed at
machine vendors and off-the-shelf software resellers, not at a bespoke software house building for
one client. That is a fair argument. It is also exactly what §8.7 opinion 2 is for, and I have not
resolved it. What I am confident of is narrower: the primary text does not support the
document's confident phrasing, so the phrasing should soften pending the opinion.

### If I had more time

1. **OCR RR 26-2025** and read the amended Section 14 verbatim. Closes C2, which is the highest-value
   open item in this document.
2. **Read RMC 59-2026 in full** and determine whether a PH-resident SaaS seller has new reporting or
   registration obligations. Two months old and directly on Axon Enjin's own tax position.
3. **Read the MORPS consolidated text**, sections 502, 503 and 903.1, and the FAQs at M-2026-026,
   rather than relying on circulars and firm commentary.
4. **Cross-reference the BSP OPS register against the PH POS and restaurant-tech vendor set by name**
   — StoreHub, Loyverse, Foodics, IREL, Enterprise-grade PH vendors, and the local vendors WD4 §3
   item 1 asks for. If several appear, C6 tilts toward "inside" and §4.6 needs rewriting rather than
   restating. If none do, the negative inference strengthens. Either way it is a two-hour job with a
   large decision payoff.
5. **Verify whether the BIR has established the EIS "system capable of storing and processing the
   required data"** that Track 2 is conditioned on. If it has, the separate RR is imminent and the
   POS limb activates — which would make EIS a blanket Tier 1 wedge in 2027 regardless of how C2 is
   resolved.
6. **Get the NPC fee schedule amounts** from the NPCRS portal.
7. **Audit the WD2 per-vertical licensing column** (FDA, DOH, TESDA, LTO, PDEA, DOT, PNP-SOSIA)
   against the actual regulators. It is an unaudited claim set inside a document that will be shown
   to clients.

### Self-rated confidence

**High** on: the BIR receipting and accreditation chain (§1.1, §2) — read from primary text.
The BSP instrument inventory including the three 2026 additions (§1.4, §3.6) — read from primary
text. The FX evidence base (§6.1, §6.2) — 255 observations, computed locally. R-04 (§6.3) — the
governing circular read in full. The DPA penalty tables (§4.3). The EWT correction (§5.3) — read from
the BIR's own digest.

**Medium** on: R-05 and §7 — the primary coverage text is solid, but the operative reading depends on
C2, which rests on an instrument I could not open, and the per-vertical judgements are inference.
The OPS perimeter analysis (§3.5) — well-sourced reasoning, no authority. The VAT threshold status
(§5.2) — a well-characterised gap rather than a finding.

**Low** on: nothing asserted as a finding. The three low-confidence items are named as gaps: the NPC
fee amounts (not found), any NPC authority on the PIP exit (not found, and probably does not exist),
and whether any POS vendor has been assessed as an OPS (not found).

### Handoff, in one paragraph

The rate card can be repriced now: the FX evidence is complete, R-04 is settled, and the peg
mechanism is recommended with its falsifiers stated. Section 8 needs six corrections and nine
additions, all specified with sources. Three BSP instruments from June and July 2026 must go into the
§8.7 brief before counsel is engaged, and opinion 1 must be reframed as a three-step test — which
should make it cheaper, not dearer. The EIS wedge is real but must be qualified per prospect with one
discovery question, and the one thing that could make it much bigger is contradiction C2, which needs
the instrument itself. And the single most commercially useful sentence found in this session is in a
five-year-old BIR memorandum order: franchisees must each register the system at their own RDO, even
on shared servers with identical software. That is the regulatory derivation the implementation fee
has been missing.
