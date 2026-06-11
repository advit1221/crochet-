import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-rose">Good to know</p>
        <h2 className="mt-2 text-4xl md:text-5xl text-balance">Frequently asked, gently answered</h2>
      </div>
      <ul className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q} className="rounded-3xl border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg text-ink">{f.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-rose transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-ink/70 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
