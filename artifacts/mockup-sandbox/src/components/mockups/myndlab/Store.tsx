import { useState } from "react";
import "./_group.css";
import { StarMark } from "./_shared/TopNav";
import {
  Search,
  ChevronDown,
  ArrowDownToLine,
  CalendarCheck,
  Scissors,
  ShoppingBag,
  Dumbbell,
  Car,
  Ticket,
  GraduationCap,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* Screen 10 — a deliberately basic PWA store / directory.
   Where a published app goes for distribution: a public, GCC-native directory,
   browsable by category and country. The doc's Month-6 network-effects asset,
   shown in its early, simple form (no ratings/reviews machinery — just discovery). */

interface App {
  name: string;
  cat: string;
  cc: string;
  installs: number;
  Icon: LucideIcon;
}

const CATEGORIES = ["All", "Booking", "Food & Delivery", "Health", "Retail", "Education", "Events"];

const APPS: App[] = [
  { name: "Riyadh Salon", cat: "Beauty", cc: "SA", installs: 340, Icon: Scissors },
  { name: "Abu Dhabi Grocery", cat: "Food & Delivery", cc: "AE", installs: 1280, Icon: ShoppingBag },
  { name: "Cairo Fitness", cat: "Health", cc: "EG", installs: 560, Icon: Dumbbell },
  { name: "Kuwait Car Rentals", cat: "Transport", cc: "KW", installs: 210, Icon: Car },
  { name: "Doha Events", cat: "Events", cc: "QA", installs: 430, Icon: Ticket },
  { name: "Sharjah Tutoring", cat: "Education", cc: "AE", installs: 180, Icon: GraduationCap },
  { name: "Muscat Eats", cat: "Food & Delivery", cc: "OM", installs: 95, Icon: UtensilsCrossed },
  { name: "Manama Clinic Booking", cat: "Health", cc: "BH", installs: 140, Icon: CalendarCheck },
];

const fmt = (n: number) => (n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n));

