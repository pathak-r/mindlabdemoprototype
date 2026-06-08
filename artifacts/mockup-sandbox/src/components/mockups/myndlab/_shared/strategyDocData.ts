/* Single source of truth for the full strategy document.
   Consumed by StrategyDoc.tsx (the in-app reader) and by the PDF generator,
   so the on-screen reader and the downloadable PDF never drift apart. */

// `only` scopes a block to one output: "pdf" (standalone doc) or "reader"
// (in-prototype overlay). Omitted = appears in both.
export type Block = (
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "callout"; text: string }
  | { t: "quote"; text: string }
  | { t: "table"; head: string[]; rows: string[][] }
) & { only?: "pdf" | "reader" };

export interface DocPage {
  part: string;
  tag: string;
  title: string;
  meta?: string;
  blocks: Block[];
}

export const DOC_TITLE = "Product Strategy & Market Clarity";
export const DOC_SUBTITLE = "MYNDLAB.AI · Senior PM Task · Rohit · June 2026";

export const DOC: DocPage[] = [
  {
    part: "00",
    tag: "THE BRIEF",
    title: "The thesis & top recommendations",
    meta: "MYNDLAB.AI · Senior PM Task · Rohit · June 2026",
    blocks: [
      { t: "p", text: "The single most important decision Myndlab must make, before optimising anything else, is resolving its identity crisis." },
      { t: "p", text: "The platform asks for a tech stack at the very first prompt step, and detailed deployment options at the end. It is trying to speak to two users at once — the non-technical GCC founder and the technical developer — and capturing neither." },
      { t: "p", text: "Every recommendation here assumes Myndlab commits fully to the non-technical founder as its primary ICP, while giving technical founders a separate, honest path. Without that commitment, no amount of funnel optimisation, messaging polish, or feature addition will move the needle." },
      { t: "h3", text: "Two signals from your own internal data" },
      { t: "ul", items: [
        "A meaningful percentage of users never start a first project.",
        "Some abandon during onboarding or prompting.",
      ] },
      { t: "h3", text: "Top three recommendations" },
      { t: "ul", items: [
        "Never get stuck. Every vibe-coder eventually hits a wall. We're removing the wall.",
        "One question at sign-up ends the identity crisis. Non-technical or technical. One tap. Two completely different products. Zero confusion.",
        "Build it. Share it in 60 seconds. No App Store. No developer. No waiting. We own the last mile every competitor leaves open.",
      ] },
    ],
  },
  {
    part: "01",
    tag: "MARKET CLARITY",
    title: "Market Clarity & Positioning",
    blocks: [
      { t: "h3", text: "Core value proposition — currently confused" },
      { t: "p", text: "Too technical for the vibe coder. Not technical enough for the developer. Neither converts." },
      { t: "p", text: "As presented today, the homepage surfaces tech-stack choices — FastAPI, Node.js, Go — that a non-technical founder cannot make." },
      { t: "h3", text: "What it should be" },
      { t: "ul", items: [
        "The only platform where a GCC founder goes from idea to a live, distributed app — in Arabic or English — without writing code, hiring a developer, or navigating App Store compliance.",
        "The build-to-distribution loop, closed end-to-end, is the real proposition.",
      ] },
      { t: "callout", text: "Requires building a simple PWA distribution layer where users publish apps via 'Add to Home Screen'. For the vast majority of apps this is perfectly acceptable — and arguably better than App Store. More on this later." },
      { t: "h3", text: "Ideal users" },
      { t: "ul", items: [
        "Primary ICP: GCC entrepreneurs with an idea and a budget, currently paying freelancers to build what Myndlab can do in minutes. WhatsApp is their world. FastAPI is not.",
        "Secondary user: the technical founder who wants stack control, GitHub integration, and deployment options. Serve them — but in a completely separate lane.",
      ] },
      { t: "h3", text: "Research to validate" },
      { t: "ul", items: [
        "Exit surveys on sign-up abandonment.",
        "User interviews: completers vs drop-offs.",
        "Cohort analysis: Arabic-prompt vs English-prompt retention. The difference is the ICP signal.",
      ] },
      { t: "h3", text: "Competitive landscape" },
      { t: "table", head: ["Competitor", "What it is"], rows: [
        ["Cursor / Claude Code", "Developer tools."],
        ["v0 / Lovable", "Frontend-first, not full-stack."],
        ["Bolt", "The closest Western competitor."],
        ["Base44", "The one to watch in the GCC context."],
      ] },
      { t: "p", text: "No competitor owns all four at once: full-stack build · zero-jargon UX · GCC-native Arabic-first · end-to-end PWA distribution." },
      { t: "p", text: "That intersection is Myndlab's white space." },
      { t: "h3", text: "Proposed positioning" },
      { t: "ul", items: [
        "The only platform where a GCC founder goes from idea to live app — no code, no developer, no App Store headaches.",
        "Full control if you want it. Zero friction if you don't.",
        "Full GCC sovereignty. Your data stays here.",
      ] },
      { t: "h3", text: "Messaging hierarchy" },
      { t: "table", head: ["Layer", "Message"], rows: [
        ["Primary hook", "\"Never Get Stuck. Get your app out there.\" Outcome-first, distribution-inclusive."],
        ["Who it's for", "Non-technical GCC founders ready to launch."],
        ["Why different", "The only AI builder closing the full loop — idea to distributed app, Arabic or English, no dev team, no App Store queue."],
        ["Trust signals", "Arabic-first, GCC sovereign infrastructure, ISO 27001 + 9001, you own your code, no lock-in."],
        ["Don't lead with", "\"Agentic developer,\" \"Full-stack generation,\" \"Autonomous software creation.\" Developer jargon signals the product isn't for the non-technical founder."],
      ] },
      { t: "h3", text: "Biggest positioning risks" },
      { t: "ul", items: [
        "Unresolved identity: serving both users on one surface converts neither.",
        "'Lab' brand signal: implies beta status — a credibility liability for a platform asking non-technical founders to trust it with live business apps.",
      ] },
    ],
  },
  {
    part: "02",
    tag: "USER JOURNEY",
    title: "User Journey & Funnel Optimisation",
    blocks: [
      { t: "h3", text: "Current drop-off points" },
      { t: "ul", items: [
        "Infinite possibility is paralysing. The platform asks for a tech stack at the first prompt step, a decision a non-technical founder cannot make. They freeze and leave. This single screen is likely responsible for the majority of funnel abandonment.",
        "A distribution void. Those who reach deploy hit a dead end: hosted URL, no PWA guidance, no WhatsApp share CTA, no path to real users. The app is live but invisible.",
      ] },
      { t: "h3", text: "The one decision that shapes everything" },
      { t: "p", text: "One question at sign-up splits every user into one of two experiences." },
      { t: "quote", text: "This is the most important recommendation in this document." },
      { t: "p", text: "The question: \"Would you call yourself a technical founder or a non-technical founder?\"" },
      { t: "ul", items: [
        "Non-technical path — friction removed. No tech-stack choices, no jargon. Smart defaults handle every infrastructure decision silently.",
        "Technical path — full control. Stack selection, GitHub integration, deployment options. Stays entirely out of the non-technical founder's way.",
      ] },
      { t: "callout", text: "Prototype — this clickable prototype demonstrates the full journey. Try the toggle switch between technical and non-technical paths at the top right of the screen." },
      { t: "h3", text: "The fix, stage by stage" },
      { t: "table", head: ["Stage", "The fix"], rows: [
        ["Landing page", "Open with \"Never Get Stuck. Build in Arabic or English. Publish in minutes. No code. No agency. No App Store waiting room.\" Add a 30-second demo above the fold."],
        ["Sign-up flow", "Fork first: Technical or Non-Technical. Then a 3-question tap-card survey (no typing): what app, built before?, Arabic or English? Kills the blank-canvas problem."],
        ["Onboarding", "6 app types as visual cards. Tap one. Straight into a pre-configured build. No decisions, no jargon."],
        ["First prompt", "Never a blank box. Show 3 pre-written prompts as tappable real-user stories, plus a prompt-quality indicator (Basic / Good / Detailed)."],
        ["Build progress", "Replace \"Applied 23 changes\" with a narrated timeline: Designing your app → Setting up your database → Building your Arabic checkout → Running security checks → Almost ready."],
        ["Post-build distribution (2nd most important rec)", "Automatic PWA suitability check — a recommendation, never a gate. If suitable: \"Your booking app is perfect for PWA. Your users can install from a WhatsApp link — no App Store required. Want to publish now?\" One button, 60 seconds. If native needed: guided App Store flow. Consider integrating Despia."],
        ["Templates", "Launch with 12 GCC-specific templates: food delivery, booking, property listings, service marketplace, community directory, events, retail catalogue, gym/fitness, professional services, restaurant menu, school parent portal, freelancer portfolio. Each shows live output before commit."],
        ["Confidence & trust", "Live counter (\"X apps built by GCC founders this week\"). After first deploy, plain-English security summary: RLS configured, inputs sanitised, PII encrypted."],
      ] },
      { t: "h3", text: "The non-technical journey, end to end" },
      { t: "p", text: "This clickable prototype demonstrates the full non-technical journey end to end." },
      { t: "p", text: "See it working — clickable prototype: https://pathak-r.github.io/mindlabdemoprototype/", only: "pdf" },
    ],
  },
  {
    part: "03",
    tag: "PRODUCT STRATEGY",
    title: "Product Strategy Recommendations",
    blocks: [
      { t: "h3", text: "What to deprioritise" },
      { t: "ul", items: [
        "Media Studio — useful only as an asset feeder into the builder for now.",
      ] },
      { t: "h3", text: "Problem classification" },
      { t: "table", head: ["Type", "Problems"], rows: [
        ["Positioning", "Split identity in messaging; generic hero; GCC differentiation buried."],
        ["UX", "Tech-stack jargon in Plan Mode; no progress narration; no prompt coaching; no distribution CTA post-deploy."],
        ["Product", "PWA suitability assessment and publish flow need to be built."],
      ] },
    ],
  },
  {
    part: "04",
    tag: "GROWTH & MONETISATION",
    title: "Growth, Monetisation & Activation",
    blocks: [
      { t: "h3", text: "Core activation event" },
      { t: "p", text: "A user publishes their first app AND shares it with at least one real person." },
      { t: "p", text: "Not sign-up. Not a URL. The moment someone other than the builder interacts with the app. Deployment to a URL nobody visits is a false positive." },
      { t: "p", text: "Secondary signal: a second edit to a published app, the strongest predictor of retention." },
      { t: "h3", text: "Funnel metrics" },
      { t: "table", head: ["Stage", "Target"], rows: [
        ["Sign-up → onboarding survey completed", "80%+"],
        ["First project started within 24h", "60%+"],
        ["Time to first template-driven build", "Under 5 min"],
        ["Sign-up → first build completed", "40%+"],
        ["First build → PWA published", "50%+"],
        ["End-to-end: sign-up → published", "≈ 20%"],
        ["App shared externally (WhatsApp / link)", "Track"],
        ["User returns within 7 days", "30%+"],
        ["Starter → Pro upgrade", "8–12% of published users"],
      ] },
      { t: "h3", text: "Retention signals (strongest first)" },
      { t: "ul", items: [
        "Published + shared externally",
        "Return within 72h to update a live app",
        "Prompting in Arabic (these users have no English-language alternative)",
        "PWA install link opened by an external user",
        "Using version history",
        "Inviting a collaborator",
      ] },
      { t: "h3", text: "Product-led growth loops" },
      { t: "ul", items: [
        "Built with Myndlab badge: every published app carries a subtle branded badge. End-users tap it → Myndlab sign-up. Zero-cost acquisition. Removable at Pro.",
        "WhatsApp-native loop: a founder shares a PWA install link; contacts install, then ask 'How did you build this?' Word-of-mouth travels through the same channel the app was distributed through.",
        "AISO: publish high-quality Arabic use-case guides optimised for AI-engine surfacing, not traditional SEO.",
      ] },
      { t: "h3", text: "Monetisation — acquisition before margin" },
      { t: "p", text: "Every pricing decision should make Myndlab the obvious choice vs Lovable ($25/mo), v0 ($20/mo), and Bolt ($20/mo). Year one is volume, not margin." },
      { t: "table", head: ["Tier", "Price", "Key unlock"], rows: [
        ["Starter", "Free, always", "3 builds/month, PWA publish with the Myndlab badge. The acquisition engine — no credit countdowns, no trial-expiry pressure. Build and share a real app before ever seeing a payment screen."],
        ["Pro", "$19/mo", "Unlimited builds, custom domain, badge removal. WhatsApp Business integration, priority AI generation, version history. At $19/mo for a full-stack solution, not a hard sell."],
        ["Team", "$49/mo", "Everything in Pro + 5 seats, shared workspace, advanced analytics, SLA support."],
        ["Enterprise", "Custom", "Sovereign infrastructure, SSO, SLA, compliance. Packaged from existing infrastructure — the additions are a contract, an SLA, and a dedicated onboarding call."],
      ] },
      { t: "h3", text: "Conversion" },
      { t: "p", text: "Gate the upgrade at the single highest-intent moment: immediately after the first PWA publish." },
      { t: "callout", text: "\"Your first app is live. Unlock unlimited builds and remove the Myndlab badge. Upgrade to Pro — first month on us.\"" },
      { t: "h3", text: "Retention" },
      { t: "p", text: "The single most important mechanic: the weekly app-performance summary." },
      { t: "p", text: "Every user with a published app gets a plain-English email. Views, installs, return visitors. No dashboard — it just arrives." },
      { t: "callout", text: "\"Your booking app had 63 visitors this week and it's still growing.\"" },
      { t: "p", text: "A founder watching their app grow week over week doesn't churn." },
      { t: "h3", text: "Lifecycle CRM — short emails: one idea, one action, one link" },
      { t: "table", head: ["When", "Message"], rows: [
        ["Day 0", "Welcome. One template suggestion from onboarding answers. No preamble."],
        ["Day 1", "\"3 things to try today.\" Specific GCC-relevant prompts with expected outputs."],
        ["Day 3 (not built)", "\"Stuck? Tap a template and we'll build it together.\" Direct link."],
        ["Day 7 (built, not published)", "\"Your app is ready to share. Here's how to get your first user in 10 minutes.\""],
        ["Day 7 (not started)", "Voice hook: \"Talk through your idea — no typing needed.\" Link to Voice Mode."],
        ["Day 14 (published, Starter)", "Upgrade nudge: custom domain + badge removal. Show with vs without the badge."],
        ["Day 30", "One real GCC founder story — their app, numbers, live PWA link. No pitch, just proof."],
        ["Weekly (any published app)", "App performance summary. Views, installs, activity. Always."],
      ] },
    ],
  },
  {
    part: "05",
    tag: "EXECUTION",
    title: "Execution & Prioritisation",
    blocks: [
      { t: "h3", text: "90-day action plan" },
      { t: "p", text: "Ongoing throughout: Distribution — meetups, hackathons, community building — runs in parallel with everything below." },
      { t: "table", head: ["Sprint", "Focus", "Key actions"], rows: [
        ["Weeks 1–3", "Build the non-technical path", "Rewrite the landing page (lead with outcome, not tool). Ship the routing question — two cards, one tap. Strip every tech-stack choice from the non-technical path. Ship the 3-question onboarding survey. Instrument the funnel and measure today's drop-off to set a baseline."],
        ["Weeks 3–5", "Fix the first build", "Implement the Model Routing Engine (internal). Launch the first batch of GCC templates (live output before commit). Add the build-progress timeline. Add the prompt coach (hints as you type; a stronger example after the build)."],
        ["Weeks 6–8 (the key sprint)", "Ship the distribution layer", "Automatic PWA suitability check after every build (recommendation, not a gate). One-click PWA publish (WhatsApp primary). Launch the \"Built with Myndlab\" badge (removable at Pro). Ship the weekly performance email the moment the first cohort publishes — strongest retention mechanic, shouldn't wait."],
        ["Weeks 9–11", "Growth infrastructure", "Publish Arabic founder guides written for AI-engine discovery. Turn 5 real founders into case studies (live PWA link + real numbers each)."],
        ["Weeks 12–13", "Retention & lifecycle", "Turn on lifecycle email sequences (now you have real funnel data). Tune the weekly performance email against real engagement. Review every metric against the Week 1 baseline. Decide next quarter from evidence, not instinct."],
      ] },
      { t: "h3", text: "Priorities" },
      { t: "table", head: ["Priority", "Action", "Why it matters"], rows: [
        ["Zero — Distribution (very important)", "Runs constantly, in parallel. Builder Meetups at co-working spaces in Dubai & Abu Dhabi; AI hackathons — attendees get Pro free for three months. AISO: when GCC founders ask ChatGPT for the best Arabic no-code builder, Myndlab is the answer.", "An elite product is meaningless without an equally aggressive distribution strategy."],
        ["1 — Sign-up fork", "One question: technical or non-technical. Two journeys, one product.", "Low engineering cost; stops the identity crisis from showing up on every screen."],
        ["2 — PWA layer", "Finish build → publish instantly → share on WhatsApp → users install on their phone. No App Store, no waiting.", "The differentiator no Western competitor offers right now."],
        ["3 — AI Routing", "Route simple tasks to cheaper, faster models. Use premium only when complexity genuinely demands it.", "User notices no difference; cost savings are significant. Every week without it is money wasted."],
      ] },
      { t: "h3", text: "Beyond 90 days — the expansion horizon" },
      { t: "ul", items: [
        "Month 4 — Summon Expert MVP: founder hits a wall → taps Summon Expert → a vetted developer fixes it (escrow system). Founder stays on the platform. Developer becomes an advocate. Myndlab takes 15%. (Part of the \"Never Get Stuck\" strategy.)",
        "Month 5 — consider building a mobile app.",
        "Month 6+ — PWA marketplace: a curated public directory of apps built on Myndlab, browsable by category and country. A network-effects asset.",
      ] },
      { t: "h3", text: "Enterprise expansion" },
      { t: "p", text: "\"Every other AI builder stores your data in the US. We don't.\"" },
      { t: "p", text: "GCC government, licensed fintechs, and healthcare providers can't put sensitive data on foreign servers. It's a regulatory hard stop. Myndlab already runs on GCC sovereign infrastructure. Western competitors can't copy it quickly." },
      { t: "ul", items: [
        "Entry point 1 — Regulated GCC entities. Fintech, proptech, healthcare, government. They need ISO 27001 + 9001, GCC data residency, Compliance Dashboard, SSO, and SLA. Enterprise is a packaging-and-sales motion, not a new build.",
        "Entry point 2 — Accelerator white-label. Hub71, Area 2071, and DIFC FinTech Hive run cohorts of 20–50 vetted founders. Myndlab provides the platform white-labeled. Activated users at near-zero acquisition cost.",
      ] },
    ],
  },
  {
    part: "06",
    tag: "THE TEST",
    title: "What success looks like at Day 90",
    blocks: [
      { t: "p", text: "Roughly 20% of users who sign up publish a live app end-to-end. That's the number to put in front of leadership." },
      { t: "p", text: "It breaks into two component rates, both baselined in Week 1: sign-up → first build completed (40%+) and first build → PWA published (50%+)." },
      { t: "table", head: ["Category", "Targets"], rows: [
        ["Funnel health", "Abandonment below 20%. Time to first template-based build under 5 min. Sign-up → published ≈ 20% end-to-end."],
        ["Distribution working", "30%+ of PWA publishers share externally. 50+ Myndlab-badged apps live and public. 5+ published GCC founder case studies with real numbers."],
        ["Retention", "Day-7 return rate among published users 30%+."],
        ["Revenue", "Pro conversion 8–12% of users who published, within 30 days — a value signal, not a hard revenue target yet."],
        ["Sentiment", "NPS above 40 from users who published at least one app."],
      ] },
      { t: "quote", text: "The honest test at Day 90: are real GCC founders sharing real apps with real users over WhatsApp? If yes, everything else — retention, monetisation, word of mouth — follows naturally." },
    ],
  },
];
