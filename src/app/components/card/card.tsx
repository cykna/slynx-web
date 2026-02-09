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
    <a className={styles.card} href={href}>
      <div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.baixo}>
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.link}>
          {children}
        </div>
      </div>
    </a>
  );
}
