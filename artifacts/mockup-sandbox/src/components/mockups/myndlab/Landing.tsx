import React from "react";
import "./_group.css";
import { TopNav, StarMark } from "./_shared/TopNav";
import {
  Languages,
  Zap,
  Send,
  ShieldCheck,
  Server,
  BadgeCheck,
  ArrowRight,
  Mic,
  LayoutTemplate,
  Sparkles,
  Check,
} from "lucide-react";

/* Pointed-arch (mihrab) frame — a faint structural motif behind the hero. */
const ArchMotif = () => (
  <svg
    viewBox="0 0 400 520"
    preserveAspectRatio="xMidYMax meet"
    style={{
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "560px",
      maxWidth: "92vw",
      height: "auto",
      pointerEvents: "none",
      opacity: 0.5,
    }}
    aria-hidden
  >
    <path
      d="M40 520 V200 C40 110 120 30 200 30 C280 30 360 110 360 200 V520"
      fill="none"
      stroke="var(--mn-teal)"
      strokeOpacity="0.16"
      strokeWidth="1.5"
    />
    <path
      d="M70 520 V205 C70 130 130 64 200 64 C270 64 330 130 330 205 V520"
      fill="none"
      stroke="var(--mn-brass)"
      strokeOpacity="0.18"
      strokeWidth="1.5"
    />
  </svg>
);

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "var(--mn-mono)",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "2.5px",
      textTransform: "uppercase",
      color: "var(--mn-teal)",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <span style={{ width: "22px", height: "1.5px", background: "var(--mn-brass)" }} />
    {children}
  </div>
);

