import { motion } from "motion/react";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-cozy"
    >
      <div className="relative aspect-square overflow-hidden bg-blush/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-card/95 px-3 py-1 text-[11px] font-medium text-rose shadow-soft">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-wider text-ink/50">{product.category}</p>
        <h3 className="mt-1 font-display text-xl text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-ink/60">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg text-rose">{product.price}</span>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-1.5 text-xs font-medium text-cream hover:bg-rose transition-colors"
          >
            Order
          </a>
        </div>
      </div>
    </motion.article>
  );
}
