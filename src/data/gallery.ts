import g1 from "@/assets/images/gallery/g1.jpg";
import g2 from "@/assets/images/gallery/g2.jpg";
import g3 from "@/assets/images/gallery/g3.jpg";
import g4 from "@/assets/images/gallery/g4.jpg";
import g5 from "@/assets/images/gallery/g5.jpg";
import g6 from "@/assets/images/gallery/g6.jpg";

export type GalleryItem = { id: string; src: string; alt: string; span?: "tall" | "wide" | "normal" };

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: g1, alt: "Crochet tulip bouquet", span: "tall" },
  { id: "g2", src: g2, alt: "Yarn flatlay", span: "wide" },
  { id: "g3", src: g3, alt: "Pink heart keychain", span: "normal" },
  { id: "g4", src: g4, alt: "Hands holding a crochet bouquet", span: "tall" },
  { id: "g5", src: g5, alt: "Crochet Spider-Man", span: "normal" },
  { id: "g6", src: g6, alt: "Tote bag with crochet charms", span: "tall" },
];
