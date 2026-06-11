import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/warm-knits/Navbar";
import { Hero } from "@/components/warm-knits/Hero";
import { FeaturedProducts } from "@/components/warm-knits/FeaturedProducts";
import { WhyOurBusiness } from "@/components/warm-knits/WhyWarmKnits";
import { CustomOrders } from "@/components/warm-knits/CustomOrders";
import { BestSellers } from "@/components/warm-knits/BestSellers";
import { Reviews } from "@/components/warm-knits/Reviews";
import { InstagramGallery } from "@/components/warm-knits/InstagramGallery";
import { FAQ } from "@/components/warm-knits/FAQ";
import { CTA } from "@/components/warm-knits/CTA";
import { Footer } from "@/components/warm-knits/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Warm Knits — Handmade Crochet Gifts, Flowers & Charms" },
      {
        name: "description",
        content:
          "Handcrafted crochet flowers, bouquets, character merch, bag charms and custom gifts. Made with love in Delhi. Tiny gifts, big smiles.",
      },
      { property: "og:title", content: "Warm Knits — Handmade Crochet Gifts" },
      {
        property: "og:description",
        content:
          "A tiny magical crochet world. Flowers, bouquets, characters and custom creations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <WhyWarmKnits />
        <CustomOrders />
        <BestSellers />
        <Reviews />
        <InstagramGallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
