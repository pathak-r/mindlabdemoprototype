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
    part: "00",
    tag: "THE BRIEF",
    title: "Resolve the identity crisis first.",
    lines: [
      "Myndlab asks for a tech stack at the first prompt and deployment options at the end — speaking to two users, capturing neither.",
      "Every recommendation here assumes one commitment: the non-technical GCC founder is the primary ICP.",
    ],
    screen: null,
  },
  {
    part: "01",
    tag: "POSITIONING",
    title: "Never get stuck. Get your app out there.",
    lines: [
      "Idea to a live, distributed app — in Arabic or English — no code, no agency, no App Store queue.",
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
    tag: "DAY 90",
    title: "The honest test at Day 90.",
    lines: [
      "≈20% of sign-ups publish a live app end-to-end — 40%+ sign-up → build, 50%+ build → publish.",
      "Are real GCC founders sharing real apps with real users over WhatsApp? If yes, retention and revenue follow.",
    ],
    screen: null,
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
                gap: "7px",
                fontFamily: "var(--mn-mono)",
                fontSize: "10.5px",
                letterSpacing: "1.2px",
                color: "#FBF6EE",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              <MousePointerClick size={13} /> TRY THE TOGGLE&nbsp;↗ (TOP&nbsp;RIGHT)
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

/* Collapsed reopen tab */
export function NotesReopen({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      style={{
        position: "absolute",
        top: "78px",
        right: "16px",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "var(--mn-surface)",
        border: "1px solid var(--mn-border-strong)",
        borderRadius: "10px",
        padding: "8px 14px",
        cursor: "pointer",
        boxShadow: "var(--mn-shadow-md)",
        fontFamily: "var(--mn-mono)",
        fontSize: "11px",
        letterSpacing: "1px",
        color: "var(--mn-teal)",
        fontWeight: 500,
      }}
      title="Show strategy notes"
    >
      <StarMark size={16} /> STRATEGY NOTES
    </button>
  );
}
