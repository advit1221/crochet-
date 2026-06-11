import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function CTA() {
  return (
    <section className="px-5 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose to-peach px-8 py-16 text-center text-cream md:py-20"
      >
        <div aria-hidden className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-cream blur-2xl" />
          <div className="absolute bottom-0 right-10 h-52 w-52 rounded-full bg-lavender blur-2xl" />
        </div>
        <Heart className="mx-auto h-8 w-8 fill-current animate-wiggle" />
        <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
          Send a tiny smile to someone today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/90 text-balance">
          Whether it's a flower bouquet that never wilts or a mini character of someone you love —
          let's craft something they'll keep forever.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#shop"
            className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-rose hover:scale-105 transition-transform"
          >
            Shop the collection
          </a>
          <a
            href="https://wa.me/919999999999"
            className="rounded-full border border-cream/60 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
          >
            Message us on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
