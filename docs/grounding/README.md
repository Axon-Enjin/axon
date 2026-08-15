---
title: Website Grounding Pack
type: policy
status: active
authority: level-2
owner: Jerico
created: 2026-08-11
updated: 2026-08-16
review_cycle: 90-days
source_of_truth: 11_MARKETING/website-grounding/README.md
supersedes:
superseded_by:
---

# Website Grounding Pack

This folder is the **only** surface of `company-docs` that may be mirrored to public website repositories.

**Two properties.** Company (`axonenjin.com`) tells who we are. Product (`axlefield.axonenjin.com`) sells Axlefield. The company site does **not** sell.

## Why this exists

- The company OS holds client records, finance, and strategy — **not** for the marketing site.
- Sync is **curated + reviewable** (PR), not a blind clone of the private OS.

## Company mirror (`axon-website` → `docs/grounding/`)

| File | Role |
| ----- | ----- |
| `WEBSITE-CONTRACT.md` | Allowed / forbidden claims; company CTAs; F-34 |
| `SITEMAP.md` | Two-property IA (v3.1) |
| `COMPANY.md` | Who we are — company-host copy spine |
| `BRAND-VOICE.md` | Plain-language + regulatory voice |
| `GROUNDING-MANIFEST.yml` | Version + `company_mirror` / `product_only` |
| `README.md` | This file |

## Product only (stay in OS — Axlefield repo later)

| File | Role |
| ----- | ----- |
| `COMMERCIAL-MODEL-V2.md` | Public GTM / offers |
| `MODULE-CATALOG.md` | Module SKUs (no prices) |

The sync workflow **must not** copy product-only files onto `axon-website`.

## Change rule

When sitemap or this pack changes → open a PR on `Axon-Enjin/website` updating `docs/grounding/`. Humans review before merge.
