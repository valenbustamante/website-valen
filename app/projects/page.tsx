"use client";

import { Navbar } from "../../components/Navbar";
import { ProjectHub } from "../../components/ProjectHub";
import { BackgroundDoodles } from "../../components/BackgroundDoodles";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDoodles variant="projects" />
      <Navbar />
      <ProjectHub />
    </main>
  );
}
