import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { portfolioItems } from "@/lib/data";
import { X } from "lucide-react";

const categories = ["All", "Fiction", "Non-Fiction", "Book Covers", "3D Mockups", "Book Visuals"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<typeof portfolioItems[0] | null>(null);

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Our Work" title="Portfolio" description="Browse our collection of book cover designs, mockups, and visual projects." />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-semibold rounded-sm tracking-wide transition-all ${
                  active === cat
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(item)}
                  className="group relative overflow-hidden rounded-sm bg-card border border-border cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={800}
                      height={1024}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-primary text-xs font-semibold tracking-wider uppercase">{item.genre}</span>
                      <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.client}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full"
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full rounded-sm" />
              <div className="mt-4">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">{lightbox.category} · {lightbox.genre}</span>
                <h3 className="font-display text-2xl font-bold mt-1">{lightbox.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">Client: {lightbox.client}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
