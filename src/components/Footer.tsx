import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <span className={styles.brandName}>Milkyway Epoxy</span>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linksColumn}>
              <Link href="/about">ABOUT US</Link>
              <Link href="/portfolio">PORTFOLIO</Link>
              <Link href="/contact">CONTACT US</Link>
            </div>
            <div className={styles.linksColumn}>
              <Link href="/learn-more/metallic-epoxy">METALLIC EPOXY FLOORING</Link>
              <Link href="/learn-more/flake-epoxy">FLAKE EPOXY FLOORING</Link>
              <Link href="/learn-more/concrete-polishing">CONCRETE POLISHING</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com/milkywayepoxyllc/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@milkywayepoxy" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.link/milkywayepoxy" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://tiktok.com/@milkywayepoxyllc" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
          <p>© 2024 — Copyright Milkyway Epoxy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
