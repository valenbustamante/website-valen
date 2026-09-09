"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DoodleAsset } from "./DoodleAsset";
import { useLanguage } from "./LanguageContext";
import { publicAsset } from "../lib/assets";

export function Hero() {
  const { language } = useLanguage();
  const es = language === "es";
  const prefix = es ? "Hola, soy" : "Hi, I'm";
  const name = "ValentinaBustamante";
  const [prefixLength, setPrefixLength] = useState(0);
  const [nameLength, setNameLength] = useState(0);
  const [portraitFlipped, setPortraitFlipped] = useState(false);
  useEffect(() => {
    setPrefixLength(0);
    setNameLength(0);
    let nameInterval: number | undefined;
    const prefixTimer = window.setInterval(
      () =>
        setPrefixLength((length) => {
          if (length >= prefix.length) {
            window.clearInterval(prefixTimer);
            return length;
          }
          return length + 1;
        }),
      65,
    );
    const nameTimer = window.setTimeout(
      () => {
        nameInterval = window.setInterval(
          () =>
            setNameLength((length) => {
              if (length >= name.length) {
                if (nameInterval) window.clearInterval(nameInterval);
                return length;
              }
              return length + 1;
            }),
          85,
        );
      },
      prefix.length * 65 + 220,
    );
    return () => {
      window.clearInterval(prefixTimer);
      window.clearTimeout(nameTimer);
      if (nameInterval) window.clearInterval(nameInterval);
    };
  }, [prefix]);
  const typedName = name.slice(0, nameLength);
  const complete = nameLength === name.length;
  const prefixDone = prefixLength === prefix.length;
  return (
    <section className="section grid items-center gap-9 py-10 sm:gap-12 sm:py-16 md:grid-cols-[1.25fr_.75fr] md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-5 font-bold uppercase tracking-[.2em] text-[var(--blue-slate)]">
          {es ? "Datos con intención" : "Data with intention"}
        </p>
        <h1 className="display text-4xl leading-[1.1] sm:text-7xl">
          <span>
            {prefix.slice(0, prefixLength)}
            {!prefixDone && <span className="animate-pulse">|</span>}
          </span>
          <em className="mt-2 block italic sm:mt-3">
            <span
              className={`inline-block px-1 transition-colors duration-500 ${complete ? "bg-[var(--light-blue)]" : ""}`}
            >
              {typedName.slice(0, 9)}
              <span className="mt-4 block">
                {typedName.slice(9)}
                {prefixDone && (
                  <span className="animate-pulse not-italic">|</span>
                )}
              </span>
            </span>
          </em>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed">
          {es
            ? "Científica de Datos e investigadora de IA especializada en Machine Learning, análisis estadístico y flujos de trabajo LLM agénticos."
            : "Data Scientist specializing in Machine Learning, Statistical Analysis, and Agentic LLM Workflows."}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--blue-slate)]">
          {es
            ? "Estudiante de Maestría en Inteligencia Artificial en University of Michigan-Flint | Profesional en Ciencia de Datos de Universidad del Norte."
            : "MSc in Artificial Intelligence student at University of Michigan-Flint | BSc in Data Science from Universidad del Norte."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:valenbustamanteq@gmail.com"
            className="sketch-card bg-[var(--powder-blush)] px-5 py-3 font-bold"
          >
            {es ? "Contacto" : "Contact"}
          </a>
          <a
            href="https://drive.google.com/file/d/16IUjuSysRCiuB891LWOJlBkmMg2LyNlS/view?usp=sharing"
            target="_blank"
            className="sketch-card bg-[var(--vanilla-cream)] px-5 py-3 font-bold"
          >
            {es ? "Ver CV" : "View resume"}
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 3 }}
        animate={{ opacity: 1, rotate: 0 }}
        className="sketch-card relative mx-auto w-full max-w-sm bg-[var(--vanilla-cream)] p-8"
      >
        <DoodleAsset name="star" className="absolute -left-7 -top-7 w-20" />
        <DoodleAsset name="light" className="absolute -right-8 bottom-2 w-20" />
        <div style={{ perspective: "1200px" }}>
          <motion.button
            type="button"
            onClick={() => setPortraitFlipped((flipped) => !flipped)}
            aria-label="Flip portrait card"
            animate={{ rotateY: portraitFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative block aspect-[5/6] w-full cursor-pointer text-left"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-[14px]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={publicAsset("/img/main-pic.png")}
                alt="Valentina Bustamante"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover"
              />
            </div>
            <div
              className="absolute inset-0 flex flex-col justify-between rounded-[14px] border-2 border-[var(--blue-slate)] bg-[var(--light-blue)] p-6"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="font-bold uppercase tracking-[.18em]">
                Data with intention
              </p>
              <p className="display text-4xl leading-none">
                Curious by default.
              </p>
              <p className="text-sm leading-relaxed">
                Click again to turn the card back.
              </p>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
