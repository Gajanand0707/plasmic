"use client";

import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import HeroSection from "@/pages/components/HeroSection";

/** ✅ MUST be registered on PLASMIC */
PLASMIC?.registerComponent(HeroSection, {
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