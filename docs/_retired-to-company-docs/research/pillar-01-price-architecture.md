# Pillar 1 — Value Capture & Price Architecture

**Sub-agent:** 1 of 9
**Retrieval window:** 2026-07-28 (all web figures retrieved this date unless stamped otherwise)
**Status:** reference document — report and cite only, no recommendations
**Standing note on numbers:** every benchmark below is a moving figure. Benchmarks are stamped
with retrieval date and source tier. Re-verify before any figure is used in a live quote.
**FX assumption used in worked examples:** `1 AUD ≈ PHP 38`. This rate was *not* verified live
in this session. Treat it as an illustrative placeholder; re-check before use.

---

## 0. Corpus grounding (what the two internal docs already establish)

Both internal pricing docs (`pricing/chatgpt.md`, `pricing/claude-response.md`) converge on four
claims, which the external literature broadly supports:

1. Cost is a floor, not a price.
2. Value capture, not cost recovery, sets the ceiling.
3. Build / infrastructure / maintenance must be priced as three separate instruments.
4. Never expose an hourly rate.

They diverge on **how the gap between floor and ceiling is bridged** — a multiplier stack
(chatgpt.md, Layers 1–5) versus a rejection of multipliers in favour of option architecture,
scope control and payment terms (claude-response.md). This is Contradiction C1 below and is
*preserved*, not resolved.

---

## 1. Pillars — load-bearing principles

**P1.1 — Price is the strongest profit lever available.**
Every business has three profit drivers — price, volume, cost — and price receives the least
attention while having the greatest impact (Simon, *Confessions of the Pricing Man*; practitioner/
primary-author tier). McKinsey's classic finding: a 1% price improvement across the portfolio
moves bottom-line margin more than a 1% volume uplift; in their sample a 1% price increase
yielded a ~22% increase in EBITDA margin (McKinsey, "The Power of Pricing"; practitioner tier).

**P1.2 — Cost-plus pricing ties revenue to inefficiency.**
Under cost-plus, becoming faster and better *reduces* earnings, and it invites the buyer to
litigate your inputs rather than your outcome. Ron Baker's core inversion is **price-led costing**:
determine the price the market will bear first, then decide what costs the firm can afford to
incur to deliver it — the reverse of cost-led pricing (Baker, *Implementing Value Pricing*;
practitioner/primary-author tier).

**P1.3 — Cost sets the floor; value sets the ceiling; the price lives in between.**
This is the single formulation both internal docs and Baker, Weiss, Enns and Nagle all share.
Everything else in this pillar is machinery for locating a point inside that band.

**P1.4 — The unit of pricing is the client, not the job.**
Enns' Rule: *"Price the client, not the job."* The same deliverable is correctly priced
differently for two buyers, because the economic value created differs. Weiss says the same via
value-based fees: fees follow results, not labour. Baker's Chapter 9 mechanism is
**consumer surplus and price discrimination** — differential pricing across buyers is the
legitimate capture of surplus that uniform pricing leaves on the table.

**P1.5 — The hourly rate is an information hazard.**
Weiss: hourly fees are lose-lose — they force the client into a fresh investment decision on
every increment of work, and they cap the consultant's upside at the clock. `chatgpt.md` frames
the same point from the buyer's side: if the client can compute your effective rate, a fast
delivery reads as overcharging rather than as competence. `claude-response.md` supplies the
legitimate mechanism: **don't itemize inputs at all** — quote a fixed fee for a defined scope.
Declining a headcount/hours breakdown is normal; inventing one is a different act.

**P1.6 — Price is itself a quality signal.**
Meta-analytic evidence finds the price → perceived-quality relationship positive and
statistically significant for consumer products (Rao & Monroe, 1989, *JMR*; primary tier).
Monroe's (2003) model runs: higher price → perceived higher quality → perceived higher value →
higher willingness to pay. Consumers apply the price cue selectively — mainly where the context
suggests a positive price-quality relationship. Prices at the *ends* of a range disproportionately
drive judgement: at the low end buyers worry about quality; at the high end they worry about the
monetary sacrifice.

**P1.7 — Options beat a single price.**
Enns: presenting three options converts the buyer's question from *"Is this good value?"* (a
yes/no on your price) to *"Which is the best value?"* (a selection among your prices). His stated
claim is that adopting a standing three-option rule increases the share of positive outcomes by
half. `claude-response.md` independently arrives at the same mechanic and adds a second payoff:
which way the buyer leans is high-grade intelligence about their real budget.

**P1.8 — Recurring revenue is structurally more valuable than project revenue.**
Project revenue is lumpy and every month restarts at zero; recurring revenue is what makes the
business survivable and what makes it saleable (`claude-response.md`). This is the argument for
treating the maintenance retainer as the primary asset in the price architecture, not an
afterthought.

**P1.9 — Margin is lost in delivery more often than in pricing.**
`claude-response.md`: most agencies do not lose money on a bad price, they lose it on unbilled
scope creep. A written change-order process protects margin more than any pricing formula. (This
hands off to Pillar 6.)

**P1.10 — Discounting is mathematically brutal and asymmetric.**
See Formula F9. The volume increase required to offset a discount rises non-linearly with the
discount and inversely with the starting margin. Simon's framing: market share is not the same
as profit.

**P1.11 — Separate the three money streams.**
Build (one-time, fixed), pass-through infrastructure (at or near cost, stated separately),
maintenance (recurring). Both internal docs agree. The reason pass-through must be separated is
exposure: it protects the studio when the client's usage triples.

---

## 2. Frameworks — named, multi-step, reusable

### F/1 — The Floor–Ceiling Band (synthesis of both internal docs + Baker/Nagle)
1. Compute fully-loaded cost floor (Formulas F1–F3). Never price below it.
2. Compute the buyer's economic value ceiling (Formula F5 / EVE).
3. Locate the price inside the band using option architecture (F/3) and the ROI test (F6).
4. Sanity-check against market reference prices for the buyer's geography (Section 7).

### F/2 — Baker's Price-Led Costing loop
Determine the value → set the price → derive the allowable cost → design the delivery to fit that
cost. Inverts cost-led pricing. Requires that scope be a design variable, not a given.

### F/3 — Enns' Three-Option Architecture (with anchoring)
Rules as documented (Enns, *Pricing Creativity*; practitioner tier, via secondary summaries —
book itself not fetched):
- **Rule 1** Price the client, not the job. *"The sooner in the sale you offer a price, the lower
  it is likely to be."*
- **Rule 2** Always present three options.
- **Rule 3** Anchor high. Lead with the premium option so subsequent tiers read as reasonable
  (his illustration: $100k → $50k → $30k).
- **Rule 4** State a price range verbally *before* writing the proposal. *"Early objections are
  your friends and late objections are your enemies."*
- **Rule 5** Keep the proposal to one page; use it as a discussion guide, not a submitted document.
- **Rule 6** Invoke policies. *"Policies trump wants every time."*
- **Rule 7** Lead with social proof rather than self-promotion.
- Anchor-generation prompt: *"What would we do, and charge, if money were no object?"*
- Structure of the ladder: a genuinely large anchor; a middle option positioned where you want to
  land, priced **above** the client's stated budget; a low option that matches the stated budget.

### F/4 — Enns' Four Conversations (pricing's position in the sale)
Probative → Qualifying → **Value** → Closing. The value conversation is where price is
introduced, and it starts from the value to be created, not from scope. Its four steps begin by
uncovering the client's desired future state and end by determining what the engagement is worth.
Pricing that happens before the value conversation is structurally underpriced. (Hands off to
Pillar 5.)

### F/5 — Weiss' Value-Based Fee construction
Formula F6 below. Operationally: monetize outcomes, annualize them, add intangible and peripheral
value, then set a fixed fee that yields a large ROI multiple for the buyer. Weiss' documented
response to the "why not hourly?" objection: *"My fee represents my contribution to this project
with a dramatic return on investment for you and equitable compensation for me."*

### F/6 — EVE / Economic Value Estimation (Nagle; operationalized by LeveragePoint, Ibbaka)
1. Establish **Competitive Reference Value** = the price the buyer pays for their next best
   alternative (including "do nothing with a coping spreadsheet" and "hire a reconciler").
2. Quantify **Positive Differentiation Value** = monetary value your offering creates beyond that
   alternative.
