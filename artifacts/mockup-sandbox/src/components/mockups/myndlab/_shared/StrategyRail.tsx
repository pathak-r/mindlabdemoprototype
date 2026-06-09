import React from "react";
import "../_group.css";
import { StarMark } from "./TopNav";
import { ChevronLeft, ChevronRight, PanelRightClose, Star, MousePointerClick } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   Strategy companion — 10 "punchy" frames distilled from the PM strategy doc.
   `screen` binds a frame to a prototype screen index (0–7) for two-way sync.
   Bookend frames (thesis, Day-90) have screen = null and are reached via the
   rail's own ←/→ controls.
   ────────────────────────────────────────────────────────────────────────── */

export interface Frame {
  part: string;
  tag: string;
  title: string;
  lines: string[];
  rec?: { label: string; text: string };
  toggleHint?: string;
  screen: number | null;
}

export const FRAMES: Frame[] = [
  {
    part: "01",
    tag: "THE THESIS · POSITIONING",
    title: "Resolve the identity crisis first.",
    lines: [
      "Today the product asks for a tech stack at the first prompt and deployment options at the end — speaking to two users, converting neither. Every fix here assumes one commitment: the non-technical GCC founder is the primary ICP.",
      "Then the promise lands: idea to a live, distributed app — Arabic or English, no code, no agency, no App Store queue.",
      "The white space: full-stack build · zero jargon · GCC Arabic-first · end-to-end PWA distribution. No competitor owns all four.",
    ],
    screen: 0,
  },
  {
    part: "02",
    tag: "USER JOURNEY",
    title: "One question ends the identity crisis.",
    lines: [
      "The product speaks to two users at once and converts neither.",
      "Smart defaults hide every infrastructure choice from the non-technical founder; full control stays in the technical lane.",
    ],
    rec: {
      label: "MOST IMPORTANT RECOMMENDATION",
      text: "Ask once at sign-up — technical or non-technical. One tap, two completely different products.",
    },
    screen: 1,
  },
  {
    part: "02",
    tag: "USER JOURNEY",
    title: "Kill the blank-canvas problem.",
    lines: [
      "Infinite possibility is paralysing. Three tap-card questions — what app, built before, Arabic or English — and no typing.",
      "Six app types as visual cards. Tap one, straight into a pre-configured build.",
    ],
    screen: 2,
  },
  {
    part: "02",
    tag: "USER JOURNEY",
    title: "Never a blank box.",
    lines: [
      "Three pre-written prompts as real founder stories, plus a prompt-quality coach: Basic → Good → Detailed.",
      "The AI Adviser turns a rough idea into a buildable spec instead of leaving the founder to guess.",
    ],
    toggleHint:
      "Flip the toggle (top right) to Technical on this screen to reveal the tech-stack options — frontend, backend and build settings like Next.js and Supabase — kept hidden from the non-technical founder.",
    screen: 3,
  },
  {
    part: "02",
    tag: "USER JOURNEY",
    title: "Narrate the build. Don't log it.",
    lines: [
      "Replace “Applied 23 changes” with a plain-language timeline: designing your app → setting up your database → building your Arabic checkout → security checks.",
      "Reassurance, not jargon — the non-technical founder needs to trust what's happening.",
    ],
    screen: 4,
  },
  {
    part: "02",
    tag: "DISTRIBUTION",
    title: "Close the last mile: PWA.",
    lines: [
      "An automatic PWA suitability check after every build — a recommendation, never a gate.",
      "“Your users can install from a WhatsApp link — no App Store required.” One button, 60 seconds.",
    ],
    rec: {
      label: "2ND MOST IMPORTANT RECOMMENDATION",
      text: "The distribution layer no Western competitor offers. Own the last mile they all leave open.",
    },
    toggleHint:
      "Flip the toggle (top right) to Technical here to reveal the developer deploy options — deploy to Vercel, connect GitHub and download source — alongside the one-tap PWA publish.",
    screen: 5,
  },
  {
    part: "04",
    tag: "GROWTH & ACTIVATION",
    title: "Activation = published AND shared.",
    lines: [
      "Not sign-up, not a URL. The moment someone other than the builder opens the app.",
      "Growth loops: a “Built with Myndlab” badge and a WhatsApp-native share — word-of-mouth travels the same channel the app does.",
    ],
    screen: 6,
  },
  {
    part: "04",
    tag: "RETENTION",
    title: "The weekly email that prevents churn.",
    lines: [
      "Every published app gets a plain-English summary — views, installs, return visitors. No dashboard; it just arrives.",
      "Gate the upgrade at the highest-intent moment: right after the first PWA publish.",
    ],
    screen: 7,
  },
  {
    part: "05",
    tag: "THE LAST MILE",
    title: "Own the last mile.",
    lines: [
      "Not an app store — a PWA distribution store. Tap a WhatsApp link → Add to Home Screen → live on the phone, no App Store queue (the gap every Western competitor leaves open).",
      "Every published app lists in a public, GCC-native directory and carries a “Built with Myndlab” badge — each install is a doorway to the next founder. A compounding network-effects asset.",
      "The Day-90 test: real GCC founders shipping real apps that real users discover and install. If yes, retention and revenue follow.",
    ],
    screen: 8,
  },
];

