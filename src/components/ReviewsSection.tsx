import React from "react";
import styles from "./ReviewsSection.module.css";

interface Review {
  name: string;
  text: string;
}

const reviews1: Review[] = [
  {
    name: "Mike Miller",
    text: "Milkyway Epoxy transformed my garage floor! The finish is stunning, easy to clean, and incredibly durable. The team was professional and finished ahead of schedule. I was impressed by their attention to detail and how they explained every step of the process.",
  },
  {
    name: "K-Lee Marks",
    text: "I couldn't be happier with my new basement floor. The metallic epoxy looks amazing and has completely changed the feel of the space. Highly recommend Milkyway Epoxy! The crew was friendly, and made sure everything was spotless before they left.",
  },
  {
    name: "Alec Ohlaker",
    text: "From start to finish, Milkyway Epoxy made the process simple. They explained every step and delivered exactly what they promised. The quality is top-notch.",
  },
  {
    name: "Nathan Jones",
    text: "The Milkyway Epoxy team was fast, friendly, and left no mess behind. My kitchen floor looks like a work of art and gets compliments from everyone who visits. The installation was quick, and the finish is both beautiful and practical.",
  },
  {
    name: "Levi Arreola",
    text: "We chose Milkyway Epoxy for our showroom and it was the best decision. The floor is beautiful, durable, and really makes our business stand out. Customers always comment on the shine and design.",
  },
];

const reviews2: Review[] = [
  {
    name: "Edward Beck & Vanessa",
    text: "Our garage and patio floors look incredible thanks to Milkyway Epoxy. The color options and finishes are fantastic. We love the results! The installers were courteous, on time, and made sure we were happy with every detail.",
  },
  {
    name: "Blair Knowles",
    text: "Milkyway Epoxy exceeded our expectations. The installation was quick, and the team was very knowledgeable. Our floors have never looked better. They answered all our questions and gave us great care instructions.",
  },
  {
    name: "Hunter Lewis",
    text: "We had Milkyway Epoxy install a custom flake system in our workshop. It's tough, slip-resistant, and looks amazing. Great investment! The crew worked efficiently and left the space spotless.",
  },
  {
    name: "Aaron Mak Hoffman",
    text: "The attention to detail from Milkyway Epoxy was impressive. They helped us choose the perfect design and the end result is flawless. The installers were friendly and professional, and the project was completed on time.",
  },
  {
    name: "Nick Haub",
    text: "I recommend Milkyway Epoxy to anyone wanting a unique, durable floor. The process was smooth and the final product is even better than I imagined. The team was responsive, helpful, and made sure we were satisfied every step of the way.",
  },
];

function ReviewRow({
  reviews,
  reverse = false,
}: {
  reviews: Review[];
  reverse?: boolean;
}) {
  return (
    <div className={reverse ? styles.rowReverse : styles.row}>
      <div className={styles.track}>
        {[...reviews, ...reviews].map((review, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.name}>{review.name}</div>
            <div className={styles.text}>{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ReviewsSection: React.FC = () => (
  <section className={styles.section}>
    <ReviewRow reviews={reviews1} />
    <ReviewRow reviews={reviews2} reverse />
  </section>
);

export default ReviewsSection;
