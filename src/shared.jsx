import React from "react";

// ── UCC Brand Palette ────────────────────────────────────────────────────────
export const C = {
  navy:    "#1D2E4E",
  orange:  "#F58220",
  teal:    "#00B7C3",
  green:   "#8CC63F",
  red:     "#BA1A1A",
  bg:      "#F4F4F4",
  surface: "#FFFFFF",
  border:  "#E2E8F0",
  text:    "#0F172A",
  sub:     "#44474E",
  muted:   "#75777F",
  chip:    "#EEEEEE",
};

// ── body-sm: Inter 14px / weight 400 / lineHeight 20px ──────────────────────
export const TICK       = { fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400 };
export const NOTE_STYLE = { fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "20px" };

// ── Dataset ──────────────────────────────────────────────────────────────────
export const KPI = { total: 1500, avgStress: 6.24, avgSleep: 6.97, avgProductivity: 69.84, avgPhysical: 5.01 };

export const stressVsProd = [
  { stress: "1", avg_prod: 71.1 }, { stress: "2", avg_prod: 67.6 },
  { stress: "3", avg_prod: 69.4 }, { stress: "4", avg_prod: 68.2 },
  { stress: "5", avg_prod: 72.2 }, { stress: "6", avg_prod: 68.7 },
  { stress: "7", avg_prod: 71.0 }, { stress: "8", avg_prod: 71.7 },
  { stress: "9", avg_prod: 69.4 }, { stress: "10", avg_prod: 68.9 },
];

export const sleepVsProd = [
  { sleep: "4-5h", avg_prod: 59.9 }, { sleep: "5-6h",   avg_prod: 64.8 },
  { sleep: "6-7h", avg_prod: 67.9 }, { sleep: "7-8h",   avg_prod: 71.5 },
  { sleep: "8-9h", avg_prod: 76.3 }, { sleep: "9-10h",  avg_prod: 79.2 },
  { sleep: "10-11h", avg_prod: 80.1 },
];

export const industryBurnout = [
  { industry: "Manufactura", High: 103, Medium: 54, Low: 95  },
  { industry: "Finanzas",    High: 106, Medium: 55, Low: 91  },
  { industry: "Tech",        High: 87,  Medium: 40, Low: 104 },
  { industry: "Educacion",   High: 107, Medium: 49, Low: 108 },
  { industry: "Salud",       High: 91,  Medium: 47, Low: 103 },
  { industry: "Retail",      High: 100, Medium: 50, Low: 110 },
];

export const workModeProd = [
  { mode: "Remoto",     avg_prod: 70.0 },
  { mode: "Hibrido",    avg_prod: 69.9 },
  { mode: "Presencial", avg_prod: 69.6 },
];

export const mhSupportBurnout = [
  { support: "Con apoyo", High: 308, Medium: 164, Low: 299 },
  { support: "Sin apoyo", High: 286, Medium: 131, Low: 312 },
];

export const countryProd = [
  { country: "Australia", avg_prod: 71.3 }, { country: "Francia",  avg_prod: 70.5 },
  { country: "Alemania",  avg_prod: 70.1 }, { country: "India",    avg_prod: 70.1 },
  { country: "Canada",    avg_prod: 70.0 }, { country: "Singapur", avg_prod: 69.5 },
  { country: "UK",        avg_prod: 69.5 }, { country: "USA",      avg_prod: 69.5 },
  { country: "Japon",     avg_prod: 69.1 }, { country: "Brasil",   avg_prod: 68.9 },
];

export const workHoursProd = [
  { hours: "<35h",   avg_prod: 71.9 }, { hours: "35-45h", avg_prod: 70.7 },
  { hours: "45-55h", avg_prod: 69.3 }, { hours: "55h+",   avg_prod: 68.5 },
];

export const radarData = [
  { variable: "Sueno",         value: 63 },
  { variable: "Productividad", value: 70 },
  { variable: "Act. Fisica",   value: 50 },
  { variable: "Bajo Estres",   value: 38 },
  { variable: "Horas Opt.",    value: 70 },
];

