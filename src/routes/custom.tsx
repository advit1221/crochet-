import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/warm-knits/Navbar";
import { Footer } from "@/components/warm-knits/Footer";
import { CustomOrders } from "@/components/warm-knits/CustomOrders";
import { Upload, Send } from "lucide-react";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom Crochet Orders — Warm Knits" },
      {
        name: "description",
        content:
          "Tell us your idea — a character, a bouquet, a charm. We'll crochet a one-of-a-kind piece, handmade in Delhi.",
      },
      { property: "og:title", content: "Custom Crochet Orders — Warm Knits" },
      {
        property: "og:description",
        content: "Share a reference and we'll handcraft something one-of-a-kind, just for you.",
      },
    ],
  }),
  component: CustomPage,
});

function CustomPage() {
  const [fileName, setFileName] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = encodeURIComponent(
      `Hi Warm Knits! I'd like a custom piece.\n\nName: ${data.get("name")}\nIdea: ${data.get("idea")}\nColours: ${data.get("colors")}\nDeadline: ${data.get("deadline")}`,
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <section className="mx-auto max-w-5xl px-5 pb-12 pt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-rose">Custom orders</p>
          <h1 className="mt-3 text-5xl md:text-6xl text-balance">
            Tell us what you're <span className="italic text-rose">dreaming up</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Share an idea or a reference. We'll come back with a quote, a sketch and a sweet
            timeline — usually within 24 hours.
          </p>
        </section>

        <CustomOrders />

        <section className="mx-auto max-w-2xl px-5 pb-24">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-card p-6 md:p-10 shadow-soft space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="What should we call you?" />
              <Field label="Deadline (optional)" name="deadline" placeholder="e.g. 20 Dec" />
            </div>
            <Field
              label="Your idea"
              name="idea"
              as="textarea"
              placeholder="Tell us about the piece you'd like — characters, size, vibe..."
            />
            <Field
              label="Preferred colours"
              name="colors"
              placeholder="e.g. blush pink, cream, sage"
            />

            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-border bg-blush/30 p-4 text-sm text-ink/70 hover:bg-blush/50 transition-colors">
              <Upload className="h-4 w-4 text-rose" />
              <span>{fileName || "Attach a reference image (optional)"}</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-cozy hover:scale-[1.01] transition-transform"
            >
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
            <p className="text-center text-xs text-ink/55">
              Prefer email? Write to{" "}
              <a className="text-rose underline" href="mailto:hello@warmknits.in">
                hello@warmknits.in
              </a>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  as = "input",
}: {
  label: string;
  name: string;
  placeholder?: string;
  as?: "input" | "textarea";
}) {
  const base =
    "mt-2 w-full rounded-2xl border border-border bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      {as === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={base} required />
      ) : (
        <input name={name} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
