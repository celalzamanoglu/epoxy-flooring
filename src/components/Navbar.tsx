"use client";
import React, { useState, useRef } from "react";
import Button from "./Button";
import Link from "next/link";
import styles from "./Navbar.module.css";

const services = [
  { key: "metallic-epoxy", label: "Metallic Epoxy" },
  { key: "flake-epoxy", label: "Flake Epoxy" },
  { key: "concrete-polishing", label: "Concrete Polishing" },
  { key: "garage-design", label: "Garage Design" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo & Brand */}
        <Link href="/" className={styles.brandLink}>
          {/* Brand logo image */}
          {/* <div className={styles.logoContainer}>
            <img src="/brand-logo.jpg" alt="Milkyway Epoxy Logo" width="48" height="48" className={styles.logoImage} />
          </div> */}
          <div className={styles.brandContainer}>
            <span className={styles.brandName}>Milkyway Epoxy</span>
          </div>
        </Link>
        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          <Link href="/portfolio" className={styles.navLink}>
            PORTFOLIO
          </Link>
          <div className={styles.servicesDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={styles.servicesButton}>
              SERVICES
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {services.map((service) => (
                  <Link key={service.key} href={`/learn-more/${service.key}`} className={styles.dropdownLink}>
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className={styles.navLink}>
            ABOUT US
          </Link>
          <Button size="small" className={styles.ctaButton}>
            SCHEDULE A CALL
          </Button>
        </div>
        {/* Hamburger for mobile */}
        <div className={styles.mobileMenu}>
          <button
            className={styles.hamburgerButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {menuOpen && (
            <div className={styles.mobileOverlay}>
              <div className={styles.mobilePanel}>
                <button className={styles.closeButton} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path d="M6 6l12 12M6 18L18 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <Link href="/portfolio" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  PORTFOLIO
                </Link>
                <div>
                  <button className={styles.mobileServicesButton} onClick={() => setDropdownOpen((open) => !open)}>
                    SERVICES
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className={styles.mobileDropdown}>
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          href={`/learn-more/${service.key}`}
                          className={styles.mobileDropdownLink}
                          onClick={() => setMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  ABOUT US
                </Link>
                <div className={styles.mobileCtaContainer}>
                  <Button size="small">SCHEDULE A CALL</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
