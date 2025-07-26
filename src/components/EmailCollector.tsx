"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailCollector.module.css";
import Button from "./Button";

interface EmailCollectorProps {
  onClose?: () => void;
  isOpen?: boolean;
}

const EmailCollector: React.FC<EmailCollectorProps> = ({ onClose, isOpen = true }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    emailjs.send(
      "service_a3ecr2j",
      "template_1i9eeza",
      {
        title: "Client Claimed Discount",
        message: "Client with email " + email + " claimed $699 discount",
      },
      "bAJ0an0KnC_BmMdP9"
    );
    onClose?.();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.discountBadge}>$699 OFF</div>

          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              SIGN UP WITH YOUR EMAIL AND GET AN EXCLUSIVE DISCOUNT TOWARD YOUR DREAM FLOOR
            </h2>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={styles.emailInput}
              required
            />

            <Button size="large" className={styles.claimButton}>
              CLAIM NOW
            </Button>
          </form>

          <div className={styles.limitedOffer}>LIMITED-TIME OFFER</div>
        </div>
      </div>
    </div>
  );
};

export default EmailCollector;
