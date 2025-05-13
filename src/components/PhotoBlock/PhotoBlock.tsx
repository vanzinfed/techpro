import React from 'react';
import './PhotoBlock.css';
import { Image as ImageIcon } from 'lucide-react';

const PhotoBlock: React.FC = () => {
  const photos = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="photo-block-section">
      <div className="photo-block-container">
        <div className="photo-marquee">
          <div className="photo-track">
            {photos.map((num) => (
              <div key={num} className="photo-item">
                <img 
                  src={`/photoblock/image${num}.png`} 
                  alt={`Фото ${num}`} 
                  className="photo-image"
                />
              </div>
            ))}
            {photos.map((num) => (
              <div key={`duplicate-${num}`} className="photo-item">
                <img 
                  src={`/photoblock/image${num}.png`} 
                  alt={`Фото ${num}`} 
                  className="photo-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="album-button-container">
          <a href="https://disk.yandex.ru/d/T5kqMS1ICe9tfg" target="_blank" rel="noopener noreferrer">
            <button className="album-button">
              <img 
                src="/photoblock/image10.png" 
                alt="Альбом" 
                className="album-button-image"
              />
              <span className="album-button-text">
                <span className="album-button-icon"><ImageIcon size={30} /></span>
                ОТКРЫТЬ АЛЬБОМ
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotoBlock; 