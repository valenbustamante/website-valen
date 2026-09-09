"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { publicAsset } from "../lib/assets";
const doodles = {
  star: publicAsset("/img/doodles/star.png"),
  light: publicAsset("/img/doodles/light.png"),
  graph: publicAsset("/img/doodles/line-graph.png"),
  globe: publicAsset("/img/doodles/globe.png"),
  cloud: publicAsset("/img/doodles/cloud.png"),
  circles: publicAsset("/img/doodles/two-circles.png"),
  dots: publicAsset("/img/doodles/graph-3-dots.png"),
  donut: publicAsset("/img/doodles/ugly-donut.png"),
  sent: publicAsset("/img/doodles/message-sent.png"),
  bars: publicAsset("/img/doodles/bar-plot.png"),
  portrait: publicAsset("/img/doodles/footer-self-portrait.png"),
};

const idleMotion: Record<
  keyof typeof doodles,
  {
    x: number[];
    y: number[];
    rotate: number[];
    scale: number[];
    duration: number;
  }
> = {
  star: {
    x: [0, 5, -2, 0],
    y: [0, -10, -4, 0],
    rotate: [0, 10, -8, 0],
    scale: [1, 1.06, 0.98, 1],
    duration: 5,
  },
  light: {
    x: [0, -7, 3, 0],
    y: [0, -6, 4, 0],
    rotate: [0, -6, 7, 0],
    scale: [1, 0.96, 1.04, 1],
    duration: 6,
  },
  graph: {
    x: [0, 8, 0, 0],
    y: [0, -5, -9, 0],
    rotate: [0, 4, -3, 0],
    scale: [1, 1.03, 1, 1],
    duration: 7,
  },
  globe: {
    x: [0, 5, -5, 0],
    y: [0, -8, -3, 0],
    rotate: [0, 8, -8, 0],
    scale: [1, 1.02, 1.04, 1],
    duration: 8,
  },
  cloud: {
    x: [0, 14, 5, 0],
    y: [0, -3, 2, 0],
    rotate: [0, 2, -2, 0],
    scale: [1, 1.03, 1, 1],
    duration: 9,
  },
  circles: {
    x: [0, -6, 4, 0],
    y: [0, -6, 3, 0],
    rotate: [0, 12, 5, 0],
    scale: [1, 1.05, 0.97, 1],
    duration: 7,
  },
  dots: {
    x: [0, 5, -4, 0],
    y: [0, -11, -2, 0],
    rotate: [0, -8, 6, 0],
    scale: [1, 1.06, 1, 1],
    duration: 5,
  },
  donut: {
    x: [0, 6, -3, 0],
    y: [0, -7, 2, 0],
    rotate: [0, 15, -7, 0],
    scale: [1, 0.97, 1.04, 1],
    duration: 8,
  },
  sent: {
    x: [0, 10, 0, 0],
    y: [0, -5, -8, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.03, 1, 1],
    duration: 7,
  },
  bars: {
    x: [0, 5, -6, 0],
    y: [0, -10, -2, 0],
    rotate: [0, 4, -4, 0],
    scale: [1, 1.05, 1, 1],
    duration: 6,
  },
  portrait: {
    x: [0, 3, -3, 0],
    y: [0, -5, 0, 0],
    rotate: [0, 2, -2, 0],
    scale: [1, 1.02, 1, 1],
    duration: 6,
  },
};

export function DoodleAsset({
  name,
  className = "",
  alt = "",
  style,
}: {
  name: keyof typeof doodles;
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
}) {
  const idle = idleMotion[name];
  const [burst, setBurst] = useState(false);
  const reactToClick = () => {
    setBurst(true);
    window.setTimeout(() => setBurst(false), 650);
  };
  return (
    <motion.div
      className={`${className} pointer-events-auto cursor-pointer`}
      style={style}
      onClick={reactToClick}
      whileHover={{ scale: 1.12, rotate: 6 }}
      animate={{
        x: burst ? [0, 14, -10, 0] : idle.x,
        y: burst ? [0, -22, 8, 0] : idle.y,
        rotate: burst ? [0, 28, -18, 0] : idle.rotate,
        scale: burst ? [1, 1.38, 0.86, 1] : idle.scale,
      }}
      transition={{
        duration: burst ? 0.6 : idle.duration,
        repeat: burst ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={doodles[name]}
        alt={alt}
        width={180}
        height={180}
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
}
