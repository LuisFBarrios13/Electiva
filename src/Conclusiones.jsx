import React from "react";
import { C, NOTE_STYLE } from "./shared";

const findings = [
  {
    icon: "😴",
    color: C.teal,
    title: "El sueño es el factor mas determinante",
    body: "Empleados que duermen entre 10-11h registran una productividad promedio de 80.1/100, un 34% superior a quienes duermen menos de 5h (59.9/100). Es la variable con mayor impacto lineal en el dataset.",
    tag: "OBJ. 2 y 3",
  },
  {
    icon: "📊",
    color: C.navy,
    title: "El estres no tiene relacion lineal con la productividad",
    body: "Contrario a lo esperado, el nivel de estres (1-10) no sigue un patron claro con la productividad promedio. Empleados con estres alto (8-10) presentan gran variabilidad, lo que sugiere que otros factores median esta relacion.",
    tag: "OBJ. 2 y 3",
  },
  {
    icon: "🔥",
    color: C.red,
    title: "El burnout es transversal: no respeta industria ni genero",
    body: "Todas las industrias y los tres grupos de genero muestran niveles de burnout alto similares (~38-41%). El apoyo en salud mental tampoco elimina el riesgo alto, lo que indica causas estructurales mas profundas.",
    tag: "OBJ. 2 y 3",
  },
  {
    icon: "🏃",
    color: C.green,
    title: "La actividad fisica optima es 6-8h semanales",
    body: "El punto optimo de actividad fisica para la productividad se encuentra entre 6 y 8 horas semanales (71.4/100). Mas de 8h muestra una leve caida, lo que sugiere un efecto de fatiga fisica.",
    tag: "OBJ. 1 y 2",
  },
  {
    icon: "🌍",
    color: C.orange,
    title: "La productividad es homogenea entre paises y modalidades",
    body: "La diferencia entre el pais con mayor productividad (Australia, 71.3) y el menor (Brasil, 68.9) es de apenas 2.4 puntos. La modalidad de trabajo (remoto, hibrido, presencial) tampoco genera diferencias significativas.",
    tag: "OBJ. 1",
  },
  {
    icon: "⏰",
    color: "#7C3AED",
    title: "Trabajar menos horas correlaciona con mayor productividad",
    body: "Los empleados con menos de 35h semanales tienen productividad promedio de 71.9/100, mientras que quienes trabajan mas de 55h registran 68.5/100. La sobrecarga horaria tiene un efecto negativo leve pero consistente.",
    tag: "OBJ. 2 y 3",
  },
];

const recommendations = [
  { text: "Implementar politicas de higiene del sueño en entornos laborales — es la intervencion con mayor retorno potencial.", icon: "✓" },
  { text: "Promover actividad fisica moderada (6-8h/sem) como parte de programas de bienestar corporativo.", icon: "✓" },
  { text: "Revisar las cargas horarias: reducir semanas de mas de 50h puede mejorar la productividad sostenida.", icon: "✓" },
  { text: "El apoyo en salud mental es necesario pero insuficiente solo: debe combinarse con cambios estructurales para reducir el burnout.", icon: "✓" },
  { text: "Dado que el burnout no varia por pais ni genero, las intervenciones deben ser universales y no segmentadas.", icon: "✓" },
];

export default function Conclusiones() {
  return (
    <div>
      {/* Header card */}
      <div style={{
        background: C.navy, borderRadius: 4, padding: "20px 24px", marginBottom: 20,
      }}>
          <p style={{ color: C.orange, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 4px", fontFamily: "Inter, sans-serif" }}>
            Interpretacion de resultados
          </p>
          <h2 style={{ color: "white", fontSize: 23, fontWeight: 700, margin: "0 0 6px", fontFamily: "Inter, sans-serif" }}>
            Conclusiones del Analisis Exploratorio
          </h2>
          <p style={{ color: "#94A3B8", ...NOTE_STYLE, margin: 0 }}>
            Basadas en el dataset de 1,500 empleados · 10 paises · 6 industrias · EDA 2026
          </p>
      </div>

      {/* Findings grid */}
      <p style={{ color: C.sub, fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 12px", fontFamily: "Inter, sans-serif" }}>
        Hallazgos Principales
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
        {findings.map((f, i) => (
          <div key={i} style={{
            background: C.surface, border: "1px solid " + C.border,
            borderTop: "3px solid " + f.color,
            borderRadius: 4, padding: "16px 18px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{
                background: f.color + "18", color: f.color,
                fontSize: 13, fontWeight: 700, padding: "2px 8px",
                borderRadius: 4, fontFamily: "Inter, sans-serif", letterSpacing: "0.05em",
              }}>{f.tag}</span>
            </div>
            <p style={{ color: C.navy, fontSize: 16, fontWeight: 700, margin: "0 0 8px", fontFamily: "Inter, sans-serif", lineHeight: "18px" }}>
              {f.title}
            </p>
            <p style={{ color: C.sub, ...NOTE_STYLE, margin: 0, lineHeight: "20px" }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <p style={{ color: C.sub, fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 12px", fontFamily: "Inter, sans-serif" }}>
        Recomendaciones
      </p>
      <div style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 4, padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        {recommendations.map((r, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 12,
            padding: "10px 0",
            borderBottom: i < recommendations.length - 1 ? "1px solid " + C.border : "none",
          }}>
            <span style={{
              background: C.teal + "18", color: C.teal,
              width: 24, height: 24, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, flexShrink: 0,
            }}>{r.icon}</span>
            <p style={{ color: C.sub, ...NOTE_STYLE, margin: 0 }}>{r.text}</p>
          </div>
        ))}
      </div>

      {/* Citation */}
      <p style={{ color: C.muted, fontSize: 12, margin: "16px 0 0", fontFamily: "Inter, sans-serif" }}>
        Analisis realizado por Luis F. Barrios C. y Samual A. Pacheco A. · Electiva Especifica II · Universidad Cooperativa de Colombia · 2026
      </p>
    </div>
  );
}