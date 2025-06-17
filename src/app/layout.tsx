import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Milkyway Epoxy Flooring | Premium Epoxy Floor Solutions in Arizona",
  description:
    "Transform your space with professional epoxy flooring solutions. Residential, commercial, and industrial epoxy floor coatings in Phoenix, AZ. Free quotes available.",
  keywords:
    "epoxy flooring, garage floor coating, industrial flooring, commercial flooring, Phoenix Arizona, floor coating, concrete coating",
  authors: [{ name: "Milkyway Epoxy Flooring" }],
  creator: "Milkyway Epoxy Flooring",
  openGraph: {
    title: "Milkyway Epoxy Flooring | Premium Epoxy Floor Solutions",
    description:
      "Professional epoxy flooring solutions for residential, commercial, and industrial spaces in Arizona.",
    url: "https://milkywayepoxy.com",
    siteName: "Milkyway Epoxy Flooring",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milkyway Epoxy - Premium Floor Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milkyway Epoxy | Premium Epoxy Floor Solutions",
    description:
      "Professional epoxy flooring solutions for residential, commercial, and industrial spaces in Arizona.",
    images: ["/og-image.jpg"],
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
