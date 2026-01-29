"use client";

import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import HeroSection from "@/pages/components/HeroSection";

/** ✅ Register code component */
PLASMIC.registerComponent(HeroSection, {
  name: "HeroSection",
  props: {
    title: {
      type: "string",
      defaultValue: "Welcome to our website",
    },
    subtitle: {
      type: "string",
    },
  },
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}