import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis
} from "recharts";

const KPI = { total: 1500, avgStress: 6.24, avgSleep: 6.97, avgProductivity: 69.84, avgPhysical: 5.01 };

const stressVsProd = [
  { stress: "1", avg_prod: 71.1 }, { stress: "2", avg_prod: 67.6 },
  { stress: "3", avg_prod: 69.4 }, { stress: "4", avg_prod: 68.2 },
  { stress: "5", avg_prod: 72.2 }, { stress: "6", avg_prod: 68.7 },
  { stress: "7", avg_prod: 71.0 }, { stress: "8", avg_prod: 71.7 },
  { stress: "9", avg_prod: 69.4 }, { stress: "10", avg_prod: 68.9 },
];

const sleepVsProd = [
  { sleep: "4-5h", avg_prod: 59.9 }, { sleep: "5-6h", avg_prod: 64.8 },
  { sleep: "6-7h", avg_prod: 67.9 }, { sleep: "7-8h", avg_prod: 71.5 },
  { sleep: "8-9h", avg_prod: 76.3 }, { sleep: "9-10h", avg_prod: 79.2 },
  { sleep: "10-11h", avg_prod: 80.1 },
];

const industryBurnout = [
  { industry: "Manufacturing", High: 103, Medium: 54, Low: 95 },
  { industry: "Finance",       High: 106, Medium: 55, Low: 91 },
  { industry: "Tech",          High: 87,  Medium: 40, Low: 104 },
  { industry: "Education",     High: 107, Medium: 49, Low: 108 },
  { industry: "Healthcare",    High: 91,  Medium: 47, Low: 103 },
  { industry: "Retail",        High: 100, Medium: 50, Low: 110 },
];

const workModeProd = [
  { mode: "Remote",  avg_prod: 70.0 },
  { mode: "Hybrid",  avg_prod: 69.9 },
  { mode: "On-site", avg_prod: 69.6 },
];

const mhSupportBurnout = [
  { support: "Con apoyo", High: 308, Medium: 164, Low: 299 },
  { support: "Sin apoyo", High: 286, Medium: 131, Low: 312 },
];

const countryProd = [
  { country: "Australia", avg_prod: 71.3 }, { country: "France",    avg_prod: 70.5 },
  { country: "Germany",   avg_prod: 70.1 }, { country: "India",     avg_prod: 70.1 },
  { country: "Canada",    avg_prod: 70.0 }, { country: "Singapore", avg_prod: 69.5 },
  { country: "UK",        avg_prod: 69.5 }, { country: "USA",       avg_prod: 69.5 },
  { country: "Japan",     avg_prod: 69.1 }, { country: "Brazil",    avg_prod: 68.9 },
];

const workHoursProd = [
  { hours: "<35h",   avg_prod: 71.9 }, { hours: "35-45h", avg_prod: 70.7 },
  { hours: "45-55h", avg_prod: 69.3 }, { hours: "55h+",   avg_prod: 68.5 },
];

const radarData = [
  { variable: "Sueno",       value: 63 },
  { variable: "Productividad", value: 70 },
  { variable: "Act. Fisica", value: 50 },
  { variable: "Bajo Estres", value: 38 },
  { variable: "Horas Opt.",  value: 70 },
];

