import { Heart, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4 fill-current" />
            </span>
            <span className="font-display text-xl text-ink">Crochet Business</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink/65">
            A tiny crochet studio in Delhi, making handmade gifts and custom creations
            stitched with a lot of love.
          </p>
        </div>
        <div>
          <p className="font-display text-base text-ink">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li><a href="#shop" className="hover:text-rose">Shop</a></li>
            <li><a href="/custom" className="hover:text-rose">Custom orders</a></li>
            <li><a href="#gallery" className="hover:text-rose">Gallery</a></li>
            <li><a href="#faq" className="hover:text-rose">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-base text-ink">Say hi</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @Crochetofficial</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@Crochet.in</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Delhi, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-ink/55 md:flex-row">
          <p>© {new Date().getFullYear()} Crochet. Made with love in Delhi.</p>
          <p>Stitched one tiny piece at a time.</p>
        </div>
      </div>
    </footer>
  );
}
