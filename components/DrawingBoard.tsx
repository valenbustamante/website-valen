"use client";

import { useEffect, useRef, useState } from "react";
import { theme } from "../theme.config";

const palette = [
  { name: "Ink", color: theme.colors.blueSlate },
  { name: "Coral", color: theme.colors.powderBlush },
  { name: "Cream", color: theme.colors.vanillaCream },
  { name: "Blue", color: theme.colors.lightBlue },
  { name: "Canvas", color: theme.colors.canvas },
  { name: "Black", color: theme.colors.ink },
];

const brushes = [
  { name: "Pencil", value: "pencil" },
  { name: "Marker", value: "marker" },
  { name: "Dots", value: "dots" },
] as const;

type Brush = (typeof brushes)[number]["value"];

export function DrawingBoard() {
  const [active, setActive] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const [color, setColor] = useState<string>(theme.colors.blueSlate);
  const [brush, setBrush] = useState<Brush>("pencil");
  const canvas = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  useEffect(() => {
    const resize = () => {
      const element = canvas.current;
      if (!element) return;
      const height = document.documentElement.scrollHeight;
      const ratio = window.devicePixelRatio || 1;
      setPageHeight(height);
      element.width = window.innerWidth * ratio;
      element.height = height * ratio;
      element.getContext("2d")?.scale(ratio, ratio);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(document.body);
    window.addEventListener("resize", resize);
    const open = () => setActive(true);
    window.addEventListener("open-sketchbook", open);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("open-sketchbook", open);
    };
  }, []);

  const point = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };
  const start = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const context = canvas.current?.getContext("2d");
    if (!context) return;
    const position = point(event);
    drawing.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    context.beginPath();
    context.moveTo(position.x, position.y);
    context.strokeStyle = color;
    context.globalAlpha = brush === "marker" ? 0.45 : 1;
    context.lineWidth = brush === "marker" ? 13 : 3;
    context.lineCap = "round";
    if (brush === "dots") {
      context.fillStyle = color;
      context.arc(position.x, position.y, 4, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.moveTo(position.x, position.y);
    }
  };
  const draw = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const context = canvas.current?.getContext("2d");
    if (!context) return;
    const position = point(event);
    if (brush === "dots") {
      context.beginPath();
      context.fillStyle = color;
      context.arc(position.x, position.y, 4, 0, Math.PI * 2);
      context.fill();
      return;
    }
    context.lineTo(position.x, position.y);
    context.stroke();
  };
  const clear = () =>
    canvas.current
      ?.getContext("2d")
      ?.clearRect(0, 0, window.innerWidth, pageHeight);
  const download = () => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;

    const { width, height } = element;
    const pixels = context.getImageData(0, 0, width, height).data;
    let left = width;
    let top = height;
    let right = -1;
    let bottom = -1;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        if (pixels[(y * width + x) * 4 + 3] === 0) continue;
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }

    if (right < 0) return;
    const padding = Math.round(20 * (window.devicePixelRatio || 1));
    left = Math.max(0, left - padding);
    top = Math.max(0, top - padding);
    right = Math.min(width - 1, right + padding);
    bottom = Math.min(height - 1, bottom + padding);

    const artwork = document.createElement("canvas");
    artwork.width = right - left + 1;
    artwork.height = bottom - top + 1;
    artwork
      .getContext("2d")
      ?.drawImage(
        element,
        left,
        top,
        artwork.width,
        artwork.height,
        0,
        0,
        artwork.width,
        artwork.height,
      );
    const link = document.createElement("a");
    link.download = "valentina-sketchbook.png";
    link.href = artwork.toDataURL("image/png");
    link.click();
  };

  return (
    <>
      <canvas
        ref={canvas}
        style={{ height: pageHeight }}
        onPointerDown={start}
        onPointerMove={draw}
        onPointerUp={() => {
          drawing.current = false;
        }}
        onPointerCancel={() => {
          drawing.current = false;
        }}
        className={`absolute left-0 top-0 z-50 w-full touch-none ${active ? "pointer-events-auto cursor-crosshair" : "pointer-events-none"}`}
      />
      {active && (
        <div className="fixed bottom-4 right-3 z-[60] flex max-w-[calc(100%-24px)] flex-wrap justify-end gap-2 sm:bottom-5 sm:right-4">
          <p className="w-full text-right text-xs font-bold text-[var(--blue-slate)] drop-shadow-[0_1px_0_var(--canvas)] sm:text-sm">
            Send me your artwork!!! pls :P
          </p>
          <div className="flex items-center gap-1 rounded-full border-2 border-[var(--blue-slate)] bg-[var(--canvas)] p-1.5 shadow-[2px_3px_0_var(--blue-slate)]">
            {palette.map((swatch) => (
              <button
                key={swatch.name}
                type="button"
                aria-label={`Draw with ${swatch.name}`}
                title={swatch.name}
                onClick={() => setColor(swatch.color)}
                className={`h-6 w-6 rounded-full border-2 border-[var(--blue-slate)] transition sm:h-7 sm:w-7 ${color === swatch.color ? "scale-110 ring-2 ring-[var(--ink)] ring-offset-1" : ""}`}
                style={{ backgroundColor: swatch.color }}
              />
            ))}
          </div>
          <div className="flex rounded-full border-2 border-[var(--blue-slate)] bg-[var(--canvas)] p-1 shadow-[2px_3px_0_var(--blue-slate)]">
            {brushes.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setBrush(option.value)}
                className={`rounded-full px-2 py-1 text-xs font-bold ${brush === option.value ? "bg-[var(--light-blue)]" : ""}`}
              >
                {option.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActive(false)}
            className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] px-3 py-2 text-xs font-bold shadow-[2px_3px_0_var(--blue-slate)] sm:px-4 sm:text-sm"
          >
            Close sketchbook
          </button>
          <button
            onClick={clear}
            className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--light-blue)] px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm"
          >
            Clear
          </button>
          <button
            onClick={download}
            className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm"
          >
            Download
          </button>
        </div>
      )}
    </>
  );
}
