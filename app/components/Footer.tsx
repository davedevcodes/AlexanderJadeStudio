"use client";

import { motion } from "framer-motion";
import { Camera, Instagram, Facebook, Twitter, Youtube, Heart, ArrowUp } from "lucide-react";

const footerLinks = {
  Work: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Weddings", href: "#portfolio" },
    { label: "Portraits", href: "#portfolio" },
    { label: "Events", href: "#portfolio" },
    { label: "Fashion", href: "#portfolio" },
  ],
  Studio: [
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Session", href: "#contact" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "80px 0 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <Camera size={22} color="var(--color-accent)" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  letterSpacing: "0.05em",
                }}
              >
                Lumière
              </span>
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.88rem",
                fontFamily: "var(--font-body)",
                lineHeight: 1.8,
                maxWidth: "320px",
                marginBottom: "28px",
              }}
            >
              Award-winning photography studio based in Lagos, Nigeria.
              Capturing weddings, portraits, events, and fashion with a
              cinematic, emotion-first approach.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-text-muted)",
                    transition: "color 0.2s ease",
                  }}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                style={{
                  color: "var(--color-text)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  marginBottom: "20px",
                }}
              >
                {title}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        fontSize: "0.87rem",
                        fontFamily: "var(--font-body)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-body)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            © {new Date().getFullYear()} Lumière Studio. Made with{" "}
            <Heart size={12} color="var(--color-accent)" fill="var(--color-accent)" />{" "}
            in Lagos, Nigeria.
          </p>

          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--color-text-muted)",
              textDecoration: "none",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              border: "1px solid var(--color-border)",
              borderRadius: "100px",
              padding: "8px 16px",
            }}
          >
            Back to top
            <ArrowUp size={12} />
          </motion.a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
