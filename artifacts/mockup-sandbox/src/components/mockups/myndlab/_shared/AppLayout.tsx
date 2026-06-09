import { ReactNode } from "react";
import "../_group.css";

const navItems = [
  { icon: "⊞", label: "My Apps" },
  { icon: "⊡", label: "Templates" },
  { icon: "◈", label: "Community" },
  { icon: "⚙", label: "Settings" },
];

export function AppLayout({
  children,
  activeItem = "My Apps",
}: {
  children: ReactNode;
  activeItem?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#FAFBFF",
        fontFamily: "var(--font-main)",
        overflow: "hidden",
      }}
    >
      <aside
        style={{
          width: "220px",
          flexShrink: 0,
          background: "#FFFFFF",
          borderRight: "1px solid #E2E8F0",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0",
        }}
      >
        <div
          style={{
            padding: "0 20px 32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #0066FF, #FF9F0A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,102,255,0.25)",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "14px" }}>M</span>
          </div>
          <span
            style={{
              color: "#0F172A",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "-0.3px",
            }}
          >
            Myndlab
          </span>
        </div>

        <nav style={{ flex: 1, padding: "0 12px" }}>
          {navItems.map((item) => {
            const isActive = item.label === activeItem;
            return (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  marginBottom: "2px",
                  background: isActive ? "#EEF4FF" : "transparent",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    color: isActive ? "#0066FF" : "#94A3B8",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#0066FF" : "#64748B",
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>

        <div
          style={{
            padding: "16px 20px",
            borderTop: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0066FF, #FF9F0A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "13px" }}>R</span>
          </div>
          <div>
            <div style={{ color: "#0F172A", fontSize: "13px", fontWeight: 600 }}>
              Rohit Pathak
            </div>
            <div style={{ color: "#94A3B8", fontSize: "11px" }}>
              Free plan
            </div>
          </div>
        </div>
      </aside>

      <main
        style={{
          flex: 1,
          overflow: "auto",
          background: "#FAFBFF",
        }}
      >
        {children}
      </main>
    </div>
  );
}
