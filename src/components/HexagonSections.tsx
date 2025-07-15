import React from "react";
import HexagonSection, { HexagonSectionProps } from "./HexagonSection";

const sections: HexagonSectionProps[] = [
  {
    hexagonPosition: "right",
    ctaSmall: "",
    ctaBig: "WHAT MAKES US\nDIFFERENT",
    features: [
      {
        title: "Certified Craftsmanship",
        desc: "Every customer receives an official Certificate of Completion.",
      },
      {
        title: "Limited Lifetime Warranty - Flake Floors",
        desc: "Flake floors backed by long-term confidence.",
      },
      {
        title: "Metallic Floor Warranty",
        desc: "We stand behind our metallic art floors with limited protection.",
      },
      {
        title: "1-Day Installations - Flake Floors",
        desc: "From bare concrete to finished floor — all in a day.",
      },
      {
        title: "Nationwide Service for Big Projects",
        desc: "Based in South Florida — but we go where the art is.",
      },
      {
        title: "Custom Color Blends",
        desc: "Your floor, your style — fully personalized designs.",
      },
      {
        title: "Premium Materials Only",
        desc: "We use top-tier resins and pigments for lasting beauty.",
      },
      {
        title: "Showroom-Quality Finishes",
        desc: "High-end looks with industrial-grade durability.",
      },
    ],
    ctaDesc: "",
    buttonText: "GET A BUSINESS QUOTE",
  },
];

const HexagonSections: React.FC = () => (
  <div>
    {sections.map((props, i) => (
      <HexagonSection key={i} {...props} />
    ))}
  </div>
);

export default HexagonSections;