const RAIL_W = 384;

export function StrategyRail({
  frameIdx,
  onPrev,
  onNext,
  onClose,
}: {
  frameIdx: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const f = FRAMES[frameIdx];
  const atStart = frameIdx === 0;
  const atEnd = frameIdx === FRAMES.length - 1;

  return (
    <aside
      style={{
        width: RAIL_W,
        flexShrink: 0,
        background: "var(--mn-bg-alt)",
        borderLeft: "1px solid var(--mn-border)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px 16px",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
          <StarMark size={20} />
          <span
            style={{
              fontFamily: "var(--mn-mono)",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--mn-teal)",
              fontWeight: 500,
            }}
          >
            STRATEGY&nbsp;NOTES
          </span>
        </div>
        <button
          onClick={onClose}
          title="Hide notes"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: "transparent",
            border: "none",
            color: "var(--mn-text-dim)",
            cursor: "pointer",
            padding: "4px",
            fontFamily: "var(--mn-mono)",
            fontSize: "11px",
          }}
        >
          {String(frameIdx + 1).padStart(2, "0")} / {String(FRAMES.length).padStart(2, "0")}
          <PanelRightClose size={15} />
        </button>
      </div>

      {/* Body */}
      <div
        key={frameIdx}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "8px 24px 24px",
          animation: "rail-fade .28s ease",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `@keyframes rail-fade { from { opacity:0; transform: translateY(8px);} to {opacity:1; transform:none;} }
              @keyframes mn-note-pop { 0%,100% { box-shadow: 0 6px 18px rgba(176,122,43,.30); } 50% { box-shadow: 0 8px 24px rgba(176,122,43,.50), 0 0 0 5px rgba(176,122,43,.18); } }`,
          }}
        />
        <div
          style={{
            fontFamily: "var(--mn-mono)",
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "var(--mn-text-dim)",
            marginBottom: "14px",
          }}
        >
          PART {f.part} · {f.tag}
        </div>

        <h2
          style={{
            fontFamily: "var(--mn-display)",
            fontSize: "26px",
            lineHeight: 1.16,
            fontWeight: 600,
            letterSpacing: "-0.5px",
            color: "var(--mn-text)",
            margin: "0 0 18px",
          }}
        >
          {f.title}
        </h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
          {f.lines.map((line, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "11px",
                fontSize: "14.5px",
                lineHeight: 1.52,
                color: "var(--mn-text-muted)",
              }}
            >
              <span style={{ color: "var(--mn-brass)", flexShrink: 0, lineHeight: 1.52 }}>—</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {f.rec && (
          <div
            style={{
              marginTop: "22px",
              background: "var(--mn-teal-light)",
              borderLeft: "3px solid var(--mn-teal)",
              borderRadius: "0 10px 10px 0",
              padding: "13px 15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--mn-mono)",
                fontSize: "10px",
                letterSpacing: "1px",
                color: "var(--mn-teal)",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              <Star size={11} fill="var(--mn-teal)" strokeWidth={0} /> {f.rec.label}
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: 1.5, color: "var(--mn-text)", fontWeight: 500 }}>
              {f.rec.text}
            </div>
          </div>
        )}

        {f.toggleHint && (
          <div
            style={{
              marginTop: "24px",
              background: "#A06E22",
              borderRadius: "12px",
              padding: "15px 16px",
              animation: "mn-note-pop 1.8s ease-in-out infinite",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--mn-mono)",
                fontSize: "13px",
                letterSpacing: "1.6px",
                color: "#FFFFFF",
                fontWeight: 700,
                marginBottom: "8px",
                textShadow: "0 1px 2px rgba(0,0,0,0.18)",
              }}
            >
              <MousePointerClick size={16} strokeWidth={2.5} /> TRY THE TOGGLE&nbsp;↗ (TOP&nbsp;RIGHT)
            </div>
            <div style={{ fontSize: "14px", lineHeight: 1.55, color: "#FFFFFF", fontWeight: 400 }}>
              {f.toggleHint}
            </div>
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          borderTop: "1px solid var(--mn-border)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--mn-mono)",
            fontSize: "10.5px",
            letterSpacing: "0.4px",
            color: "var(--mn-text-dim)",
          }}
        >
          {f.screen === null ? "FRAMING NOTE" : "SYNCED TO SCREEN"}
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={onPrev}
            disabled={atStart}
            style={navBtn(atStart)}
            title="Previous note"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={onNext}
            disabled={atEnd}
            style={navBtn(atEnd)}
            title="Next note"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function navBtn(disabled: boolean): React.CSSProperties {
  return {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    border: "1px solid var(--mn-border)",
    background: disabled ? "transparent" : "var(--mn-surface)",
    color: disabled ? "var(--mn-border-strong)" : "var(--mn-text)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "default" : "pointer",
    transition: "all .15s",
  };
}

