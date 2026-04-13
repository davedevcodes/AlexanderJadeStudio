"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Mini Session",
    price: "₦70,000",
    duration: "1 Hour",
    description: "Perfect for portraits, couple shots, or personal branding content.",
    features: [
      "1-hour photo session",
      "1 location",
      "40 edited digital images",
      "Online gallery delivery",
      "2-week turnaround",
      "Print release included",
    ],
    cta: "Book Now",
    featured: false,
  },
  {
    name: "Standard Shoot",
    price: "₦120,000",
    duration: "3–4 Hours",
    description: "Our most popular package — ideal for engagement shoots, families & events.",
    features: [
      "3–4 hour session",
      "Up to 3 locations",
      "120 edited digital images",
      "Online gallery & USB delivery",
      "1-week turnaround",
      "Print release included",
      "Styled shoot consultation",
      "1 outfit change",
    ],
    cta: "Book Now",
    featured: true,
  },
  {
    name: "Full Event Coverage",
    price: "₦350,000",
    duration: "Full Day",
    description: "Complete wedding or event coverage with a second shooter included.",
    features: [
      "Full-day coverage (8–10 hrs)",
      "Second photographer",
      "300+ edited images",
      "Premium album design",
      "5-day turnaround",
      "Engagement session bonus",
      "Print release included",
      "Highlight reel video",
    ],
    cta: "Book Now",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 0",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            Investment
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            Packages &amp; Pricing
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "480px",
              margin: "0 auto",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Every session is tailored to your story. Custom quotes available on request.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              style={{
                position: "relative",
                borderRadius: "24px",
                padding: pkg.featured ? "40px 32px" : "36px 28px",
                background: pkg.featured
                  ? "var(--color-accent)"
                  : "var(--color-surface)",
                border: pkg.featured
                  ? "none"
                  : "1px solid var(--color-border)",
                boxShadow: pkg.featured
                  ? "0 30px 80px rgba(201,169,110,0.3)"
                  : "0 4px 30px rgba(0,0,0,0.2)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--color-bg)",
                    color: "var(--color-accent)",
                    padding: "6px 18px",
                    borderRadius: "100px",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Star size={10} fill="var(--color-accent)" />
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  color: pkg.featured ? "rgba(10,10,9,0.6)" : "var(--color-text-muted)",
                  marginBottom: "12px",
                }}
              >
                {pkg.name}
              </p>

              {/* Price */}
              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 400,
                    color: pkg.featured ? "var(--color-bg)" : "var(--color-text)",
                    lineHeight: 1,
                  }}
                >
                  {pkg.price}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: pkg.featured ? "rgba(10,10,9,0.5)" : "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                  marginBottom: "16px",
                }}
              >
                {pkg.duration}
              </p>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: pkg.featured ? "rgba(10,10,9,0.7)" : "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: pkg.featured
                    ? "1px solid rgba(10,10,9,0.15)"
                    : "1px solid var(--color-border)",
                }}
              >
                {pkg.description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  marginBottom: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.85rem",
                      color: pkg.featured ? "rgba(10,10,9,0.75)" : "var(--color-text-muted)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <Check
                      size={14}
                      color={pkg.featured ? "rgba(10,10,9,0.6)" : "var(--color-accent)"}
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 24px",
                  borderRadius: "100px",
                  background: pkg.featured ? "var(--color-bg)" : "transparent",
                  color: pkg.featured ? "var(--color-accent)" : "var(--color-text)",
                  border: pkg.featured ? "none" : "1px solid var(--color-border)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "all 0.2s ease",
                }}
              >
                {pkg.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Custom quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            fontSize: "0.85rem",
            fontFamily: "var(--font-body)",
            marginTop: "40px",
          }}
        >
          Need something custom?{" "}
          <a
            href="#contact"
            style={{
              color: "var(--color-accent)",
              textDecoration: "underline",
              textDecorationColor: "rgba(201,169,110,0.4)",
            }}
          >
            Let&apos;s talk
          </a>
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
