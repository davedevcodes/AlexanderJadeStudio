"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, MapPin, Camera } from "lucide-react";

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "210+", label: "Happy Clients" },
  { icon: Camera, value: "350+", label: "Sessions Completed" },
  { icon: MapPin, value: "Port Harcourt", label: "Based In" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative bg text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-60px",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "20vw",
          fontWeight: 300,
          color: "var(--color-border)",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        About
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/images/IMG_9447-01.jpeg"
                alt="Photographer at work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {/* Accent border overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "-24px",
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                borderRadius: "16px",
                padding: "20px 24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                5+
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                }}
              >
                Years of
                <br />
                Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
              The Photographer
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                lineHeight: 1.1,
                marginBottom: "28px",
              }}
            >
              Light is my
              <br />
              <em style={{ color: "var(--color-accent)" }}>medium</em>
            </h2>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--color-accent)",
                marginBottom: "28px",
              }}
            />

            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "20px",
                fontFamily: "var(--font-body)",
              }}
            >
              I&apos;m Alexander Tare Yinzuo, a Port Harcourt-based visual storyteller with over 5
              years of experience capturing life&apos;s most meaningful moments.
              From intimate weddings in Ikoyi to high-fashion editorials in
              Port Harcourt, I bring a cinematic, emotion-first approach to
              every frame.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "48px",
                fontFamily: "var(--font-body)",
              }}
            >
              I believe great photography
              doesn&apos;t just document — it reveals the soul of a moment.
            </p>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <stat.icon size={16} color="var(--color-accent)" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        color: "var(--color-text)",
                        lineHeight: 1,
                        marginBottom: "4px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
