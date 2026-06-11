import { motion } from "motion/react";
import { Star, Sparkles, MapPin } from "lucide-react";
import heroScene from "@/assets/images/hero/hero-scene.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft pastel blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blush blur-3xl opacity-60" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-peach blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lavender blur-3xl opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:pt-20">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-ink/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Handmade in Delhi · Custom orders open
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-5xl leading-[1.05] text-balance md:text-7xl"
          >
            Handmade happiness,
            <span className="block text-rose italic font-display">one stitch at a time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-lg text-lg text-ink/70 text-balance"
          >
            Handcrafted crochet gifts, flowers, charms and custom creations made to make every
            tiny moment a little more special.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#shop"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cozy transition-transform hover:scale-105"
            >
              Shop the collection
            </a>
            <a
              href="/custom"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-ink hover:bg-blush/40 transition-colors"
            >
              Start a custom order
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-ink/70"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
              <span className="ml-1">Loved by customers</span>
            </div>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Handmade in Delhi
            </span>
            <span>Custom orders available</span>
          </motion.div>
        </div>

        {/* Hero image with floating accents */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] border-8 border-card shadow-cozy"
          >
            <img
              src={heroScene}
              alt="A tiny world of handmade crochet flowers, charms and characters"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -left-4 top-10 hidden rounded-2xl bg-card px-4 py-3 shadow-soft md:block"
            style={{ ["--r" as string]: "-6deg" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="animate-float">
              <p className="font-display text-sm text-ink">Bouquets</p>
              <p className="text-xs text-ink/60">from ₹499</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-10 hidden rounded-2xl bg-sage/70 px-4 py-3 shadow-soft md:block"
            style={{ ["--r" as string]: "5deg" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <div className="animate-float-slow">
              <p className="font-display text-sm text-ink">Charms & Keys</p>
              <p className="text-xs text-ink/70">from ₹249</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
