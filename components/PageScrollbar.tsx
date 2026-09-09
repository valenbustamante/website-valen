"use client";

import { useEffect, useRef, useState } from "react";

export function PageScrollbar() {
  const [progress, setProgress] = useState(0);
  const track = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      const maximum =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maximum > 0 ? window.scrollY / maximum : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const jump = (event: React.MouseEvent<HTMLButtonElement>) => {
    const bounds = track.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = Math.min(
      1,
      Math.max(0, (event.clientY - bounds.top) / bounds.height),
    );
    window.scrollTo({
      top: next * (document.documentElement.scrollHeight - window.innerHeight),
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={track}
      onClick={jump}
      aria-label="Page scroll position"
      className="fixed right-3 top-1/2 z-40 hidden h-40 w-5 -translate-y-1/2 rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] p-1 shadow-[2px_3px_0_var(--blue-slate)] lg:block"
    >
      <span
        className="absolute left-1/2 top-1 h-8 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] transition-transform duration-150"
        style={{ transform: `translate(-50%, ${progress * 116}px)` }}
      />
    </button>
  );
}
