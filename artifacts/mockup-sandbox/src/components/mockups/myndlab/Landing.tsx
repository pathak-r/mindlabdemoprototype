import React from "react";
import "./_group.css";

export function Landing() {
  return (
    <div
      style={{
        fontFamily: "var(--font-main)",
        backgroundColor: "var(--mn-navy)",
        color: "var(--mn-surface)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* 1. TOP NAV */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: "64px",
          borderBottom: "1px solid var(--mn-border)",
          background: "rgba(10,15,30,0.8)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, var(--mn-cyan), var(--mn-purple))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px" }}>M</span>
          </div>
          <span style={{ color: "var(--mn-surface)", fontWeight: 700, fontSize: "17px", letterSpacing: "-0.3px" }}>
            Myndlab
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["Templates", "How it works", "Pricing"].map((item) => (
            <span
              key={item}
              style={{
                color: "var(--mn-text-muted)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--mn-surface)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--mn-text-muted)")}
            >
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid var(--mn-border)",
              color: "rgba(248,249,252,0.8)",
              padding: "7px 16px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
          <button
            style={{
              background: "var(--mn-cyan)",
              border: "none",
              color: "var(--mn-navy)",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 0 15px var(--mn-cyan-glow)",
            }}
          >
            Start building free
          </button>
        </div>
      </nav>

      {/* 2. HERO */}
      <section
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60vw",
            height: "40vw",
            background: "radial-gradient(circle, var(--mn-purple-glow) 0%, transparent 60%)",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.6,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <div
            style={{
              color: "var(--mn-cyan)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            THE GCC'S AI APP BUILDER
          </div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              margin: "0 0 24px 0",
            }}
          >
            Never Get Stuck.
            <br />
            Get your app{" "}
            <span
              style={{
                background: "linear-gradient(to right, var(--mn-cyan), var(--mn-purple))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              out there.
            </span>
          </h1>
          <p
            style={{
              color: "var(--mn-text-muted)",
              fontSize: "20px",
              lineHeight: 1.5,
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px auto",
            }}
          >
            Build in Arabic or English. Publish in minutes. No code, no agency, no App Store waiting room.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              borderRadius: "16px",
              padding: "8px",
              boxShadow: "0 0 30px var(--mn-cyan-glow)",
              marginBottom: "24px",
              maxWidth: "700px",
              margin: "0 auto 24px auto",
            }}
          >
            <input
              type="text"
              placeholder="Describe your app... e.g. A booking app for a Dubai personal trainer with Arabic checkout and WhatsApp confirmations"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                color: "var(--mn-surface)",
                fontSize: "16px",
                padding: "16px",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "var(--mn-cyan)",
                color: "var(--mn-navy)",
                border: "none",
                padding: "16px 24px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Build it →
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "64px" }}>
            {["Talk it through instead", "Start from a template", "Surprise me"].map((option) => (
              <div
                key={option}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: "var(--mn-card)",
                  color: "var(--mn-text-muted)",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {option}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              color: "var(--mn-text-dim)",
              fontSize: "13px",
              flexWrap: "wrap",
            }}
          >
            <span>ISO 27001 + 9001 Certified</span>
            <span>·</span>
            <span>GCC Sovereign Infrastructure</span>
            <span>·</span>
            <span>Your code, your servers</span>
            <span>·</span>
            <span>2,400+ apps built this month</span>
          </div>
        </div>
      </section>

      {/* 3. TEMPLATE SECTION */}
      <section style={{ padding: "120px 0", borderTop: "1px solid var(--mn-border)" }}>
        <div style={{ padding: "0 48px", marginBottom: "48px" }}>
          <div
            style={{
              color: "var(--mn-cyan)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            START FROM SOMETHING REAL
          </div>
          <h2 style={{ fontSize: "40px", fontWeight: 700, margin: 0, letterSpacing: "-1px" }}>
            Pick a template. We'll handle the rest.
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            padding: "0 48px 48px 48px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {[
            { title: "Food Delivery", arabic: "طلب طعام", color: "#FF4D4D" },
            { title: "Booking & Appointments", arabic: "حجز موعد", color: "#00D4FF" },
            { title: "Property Listings", arabic: "عقارات", color: "#7C3AED" },
            { title: "Service Marketplace", arabic: "خدمة", color: "#4ADE80" },
            { title: "Community Directory", arabic: "مجتمع", color: "#FBBF24" },
            { title: "Events Platform", arabic: "فعاليات", color: "#F472B6" },
          ].map((template, idx) => (
            <div
              key={idx}
              style={{
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  height: "400px",
                  background: "var(--mn-navy-mid)",
                  borderRadius: "24px",
                  padding: "16px",
                  border: "1px solid var(--mn-border)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Phone mockup internal UI */}
                <div
                  style={{
                    background: "var(--mn-navy)",
                    borderRadius: "12px",
                    flex: 1,
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ height: "40px", background: template.color, borderRadius: "8px", opacity: 0.8 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "40%", height: "12px", background: "var(--mn-card)", borderRadius: "4px" }} />
                    <div
                      style={{
                        color: "var(--mn-surface)",
                        fontSize: "14px",
                        fontWeight: 600,
                        textAlign: "right",
                      }}
                    >
                      {template.arabic}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <div style={{ flex: 1, height: "80px", background: "var(--mn-card)", borderRadius: "8px" }} />
                    <div style={{ flex: 1, height: "80px", background: "var(--mn-card)", borderRadius: "8px" }} />
                  </div>
                  <div style={{ width: "100%", height: "60px", background: "var(--mn-card)", borderRadius: "8px", marginTop: "auto" }} />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px 0" }}>{template.title}</h3>
                <a
                  href="#"
                  style={{
                    color: "var(--mn-cyan)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Use template →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section style={{ padding: "120px 48px", background: "var(--mn-navy-mid)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", color: "var(--mn-surface)" }}>
              Build in minutes, not months
            </h3>
            <p style={{ color: "var(--mn-text-muted)", lineHeight: 1.6, fontSize: "16px", margin: 0 }}>
              From prompt to working app in under 5 minutes. No endless wireframing or sprint planning. Describe what you need and watch it come to life instantly.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", color: "var(--mn-surface)" }}>
              Arabic and English, natively
            </h3>
            <p style={{ color: "var(--mn-text-muted)", lineHeight: 1.6, fontSize: "16px", margin: 0 }}>
              RTL support, Arabic checkout, bilingual apps built in from the start. Not an afterthought, but a core feature of the platform.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", color: "var(--mn-surface)" }}>
              Publish without the App Store
            </h3>
            <p style={{ color: "var(--mn-text-muted)", lineHeight: 1.6, fontSize: "16px", margin: 0 }}>
              We assess your app and guide you to the fastest distribution path. Bypass the weeks-long review process and get your app to your users today.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DISTRIBUTION SECTION */}
      <section style={{ padding: "120px 48px", background: "var(--mn-navy)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "40px" }}>
              No App Store.
              <br />
              No waiting.
              <br />
              <span style={{ color: "var(--mn-cyan)" }}>Just a link.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Instant PWA installation directly from WhatsApp or SMS.",
                "Zero 30% App Store fees on your digital sales.",
                "Real-time updates pushed to users instantly.",
              ].map((point, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "rgba(0, 212, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--mn-cyan)",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ color: "var(--mn-text-muted)", fontSize: "18px", lineHeight: 1.4 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "300px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "320px",
                height: "600px",
                background: "var(--mn-navy-mid)",
                borderRadius: "32px",
                border: "8px solid #0A0F1E",
                boxShadow: "0 0 0 1px var(--mn-border), 0 30px 60px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div style={{ padding: "24px 16px", background: "#075E54", color: "#fff", fontWeight: 600 }}>
                WhatsApp
              </div>
              <div style={{ flex: 1, background: "#efeae2", padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  style={{
                    background: "#dcf8c6",
                    padding: "12px",
                    borderRadius: "8px 8px 0 8px",
                    alignSelf: "flex-end",
                    maxWidth: "80%",
                    color: "#303030",
                    fontSize: "14px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  Here is the app for your personal training sessions!
                </div>
                <div
                  style={{
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "8px",
                    alignSelf: "center",
                    width: "100%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderTop: "4px solid var(--mn-cyan)",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#111", marginBottom: "8px" }}>Add Myndlab App to Home Screen</div>
                  <div style={{ color: "#666", fontSize: "13px", marginBottom: "16px" }}>Install this web app for quick access.</div>
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "var(--mn-cyan)",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: 600,
                      color: "var(--mn-navy)",
                      cursor: "pointer",
                    }}
                  >
                    Install App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST SECTION */}
      <section style={{ padding: "100px 48px", background: "var(--mn-navy-light)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { title: "ISO 27001 + 9001 Certified", icon: "🛡️" },
            { title: "GCC Sovereign Data Infrastructure", icon: "📍" },
            { title: "Compliance built in from day one", icon: "🔒" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--mn-navy)",
                border: "1px solid var(--mn-border)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(124, 58, 237, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "var(--mn-purple)",
                }}
              >
                {/* Fallback to simple SVG since emojis shouldn't be used for text, actually the prompt said "Do not use emojis anywhere in UI text or labels". Let me replace these with simple pure CSS shapes or unicode. */}
                {idx === 0 && <span style={{ fontFamily: "sans-serif" }}>⛨</span>}
                {idx === 1 && <span style={{ fontFamily: "sans-serif" }}>◎</span>}
                {idx === 2 && <span style={{ fontFamily: "sans-serif" }}>⚿</span>}
              </div>
              <h4 style={{ fontSize: "18px", fontWeight: 600, margin: 0, color: "var(--mn-surface)" }}>
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section
        style={{
          padding: "120px 48px",
          background: "linear-gradient(135deg, var(--mn-cyan), var(--mn-purple))",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "56px", fontWeight: 800, color: "#fff", marginBottom: "40px", letterSpacing: "-1.5px" }}>
          Your idea deserves to be live.
        </h2>
        <button
          style={{
            background: "transparent",
            border: "2px solid #fff",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "var(--mn-purple)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Build for free — no credit card needed.
        </button>
      </section>

      {/* 8. FOOTER */}
      <footer
        style={{
          padding: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid var(--mn-border)",
          background: "var(--mn-navy)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, var(--mn-cyan), var(--mn-purple))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "10px" }}>M</span>
          </div>
          <span style={{ color: "var(--mn-text-dim)", fontWeight: 600, fontSize: "14px" }}>
            Myndlab
          </span>
        </div>
        <div style={{ color: "var(--mn-text-dim)", fontSize: "13px" }}>
          © {new Date().getFullYear()} Myndlab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
