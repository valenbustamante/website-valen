"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const questions = [
  {
    q: {
      en: "What is your primary focus?",
      es: "¿Cuál es tu enfoque principal de investigación?",
    },
    a: {
      en: "Machine Learning and Data Science, with a focus on turning complex, real-world records into useful models and decisions.",
      es: "Machine Learning y Ciencia de Datos, con enfoque en convertir registros complejos del mundo real en modelos y decisiones útiles.",
    },
  },
  {
    q: {
      en: "What tools and frameworks do you use?",
      es: "¿Qué herramientas y frameworks utilizas?",
    },
    a: {
      en: "Python (pandas, scikit-learn, TensorFlow), R, SQL, AWS (S3, Lambda, Bedrock), Power BI, and Tableau.",
      es: "Python (pandas, scikit-learn, TensorFlow), R, SQL, AWS (S3, Lambda, Bedrock), Power BI y Tableau.",
    },
  },
  {
    q: {
      en: "What is your academic background?",
      es: "¿Cuál es tu formación académica?",
    },
    a: {
      en: "I am an MSc in Artificial Intelligence candidate at UM-Flint and hold a BSc in Data Science from Universidad del Norte.",
      es: "Soy candidata a Maestría en Inteligencia Artificial en UM-Flint y profesional en Ciencia de Datos de Universidad del Norte.",
    },
  },
];

export function FAQ() {
  const { language } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section py-12 pb-16 sm:py-20 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        className="mb-8"
      >
        <p className="font-bold uppercase tracking-[.18em] text-[var(--blue-slate)]">
          FAQ / Reflection
        </p>
        <h2 className="display mt-2 text-4xl sm:text-5xl">
          {language === "en"
            ? "A little more context."
            : "Un poco más de contexto."}
        </h2>
      </motion.div>
      <div className="sketch-card overflow-hidden bg-[var(--vanilla-cream)]">
        {questions.map((item, index) => (
          <div
            key={item.q.en}
            className="border-b-2 border-[var(--blue-slate)] last:border-0"
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold sm:p-6"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>{item.q[language]}</span>
              <span className="text-2xl">{open === index ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {open === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 leading-relaxed sm:px-6">
                    {item.a[language]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
