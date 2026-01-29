import React from "react";

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export default function HeroSection({
  title = "Welcome to our website",
  subtitle = "Your amazing subtitle here",
}: HeroSectionProps) {
  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#f3f4f6",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#000000",
          margin: "0 0 16px 0",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#000000",
          margin: "0",
        }}
      >
        {subtitle}
      </p>
    </section>
  );
}