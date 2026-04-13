"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chidinma & Emeka Okafor",
    role: "Wedding Clients",
    review:
      "Alexander captured our wedding in a way that still gives us chills every time we look back at the photos. He has an incredible eye for emotion and light. Every image tells our story so beautifully. Worth every naira and more.",
    image: "C",
    location: "Port Harcourt, Rivers",
  },
  {
    id: 2,
    name: "Temi Adeyemi",
    role: "Brand Shoot Client",
    review:
      "I needed headshots for my business and AlexanderStudio completely exceeded my expectations. Alexander made me feel so comfortable in front of the camera. The final images were polished, professional, and absolutely stunning.",
    image: "T",
    location: "Ada George",
  },
  {
    id: 3,
    name: "Bola & Kemi Williams",
    role: "Engagement Session",
    review:
      "We couldn't have asked for a better photographer for our engagement shoot. The golden hour shots were breathtaking. He directed us naturally and the chemistry He captured between us was real and unscripted.",
    image: "B",
    location: "Ikoyi, Lagos",
  },
  {
    id: 4,
    name: "Funke Adeola",
    role: "Fashion Editorial",
    review:
      "Working with Alexander on our editorial was a dream. He understood the vision immediately and elevated it with her unique perspective. Every frame was intentional, dramatic, and magazine-ready.",
    image: "F",
    location: "Oniru, Lagos",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 0",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large decorative quote */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <Quote size={300} color="var(--color-accent)" />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
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
            Kind Words
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1,
            }}
          >
            Client Stories
          </h2>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: "relative", minHeight: "320px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ textAlign: "center" }}
            >
              {/* Quote mark */}
              <Quote
                size={28}
                color="var(--color-accent)"
                style={{ margin: "0 auto 28px", display: "block" }}
              />

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--color-text)",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                  maxWidth: "720px",
                  margin: "0 auto 40px",
                }}
              >
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    color: "var(--color-bg)",
                    fontWeight: 400,
                    flexShrink: 0,
                  }}
                >
                  {t.image}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      marginBottom: "2px",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          <button
            onClick={prev}
            style={{
              background: "none",
              border: "1px solid var(--color-border)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              transition: "all 0.2s ease",
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "100px",
                  background:
                    i === current ? "var(--color-accent)" : "var(--color-border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              background: "none",
              border: "1px solid var(--color-border)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              transition: "all 0.2s ease",
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
