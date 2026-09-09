"use client";

import { motion } from "framer-motion";
import { Project } from "../data/projects";
import { Language } from "./LanguageContext";

export function ProjectCard({
  project,
  language,
  selected,
  onSelect,
}: {
  project: Project;
  language: Language;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      layout
      onClick={onSelect}
      whileHover={{ y: -7, rotate: -0.5 }}
      animate={{ scale: selected ? 1 : 0.9, opacity: selected ? 1 : 0.7 }}
      className="sketch-card flex min-h-[280px] flex-col bg-[var(--vanilla-cream)] p-4 text-left sm:min-h-[310px] sm:p-6"
    >
      <div>
        <span className="rounded-full bg-[var(--powder-blush)] px-3 py-1 text-xs font-bold uppercase">
          {project.category === "ml" ? "ML & AI" : "Data Science"}
        </span>
      </div>
      <h3 className="display mt-4 text-xl leading-none sm:mt-5 sm:text-2xl">
        {project.title[language]}
      </h3>
      <p className="mt-4 leading-relaxed">{project.summary[language]}</p>
      <div className="mt-auto border-t-2 border-[var(--blue-slate)] pt-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest">
          Tools / Herramientas
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--canvas)] px-2 py-1 text-xs font-bold"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