3. Subtract **Negative Differentiation Value** = switching costs, training, migration, downtime.
4. **Net Differentiation Value** = (2) − (3). Where positive, `Reference Value + Net Differentiation
   Value` is the economic ceiling and the value-based pricing range.
5. Ibbaka's six value drivers to search for: revenue enhancement, cost reduction, working-capital
   optimization, capex avoidance, risk mitigation, flexibility/optionality.

### F/7 — van Westendorp Price Sensitivity Meter
Four questions per respondent: at what price is it (a) too expensive to consider, (b) so expensive
it is not worth buying, (c) a bargain, (d) so cheap you would doubt its quality. Cumulative curves
yield an acceptable price range and indifference/optimal price points.
**Documented limitations** (relevant because a studio has an N of ~10 prospects, not 400):
ignores competitive context; ignores product features/value; weaker than conjoint for feature
testing; oversimplifies multi-segment markets; measures stated not revealed willingness to pay.

### F/8 — Value-Metric Selection (four criteria, from *The Pricing Roadmap* as reported)
- **Operational viability** — measurable and billable without dispute.
- **Value alignment** — scales with the value the customer receives.
- **Expectation to pay** — feels fair to buyers in that category.
- **Density** — each unit carries roughly equal value. Low density (some units worth far more
  than others) produces pricing disputes and slows expansion.
Supplementary criterion reported elsewhere: the buyer must be able to *understand and control* the
metric.
Reported caution: *"per-transaction" and "per-outcome" are concepts, not metrics* — they are only
real once the transaction and the outcome are defined. Until then they are placeholders that mean
the pricing work is unfinished.

### F/9 — The Three-Stream Separation
| Stream | Instrument | Basis | Exposure |
|---|---|---|---|
| Discovery / strategy | Paid, fixed | Fraction of expected build | Low |
| Build | One-time fixed fee, defined scope | Value-based | Scope creep |
| Infrastructure | Pass-through at or near cost, stated separately | Actual usage | Client usage growth |
| Maintenance | Monthly/annual retainer | % of build cost | Silent scope expansion |

### F/10 — The Price-Increase Ladder (assembled from practitioner sources; thin evidence base)
1. Raise the price for **new** clients first. This makes the existing-client increase look smaller
   by comparison, and it produces the close-rate data that justifies step 3.
2. Read the close rate as the signal. Reported heuristic: at a 50–60% close rate you can raise
   50–100%; at 40–50% you can raise 25–50%. (Practitioner/web tier — single source, unvalidated.)
3. Give notice proportional to account size: 30–60 days minimum, 90 days for enterprise/longer
   contract cycles; some sources say three months.
4. Anchor the increase to value, not to your costs.
5. Expect churn to be concentrated in the lowest-margin, most scope-intensive accounts.
6. Reported acceptance band: 8–15% increases land with proper notice; >20% requires added value or
   a service expansion to justify. Annual inflation-tracking increases of 5–10% are described as
   routinely accepted.

---

## 3. Techniques — situational, each with its trigger

| # | Technique | Trigger condition |
|---|---|---|
| T1 | Refuse to quote in the room; state a *range* verbally instead | Buyer asks for a number before the value conversation is complete (Enns Rule 4) |
| T2 | Quote a fixed fee for defined scope with zero input itemization | Any fixed-scope build; especially when asked for an hours or headcount breakdown |
| T3 | Deploy the "years, not hours" reframe | Client discovers the work took less time than they assumed. `chatgpt.md`: *"they're paying for the years it took you to become capable of finishing it in 20 hours"* |
| T4 | Three options, anchor first | Every proposal (Enns Rule 2/3) |
| T5 | Generate the anchor with "if money were no object" | You cannot imagine a credible premium tier |
| T6 | Read the lean, not just the answer | Client picks low tier → budget-constrained or unconvinced of value; picks high → value case landed. Intelligence for the next quote |
| T7 | Charge a risk premium for named uncertainties | Compressed deadline, unclear requirements, unbounded revisions, regulatory/compliance scope, mission-critical cutover (`chatgpt.md` Layer 4) |
| T8 | Sell speed as a paid expedited tier rather than as the default | Buyer wants a compressed timeline. Both internal docs agree speed should not be the product; claude-response.md specifically frames the paid tier |
| T9 | Attribute a *cause* to your speed | Fast delivery risks reading as "small job." Attribute to reuse/templates (hands off to Pillar 7), not to effort |
| T10 | Quantify the status quo before quoting | Client has not costed inaction. `claude-response.md`: *"You're doing arithmetic they skipped."* Legitimate — it is arithmetic, not manipulation |
| T11 | Separate pass-through infra with a small management margin | Any build with variable cloud/API/token cost |
| T12 | Sell maintenance as a scoped retainer with an explicit exclusion list | Every build. Covered: bug fixes, security patches, dependency updates, monitoring, backups, X hours of small changes. Excluded: new features → change order |
| T13 | Sell paid discovery as a standalone productized step | Client is unwilling or unable to specify scope; or you need to de-risk a fixed fee. Reported model: the discovery fee is credited against the build if they proceed |
| T14 | Use paid discovery as a qualifier | High volume of unqualified inbound. `chatgpt.md`: *"Clients who won't pay for planning usually don't value execution either"* |
| T15 | Invoke a policy rather than a preference | Buyer pushes on terms. Enns Rule 6: *"policies trump wants every time"* |
| T16 | Raise new-client price before existing-client price | Any planned increase (F/10 step 1) |
| T17 | Price-discriminate legitimately across buyer size | Same build, different buyer economics. Baker Ch. 9 — consumer surplus capture. Requires that you never publish a single rate card |
| T18 | Trade a discount only for a concession | Buyer demands a discount. Concessions with real value: longer term, larger deposit, case-study and logo rights, reference calls, reduced scope, slower timeline |
| T19 | Reduce scope rather than price | Buyer's budget is below the middle option. Preserves the price metric and the precedent |

---

## 4. Hacks — asymmetric, low-effort, high-leverage

- **H1 — The one-page proposal.** Enns Rule 5. Lower production cost than a long document *and*
  higher close leverage, because it functions as a live discussion guide rather than a document
  that is emailed and then compared on price.
- **H2 — Never publish a rate card.** A single published number destroys T17 (price
  discrimination) and hands the buyer a cost-plus lens permanently.
- **H3 — Put a decoy in the ladder.** The low tier's job is often not to be sold. An
  asymmetrically dominated option shifts share toward the target (see Section 6 / Benchmarks and
  Huber–Payne–Puto, 1982).
- **H4 — Discovery fee credited on signature.** Reported to filter junk leads at the cost of raw
  booking volume. One documented case: a $50 paid discovery fee cut CAC 44% while raw bookings
  fell ~30% (web tier, single source, unverified).
- **H5 — Retainer as % of build, stated at proposal time.** Anchoring the retainer inside the
  build proposal is far easier than selling it as a separate decision after delivery.
- **H6 — Annualize the value in the pricing conversation.** Weiss' annualization multiplier is the
  cheapest legitimate way to expand the perceived value denominatorless — a PHP 40k/month saving
  becomes PHP 480k/year becomes PHP 1.44M over a three-year horizon.
- **H7 — Quote the price of the alternative first.** EVE step 1. If the client is currently paying
  a reconciler PHP 25k/month, that salary is now the reference price and your build is compared to
  it, not to a freelancer's quote.
- **H8 — Deposit as a qualification instrument, not just cash flow.** A buyer who will not pay a
  deposit has told you something about the deal before you spend delivery capacity on it.

---

## 5. Terms — glossary

