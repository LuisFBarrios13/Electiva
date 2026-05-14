import { useState } from "react";
import { C } from "./shared";
import Resumen       from "./Resumen";
import Demografia    from "./Demografia";
import EstresSueno   from "./EstresSueno";
import Burnout       from "./Burnout";
import Productividad from "./Productividad";
import Dispersion    from "./Dispersion";
import Conclusiones  from "./Conclusiones";

const NAV = [
  {
    label: "Resumen",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z"/></svg>,
  },
  {
    label: "Demografia",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
  },
  {
    label: "Estres y Sueño",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13.5V7h1.5z"/></svg>,
  },
  {
    label: "Burnout",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
  },
  {
    label: "Productividad",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.5 18.5l4-8 4 3 4-5.5 4.5 10.5H3.5z"/></svg>,
  },
  {
    label: "Dispersion",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="5" cy="18" r="1.5"/><circle cx="8" cy="12" r="1.5"/><circle cx="12" cy="15" r="1.5"/><circle cx="15" cy="8" r="1.5"/><circle cx="18" cy="11" r="1.5"/><circle cx="20" cy="5" r="1.5"/><circle cx="10" cy="6" r="1.5"/><circle cx="6" cy="7" r="1.5"/></svg>,
  },
  {
    label: "Conclusiones",
    icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>,
  },
];

const PAGE_TITLES = [
  "Resumen del Estado de la Investigacion",
  "Perfil Demografico del Dataset",
  "Estres y Calidad del Sueño",
  "Analisis de Burnout",
  "Productividad Laboral",
  "Dispersion: Estres vs. Productividad",
  "Conclusiones e Interpretacion",
];

const TABS = [Resumen, Demografia, EstresSueno, Burnout, Productividad, Dispersion, Conclusiones];

export default function App() {
  const [tab, setTab] = useState(0);
  const ActiveTab = TABS[tab];

  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      background: C.bg,
      position: "fixed", inset: 0,
      display: "flex", flexDirection: "column",
      overflow: "hidden",
    }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        height: 64, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", zIndex: 50,
      }}>
        {/* Left: main title */}
        <p style={{ color: C.navy, fontSize: 16, fontWeight: 700, margin: 0, fontFamily: "Inter,sans-serif" }}>
          Exploración de Salud Mental y Productividad
        </p>

        {/* Vertical divider */}
        <div style={{ width: 1, height: 32, background: C.border, flexShrink: 0, margin: "0 24px" }} />

        {/* Right: institution */}
        <div style={{ marginLeft: "auto" }}>
          <p style={{ color: C.navy, fontSize: 12, fontWeight: 600, margin: "0 0 2px", fontFamily: "Inter,sans-serif" }}>
            Universidad Cooperativa de Colombia
          </p>
          <p style={{ color: C.sub, fontSize: 12, margin: 0, fontFamily: "Inter,sans-serif" }}>
            Luis F. Barrios C. | Samuel A. Pacheco A.
          </p>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside style={{
          width: 280, flexShrink: 0,
          background: C.surface, borderRight: `1px solid ${C.border}`,
          display: "flex", flexDirection: "column",
          padding: "12px 12px", overflowY: "auto",
        }}>
          {/* Brand block */}
          <div style={{ padding: "8px 4px 16px", marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                background: C.navy, borderRadius: 8, width: 40, height: 40,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M19.8 18.4 14 10.67V6h1V4H9v2h1v4.67L4.2 18.4c-.19.26-.2.59-.03.87S4.69 20 5 20h14c.31 0 .6-.16.77-.43s.16-.61-.03-.87zM7.07 18l4.93-6.59V6h2v5.41L18.93 18H7.07z"/>
                </svg>
              </div>
              <div>
                <p style={{ color: C.navy, fontSize: 20, fontWeight: 600, margin: 0, lineHeight: "28px", fontFamily: "Inter,sans-serif" }}>
                  Factores de Salud
                </p>
                <p style={{ color: C.sub, fontSize: 14, fontWeight: 400, margin: 0, fontFamily: "Inter,sans-serif" }}>
                  Productividad 2024
                </p>
              </div>
            </div>
          </div>

          {/* Nav items */}
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
            {NAV.map((item, i) => {
              const active = tab === i;
              return (
                <button key={i} onClick={() => setTab(i)} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  width: "100%", textAlign: "left",
                  background: active ? C.chip : "transparent",
                  color: active ? C.orange : C.sub,
                  border: "none", borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: 16, fontWeight: active ? 700 : 600,
                  letterSpacing: "0.05em",
                  cursor: "pointer", fontFamily: "Inter,sans-serif",
                  transition: "background 0.15s, color 0.15s",
                }}>
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Dataset info */}
          <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 8, paddingTop: 12 }}>
            <div style={{ padding: "0 4px" }}>
              <p style={{ color: C.muted, fontSize: 14, fontWeight: 400, lineHeight: "20px", fontFamily: "Inter, sans-serif" }}>
                mental_health_productivity_2026.csv
              </p>
              <p style={{ color: C.muted, fontSize: 12, margin: 0, fontFamily: "Inter,sans-serif" }}>
                1,500 registros · 13 variables
              </p>
            </div>
          </div>
        </aside>

        {/* ── Main ─────────────────────────────────────────────────────────── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Page sub-header */}
          <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "20px 28px 18px", flexShrink: 0 }}>
            <h1 style={{ color: C.navy, fontSize: 32, fontWeight: 700, lineHeight: "40px", letterSpacing: "-0.02em", margin: "0 0 4px", fontFamily: "Inter, sans-serif" }}>
              {PAGE_TITLES[tab]}
            </h1>
            <p style={{ color: C.sub, fontSize: 16, fontWeight: 400, lineHeight: "24px", margin: 0, fontFamily: "Inter,sans-serif" }}>
              Datos consolidados del periodo: 06 de marzo 2026
            </p>
          </div>

          {/* Scrollable content */}
          <main style={{ flex: 1, overflowY: "auto", padding: "22px 28px 40px" }}>
            <ActiveTab />
          </main>

          {/* Footer */}
          <footer style={{
            borderTop: `1px solid ${C.border}`, background: C.surface,
            padding: "11px 28px", flexShrink: 0,
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6,
          }}>
            <span style={{ color: C.muted, fontSize: 14, fontWeight: 400, lineHeight: "20px", fontFamily: "Inter, sans-serif" }}>
              Dataset: mental_health_productivity_2026.csv · 1,500 registros · 13 variables
            </span>
            <span style={{ color: C.muted, fontSize: 14, fontWeight: 400, lineHeight: "20px", fontFamily: "Inter, sans-serif" }}>
              Electiva Especifica II · Universidad Cooperativa de Colombia · 2026
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}