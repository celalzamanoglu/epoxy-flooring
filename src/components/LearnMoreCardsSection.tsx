import React from "react";
import styles from "./LearnMoreCardsSection.module.css";
import Button from "./Button";
import { useRouter } from "next/navigation";

const cards = [
  {
    bg: "/1.jpeg",
    small: "Restaurants • Homes • Showrooms • Warehouses • Countertops & More",
    big: `METALLIC EPOXY FLOORING`,
    description: "ART MEETS DURABILITY",
    button: "LEARN MORE",
    type: "metallic-epoxy",
  },
  {
    bg: "/flake-1.jpeg",
    small: "Garages • Patios • Pool Decs • Drive Ways • Basements & More",
    big: "FLAKE EPOXY FLOORING",
    description: "INSTALLED IN JUST 1 DAY",
    button: "LEARN MORE",
    type: "flake-epoxy",
  },
  {
    bg: "/2.jpeg",
    small: "Commercial • Industrial • Residential Spaces",
    big: "CONCRETE POLISHING",
    description: "SMOOTH, DURABLE, PROFESSIONAL FINISH",
    button: "LEARN MORE",
    type: "concrete-polishing",
  },
  {
    bg: "/garage-1.jpeg",
    small: "Cabinets • Car lifts • Wall storage • Overhead racks",
    big: "GARAGE DESIGN",
    description: "TRANSFORM YOUR SPACE COMPLETELY",
    button: "LEARN MORE",
    type: "garage-design",
  },
];

const LearnMoreCards: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (type: string) => {
    router.push(`/learn-more/${type}`);
  };

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
                {card.description && <span className={styles.description}>{card.description}</span>}
                <Button className={styles.cardButton} onClick={() => handleCardClick(card.type)}>
                  {card.button}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnMoreCards;
