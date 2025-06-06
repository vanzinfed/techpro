import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import News from './components/News/News';
import NewsPool from './components/News/NewsPool';
import PhotoBlock from './components/PhotoBlock/PhotoBlock';
import About from './components/About/About';
import Experts from './components/Experts/Experts';
import Partners from './components/Partners/Partners';
import Topics from './components/Topics/Topics';
import Resolutions from './components/Resolution/Resolutions';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';
import BannerCarousel from './components/Banner/BannerCarousel';
import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';


// ИМПОРТ НОВОСТЕЙ
// НЕ ЗАБУДЬ ДОБАВИТЬ В РОУТЕР


import News10 from './components/News/news/10';
import News9 from './components/News/news/9';
import News8 from './components/News/news/8';
import News7 from './components/News/news/7';
import News6 from './components/News/news/6';
import News5 from './components/News/news/5';
import News4 from './components/News/news/4';
import News3 from './components/News/news/3';
import News2 from './components/News/news/2';
import News1 from './components/News/news/1';


function HomePage() {
  return (
    <>
      <Hero />
      <BannerCarousel />
      <About />
      <Topics />
      <Experts />
      <Partners />
      <News />
      <Resolutions />
      <PhotoBlock />
      <Projects />
      <Contacts />
      <Registration />
    </>
  );
}



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'ТЕХПРО - Экспертная встреча';
    
    const preloadImages = () => {
      // Предварительная загрузка критических изображений
      const criticalImages = [
        '/images/hero-bg.jpg',
        // Добавьте сюда другие критические изображения
      ];

      const criticalImagePromises = criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      });

      // Получаем все изображения на странице
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      // Получаем все фоновые изображения
      const elementsWithBg = document.querySelectorAll('[style*="background-image"], [class*="hero"]');
      const bgPromises = Array.from(elementsWithBg).map(element => {
        const bgImage = window.getComputedStyle(element).backgroundImage;
        if (!bgImage || bgImage === 'none') return Promise.resolve();
        
        const url = bgImage.slice(4, -1).replace(/["']/g, "");
        return new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = url;
        });
      });

      // Ждем загрузки всех изображений
      return Promise.all([...criticalImagePromises, ...imagePromises, ...bgPromises]);
    };

    const preloadFonts = () => {
      // Проверяем загрузку шрифтов
      return document.fonts.ready;
    };

    const initializeApp = async () => {
      try {
        // Ждем загрузки всех ресурсов
        await Promise.all([
          preloadImages(),
          preloadFonts(),
          // Добавьте здесь другие асинхронные операции, если они есть
        ]);

        // Даем небольшую задержку для плавности
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке ресурсов:', error);
        setIsLoading(false); // В случае ошибки все равно показываем контент
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // ДОБАВИТЬ В РОУТЕР

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/10" element={<News10 />} />
          <Route path="/news/9" element={<News9 />} />
          <Route path="/news/8" element={<News8 />} />
          <Route path="/news/7" element={<News7 />} />
          <Route path="/news/6" element={<News6 />} />
          <Route path="/news/5" element={<News5 />} />
          <Route path="/news/4" element={<News4 />} />
          <Route path="/news/3" element={<News3 />} />
          <Route path="/news/2" element={<News2 />} />
          <Route path="/news/1" element={<News1 />} />
          <Route path="/news" element={<NewsPool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;