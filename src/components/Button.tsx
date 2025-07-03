import React from "react";
import styles from "./Button.module.css";

type ButtonSize = "small" | "medium" | "large" | "xlarge";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: ButtonSize;
}

const ArrowIcon: React.FC<{ size: ButtonSize }> = ({ size }) => {
  const sizeConfig = {
    small: { width: 24, height: 24, cx: 12, cy: 12, r: 12 },
    medium: { width: 28, height: 28, cx: 14, cy: 14, r: 14 },
    large: { width: 32, height: 32, cx: 16, cy: 16, r: 16 },
    xlarge: { width: 36, height: 36, cx: 18, cy: 18, r: 18 },
  };

  const config = sizeConfig[size];

  return (
    <span className={styles.arrowCircle}>
      <svg
        width={config.width}
        height={config.height}
        viewBox={`0 0 ${config.width} ${config.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={config.cx} cy={config.cy} r={config.r} fill="#fff" fillOpacity="0.25" />
        <path
          d={`M${config.cx - 3} ${config.cy - 5}l6 5-6 5`}
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", size = "large" }) => {
  const sizeClass = styles[size] || styles.large;

  return (
    <button className={`${styles.button} ${sizeClass} ${className}`} onClick={onClick}>
      {children}
      <ArrowIcon size={size} />
    </button>
  );
};

export default Button;
