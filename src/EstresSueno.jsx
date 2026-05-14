import React from "react";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell, ReferenceLine, ComposedChart
} from "recharts";
import { C, TICK, TT, ChartCard } from "./shared";

const stressVsProd = [
  { stress: "1", avg_prod: 71.1 }, { stress: "2", avg_prod: 67.6 },
  { stress: "3", avg_prod: 69.4 }, { stress: "4", avg_prod: 68.2 },
  { stress: "5", avg_prod: 72.2 }, { stress: "6", avg_prod: 68.7 },
  { stress: "7", avg_prod: 71.0 }, { stress: "8", avg_prod: 71.7 },
  { stress: "9", avg_prod: 69.4 }, { stress: "10", avg_prod: 68.9 },
];

const sleepVsProd = [
  { sleep: "4-5h",   avg_prod: 59.9 },
  { sleep: "5-6h",   avg_prod: 64.8 },
  { sleep: "6-7h",   avg_prod: 67.9 },
  { sleep: "7-8h",   avg_prod: 71.5 },
  { sleep: "8-9h",   avg_prod: 76.3 },
  { sleep: "9-10h",  avg_prod: 79.2 },
  { sleep: "10-11h", avg_prod: 80.1 },
];

const workHoursProd = [
  { hours: "<35h",   avg_prod: 71.9 },
  { hours: "35-45h", avg_prod: 70.7 },
  { hours: "45-55h", avg_prod: 69.3 },
  { hours: "55h+",   avg_prod: 68.5 },
];

export default function EstresSueno() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>

      {/* Line chart - stress (full width) */}
      <ChartCard
        title="Nivel de estres vs. productividad promedio"
        note="Sin tendencia lineal clara. El estres alto (8-10) no necesariamente implica menor productividad — otros factores median esta relacion."
        wide
      >
        <ResponsiveContainer width="100%" height={240}>
          <ComposedChart data={stressVsProd}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="stress" tick={{ ...TICK, fill: C.sub }} label={{ value: "Nivel de Estres", position: "insideBottom", offset: -2, fill: C.muted, fontSize: 12 }} />
            <YAxis domain={[65, 75]} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <ReferenceLine y={69.84} stroke={C.orange} strokeDasharray="4 4" label={{ value: "Prom. global", fill: C.orange, fontSize: 11, position: "right" }} />
            <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
            <Bar dataKey="avg_prod" name="Productividad" fill={C.navy} opacity={0.15} radius={[2, 2, 0, 0]} />
            <Line type="monotone" dataKey="avg_prod" name="Tendencia" stroke={C.red} strokeWidth={2.5} dot={{ fill: C.red, r: 4 }} legendType="none" />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Area chart - sleep */}
      <ChartCard
        title="Horas de sueno vs. productividad"
        note="Tendencia positiva clara y consistente. Dormir 10-11h se asocia con productividad 34% mayor que dormir menos de 5h."
      >
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={sleepVsProd} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="gradSleep" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={C.teal} stopOpacity={0.35} />
                <stop offset="95%" stopColor={C.teal} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="sleep" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[55, 85]} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Area type="monotone" dataKey="avg_prod" name="Productividad" stroke={C.teal} strokeWidth={2.5} fill="url(#gradSleep)" dot={{ fill: C.teal, r: 5, stroke: C.surface, strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Bar chart - work hours */}
      <ChartCard
        title="Horas de trabajo semanal vs. productividad"
        note="A mayor carga horaria, caida consistente en productividad. Trabajar mas de 55h/sem reduce la productividad promedio en 3.4 puntos frente a menos de 35h."
      >
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={workHoursProd} barSize={44}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="hours" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[67, 73]} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Bar dataKey="avg_prod" name="Productividad" radius={[4, 4, 0, 0]}>
              {workHoursProd.map((_, i) => (
                <Cell key={i} fill={C.orange} opacity={1 - i * 0.18} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

    </div>
  );
}