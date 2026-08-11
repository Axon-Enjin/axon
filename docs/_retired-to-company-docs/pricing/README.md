# `pricing/` — raw model transcripts

**Status:** research **inputs**, not decisions · **Captured:** ~June 2026 · **Predates the Company Document**

These six files are verbatim responses from two models to three questions. They are the primary corpus that `research/pillar-01-price-architecture.md` and `pillar-02-buyer-selection.md` were built on, and they are retained for traceability.

**Nothing in this folder is canonical.** Where these files conflict with [`AXON ENJIN Document.md`](../AXON%20ENJIN%20Document.md), the Company Document wins.

| Question | ChatGPT | Claude |
| ----- | ----- | ----- |
| How should we price? | [`chatgpt.md`](chatgpt.md) | [`claude-response.md`](claude-response.md) |
| Who is the ideal client, and where? | [`chatgpt2.md`](chatgpt2.md) | [`claude-response2.md`](claude-response2.md) |
| How should we handle our speed? | [`chatgpt3.md`](chatgpt3.md) | [`claude-response3.md`](claude-response3.md) |

## Where they agree

- Cost is a **floor**, not a price. Cost-plus ties revenue to inefficiency and invites arguments about inputs.
- Never expose an hourly rate; quote a fixed fee against a defined scope.
- Separate build, pass-through infrastructure, and maintenance into distinct line items.
- Target **multi-branch mid-market** — pain multiplies by location while the decision chain stays short.
- Sell to the operations leader, not IT.
- Do not sell speed as the product.

## Where they disagree

Preserved deliberately. `pillar-01` §8 and `pillar-02` §8 carry these as open questions with the external evidence attached; do not flatten them.

| Thread | Divergence |
| ----- | ----- |
| Pricing mechanism | ChatGPT proposes a five-layer multiplicative stack. Claude rejects multipliers and substitutes three-option anchoring plus scope control plus payment terms as the real margin defence. |
| Geography | ChatGPT: PH-first, defer AU. Claude: **AU beachhead now**, PH as cash-flow and portfolio only. |
| Buyer psychology | Claude inverts the brief's "doesn't care about spending money" filter — target buyers who care **intensely**, because they can do the arithmetic that makes the fee obviously correct. |
| Speed | ChatGPT: expectation management. Claude: decompose into responsiveness / delivery / commitment speed, attribute a *cause* to the speed, and sell it as a paid expedited tier. |

## Two things to carry forward

**Rejected by both models, recorded as a boundary rather than a technique:** faking team size or headcount. The reasoning in `claude-response.md` is worth keeping — clients ask who is on the project, records are discoverable, and it converts a contract dispute into a fraud argument. The legitimate version reaches the same place: decline to itemise inputs at all.

**The Australia recommendation is overridden.** `claude-response2.md` argues Australia is the strongest beachhead and builds downstream reasoning on AUD 150–250/hr reference rates, `.com.au` presence signals, and Australian data-residency obligations. Company Document §1 locks **Philippines-only for now**, and §8.6 defers BOI/PEZA IT-export registration unless foreign revenue exceeds 20%.

Keep it. If the PH rate card fails its willingness-to-pay test (see [`FLAGS.md`](../FLAGS.md) F-09), this analysis becomes live again. But **do not import the AU rate references into PH pricing** — they are load-bearing in several `pillar-01` formulas and will silently inflate any number derived from them. See F-26.
