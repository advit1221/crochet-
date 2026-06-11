import { ProductCard } from "./ProductCard";
import { bestSellers } from "@/data/products";

export function BestSellers() {
  return (
    <section className="bg-sage/25 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-rose">Customer favourites</p>
            <h2 className="mt-2 text-4xl md:text-5xl text-balance">Pieces that keep selling out</h2>
          </div>
          <p className="max-w-md text-ink/70">
            The little classics — restocked the moment the last one ships.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {bestSellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
