import React, { useState, useEffect } from "react";
import "../_group.css";
import { StarMark } from "./TopNav";
import { DOC, DOC_TITLE, type Block } from "./strategyDocData";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";

const PDF_HREF = `${import.meta.env.BASE_URL}myndlab-strategy.pdf`;

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "h3":
      return (
        <h3 style={{ fontFamily: "var(--mn-display)", fontSize: "21px", fontWeight: 600, letterSpacing: "-0.3px", color: "var(--mn-text)", margin: "30px 0 12px" }}>
          {b.text}
        </h3>
      );
    case "p":
      return <p style={{ fontSize: "15.5px", lineHeight: 1.7, color: "#33433F", margin: "0 0 14px" }}>{b.text}</p>;
    case "ul":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {b.items.map((it, i) => (
            <li key={i} style={{ display: "flex", gap: "11px", fontSize: "15.5px", lineHeight: 1.6, color: "#33433F" }}>
              <span style={{ color: "var(--mn-brass)", flexShrink: 0, fontWeight: 700 }}>—</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div style={{ background: "var(--mn-gold-light)", borderLeft: "3px solid var(--mn-brass)", borderRadius: "0 10px 10px 0", padding: "13px 16px", margin: "0 0 16px", fontSize: "14.5px", lineHeight: 1.6, color: "var(--mn-text)", fontStyle: "italic" }}>
          {b.text}
        </div>
      );
    case "quote":
      return (
        <div style={{ background: "var(--mn-teal-light)", borderLeft: "3px solid var(--mn-teal)", borderRadius: "0 10px 10px 0", padding: "15px 18px", margin: "6px 0 18px", fontSize: "16px", lineHeight: 1.55, color: "var(--mn-text)", fontWeight: 600 }}>
          {b.text}
        </div>
      );
    case "table":
      return (
        <div style={{ overflowX: "auto", margin: "4px 0 20px", border: "1px solid var(--mn-border)", borderRadius: "12px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: b.head.length > 2 ? "560px" : "auto" }}>
            <thead>
              <tr style={{ background: "var(--mn-teal-light)" }}>
                {b.head.map((h, i) => (
                  <th key={i} style={{ textAlign: "left", padding: "11px 14px", fontFamily: "var(--mn-mono)", fontSize: "10.5px", letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--mn-teal)", fontWeight: 600, borderBottom: "1px solid var(--mn-border)", whiteSpace: "nowrap" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 ? "transparent" : "rgba(255,255,255,0.5)" }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: "11px 14px",
                      fontSize: "13.5px",
                      lineHeight: 1.5,
                      color: ci === 0 ? "var(--mn-text)" : "#46554F",
                      fontWeight: ci === 0 ? 600 : 400,
                      borderBottom: ri < b.rows.length - 1 ? "1px solid var(--mn-border)" : "none",
                      borderLeft: ci > 0 ? "1px solid var(--mn-border)" : "none",
                      verticalAlign: "top",
                      minWidth: ci === 0 ? "120px" : undefined,
                    }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function StrategyDoc({ onClose }: { onClose: () => void }) {
  const [page, setPage] = useState(0);
  const total = DOC.length;
  const p = DOC[page];
  const atStart = page === 0;
  const atEnd = page === total - 1;

  const prev = () => setPage((n) => Math.max(0, n - 1));
  const next = () => setPage((n) => Math.min(total - 1, n + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(22,48,44,0.48)",
        backdropFilter: "blur(3px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px 20px",
        fontFamily: "var(--mn-sans)",
        animation: "mn-doc-fade .2s ease",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mn-doc-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mn-doc-page { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      `}} />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "860px", height: "min(92vh, 980px)",
          background: "var(--mn-bg-alt)",
          borderRadius: "18px",
          boxShadow: "0 30px 80px rgba(22,48,44,0.35)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          border: "1px solid var(--mn-border)",
        }}
      >
        {/* Header */}
        <div style={{
          flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 24px", borderBottom: "1px solid var(--mn-border)", background: "var(--mn-surface)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px", minWidth: 0 }}>
            <StarMark size={24} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--mn-mono)", fontSize: "10px", letterSpacing: "1.8px", color: "var(--mn-teal)", fontWeight: 500 }}>
                FULL STRATEGY
              </div>
              <div style={{ fontFamily: "var(--mn-display)", fontSize: "15px", fontWeight: 600, color: "var(--mn-text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {DOC_TITLE}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <a
              href={PDF_HREF}
              download
              style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "var(--mn-teal)", color: "#fff", textDecoration: "none",
                border: "none", borderRadius: "9px", padding: "8px 14px",
                fontSize: "13px", fontWeight: 600, fontFamily: "var(--mn-sans)", cursor: "pointer",
              }}
            >
              <Download size={14} /> PDF
            </a>
            <button onClick={onClose} title="Close" style={{
              width: "34px", height: "34px", borderRadius: "9px", border: "1px solid var(--mn-border)",
              background: "var(--mn-surface)", color: "var(--mn-text-muted)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Page body */}
        <div key={page} style={{ flex: 1, overflowY: "auto", padding: "32px 40px 40px", animation: "mn-doc-page .28s ease" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--mn-mono)", fontSize: "11px", letterSpacing: "1.6px", color: "var(--mn-text-dim)", marginBottom: "12px" }}>
              {p.part === "00" ? "" : `PART ${p.part} · `}{p.tag}
            </div>
            <h2 style={{ fontFamily: "var(--mn-display)", fontSize: "30px", fontWeight: 600, letterSpacing: "-0.7px", lineHeight: 1.15, color: "var(--mn-text)", margin: "0 0 8px" }}>
              {p.title}
            </h2>
            {p.meta && (
              <div style={{ fontFamily: "var(--mn-mono)", fontSize: "11.5px", color: "var(--mn-text-muted)", marginBottom: "26px" }}>
                {p.meta}
              </div>
            )}
            {!p.meta && <div style={{ height: "18px" }} />}
            {p.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div style={{
          flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 24px", borderTop: "1px solid var(--mn-border)", background: "var(--mn-surface)",
        }}>
          <button onClick={prev} disabled={atStart} style={navBtn(atStart)}>
            <ChevronLeft size={16} /> Back
          </button>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", minWidth: 0 }}>
            <div style={{ display: "flex", gap: "5px" }}>
              {DOC.map((_, i) => (
                <button key={i} onClick={() => setPage(i)} style={{
                  width: i === page ? "20px" : "6px", height: "6px", borderRadius: "3px",
                  background: i === page ? "var(--mn-teal)" : i < page ? "var(--mn-teal-mid)" : "var(--mn-border)",
                  border: "none", padding: 0, cursor: "pointer", transition: "all .2s",
                }} />
              ))}
            </div>
            <span style={{ fontFamily: "var(--mn-mono)", fontSize: "10.5px", color: "var(--mn-text-dim)", whiteSpace: "nowrap" }}>
              {String(page + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {p.tag}
            </span>
          </div>
          <button onClick={next} disabled={atEnd} style={navBtn(atEnd)}>
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function navBtn(disabled: boolean): React.CSSProperties {
  return {
    display: "flex", alignItems: "center", gap: "5px",
    background: disabled ? "transparent" : "var(--mn-surface)",
    border: "1px solid var(--mn-border)",
    color: disabled ? "var(--mn-border-strong)" : "var(--mn-text)",
    borderRadius: "9px", padding: "8px 13px", fontSize: "13px", fontWeight: 500,
    fontFamily: "var(--mn-sans)", cursor: disabled ? "default" : "pointer", transition: "all .15s",
  };
}
