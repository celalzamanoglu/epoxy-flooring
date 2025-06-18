import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

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

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
      <ArrowIcon />
    </button>
  );
};

export default Button;
