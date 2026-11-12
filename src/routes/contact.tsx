import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo({ title: "Contact", description: "Send a message to Qinghe Atelier, a fictional studio. This demo form stores nothing.", path: "/contact" }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter a name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    // Demo only: nothing is sent or stored.
    setErrors({});
    setSent(true);
  }

  const field = "mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="font-display text-5xl">Contact</h1>
      <p className="mt-4 text-sm text-muted-foreground">This is a demo form. Please don't enter real personal information — nothing is sent or saved.</p>
      {sent ? (
        <div role="status" className="mt-10 rounded-xl border border-border bg-secondary p-6">
          <h2 className="font-display text-2xl">Thank you!</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your message was received (demo only).</p>
          <button onClick={() => setSent(false)} className="mt-4 text-sm text-primary underline">Send another</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-10 space-y-5">
          {(["name", "email"] as const).map((n) => (
            <label key={n} className="block text-sm capitalize">{n}
              <input name={n} type={n === "email" ? "email" : "text"} className={field} placeholder={n === "email" ? "you@example.com" : "Jane Doe"} />
              {errors[n] && <span className="text-xs text-destructive">{errors[n]}</span>}
            </label>
          ))}
          <label className="block text-sm">Message
            <textarea name="message" rows={5} className={field} placeholder="Lorem ipsum..." />
            {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
          </label>
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">Send message</button>
        </form>
      )}
    </div>
  );
}
