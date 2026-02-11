"use client";

import { useState } from "react";
import styles from "./faq-component.module.css";
import { Icon } from "@iconify/react";

// Props type for each FAQ item
type FaqItemProps = {
  question: string;  // Question text
  answer: string;    // Answer text
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  // State to toggle open/close of FAQ item
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Header button: toggles open state */}
      <button
        type="button"
        className={styles.header}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{question}</span>

        {/* Arrow icon rotates when open */}
        <span className={`${styles.icon} ${open ? styles.rotate : ""}`}>
          <Icon 
            icon="material-symbols:keyboard-arrow-down" 
            width={30} 
          />
        </span>
      </button>

      {/* Collapsible content */}
      <div className={`${styles.content} ${open ? styles.open : ""}`}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}
