import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Globe2,
  Handshake,
  LineChart,
  Linkedin,
  Lock,
  Mail,
  MessagesSquare,
  PenLine,
  Send,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareForge — We Manage Your Job Search End to End" },
      {
        name: "description",
        content:
          "CareForge manages your job search: LinkedIn and resume optimization, targeted daily applications, recruiter outreach, referral support and weekly progress reports.",
      },
      { property: "og:title", content: "CareForge — Stop Searching. Start Preparing." },
      {
        property: "og:description",
        content:
          "Up to 25 targeted applications a day, recruiter outreach, referral support and weekly reporting. You prepare for the interview.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Linkedin,
    title: "LinkedIn profile optimization",
    body: "Headline, About, experience, skills and keyword positioning rewritten so recruiters find and shortlist you.",
  },
  {
    icon: FileText,
    title: "Resume / CV optimization",
    body: "A professional review of your existing CV, made ATS-friendly with stronger structure, wording and impact for your target role.",
  },
  {
    icon: Target,
    title: "Job-specific resume customization",
    body: "A targeted version of your CV for each job description — matched keywords, requirements and the most relevant experience first.",
  },
  {
    icon: Globe2,
    title: "Job search across platforms",
    body: "We search and apply across Naukri, Instahyre, IIMjobs, NaukriGulf, LinkedIn and company career pages.",
  },
  {
    icon: Send,
    title: "Job applications",
    body: "20+ quality applications every day, each targeted to your CV, experience, skills, desired role, location, salary and the job requirements — never bulk or untargeted.",
  },
  {
    icon: MessagesSquare,
    title: "Recruiter & HR outreach",
    body: "We contact recruiters and hiring managers where appropriate, build professional conversations and follow up on your applications.",
  },
  {
    icon: Handshake,
    title: "Referral & hiring network access",
    body: "Where available, we help connect qualified candidates with recruiters, HR professionals and relevant hiring networks.",
  },
  {
    icon: UserRound,
    title: "Professional portfolio",
    body: "A credible portfolio presenting your experience, projects, skills, achievements, case studies and career highlights.",
  },
  {
    icon: PenLine,
    title: "Cover letters",
    body: "Customized, role-specific cover letters written whenever an application requires one.",
  },
  {
    icon: CalendarCheck,
    title: "Interview preparation support",
    body: "Once interviews are secured, we help you understand the role, clarify doubts and prepare with relevant guidance.",
  },
];

const steps = [
  {
    n: "01",
    title: "Understand your profile",
    body: "We analyze your CV, experience, skills, target roles, preferred locations and career goals.",
  },
  {
    n: "02",
    title: "Build your job search strategy",
    body: "We identify suitable roles and companies based on your profile and requirements.",
  },
  {
    n: "03",
    title: "Optimize your profile",
    body: "We optimize your CV, LinkedIn profile, portfolio and other professional materials.",
  },
  {
    n: "04",
    title: "Apply & reach out",
    body: "We apply to relevant opportunities and reach out to recruiters, HR professionals and hiring contacts.",
  },
  {
    n: "05",
    title: "Track & report",
    body: "We track applications, responses and interviews, and send you a weekly progress report.",
  },
];

const reportRows = [
  "Jobs applied to",
  "Companies targeted",
  "Recruiters contacted",
  "Referrals pursued",
  "Applications in progress",
  "Shortlisted opportunities",
  "Interviews secured",
  "Pending responses",
  "Next week's strategy",
];

const trustPoints = [
  "End-to-end job search management",
  "Targeted applications",
  "Resume & LinkedIn optimization",
  "Recruiter & HR outreach",
  "Referral support",
  "Weekly progress reports",
  "Personalized job strategy",
  "Dedicated support",
];

const weDo = [
  "Search for opportunities",
  "Optimize your CV",
  "Optimize LinkedIn",
  "Customize applications",
  "Apply to jobs",
  "Contact recruiters",
  "Pursue referrals",
  "Track applications",
  "Send weekly reports",
];

