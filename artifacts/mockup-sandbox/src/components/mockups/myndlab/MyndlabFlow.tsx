import { useState, useRef, useEffect } from "react";
import "./_group.css";
import { Landing } from "./Landing";
import { Signup } from "./Signup";
import { Onboarding, OnboardingAnswers } from "./Onboarding";
import { Dashboard } from "./Dashboard";
import { BuildProgress } from "./BuildProgress";
import { BuildComplete } from "./BuildComplete";
import { ShareApp } from "./ShareApp";
import { PromptExperience } from "./PromptExperience";
import { StrategyRail, NotesReopen, FRAMES } from "./_shared/StrategyRail";
import { Code2, Rocket } from "lucide-react";

const SCREENS = [
  { label: "Hero",           hint: "GCC · Benefits · CTA",              component: "Landing" },
  { label: "Sign Up",        hint: "Auth · Founder type",               component: "Signup" },
  { label: "Onboarding",     hint: "App type · Experience · Language",  component: "Onboarding" },
  { label: "Prompt Home",    hint: "AI Adviser · Personalised",         component: "Dashboard" },
  { label: "Build Progress", hint: "Live status · Reassurance",         component: "BuildProgress" },
  { label: "App Ready",      hint: "PWA · Distribution",                component: "BuildComplete" },
  { label: "You're Live",    hint: "Share · WhatsApp · QR",             component: "ShareApp" },
  { label: "Dashboard",      hint: "My Apps · Portfolio",               component: "PromptExperience" },
];

type ScreenKey = typeof SCREENS[number]["component"];

function renderScreen(
  key: ScreenKey,
  isTechnical: boolean,
  answers: OnboardingAnswers | null,
  onOnboardingComplete: (a: OnboardingAnswers) => void,
) {
  switch (key) {
    case "Landing":          return <Landing />;
    case "Signup":           return <Signup />;
    case "Onboarding":       return <Onboarding onComplete={onOnboardingComplete} />;
    case "Dashboard":        return <Dashboard isTechnical={isTechnical} appType={answers?.appType} language={answers?.language} />;
    case "BuildProgress":    return <BuildProgress />;
    case "BuildComplete":    return <BuildComplete isTechnical={isTechnical} />;
    case "ShareApp":         return <ShareApp />;
    case "PromptExperience": return <PromptExperience />;
    default:                 return null;
  }
}

