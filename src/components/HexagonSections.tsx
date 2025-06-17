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
    ctaSmall: "Commercial & Industrial Solutions",
    ctaBig: "HEAVY-DUTY FLOORS\nFOR EVERY BUSINESS",
    features: [
      {
        title: "Chemical Resistant",
        desc: "Perfect for warehouses, factories, and garages.",
      },
      {
        title: "High Traffic Ready",
        desc: "Built to withstand forklifts, vehicles, and more.",
      },
      {
        title: "Low Maintenance",
        desc: "Easy to clean, seamless, and long-lasting.",
      },
    ],
    ctaDesc:
      "Upgrade your workspace with Milkyway Epoxy's commercial flooring. Our solutions are engineered for performance, safety, and style—no matter the industry.",
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
