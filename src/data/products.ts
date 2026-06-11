import bouquet from "@/assets/images/products/bouquet.jpg";
import flowers from "@/assets/images/products/flowers.jpg";
import spiderman from "@/assets/images/products/spiderman.jpg";
import charms from "@/assets/images/products/charms.jpg";
import keychains from "@/assets/images/products/keychains.jpg";
import sunflower from "@/assets/images/products/sunflower.jpg";
import strawberry from "@/assets/images/products/strawberry.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  badge?: string;
  category: "Flowers" | "Bouquets" | "Characters" | "Charms" | "Keychains";
};

export const featuredProducts: Product[] = [
  {
    id: "tulip-bouquet",
    name: "Tulip Bouquet",
    tagline: "Forever blooming, never wilting",
    price: "₹899",
    image: bouquet,
    badge: "Bestseller",
    category: "Bouquets",
  },
  {
    id: "pastel-flowers",
    name: "Pastel Flower Set",
    tagline: "A handful of tiny petals",
    price: "₹499",
    image: flowers,
    category: "Flowers",
  },
  {
    id: "spidey",
    name: "Mini Spidey",
    tagline: "Your friendly neighbourhood plush",
    price: "₹749",
    image: spiderman,
    badge: "Fan favourite",
    category: "Characters",
  },
  {
    id: "bag-charms",
    name: "Tote Bag Charms",
    tagline: "Tiny joys that dangle",
    price: "₹349",
    image: charms,
    category: "Charms",
  },
  {
    id: "animal-keychains",
    name: "Animal Keychains",
    tagline: "Pocket-sized companions",
    price: "₹299",
    image: keychains,
    category: "Keychains",
  },
  {
    id: "sunflower",
    name: "Sunshine Sunflower",
    tagline: "A little stem of happy",
    price: "₹399",
    image: sunflower,
    category: "Flowers",
  },
];

export const bestSellers: Product[] = [
  featuredProducts[2],
  featuredProducts[0],
  {
    id: "strawberry-charm",
    name: "Strawberry Charm",
    tagline: "Berry sweet keepsake",
    price: "₹249",
    image: strawberry,
    badge: "Trending",
    category: "Charms",
  },
  featuredProducts[5],
];

export const collections = [
  { id: "flowers", name: "Crochet Flowers", image: flowers, count: "24 designs" },
  { id: "bouquets", name: "Bouquets", image: bouquet, count: "12 designs" },
  { id: "characters", name: "Characters", image: spiderman, count: "18 designs" },
  { id: "charms", name: "Bag Charms", image: charms, count: "30+ designs" },
  { id: "keychains", name: "Keychains", image: keychains, count: "26 designs" },
];