| Term | One-line definition |
|---|---|
| Cost floor | The fully-loaded cost below which a price destroys value; not a price |
| Fully-loaded cost | Direct labour plus benefits, tools, overhead, admin/non-billable time, taxes |
| Billable utilization | Billable hours ÷ available hours; the denominator that turns salary into a day rate |
| Realization rate | Amount actually billed ÷ amount billable at standard rate; captures write-offs and discounts |
| Break-even day rate | The day rate at which fully-loaded cost is exactly recovered at target utilization |
| Cost-plus pricing | Price = cost × markup; ties revenue to inefficiency |
| Price-led costing | Baker's inversion: set price from value, then engineer costs to fit |
| Value-based pricing | Price set from the buyer's economic outcome, not from inputs |
| Consumer surplus | The gap between what a buyer would have paid and what they did pay |
| Price discrimination | Charging different buyers different prices for substantially the same thing |
| EVE / EVC | Economic Value Estimation / Economic Value to the Customer — reference value plus net differentiation value |
| Reference value | The price of the buyer's next best alternative, including doing nothing |
| Differentiation value | Monetary value created beyond the reference alternative |
| Negative differentiation value | Switching, training, migration and downtime costs the buyer bears to adopt you |
| Anchoring | Over-weighting of the first number presented |
| Decoy / asymmetric dominance effect | Adding an option inferior to one alternative and only partly inferior to another shifts share toward the target |
| Compromise effect | Preference shift toward the middle option in a three-option set |
| Price-quality inference | Buyers reading higher price as higher quality |
| Latitude of price acceptance | The width of the price band a buyer will consider without rejecting on price |
| Van Westendorp PSM | Four-question survey method yielding an acceptable price range |
| Price metric / value metric | The unit price attaches to — seat, branch, transaction, flat |
| Metric density | How evenly value is spread across units of the metric |
| Pass-through cost | Third-party infra billed at or near cost and stated separately |
| Risk premium | Price uplift for named delivery uncertainty |
| Expedited premium | Price uplift for compressed timeline |
| Strategic premium | Uplift where the output is competitive advantage rather than a deliverable (`chatgpt.md` Layer 5) |
| Retainer | Recurring fee for a scoped ongoing service |
| Change order | Priced written amendment for out-of-scope work |
| Scope creep | Unbilled scope expansion; the primary margin leak |
| Deposit | Upfront payment before work commences |
| Milestone payment | Payment tied to a defined deliverable or acceptance event |
| Blended margin | Margin across build, infra and retainer combined |
| LTV / CAC | Lifetime value of a client over cost to acquire them |
| Productized service | Fixed scope, fixed price, repeatable delivery |
| Paid discovery | Fixed-fee diagnostic/scoping engagement sold ahead of the build |

---

## 6. Formulas

> All variables defined. Worked examples in PHP and AUD. FX placeholder `1 AUD = PHP 38`
> (unverified — see header).

### F1 — Fully-Loaded Annual Cost per delivery person
```
FLC = S + B + T + O
```
- `S` base compensation
- `B` statutory + non-statutory benefits (PH: SSS, PhilHealth, Pag-IBIG, 13th month)
- `T` tools, licences, hardware amortization attributable to that person
- `O` allocated overhead (rent/internet/admin/finance/legal/insurance)

**PHP worked:** `S = 600,000`, `B = 105,000`, `T = 45,000`, `O = 150,000` → **FLC = PHP 900,000/yr**
**AUD worked:** `S = 130,000`, `B = 22,000`, `T = 4,000`, `O = 24,000` → **FLC = AUD 180,000/yr**
(the AUD figure is consistent with the reported AU benchmark that senior engineers cost
AUD 155k–180k+ fully loaded — see Section 7.)

### F2 — Available and Billable Hours
```
H_avail    = W × D × h
H_billable = H_avail × u
```
- `W` working weeks per year after leave and holidays
- `D` working days per week
- `h` working hours per day
- `u` billable utilization (0–1)

**PHP worked:** `W = 46`, `D = 5`, `h = 8` → `H_avail = 1,840`. At `u = 0.65` →
`H_billable = 1,196 h`.
**AUD worked:** same `H_avail = 1,840`; at `u = 0.75` → `H_billable = 1,380 h`.

### F3 — Break-Even Day Rate (the cost floor)
```
BEDR = (FLC / H_billable) × h
```
Equivalently the internal-cost hourly floor is `FLC / H_billable`.

**PHP worked:** `900,000 / 1,196 = PHP 752.5/h` → `× 8 = ` **BEDR ≈ PHP 6,020/day**
**AUD worked:** `180,000 / 1,380 = AUD 130.4/h` → `× 8 = ` **BEDR ≈ AUD 1,043/day**

Sensitivity to `u` is the point of the formula. At `u = 0.50` the PHP floor rises to
`900,000 / 920 = PHP 978/h`, a **30% increase in the floor from utilization alone**. This is why
`claude-response.md` insists on ~60–70% rather than 100%.

### F4 — Target Day Rate at a desired gross margin
```
TDR = BEDR / (1 − m)
```
- `m` target gross margin as a decimal

**PHP worked:** `m = 0.55` → `6,020 / 0.45 = ` **PHP 13,378/day**
**AUD worked:** `m = 0.50` → `1,043 / 0.50 = ` **AUD 2,086/day**
*This number is an internal instrument only. Per P1.5 it is never quoted.*

### F5 — Economic Value ceiling (EVE / Nagle)
```
EV        = RV + NDV
NDV       = PDV − NDV_neg
Price_max = EV                (the theoretical ceiling; capture is a share of NDV)
```
- `RV` reference value = annual cost of the buyer's next best alternative
- `PDV` positive differentiation value = annualized monetary gain your build creates beyond RV
- `NDV_neg` negative differentiation value = switching, training, migration, downtime cost
- `NDV` net differentiation value

**PHP worked — 6-branch retail chain, manual stock reconciliation:**
`RV` = one reconciler at PHP 30,000/mo fully loaded = `PHP 360,000/yr`
`PDV` = shrinkage/stockout recovery PHP 55,000/mo + 90 staff-hours/mo saved at PHP 220/h
(`= PHP 19,800/mo`) = `PHP 74,800/mo = PHP 897,600/yr`
`NDV_neg` = training + parallel-run + data migration = `PHP 120,000`
`NDV = 897,600 − 120,000 = PHP 777,600`
`EV = 360,000 + 777,600 = ` **PHP 1,137,600 of first-year economic value**

**AUD worked — 4-clinic group, no-show recovery:**
`RV` = incumbent SaaS + admin workaround = `AUD 18,000/yr`
`PDV` = 15% of AUD 240,000/yr of no-show revenue recovered = `AUD 36,000/yr`
`NDV_neg` = `AUD 6,000`
`EV = 18,000 + 36,000 − 6,000 = ` **AUD 48,000 of first-year economic value**

### F6 — Weiss Value-Based Fee / ROI construction
As published by Weiss:
```
(Tangible Outcomes × Annualization)
  + (Intangible Outcomes × Emotional Impact)
  + Peripheral Benefits
  + Improved Variables
  ────────────────────────────────────────  = ROI
        Fixed Value-Based Fee
```
Weiss' stated fee target elsewhere: a **minimum 10:1** investment ratio — "if creating a million
dollars in savings or new business or better margins, the fee would be about $100,000."
*Note:* the article fetched at `alanweiss.com/formula-for-value-based-fees` states the formula but
does **not** state a numeric ratio; the 10:1 figure comes from secondary summaries of
*Value-Based Fees*. Treat 10:1 as practitioner-tier, secondary-sourced.

### F7 — ROI-Multiple Test (the studio-side sanity check)
```
R = V_annualized / P_build
```
- `V_annualized` = annualized value created (use `NDV` from F5, conservatively)
- `P_build` = the one-time build fee

**PHP worked:** `V = 777,600`, quote `P = 250,000` → `R = 3.1×` in year one; at a 3-year horizon
`R ≈ 9.3×`. Against a Weiss-style 10:1 first-year test the quote is *low relative to value*, which
is precisely the diagnostic the formula exists to produce.
**AUD worked:** `V = 42,000` (PDV net of NDV_neg), quote `P = AUD 22,000` → `R = 1.9×` year one,
`5.7×` over three years.

### F8 — Maintenance Retainer as % of Build
```
R_annual  = k × P_build
R_monthly = R_annual / 12
```
- `k` annual maintenance rate as a decimal (benchmark band 0.15–0.25 — see Section 7)

**PHP worked:** `P_build = 250,000`, `k = 0.18` → `R_annual = PHP 45,000`;
`R_monthly ≈ PHP 3,750`
**AUD worked:** `P_build = 22,000`, `k = 0.20` → `R_annual = AUD 4,400`;
`R_monthly ≈ AUD 367`

