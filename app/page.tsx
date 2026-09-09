"use client";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ProjectHub } from "../components/ProjectHub";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { BackgroundDoodles } from "../components/BackgroundDoodles";
import { About } from "../components/About";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundDoodles />
      <Navbar />
      <Hero />
      <ExperienceTimeline />
      <ProjectHub preview />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
