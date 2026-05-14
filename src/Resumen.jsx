import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { C, TICK, KPI, countryProd, TT, KpiCard, ChartCard, SectionTitle } from "./shared";

export default function Resumen() {
  return (
    <div>
      <SectionTitle>Indicadores Clave del Dataset</SectionTitle>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
        <KpiCard label="Empleados"     value="1,500"               unit=""      sub="10 paises - 6 industrias" color={C.navy}   />
        <KpiCard label="Estres Prom."  value={KPI.avgStress}       unit="/10"   sub="Escala 1-10"              color={C.red}    />
        <KpiCard label="Sueño Prom."   value={KPI.avgSleep}        unit="h"     sub="Rango: 4-11h"             color={C.teal}   />
        <KpiCard label="Productividad" value={KPI.avgProductivity} unit="/100"  sub="Puntuacion global"        color={C.orange} />
        <KpiCard label="Act. Fisica"   value={KPI.avgPhysical}     unit="h/sem" sub="Horas semanales"          color={C.green}  />
      </div>

      <SectionTitle>Productividad Promedio por Pais</SectionTitle>
      <ChartCard
        title="Productividad media por pais"
        note="Variacion pequena entre paises (68.9-71.3) — distribucion global homogenea."
      >
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={countryProd} barSize={26}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="country" tick={{ ...TICK, fill: C.sub }} />
            <YAxis domain={[67, 73]}  tick={{ ...TICK, fill: C.sub }} />
            <Tooltip content={<TT />} />
            <Bar dataKey="avg_prod" name="Productividad" radius={[3, 3, 0, 0]}>
              {countryProd.map((_, i) => (
                <Cell key={i} fill={"hsl(215," + (42 + i * 3) + "%," + (28 + i * 4) + "%)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div style={{
        marginTop: 18, background: "#EFF6FF",
        border: "1px solid #BFDBFE", borderLeft: "4px solid " + C.navy,
        borderRadius: 4, padding: "14px 18px",
        display: "inline-block", minWidth: 400,
        }}>
        <p style={{ color: C.navy, fontSize: 20, fontWeight: 700, margin: "0 0 8px", fontFamily: "Inter, sans-serif" }}>
          Hallazgos clave del EDA
        </p>
        <ul style={{ color: C.sub, fontSize: 14, lineHeight: "20px", fontWeight: 400, paddingLeft: 18, margin: 0, fontFamily: "Inter, sans-serif" }}>
          <li>El sueno tiene la correlacion mas clara: mas de 8h se asocia con productividad mayor a <strong style={{ color: C.navy }}>76/100</strong>.</li>
          <li>El nivel de estres no muestra relacion lineal con la productividad promedio.</li>
          <li>El apoyo en salud mental no reduce significativamente el burnout alto.</li>
          <li>Trabajar menos horas (&lt;35h/sem) correlaciona levemente con mayor productividad.</li>
          <li>Diferencias minimas entre paises — distribucion global homogenea.</li>
        </ul>
      </div>
    </div>
  );
}