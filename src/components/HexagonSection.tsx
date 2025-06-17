import React from "react";
import styles from "./HexagonSection.module.css";

export interface HexagonSectionProps {
  hexagonPosition?: "left" | "right";
  ctaSmall?: string;
  ctaBig?: string;
  features?: { title: string; desc: string }[];
  ctaDesc?: string;
  buttonText?: string;
}

const images1 = ["/1.jpeg", "/2.jpg", "/3.jpg"];
const images2 = ["/4.jpg", "/5.jpg", "/6.jpg"];

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

const HexagonSection: React.FC<HexagonSectionProps> = ({
  hexagonPosition = "left",
  ctaSmall = "Premium Epoxy Flooring",
  ctaBig = "TRANSFORM YOUR FLOORS\nWITH MILKYWAY EPOXY",
  features = defaultFeatures,
  ctaDesc = "Get a stunning, long-lasting floor with our expert epoxy installation. Fast, clean, and fully customized for your home or business. Discover the Milkyway difference today!",
  buttonText = "SCHEDULE A FREE QUOTE",
}) => {
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
        {features.map((f) => (
          <li className={styles.ctaFeature} key={f.title}>
            <CheckIcon />
            <div>
              <span className={styles.featureTitle}>{f.title}</span>
              <span className={styles.featureDesc}>{f.desc}</span>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.ctaDesc}>{ctaDesc}</p>
      <button className={styles.ctaButton}>
        {buttonText}
        <ArrowIcon />
      </button>
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
    <section className={styles.section}>
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
    </section>
  );
};

export default HexagonSection;
