import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { C, TICK, industryBurnout, mhSupportBurnout, workModeProd, TT, ChartCard } from "./shared";

export default function Burnout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
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

      <ChartCard
        title="Apoyo en salud mental vs. burnout"
        note="El acceso al apoyo no elimina el riesgo alto de burnout."
      >
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={mhSupportBurnout} barSize={46}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="support" tick={{ ...TICK, fill: C.sub }} />
            <YAxis tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Legend wrapperStyle={{ ...TICK, color: C.sub }} />
            <Bar dataKey="High"   name="Burnout Alto"  fill={C.red}    radius={[2, 2, 0, 0]} />
            <Bar dataKey="Medium" name="Burnout Medio" fill={C.orange} radius={[2, 2, 0, 0]} />
            <Bar dataKey="Low"    name="Burnout Bajo"  fill={C.green}  radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Modalidad de trabajo vs. productividad"
        note="Diferencias minimas entre modalidades de trabajo."
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