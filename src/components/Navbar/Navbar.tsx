import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToElement = (elementId: string) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;
    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
    const offset = navbarHeight + topBarHeight;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    scrollToTop();
    closeMenu();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      return;
    }

    scrollToElement(targetId);
    closeMenu();
  };

  const handleRegisterClick = () => {
    if (location.pathname !== '/') {
      navigate('/#register');
      return;
    }

    scrollToElement('register');
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-contacts">
            <a href="tel:+74956629749" className="top-bar-link">
              <Phone size={16} />
              <span>+7 (495) 662-97-49</span>
            </a>
            <a href="mailto:techpro@s-kon.ru" className="top-bar-link">
              <Mail size={16} />
              <span>techpro@s-kon.ru</span>
            </a>
            <div className="top-bar-link">
              <MapPin size={16} />
              <span>г. Москва КВЦ "Патриот"</span>
            </div>
          </div>
          <a href="https://t.me/TechPro_Forum" target="_blank" rel="noopener noreferrer" className="top-bar-telegram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="20" height="20">
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
            </svg>
          </a>
        </div>
      </div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${location.pathname.startsWith('/news') ? 'news-page' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <div onClick={handleHomeClick} className="logo" style={{ cursor: 'pointer' }}>
              <img src="/images/logo.png" alt="ТЕХПРО" className="logo-image" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links">
            {location.pathname === '/' ? (
              <a href="#hero" className="nav-link" onClick={scrollToSection}>ГЛАВНАЯ</a>
            ) : (
              <div onClick={handleHomeClick} className="nav-link" style={{ cursor: 'pointer' }}>ГЛАВНАЯ</div>
            )}
            <a href="#about" className="nav-link" onClick={scrollToSection}>О МЕРОПРИЯТИИ</a>
            <a href="#experts" className="nav-link" onClick={scrollToSection}>ЭКСПЕРТЫ</a>
            <a href="#partners" className="nav-link" onClick={scrollToSection}>ПАРТНЕРЫ</a>
            <a href="#resolution" className="nav-link" onClick={scrollToSection}>РЕЗОЛЮЦИЯ</a>
            <a href="#contacts" className="nav-link" onClick={scrollToSection}>КОНТАКТЫ</a>
            <button className="register-btn" onClick={handleRegisterClick}>РЕГИСТРАЦИЯ</button>
          </div>

          <div className="navbar-center">
            {/* Mobile Register Button */}
            <button className="mobile-register-btn" onClick={handleRegisterClick}>РЕГИСТРАЦИЯ</button>
          </div>

          <div className="navbar-right">
            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {location.pathname === '/' ? (
            <a href="#about" className="mobile-link" onClick={scrollToSection}>О МЕРОПРИЯТИИ</a>
          ) : (
            <div onClick={handleHomeClick} className="mobile-link" style={{ cursor: 'pointer' }}>ГЛАВНАЯ</div>
          )}
          <a href="#experts" className="mobile-link" onClick={scrollToSection}>ЭКСПЕРТЫ</a>
          <a href="#partners" className="mobile-link" onClick={scrollToSection}>ПАРТНЕРЫ</a>
          <a href="#resolution" className="mobile-link" onClick={scrollToSection}>РЕЗОЛЮЦИЯ</a>
          <a href="#contacts" className="mobile-link" onClick={scrollToSection}>КОНТАКТЫ</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;