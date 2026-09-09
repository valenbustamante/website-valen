"use client";

import { DoodleAsset } from "./DoodleAsset";

// Decorative only: content remains readable and interactive above this layer.
export function BackgroundDoodles({
  variant = "home",
}: {
  variant?: "home" | "projects";
}) {
  if (variant === "projects")
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <DoodleAsset
          name="graph"
          className="absolute left-[5%] top-[16%] hidden w-36 opacity-75 md:block"
        />
        <DoodleAsset
          name="globe"
          className="absolute right-[5%] bottom-[18%] hidden w-40 opacity-75 lg:block"
        />
      </div>
    );
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <DoodleAsset
        name="circles"
        className="absolute left-[2%] top-[7%] hidden w-40 opacity-90 lg:block"
      />
      <DoodleAsset
        name="cloud"
        className="absolute right-[1%] top-[20%] hidden w-44 opacity-85 md:block"
      />
      <DoodleAsset
        name="dots"
        className="absolute left-[3%] top-[49%] hidden w-32 opacity-85 lg:block"
      />
      <DoodleAsset
        name="star"
        className="absolute right-[4%] top-[66%] hidden w-28 opacity-90 md:block"
      />
      <DoodleAsset
        name="light"
        className="absolute bottom-[5%] left-[5%] hidden w-32 opacity-90 lg:block"
      />
      <DoodleAsset
        name="donut"
        className="absolute right-[2%] top-[43%] hidden w-36 opacity-75 xl:block"
      />
      <DoodleAsset
        name="sent"
        className="absolute left-[1%] top-[78%] hidden w-36 opacity-75 xl:block"
      />
      <DoodleAsset
        name="bars"
        className="absolute bottom-[17%] right-[2%] hidden w-36 opacity-80 xl:block"
      />
    </div>
  );
}
