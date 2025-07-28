"use client";

import React from "react";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <main className={styles.main}>
      {/* Header Section */}

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <ContactForm />
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
