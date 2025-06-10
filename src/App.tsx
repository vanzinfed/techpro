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
    
    const preloadCriticalAssets = async () => {
      try {
        setLoadingProgress(0);
        
        // Критически важные изображения для первого экрана
        const criticalImages = [
          '/images/hero-bg.webp', // Главное фоновое изображение
          '/images/logo.png',     // Логотип
          '/banners/banner1.jpg', // Первый баннер
          '/banners/banner2.jpg'  // Второй баннер
        ];

        // Дополнительные изображения для предзагрузки
        const additionalImages = [
          '/images/part1.png',
          '/images/part2.png',
          '/images/part3.png',
          '/images/part4.png',
          '/images/part5.png',
          '/images/part6.png',
          '/expert/ex1.jpg',
          '/expert/ex2.jpg',
          '/expert/ex3.jpg',
          '/expert/ex4.jpg'
        ];

        let totalImages = criticalImages.length + additionalImages.length;
        let loadedImages = 0;

        const updateProgress = () => {
          loadedImages++;
          setLoadingProgress(Math.round((loadedImages / totalImages) * 100));
        };

        // Функция для загрузки изображения
        const loadImage = (src: string): Promise<void> => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              updateProgress();
              resolve();
            };
            img.onerror = () => {
              console.warn(`Не удалось загрузить изображение: ${src}`);
              updateProgress();
              resolve();
            };
            img.src = src;
          });
        };

        // Сначала загружаем критически важные изображения
        console.log('Загрузка критически важных изображений...');
        await Promise.all(criticalImages.map(loadImage));
        
        // Затем загружаем дополнительные изображения
        console.log('Загрузка дополнительных изображений...');
        await Promise.all(additionalImages.map(loadImage));

        // Предзагрузка шрифтов
        try {
          await document.fonts.ready;
          console.log('Шрифты загружены');
        } catch (error) {
          console.warn('Ошибка при загрузке шрифтов:', error);
        }

        // Небольшая задержка для плавности
        await new Promise(resolve => setTimeout(resolve, 300));
        
        setLoadingProgress(100);
        
        // Дополнительная задержка перед скрытием загрузчика
        await new Promise(resolve => setTimeout(resolve, 200));
        
        setIsLoading(false);
        console.log('Загрузка завершена');
        
      } catch (error) {
        console.error('Ошибка при загрузке ресурсов:', error);
        // В случае ошибки все равно скрываем загрузчик через 3 секунды
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    preloadCriticalAssets();
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