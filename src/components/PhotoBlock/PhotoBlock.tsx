import React from 'react';
import './PhotoBlock.css';
import { Image as ImageIcon } from 'lucide-react';

const PhotoBlock: React.FC = () => {
  const photos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className="photo-block-section">
      <div className="photo-block-container">
        <div className="photo-marquee">
          <div className="photo-track">
            {photos.map((num) => (
              <div key={num} className="photo-item">
                <img 
                  src={`/photoblock/image${num}.jpg`} 
                  alt={`Фото ${num}`} 
                  className="photo-image"
                />
              </div>
            ))}
            {photos.map((num) => (
              <div key={`duplicate-${num}`} className="photo-item">
                <img 
                  src={`/photoblock/image${num}.jpg`} 
                  alt={`Фото ${num}`} 
                  className="photo-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="album-button-container">
          <a href="https://disk.yandex.ru/d/T5kqMS1ICe9tfg" target="_blank" rel="noopener noreferrer">
            <button className="album-button" style={{ 
              backgroundColor: '#151d50',
              transition: 'background-color 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}>
              <div 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: 'transparent',
                  borderRadius: '8px'
                }} 
                className="album-button-image"
              />
              <span className="album-button-text" style={{ color: 'white' }}>
                <span className="album-button-icon"><ImageIcon size={30} /></span>
                ВСЕ ФОТО
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotoBlock; 


{/* <div className="album-button-container">
<a href="https://disk.yandex.ru/d/T5kqMS1ICe9tfg" target="_blank" rel="noopener noreferrer">
  <button className="album-button">
    <img 
      src="/photoblock/image10.jpg" 
      alt="Альбом" 
      className="album-button-image"
    />
    <span className="album-button-text">
      <span className="album-button-icon"><ImageIcon size={30} /></span>
      ВСЕ ФОТО
    </span>
  </button>
</a>
</div> */}