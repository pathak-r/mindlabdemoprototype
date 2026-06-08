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
        borderBottom: "1px solid #E8DDD0",
        background: "rgba(253,250,246,0.95)",
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
            background: "linear-gradient(135deg, #1A6B6B, #C8963E)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(26,107,107,0.3)",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "14px" }}>M</span>
        </div>
        <span
          style={{
            color: "#1C2B2B",
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
              color: "#6B7B7B",
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
            border: "1px solid #E8DDD0",
            color: "#1C2B2B",
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
            background: "#C8963E",
            border: "none",
            color: "#FFFFFF",
            padding: "8px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(200,150,62,0.35)",
          }}
        >
          Start building free
        </button>
      </div>
    </nav>
  );
}
