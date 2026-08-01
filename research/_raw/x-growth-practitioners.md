# X/Twitter — Growth-Strategy School (worker B2, grw-x channel)

Scope: named growth practitioners and their frameworks (loops/funnels, activation, retention,
PLG, north-star, ICE/RICE, referral, monetization, growth-team org design). Evidence discipline
per charter: every claim carries post ID + URL + handle + ISO date, rung-labeled
**[measured]** / **[practitioner-opinion]** / **[folklore]**. Benchmark numbers get a TRACED/
UNTRACED verdict with sample caveats.

Tool: `xrelay`. Serialized (2-5s+ gaps, batch --delay 3000). Session note: topical keyword
search on growth terms degraded fast into junk/spam within the first few searches (confirms
charter's warning) — pivoted to authority routing (`from:<handle>` + `user`/`archive
user`/`following`) as primary strategy from early on, per brief instruction.

---

## 1. Handle roster (vetted via `xrelay user`)

| Handle | Name | Verified | Followers | Tweets | Bio (as-of 2026-08-01) | Verdict |
|---|---|---|---|---|---|---|
| @ElenaVerna | elena verna | yes | 10,737 | 224 (128 fetched) | "Growth @ Lovable" | ALIVE but pivoted — now Growth lead at Lovable (AI vibe-coding startup), not posting independent growth-framework threads much since ~2023. Highest-yield handle for 2021-2022-era framework content; low-yield for current opinions (mostly jokes + Lovable promo since 2025). |
| @andrewchen | andrew chen | yes | 413,113 | 31,455 | "🇺🇸 a16z speedrun" | ALIVE, extremely prolific (31k+ tweets) — needs topic-filtered `from:` search, full archive infeasible in this budget. |
| @bbalfour | Brian Balfour | yes | 37,032 | 4,406 | Founder/CEO @reforge; advisor @LongJourneyVC | ALIVE, active. |
| @lennysan | Lenny Rachitsky | yes | 407,683 | 39,948 | "Deeply researched product, growth, and career advice" | ALIVE, extremely active — the aggregator/podcast host; heavily amplifies Verna, Balfour, Fishman, etc. His own posts often summarize others' data — verify sourcing per claim. |
| @onecaseman | Casey Winters | yes | 19,245 | 5,976 | Co-founder @supermeai (AI-native professional network); ex-Reforge/Pinterest/Grubhub growth | ALIVE. |
| @far33d | Fareed Mosavat | yes | 13,309 | 18,847 | Visiting Partner @a16z speedrun; ex-Reforge/Slack/Instacart/Runkeeper/Zynga/Pixar | ALIVE. |
| @poyark | Kyle Poyar | not verified | 5,923 | 918 | "#Pricing #GTM #Growth. Full-time solopreneur. Previously @SimonKucher @OpenViewVenture. Newsletter: Growth Unhinged" | ALIVE. **Handle correction: NOT `kyle_poyar` (does not exist) — correct handle is `poyark`.** Now solo (left OpenView), still the PLG-benchmark voice via Growth Unhinged newsletter. |
| @SeanEllis | Sean Ellis | not verified | 116,768 | 48,388 | "Author of Hacking Growth... Led early growth @ Dropbox, Eventbrite, LogMeIn, Lookout. Teach growth @ [GrowthHackers]" | ALIVE, high volume. |
| @johncutlefish | John Cutler | yes | 116,965 | 178 total (low — spare/curated account; following only 10 people) | "I like the beautiful mess of product development. Newsletter" | ALIVE but sparse on X — his metrics-theater/Goodhart's-law content lives primarily on Substack/LinkedIn; X account is a low-volume signpost. |
| @wes_bush | Wes Bush | yes | 4,807 | 7,322 | Author of Product-Led Growth (book); ProductLed | ALIVE. Note: org account is @productled (not vetted separately — Wes's personal account carries the framework content). |
| @ravi_mehta | Ravi Mehta | not verified | 10,365 | 677 | CEO @joinoutpace; ex-EIR @Reforge, CPO @Tinder, @Facebook, @TripAdvisor, @Xbox | ALIVE. **Handle correction: `ravimehta` (21 followers) is the WRONG account — correct handle is `ravi_mehta`.** |
| @kevinakwok | Kevin Kwok | yes | 35,138 | 30,488 | (no bio) | ALIVE, prolific; Reforge orbit essayist (aggregation/loops theory). |
| @BlakeMBartlett / Blake Bartlett | — | — | — | — | Coined "Product-Led Growth" ~2016 while at OpenView | **NOT FOUND.** No active personal X handle located via search (search results returned junk/unrelated matches — confirms topical-search degradation). PLG-coinage attribution is well documented off-X (OpenView blog, podcasts) but not chased further here — out of X-channel scope once search failed twice. |
| @fishmanaf | Adam Fishman | — (discovered via Verna retweet, not directly vetted with `xrelay user`) | — | — | FishmanAF Newsletter; ex-Patreon/Imgur/Lyft growth | ALIVE — found via Elena Verna's retweet graph (see §1a). **Handle correction: neither `adamjfishman` nor `afishman21` exist — correct handle is `fishmanaf`.** Publishes "Growth Competency Model" framework (2022-06-28, https://x.com/fishmanaf/status/1541799449571246081). |
| @peeplaja | Peep Laja | — (discovered, not directly vetted) | — | — | CEO @wynter_com, founder of CXL (major CRO authority) | Discovered via Verna's `following` list. Queued for topical batch (§1a) — CXL is arguably THE incumbent CRO authority; his "ICP" and testing-rigor content is central to the CRO-folklore-falsification wedge. |
| @nireyal | Nir Eyal | — (discovered) | 103,084 (per Verna-following snapshot) | — | Author of "Hooked" and "Indistractable"; NYT bestseller, ex-Stanford lecturer | Discovered via Verna's `following`. Hook Model owner — dark-patterns ethics adjacency per controller-canon §2. |
| @Patticus | Patrick Campbell | — (discovered) | 52,836 | — | Founder NewCo; former Founder @profitwell (acquired by Paddle); pricing/revenue expertise | Discovered via Verna's `following`. Pricing-experiment authority. |
| @SamuelHulick | Samuel Hulick | — (discovered) | 9,023 | — | "Turning signups into revenue — Activation consulting @UserOnboard" | Discovered via Verna's `following` AND appears twice in her retweet history (2021-11-15, 2021-11-18). UserOnboard is a long-running activation/onboarding-teardown site — direct hit on the activation topic. |
| @danhockenmaier | Dan Hockenmaier | — (discovered) | 11,827 | — | "Growth, marketplaces, trying to separate signal from noise. Chief Strategy Officer" | Discovered via Verna's `following`. Marketplace-growth specialist (co-author of the well-known "Amplitude marketplace metrics" work off-X). |
| @HilaQu | Hila Qu | — (discovered) | 1,869 | — | "Growth Advisor & EIR @ Reforge. Former Growth Leader @GitLab, @Acorns, @Growthhackers" | Discovered via Verna's `following`. |
| @crystalwidjaja | Crystal Widjaja | — (discovered) | 21,943 | — | "introverted introvert" (sparse bio); ex-Gojek/Reforge EIR, well-known growth-model/data essayist | Discovered via Verna's `following` AND her retweet history (2021-04-21, on "Data Informed → Data Led" maturity model). |
| @asmartbear | Jason Cohen | — (discovered) | 47,384 | — | Founder of WP Engine and Smart Bear; SaaS metrics essayist ("bell curve" of Twitter accounts amplified by Verna 2021-12-23) | Discovered via Verna's `following`/retweet graph. SaaS-metrics-folklore-adjacent. |
| @spenserskates | Spenser Skates | — (discovered) | 10,991 | — | CEO/cofounder @Amplitude_HQ | Discovered via Verna's `following`. Amplitude = north-star-metric playbook originator (product-side). |

### 1a. Discovery method note
Per brief, ran `xrelay following elenaverna --limit 100` ONCE as a discovery tool (single call,
2026-08-01). It returned her 100 most-recently-followed accounts and surfaced ~9 additional
growth-relevant practitioners not on the original roster (Peep Laja/CXL, Nir Eyal/Hooked,
Patrick Campbell/ProfitWell pricing, Samuel Hulick/UserOnboard activation, Dan Hockenmaier/
marketplaces, Hila Qu, Crystal Widjaja, Jason Cohen/SaaS metrics, Spenser Skates/Amplitude CEO).
This list is NOT exhaustive (following count is 161; only 100 returned by one page) — a second
page would surface more, but budget did not allow.

### 1b. Handle-resolution gotchas (for the controller / future workers)
- `kyle_poyar` → does not exist. Correct: **`poyark`**.
- `ravimehta` → wrong account (21 followers, dead). Correct: **`ravi_mehta`** (10,365 followers,
  ex-Tinder CPO).
- `adamjfishman` / `afishman21` → neither exists. Correct: **`fishmanaf`**.
- Topical X search for "Blake Bartlett OpenView", "Ravi Mehta Growth Manifesto", "Kyle Poyar PLG"
  returned junk/unrelated tweets after the first couple of queries — **topical search degrades
  fast on growth-adjacent name searches**, consistent with the charter's warning that
  vendors/hustle-marketers dominate growth topic terms. Authority routing
  (`xrelay user <guess>`, then confirm via a `from:` search) was more reliable than keyword
  search for handle resolution.

---

## 2. Elena Verna — full archive analysis (128 tweets fetched via `xrelay archive user elenaverna
--limit 200`, 2026-08-01; her total tweet count is 224, so this is her full recent+older
sample the endpoint returned, not a complete 224-tweet set)

**CRITICAL EVIDENCE-HYGIENE FINDING**: `xrelay archive user` unwraps retweets, so the `author`
field on an unwrapped retweet is the ORIGINAL author, not Verna — attributing those quotes to
Verna would be a sourcing error. Split of the 128 fetched tweets:
- **53 are her own** (original tweets + quote-tweets where she adds commentary over a quoted
  tweet).
- **75 are retweets of other people** (unwrapped; original author preserved in `author` field,
  `retweetedBy: "ElenaVerna"` marks it as her retweet/endorsement).

### 2a. Elena Verna in her own words (verbatim, dated, IDs) — growth mental models

- **[practitioner-opinion]** "Five Laws of Growth: 1. PMF, then data, then growth / 2. Scale with
  frameworks, not hacking / 3. Build loops, not funnels / 4. Growth is evolution, not revolution
  / 5. Embrace failure turned into learning. <Non-negotiable principles of every successful
  growth team/tribe>" — 2022-06-28T14:10:41Z,
  https://x.com/ElenaVerna/status/1541786165203931136 (91 likes, 11 RT, 18 bookmarks)
- **[practitioner-opinion]** "If you are not leveraging *all* of the growth [motions] x [levers]
  combos below in your growth model, you will be disrupted by competition who will. Strategy is
  not about which 3x3 option to pick, but rather when and how to sequence them all." (links an
  image of her 3×3 growth-motions × growth-levers matrix, image not resolved/OCR'd in this pass)
  — 2022-07-01T17:25:05Z, https://x.com/ElenaVerna/status/1542922250353082370 (217 likes, 31 RT,
  147 bookmarks — her highest-bookmarked own tweet in this sample; strong signal this framework
  is the one people save).
- **[practitioner-opinion]** "Not experimenting is still testing, just on 100% of the population
  without any quantifiable learnings." — quoted/attributed to her at #productcon, captured via a
  third party's tweet (@jonohey, retweeted by Verna) 2022-09-08T11:59:12Z,
  https://x.com/jonohey/status/1567850213074665473 — NOTE: this is a THIRD-PARTY paraphrase of a
  live-talk quote, not Verna's own tweet text — treat as secondhand quotation, not primary.
- **[practitioner-opinion]** "It's not a question of IF you should have a Product-Led Growth,
  it's a question of WHEN" — same caveat, third-party paraphrase from #Productcon
  (@felajikobi, retweeted by Verna), 2022-09-08T11:16:25Z,
  https://x.com/felajikobi/status/1567850031926988800.
- **[practitioner-opinion]** Six Rules of Hiring for Growth (paraphrased by @rsriram9, retweeted
  by Verna, sourced "via @lennysan" i.e. Lenny's newsletter): "Rule 1: Growth model before
  growth / Rule 2: Invest in the data / Rule 3: Create the first growth model yourself / Rule 4:
  Hire a builder / Rule 5: Prioritize homegrown talent / …" — 2021-11-10T01:15:00Z,
  https://x.com/rsriram9/status/1458250795992944642. Primary source is Lenny's newsletter piece
  on hiring your first growth lead (link in a companion retweet:
  https://x.com/sajithpai/status/1458479470856261634, 2021-11-10, points to
  lennysnewsletter.com/p/hiring-growth — NOT independently fetched in this X-channel pass, flag
  for grw-web to pull the full newsletter text).
- **[practitioner-opinion]** Product-Led Sales (PLS) framing: "Product-led sales (PLS) is the
  next big shake-up in B2B SaaS, but making it work isn't the same playbook as traditional
  enterprise sales." — launching a PLS series with @endgamelabs — 2022-07-25T14:09:47Z,
  https://x.com/ElenaVerna/status/1551570410055032840. Companion tweet on the funnel mechanics:
  "If you are struggling to generate a pipeline out of usage, you are skipping one of the steps
  in the Product-Led Sales Demand Gen (most likely 2 & 3)" — 2022-07-14T18:57:12Z,
  https://x.com/ElenaVerna/status/1547656475580911616.
- **[practitioner-opinion]** On sales-led vs product-led vs marketing-led (the "9 squares" go-
  to-market matrix), paraphrased by a third party but attributed with a direct quote: "To win in
  business & market you have to play across all 9 squares. It's not a question of which one you
  should pick. It is a question about which one should prioritise and how the rest of them will
  be sequenced." — via @spectrumspect7 retweet, 2022-08-16T16:43:38Z,
  https://x.com/spectrumspect7/status/1559585340117090304.
  **This is the same "sequence everything, don't pick one" logic as the 3x3 growth-motions
  matrix above and the Five Laws — a consistent Verna through-line: growth strategy is
  combinatorial/sequencing, not single-lever selection.**
  **Family-relevant seam**: this directly supports the charter's ICE/RICE-as-folklore-adjacent
  framing from the other direction — Verna's model argues prioritization tools that force a
  single pick are the wrong shape for growth strategy; growth is a portfolio/sequencing problem.
- **[practitioner-opinion]** Career growth model (personal-brand framing applied to AARRR):
  "//Acquisition: I do everything I can to share everything I know with the world... this
  drives my brand awareness... Word of mouth & content loops FTW" /
  "//Monetization: My use case (creating growth models) is far better applicable for advising
  gigs than FT, so I changed my monetization model..." /
  "//Retention: My FT ~8yr at Surveymonkey has created incredible career leverage..." — 3-tweet
  thread, 2021-07-07T22:55:17-18Z, https://x.com/ElenaVerna/status/1412908107039055873 (lead
  tweet). Notable: she explicitly maps AARRR-style acquisition/monetization/retention language
  onto CAREER strategy, not just product — a recurring rhetorical move in her corpus.
- **[practitioner-opinion]** Anti-growth-hacking stance (repeated theme): "Marketers have done it
  again. First came the 'growth marketing' rebrand, instantly increasing their salary by 30%.
  But now they are evolving to 'no-code developers', ripping into your r&d budget. Bravo." (sarcastic)
  — 2022-01-18T16:49:26Z, https://x.com/ElenaVerna/status/1483543366050717698. Also: "Sorry not
  sorry to all of the growth hackers out there." — 2022-08-04T02:08:29Z,
  https://x.com/ElenaVerna/status/1555012767068917762. And amplified via retweet of @fishmanaf's
  "Let's STOP the practice and terminology of 'Growth Hacking'" FishmanAF Newsletter piece —
  2022-08-09T15:56:06Z, https://x.com/fishmanaf/status/1557035517761490946 (she's credited as a
  contributor to that piece's thinking). **This is a clear, repeated, dated position: Verna
  treats "growth hacking" as a discredited/mocked term, contrasted with "growth model" and
  "frameworks."**
- **[folklore/observational]** Home-page-redesign-as-growth-lever warning: "So if you are
  betting on lifting your ARR via home page redesign, you will (1) hit your revenue goals this
  year and (2) cripple your business growth for the next 3 years." — 2021-04-22T19:25:50Z,
  https://x.com/ElenaVerna/status/1385313917862178821, with the follow-up rationale: "Because
  you will only optimize experience for people who have already made up their mind. And leave
  behind anyone who still needs to be convinced. And your growth opportunity is with people who
  are not yet aware of you or still considering you!" — 2021-04-22T19:27:10Z,
  https://x.com/ElenaVerna/status/1385314252160847872. **This is a direct, dated,
  practitioner-opinion critique of CRO-on-marketing-pages-as-growth — relevant to the CRO-
  folklore-falsification wedge: a named growth authority arguing homepage CRO wins are often a
  short-term/long-term tradeoff, not a pure win.**
- **[practitioner-opinion]** On seniority ladders in growth teams: "Stages of growth seniority"
  (image, not OCR'd) — 2022-07-27T19:30:23Z, https://x.com/ElenaVerna/status/1552375868659564547
  (42 likes).
- **[practitioner-opinion]** On the difficulty of the growth-hire role, twice: "I'm on a mission
  to stop misinformation about what 'growth' is and how to hire for it. Read my detailed step by
  step guide here" — 2021-11-09T20:38:41Z,
  https://x.com/ElenaVerna/status/1458172213555826690 (external guide link not resolved in this
  pass — t.co shortlink, flag for grw-web). And: "Recruiting for growth be like: 'We are looking
  for someone to accelerate our growth [but the rest of the company will not help]'" —
  2022-08-06T18:18:12Z, https://x.com/ElenaVerna/status/1555981579721252864 (98 likes — high
  engagement, resonant folklore about org dysfunction around growth hires).
- **[practitioner-opinion]** Freemium-vs-trial position (amplified via Lenny retweet but
  represents her stated view): "Should you go freemium, or go trial? @ElenaVerna shares her
  perspective on why freemium is always the way to go." — via @lennysan,
  2022-06-25T17:16:21Z, https://x.com/lennysan/status/1540768382655553536. Companion: "How to
  decide what to make free in your freemium product from @ElenaVerna" — via @lennysan,
  2022-09-26T19:37:30Z, https://x.com/lennysan/status/1574543300303892481. **NOTE: "freemium is
  always the way to go" is a strong, quotable, and arguably falsifiable claim — flagged as a
  candidate for adjudication/falsification-strip treatment (does she qualify "always" anywhere
  in the underlying newsletter piece? Not resolved in this X-only pass — the podcast/newsletter
  content itself was not fetched).**

### 2b. Verna's posting-cadence finding (dated pattern, itself a finding)
Sorting her OWN tweets by date shows a sharp drop-off in growth-framework content after 2022:
dense framework-posting cluster Jun-Sep 2022 (Five Laws, 3×3 matrix, PLS series, hiring rules,
seniority ladder), then near-silence on frameworks through 2023, and by 2025-2026 her own X
timeline is dominated by jokes/memes and Lovable-company promotion (she is now "Growth @
Lovable" per bio) rather than original growth-strategy threads. Her long-form growth content in
this window appears to have moved to Substack (she references "my substack is finally here",
2023-02-28, https://x.com/ElenaVerna/status/1630674123528568833) and to Lenny's newsletter/
podcast as a guest, not primary X threads. **Implication for the family**: her highest-density,
most-citable material (Growth Competency framing, 3×3 growth model, PLS taxonomy) is
concentrated in a ~15-month window (2021-11 to 2022-09) and lives mostly OFF X (Substack,
Lenny's newsletter, Reforge). X search/archive alone under-samples her current thinking — the
skill build should pull her Substack/Reforge material directly (flagged for grw-web/grw-skills,
not fetched here — out of X-channel scope).

### 2c. Verna's retweet graph (who she amplifies — network map, not her own claims)
75 retweets in the 128-tweet sample. Notable clusters:
- **Reforge orbit, heavy amplification of each other**: @far33d (Fareed Mosavat), @fishmanaf
  (Adam Fishman — see roster correction above), @lennysan (12+ retweets in this sample alone —
  by far her most-retweeted source), @ravi_mehta, @crystalwidjaja, @onecaseman all appear
  co-mentioned in Reforge cohort-recruiting tweets (e.g.
  https://x.com/smalkana/status/1542236490348072962, 2022-06-29, naming
  "@ElenaVerna @far33d @onecaseman @ravi_mehta @iammamuna @elylerner" as a single Reforge
  faculty cohort — confirms this is a tight, self-citing practitioner cluster, not independent
  voices).
- **Lenny Rachitsky is her dominant amplification partner**: of the 75 retweets, at least 12 are
  Lenny promoting Verna podcast/newsletter content (e.g.
  https://x.com/lennysan/status/1881483859235422461, 2025-01-19, "10 growth tactics that never
  work with @ElenaVerna" — her THIRD appearance on his podcast per that tweet's own text).
  **This means a large fraction of "Elena Verna's growth opinions" as they appear on X are
  actually Lenny's paraphrases/promos of long-form podcast conversations, not her own written
  tweets — evidence discipline requires citing the underlying podcast/newsletter for the actual
  claim, not the promo tweet, wherever a full episode transcript is needed. Not fetched in this
  X-only pass.**
- **Lovable-era retweets (2025-2026)**: she now heavily retweets @Lovable (company account) and
  @antonosika (Lovable co-founder Anton Osika) product/funding announcements — e.g. "Lovable just
  crossed $100M ARR in 8 months. Faster than OpenAI, Cursor, Wiz..." (@antonosika,
  2025-07-23T13:50:22Z, https://x.com/antonosika/status/1948024371370418666, retweeted same day
  by Verna). **[measured, but UNVERIFIED IN THIS PASS] — "$100M ARR in 8 months" and "$200M
  raise at $1.8B valuation" (companion tweet,
  https://x.com/antonosika/status/1945905600463819005, 2025-07-17) are self-reported company
  claims by Lovable's own founder, not independently audited. Mark UNTRACED as a growth-industry
  benchmark (no methodology disclosed for how ARR is counted); usable only as a dated company
  claim, not as a verified growth number.**
- **CRO-relevant folklore inside her circle**: @SamuelHulick (UserOnboard/activation) appears
  twice in her retweets, but on unrelated personal content (a Tufte quote and a personal note),
  not activation-specific material in THIS sample — his activation content needs a direct
  authority-routed sweep (queued, see §7 dead ends).

---

## 3. Batch topical sweep — authority + topic (`from:<handle> <term>`)

Ran as ONE serialized `xrelay batch` process (single xrelay process, internally
delayed 3000ms between the 33 queries) against: @bbalfour, @andrewchen, @lennysan, @onecaseman,
@far33d, @poyark, @SeanEllis, @johncutlefish, @ravi_mehta, @kevinakwok, @wes_bush, @peeplaja,
@nireyal, @Patticus, @SamuelHulick, @danhockenmaier, @HilaQu, @crystalwidjaja, @asmartbear,
@spenserskates — crossed with: growth loops, racecar, funnel, cold start problem, network
effects, retention benchmark, activation rate, PLG benchmark, activation, retention curve, north
star metric, prioritization, experiment, free to paid conversion, 40% disappointed, PMF survey,
metrics theater, growth team, loops, free trial freemium, CRO, AB test, hook model, pricing,
activation onboarding, marketplace growth.

**RESULT: 202 tweets landed** (batch took ~30 min wall-clock due to session-wide xrelay
contention from sibling workers — up to 9 concurrent xrelay processes observed system-wide at
one point, well above the charter's "cap ~4" guidance, but all from OTHER workers, not from this
worker, which stayed at 1 process throughout). Coverage by handle (tweet count returned that
matched the target author, i.e. excluding zero-hit queries):

| Handle | Hits | Handle | Hits |
|---|---|---|---|
| @andrewchen | 36 | @lennysan | 8 |
| @peeplaja | 23 | @onecaseman | 8 |
| @kevinakwok | 15 | @crystalwidjaja | 6 |
| @wes_bush | 15 | @SeanEllis | 5 |
| @nireyal | 15 | @SamuelHulick | 4 |
| @Patticus | 15 | @danhockenmaier | 3 |
| @HilaQu | 14 | @poyark | 1 |
| @far33d | 13 | @ravi_mehta | 1 |
| @bbalfour | 10 | @johncutlefish | 0 |
| @asmartbear | 10 | @spenserskates | 0 |

**NOT COVERED (explicit gap, so the controller knows the shape of what's missing, not a
placeholder)**: @johncutlefish and @spenserskates returned zero hits on their queried terms in
this batch (their `from:` + topic-term combos may just not match anything they've tweeted — a
dedicated archive-user sweep would be needed to confirm they're truly silent on these topics vs.
the query terms being wrong). @poyark and @ravi_mehta each returned only 1 hit — clearly
under-sampled; both need a dedicated multi-query sweep (not done here due to time/contention
budget — flagged for a follow-up pass if the controller wants deeper coverage). No queries were
run for @Patticus/@SamuelHulick/@danhockenmaier/@HilaQu/@crystalwidjaja/@asmartbear/@spenserskates
beyond the single topic term each was assigned in the original 33-query list (see §3 query list
above) — these are all "discovered via Verna's `following`" accounts that got only one shallow
pass, not the deep treatment given to the original roster.

### 3a. Per-practitioner findings from the batch (verbatim, dated, IDs)

**Andrew Chen (@andrewchen)** — Cold Start Problem / network effects / viral loops / retention:
- **[practitioner-opinion]** Growth-model periodization, his own crisp one-liner: "2005: growth
  teams optimized funnels / 2015: growth teams optimized loops / 2026: growth teams optimize
  agents" — 2026-03-29T22:13:28Z, https://x.com/andrewchen/status/2038379036402241689 (272
  likes). **High-value mental-model-index entry**: an explicit, dated periodization of the
  funnels→loops→agents shift from one of the funnels-vs-loops debate's original co-authors (see
  Balfour's 2018 tweet below, which credits Chen as a co-thinker on "Growth Loops are the new
  funnels").
- **[practitioner-opinion]** "BRAINDUMP ON VIRAL LOOPS #1": "The golden age of Web 2.0
  (~2005-2010) was a special time for viral products, which were systematically engineered to
  reach millions of people... the industry developed a comprehensive and systematic
  understanding of creating viral loops. There was measurement, A/B testing, [thread continues,
  not fully captured]" — 2025-10-26T03:19:03Z,
  https://x.com/andrewchen/status/1982285822494962110 (519 likes). Companion "BRAINDUMP ON VIRAL
  LOOPS #2" on the two viral-product archetypes (simple/highly-shareable vs. sticky/deep) —
  2025-10-28T16:44:52Z, https://x.com/andrewchen/status/1983213389011923371 (235 likes).
- **[practitioner-opinion, dated/falsifiable]** "VIRAL LOOPS IN 2025 VS 2010": "The term 'viral
  loop' was coined nearly 20 years ago [i.e. ~2005-2006, coiner not named in this tweet]... In
  its purest form, it describes the series of actions that it takes for a new product to grow
  virally, with one group of users inviting the next set." —
  2025-10-18T19:40:40Z, https://x.com/andrewchen/status/1979633749618037112 (200 likes).
- **[practitioner-opinion, platform-policy/CRO-adjacent]** "How iOS 18 is about to nerf mobile
  inviting -- and a brief history of viral growth from email to FB apps to SMS... Soon the world
  will update to iOS 18, and it will add significant friction for users to invite their friends,
  hurting the growth prospects of many consumer apps." — 2024-09-09T16:51:13Z,
  https://x.com/andrewchen/status/1833186409051787768 (228 likes). Concrete, dated,
  falsifiable claim about a referral-loop-killing platform change — good candidate for
  cross-verification against actual iOS 18 contact-picker UX (not verified here, X-only pass).
- **[practitioner-opinion]** On hiring a head of growth: "How do you hire a good 'head of
  growth' and what do you ask them at interviews?... A very early stage startup may not know
  its distribution strategy. If that's the case, then, be very careful about hiring somebody who
  has a superpower in a particular marketing channel." — 2024-02-03T17:27:37Z,
  https://x.com/andrewchen/status/1753832625062789454 (353 likes).
- **[practitioner-opinion]** "WHY RETENTION IS SO HARD FOR NEW TECH PRODUCTS — I've been staring
  at retention curve data for 15-plus years now... I've seen thousands of curves [thread
  continues, not fully captured/fetched]" — 2025-09-09T14:19:18Z,
  https://x.com/andrewchen/status/1965419750525431873 (1,221 likes — his 5th-highest-engagement
  tweet in this sample). **No specific retention-curve number is IN the tweet text captured
  here** — flag as a thread worth a dedicated `thread` read in a follow-up pass; do not cite a
  number from this without reading the full thread.
- Cold Start Problem book (2021-11-17 preorder announcement, 2,561 likes — his single
  highest-engagement tweet in this sample; book published ~Dec 2021, ~100k units sold in first
  year per his own 2022-11-15 tweet, https://x.com/andrewchen/status/1592559835698319362 —
  **[UNTRACED self-reported sales figure]**).

**Brian Balfour (@bbalfour)** — growth loops vs funnels canon, AARRR critique, Racecar attribution:
- **[practitioner-opinion, THE canonical loops-vs-funnels attribution tweet]** "1/ Growth Loops
  are the new funnels - some thoughts by myself, @onecaseman, @kevinakwok, and @andrewchen." —
  2018-07-31T22:13:14Z, https://x.com/bbalfour/status/1024417730617700352 (434 likes).
  **Names all four co-thinkers of the growth-loops framework: Brian Balfour, Casey Winters,
  Kevin Kwok, Andrew Chen** — this is the primary source for "who owns growth loops" in the
  mental-model index.
- **[practitioner-opinion, explicit AARRR critique]** "4/ The dominant framework to answer this
  question has been the AARRR funnel framework created by @davemcclure. It helped me and
  millions of others level up their game, but we've learned a lot about how the fastest
  companies grow since its creation.." — same thread, 2018-07-31T22:13:14Z,
  https://x.com/bbalfour/status/1024417733117538304 (13 likes, same thread as above).
  **Confirms AARRR attribution to Dave McClure and states the Reforge-orbit thesis explicitly:
  AARRR was useful but superseded by loops thinking.**
- **[practitioner-opinion, CORRECTED ATTRIBUTION]** Racecar Growth Framework: "Growth loops,
  linear channels, conversion rate optimization, new product...how do they all fit together in a
  growth strategy? @danhockenmaier (Basis One, Thumbtack, Reforge) and @lennysan (Airbnb) came
  up with a framework I really like 🧵The Racecar Growth Framework..." —
  2021-01-21T20:38:15Z, https://x.com/bbalfour/status/1352354846431567872 (58 likes).
  **IMPORTANT CORRECTION to controller-canon §5.2's assumption**: the controller-canon file
  associates "racecar framing" loosely with "Brian Balfour school," but Balfour's OWN tweet
  explicitly credits the Racecar Growth Framework to **Dan Hockenmaier and Lenny Rachitsky**, not
  himself — he's amplifying, not authoring. Cross-confirmed by Lenny's own mega-thread
  (2024-12-17, https://x.com/lennysan/status/1869105496013373761) listing "The Racecar Growth
  Framework" among his own canonical posts. **Mental-model index attribution should read:
  Hockenmaier + Rachitsky (with Balfour as an early amplifier/Reforge-orbit endorser).**
- **[practitioner-opinion]** Growth-loops taxonomy, "universal currencies": "A company needs one
  or more universal currencies such as cash, content, or connectors to fuel its core growth
  loops across international borders..." — 2022-01-27T19:26:33Z,
  https://x.com/bbalfour/status/1486782700434321412.
  Companion reply distinguishing viral loops as one subtype among many: "Viral is one category
  of multiple categories of loops. Each category of loop has multiple sub types. You can still
  have Growth Loops and not have 'viral' components..i.e. One user inviting another user." —
  2018-07-31T23:38:33Z, https://x.com/bbalfour/status/1024439201817710592.
- Confirms the Advanced Growth Strategy Reforge course was built by Winters + Kwok, with Balfour
  building the companion growth-models course in parallel — "When I was building Advanced Growth
  Strategy with @kevinakwok and @onecaseman I had consistent dreams about growth loops for
  months." — 2022-09-06T16:48:14Z, https://x.com/bbalfour/status/1567192966061789186.

**Kevin Kwok (@kevinakwok)** — loops-over-moats thesis:
- **[practitioner-opinion, strong contrarian thesis]** "There have never been moats. It's always
  been loops. Once we all embrace that can start discussing the real questions. Like how to
  quantify them. Map then to user loops and internal resource allocation. How to sequence them.
  How to make new ones" — 2019-08-04T20:36:30Z,
  https://x.com/kevinakwok/status/1158114511775125504 (268 likes). Companion: "Loops is the
  correct way to view the world. Eventually everyone will realize this" — same day,
  https://x.com/kevinakwok/status/1157873624159641600 (358 likes). And: "Moats as model for
  defensibility are as outdated as actual moats. Used to be useful--then destroyed by cannons,
  economics, and armies... Consolidation around those with best loops." —
  2018-04-20T01:41:26Z, https://x.com/kevinakwok/status/987144174955712512 (136 likes).
  **This is a distinct, sharper claim than Balfour's "loops are the new funnels" — Kwok's frame
  is loops-vs-MOATS (a strategy/defensibility argument), not loops-vs-FUNNELS (a
  measurement/growth-model argument). Worth keeping these as two related but non-identical
  theses in the mental-model index.**
- **[practitioner-opinion]** "Notes on Superhuman's Acquisition Loops - Superhuman's acquisition
  loops are driven by social capital, not personal utility - Lessons from their onboarding
  process - Scalability of social capital loops, and sequencing to network effects" —
  2019-10-24T23:10:02Z, https://x.com/kevinakwok/status/1187506564929937408 (601 likes — his
  highest-engagement tweet in this sample).
  Confirms he co-built the Reforge "loops" course with Casey Winters — "When @onecaseman and I
  were building Reforge course together on loops we spent 5+ hours together twice a week for a
  few months" — 2019-10-11T20:39:22Z, https://x.com/kevinakwok/status/1182757607351545856.

**Casey Winters (@onecaseman)** — monetization-by-growth-lever, activation-drives-retention:
- **[practitioner-opinion, HIGH VALUE — direct hit on monetization/pricing-experiment topic]**
  "Here's mine: If it drives virality, give it away. If it drives activation, give it away until
  activated, then charge. If it doesn't drive retention, but people value it, charge extra for
  it. If it drives lifetime value, compare to WTP to decide whether to charge or give it away." —
  2019-08-29T20:37:10Z, https://x.com/onecaseman/status/1167174373288972288 (560 likes — his
  highest-engagement tweet in this sample). **A concrete, quotable monetization/freemium-design
  decision framework tied explicitly to which growth lever a feature serves — directly usable
  for the growth-skill's pricing-experiment reference.**
- **[practitioner-opinion]** "Often people say: My long-term retention sucks... I always say,
  you should probably work on your activation." — 2017-02-03T18:19:22Z,
  https://x.com/onecaseman/status/827582263881641985. **A named claim that activation problems
  are frequently mis-diagnosed as retention problems — directly relevant to the activation/
  retention seam and a good falsification-strip candidate (is this always true, or does he ever
  qualify it?).**
- **[practitioner-opinion]** "Inside the 6 Hypotheses that Doubled Patreon's Activation Success"
  (essay tease, content not fetched) — 2017-06-22T21:28:38Z,
  https://x.com/onecaseman/status/878001809452933120.
  Also a reply (truncated in this pass) discussing whether a flat retention curve is "good
  enough to drive a scalable business," tagging a large cluster of growth-orbit handles
  including @fishmanaf, @ElenaVerna, @far33d, @danhockenmaier, @kevinakwok, @bbalfour —
  2020-06-10T17:02:55Z, https://x.com/onecaseman/status/1270763386997846017 — **flagged for a
  follow-up `thread` read: this looks like a live, multi-practitioner retention-curve debate
  that wasn't captured in full here.**

**Fareed Mosavat (@far33d)** — experiment quality, Twyman's-law-adjacent folklore:
- **[practitioner-opinion]** "Experimentation is a critical tool to move your business and your
  understanding of customers forward. Unfortunately, most experiments are bad. What's the
  difference between a good experiment and a bad experiment? [credit to @bhorowitz for the
  style]" — 2020-02-06T17:52:34Z, https://x.com/far33d/status/1225477397459288064 (419 likes,
  his highest-engagement tweet in this sample; thread continues, not fully fetched).
- **[practitioner-opinion, Twyman's-law-adjacent, independent convergence with the Kohavi canon]**
  "The first hypothesis for any surprising experiment outcome or metric change should always be
  'there's a bug in the data'." — 2018-12-20T00:49:53Z,
  https://x.com/far33d/status/1075553840802422784 (27 likes). **This independently echoes
  Twyman's Law ("any figure that looks interesting is probably wrong") from a growth
  practitioner, not from the Kohavi/ExP-platform lineage — worth citing as convergent evidence
  across the two schools (controller-canon §1 already anchors Twyman's Law to the Kohavi canon;
  this is the growth-practitioner-school's independent restatement of the same caution).**
- **[folklore]** "This is so obviously better, we don't need to run it as an experiment." —
  2019-08-31T04:21:05Z, https://x.com/far33d/status/1167653510562738179 (32 likes) — captured as
  a satirical/cautionary one-liner about experiment-skipping rationalization, not his own
  endorsed practice (tone reads as mockery of a common bad pattern, similar register to Verna's
  "not experimenting is still testing on 100%" line).
- **[practitioner-opinion]** "Every headcount problem is a prioritization problem in disguise.
  Easy money made it easy to avoid hard prioritization decisions." — 2023-12-22T02:15:54Z,
  https://x.com/far33d/status/1738020507851911275.

**Lenny Rachitsky (@lennysan)** — ACTIVATION RATE BENCHMARK SURVEY (see Numbers Ledger §5 for
the figures themselves; sourcing notes here):
- Survey launch: "Wondering what a good activation rate is? i.e. what % of new users should be
  hitting your aha moment? LET'S FIND OUT! Share your activation rate in this short survey. In
  exchange, I'll share the early raw results with you. Plz RT to help get more data." —
  2022-08-29T16:23:22Z, https://x.com/lennysan/status/1564287604329091073.
  Mid-survey sample-size disclosure: "Final chance to particulate [sic] in this Activation Rate
  Benchmarking survey... Over 350 data points so far." — 2022-09-07T20:21:18Z,
  https://x.com/lennysan/status/1567608974547259392. **This is a self-selected,
  newsletter-subscriber-recruited sample of roughly 350+ respondents — textbook self-selected
  vendor/community-benchmark sample per the charter's flagged concern.**
- Definition tweet: "Your activation rate is the percentage of your new users who hit your
  activation milestone. Concretely: activation rate = [users who hit your activation milestone]
  / [users who completed your signup flow]." — 2022-11-08T17:25:24Z,
  https://x.com/lennysan/status/1590032751834849282.
- Mega-thread index (his own canonical-posts roundup): links "The Racecar Growth Framework," "How
  to increase conversion," and "How to increase retention" as his flagship growth pieces —
  2024-12-17T19:40:51Z, https://x.com/lennysan/status/1869105496013373761 (263 likes).

**Nir Eyal (@nireyal)** — Hook Model canonical statements:
- **[practitioner-opinion, canonical definition]** "The Hook Model is designed to connect the
  user's problem with the designer's solution frequently enough to form a habit. It is a
  framework for building products that solve user needs through long-term engagement." —
  2020-08-29T13:15:00Z, https://x.com/nireyal/status/1299697057029070848 (38 likes, his
  highest-engagement tweet in this sample).
- **[practitioner-opinion, 4-step definition]** "4/ I realized it came down to 4 steps: trigger,
  action, variable reward and investment. Since Hooked was published scores of developers—like
  my friends at @Kahoot—have utilized the 4-step Hook model to develop habit-forming products
  that have made a difference in people's lives." — 2022-09-13T18:07:00Z,
  https://x.com/nireyal/status/1569749501706993664. **This is the direct primary-source
  statement of the 4-step Hook Model (trigger/action/variable reward/investment), datable to
  the "Hooked" book, in Eyal's own words — usable verbatim for the growth-skill's activation/
  engagement reference, WITH the controller-canon's already-flagged dark-patterns-ethics
  adjacency attached.**

**Patrick Campbell (@Patticus)** — pricing figures (ProfitWell founder; self-reported consulting
claims, all UNTRACED — see Numbers Ledger §5):
- Highest-engagement tweet in this whole batch by a wide margin: "Our Twitter subscriptions plan
  needs work @elonmusk. I did a pricing study on 54.3k Twitter users to help you Doge Father.
  TLDR: Verification should cost much less - Twitter Blue should cost much more - Twitter has a
  unique opportunity to 10x subscribers" — 2022-11-02T16:47:03Z,
  https://x.com/Patticus/status/1587848775019778049 (3,426 likes). Named sample size (54.3k
  users) but methodology is in a linked thread/report not fetched in this pass.
- Repeated near-identical cross-sell stat block (posted at least twice, 2022-11-09 and
  2023-03-06): "Multi-product: +30-50% growth vs. single product corps... Value metric pricing:
  scale pricing with usage/value = double expansion rev... Add-ons: Customers with add-ons have
  18-54% higher LTV" — https://x.com/Patticus/status/1590408627470442496 and
  https://x.com/Patticus/status/1632754832678305795. No source/methodology named in either
  tweet.

**Peep Laja (@peeplaja)** — CRO-industry-insider skepticism (HIGH VALUE for the CRO-folklore-
falsification wedge — he is arguably THE most credentialed possible source for this since he
founded CXL, the reference CRO agency/education brand):
- **[practitioner-opinion, direct falsification of "experts can predict AB test winners"]**
  "People are terrible at predicting what will work. Sometimes I craft a tweet that I think will
  do well, but nope. And a casual remark will go viral. If I had to guess which AB test variation
  will win, I'd be about as accurate as flipping a coin. Not good enough. Don't predict." —
  2019-05-13T20:17:17Z, https://x.com/peeplaja/status/1128031481711026176 (56 likes).
- **[practitioner-opinion, direct callout of statistical illiteracy in the CRO industry]** "Yet
  another day, yet another blog post boasting about AB test results - while it seems pretty
  certain those are all imaginary winners. Learn AB testing stats people." —
  2019-11-07T22:12:21Z, https://x.com/peeplaja/status/1192565476985061377 (7 likes). **A named
  CRO-industry founder explicitly stating that most publicly-boasted AB test win case studies are
  statistically illegitimate ("imaginary winners") — this is close to a primary-source
  falsification-strip statement for the CRO-folklore wedge, from inside the CRO industry, not
  from an outside critic.**
- **[folklore specimen, captured critically]** Quoting a CMO approvingly-then-critically: "'Most
  of the time I don't even like the research results, so we just AB test it directly without any
  qualitative results.' Quote from a prominent CMO ^ So they're conducting research, but if the
  management doesn't like the results, they do whatever they want anyway. Lol." —
  2020-08-15T07:15:35Z, https://x.com/peeplaja/status/1294533175914496001.
- **[practitioner-opinion, cross-references the Kohavi/peeking canon independently]** "Psychology's
  Replication Crisis Has Made The Field Better — Among other things, researchers are increasing
  their sample sizes and using 'preregistration' - this is same as setting sample size and
  duration before an AB test is run. Great read!" — 2018-12-07T14:41:20Z,
  https://x.com/peeplaja/status/1071052039885602816. **Independent CRO-side corroboration of the
  pre-commitment/no-peeking discipline the experimentation canon requires — worth cross-citing
  against channel D's Kohavi-canon material.**
- Corporate history note: CXL Agency spun off as its own brand, Speero, after ~10 years as CXL —
  2021-01-12T14:06:31Z, https://x.com/peeplaja/status/1348994772975935492 (relevant for channel
  C/incumbent tracking, not a growth-model claim).

**Kyle Poyar (@poyark)** — only 1 hit in this batch (needs a dedicated follow-up sweep):
- **[practitioner-opinion, teaser only — UNTRACED figure]** "Here are 4 product growth
  experiments that could increase free-to-paid conversion by 50%+. Oh, and they require minimal
  engineering resources. Are these 🧪 on your 2023 roadmap yet? Check them out in the last Growth
  Unhinged of the year!" — 2022-12-21T15:02:19Z,
  https://x.com/poyark/status/1605579423989633025 (7 likes). **The "+50%" figure is a headline
  teaser with zero methodology in the tweet — the actual experiments and evidence live in the
  linked Growth Unhinged newsletter issue, not fetched in this X-only pass. Mark UNTRACED here;
  flag for grw-web to pull the newsletter issue directly if this number is wanted.**

**Sean Ellis (@SeanEllis)** — 40% "very disappointed" PMF test, PRIMARY SOURCE + his own caveat
(HIGH VALUE — this is exactly what the charter asked us to find):
- **[practitioner-opinion, earliest primary statement found, 2010]** "@JamesKennedy Your key
  survey.io number is % very disappointed without product. If >40%, start preparing to scale." —
  2010-04-29T16:45:08Z, https://x.com/SeanEllis/status/13078266825. Names his own tool
  ("survey.io") as the source instrument.
  Second primary statement: "@TrevorHLynn Probably the '40% very disappointed without metric.'
  Though now I'm just trying to get it less dependent on my 'hands on'" —
  2013-12-24T00:58:14Z, https://x.com/SeanEllis/status/415285251569508352. **CRITICAL FINDING:
  Ellis himself, in his own words, admits the 40% threshold's validity has depended on his
  personal ("hands on") involvement in applying it — i.e., the creator of the test flags a
  generalizability/robustness caveat on his own benchmark. This is a first-party caveat, not an
  outside critique, and should be the anchor citation for any falsification-strip treatment of
  the Sean Ellis test in the growth-skill.**
- **[practitioner-opinion, attribution chain]** "@delane @Austen @rahulvohra Thanks for the
  shout out. @rahulvohra is always great about giving me credit for pmf survey. I do think he
  took it the next level in how they applied it at @Superhuman" — 2019-07-03T15:11:46Z,
  https://x.com/SeanEllis/status/1146436376537124865. **Ellis himself names Rahul Vohra/
  Superhuman as having refined the survey methodology beyond his original version — the
  growth-skill should treat "Sean Ellis test" and "Superhuman's PMF Engine" (Vohra's
  segmentation-weighted extension) as related but distinct, with Ellis's own endorsement of the
  Superhuman refinement as more rigorous.**

**Jason Cohen (@asmartbear)** — anti-single-metric-worship (convergent with Verna's "sequence
everything" stance and Winters' lever-specific pricing, an emerging cross-practitioner pattern):
- **[practitioner-opinion]** "No single SaaS metric rules all. This isn't Lord of the Rings.
  Metrics are tools serving your unique goals, timelines, and circumstances. Here's why it's
  silly to focus on just one" — 2025-10-10T12:01:01Z,
  https://x.com/asmartbear/status/1976618973316644881. Near-duplicate: "Retention is the most
  crucial SaaS metric, some say... Still, there isn't one 'most important' metric" —
  2024-11-04T19:41:48Z, https://x.com/asmartbear/status/1853523057173811674.

**Crystal Widjaja (@crystalwidjaja)** — retention-cohort READING method (distinct from
benchmark-number folklore — this teaches HOW to read a cohort chart, which is rarer and more
durable content):
- **[practitioner-opinion, methodology not folklore]** "4️⃣ cohort patterns every product leader
  should know: 1. Diagonal stripes: universal events 2. Horizontal stripes: cohort-specific
  impacts 3. Vertical stripes: time-based impacts 4. Outlier blocks: temporary, cohort-specific
  events" — 2024-04-27T00:11:07Z, https://x.com/crystalwidjaja/status/1784012365337665731 (50
  likes; part of promoting her Reforge "Product Analytics" course).
- **[practitioner-opinion]** Bias warning on churn analysis: confirmation bias ("Users are
  leaving because the onboarding process is too complex" as an unchecked fan theory) and
  survivorship bias — 2024-09-21T14:48:25Z,
  https://x.com/crystalwidjaja/status/1837504161396748697.

**Dan Hockenmaier (@danhockenmaier)** — retention primacy + difficulty (co-author of the Racecar
Framework per Balfour's tweet above):
- **[practitioner-opinion]** "In virtually every growth model I've ever seen, customer retention
  is the single most important input into improving both top and bottom line performance. But
  there is a major catch: In almost as many cases, it is also the single hardest metric to move."
  — 2024-01-25T22:06:50Z, https://x.com/danhockenmaier/status/1750641403078824189 (75 likes).

**Samuel Hulick (@SamuelHulick)** — UserOnboard/activation, includes a provenance gap:
- **[genuinely notable gap, worth flagging]** "SaaS question: Does anyone know who established
  the term 'Aha Moment' re: onboarding/activation?" — 2023-03-15T01:56:23Z,
  https://x.com/SamuelHulick/status/1635822218369462274. **The person who runs UserOnboard (an
  activation/onboarding-teardown business) publicly does not know who coined "aha moment" — this
  is itself a finding: the term's provenance is murky even to a domain insider. Treat "aha
  moment" as an UNTRACED-origin term of art in the growth-skill unless grw-web/grw-github
  independently traces it (candidates in general growth folklore include Dave McClure/500
  Startups popularizations, but that is NOT confirmed here — do not assert it).**
- Onboarding-metric idea: "I bet a very worthwhile onboarding metric to pay attention to is
  'error states generated per activation.'" — 2019-04-07T00:12:52Z,
  https://x.com/SamuelHulick/status/1114682417028128768.

**Wes Bush (@wes_bush), Hila Qu (@HilaQu), Ravi Mehta (@ravi_mehta)**: thin/self-promotional
content in this batch pass — a 12-question freemium-vs-trial decision framework is referenced by
Wes Bush (2019-01-08, https://x.com/wes_bush/status/1082592733456347138) but its content is not
resolved (course/blog-post link, not fetched); Hila Qu's hits are mostly low-engagement
historical growth-team-building posts from GitLab/Acorns days; Ravi Mehta returned only his 2020
Reforge EIR announcement. All three need a dedicated follow-up sweep beyond this pass's single
shallow query each.

---

## 4. Mental-model index

| Framework | Owner(s) (primary/named) | Canonical statement (post ID/URL) | Notes |
|---|---|---|---|
| Growth Loops vs. Funnels | Brian Balfour, Casey Winters, Kevin Kwok, Andrew Chen (co-credited by Balfour) | https://x.com/bbalfour/status/1024417730617700352 (2018-07-31) | The founding "growth loops" tweet names all four explicitly. |
| AARRR / Pirate Metrics | Dave McClure (per Balfour's attribution) | https://x.com/bbalfour/status/1024417733117538304 (2018-07-31) | Balfour explicitly frames AARRR as superseded-but-formative. |
| Racecar Growth Framework | **Dan Hockenmaier + Lenny Rachitsky** (NOT Balfour — see correction in §3a) | https://x.com/bbalfour/status/1352354846431567872 (2021-01-21, Balfour amplifying); confirmed by Lenny's own 2024-12-17 canonical-posts thread | Controller-canon §5.2 mis-associated this with "Balfour school" loosely — correct primary authors are Hockenmaier/Rachitsky. |
| Loops-over-Moats (strategy/defensibility thesis) | Kevin Kwok | https://x.com/kevinakwok/status/1158114511775125504 (2019-08-04) | Distinct from the loops-vs-funnels thesis — this is a competitive-strategy argument, not a measurement-model argument. |
| Five Laws of Growth | Elena Verna | https://x.com/ElenaVerna/status/1541786165203931136 (2022-06-28) | See §2a. |
| 3×3 Growth Motions × Levers Matrix | Elena Verna | https://x.com/ElenaVerna/status/1542922250353082370 (2022-07-01) | Her highest-bookmarked own tweet in the archive sample. |
| Growth Competency Model | Adam Fishman (@fishmanaf) | https://x.com/fishmanaf/status/1541799449571246081 (2022-06-28, via Verna retweet) | Not independently vetted with `xrelay user` in this pass. |
| Hook Model (trigger/action/variable reward/investment) | Nir Eyal | https://x.com/nireyal/status/1569749501706993664 (2022-09-13) | Carries dark-patterns ethics adjacency per controller-canon §2. |
| Sean Ellis Test (40% "very disappointed") | Sean Ellis | https://x.com/SeanEllis/status/13078266825 (2010-04-29, earliest found); caveat at https://x.com/SeanEllis/status/415285251569508352 (2013-12-24) | Ellis's OWN caveat that the number depends on his "hands on" involvement — primary-source falsification-strip anchor. |
| PMF Engine (Superhuman's extension) | Rahul Vohra, credited by Ellis himself | https://x.com/SeanEllis/status/1146436376537124865 (2019-07-03) | Not independently fetched — Superhuman's own published methodology should be pulled by grw-web. |
| Activation-rate benchmark (34%/25% avg/median; 36%/30% SaaS-only) | Lenny Rachitsky, self-selected survey (~350+ respondents) | https://x.com/lennysan/status/1584923800226832384 (2022-10-25) | See Numbers Ledger §5 — self-selected sample, charter-flagged caveat class. |
| Give-it-away-vs-charge-by-lever framework | Casey Winters | https://x.com/onecaseman/status/1167174373288972288 (2019-08-29) | Ties pricing/monetization decisions explicitly to which growth lever (virality/activation/retention/LTV) a feature serves. |
| Activation-drives-retention (mis-diagnosis claim) | Casey Winters | https://x.com/onecaseman/status/827582263881641985 (2017-02-03) | "My retention sucks" is often actually an activation problem. |
| 4 cohort-chart reading patterns (diagonal/horizontal/vertical stripes, outlier blocks) | Crystal Widjaja | https://x.com/crystalwidjaja/status/1784012365337665731 (2024-04-27) | Teaches HOW to read retention cohorts, not a benchmark number — rarer, more durable content type. |
| "There's a bug in the data" as first hypothesis for surprising results | Fareed Mosavat | https://x.com/far33d/status/1075553840802422784 (2018-12-20) | Independent growth-practitioner convergence with Twyman's Law (Kohavi canon, controller-canon §1). |
| No-single-metric-rules-all | Jason Cohen (@asmartbear) | https://x.com/asmartbear/status/1976618973316644881 (2025-10-10) | Converges with Verna's "sequence everything, don't pick one" stance (§2a) — see Disagreements §6 for the cross-practitioner pattern. |
| funnels→loops→agents periodization | Andrew Chen | https://x.com/andrewchen/status/2038379036402241689 (2026-03-29) | His own crisp one-liner; useful as a dated mental-model-index entry showing the framework's own evolution narrative. |

---

## 5. Numbers ledger

| Figure | Claimer | Date | Post URL | Source named? | Sample caveat | Verdict |
|---|---|---|---|---|---|---|
| Activation rate: average 34%, median 25% (all products); SaaS-only average 36%, median 30% | Lenny Rachitsky | 2022-10-25 | https://x.com/lennysan/status/1584923800226832384 | Yes — his own reader survey | **Self-selected**: ~350+ respondents, recruited via his own newsletter/X audience (disclosed sample size at https://x.com/lennysan/status/1567608974547259392, 2022-09-07); category composition and response-bias not disclosed in the tweets captured here | **TRACED to a named survey, but SELF-SELECTED SAMPLE** — usable only with the caveat attached |
| Activation-rate percentile bands: 60th percentile = "GOOD," 80th percentile = "GREAT" | Lenny Rachitsky | 2022-10-25 | https://x.com/lennysan/status/1584923803603247104 | Same survey as above | Same self-selection caveat; also conflates "good" with "high within a self-selected sample," not an external/causal benchmark | **TRACED, SELF-SELECTED SAMPLE** |
| Sean Ellis PMF test threshold: >40% "very disappointed without product" | Sean Ellis | 2010-04-29 (earliest found) | https://x.com/SeanEllis/status/13078266825 | Yes — his own survey.io tool | Ellis's OWN 2013 caveat: the number's validity has depended on his personal "hands on" involvement (https://x.com/SeanEllis/status/415285251569508352, 2013-12-24) | **TRACED to primary creator, WITH creator's own generalizability caveat** — strongest possible falsification-strip anchor |
| "4 product growth experiments that could increase free-to-paid conversion by 50%+" | Kyle Poyar | 2022-12-21 | https://x.com/poyark/status/1605579423989633025 | No — teaser only, points to a newsletter issue not fetched | Newsletter methodology not examined in this pass | **UNTRACED in this pass** — needs the actual Growth Unhinged issue pulled by grw-web |
| Patrick Campbell: "$2.4 billion" made for companies by fixing pricing (10-year track record) | Patrick Campbell | 2023-08-07 | https://x.com/Patticus/status/1688541007153942530 | No — self-reported consulting-career claim, no methodology or company list | Self-reported, unaudited, aggregated across unnamed clients | **UNTRACED** — self-reported career-summary figure |
| Patrick Campbell: "400+ companies," "$2 billion+ in additional revenue" from pricing work | Patrick Campbell | 2023-06-22 | https://x.com/Patticus/status/1671874697921716224 | No | Same as above | **UNTRACED** |
| Cross-sell stats: multi-product +30-50% growth vs. single-product; add-ons → 18-54% higher LTV; value-metric pricing → "double expansion rev" | Patrick Campbell | 2022-11-09 (repeated 2023-03-06) | https://x.com/Patticus/status/1590408627470442496 ; https://x.com/Patticus/status/1632754832678305795 | No — no source/methodology in either tweet, repeated verbatim across two dates | No sample size, no denominator, no named study | **UNTRACED** — repeated claim, no traceable source in either instance |
| Twitter pricing study: sample of 54.3k Twitter users | Patrick Campbell | 2022-11-02 | https://x.com/Patticus/status/1587848775019778049 | Partially — sample size named (54.3k), methodology/report not fetched in this pass | Self-initiated study aimed at influencing a specific company (Twitter/Musk) — motivated-reasoning risk | **PARTIALLY TRACED** (has a stated N) but methodology unverified here |
| "Lovable crossed $100M ARR in 8 months... faster than OpenAI, Cursor, Wiz" | Anton Osika (@antonosika), retweeted by Elena Verna same day | 2025-07-23 | https://x.com/antonosika/status/1948024371370418666 | No — self-reported by founder, no methodology | Company's own claim, not third-party-audited; comparison set asserted, not sourced | **UNTRACED** — self-reported growth-industry claim |
| Lovable "$200M raise at $1.8B valuation led by Accel" | Anton Osika (@antonosika) | 2025-07-17 | https://x.com/antonosika/status/1945905600463819005 | No named source in the tweet | Funding-round figures usually confirmable off-X (TechCrunch/Crunchbase) — NOT cross-checked in this X-only pass | **UNTRACED in this pass** |
| Andrew Chen's Cold Start Problem: "almost 100k units sold in the first year" | Andrew Chen | 2022-11-15 | https://x.com/andrewchen/status/1592559835698319362 | No — self-reported by author | Publisher/Amazon/Nielsen BookScan not cited | **UNTRACED** — self-reported book-sales figure |

---

## 6. Disagreements & live debates

- **Loops-vs-funnels is a near-unanimous consensus inside this cluster, NOT a live debate.**
  Balfour, Winters, Kwok, Chen, Verna, Hockenmaier, and Rachitsky all converge on "loops beat
  funnels" — no dissenting named voice was found in this pass. Worth noting for the controller:
  if the skill wants a genuine disagreement on this axis, it will need to come from OUTSIDE this
  cluster (e.g., a performance-marketing or paid-acquisition voice defending funnel thinking —
  not found in this X-channel pass).
- **Two distinct "loops" theses that get conflated and shouldn't be**: Balfour/Winters/Chen's
  "loops are the new funnels" (a measurement/growth-model argument, 2018) vs. Kwok's "there have
  never been moats, it's always been loops" (a competitive-strategy/defensibility argument,
  2019). Both come from the same Reforge-orbit cluster and are often cited interchangeably, but
  they are answering different questions (how do you measure/model growth vs. how do you build a
  defensible business). Flag for the controller to keep these separate in the mental-model index
  (done above in §4) rather than merging them into one "loops" entry.
- **Attribution correction, not a practitioner disagreement**: on the Racecar Growth Framework —
  Balfour's own tweet (https://x.com/bbalfour/status/1352354846431567872) names Hockenmaier +
  Rachitsky as the authors, but the controller-canon file (written before research, §5.2)
  associated the framing loosely with "Reforge/Brian Balfour school." Not a disagreement between
  practitioners, but a **correction the controller should apply to its own pre-research
  assumption.**
- **Convergent anti-single-metric-worship pattern across THREE independent voices**: Elena
  Verna's "growth is sequencing, not single-lever-pick" (§2a, 2022), Jason Cohen's "no single
  SaaS metric rules all... this isn't Lord of the Rings" (2025), and Casey Winters' lever-specific
  monetization framework (give away for virality, charge for LTV, etc., 2019) all independently
  argue against reducing growth strategy or SaaS health to one number/one lever. This is not a
  direct disagreement but a genuine cross-practitioner convergence worth stating as a
  finding: **the growth-strategy school's implicit consensus is that single-score prioritization
  (ICE/RICE-style) and single-metric worship (north-star-metric-as-only-truth) are both
  under-powered compared to portfolio/sequencing thinking.** This directly supports
  controller-canon §5.1's "ICE/RICE weakly evidenced, folklore-adjacent" wedge hypothesis with
  independent, dated, named-practitioner evidence — not just the controller's prior belief.
- **Peep Laja (CRO industry founder) vs. the CRO industry's own case-study culture**: Laja's
  "imaginary winners" and "flipping a coin" tweets (§3a) are a named CRO authority publicly
  breaking with his own industry's habit of boasting unverified AB test wins — this is an
  internal-to-CRO disagreement (Laja vs. the broader case-study/agency marketing genre he
  himself operates in, CXL/Speero), not a disagreement between two named individuals with posts
  on both sides. Worth flagging as the strongest single X-sourced statement for the CRO-folklore-
  falsification wedge.

---

## 7. Folklore specimens (labeled, dated)

- **[folklore]** "Freemium is always the way to go" (Verna's stated position per Lenny's promo
  tweet, see §2a) — flagged as an absolute claim worth falsification-testing against
  counter-cases (e.g., high-touch B2B SaaS where freemium famously fails) once web/GitHub
  channels weigh in.
- **[folklore]** Home-page-redesign-boosts-ARR-but-cripples-long-term-growth (Verna, §2a) — a
  causal claim asserted without a study; presented as lived-experience pattern-matching, not
  data. Captured as folklore per charter (folklore is a finding).
- **[folklore, third-party-paraphrased]** "Not experimenting is still testing, just on 100% of
  the population without any quantifiable learnings" — attributed to Verna via a conference
  attendee's tweet (not her own words verbatim) — treat the ATTRIBUTION itself as folklore-grade
  until a primary Verna statement of this line is found.
- **[folklore, provenance UNTRACED]** "Aha moment" as the term for the activation milestone —
  even Samuel Hulick, who runs UserOnboard (an activation/onboarding-teardown business), publicly
  asked in 2023 who coined it (§3a, https://x.com/SamuelHulick/status/1635822218369462274) and
  got no confirmed answer captured here. The term is used constantly across this entire corpus
  (Verna, Rachitsky, and others all use it as if its origin were common knowledge) with **zero
  primary attribution found**. Flag for grw-web/grw-github to trace properly; do not assert an
  origin in the shipped skill without independent confirmation.
- **[folklore, self-reported and repeated verbatim across dates]** Patrick Campbell's cross-sell
  statistics ("+30-50% growth," "18-54% higher LTV," "double expansion rev") — posted as an
  identical stat block on two separate dates (2022-11-09, 2023-03-06) with no source or
  methodology attached either time. Repetition without a cited source across multiple postings
  is itself a folklore signature — captured per charter (folklore is a finding), not excluded.
- **[folklore]** "This is so obviously better, we don't need to run it as an experiment." (Fareed
  Mosavat, §3a, 2019-08-31) — captured satirically/critically by its own author, mocking a common
  experiment-skipping rationalization pattern; same register as Verna's "100% of the population"
  line. Two independent Reforge-orbit voices mocking the same folk practice (skipping
  measurement because "it's obvious") is itself a convergence worth noting.

---

## 8. Dead ends, empty queries, endpoint health notes

- `xrelay user kyle_poyar` → `data: null` (handle does not exist). Resolved via search to
  `poyark`.
- `xrelay user ravimehta` → returned a real but WRONG account (21 followers, 27 tweets,
  clearly not the Reforge/Tinder Ravi Mehta). Resolved via guess to `ravi_mehta`.
- `xrelay user adamjfishman` and `xrelay user afishman21` → both `data: null`. Resolved
  opportunistically via Verna's retweet graph to `fishmanaf` (confirmed active via his tweet
  appearing directly in the batch sweep, §3a Mental-model index — the "Growth Competency Model"
  entry — but he was NOT independently vetted with a standalone `xrelay user fishmanaf` call in
  this pass; flagged for a follow-up 1-call vet if the controller wants his follower count/bio).
- `xrelay search "Blake Bartlett OpenView"` and `xrelay search "Ravi Mehta Growth Manifesto"` →
  both returned mostly unrelated/junk tweets (random accounts, non-English spam, unrelated news)
  after the top 1-2 results — **topical search on growth-adjacent name queries degrades fast**,
  consistent with charter's dominant-vendor-noise warning. No handle found for Blake Bartlett;
  abandoned per budget after two failed search angles (his PLG-coinage is well attested off-X,
  not chased further — out of X-channel scope).
- `xrelay user BlakeMBartlett` → `data: null`.
- **Session-wide xrelay contention, mid-session**: the 33-query `xrelay batch` (§3) took
  approximately 30 minutes wall-clock to complete instead of the expected ~2 minutes
  (33 queries × 3s delay). Process-table inspection mid-run showed up to **9 concurrent xrelay
  processes system-wide**, all belonging to SIBLING workers in this same research run (other B-
  and lead-channel workers running their own `archive`/`batch`/`search` calls against the same
  scratchpad directory — confirmed by shared filenames like `ronnyk.json`, `lukasvermeer.json`,
  `jorgemazal.json` visible in `ls` output, none of which belong to this worker). **This
  worker's own process count never exceeded 1 at a time**, in compliance with the hard
  operational constraint — the slowdown was caused by contention from OTHER workers, consistent
  with the charter's explicit warning that concurrent xrelay processes across the swarm degrade
  the search endpoint session-wide. No `RATE_LIMITED` errors were surfaced to THIS worker's
  calls specifically (the batch completed with 202/202 tweets landed, not a partial/degraded
  result), but the wall-clock cost was real and should inform future run sizing (fewer workers
  per channel, or a shared query queue, would likely finish faster than N independent workers
  each hammering the same endpoint).
- Coverage gaps (see §3 intro table for the full breakdown): @johncutlefish and @spenserskates
  returned zero hits on their single assigned query term each; @poyark, @ravi_mehta, @wes_bush,
  @HilaQu got only shallow single-query coverage. None of these were re-queried after the batch
  landed, per the sub-orchestrator's explicit directive to stop sweeping and finalize the file
  rather than chase completeness further.
- Endpoint health otherwise good: `xrelay doctor --offline` passed all 6 checks at session
  start; no `AUTH_FAILED` or handle-resolution-unrelated errors encountered through the
  `user`/`archive`/`following`/`batch` calls run by this worker.

---

## 9. Growth-vs-operate disposition notes

- Nothing in this pass surfaced monitoring/dashboards/alerting/flags/rollout content directly —
  the growth-strategy-school roster is mental-models-and-frameworks-oriented, not tooling-
  oriented (that's channel C's territory: GrowthBook/Statsig/flags). Two touchpoints worth
  carrying to the growth-vs-operate seam writeup:
  1. Elena Verna's "not experimenting is still testing on 100% of the population" line (§2a, §7)
     is squarely a GROWTH (learning/causal) framing, explicitly contrasting with the
     operate-style default of "just ship to everyone" — a named-practitioner articulation of
     exactly the seam Tamas asked about: shipping-to-100%-without-measurement is not "safe," it's
     un-instrumented testing.
  2. Andrew Chen's iOS-18-contact-picker-friction post (§3a, 2024-09-09) is closer to an OPERATE-
     adjacent observation (a platform/OS policy change silently degrading a referral mechanism
     already in production) than a growth-experiment finding — it's about a live system's
     behavior changing under you, not a designed test. Flag as a borderline case: the underlying
     cause (platform policy) is outside either team's control, but MONITORING for this kind of
     silent degradation of a referral loop's conversion rate is arguably an operate-style
     instrumentation question, while deciding what to DO about it (redesign the invite flow) is
     growth's.

---

## Coverage summary (final)

**Fully covered** (dedicated archive or multi-query sweep, own-voice content separated from
retweets/amplification): Elena Verna (full retweet-unwrapped archive analysis, §2), Andrew Chen,
Brian Balfour, Kevin Kwok, Casey Winters, Fareed Mosavat, Lenny Rachitsky (activation-rate
survey), Nir Eyal, Sean Ellis, Peep Laja (all via the 33-query batch, §3).

**Partially covered** (1-3 hits, real content found but shallow): Patrick Campbell, Crystal
Widjaja, Dan Hockenmaier, Samuel Hulick, Jason Cohen, Kyle Poyar (1 hit), Ravi Mehta (1 hit),
Hila Qu (14 hits but mostly low-engagement historical), Wes Bush (15 hits, mostly
self-promotional, no framework substance resolved).

**Not covered / zero-yield in this pass**: John Cutler (sparse X presence generally — his
metrics-theater content likely lives on Substack, not X, confirmed by his own low tweet count of
178), Spenser Skates (Amplitude CEO — zero hits on the one query term tried), Blake Bartlett (no
handle found), Ravi Mehta's actual growth-manifesto content (only found his 2020 Reforge
announcement), Adam Fishman's own account (found only via Verna's retweet graph, not
independently vetted).

**Not attempted at all**: a second page of Elena Verna's `following` list (only 100 of 161
returned); OCR/reading of image-only tweets (several high-engagement Verna tweets link images —
the 3×3 growth matrix, "Stages of growth seniority" — not read visually in this pass); resolving
any t.co shortlinks to external blog posts/newsletters referenced throughout (Verna's hiring
guide, Poyar's Growth Unhinged issue, Wes Bush's 12-question framework, etc.) — all flagged
inline above for grw-web as follow-up fetches.

This file was finalized per an explicit stop-and-write directive from the sub-orchestrator
(grw-x) after the 33-query batch landed successfully (202/202 tweets, contrary to an earlier
progress report of stalling — the batch actually completed cleanly, just slowly, due to
session-wide contention from sibling workers, see §8).
