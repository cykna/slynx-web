'use client';

import React, { useState } from 'react';
import styles from './testimonial.module.css';

interface Testimonial {
  id: string | number;
  text: string;
  author: string;
  role: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  title = "Slynx Testimonials",
  subtitle = "Developer Approved and production ready.",
  testimonials = []
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Get current 3 testimonials to display
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);
  
  const showControls = testimonials.length > itemsPerPage;
  
  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.grid} 
          key={currentIndex}
          data-direction={direction}
        >
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <p className={styles.text}>{testimonial.text}</p>
              
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.author} />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {testimonial.author.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.author}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showControls && (
        <div className={styles.controls}>
          <button 
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className={styles.pageInfo}>
            <span className={styles.currentPage}>{currentIndex + 1}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.totalPages}>{totalPages}</span>
          </div>
          
          <button 
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;