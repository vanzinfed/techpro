import React from 'react';
import { Calendar } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;
    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
    const offset = navbarHeight + topBarHeight;

    const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h2 className="expertise-title animate-fade-in">ЭКСПЕРТНАЯ ВСТРЕЧА</h2>
        
        <div className="title-container">
          <h1 className="main-title wadik animate-fade-in delay-100">ТЕХПРО</h1>
          <div className="date-container animate-fade-in delay-200">
            <Calendar size={24} />
            <span>12 АВГУСТА</span>
          </div>
        </div>
        
        <p className="subtitle animate-fade-in delay-300">
          ТЕХНОЛОГИЧЕСКИЙ ПРОРЫВ - НАСТОЯЩЕЕ С БОЛЬШИМ БУДУЩИМ
        </p>
        
        <button className="details-btn animate-fade-in delay-400" onClick={scrollToAbout}>ПОДРОБНЕЕ</button>
      </div>
    </section>
  );
};

export default Hero;