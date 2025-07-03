"use client";

import React from "react";
import styles from "./LearnMorePage.module.css";
import Button from "./Button";
import HexagonSection from "./HexagonSection";
import HowItWorksSection from "./HowItWorksSection";
import ResultsSection from "./ResultsSection";
import Footer from "./Footer";

interface LearnMorePageProps {
  type: string;
  showHowItWorks?: boolean;
}

interface ServiceData {
  title: string;
  description: string;
  videoUrl: string;
  hexagonData: {
    ctaSmall: string;
    ctaBig: string;
    features: { title: string; desc: string }[];
    ctaDesc: string;
    buttonText: string;
  };
}

const serviceData: Record<string, ServiceData> = {
  "metallic-epoxy": {
    title: "PERFECT YOUR SPACE WITH OUR METALLIC EPOXY DESIGNS",
    description:
      "Transform your floors with our stunning metallic epoxy designs that combine artistic beauty with industrial strength. Our metallic epoxy creates a unique, shimmering effect that adds depth and elegance to any space. Perfect for restaurants, homes, showrooms, warehouses, countertops, and more. Experience the perfect blend of aesthetics and durability.",
    videoUrl: "https://www.youtube.com/embed/your-metallic-epoxy-video",
    hexagonData: {
      ctaSmall: "Premium Metallic Epoxy",
      ctaBig: "ELEVATE YOUR SPACE\nWITH METALLIC EPOXY",
      features: [
        {
          title: "Stunning Metallic Finish",
          desc: "Unique shimmering effect that adds depth and elegance to any space.",
        },
        {
          title: "Artistic Design Options",
          desc: "Custom colors and patterns to match your style and brand.",
        },
        {
          title: "Commercial Grade Durability",
          desc: "Industrial strength coating that withstands heavy traffic and wear.",
        },
      ],
      ctaDesc:
        "Our metallic epoxy creates a luxurious, one-of-a-kind finish that transforms ordinary floors into extraordinary works of art. Perfect for creating memorable impressions in commercial and residential spaces.",
      buttonText: "GET METALLIC EPOXY QUOTE",
    },
  },
  "flake-epoxy": {
    title: "CREATE UNIQUE SPACES WITH FLAKE EPOXY FLOORING",
    description:
      "Add personality and character to your floors with our flake epoxy flooring solutions. Our decorative flakes come in various colors and sizes, allowing you to create custom designs that reflect your style. Ideal for garages, patios, pool decks, driveways, basements, and more. Get a durable, slip-resistant surface that looks amazing.",
    videoUrl: "https://www.youtube.com/embed/your-flake-epoxy-video",
    hexagonData: {
      ctaSmall: "Decorative Flake Epoxy",
      ctaBig: "CUSTOMIZE YOUR FLOOR\nWITH FLAKE EPOXY",
      features: [
        {
          title: "Decorative Flake Options",
          desc: "Various colors and sizes to create unique, personalized designs.",
        },
        {
          title: "Slip-Resistant Surface",
          desc: "Enhanced safety with textured finish perfect for outdoor areas.",
        },
        {
          title: "Weather Resistant",
          desc: "Durable coating that withstands extreme temperatures and moisture.",
        },
      ],
      ctaDesc:
        "Our flake epoxy creates beautiful, textured surfaces that are both functional and visually appealing. Perfect for outdoor spaces and high-traffic areas that need both style and durability.",
      buttonText: "GET FLAKE EPOXY QUOTE",
    },
  },
  "concrete-polishing": {
    title: "REVEAL THE BEAUTY WITH CONCRETE POLISHING",
    description:
      "Unlock the hidden potential of your concrete floors with our professional concrete polishing services. We transform dull, worn concrete into stunning, high-gloss surfaces that rival the most expensive flooring materials. Perfect for commercial, industrial, and residential spaces. Experience the natural beauty of polished concrete.",
    videoUrl: "https://www.youtube.com/embed/your-concrete-polishing-video",
    hexagonData: {
      ctaSmall: "Professional Concrete Polishing",
      ctaBig: "POLISH YOUR CONCRETE\nTO PERFECTION",
      features: [
        {
          title: "High-Gloss Finish",
          desc: "Transform dull concrete into stunning, reflective surfaces.",
        },
        {
          title: "Natural Beauty",
          desc: "Reveal the inherent beauty and character of your concrete.",
        },
        {
          title: "Low Maintenance",
          desc: "Easy to clean and maintain with long-lasting shine.",
        },
      ],
      ctaDesc:
        "Our concrete polishing process reveals the natural beauty of your concrete while creating a durable, low-maintenance surface that will last for years to come.",
      buttonText: "GET POLISHING QUOTE",
    },
  },
  "garage-design": {
    title: "TRANSFORM YOUR GARAGE WITH PROFESSIONAL DESIGN",
    description:
      "Turn your garage into a functional, beautiful space with our comprehensive garage design services. From epoxy flooring to custom storage solutions, we create garages that work as hard as you do. Specializing in cabinets, car lifts, wall storage, and overhead racks. Make your garage the envy of the neighborhood.",
    videoUrl: "https://www.youtube.com/embed/your-garage-design-video",
    hexagonData: {
      ctaSmall: "Complete Garage Solutions",
      ctaBig: "DESIGN YOUR DREAM\nGARAGE SPACE",
      features: [
        {
          title: "Custom Storage Solutions",
          desc: "Cabinets, wall storage, and overhead racks for maximum organization.",
        },
        {
          title: "Professional Epoxy Flooring",
          desc: "Durable, beautiful floors that withstand vehicle traffic and spills.",
        },
        {
          title: "Car Lift Installation",
          desc: "Professional installation of car lifts and automotive equipment.",
        },
      ],
      ctaDesc:
        "We transform ordinary garages into extraordinary spaces with our comprehensive design and installation services. Create a garage that's both functional and beautiful.",
      buttonText: "GET GARAGE DESIGN QUOTE",
    },
  },
};

const LearnMorePage: React.FC<LearnMorePageProps> = ({
  type,
  showHowItWorks = true,
}) => {
  const data = serviceData[type] || serviceData["metallic-epoxy"];

  return (
    <main className="mt-[50vh] mb-[100vh] bg-[#1C1C1C]">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <iframe
              src={data.videoUrl}
              title={`${data.title} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button>SCHEDULE A CALL</Button>
          </div>
        </div>
      </section>

      {/* Hexagon Section */}
      <HexagonSection
        hexagonPosition="right"
        ctaSmall={data.hexagonData.ctaSmall}
        ctaBig={data.hexagonData.ctaBig}
        features={data.hexagonData.features}
        ctaDesc={data.hexagonData.ctaDesc}
        buttonText={data.hexagonData.buttonText}
      />

      {/* How It Works Section */}
      {showHowItWorks && <HowItWorksSection />}

      {/* Results Section */}
      <ResultsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default LearnMorePage;
