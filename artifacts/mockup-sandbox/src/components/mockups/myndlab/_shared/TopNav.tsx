import "../_group.css";

/* Girih 8-point star — the signature mark, carried across the whole product. */
export function StarMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <polygon
        points="50,4 61,28 86,18 76,43 96,50 76,57 86,82 61,72 50,96 39,72 14,82 24,57 4,50 24,43 14,18 39,28"
        fill="var(--mn-teal)"
      />
      <circle cx="50" cy="50" r="10" fill="var(--mn-bg)" />
      <circle cx="50" cy="50" r="4.5" fill="var(--mn-brass)" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <StarMark size={26} />
      <span
        style={{
          fontFamily: "var(--mn-sans)",
          color: "var(--mn-text)",
          fontWeight: 600,
          fontSize: "18px",
          letterSpacing: "-0.4px",
        }}
      >
        Mynd<span style={{ color: "var(--mn-teal)" }}>lab</span>
      </span>
    </div>
  );
}

export function TopNav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "68px",
        borderBottom: "1px solid var(--mn-border)",
        background: "rgba(251,246,238,0.85)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Wordmark />

      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        {["Templates", "How it works", "Pricing"].map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "var(--mn-mono)",
              color: "var(--mn-text-muted)",
              fontSize: "12.5px",
              fontWeight: 400,
              letterSpacing: "0.2px",
              cursor: "pointer",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "var(--mn-text)",
            padding: "8px 6px",
            fontFamily: "var(--mn-sans)",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
        <button
          style={{
            background: "var(--mn-teal)",
            border: "none",
            color: "#FFFFFF",
            padding: "9px 18px",
            borderRadius: "9px",
            fontFamily: "var(--mn-sans)",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "var(--mn-shadow-sm)",
          }}
        >
          Start building
        </button>
      </div>
    </nav>
  );
}
