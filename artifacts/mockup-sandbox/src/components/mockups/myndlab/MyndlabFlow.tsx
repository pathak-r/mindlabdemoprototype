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
      background: "#0A0F1E",
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
        background: "#0d1526",
        borderBottom: "1px solid rgba(248,249,252,0.08)",
        gap: "16px",
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
            border: "1px solid rgba(248,249,252,0.12)",
            color: current === 0 ? "rgba(248,249,252,0.2)" : "rgba(248,249,252,0.7)",
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
          gap: "6px",
          flex: 1,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {SCREENS.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                title={s.label}
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === current
                    ? "#00D4FF"
                    : i < current
                    ? "rgba(0,212,255,0.35)"
                    : "rgba(248,249,252,0.15)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#F8F9FC", fontSize: "13px", fontWeight: 600 }}>
              {current + 1}. {SCREENS[current].label}
            </span>
            <span style={{ color: "rgba(248,249,252,0.35)", fontSize: "12px" }}>
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
            background: current === SCREENS.length - 1 ? "transparent" : "#00D4FF",
            border: current === SCREENS.length - 1 ? "1px solid rgba(248,249,252,0.12)" : "none",
            color: current === SCREENS.length - 1 ? "rgba(248,249,252,0.2)" : "#0A0F1E",
            padding: "6px 14px",
            borderRadius: "7px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: current === SCREENS.length - 1 ? "default" : "pointer",
            transition: "all 0.15s",
            flexShrink: 0,
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
