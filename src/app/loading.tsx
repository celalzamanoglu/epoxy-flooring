import React from "react";
import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.content}>
        <Image src="/brand-logo.png" alt="Milkyway Epoxy Logo" width={56} height={56} className={styles.logo} />
        <div className={styles.dots} role="status" aria-label="Loading">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
}
