---
title: Website Sitemap
type: strategy
status: ready-to-build
authority: level-2
owner: Rhandie
created: 2026-08-08
updated: 2026-08-16
review_cycle: 90-days
source_of_truth: 11_MARKETING/SITEMAP.md
supersedes: 11_MARKETING/SITEMAP.md v3.0
superseded_by:
---
# Axon Enjin — Website Site Map & Information Architecture

**Version:** 3.1 · 16 August 2026 · **Status:** ready to build
**Owner:** Rhandie (website contents)
**Governed by:** [`WEBSITE-CONTRACT.md`](WEBSITE-CONTRACT.md) · [`COMPANY.md`](COMPANY.md) · Company Document §2.4 / §8

> **Plain language:** write so a **5th–7th grader** can follow.
>
> **This document supersedes SITEMAP v3.0** interim (product sections allowed on the company homepage). The company host **does not sell**.

---

## 1. The one decision that shapes everything

**Two hosts. Two jobs.**

| Property | Host | Job |
| ----- | ----- | ----- |
| **A — Axon Enjin** | `https://axonenjin.com` | Tell who we are. No selling. |
| **B — Axlefield** | `https://axlefield.axonenjin.com` | Sell the product (own repo later). |

Shape (jobs, not density): About → one Core Project → Team → Collaborate → Contact. Do **not** add Investments, Highlights, or Join Our Team until they are real.

---

## 2. Site map

### Property A — Axon Enjin (company) — this repo

```
https://axonenjin.com
│
├── /                 Single scroll — company presence
│                       hero · about · projects (Axlefield) · team
│                       collaborate · contact
│
└── /legal            One page: privacy + terms + data-processing
                      (not built this batch)
```

**No sales sections on `/`:** no modules catalog, offers, delivery process, or how-buying.

### Property B — Axlefield (product) — other repo

```
https://axlefield.axonenjin.com
│
├── /                 Product story · three offers · how it works · how buying works
│                       (no currency amounts; no /pricing route)
├── /modules          Core + 6 modules
├── /about            Axlefield as an Axon Enjin product; team → company site
├── /contact          Sales only (no Collaboration topic)
└── /legal            One combined legal page
```

**Never on the product site:** ventures, `/platform`, `/services/*`, `/how-we-work`, `/pricing`, `/for/*`, currency amounts.

Do **not** write Property B copy into `axon-website` HTML.

---

## 3. Navigation

### Company — `axonenjin.com`

**Primary nav (3):** About · Projects · Collaborate

**Footer:** Team · Legal · optional founder (`https://delatorre.axonenjin.com`)

**Not nav:** Axlefield as a sales button (it is a project card). Ventures. Join Our Team. Investments. Highlights.

**Primary CTA:** Let's collaborate / talk to us.

### Product — `axlefield.axonenjin.com`

**Primary nav (3):** Modules · About · Contact

**Footer:** Legal · Axon Enjin

**Never** Ventures or Collaborate on the product nav.

---

## 4. Page briefs — company `/`

| | |
| ----- | ----- |
| **Job** | File the company in the mind. One flagship. A door. Real people. |
| **H1 (DOM)** | *The one who connects.* (D-2026-008) |
| **Hero** | Company, not catalog. No Operating Layer / FOL / “Agentic AI Systems”. No Greek script or neuron art. CTA: Collaborate. |
| **About** | Etymology once. What we are / are not. We do not fake BIR/BSP accreditation. We do not take payments for clients. |
| **Projects** | **One** card: Axlefield — *An Axon Enjin product.* One-liner. **Visit Site** → `https://axlefield.axonenjin.com/`. No module grid. |
| **Team** | Jerico (CEO), Aidan (CTO), Gerald, Rhandie. |
| **Collaborate** | Cash floor; equity rare; no pure-equity CTA; no named unvalidated ventures. |
| **Contact** | Name, message, optional topic Company / Collaboration. **No** offer picker or branch-count sales qualifier. |
| **Must not** | Pesos; fake project grid; press/investor walls; See the modules; three offers |

### `/legal`

One page: privacy + terms + data-processing. Unbuilt this batch.

---

## 5. Conversion

**Company:** Collaborate / talk to us. Axlefield is a visit, not a cart.

**Product (other host):** See modules / talk to us.

**Tertiary:** Collaboration from company Collaborate only.

---

## 6. Copy rules

1. Grade 5–7.
2. Company H1: *The one who connects.*
3. Product name **Axlefield** — only as the core project on this host.
4. Operating Layer / FOL = internal/historical only.
5. No pure-equity or “build for free” language.
6. No unearned proof.

---

## 7. Publication blockers

| Blocker | Action |
| ----- | ----- |
| F-34 | No currency amounts |
| Booking URL | TBD (V2 A2) — talk to us until wired |
| `/legal` | Linked; page not built |
| Axlefield HTML | Other repo; Visit Site may 404 until it ships |
| Case studies | Not required; team + honest process are the proof |

---

*Supersedes SITEMAP v3.0 (15 Aug 2026) company-host interim sales sections.*
