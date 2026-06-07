import { useState, useRef, useEffect } from "react";
import "./_group.css";
import { Landing } from "./Landing";
import { Signup } from "./Signup";
import { Dashboard } from "./Dashboard";
import { BuildProgress } from "./BuildProgress";
import { BuildComplete } from "./BuildComplete";
import { ShareApp } from "./ShareApp";
import { PromptExperience } from "./PromptExperience";
import { Code2, Rocket } from "lucide-react";

const SCREENS = [
  { label: "Hero", hint: "GCC · Benefits · CTA", component: "Landing" },
  { label: "Sign Up", hint: "Auth · Founder type", component: "Signup" },
  { label: "Prompt Home", hint: "AI Adviser · Templates", component: "Dashboard" },
  { label: "Build in Progress", hint: "Live status · Reassurance", component: "BuildProgress" },
  { label: "App Ready", hint: "PWA · Distribution", component: "BuildComplete" },
  { label: "You're Live", hint: "Share · WhatsApp · QR", component: "ShareApp" },
  { label: "Dashboard", hint: "My Apps · Portfolio", component: "PromptExperience" },
];

type ScreenKey = typeof SCREENS[number]["component"];

function renderScreen(key: ScreenKey, isTechnical: boolean) {
  switch (key) {
    case "Landing": return <Landing />;
    case "Signup": return <Signup />;
    case "Dashboard": return <Dashboard isTechnical={isTechnical} />;
    case "BuildProgress": return <BuildProgress />;
    case "BuildComplete": return <BuildComplete isTechnical={isTechnical} />;
    case "ShareApp": return <ShareApp />;
    case "PromptExperience": return <PromptExperience />;
    default: return null;
  }
}

export function MyndlabFlow() {
  const [current, setCurrent] = useState(0);
  const [isTechnical, setIsTechnical] = useState(false);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
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

  const prev = () => current > 0 && go(current - 1);
  const next = () => current < SCREENS.length - 1 && go(current + 1);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [current]);

  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100vh",
      background: "#FAFBFF", fontFamily: "var(--font-main, 'Inter', sans-serif)", overflow: "hidden",
    }}>
      {/* Top nav bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px", height: "56px", flexShrink: 0,
        background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", gap: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}>
        {/* Prev */}
        <button onClick={prev} disabled={current === 0} style={{
          display: "flex", alignItems: "center", gap: "5px",
          background: "transparent", border: "1px solid #E2E8F0",
          color: current === 0 ? "#CBD5E1" : "#0F172A",
          padding: "6px 12px", borderRadius: "7px", fontSize: "13px", fontWeight: 500,
          cursor: current === 0 ? "default" : "pointer", flexShrink: 0, transition: "all 0.15s",
        }}>
          ← Back
        </button>

        {/* Center: dots + label + founder toggle */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {SCREENS.map((s, i) => (
              <button key={i} onClick={() => go(i)} title={s.label} style={{
                width: i === current ? "22px" : "7px", height: "7px",
                borderRadius: "4px",
                background: i === current ? "#0066FF" : i < current ? "#BFDBFE" : "#E2E8F0",
                border: "none", cursor: "pointer", padding: 0, transition: "all 0.2s",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <span style={{ color: "#0F172A", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
              {current + 1}/{SCREENS.length} — {SCREENS[current].label}
            </span>
            <span style={{ color: "#94A3B8", fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {SCREENS[current].hint}
            </span>
          </div>
        </div>

        {/* Founder type toggle */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1px",
          background: "#F1F5F9", borderRadius: "8px", padding: "3px",
          flexShrink: 0, border: "1px solid #E2E8F0",
        }}>
          <button onClick={() => setIsTechnical(false)} style={{
            display: "flex", alignItems: "center", gap: "5px",
            padding: "5px 10px", borderRadius: "6px", border: "none",
            background: !isTechnical ? "#FFFFFF" : "transparent",
            color: !isTechnical ? "#0066FF" : "#64748B",
            fontSize: "11px", fontWeight: 700, cursor: "pointer",
            boxShadow: !isTechnical ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            transition: "all 0.15s",
          }}>
            <Rocket size={11} /> Non-tech
          </button>
          <button onClick={() => setIsTechnical(true)} style={{
            display: "flex", alignItems: "center", gap: "5px",
            padding: "5px 10px", borderRadius: "6px", border: "none",
            background: isTechnical ? "#FFFFFF" : "transparent",
            color: isTechnical ? "#0066FF" : "#64748B",
            fontSize: "11px", fontWeight: 700, cursor: "pointer",
            boxShadow: isTechnical ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            transition: "all 0.15s",
          }}>
            <Code2 size={11} /> Technical
          </button>
        </div>

        {/* Next */}
        <button onClick={next} disabled={current === SCREENS.length - 1} style={{
          display: "flex", alignItems: "center", gap: "5px",
          background: current === SCREENS.length - 1 ? "transparent" : "#0066FF",
          border: current === SCREENS.length - 1 ? "1px solid #E2E8F0" : "none",
          color: current === SCREENS.length - 1 ? "#CBD5E1" : "#FFFFFF",
          padding: "6px 12px", borderRadius: "7px", fontSize: "13px", fontWeight: 600,
          cursor: current === SCREENS.length - 1 ? "default" : "pointer",
          flexShrink: 0, transition: "all 0.15s",
          boxShadow: current === SCREENS.length - 1 ? "none" : "0 2px 6px rgba(0,102,255,0.25)",
        }}>
          Next →
        </button>
      </div>

      {/* Screen container */}
      <div ref={scrollRef} style={{
        flex: 1, overflow: "auto",
        opacity: animDir ? 0 : 1,
        transform: animDir === "left" ? "translateX(-18px)" : animDir === "right" ? "translateX(18px)" : "translateX(0)",
        transition: "opacity 0.18s ease, transform 0.18s ease",
      }}>
        {renderScreen(SCREENS[current].component, isTechnical)}
      </div>
    </div>
  );
}
