"use client";

import Link from "next/link";
import { publicAsset } from "../lib/assets";

export function Navbar() {
  const copy = {
    projects: "Projects",
    experience: "Experience",
    resume: "Resume",
  };
  return (
    <header className="section py-3 sm:py-7">
      <nav className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] border-2 border-[var(--blue-slate)] bg-[var(--powder-blush)] p-3 sm:rounded-[var(--radius)] sm:px-5">
        <Link
          href="/"
          className="px-2 text-xs font-bold uppercase tracking-[.2em] text-white sm:text-sm"
        >
          Valentina Bustamante
        </Link>
        <div className="order-3 flex w-full flex-wrap items-center justify-center gap-2 text-xs font-bold sm:order-2 sm:w-auto sm:flex-nowrap sm:justify-end sm:gap-3 sm:text-sm">
          <Link
            className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] px-3 py-1.5 sm:px-4 sm:py-2"
            href="/projects"
          >
            {copy.projects}
          </Link>
          <a
            className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] px-3 py-1.5 sm:px-4 sm:py-2"
            href={publicAsset("/#experience")}
          >
            {copy.experience}
          </a>
          <a
            className="rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)] px-3 py-1.5 sm:px-4 sm:py-2"
            href="https://drive.google.com/file/d/16IUjuSysRCiuB891LWOJlBkmMg2LyNlS/view?usp=sharing"
            target="_blank"
            aria-label="Resume"
          >
            {copy.resume}
          </a>
          <a
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--blue-slate)] bg-[var(--vanilla-cream)]"
            href="https://linkedin.com/in/valenbustamanteq"
            target="_blank"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-[var(--blue-slate)]"
              aria-hidden="true"
            >
              <path d="M5.3 3.5A2.3 2.3 0 1 1 .7 3.5a2.3 2.3 0 0 1 4.6 0ZM1 8h4.1v13H1V8Zm6.7 0h4v1.8h.1c.6-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V21h-4.1v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H8.2V8Z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
