import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "@/integrations/supabase/types";

const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  role: z.string().trim().min(1, "Target role is required").max(120),
  experience: z.string().trim().max(80).optional().default(""),
  duration: z.string().trim().max(80).optional().default(""),
  locations: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type ConsultationInput = z.input<typeof consultationSchema>;

const NOTIFY_TO = "contact.ammcareers@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const submitConsultationRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => consultationSchema.parse(input))
  .handler(async ({ data }) => {
    const supabaseUrl = process.env["SUPABASE_URL"]!;
    const supabaseKey = process.env["SUPABASE_PUBLISHABLE_KEY"]!;

    const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (supabaseKey.startsWith("sb_") && headers.get("Authorization") === `Bearer ${supabaseKey}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", supabaseKey);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase.from("consultation_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      role: data.role,
      experience: data.experience || null,
      duration: data.duration || null,
      locations: data.locations || null,
      message: data.message || null,
    });

    if (error) {
      console.error("Failed to store consultation request", error);
      throw new Error("Could not save your request. Please try again.");
    }

    const resendKey = process.env["RESEND_API_KEY"];
    if (resendKey) {
      try {
        const rows: Array<[string, string]> = [
          ["Name", data.name],
          ["Email", data.email],
          ["Phone", data.phone || "—"],
          ["Target role", data.role],
          ["Experience", data.experience || "—"],
          ["Preferred plan", data.duration || "—"],
          ["Preferred locations", data.locations || "—"],
          ["Message", data.message || "—"],
        ];
        const html = `<h2>New consultation request</h2><table cellpadding="6">${rows
          .map(
            ([label, value]) =>
              `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}</table>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "AMM Careers <onboarding@resend.dev>",
            to: [NOTIFY_TO],
            reply_to: data.email,
            subject: `New consultation request — ${data.name}`,
            html,
          }),
        });
        if (!res.ok) {
          console.error("Resend notification failed", res.status, await res.text());
        }
      } catch (err) {
        console.error("Resend notification error", err);
      }
    }

    return { ok: true as const };
  });
