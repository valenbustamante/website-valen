"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Project,
  projectExtras,
  projects,
  ProjectCategory,
} from "../data/projects";
import { Language, useLanguage } from "./LanguageContext";
import { ProjectCard } from "./ProjectCard";

type GalleryItem = (typeof projectExtras)[string]["gallery"][number];

function ProjectGallery({
  images,
  language,
}: {
  images: GalleryItem[];
  language: Language;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => setIndex(0), [images]);
  if (!images.length)
    return (
      <div className="mt-3 rounded-[var(--radius)] border-2 border-dashed border-[var(--blue-slate)] bg-[var(--vanilla-cream)] p-5 text-sm text-[var(--blue-slate)]">
        {language === "en"
          ? "Project images will appear here."
          : "Las imágenes del proyecto aparecerán aquí."}
      </div>
    );
  const image = images[index];
  const move = (step: number) =>
    setIndex((index + step + images.length) % images.length);
  return (
    <div className="mt-3 rounded-[var(--radius)] border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] p-3">
      <div className="relative">
        <button
          onClick={() => move(1)}
          className="block w-full"
          aria-label={language === "en" ? "Next image" : "Siguiente imagen"}
        >
          <Image
            src={image.src}
            alt={image.caption[language]}
            width={1000}
            height={650}
            className="w-full rounded-[14px] object-cover"
          />
        </button>
        <button
          onClick={() => move(-1)}
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] text-xl"
          aria-label={language === "en" ? "Previous image" : "Imagen anterior"}
        >
          ←
        </button>
        <button
          onClick={() => move(1)}
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] text-xl"
          aria-label={language === "en" ? "Next image" : "Siguiente imagen"}
        >
          →
        </button>
      </div>
      <p className="mt-3 text-sm leading-relaxed">{image.caption[language]}</p>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {images.map((item, itemIndex) => (
          <button
            key={item.src}
            onClick={() => setIndex(itemIndex)}
            aria-label={item.caption[language]}
            className={`shrink-0 rounded-xl border-2 p-1 ${index === itemIndex ? "border-[var(--blue-slate)] bg-[var(--powder-blush)]" : "border-transparent"}`}
          >
            <Image
              src={item.src}
              alt=""
              width={100}
              height={70}
              className="h-14 w-20 rounded-lg object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProjectHub({ preview = false }: { preview?: boolean }) {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [active, setActive] = useState(1);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const labels =
    language === "en"
      ? {
          heading: "My Projects",
          all: "All",
          data: "Data Science & Analytics",
          ml: "Machine Learning & AI",
          more: "Explore detailed project work",
          brief: "Project brief",
          close: "Close",
          click: "Click a project card to open its story",
          gallery: "Project gallery",
        }
      : {
          heading: "Mis Proyectos",
          all: "Todos",
          data: "Ciencia de Datos y Analítica",
          ml: "Machine Learning e IA",
          more: "Explorar el trabajo detallado",
          brief: "Resumen del proyecto",
          close: "Cerrar",
          click: "Haz clic en una tarjeta para abrir su historia",
          gallery: "Galería del proyecto",
        };
  const filtered = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  const selected = filtered[active % filtered.length];
  const tabs: ["all" | ProjectCategory, string][] = [
    ["all", labels.all],
    ["data", labels.data],
    ["ml", labels.ml],
  ];
  const carousel =
    filter === "all"
      ? [
          filtered[(active + filtered.length - 1) % filtered.length],
          selected,
          filtered[(active + 1) % filtered.length],
        ]
      : filtered;
  const extras = openProject ? projectExtras[openProject.title.en] : undefined;
  useEffect(() => {
    setActive(filter === "all" ? 1 : 0);
  }, [filter]);
  const choose = (index: number, project: Project) => {
    setActive(index);
    if (!preview) setOpenProject(project);
  };
  return (
    <section id="projects" className="section py-14 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        className="display text-4xl sm:text-5xl"
      >
        <span className="marker bg-[var(--light-blue)]">{labels.heading}</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ delay: 0.15 }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {tabs.map(([value, label]) => (
          <motion.button
            whileTap={{ scale: 0.94 }}
            key={value}
            onClick={() => setFilter(value)}
            className={`rounded-full border-2 border-[var(--blue-slate)] px-4 py-2 text-sm font-bold transition ${filter === value ? "bg-[var(--light-blue)]" : "bg-[var(--canvas)]"}`}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>
      {!preview && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-[var(--blue-slate)] bg-[var(--vanilla-cream)] px-4 py-2 text-sm font-bold"
        >
          <span className="animate-pulse text-lg">↗</span>
          {labels.click}
        </motion.p>
      )}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className={`mt-10 ${filter === "all" ? "flex items-center justify-center gap-2 sm:gap-5" : "grid gap-7 md:grid-cols-2"}`}
      >
        {carousel.map((project) => {
          const index = filtered.indexOf(project);
          return (
            <div
              key={project.title.en}
              className={
                filter === "all"
                  ? project === selected
                    ? "w-full max-w-sm sm:w-[31%]"
                    : "hidden sm:block sm:w-[31%]"
                  : ""
              }
            >
              <ProjectCard
                project={project}
                language={language}
                selected={filter === "all" ? project === selected : true}
                onSelect={() => choose(index, project)}
              />
            </div>
          );
        })}
      </motion.div>
      {filter === "all" && (
        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              setActive((active + filtered.length - 1) % filtered.length)
            }
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] text-xl"
          >
            ←
          </button>
          <span className="text-sm font-bold">
            {active + 1} / {filtered.length}
          </span>
          <button
            onClick={() => setActive((active + 1) % filtered.length)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] text-xl"
          >
            →
          </button>
        </div>
      )}
      {preview && (
        <AnimatePresence mode="wait">
          <motion.article
            key={selected.title.en}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="sketch-card mt-10 grid gap-6 bg-[var(--light-blue)] p-6 sm:grid-cols-[1.2fr_.8fr] sm:p-8"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em]">
                {labels.brief}
              </p>
              <h3 className="display mt-2 text-3xl leading-tight">
                {selected.title[language]}
              </h3>
              <p className="mt-4 leading-relaxed">
                {selected.summary[language]}
              </p>
            </div>
            <div className="rounded-[var(--radius)] border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] p-5">
              <p className="font-bold">Methods & context</p>
              <div className="mt-4 grid gap-3">
                {selected.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between border-b-2 border-[var(--blue-slate)] pb-2 text-sm"
                  >
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {openProject && extras && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[rgba(39,43,53,.55)] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenProject(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 35, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              className="sketch-card max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-[var(--light-blue)] p-4 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em]">
                    {labels.brief}
                  </p>
                  <h3 className="display mt-2 text-2xl leading-tight sm:text-4xl">
                    {openProject.title[language]}
                  </h3>
                </div>
                <button
                  onClick={() => setOpenProject(null)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] text-xl"
                  aria-label={labels.close}
                >
                  ×
                </button>
              </div>
              {extras.status && (
                <p className="mt-6 rounded-[var(--radius)] border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] p-4 font-bold">
                  {extras.status[language]}
                </p>
              )}
              <div className="mt-7 grid gap-6 sm:grid-cols-[1.2fr_.8fr]">
                <ul className="space-y-4">
                  {openProject.details[language].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="font-black">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-[var(--radius)] border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] p-5">
                  <p className="font-bold">Methods & context</p>
                  <div className="mt-4 grid gap-3">
                    {openProject.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between border-b-2 border-[var(--blue-slate)] pb-2 text-sm"
                      >
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {extras.actions.map((link) =>
                      link.href ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] px-3 py-2 text-sm font-bold"
                        >
                          {link.label} ↗
                        </a>
                      ) : (
                        <span
                          key={link.label}
                          className="rounded-full border-2 border-dashed border-[var(--blue-slate)] px-3 py-2 text-sm"
                        >
                          {link.label}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-[.18em]">
                  {labels.gallery}
                </p>
                <ProjectGallery images={extras.gallery} language={language} />
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
      {preview && (
        <Link
          href="/projects"
          className="mt-9 inline-block rounded-full border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] px-5 py-3 font-bold"
        >
          {labels.more} →
        </Link>
      )}
    </section>
  );
}
