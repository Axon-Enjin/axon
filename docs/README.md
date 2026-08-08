# Axon Enjin — Documentation

Strategy, pricing, and commercial-research repository for **Axon Enjin**, a hybrid venture studio and technology operating company based in Metro Manila, Philippines.

**Last tidied:** 3 August 2026

---

## Precedence

1. **[`AXON ENJIN Document.md`](AXON%20ENJIN%20Document.md) is the source of truth.** Where anything in this repository conflicts with it, it wins.
2. Inside that file, the **Company Document** section (canonical) wins over **Working Documents 2–4** (subordinate, retained for detail).
3. Nothing else in this repository is canonical. The campaign plans are superseded; `research/` and `pricing/` are inputs, not decisions.

Read [`FLAGS.md`](FLAGS.md) before quoting a price or qualifying a prospect. **Three blocking defects are open in the rate card.**

---

## Start here

| If you need to… | Read |
| ----- | ----- |
| Understand the business in five minutes | Company Document §1, §2.2, §3.1 |
| Quote a client | **[`FLAGS.md`](FLAGS.md) first** — F-01, F-02, F-03 all affect pricing — then §5, §6 |
| Know what is decided and not up for debate | §14 Locked decisions register |
| Know what is not yet true | §16, then [`FLAGS.md`](FLAGS.md) |
| Know what to research next | [`RESEARCH-QUEUE.md`](RESEARCH-QUEUE.md), then Working Document 4 §2–4 |
| Stay out of legal trouble | §4.6 do-not-touch list, §8 in full, §8.7 for the opinions still outstanding |
| Write anything customer-facing | §2.3 brand personality and §2.4 voice rules — both are constraints, and §2.4's compliance-claim rule is a legal one |

---

## Files

### Canonical

| File | Contents | Status |
| ----- | ----- | ----- |
| [`AXON ENJIN Document.md`](AXON%20ENJIN%20Document.md) | Google Docs export, five sections concatenated: internal alignment notes (1 Aug 2026); **Company Document** v1.0 §1–16; **Working Document 2** Target Industry Map & Service Catalog; **Working Document 3** Business Model; **Working Document 4** Validation & Research Agenda | **Source of truth.** Strategy locked; pricing benchmarked but not validated with buyers |

Working Document 1 — *Productization, Pricing & Revenue-Model Recommendation* — is cited in Document Control as retained but **is not in this repository.** It holds the benchmark sourcing for every price in §6. See [`FLAGS.md`](FLAGS.md) F-13.

### Registers and deliverables (added 3 Aug 2026)

| File | Contents |
| ----- | ----- |
| [`FLAGS.md`](FLAGS.md) | **33 flags** — internal contradictions, arithmetic errors, stale figures, unpropagated corrections — ranked by severity, each with a location and a resolution action. F-27…F-33 came from the regulatory research pass |
| [`RESEARCH-QUEUE.md`](RESEARCH-QUEUE.md) | Claims verified against live sources, what needs verifying next, and the research the repo is missing. R-04 and R-05 closed 3 Aug 2026 |
| [`SITEMAP.md`](SITEMAP.md) | Website information architecture — site map, page-by-page briefs, conversion architecture, and the publication blockers. Built to sell the ₱95,000 Readiness Audit, not the platform |
| [`research/verified/01-regulatory-tax-fx-baseline.md`](research/verified/01-regulatory-tax-fx-baseline.md) | 24 PH regulatory instruments verified against primary text, each with URL, retrieval date and source tier. The evidence base for §8 and for the FX decision |

**Research chain status.** A seven-agent sequential chain was run on 3 Aug 2026. Sub-agent 1 completed; sub-agents 2–7 were halted by an org billing ceiling. Sub-agent 6's deliverable (the site map) was produced directly instead. Resume instructions are at the foot of [`FLAGS.md`](FLAGS.md) — the completed agent replays from cache at no cost.

### Superseded

