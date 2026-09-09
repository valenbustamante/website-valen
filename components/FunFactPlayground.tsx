"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { publicAsset } from "../lib/assets";

type Photo = { src: string; alt: string };
const photos: Photo[] = [
  {
    src: publicAsset("/img/fun-facts/graduation-pic.jpg"),
    alt: "Valentina at graduation",
  },
  {
    src: publicAsset("/img/fun-facts/cheetos-pic.png"),
    alt: "Valentina in a colorful ball pit",
  },
  {
    src: publicAsset("/img/fun-facts/plushie-pic.png"),
    alt: "Valentina surrounded by plush toys",
  },
  {
    src: publicAsset("/img/fun-facts/titan-pic.png"),
    alt: "Titán",
  },
  {
    src: publicAsset("/img/fun-facts/schrodi-pic.png"),
    alt: "Schrodinger",
  },
];
const positions = [
  { left: "7%", top: "9%", width: 145, height: 190, rotate: -4 },
  { left: "52%", top: "18%", width: 130, height: 165, rotate: 3 },
  { left: "38%", top: "56%", width: 120, height: 130, rotate: -3 },
  { left: "64%", top: "49%", width: 125, height: 145, rotate: 5 },
  { left: "16%", top: "49%", width: 115, height: 140, rotate: -6 },
];

export function FunFactPlayground() {
  const area = useRef<HTMLDivElement>(null);
  const [scales, setScales] = useState<number[]>(photos.map(() => 1));
  const [front, setFront] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const dogClicks = useRef(0);
  const dogTimer = useRef<number | undefined>(undefined);
  const resize = (index: number, change: number) =>
    setScales((current) =>
      current.map((scale, item) =>
        item === index ? Math.min(1.45, Math.max(0.65, scale + change)) : scale,
      ),
    );
  const reset = () => {
    setScales(photos.map(() => 1));
    setFront(0);
    setResetKey((key) => key + 1);
  };
  const checkDogClicks = (photo: Photo) => {
    if (!photo.src.includes("titan")) return;
    dogClicks.current += 1;
    if (dogTimer.current) window.clearTimeout(dogTimer.current);
    dogTimer.current = window.setTimeout(() => {
      dogClicks.current = 0;
    }, 1200);
    if (dogClicks.current === 3) {
      dogClicks.current = 0;
      window.dispatchEvent(new Event("open-sketchbook"));
    }
  };
  return (
    <div
      ref={area}
      className="relative h-72 overflow-visible rounded-[var(--radius)] bg-[var(--vanilla-cream)] p-2 sm:h-80"
    >
      <button
        onClick={reset}
        className="absolute right-3 top-3 z-30 rounded-full border-2 border-[var(--blue-slate)] bg-[var(--light-blue)] px-3 py-1 text-xs font-bold"
      >
        Reset
      </button>
      <svg
        viewBox="0 0 260 90"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-16px] top-[43%] z-30 w-44 text-[var(--blue-slate)] sm:right-[-205px] sm:w-56"
      >
        <text x="82" y="38" fill="currentColor" fontSize="15" fontWeight="700">
          Pet Titán
        </text>
        <text x="82" y="57" fill="currentColor" fontSize="15" fontWeight="700">
          three times
        </text>
        <path
          d="M74 47C60 31 43 35 22 47M37 31L20 48L42 61"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
      {photos.map((photo, index) => {
        const position = positions[index % positions.length];
        const scale = scales[index] ?? 1;
        return (
          <motion.div
            key={`${photo.src}-${resetKey}`}
            drag
            dragConstraints={area}
            dragElastic={0.08}
            onPointerDown={() => setFront(index)}
            onTap={() => checkDogClicks(photo)}
            whileDrag={{ scale: scale * 1.05, rotate: 0, cursor: "grabbing" }}
            animate={{
              rotate: position.rotate,
              scale,
              zIndex: front === index ? 20 : index + 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            style={{
              left: position.left,
              top: position.top,
              width: position.width,
              height: position.height,
            }}
            className="absolute touch-none cursor-grab rounded-[18px] border-2 border-[var(--blue-slate)] bg-white p-1 shadow-[3px_4px_0_var(--blue-slate)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              draggable={false}
              sizes="160px"
              className="playground-image rounded-[13px] object-cover p-1"
            />
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
              <button
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => resize(index, -0.12)}
                className="grid h-7 w-7 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] font-black"
              >
                −
              </button>
              <button
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => resize(index, 0.12)}
                className="grid h-7 w-7 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] font-black"
              >
                +
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
