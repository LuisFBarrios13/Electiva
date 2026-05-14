import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { C, TICK, NOTE_STYLE, scatterLow, scatterMed, scatterHigh, ScatterTT, ChartCard, SectionTitle } from "./shared";

export default function Dispersion() {
  return (
    <div>
      <SectionTitle>Grafico de Dispersion: Estres vs. Productividad</SectionTitle>
      <ChartCard title="Muestra de 78 empleados color = nivel de burnout">
        <div style={{ display: "flex", gap: 20, marginBottom: 14, flexWrap: "wrap" }}>
          {[[C.red, "Burnout Alto"], [C.orange, "Burnout Medio"], [C.green, "Burnout Bajo"]].map(([color, label]) => (
            <span key={label} style={{ display: "flex", alignItems: "center", gap: 7, ...NOTE_STYLE, color: C.sub }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
              {label}
            </span>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={370}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 34, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis
              dataKey="x" type="number" domain={[0, 11]}
              tick={{ ...TICK, fill: C.sub }}
              label={{ value: "Nivel de Estres (1-10)", fill: C.sub, ...TICK, position: "insideBottom", offset: -18 }}
            />
            <YAxis
              dataKey="y" type="number" domain={[30, 110]}
              tick={{ ...TICK, fill: C.sub }}
              label={{ value: "Productividad", fill: C.sub, ...TICK, angle: -90, position: "insideLeft", offset: 15 }}
            />
            <Tooltip content={<ScatterTT />} cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Burnout Bajo"  data={scatterLow}  fill={C.green}  opacity={0.85} />
            <Scatter name="Burnout Medio" data={scatterMed}  fill={C.orange} opacity={0.85} />
            <Scatter name="Burnout Alto"  data={scatterHigh} fill={C.red}    opacity={0.85} />
          </ScatterChart>
        </ResponsiveContainer>

        <p style={{
          ...NOTE_STYLE, color: C.sub, margin: "10px 0 0",
          padding: "10px 14px", background: "#F8FAFC", borderRadius: 4,
          borderLeft: `3px solid ${C.navy}`,
        }}>
          El estres 8-10 se concentra en burnout alto, pero con gran variacion en productividad — no hay relacion lineal directa.
        </p>
      </ChartCard>
    </div>
  );
}