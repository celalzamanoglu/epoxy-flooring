import React from "react";
import HexagonSection, { HexagonSectionProps } from "./HexagonSection";

const sections: HexagonSectionProps[] = [
  {
    hexagonPosition: "left",
    ctaSmall: "Premium Epoxy Flooring",
    ctaBig: "TRANSFORM YOUR FLOORS\nWITH MILKYWAY EPOXY",
    features: [
      {
        title: "Seamless Epoxy Floors",
        desc: "Smooth, durable, and easy-to-clean surfaces for any space.",
      },
      {
        title: "Custom Designs",
        desc: "Metallic, flake, and color options to match your style.",
      },
      {
        title: "Professional Installation",
        desc: "Expert team, fast turnaround, and satisfaction guaranteed.",
      },
    ],
    ctaDesc:
      "Get a stunning, long-lasting floor with our expert epoxy installation. Fast, clean, and fully customized for your home or business. Discover the Milkyway difference today!",
    buttonText: "SCHEDULE A FREE QUOTE",
  },
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
  {
    hexagonPosition: "left",
    ctaSmall: "Residential Beauty & Value",
    ctaBig: "EPOXY FLOORS THAT\nELEVATE YOUR HOME",
    features: [
      {
        title: "Stunning Finishes",
        desc: "Metallic, marble, and flake for a unique look.",
      },
      {
        title: "Safe & Slip Resistant",
        desc: "Great for kitchens, bathrooms, and basements.",
      },
      {
        title: "Adds Value",
        desc: "Boosts home appeal and resale value instantly.",
      },
    ],
    ctaDesc:
      "Transform your living space with a beautiful, durable epoxy floor. Milkyway Epoxy brings luxury and practicality together for every room in your home.",
    buttonText: "GET A HOME QUOTE",
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
