import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-rose">Customer love</p>
        <h2 className="mt-2 text-4xl md:text-5xl text-balance">
          Real notes from really happy people
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <Quote className="h-5 w-5 text-peach" />
            <blockquote className="mt-3 text-sm text-ink/80 leading-relaxed">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <div>
                <p className="font-display text-base text-ink">{r.name}</p>
                <p className="text-xs text-ink/55">{r.city}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