export const scatterLow = [
  {x:1,y:79},{x:3,y:97},{x:6,y:80},{x:3,y:94},{x:2,y:75},{x:2,y:64},
  {x:4,y:50},{x:5,y:71},{x:2,y:92},{x:1,y:100},{x:4,y:62},{x:1,y:83},
  {x:6,y:52},{x:3,y:94},{x:5,y:53},{x:4,y:94},{x:1,y:87},{x:1,y:73},
  {x:5,y:73},{x:2,y:91},{x:1,y:49},{x:7,y:71},{x:2,y:75},{x:7,y:65},
  {x:8,y:72},{x:8,y:81},{x:4,y:89},{x:3,y:59},{x:7,y:78},{x:1,y:100},
];
export const scatterMed = [
  {x:4,y:58},{x:8,y:98},{x:6,y:78},{x:5,y:84},{x:5,y:76},{x:7,y:69},
  {x:7,y:57},{x:5,y:65},{x:8,y:43},{x:5,y:78},{x:8,y:75},{x:7,y:79},
  {x:6,y:47},{x:6,y:73},{x:7,y:84},{x:5,y:40},{x:4,y:75},{x:6,y:57},
];
export const scatterHigh = [
  {x:9,y:75},{x:10,y:62},{x:9,y:98},{x:10,y:92},{x:9,y:88},{x:9,y:89},
  {x:10,y:43},{x:10,y:74},{x:10,y:58},{x:10,y:100},{x:10,y:98},{x:8,y:82},
  {x:10,y:79},{x:8,y:47},{x:10,y:40},{x:10,y:89},{x:9,y:76},{x:10,y:44},
  {x:10,y:46},{x:6,y:87},{x:10,y:62},{x:10,y:68},{x:10,y:59},{x:10,y:67},
  {x:10,y:75},{x:10,y:53},{x:10,y:60},{x:10,y:55},{x:10,y:78},{x:10,y:87},
];

// ── Shared UI components ─────────────────────────────────────────────────────
export function TT({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 8, padding: "10px 14px", ...NOTE_STYLE, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
      {label != null && <p style={{ color: C.sub, fontWeight: 600, margin: "0 0 4px" }}>{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || C.navy, margin: "2px 0" }}>
          {p.name}: <strong>{typeof p.value === "number" ? p.value.toFixed(1) : p.value}</strong>
        </p>
      ))}
    </div>
  );
}

export function ScatterTT({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0] && payload[0].payload;
  if (!d) return null;
  return (
    <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 8, padding: "10px 14px", ...NOTE_STYLE, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
      <p style={{ color: C.sub, margin: "2px 0" }}>Estres: <strong style={{ color: C.text }}>{d.x}</strong></p>
      <p style={{ color: C.sub, margin: "2px 0" }}>Productividad: <strong style={{ color: C.text }}>{d.y}</strong></p>
    </div>
  );
}

export function KpiCard({ label, value, unit, sub, color }) {
  return (
    <div style={{
      background: C.surface, border: "1px solid " + C.border,
      borderTop: "3px solid " + color, borderRadius: 4,
      padding: "18px 20px", flex: 1, minWidth: 140,
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    }}>
      <p style={{ color: C.muted, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, lineHeight: "16px", margin: "0 0 8px", fontFamily: "Inter, sans-serif" }}>{label}</p>
      <p style={{ color: C.navy, fontSize: 28, fontWeight: 800, lineHeight: 1, margin: "0 0 6px", fontFamily: "Roboto, sans-serif", letterSpacing: "-0.02em" }}>
        {value}<span style={{ fontSize: 14, color: C.muted, marginLeft: 4, fontWeight: 400, fontFamily: "Roboto, sans-serif" }}>{unit}</span>
      </p>
      {sub && <p style={{ color: C.muted, fontSize: 14, fontWeight: 400, lineHeight: "20px", margin: 0, fontFamily: "Inter, sans-serif" }}>{sub}</p>}
    </div>
  );
}

export function ChartCard({ title, note, children, wide }) {
  return (
    <div style={{
      background: C.surface, border: "1px solid " + C.border, borderRadius: 4,
      padding: "18px 18px 14px", gridColumn: wide ? "1 / -1" : undefined,
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    }}>
      <p style={{ color: C.navy, fontSize: 20, fontWeight: 700, margin: "0 0 14px", fontFamily: "Inter, sans-serif" }}>{title}</p>
      {children}
      {note && (
        <p style={{ ...NOTE_STYLE, color: C.sub, margin: "12px 0 0", padding: "9px 12px", background: "#F8FAFC", borderRadius: 4, borderLeft: "3px solid " + C.orange }}>
          {note}
        </p>
      )}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 style={{
      color: C.sub, fontSize: 12, fontWeight: 600, margin: "0 0 14px",
      paddingBottom: 8, borderBottom: "1px solid " + C.border,
      fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: "16px",
    }}>{children}</h2>
  );
}