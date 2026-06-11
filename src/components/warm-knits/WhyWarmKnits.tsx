import { motion } from "motion/react";
import { Heart, Sparkles, Gift, Flower2 } from "lucide-react";

const items = [
  { icon: Heart, title: "Made by hand", desc: "Every stitch shaped slowly, never mass-produced." },
  { icon: Sparkles, title: "Personalised", desc: "Custom colours, characters and tiny details on request." },
  { icon: Gift, title: "Gift-ready", desc: "Wrapped in soft kraft paper with a handwritten note." },
  { icon: Flower2, title: "Blooms forever", desc: "Flowers that never wilt — built to be kept always." },
];

export function WhyOurBusiness() {
  return (
    <section className="relative bg-blush/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-rose">Why Our Business</p>
          <h2 className="mt-2 text-4xl md:text-5xl text-balance">
            Little gifts, made with a lot of love
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-peach/50 text-rose">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl text-ink">{it.title}</h3>
              <p className="mt-1 text-sm text-ink/65">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
