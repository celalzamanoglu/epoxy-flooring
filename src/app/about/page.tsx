"use client";
import React from "react";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import HexagonSection from "@/components/HexagonSection";

const AboutPage = () => {
  const aboutFeatures = [
    {
      title: "South Florida Specialists",
      desc: "We specialize in transforming ordinary concrete into stunning, durable surfaces. Based in South Florida, we proudly offer flake flooring, metallic epoxy floors, and concrete polishing for residential, commercial, and industrial spaces.",
    },
    {
      title: "Fast & Quality Results",
      desc: "We combine high-end materials with expert craftsmanship to deliver flawless results — fast. Most projects are completed in just 1 day, and we provide a Certificate of Completion to every client, along with a limited lifetime warranty on flake floors and a limited warranty on metallic finishes.",
    },
    {
      title: "Nationwide Service",
      desc: "Whether you're local or across the country, we bring artistry and precision to every project. For large-scale and metallic floor installations, we serve clients nationwide.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#1c1c1c", minHeight: "100vh" }}>
      {/* About Us Section using HexagonSection */}
      <HexagonSection
        hexagonPosition="right"
        ctaSmall="About Our Company"
        ctaBig="ABOUT US"
        features={aboutFeatures}
        ctaDesc="At Milky Way Epoxy, we transform spaces with premium epoxy solutions that combine beauty, durability, and expert craftsmanship."
        buttonText="CONTACT US"
      />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AboutPage;
