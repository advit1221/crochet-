export type Review = { id: string; name: string; city: string; text: string; rating: number };

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ananya S.",
    city: "Mumbai",
    rating: 5,
    text: "The bouquet looked even cuter in person. My friend almost cried — she said it felt like a hug in a box.",
  },
  {
    id: "r2",
    name: "Rohan M.",
    city: "Delhi",
    rating: 5,
    text: "Got a custom Spider-Man for my brother's birthday. The detailing is unreal for something so tiny.",
  },
  {
    id: "r3",
    name: "Ishita K.",
    city: "Bengaluru",
    rating: 5,
    text: "Bought three bag charms and already planning to gift the rest. Packaging is adorable too.",
  },
  {
    id: "r4",
    name: "Priya R.",
    city: "Pune",
    rating: 5,
    text: "Warm Knits made a custom keychain set for my bridesmaids. Everyone asked where I got them!",
  },
];
