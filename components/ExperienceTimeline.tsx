"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const experience = [
  {
    title: {
      en: "Graduate Student Research Assistant",
      es: "Asistente de investigación de posgrado",
    },
    place: "University of Michigan-Flint · Flint, MI (hybrid)",
    date: { en: "Aug 2026 – Present", es: "Ago 2026 – Actualidad" },
    points: {
      en: [
        "Developing text classification and thematic coding pipelines to extract causal themes from police-reported e-mobility crash narratives.",
        "Visualizing and clustering statewide crash records to identify emerging risk patterns and temporal windows across Michigan.",
        "Building explainable injury-severity classifiers from vehicle, crash-type, and road-geometry features.",
      ],
      es: [
        "Desarrollo pipelines de clasificación y codificación temática para extraer causas de narrativas policiales de siniestros de e-movilidad.",
        "Visualizo y agrupo registros estatales para identificar patrones de riesgo y ventanas temporales en Michigan.",
        "Construyo clasificadores explicables de severidad de lesiones con variables de vehículo, tipo de choque y geometría vial.",
      ],
    },
    color: "bg-[var(--light-blue)]",
  },
  {
    title: { en: "Junior Data Scientist", es: "Científica de datos junior" },
    place: "Class Valuation LLC · Troy, MI (remote)",
    date: { en: "Jun 2025 – Aug 2026", es: "Jun 2025 – Ago 2026" },
    points: {
      en: [
        "Developed computer-vision pipelines for automatic feature extraction from scanned documents, reducing manual review effort.",
        "Cleaned, structured, and enriched multimodal data pipelines feeding downstream AI models.",
        "Orchestrated agentic LLM workflows for automated sentiment-analysis reporting and built AI-assisted validation tools for quality control.",
      ],
      es: [
        "Desarrollé pipelines de visión computacional para extracción automática de características en documentos escaneados, reduciendo revisión manual.",
        "Limpié, estructuré y enriquecí pipelines de datos multimodales para modelos de IA.",
        "Orquesté flujos LLM agénticos para reportes automatizados de sentimiento y herramientas de validación asistidas por IA para control de calidad.",
      ],
    },
    color: "bg-[var(--vanilla-cream)]",
  },
];

export function ExperienceTimeline() {
  const { language } = useLanguage();
  return (
    <section id="experience" className="section py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        className="mb-7 sm:mb-10"
      >
        <h2 className="display text-4xl sm:text-5xl">
          <span className="marker bg-[var(--powder-blush)]">
            {language === "en"
              ? "Highlighted Experience"
              : "Experiencia Destacada"}
          </span>
        </h2>
      </motion.div>
      <div className="space-y-7">
        {experience.map((item, index) => (
          <motion.article
            key={item.place}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
            className={`sketch-card ${item.color} p-5 sm:p-8`}
          >
            <div className="flex flex-wrap justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider">
                  {item.place}
                </p>
                <h3 className="display mt-1 text-2xl sm:text-3xl">
                  {item.title[language]}
                </h3>
              </div>
              <span className="h-fit rounded-full border-2 border-[var(--blue-slate)] bg-[var(--canvas)] px-3 py-1 text-sm font-bold">
                {item.date[language]}
              </span>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {item.points[language].map((point) => (
                <li
                  key={point}
                  className="rounded-xl border-2 border-[var(--blue-slate)] bg-[var(--canvas)] p-3 text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        className="sketch-card mt-8 bg-[var(--powder-blush)] p-6 sm:p-7"
      >
        <p className="font-bold uppercase tracking-[.18em]">
          {language === "en" ? "Skills toolkit" : "Kit de habilidades"}
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          <div>
            <p className="font-bold">
              {language === "en" ? "Data & modeling" : "Datos y modelado"}
            </p>
            <p className="mt-2 text-sm">
              Predictive modeling, spatial statistics, computer vision,
              clustering, feature engineering, explainability
            </p>
          </div>
          <div>
            <p className="font-bold">
              {language === "en"
                ? "Languages & frameworks"
                : "Lenguajes y frameworks"}
            </p>
            <p className="mt-2 text-sm">
              Python, R, SQL, pandas, scikit-learn, TensorFlow, PyTorch,
              GeoPandas
            </p>
          </div>
          <div>
            <p className="font-bold">
              {language === "en"
                ? "Cloud & visualization"
                : "Nube y visualización"}
            </p>
            <p className="mt-2 text-sm">
              AWS S3, Lambda, Bedrock, Power BI, Tableau, Folium, automated
              reporting
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