export function Landing() {
  return (
    <div
      style={{
        fontFamily: "var(--mn-sans)",
        backgroundColor: "var(--mn-bg)",
        minHeight: "100vh",
        color: "var(--mn-text)",
        overflowX: "hidden",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .tpl-card { transition: transform .25s ease, box-shadow .25s ease; }
        .tpl-card:hover { transform: translateY(-4px); box-shadow: var(--mn-shadow-lg); }
        .prompt-bar:focus-within { box-shadow: var(--mn-teal-glow), var(--mn-shadow-md); border-color: var(--mn-teal) !important; }
        .ghost-chip:hover { border-color: var(--mn-border-strong) !important; color: var(--mn-text) !important; }
      `,
        }}
      />

      <TopNav />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 68px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px 24px 88px",
          textAlign: "center",
          backgroundImage: "var(--mn-girih)",
          backgroundSize: "132px 132px",
        }}
      >
        <ArchMotif />

        <div
          style={{
            position: "relative",
            maxWidth: "760px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div style={{ marginBottom: "26px" }}>
            <Kicker>The GCC&rsquo;s AI app builder</Kicker>
          </div>

          <h1
            style={{
              fontFamily: "var(--mn-display)",
              fontSize: "clamp(44px, 6.4vw, 68px)",
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-1.2px",
              margin: "0 0 22px",
              color: "var(--mn-text)",
            }}
          >
            Never get stuck.
            <br />
            Get your app{" "}
            <span style={{ position: "relative", whiteSpace: "nowrap", color: "var(--mn-teal)" }}>
              out there
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "2px",
                  height: "8px",
                  background: "var(--mn-gold-light)",
                  zIndex: -1,
                  borderRadius: "2px",
                }}
              />
            </span>
            .
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: "var(--mn-text-muted)",
              lineHeight: 1.55,
              margin: "0 0 40px",
              maxWidth: "560px",
            }}
          >
            Build in Arabic or English. Publish in minutes. No code, no agency,
            no App&nbsp;Store waiting room.
          </p>

          {/* Prompt bar — the product, front and centre */}
          <div
            className="prompt-bar"
            style={{
              width: "100%",
              maxWidth: "620px",
              background: "var(--mn-surface)",
              border: "1px solid var(--mn-border-strong)",
              borderRadius: "16px",
              padding: "8px 8px 8px 18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "var(--mn-shadow-md)",
              marginBottom: "18px",
              transition: "box-shadow .2s ease, border-color .2s ease",
            }}
          >
            <Sparkles size={18} color="var(--mn-teal)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Describe your app — e.g. a booking app for my clinic"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "14px 0",
                fontSize: "16px",
                color: "var(--mn-text)",
                background: "transparent",
                fontFamily: "var(--mn-sans)",
              }}
            />
            <button
              style={{
                background: "var(--mn-teal)",
                color: "white",
                border: "none",
                borderRadius: "11px",
                padding: "13px 22px",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: "var(--mn-sans)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
                boxShadow: "var(--mn-shadow-sm)",
              }}
            >
              Build it <ArrowRight size={16} />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "56px",
            }}
          >
            {[
              { icon: <Mic size={14} />, label: "Talk it through instead" },
              { icon: <LayoutTemplate size={14} />, label: "Start from a template" },
              { icon: <Sparkles size={14} />, label: "Surprise me" },
            ].map((item) => (
              <button
                key={item.label}
                className="ghost-chip"
                style={{
                  background: "transparent",
                  border: "1px solid var(--mn-border)",
                  padding: "8px 14px",
                  borderRadius: "9px",
                  fontSize: "13.5px",
                  color: "var(--mn-text-muted)",
                  fontWeight: 500,
                  fontFamily: "var(--mn-sans)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  transition: "all .15s ease",
                }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <div
            style={{
              fontFamily: "var(--mn-mono)",
              fontSize: "11.5px",
              letterSpacing: "0.3px",
              color: "var(--mn-text-dim)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "ISO 27001 + 9001",
              "GCC sovereign infra",
              "Your code, your servers",
              "2,400+ apps this month",
            ].map((t, i) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {i > 0 && <span style={{ color: "var(--mn-border-strong)" }}>◆</span>}
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEMPLATES ────────────────────────────────────────── */}
      <section style={{ padding: "104px 24px", background: "var(--mn-bg-alt)", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "44px" }}>
            <Kicker>Start from something real</Kicker>
            <h2
              style={{
                fontFamily: "var(--mn-display)",
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 600,
                letterSpacing: "-0.8px",
                color: "var(--mn-text)",
                margin: "18px 0 0",
              }}
            >
              Pick a template. We&rsquo;ll handle the rest.
            </h2>
          </div>

          <div
            className="hide-scrollbar"
            style={{
              display: "flex",
              gap: "22px",
              overflowX: "auto",
              paddingBottom: "12px",
              marginRight: "-24px",
              paddingRight: "24px",
            }}
          >
            {[
              { tint: "#E3F0EC", title: "Booking App", ar: "احجز موعد" },
              { tint: "#F4E8D2", title: "Delivery App", ar: "طلب طعام" },
              { tint: "#EDE7DA", title: "E-Commerce", ar: "تسوق الآن" },
              { tint: "#E1EFE9", title: "Service App", ar: "اطلب خدمة" },
              { tint: "#F0EAE0", title: "Healthcare", ar: "استشارة طبية" },
              { tint: "#E6EEEA", title: "Education", ar: "دورات تدريبية" },
            ].map((tpl, i) => (
              <div
                key={i}
                className="tpl-card"
                style={{
                  minWidth: "264px",
                  background: "var(--mn-surface)",
                  border: "1px solid var(--mn-border)",
                  borderRadius: "18px",
                  padding: "16px",
                  boxShadow: "var(--mn-shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "230px",
                    background: tpl.tint,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "146px",
                      background: "#fff",
                      borderRadius: "18px 18px 0 0",
                      boxShadow: "0 12px 30px rgba(22,48,44,0.12)",
                      padding: "14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ height: "34px", background: "var(--mn-surface-3)", borderRadius: "7px" }} />
                    <div style={{ height: "84px", background: "var(--mn-surface-2)", borderRadius: "7px" }} />
                    <div
                      style={{
                        fontFamily: "var(--mn-arabic)",
                        fontSize: "18px",
                        fontWeight: 600,
                        textAlign: "right",
                        color: "var(--mn-text)",
                        direction: "rtl",
                      }}
                    >
                      {tpl.ar}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px 4px" }}>
                  <div style={{ fontWeight: 600, fontSize: "16px", color: "var(--mn-text)" }}>{tpl.title}</div>
                  <div
                    style={{
                      fontFamily: "var(--mn-mono)",
                      color: "var(--mn-teal)",
                      fontWeight: 500,
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Use <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────── */}
      <section style={{ padding: "104px 24px", background: "var(--mn-bg)" }}>
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "56px",
          }}
        >
          {[
            {
              icon: <Languages size={22} color="var(--mn-teal)" />,
              title: "Arabic and English, natively",
              desc: "Full RTL support, bilingual UI, and localised checkout — built in from day one.",
            },
            {
              icon: <Zap size={22} color="var(--mn-teal)" />,
              title: "Build in minutes, not months",
              desc: "From prompt to working app in under 5 minutes. Full stack, not a prototype.",
            },
            {
              icon: <Send size={22} color="var(--mn-teal)" />,
              title: "Distribution without the App Store",
              desc: "We assess your app and guide you to the fastest path to your first users.",
            },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "var(--mn-teal-light)",
                  borderRadius: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(15,93,84,0.12)",
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--mn-display)",
                  fontSize: "23px",
                  fontWeight: 600,
                  letterSpacing: "-0.3px",
                  color: "var(--mn-text)",
                  margin: 0,
                }}
              >
                {b.title}
              </h3>
              <p style={{ color: "var(--mn-text-muted)", fontSize: "15.5px", lineHeight: 1.65, margin: 0 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Star divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "22px",
          background: "var(--mn-bg)",
          padding: "0 24px 48px",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "var(--mn-border)", maxWidth: "360px" }} />
        <StarMark size={28} />
        <div style={{ flex: 1, height: "1px", background: "var(--mn-border)", maxWidth: "360px" }} />
      </div>

      {/* ─── DISTRIBUTION ─────────────────────────────────────── */}
      <section style={{ padding: "104px 24px", background: "var(--mn-teal-light)" }}>
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 400px" }}>
            <Kicker>Go live in one tap</Kicker>
            <h2
              style={{
                fontFamily: "var(--mn-display)",
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 600,
                letterSpacing: "-0.8px",
                margin: "18px 0 28px",
                lineHeight: 1.15,
                color: "var(--mn-text)",
              }}
            >
              No App Store.
              <br />
              No waiting. Just a link.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Instant PWA installation via browser",
                "Share via WhatsApp, SMS, or QR code",
                "Updates roll out instantly to all users",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "13px", fontSize: "16.5px", color: "var(--mn-text)" }}>
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      background: "var(--mn-teal)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={15} color="#fff" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "300px",
                background: "#fff",
                borderRadius: "34px",
                boxShadow: "var(--mn-shadow-lg)",
                padding: "14px",
                border: "9px solid var(--mn-text)",
              }}
            >
              <div
                style={{
                  background: "var(--mn-surface-3)",
                  borderRadius: "16px",
                  padding: "14px",
                  marginBottom: "14px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "var(--mn-bg)",
                    borderRadius: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <StarMark size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--mn-text)" }}>Myndlab App</div>
                  <div style={{ fontFamily: "var(--mn-mono)", color: "var(--mn-text-muted)", fontSize: "11px" }}>
                    Add to Home Screen
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "290px",
                  background: "var(--mn-bg)",
                  borderRadius: "16px",
                  backgroundImage: "var(--mn-girih)",
                  backgroundSize: "90px 90px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST ────────────────────────────────────────────── */}
      <section style={{ padding: "104px 24px", background: "var(--mn-bg-alt)" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Kicker>Built to be trusted</Kicker>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              { icon: <ShieldCheck size={24} color="var(--mn-teal)" />, title: "Bank-grade security", desc: "End-to-end encryption and compliance." },
              { icon: <Server size={24} color="var(--mn-teal)" />, title: "Local data residency", desc: "Data stays in the GCC, always." },
              { icon: <BadgeCheck size={24} color="var(--mn-teal)" />, title: "Enterprise ready", desc: "SLA guarantees and priority support." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "30px",
                  background: "var(--mn-surface)",
                  borderRadius: "16px",
                  boxShadow: "var(--mn-shadow-sm)",
                  border: "1px solid var(--mn-border)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "var(--mn-teal-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "var(--mn-display)", fontSize: "19px", fontWeight: 600, margin: "0 0 6px", color: "var(--mn-text)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--mn-text-muted)", fontSize: "15px", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section
        style={{
          padding: "112px 24px",
          background: "var(--mn-teal-deep)",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath d='M60 14 L70 36 L94 38 L78 56 L84 80 L60 70 L36 80 L42 56 L26 38 L50 36 Z' fill='none' stroke='%23E9C77A' stroke-opacity='0.12' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: "132px 132px",
            opacity: 0.9,
          }}
        />
        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "26px" }}>
            <StarMark size={34} />
          </div>
          <h2
            style={{
              fontFamily: "var(--mn-display)",
              fontSize: "clamp(34px, 5vw, 50px)",
              fontWeight: 600,
              letterSpacing: "-1px",
              margin: "0 0 36px",
              lineHeight: 1.1,
            }}
          >
            Your idea deserves to be live.
          </h2>
          <button
            style={{
              background: "var(--mn-bg)",
              color: "var(--mn-teal-deep)",
              border: "none",
              borderRadius: "12px",
              padding: "16px 30px",
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: "var(--mn-sans)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            Build for free — no credit card needed <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer
        style={{
          padding: "40px 48px",
          borderTop: "1px solid var(--mn-border)",
          background: "var(--mn-bg-alt)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <StarMark size={22} />
          <span style={{ fontWeight: 600, color: "var(--mn-text)", fontSize: "15px" }}>
            Mynd<span style={{ color: "var(--mn-teal)" }}>lab</span>
          </span>
        </div>
        <div style={{ fontFamily: "var(--mn-mono)", color: "var(--mn-text-dim)", fontSize: "12px" }}>
          © {new Date().getFullYear()} Myndlab Inc. — Built in the GCC
        </div>
      </footer>
    </div>
  );
}