*Observation, not a recommendation:* at small build values `k × P_build` produces retainers below
the cost of answering a single support call. The literature's 15–25% rule was derived from
enterprise software budgets, not from PHP 250k builds. This is a scale-transfer weakness in the
benchmark, flagged as Contradiction C6.

### F9 — Discount Break-Even Volume
```
ΔQ_required = d / (m − d)
```
- `d` discount as a decimal of price
- `m` starting gross margin as a decimal
Result is the fractional increase in volume needed to hold gross profit constant.

**Worked:** `m = 0.40`, `d = 0.10` → `0.10 / 0.30 = 0.333` → **+33.3% volume required**
`m = 0.40`, `d = 0.20` → `0.20 / 0.20 = 1.00` → **+100% volume required (double)**
`m = 0.40`, `d = 0.30` → `0.30 / 0.10 = 3.00` → **+300% volume (4× the sales)**
These match the reported figures (Phoenix Strategy Group / Growth Suite; web tier) and demonstrate
the non-linearity. In PHP terms: on a PHP 250,000 quote at 40% margin, a PHP 25,000 "goodwill
discount" destroys PHP 25,000 of gross profit out of PHP 100,000 — **a 25% cut to profit for a
10% cut to price.**

### F10 — Price-Cut Offset (Simon/McKinsey form)
```
ΔQ_offset = d / (m − d)
```
Same algebra as F9, stated at portfolio level. McKinsey's reported instance: volumes would have
to rise **18.7%** to offset a **5%** price cut in typical S&P 1500 companies — implying a starting
contribution margin of about `d/ΔQ + d = 0.05/0.187 + 0.05 ≈ 0.317`. Cross-check: at `m = 0.317`,
`d = 0.05` → `0.05/0.267 = 18.7%`. **Internally consistent.**

### F11 — Expedited (Rush) Premium
```
P_rush = P_base × (1 + r)
```
- `r` rush premium as a decimal (benchmark band 0.20–1.00, extreme cases 2.0–3.0 — Section 7)

**PHP worked:** `P_base = 250,000`, 48-hour-equivalent compression `r = 0.50` → **PHP 375,000**
**AUD worked:** `P_base = 22,000`, `r = 0.25` → **AUD 27,500**

### F12 — Risk Premium (additive, per named risk)
```
P_risk = P_base × (1 + Σ ρ_i)
```
- `ρ_i` premium for risk `i` (unclear requirements, unbounded revisions, compliance scope,
  mission-critical cutover, third-party dependency, single-point client stakeholder)
**No published benchmark was found for `ρ_i` values in a software-studio context.** `chatgpt.md`
asserts the mechanism but supplies no calibration. This is the largest unquantified gap in the
pillar. Flagged as Contradiction/Gap C4.

### F13 — Blended Margin across the three streams
```
M_blended = (GP_build + GP_infra + GP_retainer) / (Rev_build + Rev_infra + Rev_retainer)
```
**PHP worked, year one, single client:**
Build: revenue 250,000, cost 112,500 → GP 137,500 (55%)
Infra: revenue 60,000 pass-through at 10% management margin → cost 54,545, GP 5,455 (9.1%)
Retainer: revenue 45,000, cost 18,000 → GP 27,000 (60%)
`M_blended = 169,955 / 355,000 = ` **47.9%**
Note the dilution: adding low-margin pass-through revenue *lowers* blended margin percentage while
raising absolute profit. This is why pass-through should be reported separately in management
accounts as well as on the invoice.

### F14 — Client Lifetime Value with retainer
```
LTV = GP_build + (GP_retainer_monthly × L) + Σ GP_changeorders
```
- `L` expected retainer lifetime in months
**PHP worked:** `137,500 + (2,250 × 30) + 60,000 = ` **PHP 265,000** over 30 months
**AUD worked:** `GP_build 11,000 + (220 × 30) + AUD 5,000 = ` **AUD 22,600**

### F15 — LTV/CAC
```
LTV/CAC = LTV / CAC
CAC     = (S_cost + M_cost + Free_build_cost) / N_clients_won
```
- `Free_build_cost` — the fully-loaded delivery cost of sponsored/free builds used as marketing
  (this is the link to the campaign docs and Pillar 4)
**PHP worked:** sales+marketing spend PHP 80,000 plus two sponsored builds at PHP 90,000 delivery
cost each = PHP 260,000, winning 4 clients → `CAC = PHP 65,000`.
`LTV/CAC = 265,000 / 65,000 = ` **4.1×**

### F16 — Free-Work Payback (derived; not from a cited source)
```
N_paid_required = Free_build_cost / GP_per_paid_client
```
**PHP worked:** `90,000 / 137,500 = 0.65` — i.e. one sponsored build is repaid by roughly
two-thirds of one paid build's gross profit. **Marked as internally derived arithmetic, not a
sourced benchmark.** Pillar 4 should test whether the conversion rate from sponsored to paid
supports this.

### F17 — Effective Rate Exposure (the number to keep hidden)
```
ER = P_build / H_actual
```
**PHP worked:** `250,000 / 180 h = PHP 1,389/h`, against a floor of PHP 752/h. Against the AU
mid-market agency band (AUD 150–200/h ≈ PHP 5,700–7,600/h) the same figure is `PHP 1,389/h ≈
AUD 36.6/h`. P1.5's point stated numerically: the *only* party who benefits from computing `ER`
is the buyer.

### F18 — Deposit Coverage Ratio
```
DCR = Deposit / Cost_to_first_milestone
```
A DCR ≥ 1 means the studio is never funding the client's project from its own working capital.
**PHP worked:** 40% deposit on 250,000 = 100,000; cost to first milestone = 45,000 →
`DCR = 2.2`.

### F19 — Price-Increase Ladder step size
```
P_new = P_old × (1 + g)
```
- `g` increase; reported acceptance band 0.08–0.15 with proper notice; >0.20 requires added value
- Close-rate-linked variant (single-source heuristic): close rate 0.50–0.60 → `g ∈ [0.50, 1.00]`;
  close rate 0.40–0.50 → `g ∈ [0.25, 0.50]`
**PHP worked:** `P_old = 250,000`, close rate 0.55, `g = 0.60` → `P_new = PHP 400,000`.
Note the two sourced bands **contradict each other by an order of magnitude** (8–15% vs 50–100%).
See Contradiction C7.

### F20 — Van Westendorp derived points
From the four cumulative curves:
- **PMC** (point of marginal cheapness) = intersection of "too cheap" and "not cheap"
- **PME** (point of marginal expensiveness) = intersection of "too expensive" and "not expensive"
- **IPP** (indifference price point) = intersection of "cheap" and "expensive"
- **OPP** (optimal price point) = intersection of "too cheap" and "too expensive"
- Acceptable price range = PMC → PME
*No worked example supplied: the method requires a respondent sample the studio does not have.
Included for completeness and because it is the standard tool the literature names.*

---

## 7. Benchmarks

All retrieved **2026-07-28** unless otherwise stamped. Source tier in the final column.
**All of these move. Re-verify.**

### 7.1 Cost and utilization
| Metric | Figure | Tier |
|---|---|---|
| Professional-services billable utilization, industry average | ~68–72% | web (aggregator) |
| Industry billable utilization, 2024 actual | 68.9% — reported as lowest since 2019 | web (aggregator, citing survey) |
| Top-quartile creative agencies | 75–80% | web |
| Creative/marketing agency target | 75–85% | web |
| Healthy blended agency utilization | 70–75%; "most agencies run at 55–65%" | web |
| Consulting healthy band | 74–84% | web |
| Designers/developers role target | 75–80% | web |
| Strategists / account managers | 50–60% | web |
| Junior delivery staff | 78–88% | web |
| Senior consultants / managers | 55–70% | web |
| Net margin, firms with utilization <60% | 8–12% | web |
| Net margin, firms with utilization >70% | 18–22% | web |
| Internal-doc assumption | "realistically ~60–70% billable utilization, not 100%" | internal (`claude-response.md`) |

**Note the spread.** "Most agencies run at 55–65%" and "healthy target 75–85%" appear in the same
source class. The internal doc's 60–70% sits at the low end of the target bands and at the high end
of the observed bands. See Contradiction C3.

