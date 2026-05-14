import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ComposedChart, Scatter, Line, ReferenceLine
} from "recharts";
import { C, TICK, NOTE_STYLE, industryBurnout, mhSupportBurnout, workModeProd, TT, ChartCard, SectionTitle } from "./shared";

const pieConApoyo = mhSupportBurnout.find(d => d.support === "Con apoyo");
const pieSinApoyo = mhSupportBurnout.find(d => d.support === "Sin apoyo");

const toPie = (d) => [
  { name: "Alto",  value: d.High,   color: C.red    },
  { name: "Medio", value: d.Medium, color: C.orange },
  { name: "Bajo",  value: d.Low,    color: C.green  },
];

// NEW: burnout % alto por pais
const burnoutPais = [
  { pais: "Japan",     pct: 44 },
  { pais: "Brazil",    pct: 42 },
  { pais: "Canada",    pct: 41 },
  { pais: "USA",       pct: 41 },
  { pais: "France",    pct: 41 },
  { pais: "UK",        pct: 40 },
  { pais: "India",     pct: 38 },
  { pais: "Germany",   pct: 37 },
  { pais: "Singapore", pct: 36 },
  { pais: "Australia", pct: 35 },
].sort((a, b) => b.pct - a.pct);

const PieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central"
      style={{ fontSize: 11, fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
      {value}
    </text>
  );
};

export default function Burnout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>

      {/* Bar - burnout por industria */}
      <ChartCard title="Riesgo de burnout por industria" wide>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={industryBurnout} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="industry" tick={{ ...TICK, fill: C.sub }} />
            <YAxis tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
            <Bar dataKey="High"   name="Alto"  fill={C.red}    radius={[2, 2, 0, 0]} />
            <Bar dataKey="Medium" name="Medio" fill={C.orange} radius={[2, 2, 0, 0]} />
            <Bar dataKey="Low"    name="Bajo"  fill={C.green}  radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Pie doble - apoyo en salud mental */}
      <ChartCard
        title="Apoyo en salud mental vs. distribucion de burnout"
        note="La proporcion de burnout alto es similar con y sin apoyo, lo que sugiere que el apoyo actual no es suficiente para reducirlo."
      >
        <div style={{ display: "flex", gap: 0 }}>
          {[
            { label: "Con apoyo", data: toPie(pieConApoyo) },
            { label: "Sin apoyo", data: toPie(pieSinApoyo) },
          ].map(({ label, data }) => (
            <div key={label} style={{ flex: 1, textAlign: "center" }}>
              <p style={{ color: C.sub, ...NOTE_STYLE, margin: "0 0 4px", fontWeight: 600 }}>{label}</p>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={data} cx="50%" cy="50%" outerRadius={75} dataKey="value" labelLine={false} label={PieLabel}>
                    {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload || !payload.length) return null;
                      const d = payload[0].payload;
                      const total = data.reduce((a, b) => a + b.value, 0);
                      return (
                        <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 8, padding: "8px 12px", ...NOTE_STYLE, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                          <p style={{ color: C.navy, fontWeight: 700, margin: "0 0 2px" }}>{d.name}</p>
                          <p style={{ color: C.sub, margin: 0 }}>{d.value} ({((d.value / total) * 100).toFixed(1)}%)</p>
                        </div>
                      );
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 8 }}>
          {[["Alto", C.red], ["Medio", C.orange], ["Bajo", C.green]].map(([name, color]) => (
            <span key={name} style={{ display: "flex", alignItems: "center", gap: 6, ...NOTE_STYLE, color: C.sub }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
              {name}
            </span>
          ))}
        </div>
      </ChartCard>

      {/* NEW: Lollipop - burnout % por pais */}
      <ChartCard
        title="Porcentaje de burnout alto por pais"
        note="Japan lidera con 44% de burnout alto. Australia tiene el menor porcentaje (35%). La linea naranja marca el promedio global (39.4%)."
      >
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={burnoutPais} layout="vertical" margin={{ top: 15, right: 40, bottom: 5, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} horizontal={false} />
            <XAxis type="number" domain={[30, 48]} tick={{ ...TICK, fill: C.sub }}
              tickFormatter={(v) => v + "%"} />
            <YAxis dataKey="pais" type="category" width={72} tick={{ ...TICK, fill: C.sub }} interval={0} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || !payload.length) return null;
                const d = payload[0].payload;
                return (
                  <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 8, padding: "8px 12px", ...NOTE_STYLE, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    <p style={{ color: C.navy, fontWeight: 700, margin: "0 0 2px" }}>{d.pais}</p>
                    <p style={{ color: C.red, margin: 0 }}>Burnout alto: <strong>{d.pct}%</strong></p>
                  </div>
                );
              }}
            />
            <ReferenceLine x={39.4} stroke={C.orange} strokeDasharray="4 4"
              label={{ value: "Prom.", fill: C.orange, fontSize: 11, position: "top" }} />
            {/* Lollipop stem */}
            <Bar dataKey="pct" barSize={2} fill={C.border} background={{ fill: "transparent" }} />
            {/* Lollipop dot */}
            <Scatter dataKey="pct" fill={C.red} shape={(props) => {
              const { cx, cy } = props;
              return <circle cx={cx} cy={cy} r={7} fill={C.red} stroke={C.surface} strokeWidth={2} />;
            }} />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Bar horizontal - modalidad */}
      <ChartCard
        title="Modalidad de trabajo vs. productividad"
        note="Diferencias minimas entre modalidades de trabajo."
        wide
      >
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={workModeProd} layout="vertical" barSize={38}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis type="number" domain={[69, 71]} tick={{ ...TICK, fill: C.sub }} />
            <YAxis dataKey="mode" type="category" width={82} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Bar dataKey="avg_prod" name="Productividad" radius={[0, 3, 3, 0]}>
              <Cell fill={C.navy}   />
              <Cell fill={C.orange} />
              <Cell fill={C.teal}   />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

    </div>
  );
}