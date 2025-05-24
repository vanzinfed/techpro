import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      return;
    }

    const targetElement = document.getElementById(targetId);
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

  const handleRegisterClick = () => {
    if (location.pathname !== '/') {
      navigate('/#register');
      return;
    }

    const registerSection = document.getElementById('register');
    if (!registerSection) return;

    const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;
    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
    const offset = navbarHeight + topBarHeight;

    const targetPosition = registerSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden text-blue-100/70 py-12">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a,#1e293b,#0f172a)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="font-['WADIK']">ТехПро</span>
            </h3>
            <p className="mb-4">
              Технологический прорыв - настоящее с большим будущим
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://t.me/TechPro_Forum" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24">
                  <path fill="currentColor" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              {location.pathname === '/' ? (
                <li><a href="#hero" className="hover:text-blue-300 transition-colors" onClick={scrollToSection}>Главная</a></li>
              ) : (
                <li><div onClick={handleHomeClick} className="hover:text-blue-300 transition-colors cursor-pointer">Главная</div></li>
              )}
              <li><a href="#about" className="hover:text-blue-300 transition-colors" onClick={scrollToSection}>О мероприятии</a></li>
              <li><a href="#experts" className="hover:text-blue-300 transition-colors" onClick={scrollToSection}>Эксперты</a></li>
              <li><a href="#partners" className="hover:text-blue-300 transition-colors" onClick={scrollToSection}>Партнеры</a></li>
              <li><a href="#resolution" className="hover:text-blue-300 transition-colors" onClick={scrollToSection}>Резолюция</a></li>
              <li><a href="#contacts" className="hover:text-blue-300 transition-colors" onClick={scrollToSection}>Контакты</a></li>
              <li>
                <Link 
                  to="/news" onClick={scrollToTop}
                  className="text-blue-100/70 hover:text-blue-300 transition-colors"
                >
                  Новости
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center lg:justify-start">
                <MapPin size={18} className="mr-2 mt-1 text-blue-400" />
                <span>г. Москва КВЦ "Патриот"</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Phone size={18} className="mr-2 text-blue-400" />
                <span>+7 (495) 662-97-49</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Mail size={18} className="mr-2 text-blue-400" />
                <span>techpro@s-kon.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500/20 pt-6 text-center">
          <p>© 2025 ТехПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;