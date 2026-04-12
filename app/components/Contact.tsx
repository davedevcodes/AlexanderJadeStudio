"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

const shootTypes = [
  "Wedding",
  "Engagement",
  "Portrait",
  "Event",
  "Fashion / Editorial",
  "Brand / Corporate",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    shootType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.shootType) e.shootType = "Please select a shoot type";
    if (!form.message.trim() || form.message.length < 20)
      e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    background: "var(--color-surface-2)",
    border: `1px solid ${hasError ? "#e05d5d" : "var(--color-border)"}`,
    borderRadius: "12px",
    padding: "14px 16px",
    color: "var(--color-text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box" as const,
  });

  const labelStyle = {
    display: "block",
    color: "var(--color-text-muted)",
    fontSize: "0.72rem",
    fontWeight: 400,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
    fontFamily: "var(--font-body)",
  };

  const errorStyle = {
    color: "#e05d5d",
    fontSize: "0.72rem",
    marginTop: "6px",
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="contact"
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
            Get In Touch
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
            Book Your Session
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/2348012345678?text=Hi%20Adaeze!%20I'd%20love%20to%20book%20a%20session%20with%20Lumière%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "#25D366",
                color: "#ffffff",
                padding: "18px 24px",
                borderRadius: "16px",
                textDecoration: "none",
                marginBottom: "32px",
                boxShadow: "0 10px 40px rgba(37,211,102,0.25)",
              }}
            >
              <MessageCircle size={26} fill="white" strokeWidth={0} />
              <div>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "1rem",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.2,
                    marginBottom: "2px",
                  }}
                >
                  Chat on WhatsApp
                </p>
                <p style={{ fontSize: "0.78rem", opacity: 0.85, fontFamily: "var(--font-body)" }}>
                  Fastest way to reach me
                </p>
              </div>
            </motion.a>

            {/* Contact Details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "36px",
              }}
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@lumierestudio.ng",
                  href: "mailto:hello@lumierestudio.ng",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+234 801 234 5678",
                  href: "tel:+2348012345678",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Lagos, Nigeria — Available for travel",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={15} color="var(--color-accent)" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        fontFamily: "var(--font-body)",
                        marginBottom: "3px",
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "var(--color-text)",
                          textDecoration: "none",
                          fontSize: "0.88rem",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "var(--color-text)",
                          fontSize: "0.88rem",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability note */}
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  marginBottom: "8px",
                }}
              >
                Availability
              </p>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                }}
              >
                Currently booking for 2025 &amp; 2026. Peak wedding dates fill
                up quickly — reach out early to secure your preferred date.
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: "var(--color-surface)",
              borderRadius: "24px",
              padding: "40px 36px",
              border: "1px solid var(--color-border)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(201,169,110,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <Send size={28} color="var(--color-accent)" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--color-text)",
                    marginBottom: "12px",
                  }}
                >
                  Message Received!
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  Thank you, {form.name.split(" ")[0]}! I&apos;ll get back to you within
                  24 hours. Or chat on WhatsApp for a faster response.
                </p>
              </motion.div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      placeholder="Amara Osei"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setErrors({ ...errors, name: "" });
                      }}
                      style={inputStyle(!!errors.name)}
                    />
                    {errors.name && <p style={errorStyle}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      placeholder="amara@email.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        setErrors({ ...errors, email: "" });
                      }}
                      style={inputStyle(!!errors.email)}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Preferred Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      style={inputStyle(false)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Shoot Type</label>
                    <select
                      value={form.shootType}
                      onChange={(e) => {
                        setForm({ ...form, shootType: e.target.value });
                        setErrors({ ...errors, shootType: "" });
                      }}
                      style={{ ...inputStyle(!!errors.shootType), appearance: "none" as const }}
                    >
                      <option value="">Select type...</option>
                      {shootTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.shootType && <p style={errorStyle}>{errors.shootType}</p>}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell Me About Your Vision</label>
                  <textarea
                    placeholder="Share any ideas, locations, or details about your shoot..."
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      setErrors({ ...errors, message: "" });
                    }}
                    rows={5}
                    style={{
                      ...inputStyle(!!errors.message),
                      resize: "vertical" as const,
                      minHeight: "120px",
                    }}
                  />
                  {errors.message && <p style={errorStyle}>{errors.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  style={{
                    width: "100%",
                    background: "var(--color-accent)",
                    color: "var(--color-bg)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "16px 24px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <Send size={15} />
                  Send Enquiry
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