const scatterLow = [
  {x:1,y:79},{x:3,y:97},{x:6,y:80},{x:3,y:94},{x:2,y:75},{x:2,y:64},
  {x:4,y:50},{x:5,y:71},{x:2,y:92},{x:1,y:100},{x:4,y:62},{x:1,y:83},
  {x:6,y:52},{x:3,y:94},{x:5,y:53},{x:4,y:94},{x:1,y:87},{x:1,y:73},
  {x:5,y:73},{x:2,y:91},{x:1,y:49},{x:7,y:71},{x:2,y:75},{x:7,y:65},
  {x:8,y:72},{x:8,y:81},{x:4,y:89},{x:3,y:59},{x:7,y:78},{x:1,y:100},
];
const scatterMed = [
  {x:4,y:58},{x:8,y:98},{x:6,y:78},{x:5,y:84},{x:5,y:76},{x:7,y:69},
  {x:7,y:57},{x:5,y:65},{x:8,y:43},{x:5,y:78},{x:8,y:75},{x:7,y:79},
  {x:6,y:47},{x:6,y:73},{x:7,y:84},{x:5,y:40},{x:4,y:75},{x:6,y:57},
];
const scatterHigh = [
  {x:9,y:75},{x:10,y:62},{x:9,y:98},{x:10,y:92},{x:9,y:88},{x:9,y:89},
  {x:10,y:43},{x:10,y:74},{x:10,y:58},{x:10,y:100},{x:10,y:98},{x:8,y:82},
  {x:10,y:79},{x:8,y:47},{x:10,y:40},{x:10,y:89},{x:9,y:76},{x:10,y:44},
  {x:10,y:46},{x:6,y:87},{x:10,y:62},{x:10,y:68},{x:10,y:59},{x:10,y:67},
  {x:10,y:75},{x:10,y:53},{x:10,y:60},{x:10,y:55},{x:10,y:78},{x:10,y:87},
];

const C = {
  teal: "#2DD4BF", coral: "#F87171", amber: "#FBBF24",
  violet: "#A78BFA", sky: "#38BDF8", green: "#4ADE80",
  bg: "#0B1120", card: "#111827", border: "#1F2937",
  muted: "#6B7280", text: "#F9FAFB", subtext: "#9CA3AF",
};

const TT = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div style={{ background:"#1F2937", border:`1px solid ${C.border}`, borderRadius:8, padding:"10px 14px", fontSize:13 }}>
      {label != null && <p style={{ color:C.subtext, marginBottom:4, fontWeight:600, margin:"0 0 4px" }}>{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color:p.color||C.teal, margin:"2px 0" }}>
          {p.name}: <strong>{typeof p.value==="number" ? p.value.toFixed(1) : p.value}</strong>
        </p>
      ))}
    </div>
  );
};

const ScatterTT = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0] ? payload[0].payload : null;
  if (!d) return null;
  return (
    <div style={{ background:"#1F2937", border:`1px solid ${C.border}`, borderRadius:8, padding:"10px 14px", fontSize:13 }}>
      <p style={{ color:C.subtext, margin:"2px 0" }}>Estres: <strong style={{color:C.text}}>{d.x}</strong></p>
      <p style={{ color:C.subtext, margin:"2px 0" }}>Productividad: <strong style={{color:C.text}}>{d.y}</strong></p>
    </div>
  );
};

const KpiCard = ({ label, value, unit, sub, color }) => (
  <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"18px 20px", flex:1, minWidth:140, borderTop:`3px solid ${color}` }}>
    <p style={{ color:C.subtext, fontSize:10, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 8px" }}>{label}</p>
    <p style={{ color:C.text, fontSize:28, fontWeight:700, lineHeight:1, margin:"0 0 5px" }}>
      {value}<span style={{ fontSize:12, color:C.subtext, marginLeft:4 }}>{unit}</span>
    </p>
    {sub && <p style={{ color:C.muted, fontSize:11, margin:0 }}>{sub}</p>}
  </div>
);

const ChartCard = ({ title, note, children, wide }) => (
  <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"18px 18px 14px", gridColumn:wide?"1 / -1":undefined }}>
    <p style={{ color:C.subtext, fontSize:10, textTransform:"uppercase", letterSpacing:"0.07em", margin:"0 0 14px", fontWeight:600 }}>{title}</p>
    {children}
    {note && <p style={{ color:C.muted, fontSize:11, margin:"10px 0 0" }}>{note}</p>}
  </div>
);

const ST = ({ children }) => (
  <h2 style={{ color:C.text, fontSize:14, fontWeight:700, margin:"0 0 16px", paddingBottom:8, borderBottom:`1px solid ${C.border}` }}>{children}</h2>
);

