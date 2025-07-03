"use client";

import React from "react";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <main className={styles.main}>
      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Left Side - Text Content */}
            <div className={styles.textContent}>
              <h1 className={styles.title}>CONTACT US</h1>
              <p className={styles.description}>
                Ready to transform your space with stunning epoxy flooring? Have questions about our services or want to
                discuss your project? We&apos;re here to help make your flooring dreams a reality. Reach out to us today
                and let&apos;s create something extraordinary together.
              </p>
            </div>

            {/* Right Side - Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  <FaMapMarkerAlt />
                </span>
                <span className={styles.text}>Based in South Florida – Serving Nationwide</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  <FaPhone />
                </span>
                <a href="tel:323-333-7383" className={styles.link}>
                  Call or Text 323-333-7383
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  <FaEnvelope />
                </span>
                <a href="mailto:info@milkywayepoxy.com" className={styles.link}>
                  info@milkywayepoxy.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  <FaWhatsapp />
                </span>
                <a
                  href="https://wa.link/milkywayepoxy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Click to Message Us
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>
                  <FaInstagram />
                </span>
                <a
                  href="https://instagram.com/milkywayepoxy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @milkywayepoxy
                </a>
              </div>

              <p className={styles.tagline}>
                Let&apos;s bring your vision to life — fast, flawless, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ContactPage;
