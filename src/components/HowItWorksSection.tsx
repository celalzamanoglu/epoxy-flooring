import React from "react";
import styles from "./HowItWorksSection.module.css";
import { FaPalette, FaHardHat, FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaPalette />,
    title: "CHOOSE YOUR DESIGN",
    description:
      "Browse our extensive catalog of colors, patterns, and finishes. Our team is here to help you select the perfect epoxy design that matches your style and functional needs, ensuring a unique look for your space.",
  },
  {
    icon: <FaHardHat />,
    title: "WE PREPARE & INSTALL",
    description:
      "Our certified professionals handle everything with precision. We meticulously prepare the surface and apply the epoxy using advanced techniques to guarantee a seamless, durable, and long-lasting finish with minimal disruption to your home or business.",
  },
  {
    icon: <FaCheckCircle />,
    title: "ENJOY YOUR NEW FLOOR",
    description:
      "Once the installation is complete and the floor is fully cured, it's ready for you to enjoy. Experience the benefits of a low-maintenance, chemical-resistant, and stunningly beautiful floor that will stand the test of time.",
  },
];

const HowItWorksSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <p className={styles.preTitle}>How It Works</p>
        <h2 className={styles.title}>
          A SIMPLE PROCESS FOR A STUNNING, DURABLE FLOOR.
        </h2>
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button>SCHEDULE A CALL</Button>
        </div>
        <p className={styles.guaranteeText}>Satisfaction Guaranteed</p>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