### 7.2 Maintenance retainer
| Metric | Figure | Tier |
|---|---|---|
| Annual maintenance as % of original build, most-cited rule | 15–20% | web (multiple, consistent) |
| Same, wider band | 15–25% | web (multiple) |
| SMB custom applications | 15–20% | web |
| Large-scale enterprise systems | 20–30% | web |
| Consumer-facing mobile apps | 20–30% | web |
| Internal-doc figure | "15–20% of build cost annually" | internal (`claude-response.md`) |
| Caveat carried by sources | the band captures **planned** maintenance only; unplanned costs are excluded and "often the most damaging" | web |

### 7.3 Expedited / rush premium
| Metric | Figure | Tier |
|---|---|---|
| Common percentage band | 25–100% of standard rate depending on urgency | web |
| Marketing agencies, typical | 20–50% | web |
| Extreme turnarounds | 200–300% | web |
| Full reported range | 25–300% of original job cost | web |
| 24-hour deadline | approaching 100% | web |
| 48-hour turnaround | ~50% | web |

### 7.4 Discounting and price sensitivity
| Metric | Figure | Tier |
|---|---|---|
| 10% discount at 40% margin | requires +33.3% volume to break even | web (matches F9 exactly) |
| 20% discount at 40% margin | requires 2× volume | web |
| 30% discount at 40% margin | requires 4× sales | web |
| 1% price increase vs 1% volume uplift | price has greater bottom-line impact | practitioner (McKinsey) |
| 1% price increase → EBITDA margin | ~22% increase, in McKinsey's sample | practitioner (McKinsey) |
| Volume rise needed to offset a 5% price cut, typical S&P 1500 | 18.7% | practitioner (McKinsey) |
| McKinsey's characterization of demand sensitivity sufficient to justify such a cut | "extremely rare" | practitioner |

### 7.5 Deposits and milestones
| Pattern | Figure | Tier |
|---|---|---|
| Software dev typical structure | 20–30% upfront / 40–50% across 2–3 feature milestones / 20–30% on final acceptance | web |
| Upfront payment general range | 20–50% of contract value | web |
| Projects under $10,000 | 50% upfront described as standard | web |
| Reported 2026 freelance patterns | 33/33/34 equal split for design/content; 50/25/25 front-loaded for development (discovery/architecture absorb early risk) | web |
| Internal-doc figure | "Deposit up front (30–50%), milestone payments, and you own the IP until final payment clears. Non-negotiable." | internal (`claude-response.md`) |
| 50/40/10 | **not found as an industry standard** — searched and not corroborated | — |

### 7.6 Geography rate reference (feeds Pillar 8)
| Market / segment | Figure | Tier |
|---|---|---|
| AU small-to-medium agencies | AUD 150–330/h | web |
| AU larger firms | AUD 330–495/h | web |
| AU enterprise consultancies | AUD 577–1,400+/h | web |
| Sydney mid-market agencies | AUD 150–200/h (described as highest in country) | web |
| AU senior engineer, fully loaded | AUD 155,000–180,000+/yr ≈ AUD 80–95 per *productive* hour before agency margin | web |
| AU junior developer salary | AUD 80,000–95,000/yr | web |
| AU senior developer salary | AUD 180,000+/yr | web |
| PH software developer hourly | USD 18–55/h | web |
| PH mid-level developer | USD 22–27/h | web |
| PH senior developer | USD 30–40/h; JS and AI/ML specialists to ~USD 46/h | web |
| PH senior developer monthly | USD 3,000–6,000/mo | web |
| PH outsourcing by role, broad | USD 6–17/h | web (VA-tier roles, not senior engineering — do not conflate) |
| PH vs AU cost delta | 65–75% saving at comparable skill level, with full AU-hours overlap | web (vendor-published — bias risk) |

**Critical reading note.** The AU agency band (AUD 150–330/h) and the PH developer band
(USD 18–55/h ≈ AUD 27–83/h) are **not the same kind of number**. The first is a *sell* rate
including agency margin, overhead and non-billable time; the second is a *staffing/pay* rate. Any
comparison that treats them as commensurate overstates the arbitrage. Several sources in the PH-vs-AU
comparison set are published by outsourcing vendors with a commercial interest in the delta.
Flagged as Contradiction/Caution C5.

### 7.7 Paid discovery
| Metric | Figure | Tier |
|---|---|---|
| Paid discovery fee, small-ticket services | USD 25–100 | web (single source) |
| Reported effect of a USD 50 discovery fee | CAC −44%, raw bookings −~30% | web (single case, unverified) |
| Graduated discovery fee, mid-market consulting selling USD 25k–150k engagements | USD 100–500, deliverable = written scoping document | web (single source) |
| Fully-credited-on-signature model, viability condition | project sizes below ~USD 10k and lead volume high enough to absorb a ~30% booking drop | web |

### 7.8 Option architecture
| Metric | Figure | Tier |
|---|---|---|
| Enns' claim for adopting a standing three-option rule | positive outcomes increase by half (+50%) | practitioner (via secondary summary) |
| Weiss' minimum fee ROI ratio | 10:1 | practitioner (secondary summary) |
| Decoy effect, origin | Huber, Payne & Puto, 1982, Duke — beer and car choice sets | primary |
| Decoy effect magnitude under time pressure | both asymmetric-dominance and compromise decoys were **larger as time pressure decreased** | primary (*Judgment and Decision Making*) |
| Price → perceived quality, consumer products | positive and statistically significant | primary (Rao & Monroe, 1989, *JMR*) |
| Familiarity moderation | low-familiarity and high-familiarity buyers perceive a *stronger* price-quality relationship than moderately familiar buyers | primary (Rao & Monroe, 1988) |

### 7.9 Price-increase ladder
| Metric | Figure | Tier |
|---|---|---|
| Increases that land with proper notice | 8–15% | web |
| Threshold requiring added value justification | >20% | web |
| Routine annual/inflation increase | 5–10%/yr | web |
| Close-rate-linked heuristic | 50–60% close → raise 50–100%; 40–50% close → raise 25–50% | web (single source) |
| Notice period, minimum | 30–60 days | web |
| Notice period, enterprise / long contract cycles | 90 days | web |
| Notice period, alternative recommendation | 3 months | web |
| Churn profile on increase | concentrated in lowest-margin, most scope-intensive accounts | web |

---

## 8. Contradictions — stated as open questions, deliberately unresolved

