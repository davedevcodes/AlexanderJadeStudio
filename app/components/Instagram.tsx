"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram as InstagramIcon, Heart, ExternalLink } from "lucide-react";

const igPosts = [
  {
    id: 1,
    src: "/images/IMG_9396.JPG",
    likes: "2.4k",
  },
  {
    id: 2,
    src: "/images/IMG_9401.JPG",
    likes: "1.8k",
  },
  {
    id: 3,
    src: "/images/IMG_9411.JPG",
    likes: "3.1k",
  },
  {
    id: 4,
    src: "/images/IMG_9412.JPG",
    likes: "2.7k",
  },
  {
    id: 5,
    src: "/images/IMG_9419.JPG",
    likes: "4.2k",
  },
  {
    id: 6,
    src: "/images/IMG_9424.JPG",
    likes: "1.9k",
  },
];

export default function Instagram() {
  return (
    <section
      id="instagram"
      style={{
        padding: "100px 0",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <InstagramIcon size={18} color="var(--color-accent)" />
            <p
              style={{
                color: "var(--color-accent)",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              @AlexanderJade.studio.ng
            </p>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1,
            }}
          >
            Follow the Journey
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "8px",
            marginBottom: "36px",
          }}
          className="ig-grid"
        >
          {igPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/alexanderjade.studio.ng"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "1/1",
                display: "block",
                background: "var(--color-surface-2)",
              }}
              whileHover="hover"
            >
              <Image
                src={post.src}
                alt={`Instagram post ${post.id}`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                style={{ objectFit: "cover" }}
              />
              {/* Hover overlay */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,10,9,0.65)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <Heart size={20} color="white" fill="white" />
                <p
                  style={{
                    color: "white",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                  }}
                >
                  {post.likes}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <motion.a
            href="https://instagram.com/alexander.studio.ng"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--color-border)",
              borderRadius: "100px",
              padding: "14px 32px",
              color: "var(--color-text)",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              transition: "all 0.2s ease",
            }}
          >
            <InstagramIcon size={15} />
            View on Instagram
            <ExternalLink size={12} />
          </motion.a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ig-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .ig-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}