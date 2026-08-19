import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getAdminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: roles, error: roleError } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId);

    if (roleError) throw new Error("Could not verify your access.");

    const isAdmin = (roles ?? []).some((r) => r.role === "admin");
    if (!isAdmin) {
      return { isAdmin: false as const, requests: [] };
    }

    const { data, error } = await context.supabase
      .from("consultation_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error("Could not load consultation requests.");

    return { isAdmin: true as const, requests: data ?? [] };
  });

export const deleteConsultationRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("consultation_requests")
      .delete()
      .eq("id", data.id);

    if (error) throw new Error("Could not delete this request.");
    return { ok: true as const };
  });
