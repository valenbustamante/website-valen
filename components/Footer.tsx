"use client";

import { motion } from "framer-motion";
import { DoodleAsset } from "./DoodleAsset";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="section pb-7 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className="sketch-card overflow-hidden bg-[var(--vanilla-cream)] text-[var(--ink)]"
      >
        <div className="px-6 py-10 text-center sm:px-9 sm:py-12">
          <p className="display mx-auto max-w-2xl text-3xl leading-tight sm:text-6xl">
            {language === "en"
              ? "Let's make data more useful."
              : "Hagamos que los datos sean más útiles."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:valenbustamanteq@gmail.com"
              className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--canvas)] px-4 py-2 text-sm font-bold"
            >
              valenbustamanteq@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/valenbustamanteq"
              className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--canvas)] px-4 py-2 text-sm font-bold"
            >
              LinkedIn
            </a>
          </div>
          <DoodleAsset
            name="portrait"
            alt="Hand-drawn self portrait"
            className="mx-auto mt-6 w-36"
          />
        </div>
        <div className="px-6 pb-5 text-center sm:px-9">
          <p className="mx-auto max-w-sm text-xs">
            {language === "en"
              ? "This page was made with care, curiosity, and a little too much coffee."
              : "Esta página fue hecha con cuidado, curiosidad y un poco de demasiado café."}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
