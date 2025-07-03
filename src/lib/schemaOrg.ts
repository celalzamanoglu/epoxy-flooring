export const milkywaySchemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Milkyway Epoxy",
  url: "https://milkywayepoxy.com",
  logo: "https://milkywayepoxy.com/favicon.ico",
  sameAs: ["https://www.instagram.com/milkywayepoxy", "https://wa.me/13233337383"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-323-333-7383",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
  department: {
    "@type": "LocalBusiness",
    name: "Milkyway Epoxy - South Florida Office",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 26.1224,
        longitude: -80.1373,
      },
      geoRadius: 100,
    },
    telephone: "+1-323-333-7383",
    openingHours: "Mo-Sa 08:00-18:00",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Garage Design",
        description: "Garage cabinets, car lifts, wall storage, and overhead racks.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Flake Epoxy Flooring",
        description: "Durable, slip-resistant flake epoxy for residential and commercial floors.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Metallic Epoxy Flooring",
        description: "Luxurious metallic epoxy finishes for concrete floors.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Concrete Polishing",
        description: "Polished concrete floors for warehouses, showrooms, and patios.",
      },
    },
  ],
};