**C1 — Multiplier stack vs option architecture.**
`chatgpt.md` proposes a five-layer multiplicative stack (cost floor × complexity × value × risk ×
strategic premium), with complexity calibrated ×1 / ×1.5 / ×2–3. `claude-response.md` explicitly
rejects multipliers and substitutes three-option anchoring, scope control and payment terms as the
margin defence. The external literature does not settle this: Nagle/EVE supports a *value ceiling*
calculation (compatible with the stack's intent) while Enns and Weiss both work from a value
determination straight to a fixed fee with **no multiplier chain at all**. *Open question: is the
multiplier stack a pricing method or merely a checklist for the value conversation?* Note also
that multiplying five factors compounds estimation error multiplicatively — an error property the
stack's proponent does not address.

**C2 — Is the value ceiling knowable pre-sale?**
Weiss and Enns require the buyer to disclose enough about their economics to compute value.
Nagle's EVE assumes those numbers are obtainable. van Westendorp exists precisely because they
often are not, and its own documented limitations (ignores competitive context, ignores product
value, stated ≠ revealed WTP) mean it does not fill the gap either. *Open question: for a
multi-branch mid-market buyer who has never quantified their own loss, is the value figure
discovered or co-constructed — and if co-constructed, who bears the risk when it proves wrong?*

**C3 — What utilization number is real.**
Same source class reports "most agencies run at 55–65%" and "healthy target 75–85%" and "industry
average 68–72%" and "2024 actual 68.9%." The internal doc uses 60–70%. F3 shows the floor moves
~30% across that range. *Open question: is 60–70% a conservative planning assumption or an
optimistic one for a studio whose founders also do sales, admin and marketing?* No source found
addresses utilization for a team small enough that one person is simultaneously delivery, sales
and operations — the case that actually applies here.

**C4 — Risk premium is asserted but never calibrated.**
`chatgpt.md` Layer 4 and the rush-fee literature both say uncertainty deserves higher
compensation. The rush-fee band (20–300%) is documented. **No source found supplies numeric
premiums for requirement ambiguity, revision unboundedness, compliance scope, or
mission-criticality.** *Open question: is a risk premium a price adjustment at all, or is it
properly handled through scope/contract instruments (change orders, revision caps, liability
caps) rather than through the number?* `claude-response.md` implicitly takes the second view.

**C5 — The offshore arbitrage number is contested and the units are mismatched.**
"65–75% saving at the same skill level" is published by outsourcing vendors. It also compares a PH
*pay* rate against an AU *sell* rate. Separately, both internal docs and the AU rate data create a
tension the corpus already flags at Pillar 8: if the studio prices near its PH cost base it reads
as low quality (P1.6, price-quality inference), but if it prices near AU agency rates it forfeits
the only structural advantage it has. *Open question, left open: where in the AUD 150–330/h AU
band does an offshore studio's effective rate have to sit before the price-quality inference
turns against it?* No source found answers this.

**C6 — The 15–25% maintenance rule does not scale down.**
The band derives from enterprise software budgets. Applied to a PHP 250,000 build it yields
~PHP 3,750/month, which may not cover a single incident. *Open question: is maintenance correctly
priced as a percentage of build at small build values, or does it require a floor price independent
of build size — and if a floor, what sets it?*

**C7 — Price-increase magnitude: two sourced bands an order of magnitude apart.**
"8–15% lands, >20% requires justification" vs "at a 50–60% close rate, raise 50–100%." These are
not reconcilable as stated. They may be answering different questions — existing-client renewal
increases versus new-client list-price resets — but neither source makes that distinction
explicit. *Open question left open.*

**C8 — Does anchoring high cost you the deal or win it larger?**
Enns says anchor high and lead with the premium option. Monroe/Rao say prices at the *high* end of
a range trigger monetary-sacrifice concern (the mirror of the low-end quality concern). The decoy
literature says the effect *weakens under time pressure*, which is exactly the condition of a
compressed sales conversation. *Open question: is high anchoring robust in a low-trust,
no-track-record, cross-border sale — the precise situation of a young studio selling into AU?* No
source found tests anchoring under a credibility deficit.

**C9 — Deposit and milestone convention.**
Sources report 20–30% upfront, 20–50% upfront, 50% upfront under USD 10k, 50/25/25 front-loaded,
and 33/33/34. The internal doc says 30–50% and "non-negotiable." No convergent standard exists.
The searched-for 50/40/10 pattern was **not corroborated as a standard**.

**C10 — Free/sponsored work and the price-quality inference.**
The campaign docs treat free builds as customer acquisition. P1.6 says price signals quality.
F16's derived payback arithmetic says one sponsored build costs about two-thirds of a paid build's
gross profit. *Open question deliberately left for Pillar 4: does a sponsored build establish a
zero reference price (EVE step 1) with the very buyer segment you then want to charge?* This is a
direct collision between two parts of the existing corpus and no external source was found that
addresses it for software services specifically.

**C11 — "Never expose an hourly rate" versus buyer procurement reality.**
Both internal docs agree. But mid-market buyers with a procurement function frequently *require* a
rate card, and AU government or franchise-linked buyers may mandate one. *Open question: what is
the instrument that satisfies a procurement rate-card requirement without creating the cost-plus
lens?* Not found in any source consulted. Hands to Pillar 9.

---

## 9. Sources

### Primary (peer-reviewed / original research)
- Rao, A.R. & Monroe, K.B. (1989). "The Effect of Price, Brand Name, and Store Name on Buyers'
  Perceptions of Product Quality: An Integrative Review." *Journal of Marketing Research* 26(3).
  https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2024-06/Rao%20and%20Monroe%201989.pdf
- Rao, A.R. & Monroe, K.B. (1988). "The Moderating Effect of Prior Knowledge on Cue Utilization."
  https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2024-06/Rao%20and%20Monroe%201988.pdf
- Rao, A.R. (2005). "The Quality of Price as a Quality Cue." *JMR*.
  https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2024-06/Rao%202005.pdf
- "The Price-perceived Quality Relationship: A Meta-analytic Review and Assessment of Its
  Determinants." https://www.researchgate.net/publication/5153015
- Huber, J., Payne, J.W. & Puto, C. (1982). Asymmetric dominance / decoy effect, Duke University.
  (Referenced via secondary summaries; original paper not fetched.)
- "Testing the effect of time pressure on asymmetric dominance and compromise decoys in choice."
  *Judgment and Decision Making*, Cambridge Core.
  https://www.cambridge.org/core/journals/judgment-and-decision-making/article/testing-the-effect-of-time-pressure-on-asymmetric-dominance-and-compromise-decoys-in-choice/9711E938E7AD2BAB7699073BD3A7A3A3
- "Decoy alternatives in policy choices: Asymmetric domination and compromise effects."
  *ScienceDirect*. https://www.sciencedirect.com/science/article/abs/pii/S0176268097000207
- Van Westendorp's Price Sensitivity Meter — method description.
  https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter

### Practitioner-authoritative (named authors / firms of record)
- Baker, R.J. *Implementing Value Pricing: A Radical Business Model for Professional Firms.* Wiley.
  https://www.wiley.com/en-us/Implementing+Value+Pricing:+A+Radical+Business+Model+for+Professional+Firms-p-9780470929575
  (Ch. 9: "The Consumer Surplus and Price Discrimination"; price elasticity.) *Book not fetched —
  cited via publisher TOC and summaries.*
- Weiss, A. "Formula for Value-Based Fees." https://alanweiss.com/formula-for-value-based-fees/
  **(fetched — F6 formula verbatim)**
- Weiss, A. "The Case for Value Based Fees In the 'Stubborn' Professions."
  https://www.alanweiss.com/styles/pdf/The%20Case%20for%20Value%20Based%20Fees.pdf
- Weiss, A. *Value-Based Fees*, 3rd ed. https://alanweiss.com/shop/books/hardcover/value-based-fees-3rd-edition/
- Burleson, S. "Book Summary: Value-Based Fees (Alan Weiss)."
  https://scottburleson.substack.com/p/book-summary-value-based-fees
- Enns, B. *Pricing Creativity* — rules extracted via Kang, P.
  https://www.peterkang.com/lessons-from-pricing-creativity-by-blair-enns/ **(fetched — Rules 1–7
  verbatim)**
- Chebyniak, M. "Lessons from Pricing Creativity by Blair Enns." Medium.
  https://m-cheba.medium.com/pieces-of-advice-from-pricing-creativity-by-blair-enns-104e2a773ef3
- Enns, B. "The Four Conversations." Duct Tape Marketing.
  https://ducttapemarketing.com/the-four-conversations-blair-enns-on-leading-pricing-and-selling-expertise/
- 2Bobs. "The Power of Options." https://2bobs.com/podcast/the-power-of-options
- Newfangled. "Blair Enns on The Value Conversation."
  https://www.newfangled.com/podcast/blair-enns-on-the-value-conversation/
- Simon, H. *Confessions of the Pricing Man: How Price Affects Everything.* Springer.
  https://link.springer.com/book/10.1007/978-3-319-20400-0 ; summary
  https://jamesclear.com/book-summaries/confessions-of-the-pricing-man
- Nagle, T.T. *The Strategy and Tactics of Pricing.* TOC:
  https://catdir.loc.gov/catdir/toc/ecip061/2005028572.html
- McKinsey & Company. "The Power of Pricing."
  https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-power-of-pricing
- McKinsey & Company. "Pricing: Distributors' most powerful value-creation lever."
  https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/pricing-distributors-most-powerful-value-creation-lever
- LeveragePoint. "Using Economic Value Estimation (EVE) to Execute a Value-Based Strategy."
  https://www.leveragepoint.com/blog/quantify-customer-value/using-economic-value-estimation-eve-execute-value-based-strategy/
- Ibbaka. "Core Concepts: Economic Value Estimation."
  https://www.ibbaka.com/ibbaka-market-blog/core-concepts-economic-value-estimation **(fetched)**
- Sawtooth Software. "Van Westendorp Pricing Model."
  https://sawtoothsoftware.com/resources/blog/posts/van-westendorp-pricing-sensitivity-meter
- Umbrex. "Economic Value to the Customer (EVC)."
  https://umbrex.com/resources/frameworks/pricing-frameworks/economic-value-to-the-customer-evc/

