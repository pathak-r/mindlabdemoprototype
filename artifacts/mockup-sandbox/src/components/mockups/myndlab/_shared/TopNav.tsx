export function TopNav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "64px",
        borderBottom: "1px solid rgba(248,249,252,0.07)",
        background: "rgba(10,15,30,0.95)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              color: "rgba(248,249,252,0.65)",
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
            border: "1px solid rgba(248,249,252,0.2)",
            color: "rgba(248,249,252,0.8)",
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
            background: "#00D4FF",
            border: "none",
            color: "#0A0F1E",
            padding: "8px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Start building free
        </button>
      </div>
    </nav>
  );
}
