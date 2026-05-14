import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { C, TICK, sleepVsProd, industryBurnout, radarData, TT, ChartCard } from "./shared";

export default function Productividad() {
  const burnoutSorted = [...industryBurnout].sort((a, b) => b.High - a.High);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <ChartCard title="Radar: variables de bienestar (%)">
        <ResponsiveContainer width="100%" height={290}>
          <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
            <PolarGrid stroke={C.border} />
            <PolarAngleAxis dataKey="variable" tick={{ ...TICK, fill: C.sub }} />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name="Promedio" dataKey="value" stroke={C.navy} fill={C.navy} fillOpacity={0.15} strokeWidth={2.5} />
            <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Tendencia sueno vs. productividad">
        <ResponsiveContainer width="100%" height={290}>
          <LineChart data={sleepVsProd}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="sleep" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[55, 85]} tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Line type="monotone" dataKey="avg_prod" name="Productividad" stroke={C.orange} strokeWidth={3} dot={{ fill: C.orange, r: 5, stroke: C.surface, strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Industrias por empleados con burnout alto" wide>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={burnoutSorted} barSize={42}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="industry" tick={{ ...TICK, fill: C.sub }} />
            <YAxis tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Bar dataKey="High" name="Burnout Alto" radius={[3, 3, 0, 0]}>
              {burnoutSorted.map((_, i) => (
                <Cell key={i} fill={C.red} opacity={0.45 + i * 0.1} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}