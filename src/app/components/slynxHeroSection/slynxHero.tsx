"use client";

import React, { useState, useEffect } from 'react';
import styles from './slynxHero.module.css';

interface Badge {
  id: string;
  text: string;
  variant: 'primary' | 'secondary';
}

interface SlynxHeroProps {
  title?: string;
  brandName?: string;
  description?: string;
  badges?: Badge[];
  codeExample?: string;
  fileName?: string;
  typingSpeed?: number;
  onBadgeSelect?: (badgeId: string) => void;
}

export const SlynxHero: React.FC<SlynxHeroProps> = ({
  title = 'Why',
  brandName = 'Slynx',
  description = 'Experience a syntax that feels natural, a compiler that guides you, and performance that scales with your ambitions.',
  badges = [
    { id: 'simple', text: 'Simple', variant: 'primary' },
    { id: 'performance', text: 'Performance', variant: 'secondary' },
    { id: 'data-oriented', text: 'Data Oriented', variant: 'secondary' },
    { id: 'intuitive', text: 'Intuitive', variant: 'secondary' },
  ],
  codeExample = `fun main() {
  val name = "stranger" // declare variable
  println("Hi, \${name}!") // //Use it
  print("Count: ")
  for (i in 0..10) {
    print("\${i} ")
  }
}`,
  fileName = 'MAIN.SX',
  typingSpeed = 30,
  onBadgeSelect,
}) => {
  const [typedText, setTypedText] = useState('');
  const [selectedBadges, setSelectedBadges] = useState<Set<string>>(new Set(['simple']));
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    setTypedText(''); // Reset text
    setIsTyping(true);
    
    const interval = setInterval(() => {
      if (currentIndex <= codeExample.length) {
        setTypedText(codeExample.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [codeExample, typingSpeed]);

  const handleBadgeClick = (badgeId: string) => {
    // Sempre substitui a seleção (apenas 1 ativo por vez)
    setSelectedBadges(new Set([badgeId]));
    onBadgeSelect?.(badgeId);
  };

  return (
    <div className={styles.container}>      
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title} <span className={styles.brand}>{brandName}</span>?
        </h1>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.badges}>
          {badges.map((badge, index) => {
            const isSelected = selectedBadges.has(badge.id);
            return (
              <button
                key={badge.id}
                onClick={() => handleBadgeClick(badge.id)}
                className={`${styles.badge} ${
                  isSelected 
                    ? styles.badgePrimary 
                    : styles.badgeSecondary
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-pressed={isSelected}
              >
                {badge.text}
              </button>
            );
          })}
        </div>

        <div className={styles.codeWindow}>
          <div className={styles.codeHeader}>
            <div className={styles.trafficLights}>
              <span className={styles.trafficRed}></span>
              <span className={styles.trafficYellow}></span>
              <span className={styles.trafficGreen}></span>
            </div>
            <div className={styles.fileName}>{fileName}</div>
          </div>

          <div className={styles.codeBody}>
            <pre className={styles.codeContent}>
              <code>
                {typedText}
                <span className={styles.cursor}></span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlynxHero;