import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { milkywaySchemaOrg } from "@/lib/schemaOrg";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? "https://milkywayepoxy.com" : "http://localhost:3000"),
  title: "Milkyway Epoxy | Nationwide Epoxy Flooring & Garage Solutions",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Milkyway Epoxy transforms concrete into stunning, durable surfaces with flake epoxy, metallic epoxy, and polished concrete. From garages to showrooms, we serve homes and businesses nationwide with rapid 1-day installations and premium finishes.",
  keywords:
    "epoxy flooring, garage design, concrete polishing, flake epoxy, metallic epoxy, garage cabinets, car lifts, wall storage, overhead racks, showroom flooring, restaurant flooring, warehouse floors, patio coating, driveway epoxy, residential epoxy floors, commercial epoxy floors, industrial epoxy flooring, countertop epoxy, pool deck epoxy, South Florida epoxy, nationwide epoxy installers",
  authors: [{ name: "Milkyway Epoxy" }],
  creator: "Milkyway Epoxy",
  openGraph: {
    title: "Milkyway Epoxy | Stunning Epoxy Floors & Garage Makeovers",
    description:
      "Nationwide epoxy flooring and garage design experts. We deliver beautiful, durable floors and garage systems in 1 day. Trusted by homeowners, restaurants, warehouses, and businesses across the U.S.",
    url: "https://milkywayepoxy.com",
    siteName: "Milkyway Epoxy",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Milkyway Epoxy - Flake & Metallic Floor Specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milkyway Epoxy | Nationwide Epoxy Floor & Garage Experts",
    description:
      "Durable, stylish epoxy floors and garage designs — completed in just 1 day. From South Florida to across the U.S., we deliver premium results fast.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Milkyway Epoxy - Flake & Metallic Floor Specialists",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(milkywaySchemaOrg) }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Load gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17396887782`}
          strategy="afterInteractive" // use "beforeInteractive" to force <head> placement
        />

        {/* Init + config */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17396887782');
          `}
        </Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
