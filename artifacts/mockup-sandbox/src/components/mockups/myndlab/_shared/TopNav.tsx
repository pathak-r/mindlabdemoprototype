import "../_group.css";

export function TopNav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "64px",
        borderBottom: "1px solid #E2E8F0",
        background: "rgba(250,251,255,0.95)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #0066FF, #FF9F0A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,102,255,0.3)",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "14px" }}>M</span>
        </div>
        <span
          style={{
            color: "#0F172A",
            fontWeight: 700,
            fontSize: "17px",
            letterSpacing: "-0.3px",
          }}
        >
          Myndlab
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {["Templates", "How it works", "Pricing"].map((item) => (
          <span
            key={item}
            style={{
              color: "#64748B",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          style={{
            background: "transparent",
            border: "1px solid #E2E8F0",
            color: "#0F172A",
            padding: "7px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
        <button
          style={{
            background: "#0066FF",
            border: "none",
            color: "#FFFFFF",
            padding: "8px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,102,255,0.3)",
          }}
        >
          Start building free
        </button>
      </div>
    </nav>
  );
}
