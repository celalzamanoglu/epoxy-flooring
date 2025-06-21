import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <span className={styles.brandName}>Milkway Epoxy</span>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linksColumn}>
              <a href="#">ABOUT US</a>
              <a href="#">PORTFOLIO</a>
              <a href="#">MATERIALS</a>
            </div>
            <div className={styles.linksColumn}>
              <a href="#">EPOXY FLOORING SERVICES</a>
              <a href="#">
                DESIGNING YOUR OWN PATTERN & CREATING UNIQUE SPACES
              </a>
              <a href="#">CONTACT US</a>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <p>© 2024 — Copyright Milkway Epoxy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