### Web / industry aggregators (benchmark figures — lowest tier, highest volatility)
- Software Pricing Partners. "The Value Metric Decision." https://softwarepricing.com/blog/value-metric-decision/
- Software Pricing Partners. "SaaS Pricing Models." https://softwarepricing.com/blog/saas-pricing-models/
- Monetizely — value metric selection and van Westendorp limitations.
  https://www.getmonetizely.com/articles/how-to-choose-the-right-saas-pricing-metric-with-value-metric-examples ;
  https://www.getmonetizely.com/articles/van-westendorp-price-sensitivity-meter-unlocking-saas-pricing-potential-while-navigating-limitations
- Ordway Labs. "4 Pricing Metrics for Usage-Based SaaS." https://ordwaylabs.com/resources/guides/usage-based-pricing-guide/pricing-metrics/
- Symson. "5 Limitations of the Van Westendorp Pricing Model." https://www.symson.com/blog/van-westendorp-pricing-model-disadvantages
- Pulsion. "Software Maintenance Cost vs Development Cost 2026." https://www.pulsion.co.uk/blog/software-maintenance-cost-vs-development-cost/
- Pegotec. "Software Maintenance Cost Percentage: 2026 Industry Benchmarks." https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/
- Abbacus Technologies. "Software Maintenance Costs in 2026." https://www.abbacustechnologies.com/software-maintenance-costs-in-2026-what-you-should-expect/
- Savi. "Software Maintenance Costs: Gartner Rule (2026)." https://savibm.com/blog/software-maintenance-costs/
- Asana. "Utilization Rate: Formula, Benchmarks." https://asana.com/resources/utilization-rate
- Laya. "Utilization vs. Realization Rate: 2026 Agency Benchmarks." https://withlaya.com/resources/agency-utilization-vs-realization-rate
- Saibon Group. "Consultant Utilization Rate Benchmarks 2025–2026." https://www.saibongroup.com/blogs/consultant-utilization-rate-benchmark
- Supervisible. "Agency Utilization Rate Benchmarks." https://www.supervisible.com/blog/agency-utilization-rate-benchmark
- Rize. "Agency Profitability Tracking: The Complete Guide (2026)." https://rize.io/blog/agency-profitability-tracking-guide
- Phoenix Strategy Group. "How Discounting Affects Profit Margins." https://www.phoenixstrategy.group/blog/how-discounting-affects-profit-margins
- Growth Suite. "Is Your Discount Strategy Killing Your Profit Margin?" https://www.growthsuite.net/blog/is-your-discount-strategy-killing-your-profit-margin
- LegalClarity. "How Much Should I Charge for a Rush Fee." https://legalclarity.org/how-much-should-i-charge-for-a-rush-fee-industry-standards/
- Sakas & Company. "Marketing agency rush fees for faster turnaround." https://sakasandcompany.com/rush-fees-for-priority-work/
- The Wordling. "Rush Fees Explained." https://thewordling.com/rush-fees-explained/
- Freelancermap. "Rush Fees: When, Why & How." https://www.freelancermap.com/blog/how-to-use-freelance-rush-fees/
- Apptage. "Milestone Payments Software Development." https://www.apptage.com/blogs/milestone-payments-software-contract/
- Horizon Labs. "Milestone-Based Contracts: Key Clauses." https://www.horizon-labs.co/resources/milestone-based-contract-guide-key-clauses
- Saldetto. "What Percentage to Charge as a Deposit." https://saldetto.com/blog/what-percentage-deposit-freelancer
- Stratagem Systems. "Software Development Contract: 10 Essential Terms." https://www.stratagem-systems.com/blog/software-development-contract-essential-terms-2026
- Appinventiv. "How Much Does Software Development Cost in Australia in 2026." https://appinventiv.com/blog/software-development-cost-in-australia/
- Conduct. "How much does software development cost in Australia? (2026 rates)." https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/
- Shinetech. "Offshore Software Development Costs in Australia (2026)." https://www.shinetechsoftware.com.au/insights/offshore-software-development-cost-australia/
- Lemon.io rate calculators — Australia https://lemon.io/rate-calculator/australia/ ; Philippines https://lemon.io/rate-calculator/philippines/
- Second Talent. "Philippines vs Australia Developer Cost & Quality Analysis in 2026." https://www.secondtalent.com/resources/philippines-vs-australia-developer-costs/ **(vendor-published — bias noted)**
- VA Masters. "Philippines Outsourcing Cost 2026." https://vamasters.com/how-much-does-it-cost-to-outsource-to-the-philippines/
- Shopify Partners. "Raise Prices at Your Agency." https://www.shopify.com/partners/blog/raise-prices-agency
- Bennett Financials. "Agency 2027 Pricing Reset." https://bennettfinancials.com/agency-2027-pricing-reset-how-to-raise-rates-without-losing-clients/
- Ignition. "How to communicate a price increase to your clients." https://www.ignitionapp.com/blog/how-to-communicate-a-price-increase-to-your-clients
- ManyRequests. "The Productized Service Guide." https://manyrequests.com/blog/productized-service-guide
- ManyRequests. "Productized Consulting." https://www.manyrequests.com/blog/productized-consulting
- The Growth Engine. "Paid discovery call playbook." https://thegrowthengine.net/paid-discovery-call-playbook-junk-leads
- MainWP. "How to not get stiffed on a project proposal" (roadmapping as productized prerequisite). https://mainwp.com/not-get-stiffed-on-a-project-proposal/

### Internal corpus
- `D:\PROJECTS\axon-enjin\pricing\chatgpt.md` — 5-layer multiplier stack, three-bucket separation,
  never-expose-hourly-rate, category reframe.
- `D:\PROJECTS\axon-enjin\pricing\claude-response.md` — cost-plus critique, 60–70% utilization,
  three-option anchoring, 15–20% retainer, pass-through separation, scope control, payment terms,
  price-increase note, offshore-vs-local pricing divergence.
- `D:\PROJECTS\axon-enjin\research\research-plan.md` — Output Contract, standing rules, known gaps.

---

## End-to-End Session Review

### What I searched and why

| Query theme | Reason | Yield |
|---|---|---|
| Ron Baker / *Implementing Value Pricing* | Named in scope; the canonical professional-services value-pricing text | Medium — confirmed price-led costing, Ch.9 consumer surplus / price discrimination. Book not fetched; publisher TOC + summaries only |
| Blair Enns / *Pricing Creativity* + Four Conversations | Named in scope; the option-architecture source | High — got seven rules near-verbatim plus the anchor structure and the +50% claim |
| Alan Weiss value-based fees | Named in scope; the ROI-multiple source | High — fetched the formula verbatim from his own site. The 10:1 ratio is secondary-sourced |
| EVE / Nagle | Named in scope; the only rigorous ceiling-calculation method | High — full component decomposition and the six value drivers. No worked numbers in source; I built my own |
| van Westendorp PSM + limitations | Named in scope | High on method and limitations. Deliberately did not build a worked example (no sample) |
| Monroe / Rao price-quality inference | Named in scope; underpins "don't undercut" | High — primary JMR sources located, plus the high-end/low-end asymmetry which turned out to cut against Enns' anchoring advice (C8) |
| Decoy / asymmetric dominance | Needed to source the good/better/best mechanic properly | High — Huber/Payne/Puto 1982 origin plus the time-pressure moderation finding |
| Hermann Simon | Named in scope | Medium — got the three-profit-drivers frame and prospect-theory link; the summaries were thin on his actual numeric heuristics |
| Software maintenance % of build | Retainer benchmark; internal doc asserts 15–20% | High convergence across many sources (15–25%), all web tier, all citing each other |
| Agency billable utilization | Cost-floor denominator; the highest-leverage variable in F3 | High volume, low convergence. Bands contradict (C3) |
| Rush / expedited premium | Expedited-tier scope item | Medium — wide reported band 20–300%, all web tier |
| Discount → volume break-even; McKinsey pricing power | Discounting damage; needed the actual algebra | High — the reported figures reconcile exactly with F9/F10, which is a genuine cross-check |
| Value-metric / price-metric design | Price metric design scope item | High — four named criteria plus the "metric density" concept and the sharp caution that per-transaction/per-outcome are placeholders |
| AU + PH rate benchmarks | Cost floor and market reference | High volume, mixed reliability, unit-mismatch problem (C5) |
| Deposit / milestone standards | Payment structure scope item | Medium — no convergent standard; 50/40/10 not corroborated |
| Productized service / paid discovery pricing | Scope item + a listed Known Gap | Low-medium — thin, single-source, and the dollar figures are for far smaller engagements than mid-market builds |
| Price-increase ladder | Listed Known Gap | Medium volume, contradictory magnitudes (C7) |

