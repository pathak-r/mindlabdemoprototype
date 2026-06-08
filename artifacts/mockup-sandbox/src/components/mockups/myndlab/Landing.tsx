import React from "react";
import "./_group.css";
import { TopNav } from "./_shared/TopNav";

const StarMotif = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="#1A6B6B" style={{ opacity: 0.06 }}>
    <polygon points="50,5 57.3,32.4 81.8,18.2 67.6,42.7 95,50 67.6,57.3 81.8,81.8 57.3,67.6 50,95 42.7,67.6 18.2,81.8 32.4,57.3 5,50 32.4,42.7 18.2,18.2 42.7,32.4" />
  </svg>
);

export function Landing() {
  return (
    <div style={{ fontFamily: "var(--font-main)", backgroundColor: "var(--mn-bg)", minHeight: "100vh", color: "var(--mn-text)", overflowX: "hidden" }}>
      <style dangerouslySetInnerHTML={{__html: `
        .gradient-text {
          background: linear-gradient(135deg, #1A6B6B, #C8963E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-bg {
          background-image: radial-gradient(#E8DDD0 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .tpl-link:hover { color: #155858 !important; }
      `}} />

      <TopNav />

      {/* HERO */}
      <section className="hero-bg" style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "80px 24px", textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <div style={{
            background: "var(--mn-teal-light)", color: "var(--mn-teal)",
            padding: "6px 16px", borderRadius: "999px", fontSize: "12px",
            fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase",
            marginBottom: "24px", display: "inline-block"
          }}>
            The GCC's AI App Builder
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 8vw, 72px)", fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-1.5px", marginBottom: "24px", color: "var(--mn-text)"
          }}>
            <span style={{ color: "var(--mn-teal)" }}>Never Get Stuck.</span><br />
            Get your app <span className="gradient-text">out there.</span>
          </h1>

          <p style={{
            fontSize: "20px", color: "var(--mn-text-muted)", lineHeight: 1.5,
            marginBottom: "48px", maxWidth: "600px"
          }}>
            Build in Arabic or English. Publish in minutes. No code, no agency, no App Store waiting room.
          </p>

          <div style={{
            width: "100%", maxWidth: "640px", background: "var(--mn-surface)",
            border: "1px solid var(--mn-border-strong)", borderRadius: "16px",
            padding: "8px", display: "flex", alignItems: "center",
            boxShadow: "var(--mn-shadow-md)", marginBottom: "24px"
          }}>
            <input
              type="text"
              placeholder="Describe your app..."
              style={{
                flex: 1, border: "none", outline: "none", padding: "16px",
                fontSize: "18px", color: "var(--mn-text)", background: "transparent",
                fontFamily: "var(--font-main)"
              }}
            />
            <button style={{
              background: "var(--mn-gold)", color: "white", border: "none",
              borderRadius: "12px", padding: "16px 24px", fontSize: "16px",
              fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 12px rgba(200,150,62,0.35)", whiteSpace: "nowrap"
            }}>
              Build it →
            </button>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "64px" }}>
            {["Talk it through instead", "Start from a template", "Surprise me"].map(item => (
              <button key={item} style={{
                background: "var(--mn-surface)", border: "1px solid var(--mn-border)",
                padding: "8px 16px", borderRadius: "8px", fontSize: "14px",
                color: "var(--mn-text-muted)", fontWeight: 500, cursor: "pointer"
              }}>
                {item}
              </button>
            ))}
          </div>

          <div style={{
            fontSize: "13px", color: "var(--mn-text-dim)", display: "flex",
            alignItems: "center", gap: "12px", flexWrap: "wrap", justifyContent: "center"
          }}>
            <span>ISO 27001 + 9001 Certified</span><span>·</span>
            <span>GCC Sovereign Infrastructure</span><span>·</span>
            <span>Your code, your servers</span><span>·</span>
            <span>2,400+ apps built this month</span>
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section style={{ padding: "100px 24px", background: "var(--mn-bg-alt)", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ color: "var(--mn-teal)", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
              Start from something real
            </div>
            <h2 style={{ fontSize: "40px", fontWeight: 800, letterSpacing: "-1px", color: "var(--mn-text)" }}>
              Pick a template. We'll handle the rest.
            </h2>
          </div>

          <div className="hide-scrollbar" style={{ display: "flex", gap: "24px", overflowX: "auto", paddingBottom: "32px", marginRight: "-24px", paddingRight: "24px" }}>
            {[
              { color: "#E8F3F3", title: "Booking App", ar: "احجز موعد" },
              { color: "#FDF3E3", title: "Delivery App", ar: "طلب طعام" },
              { color: "#FEF3C7", title: "E-Commerce", ar: "تسوق الآن" },
              { color: "#D1FAE5", title: "Service App", ar: "اطلب خدمة" },
              { color: "#F0EBF8", title: "Healthcare", ar: "استشارة طبية" },
              { color: "#F3E8FF", title: "Education", ar: "دورات تدريبية" },
            ].map((tpl, i) => (
              <div key={i} style={{
                minWidth: "300px", background: "var(--mn-surface)", border: "1px solid var(--mn-border)",
                borderRadius: "24px", padding: "24px", boxShadow: "var(--mn-shadow-md)",
                display: "flex", flexDirection: "column", gap: "24px"
              }}>
                <div style={{
                  height: "300px", background: tpl.color, borderRadius: "16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden"
                }}>
                  <div style={{
                    width: "160px", height: "320px", background: "#fff", borderRadius: "24px",
                    boxShadow: "0 10px 30px rgba(28,43,43,0.1)", padding: "16px",
                    display: "flex", flexDirection: "column", gap: "12px", transform: "translateY(40px)"
                  }}>
                    <div style={{ height: "40px", background: "rgba(28,43,43,0.05)", borderRadius: "8px" }} />
                    <div style={{ height: "100px", background: "rgba(28,43,43,0.05)", borderRadius: "8px" }} />
                    <div style={{ fontSize: "20px", fontWeight: 800, textAlign: "right", color: "var(--mn-text)" }}>{tpl.ar}</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: "18px", color: "var(--mn-text)" }}>{tpl.title}</div>
                  <div className="tpl-link" style={{ color: "var(--mn-teal)", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>Use template →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "100px 24px", background: "var(--mn-bg-alt)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
          {[
            { title: "Arabic and English, natively", desc: "Full RTL support, bilingual UI, and localised checkout — built in from day one.", icon: "🌍" },
            { title: "Build in minutes, not months", desc: "From prompt to working app in under 5 minutes. Full stack, not a prototype.", icon: "⚡" },
            { title: "Easy distribution, no App Store wait", desc: "We assess your app and guide you to the fastest path to your first users.", icon: "🚀" },
          ].map((benefit, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{
                width: "48px", height: "48px", background: "var(--mn-teal-light)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px"
              }}>
                <span style={{ fontFamily: "sans-serif" }}>{benefit.icon}</span>
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.5px", color: "var(--mn-text)" }}>{benefit.title}</h3>
              <p style={{ color: "var(--mn-text-muted)", fontSize: "16px", lineHeight: 1.6 }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Star divider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", background: "var(--mn-bg-alt)", padding: "0 24px 40px" }}>
        <div style={{ flex: 1, height: "1px", background: "var(--mn-border)", maxWidth: "400px" }} />
        <StarMotif size={64} />
        <div style={{ flex: 1, height: "1px", background: "var(--mn-border)", maxWidth: "400px" }} />
      </div>

      {/* DISTRIBUTION */}
      <section style={{ padding: "100px 24px", background: "var(--mn-teal-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: 800, letterSpacing: "-1px", marginBottom: "32px", lineHeight: 1.2, color: "var(--mn-text)" }}>
              No App Store.<br/>No waiting.<br/>Just a link.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Instant PWA installation via browser",
                "Share via WhatsApp, SMS, or QR code",
                "Updates roll out instantly to all users"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "18px", color: "var(--mn-text)" }}>
                  <div style={{ width: "24px", height: "24px", background: "var(--mn-teal)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: "bold", flexShrink: 0 }}>✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "320px", background: "#fff", borderRadius: "32px",
              boxShadow: "var(--mn-shadow-lg)", padding: "16px", border: "8px solid #1C2B2B"
            }}>
              <div style={{ background: "#E8DDD0", borderRadius: "16px", padding: "16px", marginBottom: "16px", display: "flex", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", background: "var(--mn-teal)", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--mn-text)" }}>Myndlab App</div>
                  <div style={{ color: "var(--mn-text-muted)", fontSize: "12px" }}>Add to Home Screen</div>
                </div>
              </div>
              <div style={{ height: "300px", background: "var(--mn-bg)", borderRadius: "16px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ padding: "100px 24px", background: "var(--mn-surface)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {[
            { title: "Bank-grade Security", desc: "End-to-end encryption and compliance.", icon: "⛨" },
            { title: "Local Data Residency", desc: "Data stays in the GCC, always.", icon: "◎" },
            { title: "Enterprise Ready", desc: "SLA guarantees and priority support.", icon: "⚿" }
          ].map((item, i) => (
            <div key={i} style={{ padding: "32px", background: "var(--mn-surface)", borderRadius: "16px", boxShadow: "var(--mn-shadow-md)", border: "1px solid var(--mn-border)" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px", color: "var(--mn-teal)", fontFamily: "sans-serif" }}>{item.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px", color: "var(--mn-text)" }}>{item.title}</h3>
              <p style={{ color: "var(--mn-text-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(135deg, #1A6B6B, #C8963E)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-1px", marginBottom: "32px" }}>
            Your idea deserves to be live.
          </h2>
          <button style={{
            background: "transparent", color: "white",
            border: "2px solid rgba(255,255,255,0.8)", borderRadius: "12px",
            padding: "16px 32px", fontSize: "18px", fontWeight: 700, cursor: "pointer"
          }}>
            Build for free — no credit card needed
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "48px 24px", borderTop: "1px solid var(--mn-border)", background: "var(--mn-surface)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "linear-gradient(135deg, #1A6B6B, #C8963E)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "12px" }}>M</span>
          </div>
          <span style={{ fontWeight: 700, color: "var(--mn-text)" }}>Myndlab</span>
        </div>
        <div style={{ color: "var(--mn-text-dim)", fontSize: "14px" }}>
          © {new Date().getFullYear()} Myndlab Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
