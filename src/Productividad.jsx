import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { C, TICK, sleepVsProd, industryBurnout, radarData, TT, ChartCard } from "./shared";

export default function Productividad() {
  const burnoutSorted = [...industryBurnout].sort((a, b) => b.High - a.High);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <ChartCard title="Radar: variables de bienestar (%)">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height={290}>
              <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                <PolarGrid stroke={C.border} />
                <PolarAngleAxis dataKey="variable" tick={{ ...TICK, fill: C.sub }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Promedio" dataKey="value" stroke={C.navy} fill={C.navy} fillOpacity={0.15} strokeWidth={2.5} />
                <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* Side panel */}
          <div style={{ width: 150, background: C.chip, borderRadius: 6, padding: "14px 16px", flexShrink: 0 }}>
            <p style={{ color: C.sub, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px", fontFamily: "Inter, sans-serif" }}>
              PERFIL DE BIENESTAR
            </p>
            {[
              { label: "Sueño",         value: 63, color: C.teal   },
              { label: "Productividad", value: 70, color: C.navy   },
              { label: "Act. Fisica",   value: 50, color: C.green  },
              { label: "Bajo Estres",   value: 38, color: C.red    },
              { label: "Horas Opt.",    value: 70, color: C.orange },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: item.color, fontSize: 12, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>{item.label}</span>
                  <span style={{ color: item.color, fontSize: 12, fontWeight: 700, fontFamily: "Inter, sans-serif" }}>{item.value}</span>
                </div>
                <div style={{ background: C.border, borderRadius: 4, height: 6, overflow: "hidden" }}>
                  <div style={{ width: item.value + "%", height: "100%", background: item.color, borderRadius: 4, transition: "width 0.4s ease" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ChartCard>

      <ChartCard title="Tendencia sueño vs productividad">
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