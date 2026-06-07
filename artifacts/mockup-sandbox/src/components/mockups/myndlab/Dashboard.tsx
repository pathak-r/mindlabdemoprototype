import React, { useState } from "react";
import { AppLayout } from "./_shared/AppLayout";
import "./_group.css";

const templates = [
  {
    title: "Food Delivery",
    arabic: "قائمة الطعام",
    color: "#FF9F0A",
  },
  {
    title: "Booking & Appointments",
    arabic: "احجز الآن",
    color: "#0066FF",
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
    color: "#FF9F0A",
  },
  {
    app: "Oasis Properties",
    founder: "Omar · Riyadh",
    color: "#0066FF",
  },
  {
    app: "Care Clinic",
    founder: "Sara · Doha",
    color: "#10B981",
  },
];

export function Dashboard() {
  const [isFocused, setIsFocused] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <AppLayout activeItem="My Apps">
      <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto", width: "100%", fontFamily: "var(--font-main)", paddingBottom: "100px" }}>
        <style dangerouslySetInnerHTML={{
          __html: `
            .dashboard-card-hover {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .dashboard-card-hover:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 32px rgba(0,0,0,0.12);
            }
            .dashboard-btn-primary {
              transition: all 0.2s ease;
            }
            .dashboard-btn-primary:hover {
              background: #0052CC !important;
              box-shadow: 0 4px 12px rgba(0,102,255,0.3) !important;
            }
            .dashboard-text-link {
              transition: color 0.2s ease;
            }
            .dashboard-text-link:hover {
              color: #0052CC !important;
            }
          `
        }} />

        {/* Welcome Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #EEF4FF 0%, #FFF7E6 100%)",
            border: "1px solid #E2E8F0",
            borderRadius: "20px",
            padding: "40px",
            marginBottom: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#0F172A",
                margin: "0 0 12px 0",
                letterSpacing: "-0.02em",
              }}
            >
              Welcome, Rohit. Let's build your booking app.
            </h1>
            <p style={{ fontSize: "16px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
              Start below, pick a template, or describe your idea and we'll do the rest.
            </p>
          </div>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #0066FF, #FF9F0A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(0,102,255,0.25)",
              position: "relative",
              zIndex: 2,
              flexShrink: 0
            }}
          >
            <span style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "28px", letterSpacing: "-1px" }}>M</span>
          </div>
        </div>

        {/* Prompt Input */}
        <div style={{ marginBottom: "64px", maxWidth: "800px", margin: "0 auto 64px auto" }}>
          <div
            style={{
              background: "#FFFFFF",
              border: `1px solid ${isFocused ? "#0066FF" : "#E2E8F0"}`,
              borderRadius: "24px",
              padding: "8px",
              boxShadow: isFocused ? "0 0 0 4px rgba(0,102,255,0.1), 0 4px 16px rgba(0,0,0,0.08)" : "0 4px 16px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <textarea
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                resize: "none",
                padding: "24px 24px 12px 24px",
                fontSize: "18px",
                color: "#0F172A",
                minHeight: "140px",
                fontFamily: "inherit",
              }}
              placeholder="Describe your app in Arabic or English..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 24px 16px 24px" }}>
              <div style={{ display: "flex", gap: "24px" }}>
                <button
                  className="dashboard-text-link"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#0066FF",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                  Use voice instead
                </button>
                <button
                  className="dashboard-text-link"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#0066FF",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  Pick a template
                </button>
              </div>
              <button
                className="dashboard-btn-primary"
                style={{
                  background: "#0066FF",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "12px 32px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(0,102,255,0.25)",
                }}
              >
                Build it &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 800,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "24px",
            }}
          >
            Or start from a template
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {templates.map((tpl, i) => (
              <div
                key={i}
                className="dashboard-card-hover"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    borderRadius: "16px",
                    background: "#F1F5F9",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  }}
                >
                  {/* Phone Mockup */}
                  <div
                    style={{
                      width: "120px",
                      height: "240px",
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      border: "6px solid #CBD5E1",
                      marginTop: "40px", /* peeking from bottom */
                      display: "flex",
                      flexDirection: "column",
                      padding: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                  >
                    <div style={{ width: "100%", height: "40px", borderRadius: "8px", background: tpl.color, opacity: 0.1, marginBottom: "12px" }} />
                    <div style={{ width: "60%", height: "8px", borderRadius: "4px", background: "#E2E8F0", marginBottom: "8px" }} />
                    <div style={{ width: "80%", height: "8px", borderRadius: "4px", background: "#E2E8F0", marginBottom: "auto" }} />
                    
                    <div style={{ 
                      color: tpl.color, 
                      fontWeight: 800, 
                      fontSize: "14px", 
                      textAlign: "center",
                      marginTop: "16px"
                    }}>
                      {tpl.arabic}
                    </div>
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "18px", marginBottom: "8px" }}>
                  {tpl.title}
                </div>
                <div className="dashboard-text-link" style={{ color: "#0066FF", fontSize: "14px", fontWeight: 600 }}>
                  Use template &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Built This Week */}
        <div>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 800,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "24px",
            }}
          >
            Built by GCC founders this week
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {builtThisWeek.map((item, i) => (
              <div
                key={i}
                className="dashboard-card-hover"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  cursor: "pointer"
                }}
              >
                {/* Mini Phone Mockup */}
                <div
                  style={{
                    width: "48px",
                    height: "72px",
                    borderRadius: "10px",
                    border: "3px solid #CBD5E1",
                    background: "#F1F5F9",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    padding: "4px",
                    alignItems: "center"
                  }}
                >
                  <div style={{ width: "100%", height: "20px", borderRadius: "4px", background: item.color, opacity: 0.15 }} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "16px", marginBottom: "4px" }}>
                    {item.app}
                  </div>
                  <div style={{ color: "#64748B", fontSize: "13px", marginBottom: "8px" }}>
                    {item.founder}
                  </div>
                  <div className="dashboard-text-link" style={{ color: "#0066FF", fontSize: "13px", fontWeight: 600 }}>
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