const TABS = ["Resumen","Estres & Sueno","Burnout","Productividad","Dispersion"];

export default function Dashboard() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ fontFamily:"'Courier New', monospace", background:C.bg, minHeight:"100vh", color:C.text }}>

      <div style={{ background:"#0F172A", borderBottom:`1px solid ${C.border}`, padding:"22px 26px 16px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:C.teal }} />
          <span style={{ color:C.teal, fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase" }}>
            Universidad Cooperativa de Colombia
          </span>
        </div>
        <h1 style={{ fontSize:19, fontWeight:800, color:C.text, margin:"0 0 4px" }}>
          Exploracion de Factores de Salud Mental
        </h1>
        <p style={{ color:C.subtext, fontSize:12, margin:"0 0 2px" }}>
          Impacto en la Productividad · EDA Dashboard · n = 1,500
        </p>
        <p style={{ color:C.muted, fontSize:10, margin:0 }}>
          Luis F. Barrios C. &amp; Samuel A. Pacheco A. · Electiva Especifica II · 2026
        </p>
      </div>

      <div style={{ display:"flex", gap:2, padding:"12px 26px 0", borderBottom:`1px solid ${C.border}`, flexWrap:"wrap" }}>
        {TABS.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            background: tab===i ? C.teal : "transparent",
            color: tab===i ? "#0B1120" : C.subtext,
            border:"none", borderRadius:"6px 6px 0 0",
            padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer",
            fontFamily:"inherit",
          }}>{t}</button>
        ))}
      </div>

      <div style={{ padding:"22px 26px 48px" }}>

        {tab === 0 && (
          <div>
            <ST>Indicadores Clave del Dataset</ST>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:24 }}>
              <KpiCard label="Empleados" value="1,500" unit="" sub="10 paises · 6 industrias" color={C.teal} />
              <KpiCard label="Estres Prom." value={KPI.avgStress} unit="/10" sub="Escala 1-10" color={C.coral} />
              <KpiCard label="Sueno Prom." value={KPI.avgSleep} unit="h" sub="Rango: 4-11h" color={C.violet} />
              <KpiCard label="Productividad" value={KPI.avgProductivity} unit="/100" sub="Puntuacion global" color={C.amber} />
              <KpiCard label="Act. Fisica" value={KPI.avgPhysical} unit="h/sem" sub="Horas semanales" color={C.green} />
            </div>

            <ST>Productividad Promedio por Pais</ST>
            <ChartCard title="Productividad media por pais" note="Variacion pequena entre paises (68.9-71.3) — distribucion homogenea.">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={countryProd} barSize={24}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="country" tick={{ fill:C.subtext, fontSize:11 }} />
                  <YAxis domain={[67,73]} tick={{ fill:C.subtext, fontSize:11 }} />
                  <Tooltip content={<TT />} />
                  <Bar dataKey="avg_prod" name="Productividad" radius={[4,4,0,0]}>
                    {countryProd.map((_, i) => <Cell key={i} fill={`hsl(${170+i*12},65%,${48+i*2}%)`} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div style={{ marginTop:18, background:"#0F2937", border:`1px solid #2DD4BF33`, borderRadius:12, padding:"14px 18px" }}>
              <p style={{ color:C.teal, fontSize:13, fontWeight:700, margin:"0 0 8px" }}>Hallazgos clave del EDA</p>
              <ul style={{ color:C.subtext, fontSize:12, lineHeight:1.8, paddingLeft:16, margin:0 }}>
                <li>El sueno tiene la correlacion mas clara: mas de 8h se asocia con productividad mayor a 76/100.</li>
                <li>El nivel de estres no muestra relacion lineal con la productividad promedio.</li>
                <li>El apoyo en salud mental no reduce significativamente el burnout alto.</li>
                <li>Trabajar menos horas (&lt;35h/sem) correlaciona levemente con mayor productividad.</li>
                <li>Diferencias minimas entre paises — distribucion global homogenea.</li>
              </ul>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            <ChartCard title="Nivel de estres vs. productividad promedio" note="Sin tendencia lineal clara." wide>
              <ResponsiveContainer width="100%" height={230}>
                <LineChart data={stressVsProd}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="stress" tick={{ fill:C.subtext, fontSize:12 }} />
                  <YAxis domain={[65,75]} tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Legend wrapperStyle={{ color:C.subtext, fontSize:12 }} />
                  <Line type="monotone" dataKey="avg_prod" name="Productividad Prom." stroke={C.coral} strokeWidth={2.5} dot={{ fill:C.coral, r:4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Horas de sueno vs. productividad" note="Tendencia positiva clara: mas sueno = mayor productividad.">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={sleepVsProd} barSize={26}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="sleep" tick={{ fill:C.subtext, fontSize:11 }} />
                  <YAxis domain={[55,85]} tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Bar dataKey="avg_prod" name="Productividad Prom." radius={[4,4,0,0]}>
                    {sleepVsProd.map((_, i) => <Cell key={i} fill={`hsl(${260+i*14},70%,65%)`} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Horas de trabajo semanal vs. productividad" note="A mayor carga horaria, ligera caida en productividad.">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={workHoursProd} barSize={34}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="hours" tick={{ fill:C.subtext, fontSize:12 }} />
                  <YAxis domain={[67,73]} tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Bar dataKey="avg_prod" name="Productividad Prom." radius={[4,4,0,0]}>
                    {workHoursProd.map((_, i) => <Cell key={i} fill={C.sky} opacity={1-i*0.14} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        )}

        {tab === 2 && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            <ChartCard title="Riesgo de burnout por industria" wide>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={industryBurnout} barSize={18}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="industry" tick={{ fill:C.subtext, fontSize:12 }} />
                  <YAxis tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Legend wrapperStyle={{ color:C.subtext, fontSize:12 }} />
                  <Bar dataKey="High" name="Alto" fill={C.coral} radius={[2,2,0,0]} />
                  <Bar dataKey="Medium" name="Medio" fill={C.amber} radius={[2,2,0,0]} />
                  <Bar dataKey="Low" name="Bajo" fill={C.green} radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Apoyo en salud mental vs. burnout" note="El acceso al apoyo no elimina el riesgo alto.">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={mhSupportBurnout} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="support" tick={{ fill:C.subtext, fontSize:12 }} />
                  <YAxis tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Legend wrapperStyle={{ color:C.subtext, fontSize:12 }} />
                  <Bar dataKey="High" name="Burnout Alto" fill={C.coral} radius={[2,2,0,0]} />
                  <Bar dataKey="Medium" name="Burnout Medio" fill={C.amber} radius={[2,2,0,0]} />
                  <Bar dataKey="Low" name="Burnout Bajo" fill={C.green} radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Modalidad de trabajo vs. productividad" note="Diferencias minimas entre modalidades.">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={workModeProd} layout="vertical" barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis type="number" domain={[69,71]} tick={{ fill:C.subtext, fontSize:12 }} />
                  <YAxis dataKey="mode" type="category" width={68} tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Bar dataKey="avg_prod" name="Productividad" radius={[0,4,4,0]}>
                    <Cell fill={C.teal} />
                    <Cell fill={C.violet} />
                    <Cell fill={C.sky} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            <ChartCard title="Radar: variables de bienestar (%)">
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart data={radarData} margin={{ top:10, right:30, bottom:10, left:30 }}>
                  <PolarGrid stroke={C.border} />
                  <PolarAngleAxis dataKey="variable" tick={{ fill:C.subtext, fontSize:12 }} />
                  <PolarRadiusAxis domain={[0,100]} tick={false} axisLine={false} />
                  <Radar name="Promedio" dataKey="value" stroke={C.teal} fill={C.teal} fillOpacity={0.25} strokeWidth={2} />
                  <Legend wrapperStyle={{ color:C.subtext, fontSize:12 }} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Tendencia sueno vs. productividad">
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={sleepVsProd}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="sleep" tick={{ fill:C.subtext, fontSize:11 }} />
                  <YAxis domain={[55,85]} tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Line type="monotone" dataKey="avg_prod" name="Productividad" stroke={C.violet} strokeWidth={3} dot={{ fill:C.violet, r:5 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Industrias por empleados con burnout alto" wide>
              <ResponsiveContainer width="100%" height={190}>
                <BarChart data={[...industryBurnout].sort((a,b)=>b.High-a.High)} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis dataKey="industry" tick={{ fill:C.subtext, fontSize:12 }} />
                  <YAxis tick={{ fill:C.subtext, fontSize:12 }} />
                  <Tooltip content={<TT />} />
                  <Bar dataKey="High" name="Burnout Alto" radius={[4,4,0,0]}>
                    {[...industryBurnout].sort((a,b)=>b.High-a.High).map((_,i)=>(
                      <Cell key={i} fill={C.coral} opacity={0.55+i*0.08} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        )}

        {tab === 4 && (
          <div>
            <ST>Grafico de Dispersion: Estres vs. Productividad</ST>
            <ChartCard title="Muestra de ~78 empleados · color = nivel de burnout">
              <div style={{ display:"flex", gap:18, marginBottom:12, flexWrap:"wrap" }}>
                {[["#F87171","Burnout Alto"],["#FBBF24","Burnout Medio"],["#4ADE80","Burnout Bajo"]].map(([color,label])=>(
                  <span key={label} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:C.subtext }}>
                    <span style={{ width:10, height:10, borderRadius:"50%", background:color, display:"inline-block", flexShrink:0 }} />
                    {label}
                  </span>
                ))}
              </div>
              <ResponsiveContainer width="100%" height={360}>
                <ScatterChart margin={{ top:10, right:20, bottom:30, left:10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                  <XAxis
                    dataKey="x" type="number" domain={[0,11]}
                    tick={{ fill:C.subtext, fontSize:12 }}
                    label={{ value:"Nivel de Estres (1-10)", fill:C.subtext, fontSize:12, position:"insideBottom", offset:-15 }}
                  />
                  <YAxis
                    dataKey="y" type="number" domain={[30,110]}
                    tick={{ fill:C.subtext, fontSize:12 }}
                    label={{ value:"Productividad", fill:C.subtext, fontSize:12, angle:-90, position:"insideLeft", offset:15 }}
                  />
                  <Tooltip content={<ScatterTT />} cursor={{ strokeDasharray:"3 3" }} />
                  <Legend wrapperStyle={{ color:C.subtext, fontSize:12 }} />
                  <Scatter name="Burnout Bajo" data={scatterLow} fill={C.green} opacity={0.85} />
                  <Scatter name="Burnout Medio" data={scatterMed} fill={C.amber} opacity={0.85} />
                  <Scatter name="Burnout Alto" data={scatterHigh} fill={C.coral} opacity={0.85} />
                </ScatterChart>
              </ResponsiveContainer>
              <p style={{ color:C.muted, fontSize:12, margin:"10px 0 0" }}>
                El estres 8-10 se concentra en burnout alto (rojo), pero con gran variacion en productividad — no hay relacion lineal directa.
              </p>
            </ChartCard>
          </div>
        )}

      </div>

      <div style={{ borderTop:`1px solid ${C.border}`, padding:"12px 26px", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:6 }}>
        <span style={{ color:C.muted, fontSize:10 }}>Dataset: mental_health_productivity_2026.csv · 1,500 registros · 13 variables</span>
        <span style={{ color:C.muted, fontSize:10 }}>Electiva Especifica II · Universidad Cooperativa de Colombia · 2026</span>
      </div>
    </div>
  );
}