export function MyndlabFlow() {
  const [current, setCurrent] = useState(0);
  const [isTechnical, setIsTechnical] = useState(false);
  const [onboardingAnswers, setOnboardingAnswers] = useState<OnboardingAnswers | null>(null);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [notesOpen, setNotesOpen] = useState(true);
  // Frame index into FRAMES (10 notes). Screen i ↔ frame with screen === i.
  const frameForScreen = (s: number) => FRAMES.findIndex(f => f.screen === s);
  const [frameIdx, setFrameIdx] = useState(() => frameForScreen(0));
  const scrollRef = useRef<HTMLDivElement>(null);

  const go = (index: number) => {
    if (index === current) return;
    setAnimDir(index > current ? "left" : "right");
    setTimeout(() => {
      setCurrent(index);
      setAnimDir(null);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 180);
  };

  // Prototype screen changes → sync the rail to the matching frame.
  useEffect(() => {
    const fi = frameForScreen(current);
    if (fi !== -1) setFrameIdx(fi);
  }, [current]);

  // Rail nav. If the target frame is bound to a screen, move the prototype too;
  // bookend frames (screen === null) just change the note.
  const railTo = (fi: number) => {
    if (fi < 0 || fi >= FRAMES.length) return;
    setFrameIdx(fi);
    const s = FRAMES[fi].screen;
    if (s !== null && s !== current) go(s);
  };

  const handleOnboardingComplete = (answers: OnboardingAnswers) => {
    setOnboardingAnswers(answers);
    go(current + 1);
  };

  const prev = () => current > 0 && go(current - 1);
  const next = () => current < SCREENS.length - 1 && go(current + 1);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [current]);

  const isLast = current === SCREENS.length - 1;
  // The toggle only rebuilds the screen on Prompt Home (idx 3) and App Ready (idx 5).
  const toggleHot = current === 3 || current === 5;

  // Keyboard navigation — makes the "← →" hint literally true.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100vh",
      background: "#F4EDE1", fontFamily: "var(--font-main, 'Inter', sans-serif)", overflow: "hidden",
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mn-pulse-next { 0%,100% { box-shadow: 0 2px 6px rgba(15,93,84,.28); } 50% { box-shadow: 0 2px 6px rgba(15,93,84,.28), 0 0 0 7px rgba(15,93,84,.12); } }
        @keyframes mn-pulse-back { 0%,100% { box-shadow: 0 0 0 0 rgba(22,48,44,0); } 50% { box-shadow: 0 0 0 5px rgba(22,48,44,.07); } }
        @keyframes mn-pulse-soft { 0%,100% { box-shadow: 0 0 0 0 rgba(15,93,84,0); } 50% { box-shadow: 0 0 0 4px rgba(15,93,84,.08); } }
        @keyframes mn-pulse-hot { 0%,100% { box-shadow: 0 0 0 0 rgba(176,122,43,0); border-color: var(--mn-brass); } 50% { box-shadow: 0 0 0 6px rgba(176,122,43,.22); border-color: var(--mn-brass); } }
        @keyframes mn-coach-in { from { opacity:0; transform: translateY(-4px);} to { opacity:1; transform:none;} }
      `}} />
      {/* Top nav */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px", height: "64px", flexShrink: 0,
        background: "#FFFFFF", borderBottom: "1px solid #E6DBCB", gap: "12px",
        boxShadow: "0 1px 3px rgba(28,43,43,0.05)",
      }}>
        {/* Prev */}
        <button onClick={prev} disabled={current === 0} style={{
          display: "flex", alignItems: "center", gap: "5px",
          background: current === 0 ? "transparent" : "#FFFFFF", border: "1px solid #E6DBCB",
          color: current === 0 ? "#D6C8B4" : "#16302C",
          padding: "6px 12px", borderRadius: "7px", fontSize: "13px", fontWeight: 500,
          cursor: current === 0 ? "default" : "pointer", flexShrink: 0, transition: "all 0.15s",
          animation: current === 0 ? "none" : "mn-pulse-back 2.4s ease-in-out infinite",
        }}>
          ← Back
        </button>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {SCREENS.map((s, i) => (
              <button key={i} onClick={() => go(i)} title={s.label} style={{
                width: i === current ? "22px" : "7px", height: "7px",
                borderRadius: "4px",
                background: i === current ? "#0F5D54" : i < current ? "#9DC7BF" : "#E6DBCB",
                border: "none", cursor: "pointer", padding: 0, transition: "all 0.2s",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <span style={{ color: "#16302C", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
              {current + 1}/{SCREENS.length} — {SCREENS[current].label}
            </span>
            <span style={{ color: "#92A09B", fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {SCREENS[current].hint}
            </span>
          </div>
          <div style={{
            fontFamily: "var(--mn-mono)", fontSize: "10px", letterSpacing: "0.4px",
            color: "#92A09B", whiteSpace: "nowrap",
          }}>
            <span style={{ color: "#0F5D54", fontWeight: 600 }}>Back</span> / <span style={{ color: "#0F5D54", fontWeight: 600 }}>Next</span> · or press <span style={{ color: "#16302C", fontWeight: 600 }}>←</span> <span style={{ color: "#16302C", fontWeight: 600 }}>→</span> to move
          </div>
        </div>

        {/* Founder toggle */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1px",
          background: "#F4EDE1", borderRadius: "8px", padding: "3px",
          flexShrink: 0, border: "1px solid #E6DBCB", position: "relative",
          animation: toggleHot ? "mn-pulse-hot 1.6s ease-in-out infinite" : "mn-pulse-soft 2.8s ease-in-out infinite",
        }}>
          <button onClick={() => setIsTechnical(false)} style={{
            display: "flex", alignItems: "center", gap: "5px",
            padding: "5px 10px", borderRadius: "6px", border: "none",
            background: !isTechnical ? "#FFFFFF" : "transparent",
            color: !isTechnical ? "#0F5D54" : "#5E6F6A",
            fontSize: "11px", fontWeight: 700, cursor: "pointer",
            boxShadow: !isTechnical ? "0 1px 3px rgba(28,43,43,0.08)" : "none",
            transition: "all 0.15s",
          }}>
            <Rocket size={11} /> Non-tech
          </button>
          <button onClick={() => setIsTechnical(true)} style={{
            display: "flex", alignItems: "center", gap: "5px",
            padding: "5px 10px", borderRadius: "6px", border: "none",
            background: isTechnical ? "#FFFFFF" : "transparent",
            color: isTechnical ? "#0F5D54" : "#5E6F6A",
            fontSize: "11px", fontWeight: 700, cursor: "pointer",
            boxShadow: isTechnical ? "0 1px 3px rgba(28,43,43,0.08)" : "none",
            transition: "all 0.15s",
          }}>
            <Code2 size={11} /> Technical
          </button>
        </div>

        {/* Next */}
        <button onClick={next} disabled={isLast} style={{
          display: "flex", alignItems: "center", gap: "5px",
          background: isLast ? "transparent" : "#0F5D54",
          border: isLast ? "1px solid #E6DBCB" : "none",
          color: isLast ? "#D6C8B4" : "#FFFFFF",
          padding: "6px 12px", borderRadius: "7px", fontSize: "13px", fontWeight: 600,
          cursor: isLast ? "default" : "pointer",
          flexShrink: 0, transition: "all 0.15s",
          boxShadow: isLast ? "none" : "0 2px 6px rgba(15,93,84,0.28)",
          animation: isLast ? "none" : "mn-pulse-next 2.2s ease-in-out infinite",
        }}>
          Next →
        </button>
      </div>

      {/* Toggle coachmark banner — only on the screens the toggle actually rebuilds */}
      {toggleHot && (
        <div style={{
          flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
          padding: "9px 16px",
          background: "var(--mn-gold-light)",
          borderBottom: "1px solid var(--mn-border)",
          animation: "mn-coach-in .25s ease",
        }}>
          <span style={{
            fontFamily: "var(--mn-mono)", fontSize: "10px", letterSpacing: "1.5px",
            color: "var(--mn-gold-hover)", fontWeight: 600, flexShrink: 0,
          }}>
            TRY THE TOGGLE&nbsp;↗
          </span>
          <span style={{ fontSize: "13px", color: "var(--mn-text)", lineHeight: 1.4 }}>
            Switch <strong style={{ fontWeight: 600 }}>Non-tech&nbsp;↔&nbsp;Technical</strong> (top right) and watch this step rebuild itself — one product, two journeys.
          </span>
        </div>
      )}

      {/* Body: prototype screen + strategy rail */}
      <div style={{ flex: 1, display: "flex", minHeight: 0, position: "relative" }}>
        <div ref={scrollRef} style={{
          flex: 1, overflow: "auto", minWidth: 0,
          opacity: animDir ? 0 : 1,
          transform: animDir === "left" ? "translateX(-18px)" : animDir === "right" ? "translateX(18px)" : "translateX(0)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}>
          {renderScreen(SCREENS[current].component, isTechnical, onboardingAnswers, handleOnboardingComplete)}
        </div>

        {notesOpen ? (
          <StrategyRail
            frameIdx={frameIdx}
            onPrev={() => railTo(frameIdx - 1)}
            onNext={() => railTo(frameIdx + 1)}
            onClose={() => setNotesOpen(false)}
          />
        ) : (
          <NotesReopen onOpen={() => setNotesOpen(true)} />
        )}
      </div>
    </div>
  );
}