export function Store() {
  const [active, setActive] = useState("All");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--mn-bg)", fontFamily: "var(--mn-sans)", display: "flex", flexDirection: "column" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .st-card:hover { transform: translateY(-3px); box-shadow: var(--mn-shadow-md) !important; }
        .st-chip:hover { border-color: var(--mn-border-strong) !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Internal nav */}
      <nav style={{ height: "60px", background: "#FFFFFF", borderBottom: "1px solid var(--mn-border)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", flexShrink: 0, boxShadow: "0 1px 3px rgba(22,48,44,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <StarMark size={26} />
          <span style={{ fontWeight: 600, fontSize: "18px", letterSpacing: "-0.4px", color: "var(--mn-text)" }}>Mynd<span style={{ color: "var(--mn-teal)" }}>lab</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button style={{ background: "none", border: "none", fontFamily: "var(--mn-mono)", color: "var(--mn-teal)", fontSize: "12.5px", fontWeight: 500, cursor: "pointer" }}>Discover</button>
          <button style={{ background: "none", border: "none", fontFamily: "var(--mn-mono)", color: "var(--mn-text-muted)", fontSize: "12.5px", cursor: "pointer" }}>My Apps</button>
          <button style={{ background: "none", border: "none", fontFamily: "var(--mn-mono)", color: "var(--mn-text-muted)", fontSize: "12.5px", cursor: "pointer" }}>Templates</button>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--mn-teal)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: "13px" }}>R</span>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1, padding: "40px 48px 80px", overflowY: "auto", maxWidth: "1040px", margin: "0 auto", width: "100%" }}>
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontFamily: "var(--mn-mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--mn-teal)", marginBottom: "10px" }}>
            THE MYNDLAB STORE
          </div>
          <h1 style={{ fontFamily: "var(--mn-display)", fontSize: "34px", fontWeight: 600, letterSpacing: "-0.8px", margin: "0 0 6px", color: "var(--mn-text)" }}>
            Discover
          </h1>
          <p style={{ fontSize: "15px", color: "var(--mn-text-muted)", margin: 0 }}>
            Apps built by GCC founders — browse by category and country.
          </p>
        </div>

        {/* Your app is now listed */}
        <div style={{
          background: "var(--mn-teal-light)", border: "1px solid var(--mn-teal-mid)", borderRadius: "16px",
          padding: "18px 20px", marginBottom: "30px", display: "flex", alignItems: "center", gap: "16px",
        }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "13px", background: "#FFFFFF", border: "1px solid rgba(15,93,84,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--mn-arabic)", fontSize: "20px", fontWeight: 700, color: "var(--mn-teal)" }}>احجز</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--mn-mono)", fontSize: "10px", letterSpacing: "1.2px", color: "var(--mn-teal)", fontWeight: 600, marginBottom: "4px" }}>
              ● JUST LISTED — YOUR APP
            </div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--mn-text)" }}>Dubai PT Booking</div>
            <div style={{ fontFamily: "var(--mn-mono)", fontSize: "11.5px", color: "var(--mn-text-muted)", marginTop: "2px" }}>
              Booking · AE · 12 installs
            </div>
          </div>
          <button style={{ background: "var(--mn-teal)", color: "#fff", border: "none", borderRadius: "10px", padding: "10px 18px", fontSize: "14px", fontWeight: 600, fontFamily: "var(--mn-sans)", cursor: "pointer", flexShrink: 0 }}>
            View listing
          </button>
        </div>

        {/* Search + country */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "240px", display: "flex", alignItems: "center", gap: "10px", background: "#FFFFFF", border: "1px solid var(--mn-border)", borderRadius: "11px", padding: "10px 14px" }}>
            <Search size={16} color="var(--mn-text-dim)" />
            <span style={{ fontFamily: "var(--mn-mono)", fontSize: "13px", color: "var(--mn-text-dim)" }}>Search apps…</span>
          </div>
          <button className="st-chip" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#FFFFFF", border: "1px solid var(--mn-border)", borderRadius: "11px", padding: "10px 14px", fontFamily: "var(--mn-mono)", fontSize: "12.5px", color: "var(--mn-text)", cursor: "pointer" }}>
            All GCC <ChevronDown size={14} color="var(--mn-text-dim)" />
          </button>
        </div>

        {/* Category chips */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "26px", flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => {
            const on = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="st-chip"
                style={{
                  padding: "7px 14px", borderRadius: "999px",
                  border: `1px solid ${on ? "var(--mn-teal)" : "var(--mn-border)"}`,
                  background: on ? "var(--mn-teal)" : "#FFFFFF",
                  color: on ? "#fff" : "var(--mn-text-muted)",
                  fontFamily: "var(--mn-mono)", fontSize: "12px", fontWeight: 500, cursor: "pointer",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* App grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))", gap: "16px" }}>
          {APPS.map((a) => (
            <div key={a.name} className="st-card" style={{
              background: "#FFFFFF", border: "1px solid var(--mn-border)", borderRadius: "16px",
              padding: "18px", boxShadow: "var(--mn-shadow-sm)", transition: "all 0.2s", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: "14px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "var(--mn-teal-light)", border: "1px solid rgba(15,93,84,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <a.Icon size={22} color="var(--mn-teal)" strokeWidth={1.8} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "14.5px", fontWeight: 700, color: "var(--mn-text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</div>
                  <div style={{ fontFamily: "var(--mn-mono)", fontSize: "11px", color: "var(--mn-text-dim)", marginTop: "2px" }}>{a.cat} · {a.cc}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "var(--mn-mono)", fontSize: "11.5px", color: "var(--mn-text-muted)" }}>
                  <ArrowDownToLine size={12} /> {fmt(a.installs)} installs
                </div>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--mn-teal)" }}>Open</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Store;
