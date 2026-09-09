"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { FunFactPlayground } from "./FunFactPlayground";

export function About() {
  const { language } = useLanguage();
  const copy =
    language === "en"
      ? {
           eyebrow: "Off the spreadsheet",
           title: "A less serious introduction.",
           text: "I am from Baranoa, a town in the heart of Atlántico, Colombia. I have a very small dog named Titán and a cat named Schrodinger, who never learned that his name is Schrodinger. If I am not cooking, I am probably painting or playing Stardew Valley, my total pandemic obsession and a place I always return to. One day I would love to have a farm just as pretty in real life. I also want to learn digital animation and make a small animated short about anything at all.",
           story: "When I was little, I wanted to be a firefighter, which has very little to do with what I do now. At 15, after earning a scholarship, I started studying Data Science at Universidad del Norte. It was a new program, and it felt like a place where many of the things that interested me could come together. I may not have ended up putting out fires, but I did learn to enjoy solving complex problems with calm, curiosity, and many questions. Curiosity, in the end, is what defines me most.",
           note: "A few colorful moments from life outside the spreadsheet.",
        }
      : {
           eyebrow: "Fuera de la hoja de cálculo",
           title: "Una introducción menos seria.",
           text: "Soy de Baranoa, un pueblo en el corazón del Atlántico, Colombia. Tengo un perro llamado Titán, que es increíblemente pequeño, y un gato llamado Schrodinger, que nunca aprendió que se llama Schrodinger. Si no estoy cocinando, probablemente estoy pintando o jugando Stardew Valley, mi obsesión total durante la pandemia y un lugar al que siempre vuelvo. Algún día me gustaría tener una granja igual de bonita en la vida real. También me gustaría aprender animación digital y hacer un pequeño cortometraje animado sobre cualquier cosa.",
           story: "Cuando era niña quería ser bombera, lo cual tiene muy poco que ver con lo que hago ahora. A los 15 años, después de ganarme una beca, empecé a estudiar Ciencia de Datos en la Universidad del Norte. Era una carrera nueva y sentí que era un lugar donde podían encontrarse muchas de las cosas que me interesaban. Supongo que no terminé apagando incendios, pero sí aprendí a disfrutar resolver problemas complejos con calma, curiosidad y muchas preguntas. La curiosidad, al final, es lo que más me define.",
           note: "Algunos momentos coloridos de la vida fuera de la hoja de cálculo.",
        };
  return (
    <section className="section py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, rotate: -1 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        className="sketch-card grid overflow-visible bg-[var(--powder-blush)] md:grid-cols-[1.1fr_.9fr]"
      >
        <div className="p-7 sm:p-10">
          <p className="font-bold uppercase tracking-[.18em]">{copy.eyebrow}</p>
          <h2 className="display mt-3 text-4xl leading-tight sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed">{copy.text}</p>
          <p className="mt-4 max-w-xl leading-relaxed">{copy.story}</p>
          <p className="mt-6 inline-block rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] px-4 py-2 text-sm font-bold">
            {copy.note}
          </p>
        </div>
        <div className="border-t-2 border-[var(--blue-slate)] p-5 md:border-l-2 md:border-t-0">
          <FunFactPlayground />
        </div>
      </motion.div>
    </section>
  );
}
