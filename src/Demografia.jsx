import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  BarChart, Bar
} from "recharts";
import { C, TICK, NOTE_STYLE, TT, ChartCard, SectionTitle } from "./shared";

const genderData = [
  { name: "Femenino",    value: 521, pct: "34.7%" },
  { name: "Masculino",   value: 509, pct: "33.9%" },
  { name: "No binario",  value: 470, pct: "31.3%" },
];

const ageData = [
  { group: "< 30",  avg_prod: 69.7, avg_stress: 6.40, n: 308 },
  { group: "30-39", avg_prod: 70.0, avg_stress: 6.14, n: 372 },
  { group: "40-49", avg_prod: 69.2, avg_stress: 6.35, n: 396 },
  { group: "50+",   avg_prod: 70.4, avg_stress: 6.13, n: 424 },
];

const physActData = [
  { bucket: "0-2h",  avg_prod: 69.3 },
  { bucket: "2-4h",  avg_prod: 70.5 },
  { bucket: "4-6h",  avg_prod: 69.5 },
  { bucket: "6-8h",  avg_prod: 71.4 },
  { bucket: "8h+",   avg_prod: 68.7 },
];

const burnoutGender = [
  { gender: "Masculino",  High: 194, Medium: 100, Low: 215 },
  { gender: "Femenino",   High: 204, Medium: 104, Low: 213 },
  { gender: "No binario", High: 196, Medium: 91,  Low: 183 },
];

const PIE_COLORS = [C.navy, C.orange, C.teal];

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, pct }) => {
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central"
      style={{ fontSize: 12, fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
      {pct}
    </text>
  );
};

export default function Demografia() {
  return (
    <div>
      <SectionTitle>Perfil Demografico del Dataset</SectionTitle>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>

        {/* Pie Chart - Gender */}
        <ChartCard title="Distribucion por genero" note="Dataset equilibrado: representacion similar entre los tres grupos de genero.">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%" cy="50%"
                outerRadius={100}
                dataKey="value"
                labelLine={false}
                label={CustomPieLabel}
              >
                {genderData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  const d = payload[0].payload;
                  return (
                    <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 8, padding: "10px 14px", ...NOTE_STYLE, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
                      <p style={{ color: C.navy, fontWeight: 700, margin: "0 0 2px" }}>{d.name}</p>
                      <p style={{ color: C.sub, margin: 0 }}>{d.value} empleados ({d.pct})</p>
                    </div>
                  );
                }}
              />
              <Legend
                wrapperStyle={{ ...NOTE_STYLE, color: C.sub }}
                formatter={(value) => <span style={{ color: C.sub }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Area Chart - Age vs Productivity */}
        <ChartCard title="Productividad promedio por grupo de edad" note="Los empleados mayores de 50 anos muestran la mayor productividad promedio (70.4/100).">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={ageData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="gradProd" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={C.navy}  stopOpacity={0.25} />
                  <stop offset="95%" stopColor={C.navy}  stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="group" tick={{ ...TICK, fill: C.sub }} />
              <YAxis domain={[68, 71]} tick={{ ...TICK, fill: C.sub }} />
              <Tooltip content={<TT />} />
              <Area type="monotone" dataKey="avg_prod" name="Productividad" stroke={C.navy} strokeWidth={2.5} fill="url(#gradProd)" dot={{ fill: C.navy, r: 5, stroke: C.surface, strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Area Chart - Physical Activity vs Productivity */}
        <ChartCard title="Actividad fisica semanal vs. productividad" note="El rango optimo es 6-8h/semana de actividad fisica, asociado a la mayor productividad (71.4/100). Mas de 8h muestra una leve caida.">
          <ResponsiveContainer width="100%" height={230}>
            <AreaChart data={physActData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="gradGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={C.green} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={C.green} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="bucket" tick={{ ...TICK, fill: C.sub }} />
              <YAxis domain={[68, 73]} tick={{ ...TICK, fill: C.sub }} />
              <Tooltip content={<TT />} />
              <Area type="monotone" dataKey="avg_prod" name="Productividad" stroke={C.green} strokeWidth={2.5} fill="url(#gradGreen)" dot={{ fill: C.green, r: 5, stroke: C.surface, strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Burnout by Gender */}
        <ChartCard title="Burnout por genero" note="Los tres grupos de genero presentan niveles de burnout alto similares (~40%), lo que sugiere que el burnout no esta asociado al genero.">
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={burnoutGender} barSize={22}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="gender" tick={{ ...TICK, fill: C.sub }} />
              <YAxis tick={{ ...TICK, fill: C.sub }} />
              <Tooltip content={<TT />} />
              <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
              <Bar dataKey="High"   name="Alto"  fill={C.red}    radius={[2, 2, 0, 0]} />
              <Bar dataKey="Medium" name="Medio" fill={C.orange} radius={[2, 2, 0, 0]} />
              <Bar dataKey="Low"    name="Bajo"  fill={C.green}  radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>
    </div>
  );
}