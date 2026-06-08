import "./_group.css";
import { StarMark } from "./_shared/TopNav";
import { Lock, Plus, WifiOff, Share, Check } from "lucide-react";

/* Screen 9 — "The last mile."
   A deliberate POV shift: this is what the founder's customer sees when they
   tap the WhatsApp link. White-label (the founder's app, not Myndlab chrome),
   with the one exception that closes the growth loop — the "Built with Myndlab"
   badge. Intentionally simple: it's a basic PWA distribution layer, not a studio. */

export function LastMile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--mn-bg)",
        fontFamily: "var(--mn-sans)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "56px 24px 80px",
        boxSizing: "border-box",
        backgroundImage: "var(--mn-girih)",
        backgroundSize: "132px 132px",
      }}
    >
      {/* POV-shift framing */}
      <div style={{ textAlign: "center", maxWidth: "560px", marginBottom: "40px" }}>
        <div
          style={{
            fontFamily: "var(--mn-mono)",
            fontSize: "11px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--mn-teal)",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <span style={{ width: "22px", height: "1.5px", background: "var(--mn-brass)" }} />
          The last mile
        </div>
        <h1
          style={{
            fontFamily: "var(--mn-display)",
            fontSize: "clamp(30px, 4.4vw, 40px)",
            fontWeight: 600,
            letterSpacing: "-0.8px",
            lineHeight: 1.12,
            margin: "0 0 14px",
            color: "var(--mn-text)",
          }}
        >
          Here&rsquo;s what your customer sees.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.55, color: "var(--mn-text-muted)", margin: 0 }}>
          They tapped your WhatsApp link. No App Store, no download — just your app,
          one tap from their home screen.
        </p>
      </div>

      {/* Phone — the recipient's view */}
      <div
        style={{
          width: "300px",
          background: "var(--mn-text)",
          borderRadius: "38px",
          padding: "10px",
          boxShadow: "var(--mn-shadow-lg)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "relative",
            background: "#FFFFFF",
            borderRadius: "30px",
            overflow: "hidden",
            height: "560px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Browser chrome — signals "opened from a link" */}
          <div
            style={{
              height: "38px",
              background: "var(--mn-surface-3)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "0 12px",
              flexShrink: 0,
            }}
          >
            <Lock size={11} color="var(--mn-text-muted)" />
            <div
              style={{
                flex: 1,
                background: "#FFFFFF",
                borderRadius: "7px",
                padding: "5px 10px",
                fontFamily: "var(--mn-mono)",
                fontSize: "10.5px",
                color: "var(--mn-text-muted)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              myndlab.app/dubai-pt-booking
            </div>
            <Share size={12} color="var(--mn-text-muted)" />
          </div>

          {/* The founder's app (white-label) */}
          <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                height: "48px",
                borderBottom: "1px solid var(--mn-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--mn-text)" }}>Dubai PT</span>
              <span style={{ fontFamily: "var(--mn-arabic)", fontSize: "13px", fontWeight: 600, color: "var(--mn-teal)" }}>
                احجز
              </span>
            </div>

            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "var(--mn-teal-light)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--mn-arabic)", fontSize: "17px", fontWeight: 600, color: "var(--mn-teal)", marginBottom: "2px" }}>
                  احجز موعدك
                </div>
                <div style={{ fontSize: "12px", color: "var(--mn-text-muted)" }}>Book your session</div>
              </div>
              {[
                { time: "Today · 10:00 AM", loc: "Marina Studio", dot: "var(--mn-teal)" },
                { time: "Tomorrow · 2:00 PM", loc: "JLT Branch", dot: "var(--mn-brass)" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--mn-border)",
                    borderRadius: "10px",
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--mn-text)" }}>{s.time}</div>
                    <div style={{ fontSize: "10.5px", color: "var(--mn-text-dim)" }}>{s.loc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Built with Myndlab badge — the entire growth loop, made visible */}
            <div
              title="Tap → Myndlab sign-up (the word-of-mouth loop)"
              style={{
                position: "absolute",
                bottom: "150px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid var(--mn-border)",
                borderRadius: "999px",
                padding: "5px 11px 5px 7px",
                boxShadow: "var(--mn-shadow-sm)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <StarMark size={14} />
              <span style={{ fontSize: "10.5px", fontWeight: 600, color: "var(--mn-text)" }}>
                Built with <span style={{ color: "var(--mn-teal)" }}>Myndlab</span>
              </span>
            </div>

            {/* Add to Home Screen install sheet */}
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                right: "12px",
                background: "#FFFFFF",
                border: "1px solid var(--mn-border-strong)",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(22,48,44,0.16)",
                padding: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "11px",
                    background: "var(--mn-teal-light)",
                    border: "1px solid rgba(15,93,84,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontFamily: "var(--mn-arabic)", fontSize: "18px", fontWeight: 700, color: "var(--mn-teal)" }}>
                    احجز
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--mn-text)" }}>Install Dubai PT</div>
                  <div style={{ fontSize: "11px", color: "var(--mn-text-muted)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <WifiOff size={10} /> Add to Home Screen · works offline
                  </div>
                </div>
              </div>
              <button
                style={{
                  width: "100%",
                  background: "var(--mn-teal)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "11px",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "var(--mn-sans)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <Plus size={15} strokeWidth={2.5} /> Add to Home Screen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal reassurance — the loop is closed */}
      <div
        style={{
          display: "flex",
          gap: "22px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "36px",
        }}
      >
        {["Installs from a link", "Works offline", "Updates reach everyone instantly"].map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "13.5px",
              color: "var(--mn-text-muted)",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "var(--mn-teal-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Check size={12} color="var(--mn-teal)" strokeWidth={3} />
            </div>
            {t}
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop: "26px",
          fontSize: "13.5px",
          color: "var(--mn-text-dim)",
          textAlign: "center",
          maxWidth: "440px",
          lineHeight: 1.5,
        }}
      >
        That small badge is the loop: every install is a doorway to the next GCC founder.
      </p>
    </div>
  );
}

export default LastMile;
