import type { ReactNode } from 'react';
import styles from './card.module.css';

type CardProps = {
  title: string;
  href: string;
  icon: ReactNode;
  children: ReactNode;
};

export function Card({ title, href, icon, children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.baixo}>
        <h3 className={styles.title}>{title}</h3>
        <a href={href} className={styles.link}>
          {children}
        </a>
      </div>
    </div>
  );
}
