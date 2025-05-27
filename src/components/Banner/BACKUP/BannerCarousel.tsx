
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerCarousel.css';

interface BannerImage {
  id: number;
  src: string;
  alt: string;
}

const bannerImages: BannerImage[] = [
  {
    id: 1,
    src: "/banners/banner1.jpg",
    alt: "X Юбилейная международная научно-практическая конференция"
  },
  {
    id: 2,
    src: "/banners/banner2.jpg",
    alt: "Ежегодная премия За развитие Дальнего Востока и Арктики"
  }
];

const BannerCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToBanner = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? bannerImages.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => 
      (current + 1) % bannerImages.length
    );
  };

  return (
    <div className="banner-carousel-container">
      <div className="banner-carousel">
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className={`banner-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ zIndex: index === activeIndex ? 1 : 0 }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="banner-image"
            />
          </div>
        ))}
      </div>
      
      <button 
        className="nav-button prev"
        onClick={goToPrevious}
        aria-label="Previous banner"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="nav-button next"
        onClick={goToNext}
        aria-label="Next banner"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default BannerCarousel;