# Axon Enjin — Landing Page Content Draft (SEO + AISO Optimized)

Sales narrative for the Axon Enjin landing page, built on the 5-element framework, written to sit inside the existing site's structure (scroll-driven hero → studio → work → team → contact) and its network/node/spark visual language — and optimized for both traditional search engines (SEO) and AI answer engines like ChatGPT Search, Perplexity, and Google AI Overviews (AISO).

**Audience:** Ops/COO buyers at mid-size companies (roughly 50–500 people) drowning in manual, disconnected workflows.

Sections marked 🔲 need real input from you before they go live — everything else is ready to drop in as copy.

---

## SEO + AISO Strategy (read this before implementing)

### Target keywords
- **Primary:** custom software development company, business process automation company, custom workflow automation
- **Secondary:** custom automation solutions for operations teams, software integration company, internal tools development, ops automation agency, replace manual workflows with automation
- **Long-tail (good for AI-answer queries):** "how to automate operations without hiring engineers", "custom software vs off-the-shelf SaaS for mid-size companies", "what is business process automation"

### Why AISO differs from SEO here
Traditional SEO rewards keyword coverage, backlinks, and page speed. AI answer engines (ChatGPT Search, Perplexity, Google AI Overviews, Claude) instead **extract and cite clear, self-contained factual statements** — they favor pages that state *what the company is*, *what problem it solves*, and *how it's different* in plain, quotable sentences near the top of the page, plus structured Q&A content. The scroll-driven poetic copy (Chapters 01–04) is good for human conversion but close to invisible to both crawlers and LLMs if it's rendered as canvas/animation rather than real DOM text — see the technical note below.

