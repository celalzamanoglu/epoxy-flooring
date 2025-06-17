import React from "react";
import styles from "./LearnMoreCardsSection.module.css";

const cards = [
  {
    bg: "/1.jpeg",
    small: "Transform Your Space with Durable, Stunning Surfaces",
    big: "PREMIUM EPOXY FLOOR INSTALLATION",
    button: "LEARN MORE",
  },
  {
    bg: "/3.jpg",
    small: "Custom Designs, Metallic Finishes, and Flake Systems",
    big: "DECORATIVE & INDUSTRIAL FLOORING SOLUTIONS",
    button: "LEARN MORE",
  },
];

const ArrowIcon = () => (
  <span className={styles.arrowCircle}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.25" />
      <path
        d="M13 11l6 5-6 5"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const LearnMoreCards: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div
            className={styles.card}
            key={card.big}
            style={{ backgroundImage: `url(${card.bg})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.content}>
              <span className={styles.small}>{card.small}</span>
              <span className={styles.big}>{card.big}</span>
              <button className={styles.button}>
                {card.button}
                <ArrowIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnMoreCards;
