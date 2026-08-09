import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  Linkedin,
  Mail,
  PenLine,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareerLift — LinkedIn, CV & Job Application Consultants" },
      {
        name: "description",
        content:
          "We optimize your LinkedIn and CV, tailor your resume to every job description, build your portfolio, write cover letters, and apply to jobs for you — every week.",
      },
      { property: "og:title", content: "CareerLift — Done-for-you job search" },
      {
        property: "og:description",
        content:
          "LinkedIn optimization, JD-tailored CVs, portfolios, cover letters, and daily job applications across every board and career site.",
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
    body: "Keyword-rich headline, About, and experience rewrite so recruiters find you and stop scrolling.",
  },
  {
    icon: FileText,
    title: "CV rewrite & ATS tuning",
    body: "A clean, achievement-led CV built to pass applicant tracking systems and human screeners alike.",
  },
  {
    icon: Target,
    title: "CV tailored to each JD",
    body: "Every application gets an edited version matched to the job description, skills, and keywords.",
  },
  {
    icon: Globe2,
    title: "Full job-board coverage",
    body: "LinkedIn, Indeed, Naukri, Glassdoor, Wellfound, Dice, Bayt — plus direct company career sites.",
  },
  {
    icon: UserRound,
    title: "Portfolio building",
    body: "A simple, credible portfolio page that showcases your projects, results, and case studies.",
  },
  {
    icon: PenLine,
    title: "Cover letters that fit",
    body: "Role-specific letters written per application — never a template with the company name swapped.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery call",
    body: "We map your target roles, salary band, locations, and any deal-breakers.",
  },
  {
    n: "02",
    title: "Profile & CV overhaul",
    body: "LinkedIn, master CV, and portfolio rebuilt around the roles you actually want.",
  },
  {
    n: "03",
    title: "We apply, weekly",
    body: "Curated roles across boards and career sites, each with a tailored CV and cover letter.",
  },
  {
    n: "04",
    title: "Track & iterate",
    body: "You get a live application tracker. We adjust keywords and targeting on the response data.",
  },
];

const plans = [
  {
    name: "Foundation",
    price: "$149",
    note: "one-time",
    features: [
      "LinkedIn profile optimization",
      "ATS-ready CV rewrite",
      "Keyword & role targeting guide",
      "One revision round",
    ],
  },
  {
    name: "Career Sprint",
    price: "$399",
    note: "per month",
    featured: true,
    features: [
      "Everything in Foundation",
      "60 tailored applications / month",
      "JD-matched CV for every role",
      "Custom cover letter per application",
      "Portfolio page setup",
      "Weekly application tracker",
    ],
  },
  {
    name: "Executive",
    price: "$799",
    note: "per month",
    features: [
      "Everything in Career Sprint",
      "120 applications incl. career sites",
      "Recruiter outreach & follow-ups",
      "Interview prep sessions",
      "Dedicated consultant on WhatsApp",
    ],
  },
];

const testimonials = [
  {
    quote:
      "I went from zero replies in four months to six interviews in three weeks. The tailored CVs made all the difference.",
    name: "Priya S.",
    role: "Data Analyst → Senior Analyst, fintech",
  },
  {
    quote:
      "They handled every application while I was still working full time. I just showed up to the interviews.",
    name: "Daniel O.",
    role: "Supply Chain Manager, Dubai",
  },
  {
    quote:
      "My LinkedIn went from invisible to three recruiter InMails a week. Worth every rupee.",
    name: "Ankit M.",
    role: "Backend Engineer, remote",
  },
];

const faqs = [
  {
    q: "Do you apply to jobs using my details?",
    a: "Yes. With your written permission we apply on your behalf using your credentials, and we log every application in a shared tracker so you always know where you stand.",
  },
  {
    q: "Which platforms do you cover?",
    a: "All major boards — LinkedIn, Indeed, Naukri, Glassdoor, Monster, Wellfound, Dice, Bayt — plus direct company career portals like Workday, Greenhouse, Lever, and Taleo.",
  },
  {
    q: "How is the CV edited for each job?",
    a: "We keep a master CV, then adjust the summary, skills order, and bullet wording to mirror each job description's requirements and keywords before submitting.",
  },
  {
    q: "How soon do results come?",
    a: "Most clients see recruiter activity within 2–3 weeks of the profile overhaul, and interview calls within the first month of active applications.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Career<span className="text-accent">Lift</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              Process
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2 text-accent-foreground/70">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Trusted by 1,200+ job seekers
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
              We run your job search, so you only show up to interviews.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              LinkedIn optimization, an ATS-ready CV edited for every job description,
              a portfolio, cover letters, and applications submitted for you across
              every job board and company career site — week after week.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Get a free CV review
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                See plans
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["1,200+", "clients placed"],
                ["40k+", "applications sent"],
                ["3.4x", "more interview calls"],
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
              alt="Career consultant reviewing a client's optimized CV and LinkedIn profile"
              width={1408}
              height={1056}
              className="w-full rounded-2xl object-cover shadow-lift"
            />
          </div>
        </section>

        {/* Platforms strip */}
        <section className="border-y border-border bg-secondary/60">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm font-medium text-muted-foreground">
            <span className="eyebrow text-foreground">We search & apply on</span>
            {["LinkedIn", "Indeed", "Naukri", "Glassdoor", "Wellfound", "Dice", "Bayt", "Workday", "Greenhouse"].map(
              (p) => (
                <span key={p}>{p}</span>
              ),
            )}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="eyebrow text-muted-foreground">What we do</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Everything between your CV and the offer letter.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Process */}
        <section id="process" className="surface-ink">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="eyebrow text-accent">How it works</p>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
              A steady, tracked search — not a one-off document.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-4">
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

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="eyebrow text-muted-foreground">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Pick the level of help you need.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-accent bg-card shadow-lift lg:-translate-y-3"
                    : "border-border bg-card shadow-soft"
                }`}
              >
                {plan.featured && (
                  <span className="eyebrow mb-4 self-start rounded-full bg-accent px-3 py-1 text-gold-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl">{plan.name}</h3>
                <p className="mt-4 font-display text-4xl font-semibold">
                  {plan.price}
                  <span className="ml-2 text-sm font-normal text-muted-foreground">{plan.note}</span>
                </p>
                <ul className="mt-7 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="eyebrow text-muted-foreground">Client results</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Trusted, and it shows.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <blockquote className="font-display text-lg leading-snug">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
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
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="surface-ink rounded-3xl px-8 py-14 text-center md:px-16">
            <BriefcaseBusiness className="mx-auto h-8 w-8 text-accent" />
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl md:text-4xl">
              Send us your CV. We'll tell you exactly what's holding it back — free.
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-75">
              A 20-minute call, an honest review, and a plan for the next 30 days of
              your search. No obligation.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@careerlift.co?subject=Free%20CV%20review"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                hello@careerlift.co
              </a>
              <a
                href="https://wa.me/10000000000"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-ink-foreground/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <span className="font-display text-base font-semibold text-foreground">
            Career<span className="text-accent">Lift</span>
          </span>
          <span>© {new Date().getFullYear()} CareerLift. Job search consultants.</span>
        </div>
      </footer>
    </div>
  );
}