### Technical requirements (not copy, but required for this content to work)
1. **All narrative text must be real HTML text in the DOM**, not drawn on `<canvas>` or rendered only via JS after scroll — crawlers and AI retrieval systems largely can't read canvas content or text that only appears after a scroll-triggered animation fires. If the current scroller renders chapter text as DOM nodes (even if opacity/position is animated), that's fine; if any of it is drawn to canvas, it needs a parallel real-text version (can be visually hidden, e.g. `sr-only`, as long as it's not `display:none`, which some crawlers discount).
2. **Add JSON-LD structured data** to `<head>`: `Organization`, `Service`, and `FAQPage` schemas (drafted below). This is the single highest-leverage AISO move — AI answer engines and Google's AI Overview both weight structured data heavily when deciding what to cite.
3. **Add an `llms.txt` file** at the site root (`/llms.txt`) — an emerging convention (plain-markdown summary of what the site/company is, aimed at LLM crawlers) that several AI crawlers now check. Draft included below.
4. **One clear H1** on the page stating what the company does in plain language (not just the wordmark "AXON ENJIN") — search engines and AI crawlers weight the H1 heavily for topical relevance.
5. Meta title ≤ 60 characters, meta description ≤ 155 characters (both below are sized to fit).

---

## Hero / Scroller (4 chapters, matches current scroll structure)

**Page `<title>` (≤60 chars):** `Axon Enjin — Custom Software & Business Automation`
**Meta description (≤155 chars):** `Axon Enjin builds custom software and workflow automation for operations teams — replacing manual processes without new headcount.`

**H1 (real DOM text, visible or paired with the wordmark — this is the single most important SEO/AISO line on the page):**
`Axon Enjin builds custom software and automation systems for company operations teams.`

*(The poetic wordmark "AXON ENJIN — Every process, built to fit" can remain the primary visual hero; the H1 above should exist as real, readable text on the same view — e.g. a subhead directly under the wordmark — not just in a meta tag.)*

### Chapter 01 — The Old Trade-Off
**Headline:** Software used to be one-size-fits-all.
**Subline:** That was never true. It was just what you could afford.

### Chapter 02 — The Shift
**Headline:** Custom software used to cost a year and a headcount.
**Subline:** Now it costs weeks. The gap between "off-the-shelf" and "built for us" just became affordable to close.

### Chapter 03 — The Widening Gap
**Headline:** Every quarter, some companies design their operations on purpose. Others keep gluing theirs together.
**Subline:** One compounds into speed. The other compounds into debt.

### Chapter 04 — Arrival
**Wordmark:** AXON ENJIN
**Tagline:** Every process, built to fit.
**CTA:** See what we'd automate first →

---

## #1 — The Big Change (Studio-intro section)

**Section headline (H2, keyword-bearing):** Why custom software is replacing off-the-shelf SaaS

**Body:**
For twenty years, "getting software" meant picking something off a shelf and bending your company around it. SaaS is built for the average company — which means it fits no company exactly. That trade-off was unavoidable, because building custom software meant an enterprise budget and an eighteen-month timeline.

That constraint is gone. AI-assisted engineering has collapsed the cost and time of building bespoke systems by an order of magnitude — what used to take a year and a six-figure budget now takes weeks. **Custom-fit software and business process automation are no longer a luxury reserved for large enterprises.** They're becoming the default expectation for any mid-size company that wants to move fast without adding headcount.

---

## #2 — Winners and Losers

**Section headline (H2):** Manual workflows vs. automated operations: the compounding gap

**Body (two-column framing):**

**Duct-taped (manual operations):** Spreadsheets bridging five different logins. Every new hire onboarded into a patchwork nobody fully understands. Every new tool adds another seam that eventually breaks — and someone has to notice, and someone has to fix it, by hand.

**Designed (automated operations):** Systems that match how the company actually works. Every process automated frees a person for judgment calls instead of data entry. Each automation makes the next one cheaper and faster to ship.

**Closing line:** This isn't "automate or don't." It's the gap between companies who design their operations on purpose and companies patching theirs together — and that gap compounds every quarter.

---

## #3 — The Promised Land

**Section headline (H2):** What operations look like after automation

**Body (bulleted, visual-friendly — bullets also read well as AI-Overview-style extractable list):**
- Systems that match how *your* company works — not how a SaaS vendor imagined an average one would.
- A new process gets automated in days, not quarters — no ticket filed with an already-overloaded eng team.
- Your best people spend their time on judgment calls and exceptions, not reconciling spreadsheets.
- Growth doesn't automatically mean proportional headcount. The system scales before the team has to.

---

## #4 — Features as Magic Gifts (replaces current "Studio" capability copy)

**Section headline (H2):** Common obstacles to automating operations — and how we solve each one

*(Framed as an obstacle → answer table, which doubles as FAQ-style content search engines and AI answer engines can extract directly.)*

| Their fear | Our answer |
|---|---|
| "We can't pull engineers off the roadmap to build internal tools." | We embed alongside your team and ship production automations without touching their sprint. |
| "Every integration turns into a six-month nightmare wiring APIs together." | We connect the tools you already run — CRM, ERP, support, internal databases — into one working system, in days, not quarters. |
| "Off-the-shelf software makes us change our process to fit its workflow." | Built around how your team works today. The software bends. You don't. |
| "We don't trust automation with things that actually matter." | Human-in-the-loop by design — audit trails, approval steps, full visibility on every automated decision. |
| "Once it's built, it rots into tech debt no one understands." | Ongoing partnership, not a build-and-vanish handoff. We maintain and extend what we ship. |

🔲 **Needs confirmation:** these five map to common Ops/COO objections but should be checked against what Axon Enjin actually builds today — correct any that don't match, and note if there's a sixth capability worth featuring (e.g. a specific integration, industry, or automation type you specialize in).

---

## #5 — Evidence (replaces current fake logos / fake case studies / fake team)

**Section headline:** [Depends on what's real — see below]

🔲 **This section is currently 100% fabricated on the live site** (press logos for Monocle/Dezeen/AD/Wired, a fake "4.9/5 · 60 shipped products" stat, three placeholder case studies, three placeholder team members with fake social links). It needs to be replaced with something real. Pick whichever applies:

**If you have real client work:**
- 2–3 case studies: company/industry (can anonymize — "a 200-person logistics company"), the specific automation built, and one concrete before/after number (hours saved per week, error rate, headcount avoided, time-to-close). Concrete numbers are also the strongest AISO material — AI answer engines preferentially cite pages with specific, verifiable-sounding stats over vague marketing claims.

**If you don't have case studies yet:**
- Reframe as a **founding-cohort offer** instead of fake social proof: *"We're taking on 4 companies this quarter to build their first automation at founding-client pricing."* Scarcity + specificity reads as more credible than invented testimonials, and it's honest.
- Lead with **founder/team credibility** instead — relevant systems shipped, companies worked at, technical background — if that's stronger than client count right now.

**Low-risk entry point (works either way):**
- *"First automation live in 2 weeks. Fixed scope, fixed price."* — gives a skeptical Ops/COO a cheap way to test you before committing to anything bigger.

🔲 **Needs from you:** real case studies (even 1, even anonymized) and/or team background, so nothing on the page is fabricated.

---

## FAQ Section (new — add near bottom of page, before Contact)

Structured Q&A is one of the highest-yield formats for both Google's "People Also Ask" / featured snippets and for AI answer engines, which frequently lift FAQ content verbatim into their answers. Pair this with `FAQPage` JSON-LD (below) so it's marked up, not just visually formatted.

**Q: What does Axon Enjin do?**
A: Axon Enjin builds custom software and business process automation for company operations teams — replacing manual, spreadsheet-driven workflows with systems built around how the company actually works.

**Q: How is this different from off-the-shelf software or SaaS tools?**
A: Off-the-shelf software is built for an average company and forces your team to adapt to its workflow. Axon Enjin builds the system around your existing process instead of making you change it.

**Q: How long does it take to build a custom automation?**
A: A first automation can go live in about two weeks with a fixed scope and fixed price. 🔲 *(confirm this timeline is accurate before publishing)*

**Q: Do we need our own engineers to work with Axon Enjin?**
A: No. Axon Enjin embeds directly with your team and ships production automations without pulling your engineers off their existing roadmap.

**Q: What kinds of systems does Axon Enjin connect or automate?**
A: 🔲 *(fill in with real specifics — e.g. "CRM, ERP, support ticketing, and internal databases," or name actual categories/industries served)*

**Q: Is automation safe for processes that matter — approvals, finance, customer data?**
A: Yes — every automation is built human-in-the-loop by design, with audit trails and approval steps so nothing runs unmonitored.

---

## Contact / CTA (existing section, copy adjustment)

**Headline:** Tell us what's eating your team's time.
**Body:** We'll tell you what we'd automate first — no deck, no discovery-call theater. Reply within one working day, with an opinion attached.
**CTA button:** Book a 20-minute call

---

## Structured Data to Add (JSON-LD, place in `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Axon Enjin",
  "description": "Axon Enjin builds custom software and business process automation for company operations teams.",
  "url": "https://axonenjin.com",
  "sameAs": []
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom software development and business process automation",
  "provider": { "@type": "Organization", "name": "Axon Enjin" },
  "areaServed": "Global",
  "audience": {
    "@type": "Audience",
    "audienceType": "Operations leaders and COOs at mid-size companies"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Axon Enjin do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Axon Enjin builds custom software and business process automation for company operations teams — replacing manual, spreadsheet-driven workflows with systems built around how the company actually works."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from off-the-shelf software or SaaS tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Off-the-shelf software is built for an average company and forces your team to adapt to its workflow. Axon Enjin builds the system around your existing process instead of making you change it."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need our own engineers to work with Axon Enjin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Axon Enjin embeds directly with your team and ships production automations without pulling your engineers off their existing roadmap."
      }
    },
    {
      "@type": "Question",
      "name": "Is automation safe for processes that matter — approvals, finance, customer data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — every automation is built human-in-the-loop by design, with audit trails and approval steps so nothing runs unmonitored."
      }
    }
  ]
}
```

🔲 Fill in the real domain in `url` and any real social/profile links in `sameAs` before publishing.

---

## `llms.txt` Draft (place at site root, `/llms.txt`)

```markdown
# Axon Enjin

