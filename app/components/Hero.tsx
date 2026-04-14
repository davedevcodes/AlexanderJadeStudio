"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/IMG_9449.JPG"
        alt="Alexander Jade Studio - Premium Photography"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,10,9,0.3) 0%, rgba(10,10,9,0.55) 50%, rgba(10,10,9,0.9) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
        }}
      >
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            color: "var(--color-accent)",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Port Harcourt · Nigeria · Est. 2021
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontStyle: "italic",
            fontWeight: 500,
            lineHeight: 0.95,
            color: "#f5f0eb",
            letterSpacing: "0.02em",
            marginBottom: "28px",
          }}
        >
          Alexander Jade
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 500 }}>Studio</em>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            color: "rgba(245,240,235,0.7)",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "0.04em",
            marginBottom: "48px",
          }}
        >
          Capturing moments that matter
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "var(--color-accent)",
              color: "#0a0a09",
              padding: "16px 40px",
              borderRadius: "100px",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Book a Session
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              color: "#f5f0eb",
              padding: "16px 40px",
              borderRadius: "100px",
              fontSize: "0.85rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              border: "1px solid rgba(245,240,235,0.3)",
            }}
          >
            View Work
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            color: "rgba(245,240,235,0.4)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} color="rgba(245,240,235,0.4)" />
        </motion.div>
      </motion.div>

      {/* Decorative bottom line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--color-accent), transparent)",
          zIndex: 2,
          opacity: 0.4,
        }}
      />
    </section>
  );
}