**Total: 14 WebSearch calls, 4 WebFetch calls.**

### Coverage confidence

| Sub-topic | Confidence | Note |
|---|---|---|
| Value-based / outcome pricing theory | **High** | Baker, Weiss, Nagle, Simon all located and consistent |
| Cost-floor mathematics | **High** on formula, **Medium** on inputs | F1–F4 are arithmetic and sound; utilization input is contested (C3) |
| Tiering and anchoring | **High** | Enns rules near-verbatim, decoy effect primary-sourced |
| Decoy effect / compromise effect | **High** | Primary sources located including a moderator finding |
| Price-quality inference | **High** | Primary JMR sources |
| Expedited premiums | **Medium** | Wide band, web tier only, no software-specific data |
| Risk premiums | **Low** | Mechanism asserted everywhere, calibrated nowhere. See C4 |
| Maintenance retainers | **High** on the 15–25% number, **Low** on its applicability at small build sizes (C6) |
| Pass-through infrastructure treatment | **Low-Medium** | Only the internal doc gives a mechanism ("at cost or with a small management margin"). Found no external benchmark for the management margin % |
| Deposit / milestone structures | **Medium** | Ranges documented, no convergent standard |
| Never exposing an hourly rate | **High** on rationale (Weiss primary-author + both internal docs), **Low** on the procurement edge case (C11) |
| Price metric design | **Medium-High** | Strong criteria framework; all from SaaS context, transfer to project-plus-retainer studios untested |
| Discounting damage | **High** | Algebra independently verified against reported figures |
| Price-increase ladder | **Low-Medium** | Two contradictory sourced bands; the close-rate heuristic rests on one source |
| Van Westendorp | **High** on method, **N/A** on application at this scale |
| Geography rate reference | **Medium** on AU, **Low-Medium** on PH | Vendor bias and unit mismatch |
| Paid discovery as a product | **Low** | Single-source figures, wrong order of magnitude for mid-market builds |

### Well-sourced vs thinly-sourced claims

**Well-sourced (primary or primary-author):** price → perceived quality relationship; the high-end/
low-end price-range asymmetry; decoy and compromise effects and their weakening under time
pressure; Weiss' value-based-fee formula (from his own site); Enns' seven rules; the EVE
decomposition; van Westendorp's method and limitations; the discount break-even algebra (verified
two ways).

**Thinly-sourced — flag before use:**
- Weiss' 10:1 minimum ROI ratio (secondary summaries only; his own article states no ratio).
- Enns' "+50% positive outcomes" from three options (his claim, no independent test found).
- The close-rate-linked price-increase heuristic (single web source).
- The USD 50 discovery fee → CAC −44% case (single source, no methodology).
- All utilization bands (aggregator blogs citing unnamed surveys).
- All rush-fee percentages (no software-specific data at all).
- The PH-vs-AU 65–75% delta (vendor-published).
- Baker's specifics — I did not access the book, only its TOC and summaries. Anything attributed to
  him here should be verified against the text before being relied on.

### What I could NOT find

1. **Any numeric calibration for risk premiums** in software services. The single largest gap.
2. **Any benchmark for the management margin on pass-through infrastructure.** The internal doc
   says "small" and no external source quantifies it.
3. **Any utilization benchmark for teams under ~5 people** where founders split delivery, sales and
   ops. Every utilization source assumes a firm large enough to have dedicated non-billable roles.
4. **Teardowns of actual Australian agency pricing pages** (a Known Gap in the plan). I found rate
   *bands* reported by aggregators, not primary published pricing pages. Most AU agencies do not
   publish prices — which is itself a finding consistent with H2.
5. **Any test of high anchoring under a credibility deficit** (young firm, no logos, cross-border).
   The anchoring literature assumes an established seller.
6. **Any source addressing whether free/sponsored work sets a zero reference price** for the same
   buyer segment you later charge. C10 is therefore an open collision inside the existing corpus,
   not a resolved question.
7. **Any Philippines-specific pricing literature for domestic B2B software sales.** All PH material
   found is outsourcing rate cards written for foreign buyers. The PH *domestic* mid-market willingness
   to pay is entirely unmeasured in what I could reach.
8. **Live FX rate.** The PHP/AUD figure in this document is an unverified placeholder.
9. **Realization rate benchmarks** distinct from utilization. Named in one source title but the
   figures were not accessible.

### Contradictions surfaced and deliberately left open

C1 multiplier stack vs option architecture · C2 whether the value ceiling is knowable pre-sale ·
C3 the real utilization number · C4 risk premium asserted but uncalibrated · C5 offshore arbitrage
figure contested and units mismatched · C6 the 15–25% maintenance rule does not scale down ·
C7 price-increase magnitude bands an order of magnitude apart · C8 high anchoring vs monetary-
sacrifice concern at the top of the range · C9 no convergent deposit/milestone standard ·
C10 sponsored work vs price-as-quality-signal · C11 never-quote-hourly vs procurement rate-card
requirements.

None resolved. C1, C10 and C11 are the three where the *internal corpus* contradicts itself or
contradicts the external literature, which makes them the highest-value items for later synthesis.

### Recommendations for the next sub-agents

**For Pillar 2 — Buyer Selection & Qualification:**
- F5 (EVE) is your scoring engine. An ICP score that does not compute reference value and
  differentiation value is a preference list, not a qualification model. Specifically: reference
  value is *findable pre-sale* (a hired reconciler has a salary; a coping spreadsheet has an
  owner's time cost; a prior quote is a literal number). Those are the "conscious loss" signals
  the plan names, and they are the same inputs EVE needs. Build the ICP score on them.
- C2 is your problem, not mine. If the value ceiling can only be co-constructed with the buyer,
  then qualification is partly *the buyer's capacity to quantify their own loss* — a screening
  criterion that does not appear in the plan's P2 description.
- The multi-branch thesis (pain × locations ÷ single decision chain) maps directly onto
  **metric density** (F/8). Branches are a high-density metric only if branches are similar. Test
  whether the multi-branch buyers you are targeting have homogeneous branches; if not, per-branch
  pricing will generate disputes.
- F18 (Deposit Coverage Ratio) and H8: the deposit is a qualification instrument. Worth folding
  into P2's disqualifier list.
- Unmeasured territory I could not reach and you should try: PH domestic mid-market willingness to
  pay for operational software. Every PH source I found is an outsourcing rate card for foreign buyers.

**For Pillar 3 — Positioning & Category:**
- P1.6 and C5 together are your central constraint: price is read as a quality signal, and the
  offshore studio's structural advantage is a low cost base. Undercutting the AU band converts the
  advantage into a quality objection. Positioning is the *only* lever that resolves this, which is
  why it belongs in your pillar and not mine.
- C8 is directly yours: high anchoring is documented but never tested under a credibility deficit.
  Credibility substitutes (the plan's own term) are precisely what would make an anchor survivable.
  Look for evidence on whether anchoring works without a track record.
- `chatgpt.md`'s category reframe ("we engineer business systems…" / "operational transformation"
  rather than "we build software") is the corpus's positioning seed and it is explicitly motivated
  by *pricing* — moving out of a category where a rate card is expected. Category design as an
  escape from cost-plus comparability is the through-line to run.
- C11 is partly yours: a positioning that avoids procurement-driven buyers avoids the rate-card
  requirement entirely. Whether that is a viable segment restriction is a positioning question.
- Enns Rule 7 (lead with social proof, not self-promotion) and Rule 6 (invoke policies) are
  positioning instruments as much as pricing ones. Worth re-mining *Pricing Creativity* — my
  extraction was via a single secondary summary and there is likely more there.
- Note for both: I did not access Baker's, Enns' or Weiss' books directly. If any later pillar
  depends heavily on their specifics, the books should be sourced properly rather than relied on
  through summaries.
