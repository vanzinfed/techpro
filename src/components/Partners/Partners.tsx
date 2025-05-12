import React, { useEffect, useRef } from 'react';
import './Partners.css';

const partnerLogos = [
  '/images/part1.png',
  '/images/part2.png',
  '/images/part3.png',
  '/images/part4.png',
  '/images/part5.png',
  '/images/part6.png',
  '/images/part7.png',
  '/images/part8.png',
  '/images/part9.png',
  '/images/part10.png',
];

const Partners: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const speed = 1; // скорость прокрутки в пикселях за кадр
  const positionRef = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const newItem = () => {
      const firstItem = marquee.querySelector('.partners-marquee-item');
      if (!firstItem) return null;
      return firstItem.cloneNode(true) as HTMLElement;
    };

    const fillMarquee = () => {
      if (!marquee) return;
      
      const items = marquee.querySelectorAll('.partners-marquee-item');
      const firstItem = items[0] as HTMLElement;
      if (!firstItem) return;

      while (
        items.length < 2 ||
        (firstItem.clientWidth + 30) * items.length - 30 < window.innerWidth * 1.5
      ) {
        const newElement = newItem();
        if (newElement) marquee.append(newElement);
      }
    };

    const render = () => {
      if (!marquee) return;

      const items = marquee.querySelectorAll('.partners-marquee-item');
      const firstItem = items[0] as HTMLElement;
      if (!firstItem) return;

      positionRef.current -= speed;
      
      // Если первый элемент полностью вышел за пределы видимости
      if (positionRef.current <= -firstItem.offsetWidth - 30) {
        positionRef.current += firstItem.offsetWidth + 30;
        firstItem.remove();
        const newElement = newItem();
        if (newElement) marquee.append(newElement);
      }

      marquee.style.transform = `translateX(${positionRef.current}px)`;
      requestAnimationFrame(render);
    };

    fillMarquee();
    window.addEventListener('resize', fillMarquee);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', fillMarquee);
    };
  }, []);

  return (
    <section id="partners" className="partners-section">
      <div className="partners-bg-gradient"></div>
      <div className="container">
        <div className="partners-header">
          <h2 className="partners-main-title">ПАРТНЕРЫ</h2>
        </div>
        <div className="partners-marquee-wrapper">
          <div className="partners-marquee" ref={marqueeRef}>
            {partnerLogos.map((logo, idx) => (
              <div className="partners-marquee-item" key={idx}>
                <img src={logo} alt="Партнёр" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;