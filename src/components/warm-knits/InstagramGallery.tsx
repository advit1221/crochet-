import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export function InstagramGallery() {
  return (
    <section id="gallery" className="bg-peach/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-rose">From the studio</p>
            <h2 className="mt-2 text-4xl md:text-5xl text-balance">
              A peek into our little crochet world
            </h2>
          </div>
          <a
            href="https://instagram.com/ Crochet "
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-ink hover:bg-cream transition-colors"
          >
            <Instagram className="h-4 w-4" /> @crochetbusinessofficial
          </a>
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
          {galleryItems.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
