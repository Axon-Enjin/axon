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
supersedes: 11_MARKETING/SITEMAP.md v3.1
superseded_by:
---
# Axon Enjin — Website Site Map & Information Architecture

**Version:** 3.2 · 16 August 2026 · **Status:** ready to build
**Owner:** Rhandie (website contents)
**Governed by:** [`WEBSITE-CONTRACT.md`](WEBSITE-CONTRACT.md) · [`COMPANY.md`](COMPANY.md) · [`ARTICLES.md`](ARTICLES.md) · Company Document §2.4 / §8

> **Plain language:** write so a **5th–7th grader** can follow.
>
> Company host **does not sell.** Hackathons and awards are **supporting** (F-12) — never the hero.

---

## 1. The one decision that shapes everything

**Two hosts. Two jobs.**

| Property | Host | Job |
| ----- | ----- | ----- |
| **A — Axon Enjin** | `https://axonenjin.com` | Tell who we are. No selling. |
| **B — Axlefield** | `https://axlefield.axonenjin.com` | Sell the product (own repo later). |

Company shape: About → one Core Project → **Proof strip** → Team → Collaborate → Contact. Body of work lives on **`/articles`**. Do **not** add Investments, Join Our Team, or a Highlights trophy wall.

---

## 2. Site map

### Property A — Axon Enjin (company) — this repo

```
https://axonenjin.com
│
├── /                 Single scroll — company presence
│                       hero · about · projects (Axlefield) · proof
│                       team · collaborate · contact
│
├── /articles         Index of posts (Build · Think · Operate · Case)
│   └── /articles/{slug}
│
└── /legal            One page: privacy + terms + data-processing
                      (not built this batch)
```

**No sales sections on `/`:** no modules catalog, offers, delivery process, or how-buying.

### Property B — Axlefield (product) — other repo

Unchanged from v3.1. Do **not** write Property B copy into `axon-website` HTML.

---

## 3. Navigation

### Company — `axonenjin.com`

**Primary nav (3):** About · Articles · Collaborate

**Footer:** Team · Articles · Legal · optional founder (`https://delatorre.axonenjin.com`)

**Not nav:** Axlefield as a sales button. Ventures. Join Our Team. Investments. A dump of every trophy.

**Primary CTA:** Let's collaborate / talk to us.

---

## 4. Page briefs — company

### `/` — Home

| | |
| ----- | ----- |
| **Job** | File the company. One flagship. Short checkable proof. A door. Real people. |
| **H1 (DOM)** | *The one who connects.* |
| **Projects** | One card: Axlefield. Visit Site. |
| **Proof** | After Projects. **At most five** checkable lines (event · placement · link to article or public post). Not in the hero. Not TEDx/MRSP. |
| **Must not** | Pesos; “hackathon winners” as H1; named clients without consent; fake project grid |

### `/articles` and `/articles/{slug}`

| | |
| ----- | ----- |
| **Job** | Make the body of work public. Constraint → decision → artifact → lesson. |
| **Types** | Build · Think · Operate · Case |
| **Case** | Public founder/hackathon work until a consented client exists. Not franchise-buyer proof. |
| **Must not** | Trophy-only posts; invented clients; currency amounts |

### `/legal`

Unbuilt this batch.

---

## 5. Conversion

**Company:** Collaborate / talk to us. Articles support trust; they are not a cart.

**Product (other host):** See modules / talk to us.

---

## 6. Copy rules

1. Grade 5–7.
2. Company H1: *The one who connects.*
3. Hackathons prove build skill under time pressure — say that once; do not lead with it.
4. No pesos. No unearned logos. No ChaChing / BlueBiz / Full Cup until consent.

---

## 7. Publication blockers

| Blocker | Action |
| ----- | ----- |
| F-34 | No currency amounts |
| Named client cases | Consent TBD — use public founder/hackathon work only |
| `/legal` | Linked; page not built |
| Axlefield HTML | Other repo |

---

*Supersedes SITEMAP v3.1 (16 Aug 2026) company-only presence without articles.*
