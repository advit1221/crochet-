import { motion } from "motion/react";
import { Upload, MessageCircle, Palette, Truck } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Choose", desc: "Tell us what you're dreaming up — a character, flower, charm." },
  { icon: Palette, title: "Customise", desc: "Pick colours, add a name, send a reference picture." },
  { icon: Upload, title: "We create", desc: "We crochet it slowly by hand, sending updates along the way." },
  { icon: Truck, title: "Deliver", desc: "Wrapped sweetly and shipped pan-India in 7–14 days." },
];

export function CustomOrders() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid items-start gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-rose">Custom orders</p>
          <h2 className="mt-2 text-4xl md:text-5xl text-balance">
            Got a tiny idea? <span className="italic text-rose">Let's stitch it.</span>
          </h2>
          <p className="mt-4 text-ink/70 max-w-md">
            From bridesmaid keychains to mini versions of your favourite character — share a
            reference and we'll handcraft something one-of-a-kind for you.
          </p>
          <a
            href="/custom"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cozy hover:scale-105 transition-transform"
          >
            Request a design
          </a>
        </div>
        <ol className="md:col-span-3 grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-card p-6"
            >
              <span className="absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose font-display text-cream shadow-soft">
                {i + 1}
              </span>
              <s.icon className="h-5 w-5 text-rose" />
              <h3 className="mt-3 font-display text-lg text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-ink/65">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
