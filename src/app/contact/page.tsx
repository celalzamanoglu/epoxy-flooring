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
      <section className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>CONTACT US</h1>
          <p className={styles.description}>
            Ready to transform your space with stunning epoxy flooring? Have questions about our services or want to
            discuss your project? We&apos;re here to help make your flooring dreams a reality. Reach out to us today and
            let&apos;s create something extraordinary together.
          </p>
        </div>
      </section>

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
