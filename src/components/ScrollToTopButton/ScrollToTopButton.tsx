import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) {
        setVisible(window.scrollY > 200);
        return;
      }
      const heroRect = heroSection.getBoundingClientRect();
      // Кнопка скрыта, если фон Hero виден хотя бы на 100px
      if (heroRect.bottom > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-btn${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton; 