const planFeatures = [
  "Full job search management",
  "20+ quality applications per day",
  "CV tailored to every job description",
  "Applications across Naukri, Instahyre, IIMjobs, NaukriGulf, LinkedIn & company career pages",
  "LinkedIn profile optimization",
  "Daily LinkedIn & Naukri profile updates for more recruiter views",
  "Follow-up with HR & recruiters on every application",
  "Referral and hiring network support",
  "Professional portfolio & cover letters",
  "Weekly job search report",
  "Interview preparation support",
];

const faqs = [
  {
    q: "Do I have to apply for jobs myself?",
    a: "No. We handle the job-search and application process according to the agreed strategy. Your main responsibility is to stay available and prepare for interviews.",
  },
  {
    q: "How many jobs do you apply to?",
    a: "We submit 20+ quality applications per day, each matched to your CV and the job requirements — not bulk or random submissions.",
  },
  {
    q: "Do you customize my resume?",
    a: "Yes. We optimize your core resume and tailor it to relevant job descriptions when required.",
  },
  {
    q: "Do you contact recruiters?",
    a: "Yes. Recruiter and HR outreach is part of our job-search strategy.",
  },
  {
    q: "Do you provide referrals?",
    a: "We help pursue relevant referrals and professional introductions where available through our network and outreach.",
  },
  {
    q: "Will I get interviews?",
    a: "We aim to secure at least 3 interview opportunities per month for eligible clients, subject to the agreed service terms, profile quality, market conditions and employer decisions.",
  },
  {
    q: "Will I receive updates?",
    a: "Yes. You receive a weekly report covering applications, companies targeted, recruiter outreach, responses, interviews and next steps.",
  },
  {
    q: "What do I need to do?",
    a: "Provide accurate information, remain responsive and prepare for the interviews. We handle the job-search execution.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Care<span className="text-accent">Forge</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              Process
            </a>
            <a href="#report" className="transition-colors hover:text-foreground">
              Weekly report
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            Get started
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2 text-accent-foreground/70">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Managed job search service
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
              Stop searching. Start preparing.
            </h1>
            <p className="mt-4 font-display text-xl text-muted-foreground md:text-2xl">
              We handle your job search. You prepare for the interview.
            </p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From LinkedIn optimization and ATS-friendly resumes to targeted
              applications, recruiter outreach, referrals and weekly reporting — we
              manage your job search from start to finish.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:px-7"
              >
                Start your job search
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary sm:px-7"
              >
                Book a consultation
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["20+", "Quality applications / day"],
                ["3+", "Interview opportunities / month"],
                ["7", "Days of continuous job search"],
                ["100%", "Managed job search"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-semibold md:text-3xl">{stat}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/15 blur-2xl" />
            <img
              src={heroImage}
              alt="Consultant managing a client's job search, resume and application tracker"
              width={1408}
              height={1056}
              className="w-full rounded-2xl object-cover shadow-lift"
            />
          </div>
        </section>

        {/* Platforms strip */}
        <section className="border-y border-border bg-secondary/60">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 text-sm font-medium text-muted-foreground sm:px-6 sm:gap-x-10">
            <span className="eyebrow text-foreground">We search & apply on</span>
            {[
              "LinkedIn",
              "Naukri",
              "Instahyre",
              "IIMjobs",
              "NaukriGulf",
              "Company career pages",
            ].map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </section>

        {/* Promise */}
        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
          <p className="eyebrow text-muted-foreground">Our promise</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
            Your job search should not feel like a full-time job.
          </h2>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold">
            {["We search", "We optimize", "We customize", "We apply", "We reach out", "We track", "We report"].map(
              (w) => (
                <span
                  key={w}
                  className="rounded-full border border-border bg-card px-4 py-2 shadow-soft"
                >
                  {w}
                </span>
              ),
            )}
          </div>
          <p className="mt-8 font-display text-2xl md:text-3xl">
            You prepare for the interview.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="eyebrow text-muted-foreground">What we do</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            End-to-end job search management.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* The difference */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="eyebrow text-muted-foreground">The difference</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                We don't simply give career advice. We manage your job search for you.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Most services hand you a document and a checklist. We run the search
                as a service: finding the right opportunities, optimizing your resume
                and LinkedIn, applying to jobs, reaching recruiters, pursuing referrals
                and tracking your progress — end to end.
              </p>
            </div>
            <div className="space-y-6">
              {[
                [
                  "Built for working professionals",
                  "You cannot run a serious search between meetings. We can.",
                ],
                [
                  "Targeted, never random",
                  "Every application is matched to your role, skills and expectations.",
                ],
                [
                  "Positioning, not padding",
                  "Your resume and LinkedIn are rewritten to say what hiring teams need to read.",
                ],
                [
                  "Accountable by default",
                  "A weekly report shows exactly what was done and what comes next.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="border-l-2 border-accent pl-5">
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="surface-ink">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <p className="eyebrow text-accent">How it works</p>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
              A structured, tracked search — not a one-off document.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((s) => (
                <div key={s.n} className="border-t border-ink-foreground/20 pt-5">
                  <span className="font-display text-sm text-accent">{s.n}</span>
                  <h3 className="mt-3 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly report */}
        <section id="report" className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <p className="eyebrow text-muted-foreground">Weekly reporting</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                You always know exactly where your search stands.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every week you receive a clear report of everything we did, what came
                back, and what we are doing next.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card shadow-lift">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="font-display font-semibold">Weekly job search report</span>
                <LineChart className="h-4 w-4 text-accent" />
              </div>
              <ul className="divide-y divide-border">
                {reportRows.map((row) => (
                  <li
                    key={row}
                    className="flex items-center justify-between gap-4 px-6 py-3 text-sm"
                  >
                    <span className="text-muted-foreground">{row}</span>
                    <span className="h-2 w-16 rounded-full bg-accent/30" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Daily target */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:p-14">
            <div>
              <p className="eyebrow text-muted-foreground">Daily application target</p>
              <h2 className="mt-3 text-3xl md:text-4xl">20+ quality applications every day.</h2>
              <p className="mt-4 text-muted-foreground">
                We continuously search for relevant opportunities and submit targeted
                applications across Naukri, Instahyre, IIMjobs, NaukriGulf, LinkedIn and
                company career pages.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Every application is matched to your CV, experience, skills, desired
                role, location, salary expectations and the job requirements. We also
                update your LinkedIn and Naukri profiles daily so recruiters find you
                faster, and follow up with HR on every application.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["20+", "Quality applications / day"],
                ["140+", "Applications / week"],
                ["7", "Days of active search"],
                ["3+", "Interviews / month target"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-background p-6">
                  <p className="font-display text-3xl font-semibold">{n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interview guarantee */}
        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
          <p className="eyebrow text-muted-foreground">Service guarantee</p>
          <h2 className="mt-3 text-3xl md:text-4xl">3 interview opportunities per month.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We aim to secure a minimum of 3 interview opportunities per month for
            eligible clients through targeted applications, recruiter outreach and
            referral efforts.
          </p>
          <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border bg-secondary/60 px-6 py-4 text-xs leading-relaxed text-muted-foreground">
            Interview outcomes depend on candidate profile, market demand, job
            availability, eligibility and employer selection processes. Our guarantee is
            subject to the agreed service terms.
          </p>
        </section>

        {/* You / We */}
        <section className="surface-ink">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="rounded-2xl border border-ink-foreground/20 p-8">
              <p className="eyebrow text-accent">You</p>
              <h3 className="mt-4 text-2xl">Prepare for interviews.</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-75">
                Stay available, stay responsive, and walk into every interview
                prepared.
              </p>
              <p className="eyebrow mt-6 text-accent">That's it</p>

            </div>
            <div className="rounded-2xl border border-ink-foreground/20 p-8">
              <p className="eyebrow text-accent">We</p>
              <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                {weDo.map((w) => (
                  <li key={w} className="flex gap-2 opacity-85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="eyebrow text-muted-foreground">Why candidates trust us</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            A professional team running your search, every day.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {t}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            You don't have to spend hours every day searching and applying for jobs. We
            handle the process while you focus on preparing for the opportunities that
            matter.
          </p>
        </section>

        {/* Credentials safe */}
        <section className="surface-ink">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <p className="eyebrow text-accent">Your credentials stay safe</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                Trusted with your accounts. Your passwords are never misused.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">
                To run your job search end to end, we work with your LinkedIn, Naukri,
                Instahyre, IIMjobs, NaukriGulf and other career-platform accounts on your
                behalf. We treat that access as a privilege — not a right.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed opacity-75">
                Login credentials are stored securely, shared only with the team members
                actively working on your search, and used solely to apply, follow up and
                keep your profiles active. We never post, message or change anything you
                haven't approved, and you retain full ownership of every account.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold">
                  Guaranteed: your credentials stay private and protected.
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "LinkedIn",
                  "Profile updates, applications and recruiter outreach only.",
                ],
                [
                  "Naukri",
                  "Daily refresh and targeted applications, nothing else.",
                ],
                [
                  "Instahyre",
                  "Used only to apply to roles that fit your profile.",
                ],
                [
                  "IIMjobs",
                  "Applications submitted on your behalf, with your approval.",
                ],
                [
                  "NaukriGulf",
                  "Access limited to relevant Gulf-region openings.",
                ],
                [
                  "Career pages",
                  "Company portals handled with the same strict access rules.",
                ],
              ].map(([platform, detail]) => (
                <div
                  key={platform}
                  className="rounded-2xl border border-ink-foreground/20 p-5"
                >
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-accent" />
                    <h3 className="text-base font-semibold">{platform}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
            <p className="eyebrow text-center text-muted-foreground">Pricing</p>
            <h2 className="mt-3 text-center text-3xl md:text-4xl">
              Your entire job search, managed.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              One service. Two durations. Includes CV tailoring to every job description,
              applications across all major portals, HR follow-up and daily profile
              updates — so recruiters find you faster.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* 1-month plan */}
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
                <h3 className="text-xl">1 Month</h3>
                <p className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                  ₹15,000
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  For a focused, fast job search.
                </p>
                <ul className="mt-6 grid gap-3 text-sm">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Start for 1 month
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              {/* 3-month plan */}
              <div className="relative rounded-3xl border border-accent bg-card p-8 shadow-lift md:p-10">
                <span className="absolute right-6 top-6 eyebrow rounded-full bg-accent px-3 py-1 text-gold-foreground">
                  Best value
                </span>
                <h3 className="text-xl">3 Months</h3>
                <p className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                  ₹35,000
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Save ₹10,000 vs. the monthly rate.
                </p>
                <ul className="mt-6 grid gap-3 text-sm">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Let us handle your job search
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Prices are flexible and negotiable based on your requirements.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <p className="eyebrow text-muted-foreground">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Questions we get a lot.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-accent transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
          <div className="surface-ink rounded-3xl px-6 py-12 text-center sm:px-8 md:px-16 md:py-16">
            <BriefcaseBusiness className="mx-auto h-8 w-8 text-accent" />
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl md:text-4xl">
              Let us handle your job search.
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-75">
              Book a short consultation with our founder, Madhur Patel. We'll review your
              CV, agree on target roles and start your search this week.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@careforge.co?subject=Start%20my%20job%20search"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5 sm:px-7"
              >
                <Mail className="h-4 w-4" />
                hello@careforge.co
              </a>
              <a
                href="https://wa.me/10000000000"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-ink-foreground/10 sm:px-7"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 md:flex-row md:text-left">
          <span className="font-display text-base font-semibold text-foreground">
            Care<span className="text-accent">Forge</span>
          </span>
          <span>© {new Date().getFullYear()} CareForge. Managed job search services.</span>
        </div>
      </footer>
    </div>
  );
}
