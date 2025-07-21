import React from "react";
import styles from "./HexagonSection.module.css";
import { motion, useInView } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

export interface HexagonSectionProps {
  hexagonPosition?: "left" | "right";
  ctaSmall?: string;
  ctaBig?: string;
  features?: { title: string; desc: string }[];
  ctaDesc?: string;
  buttonText?: string;
}

const images1 = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];
const images2 = ["/4.jpeg", "/5.jpeg", "/6.jpeg"];

const defaultFeatures = [
  {
    title: "Seamless Epoxy Floors",
    desc: "Smooth, durable, and easy-to-clean surfaces for any space.",
  },
  {
    title: "Custom Designs",
    desc: "Metallic, flake, and color options to match your style.",
  },
  {
    title: "Professional Installation",
    desc: "Expert team, fast turnaround, and satisfaction guaranteed.",
  },
];

const CheckIcon = () => (
  <span className={styles.checkIcon}>
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill="#2ee9c7" />
      <path
        d="M9 14.5l3 3 6-6"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const HexagonSection: React.FC<HexagonSectionProps> = ({
  hexagonPosition = "left",
  ctaSmall = "Premium Epoxy Flooring",
  ctaBig = "TRANSFORM YOUR FLOORS\nWITH MILKYWAY EPOXY",
  features = defaultFeatures,
  ctaDesc = "Get a stunning, long-lasting floor with our expert epoxy installation. Fast, clean, and fully customized for your home or business. Discover the Milkyway difference today!",
  buttonText = "CONTACT US",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.3,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const content = (
    <div className={styles.ctaContent}>
      <span className={styles.ctaSmall}>{ctaSmall}</span>
      <h2 className={styles.ctaBig}>
        {ctaBig.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      <ul className={styles.ctaFeatures}>
        {features.map((f, index) => (
          <motion.li
            className={styles.ctaFeature}
            key={f.title}
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: isInView ? 0.2 + index * 0.2 : 0,
              ease: "easeOut",
            }}
          >
            <CheckIcon />
            <div>
              <span className={styles.featureTitle}>{f.title}</span>
              <span className={styles.featureDesc}>{f.desc}</span>
            </div>
          </motion.li>
        ))}
      </ul>
      <motion.p
        className={styles.ctaDesc}
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{
          duration: 0.6,
          delay: isInView ? 0.2 + features.length * 0.2 : 0,
          ease: "easeOut",
        }}
      >
        {ctaDesc}
      </motion.p>
      <Link href="/contact">
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );

  const hexagon = (
    <div className={styles.hexagonWrapper}>
      <div className={styles.hexagon}>
        <div className={styles.imageListContainer}>
          <div className={styles.imageList + " " + styles.slideUp}>
            {[...images1, ...images1].map((src, i) => (
              <div className={styles.imageWrapper} key={src + i}>
                <img src={src} alt="Epoxy floor" className={styles.image} />
              </div>
            ))}
          </div>
          <div className={styles.imageList + " " + styles.slideUpReverse}>
            {[...images2, ...images2].map((src, i) => (
              <div className={styles.imageWrapper} key={src + i}>
                <img src={src} alt="Epoxy floor" className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.section} ref={ref}>
      {isMobile ? (
        <>
          {content}
          {hexagon}
        </>
      ) : (
        <>
          {hexagonPosition === "left" ? (
            <>
              {hexagon}
              {content}
            </>
          ) : (
            <>
              {content}
              {hexagon}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default HexagonSection;
