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
import CookieConsent from './components/CookieConsent/CookieConsent';


// ИМПОРТ НОВОСТЕЙ
// НЕ ЗАБУДЬ ДОБАВИТЬ В РОУТЕР

import News11 from './components/News/news/11';
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
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    document.title = 'ТЕХПРО - Экспертная встреча';
    
    const preloadImages = async () => {
      // Получаем все изображения на странице
      const images = Array.from(document.querySelectorAll('img'));
      const bgImages = Array.from(document.querySelectorAll('[style*="background-image"], [class*="hero"]'));
      
      // Создаем массив всех URL изображений
      const imageUrls = new Set<string>();
      
      // Добавляем URL из тегов img
      images.forEach(img => {
        if (img.src) imageUrls.add(img.src);
      });
      
      // Добавляем URL из background-image
      bgImages.forEach(element => {
        const bgImage = window.getComputedStyle(element).backgroundImage;
        if (bgImage && bgImage !== 'none') {
          const url = bgImage.slice(4, -1).replace(/["']/g, "");
          imageUrls.add(url);
        }
      });

      // Добавляем критические изображения
      const criticalImages = [
        '/images/hero-bg.jpg',
        // Добавьте сюда другие критические изображения
      ];
      criticalImages.forEach(url => imageUrls.add(url));

      const totalImages = imageUrls.size;
      let loadedImages = 0;

      // Загружаем все изображения
      const loadPromises = Array.from(imageUrls).map(url => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedImages++;
            setLoadingProgress(Math.round((loadedImages / totalImages) * 100));
            resolve(null);
          };
          img.onerror = () => {
            loadedImages++;
            setLoadingProgress(Math.round((loadedImages / totalImages) * 100));
            resolve(null);
          };
          img.src = url;
        });
      });

      await Promise.all(loadPromises);
    };

    const preloadFonts = async () => {
      try {
        await document.fonts.ready;
      } catch (error) {
        console.error('Ошибка при загрузке шрифтов:', error);
      }
    };

    const initializeApp = async () => {
      try {
        setLoadingProgress(0);
        
        // Загружаем ресурсы параллельно
        await Promise.all([
          preloadImages(),
          preloadFonts(),
        ]);

        // Даем небольшую задержку для плавности
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setLoadingProgress(100);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке ресурсов:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="text-center">
          <div className="loader"></div>
          <div className="mt-4 text-lg font-medium text-gray-700">Загрузка...</div>
          <div className="mt-2 text-sm text-gray-500">{loadingProgress}%</div>
        </div>
      </div>
    );
  }

  // ДОБАВИТЬ В РОУТЕР

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/11" element={<News11 />} />
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
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;