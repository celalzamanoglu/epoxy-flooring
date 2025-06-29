import React from "react";
import styles from "./LearnMoreCardsSection.module.css";
import Button from "./Button";

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

const LearnMoreCards: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div className={styles.glowWrapper} key={card.big}>
            <div className={styles.card} style={{ backgroundImage: `url(${card.bg})` }}>
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.small}>{card.small}</span>
                <span className={styles.big}>{card.big}</span>
                <Button className={styles.cardButton}>{card.button}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnMoreCards;
