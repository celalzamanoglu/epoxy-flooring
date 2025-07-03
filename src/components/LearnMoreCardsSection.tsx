import React from "react";
import styles from "./LearnMoreCardsSection.module.css";
import Button from "./Button";
import { useRouter } from "next/navigation";

const cards = [
  {
    bg: "/1.jpeg",
    small: "Restaurants • Homes • Showrooms • Warehouses • Countertops & More",
    big: `METALLIC EPOXY FLOORING - ART MEETS DURABILITY`,
    button: "LEARN MORE",
    type: "metallic-epoxy",
  },
  {
    bg: "/3.jpg",
    small: "Garages • Patios • Pool Decs • Drive Ways • Basements & More",
    big: "FLAKE EPOXY FLOORING - A UNIQUE FINISH FOR EVERY SPACE",
    button: "LEARN MORE",
    type: "flake-epoxy",
  },
  {
    bg: "/2.jpg",
    small: "Commercial • Industrial • Residential Spaces",
    big: "CONCRETE POLISHING",
    button: "LEARN MORE",
    type: "concrete-polishing",
  },
  {
    bg: "/4.jpg",
    small: "Cabinets • Car lifts • Wall storage • Overhead racks",
    big: "GARAGE DESIGN",
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
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.small}>{card.small}</span>
                <span className={styles.big}>{card.big}</span>
                <Button
                  className={styles.cardButton}
                  onClick={() => handleCardClick(card.type)}
                >
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