> Axon Enjin builds custom software and business process automation for company operations teams — replacing manual, spreadsheet-driven workflows with systems built around how the company actually works.

## What we do
- Custom software development for internal operations and workflow automation
- Integrating existing tools (CRM, ERP, support, internal databases) into one working system
- Human-in-the-loop automation with audit trails and approval steps
- Ongoing maintenance and extension of shipped systems, not one-off builds

## Who we serve
Operations leaders and COOs at mid-size companies (roughly 50–500 employees) looking to automate manual workflows without adding headcount or waiting on a generic SaaS roadmap.

## Contact
[email / booking link]
```

---

## Open Items Before This Goes Live
1. 🔲 Real case studies / metrics / team background (Section #5) — the current site's proof section is entirely fake and is the highest-priority fix.
2. 🔲 Confirm the 5 "magic gift" capabilities match what Axon Enjin actually offers today.
3. 🔲 Confirm the "2 week / fixed price" first-automation claim before it goes into the FAQ and evidence sections.
4. 🔲 Confirm real domain and social links for the JSON-LD `url` / `sameAs` fields.
5. Confirm we're keeping the existing spark/network/connection visual metaphor as the throughline — this draft assumes yes, since it's the established brand identity in `index.html`.
6. Technical: verify hero/scroller chapter text renders as real DOM text (not canvas-drawn) so it's crawlable — see "Technical requirements" above.
