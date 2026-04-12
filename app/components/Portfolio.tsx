"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Weddings", "Portraits", "Events", "Fashion"];

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    category: "Weddings",
    title: "Golden Hour Vows",
    aspect: "portrait",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    category: "Portraits",
    title: "Natural Light",
    aspect: "square",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Events",
    title: "The Gathering",
    aspect: "landscape",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    category: "Fashion",
    title: "Editorial Dusk",
    aspect: "portrait",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    category: "Weddings",
    title: "First Dance",
    aspect: "landscape",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    category: "Portraits",
    title: "Serene Gaze",
    aspect: "square",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    category: "Events",
    title: "Celebration",
    aspect: "landscape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Fashion",
    title: "Avant-Garde",
    aspect: "portrait",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    category: "Weddings",
    title: "Eternal Bloom",
    aspect: "square",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof portfolioImages)[0] | null>(
    null
  );

  const filtered =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="portfolio"
      style={{
        padding: "120px 0",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              marginBottom: "16px",
            }}
          >
            Selected Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1,
              marginBottom: "24px",
            }}
          >
            Portfolio
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--color-accent)",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 22px",
                borderRadius: "100px",
                border:
                  activeCategory === cat
                    ? "1px solid var(--color-accent)"
                    : "1px solid var(--color-border)",
                background:
                  activeCategory === cat ? "var(--color-accent)" : "transparent",
                color:
                  activeCategory === cat ? "var(--color-bg)" : "var(--color-text-muted)",
                fontSize: "0.78rem",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontFamily: "var(--font-body)",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightbox(img)}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio:
                    img.aspect === "portrait"
                      ? "3/4"
                      : img.aspect === "landscape"
                      ? "4/3"
                      : "1/1",
                  background: "var(--color-surface)",
                }}
                whileHover="hover"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                {/* Hover Overlay */}
                <motion.div
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,10,9,0.85) 0%, rgba(10,10,9,0.2) 60%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px",
                  }}
                >
                  <motion.div
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      style={{
                        color: "var(--color-accent)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {img.category}
                    </p>
                    <p
                      style={{
                        color: "#f5f0eb",
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 300,
                      }}
                    >
                      {img.title}
                    </p>
                  </motion.div>
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                    }}
                  >
                    <ZoomIn size={20} color="#f5f0eb" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              background: "rgba(10,10,9,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "900px",
                maxHeight: "90vh",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={lightbox.src.replace("w=800", "w=1200")}
                alt={lightbox.title}
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 24px",
                  background:
                    "linear-gradient(to top, rgba(10,10,9,0.9), transparent)",
                }}
              >
                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    marginBottom: "4px",
                  }}
                >
                  {lightbox.category}
                </p>
                <p
                  style={{
                    color: "#f5f0eb",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                  }}
                >
                  {lightbox.title}
                </p>
              </div>
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "fixed",
                top: "24px",
                right: "24px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#f5f0eb",
              }}
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
