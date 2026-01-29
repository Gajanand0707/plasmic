// components/sections/HeroSection.tsx
import React from "react";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
};

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="py-20 px-6 bg-gray-100" style={{ display: "block" }}>
      <h1 className="text-4xl font-bold" style={{ color: "#000", visibility: "visible" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg" style={{ color: "#000", visibility: "visible" }}>
          {subtitle}
        </p>
      )}
    </section>
  );
}