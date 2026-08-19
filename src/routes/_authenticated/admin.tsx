import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { getAdminOverview, deleteConsultationRequest } from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — AMM Careers" },
      { name: "description", content: "Consultation requests received through the AMM Careers website." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Dashboard — AMM Careers" },
      {
        property: "og:description",
        content: "Consultation requests received through the AMM Careers website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminDashboard,
});

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function AdminDashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchOverview = useServerFn(getAdminOverview);
  const removeRequest = useServerFn(deleteConsultationRequest);

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-overview"],
    queryFn: () => fetchOverview(),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => removeRequest({ data: { id } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-overview"] }),
  });

  const requests = data?.requests ?? [];
  const now = Date.now();
  const last7 = requests.filter(
    (r) => now - new Date(r.created_at).getTime() < 7 * 24 * 60 * 60 * 1000,
  ).length;
  const today = requests.filter(
    (r) => new Date(r.created_at).toDateString() === new Date().toDateString(),
  ).length;

  async function signOut() {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/auth" });
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-6">
          <Link to="/" className="font-display text-lg font-semibold text-foreground">
            AMM<span className="text-accent"> Careers</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Admin dashboard</span>
            <button
              onClick={signOut}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {isLoading && <p className="text-sm text-muted-foreground">Loading requests…</p>}

        {error && (
          <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error instanceof Error ? error.message : "Could not load the dashboard."}
          </p>
        )}

        {data && !data.isAdmin && (
          <div className="rounded-2xl border border-border bg-card p-8">
            <h1 className="font-display text-xl font-semibold text-foreground">Access pending</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              This account doesn't have admin access yet. Ask an existing admin to grant your
              account the admin role, then reload this page.
            </p>
          </div>
        )}

        {data?.isAdmin && (
          <>
            <h1 className="font-display text-3xl font-semibold text-foreground">
              Consultation requests
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Every enquiry submitted through the booking page.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Total requests", value: requests.length },
                { label: "Last 7 days", value: last7 },
                { label: "Today", value: today },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 font-display text-3xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {requests.length === 0 ? (
              <p className="mt-8 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                No consultation requests yet.
              </p>
            ) : (
              <div className="mt-8 space-y-4">
                {requests.map((r) => (
                  <article key={r.id} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display text-lg font-semibold text-foreground">
                          {r.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">{formatDate(r.created_at)}</p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(`Delete the request from ${r.name}?`)) {
                            deleteMutation.mutate(r.id);
                          }
                        }}
                        disabled={deleteMutation.isPending}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-muted disabled:opacity-60"
                      >
                        Delete
                      </button>
                    </div>

                    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                      <Field label="Email">
                        <a className="text-accent hover:underline" href={`mailto:${r.email}`}>
                          {r.email}
                        </a>
                      </Field>
                      <Field label="Phone">
                        {r.phone ? (
                          <a className="text-accent hover:underline" href={`tel:${r.phone}`}>
                            {r.phone}
                          </a>
                        ) : (
                          "—"
                        )}
                      </Field>
                      <Field label="Target role">{r.role}</Field>
                      <Field label="Experience">{r.experience || "—"}</Field>
                      <Field label="Preferred plan">{r.duration || "—"}</Field>
                      <Field label="Locations">{r.locations || "—"}</Field>
                    </dl>

                    {r.message && (
                      <p className="mt-4 rounded-xl bg-muted/50 p-4 text-sm text-foreground">
                        {r.message}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-foreground">{children}</dd>
    </div>
  );
}
