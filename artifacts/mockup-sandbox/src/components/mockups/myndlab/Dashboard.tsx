import React, { useState } from "react";
import { AppLayout } from "./_shared/AppLayout";
import "./_group.css";

const templates = [
  {
    title: "Food Delivery",
    arabic: "قائمة الطعام",
    color: "#EF4444",
  },
  {
    title: "Booking & Appointments",
    arabic: "احجز الآن",
    color: "#3B82F6",
  },
  {
    title: "Property Listings",
    arabic: "عقارات",
    color: "#10B981",
  },
];

const builtThisWeek = [
  {
    app: "Al Barakat Delivery",
    founder: "Fatima · Dubai",
    color: "#F59E0B",
  },
  {
    app: "Oasis Properties",
    founder: "Omar · Riyadh",
    color: "#8B5CF6",
  },
  {
    app: "Care Clinic",
    founder: "Sara · Doha",
    color: "#EC4899",
  },
];

export function Dashboard() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <AppLayout activeItem="My Apps">
      <div className="p-8 max-w-5xl mx-auto w-full font-sans pb-24">
        {/* Welcome Banner */}
        <div
          className="rounded-2xl p-8 mb-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(124,58,237,0.05) 100%)",
            border: "1px solid var(--mn-border)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "var(--mn-cyan)", transform: "translate(30%, -30%)" }}
          />
          <h1 className="text-3xl font-bold mb-3 tracking-tight" style={{ color: "var(--mn-surface)" }}>
            Welcome, Rohit. Let's build your booking app.
          </h1>
          <p className="text-lg" style={{ color: "var(--mn-text-muted)" }}>
            Start below, pick a template, or describe your idea and we'll do the rest.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-2 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${isFocused ? "var(--mn-cyan)" : "var(--mn-border)"}`,
              boxShadow: isFocused ? "0 0 20px var(--mn-cyan-glow)" : "none",
            }}
          >
            <textarea
              className="w-full bg-transparent border-none outline-none resize-none p-4 text-lg"
              style={{ color: "var(--mn-surface)", minHeight: "120px" }}
              placeholder="Describe your app in Arabic or English..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <div className="flex justify-between items-center px-4 pb-2">
              <div className="flex gap-4">
                <button
                  className="text-sm transition-colors"
                  style={{ color: "var(--mn-text-dim)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mn-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mn-text-dim)")}
                >
                  Use voice instead
                </button>
                <button
                  className="text-sm transition-colors"
                  style={{ color: "var(--mn-text-dim)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mn-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mn-text-dim)")}
                >
                  Pick a template
                </button>
              </div>
              <button
                className="px-6 py-2 rounded-lg font-medium transition-all"
                style={{
                  background: "var(--mn-cyan)",
                  color: "var(--mn-navy)",
                }}
              >
                Generate
              </button>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="mb-16">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--mn-text-dim)" }}
          >
            Or start from a template
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((tpl, i) => (
              <div
                key={i}
                className="group cursor-pointer"
              >
                <div
                  className="rounded-xl aspect-[4/5] p-6 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--mn-border)",
                  }}
                >
                  {/* Phone Mockup */}
                  <div
                    className="w-[120px] h-[240px] rounded-2xl border-4 relative overflow-hidden flex flex-col"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      background: "var(--mn-navy)",
                    }}
                  >
                    <div className="h-6 w-full flex justify-center mt-2">
                      <div className="w-10 h-3 rounded-full bg-black/50" />
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-3">
                      <div className="w-full h-16 rounded-lg" style={{ background: tpl.color, opacity: 0.8 }} />
                      <div className="w-2/3 h-4 rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
                      <div className="w-full h-8 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                      <div className="w-full h-8 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                      
                      <div className="mt-auto self-center text-xs font-bold" style={{ color: tpl.color }}>
                        {tpl.arabic}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-medium" style={{ color: "var(--mn-surface)" }}>
                  {tpl.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Built This Week */}
        <div>
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--mn-text-dim)" }}
          >
            Built by GCC founders this week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {builtThisWeek.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl flex gap-4 items-center group cursor-pointer transition-colors hover:bg-[rgba(255,255,255,0.03)]"
                style={{
                  border: "1px solid var(--mn-border)",
                  background: "rgba(255,255,255,0.01)",
                }}
              >
                {/* Mini Phone Mockup */}
                <div
                  className="w-12 h-20 rounded-md border-2 relative overflow-hidden flex-shrink-0"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    background: "var(--mn-navy)",
                  }}
                >
                  <div className="w-full h-8 mt-2" style={{ background: item.color, opacity: 0.6 }} />
                </div>
                <div>
                  <div className="font-medium mb-1" style={{ color: "var(--mn-surface)" }}>
                    {item.app}
                  </div>
                  <div className="text-xs mb-2" style={{ color: "var(--mn-text-muted)" }}>
                    {item.founder}
                  </div>
                  <div
                    className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--mn-cyan)" }}
                  >
                    View live app &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
