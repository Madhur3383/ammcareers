import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { submitConsultationRequest } from "@/lib/consultation.functions";

import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/book-a-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — AMM Careers" },
      {
        name: "description",
        content:
          "Book a free consultation with AMM Careers. Share your CV, target roles and preferred locations — we'll review your profile and start your managed job search this week.",
      },
      { property: "og:title", content: "Book a Consultation — AMM Careers" },
      {
        property: "og:description",
        content:
          "Free consultation with AMM Careers. We review your CV, agree target roles and start your managed job search this week.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookConsultationPage,
});

const experienceOptions = [
  "0–2 years (Fresher)",
  "2–5 years",
  "5–10 years",
  "10+ years",
  "Senior / Leadership",
];

const durationOptions = ["1 month — ₹15,000", "3 months — ₹35,000 (best value)", "Not sure yet"];

const whatYouGet = [
  "CV & LinkedIn profile review",
  "Target roles and company strategy",
  "Walkthrough of the managed search process",
  "Pricing and plan recommendation",
];

function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitConsultationRequest);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setError(null);
    setLoading(true);
    try {
      await submit({
        data: {
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          role: String(data.get("role") || "").trim(),
          experience: String(data.get("experience") || "").trim(),
          duration: String(data.get("duration") || "").trim(),
          locations: String(data.get("locations") || "").trim(),
          message: String(data.get("message") || "").trim(),
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while sending your request. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            AMM<span className="text-accent"> Careers</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Left: pitch */}
          <div className="md:col-span-2">
            <p className="eyebrow flex items-center gap-2 text-accent-foreground/70">
              <CalendarClock className="h-4 w-4 text-accent" />
              Free consultation
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
              Book a consultation.
            </h1>
            <p className="mt-4 font-display text-xl text-muted-foreground md:text-2xl">
              We'll review your profile and plan your job search — no obligation.
            </p>
            <p className="mt-6 text-muted-foreground">
              Share your CV, target roles and preferred locations. In a short call
              we'll agree on a strategy, explain how the managed search works and
              recommend the right plan for you.
            </p>

            <ul className="mt-8 space-y-3">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="surface-ink mt-10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-ink-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="font-display text-base font-semibold">
                  Your information stays private
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-foreground/75">
                Anything you share is used only to review your profile and plan your
                job search. We never sell or misuse your details.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 md:p-10">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="mt-6 text-2xl md:text-3xl">Request received</h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Thank you! Your consultation request has been received. Our team
                    will contact you shortly.
                  </p>

                  <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <BriefcaseBusiness className="h-5 w-5 text-accent" />
                    <h2 className="font-display text-xl font-semibold">
                      Request your consultation
                    </h2>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="input-base"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="input-base"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone / WhatsApp" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 ..."
                        className="input-base"
                      />
                    </Field>
                    <Field label="Target role" htmlFor="role">
                      <input
                        id="role"
                        name="role"
                        type="text"
                        required
                        placeholder="e.g. Product Manager"
                        className="input-base"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Experience" htmlFor="experience">
                      <select id="experience" name="experience" className="input-base">
                        <option value="">Select experience</option>
                        {experienceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred plan" htmlFor="duration">
                      <select id="duration" name="duration" className="input-base">
                        <option value="">Select a plan</option>
                        {durationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Preferred locations" htmlFor="locations">
                    <input
                      id="locations"
                      name="locations"
                      type="text"
                      placeholder="e.g. Bangalore, Remote, Mumbai"
                      className="input-base"
                    />
                  </Field>

                  <Field label="Anything else we should know?" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Current situation, goals, deadlines, questions..."
                      className="input-base resize-none"
                    />
                  </Field>

                  {error ? (
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
                  >
                    <Target className="h-4 w-4" />
                    {loading ? "Sending..." : "Request consultation"}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Your details are sent securely to the AMM Careers team.
                  </p>

                </form>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <UserRound className="h-4 w-4 text-accent" />
              Prefer email directly?{" "}
              <a
                href="mailto:contact.ammcareers@gmail.com"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                contact.ammcareers@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 md:flex-row md:text-left">
          <span className="font-display text-base font-semibold text-foreground">
            AMM<span className="text-accent"> Careers</span>
          </span>
          <span>© {new Date().getFullYear()} AMM Careers. Managed job search services.</span>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
