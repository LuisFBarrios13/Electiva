import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { C, TICK, stressVsProd, sleepVsProd, workHoursProd, TT, ChartCard } from "./shared";

export default function EstresSueno() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <ChartCard
        title="Nivel de estres vs. productividad promedio"
        note="Sin tendencia lineal clara entre estres y productividad."
        wide
      >
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={stressVsProd}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="stress" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[65, 75]}  tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
            <Line type="monotone" dataKey="avg_prod" name="Productividad Prom." stroke={C.red} strokeWidth={2.5} dot={{ fill: C.red, r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Horas de sueno vs. productividad"
        note="Tendencia positiva clara: mas sueno = mayor productividad."
      >
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={sleepVsProd} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="sleep" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[55, 85]} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Bar dataKey="avg_prod" name="Productividad Prom." radius={[3, 3, 0, 0]}>
              {sleepVsProd.map((_, i) => (
                <Cell key={i} fill={`hsl(185,${55 + i * 5}%,${38 + i * 4}%)`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Horas de trabajo semanal vs. productividad"
        note="A mayor carga horaria, ligera caida en productividad."
      >
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={workHoursProd} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="hours" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[67, 73]} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Bar dataKey="avg_prod" name="Productividad Prom." radius={[3, 3, 0, 0]}>
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