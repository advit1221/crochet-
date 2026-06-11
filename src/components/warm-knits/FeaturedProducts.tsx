import { ProductCard } from "./ProductCard";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-rose">The shop</p>
          <h2 className="mt-2 text-4xl md:text-5xl text-balance">A tiny world to fall in love with</h2>
        </div>
        <p className="max-w-md text-ink/70">
          Every piece is hand-crocheted in our Delhi studio, made to be kept (and squished) forever.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