/* Collapsed reopen control — prominent, filled, slide-in. Unmissable so a viewer
   who closed the notes always knows the commentary track is one click away. */
export function NotesReopen({ onOpen }: { onOpen: () => void }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes mn-notes-in { from { opacity: 0; transform: translateX(28px); } to { opacity: 1; transform: none; } }
            .mn-notes-reopen:hover { filter: brightness(1.06); box-shadow: 0 9px 26px rgba(15,93,84,0.45) !important; }
          `,
        }}
      />
      <button
        onClick={onOpen}
        className="mn-notes-reopen"
        title="Reopen the strategy notes panel"
        style={{
          position: "absolute",
          top: "76px",
          right: "18px",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#0F5D54",
          border: "1px solid #0A4A43",
          borderRadius: "12px",
          padding: "11px 16px",
          cursor: "pointer",
          color: "#FFFFFF",
          boxShadow: "0 6px 20px rgba(15,93,84,0.34)",
          animation: "mn-notes-in .42s cubic-bezier(.2,.8,.2,1) both",
          transition: "filter .15s, box-shadow .15s",
        }}
      >
        {/* White star — mirrors the rail header, readable on teal */}
        <svg width="18" height="18" viewBox="0 0 100 100" aria-hidden style={{ flexShrink: 0 }}>
          <polygon
            points="50,4 61,28 86,18 76,43 96,50 76,57 86,82 61,72 50,96 39,72 14,82 24,57 4,50 24,43 14,18 39,28"
            fill="#FFFFFF"
          />
          <circle cx="50" cy="50" r="10" fill="#0F5D54" />
          <circle cx="50" cy="50" r="4.5" fill="#EBD3A3" />
        </svg>
        <span style={{ fontFamily: "var(--mn-sans)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1px", whiteSpace: "nowrap" }}>
          Strategy notes hidden — <span style={{ fontWeight: 700 }}>click to reopen</span>
        </span>
        <span style={{ fontSize: "17px", lineHeight: 1, marginTop: "-1px" }}>‹</span>
      </button>
    </>
  );
}
