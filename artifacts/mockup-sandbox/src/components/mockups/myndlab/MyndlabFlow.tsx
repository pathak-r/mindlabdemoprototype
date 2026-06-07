import { useState, useRef, useEffect } from "react";
import "./_group.css";
import { Landing } from "./Landing";
import { Signup } from "./Signup";
import { Dashboard } from "./Dashboard";
import { PromptExperience } from "./PromptExperience";
import { BuildProgress } from "./BuildProgress";
import { BuildComplete } from "./BuildComplete";
import { ShareApp } from "./ShareApp";

const SCREENS = [
  { label: "Landing Page", component: Landing, hint: "Hero · Templates · Trust" },
  { label: "Sign-up Flow", component: Signup, hint: "Auth · Onboarding survey" },
  { label: "Dashboard", component: Dashboard, hint: "First experience · Empty state" },
  { label: "Prompt Experience", component: PromptExperience, hint: "Plan mode · Quick choices" },
  { label: "Build Progress", component: BuildProgress, hint: "2-minute wait · Timeline" },
  { label: "Build Complete", component: BuildComplete, hint: "App ready · Publish options" },
  { label: "Post-Publish", component: ShareApp, hint: "Share link · WhatsApp · QR" },
];

export function MyndlabFlow() {
  const [current, setCurrent] = useState(0);
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

  const Screen = SCREENS[current].component;

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [current]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "#FAFBFF",
      fontFamily: "var(--font-main, 'Inter', sans-serif)",
      overflow: "hidden",
    }}>
      {/* Top nav bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        height: "52px",
        flexShrink: 0,
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        gap: "16px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}>
        {/* Left: prev button */}
        <button
          onClick={prev}
          disabled={current === 0}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "transparent",
            border: "1px solid #E2E8F0",
            color: current === 0 ? "#CBD5E1" : "#0F172A",
            padding: "6px 14px",
            borderRadius: "7px",
            fontSize: "13px",
            fontWeight: 500,
            cursor: current === 0 ? "default" : "pointer",
            transition: "all 0.15s",
            flexShrink: 0,
          }}
        >
          ← Back
        </button>

        {/* Center: step dots + label */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          flex: 1,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {SCREENS.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                title={s.label}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === current
                    ? "#0066FF"
                    : i < current
                    ? "#BFDBFE"
                    : "#E2E8F0",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#0F172A", fontSize: "13px", fontWeight: 600 }}>
              {current + 1}. {SCREENS[current].label}
            </span>
            <span style={{ color: "#94A3B8", fontSize: "12px" }}>
              — {SCREENS[current].hint}
            </span>
          </div>
        </div>

        {/* Right: next button */}
        <button
          onClick={next}
          disabled={current === SCREENS.length - 1}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: current === SCREENS.length - 1 ? "transparent" : "#0066FF",
            border: current === SCREENS.length - 1 ? "1px solid #E2E8F0" : "none",
            color: current === SCREENS.length - 1 ? "#CBD5E1" : "#FFFFFF",
            padding: "6px 14px",
            borderRadius: "7px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: current === SCREENS.length - 1 ? "default" : "pointer",
            transition: "all 0.15s",
            flexShrink: 0,
            boxShadow: current === SCREENS.length - 1 ? "none" : "0 2px 6px rgba(0,102,255,0.25)",
          }}
        >
          Next →
        </button>
      </div>

      {/* Screen container */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflow: "auto",
          opacity: animDir ? 0 : 1,
          transform: animDir === "left"
            ? "translateX(-20px)"
            : animDir === "right"
            ? "translateX(20px)"
            : "translateX(0)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
      >
        <Screen />
      </div>
    </div>
  );
}