| File | Contents | Status |
| ----- | ----- | ----- |
| [`Axon_Enjin_7_Day_Campaign_Plan.md`](Axon_Enjin_7_Day_Campaign_Plan.md) | 7-day sponsored-MVP build-sprint campaign, ~June 2026 | ⚠️ **Superseded.** Contradicts canonical doctrine on four load-bearing points — see F-12. Do not execute as written |
| [`Axon_Enjin_MSME_Ad_Campaign_Plan.md`](Axon_Enjin_MSME_Ad_Campaign_Plan.md) | Same campaign, MSME-framed, with per-day creative direction | ⚠️ **Superseded**, and largely duplicative of the above |

### Research inputs

| Path | Contents | Status |
| ----- | ----- | ----- |
| [`research/research-plan.md`](research/research-plan.md) | Programme definition: addressable topic, nine pillars, output contract, standing rules, known gaps | Active, **partly stale** — see F-24 |
| `research/pillar-01`…`05` | Value capture & price architecture · buyer selection · positioning & category · demand generation · the sales conversation. Each returns pillars, frameworks, techniques, hacks, terms, formulas, benchmarks, **contradictions**, sources | Complete and high quality. Written **before** the Company Document existed |
| `research/` pillars 06–09 | Delivery discipline · productization & reuse · geography · commercial & legal instruments | ❌ **Never produced.** P6 and P9 are needed now — see F-25 |
| `pricing/chatgpt{,2,3}.md`, `pricing/claude-response{,2,3}.md` | Raw model transcripts on three questions — pricing model, ideal client, how to handle speed — two models each | Raw inputs. **Not decisions.** `claude-response2.md` argues an Australia beachhead that §1 overrides — see F-26 |

Each pillar's **§8 or §9 "Contradictions"** section is the most valuable part of `research/`: sources that disagree, deliberately left unresolved. Those are not defects — they are open questions with the evidence attached. [`FLAGS.md`](FLAGS.md) does not duplicate them; it cross-references where they collide with a canonical decision.

---

## Maintaining this

**The review cadence is every 90 days, or immediately when a §13 threshold trips.** Next scheduled review: **1 November 2026.** Working Document 4 declares a 90-day shelf life and therefore expires at the same point.

Rules that would have prevented most of what [`FLAGS.md`](FLAGS.md) records:

1. **When a number changes in §14, grep the whole document for the old one.** F-05 exists because a correction was recorded in Document Control and left standing in a rate card 900 lines away.
2. **Every external figure carries a source and a retrieval date.** The standing rules in `research/research-plan.md` already require this; the Company Document does not follow it. §4.1 and §7.2 are the worst cases.
3. **Every price shows its unit.** F-02 — the single most consequential defect in the repo — is one ambiguous unit on one line.
4. **A locked decision is closed everywhere or nowhere.** Working Document 2 §8 and Working Document 3 §6 presented decisions as open that §14 had already closed.
5. **Sensitive content does not live in the document you hand to counsel, clients, or investors.** See F-14.

### Re-exporting from Google Docs

The source document is an export. A fresh export will **overwrite** this pass's cleanup:

- 231 Markdown escape artifacts (`\-`, `\+`, `\&`, `\#`, `1\.`) removed
- `# Tab 3/4/5` and `# Company` renamed to state hierarchy and precedence
- ⚠️ SUPERSEDED markers on the stale implementation fee and Regulatory Update Subscription
- Inline flag notes at §4.1, §4.5, §6, §6.4, WD2 §5.6, WD2 §8, WD3 §6, WD4 §2.3

The cleanup script is reproducible; the inline notes are not. **Fix the defects in the Google Doc rather than re-exporting over the fixes**, or diff before overwriting.

### Version control

This repository is **not under git**, so there is no history and no undo on 137 KB of strategy work. Initialising it costs one command and would have made this entire pass reviewable as a diff:

```bash
git init && git add -A && git commit -m "Baseline: strategy docs as of 3 August 2026"
```

---

*Operational planning documents. Not legal, tax, or investment advice. Regulatory references are current to August 2026 and depend on the standing monitoring in Company Document §9.4 — which, as of this writing, has no named owner.*
