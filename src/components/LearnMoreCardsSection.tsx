import React from "react";
import styles from "./LearnMoreCardsSection.module.css";
import Button from "./Button";

const cards = [
  {
    bg: "/1.jpeg",
    small: "Restaurants • Homes • Showrooms • Warehouses • Countertops & More",
    big: `METALLIC EPOXY FLOORING - ART MEETS DURABILITY`,
    button: "LEARN MORE",
  },
  {
    bg: "/3.jpg",
    small: "Garages • Patios • Pool Decs • Drive Ways • Basements & More",
    big: "FLAKE EPOXY FLOORING - A UNIQUE FINISH FOR EVERY SPACE",
    button: "LEARN MORE",
  },
  {
    bg: "/2.jpg",
    small: "Commercial • Industrial • Residential Spaces",
    big: "CONCRETE POLISHING",
    button: "LEARN MORE",
  },
  {
    bg: "/4.jpg",
    small: "Cabinets • Car lifts • Wall storage • Overhead racks",
    big: "GARAGE DESIGN",
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
