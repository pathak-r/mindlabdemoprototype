import { ReactNode } from "react";

const navItems = [
  { icon: "⊞", label: "My Apps", active: false },
  { icon: "⊡", label: "Templates", active: false },
  { icon: "◈", label: "Community", active: false },
  { icon: "⚙", label: "Settings", active: false },
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
        background: "#0A0F1E",
        fontFamily: "var(--font-main)",
        overflow: "hidden",
      }}
    >
      <aside
        style={{
          width: "220px",
          flexShrink: 0,
          background: "#0d1526",
          borderRight: "1px solid rgba(248,249,252,0.07)",
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
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00D4FF, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px" }}>M</span>
          </div>
          <span
            style={{
              color: "#F8F9FC",
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
                  padding: "10px 12px",
                  borderRadius: "8px",
                  marginBottom: "2px",
                  background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    color: isActive ? "#00D4FF" : "rgba(248,249,252,0.45)",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#F8F9FC" : "rgba(248,249,252,0.55)",
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
            borderTop: "1px solid rgba(248,249,252,0.07)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #00D4FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "12px" }}>R</span>
          </div>
          <div>
            <div
              style={{
                color: "#F8F9FC",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Rohit Sharma
            </div>
            <div
              style={{
                color: "rgba(248,249,252,0.4)",
                fontSize: "11px",
              }}
            >
              Free plan
            </div>
          </div>
        </div>
      </aside>

      <main
        style={{
          flex: 1,
          overflow: "auto",
          background: "#0A0F1E",
        }}
      >
        {children}
      </main>
    </div>
  );
}
