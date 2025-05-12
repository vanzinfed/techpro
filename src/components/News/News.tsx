import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import './News.css';

const News: React.FC = () => {
  const navigate = useNavigate();
  // Получаем две последние новости
  const latestNews = [...newsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const mainNews = latestNews[0];
  const sideNews = latestNews[1];

  const handleAllNewsClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    setTimeout(() => {
      navigate('/news');
    }, 0);
  };

  return (
    <section className="news-section">
      <h2 className="news-title">ПОСЛЕДНИЕ НОВОСТИ</h2>
      <div className="news-grid">
        <div className="main-news">
          {mainNews && (
            <Link to={`/news/${mainNews.id}`} className="news-link">
              <img src={mainNews.image} alt={mainNews.title} className="main-news-image" />
              <div className="main-news-info">
                <h3 className="main-news-title">{mainNews.title}</h3>
                <div className="main-news-date">{mainNews.date}</div>
              </div>
            </Link>
          )}
        </div>
        <div className="side-news">
          {sideNews && (
            <div className="side-news-item">
              <Link to={`/news/${sideNews.id}`} className="news-link">
                <img src={sideNews.image} alt={sideNews.title} className="side-news-image" />
                <div className="side-news-info">
                  <div className="side-news-title">{sideNews.title}</div>
                  <div className="side-news-date">{sideNews.date}</div>
                </div>
              </Link>
            </div>
          )}
          <div className="side-news-item">
            <div onClick={handleAllNewsClick} className="news-link" style={{ cursor: 'pointer' }}>
              <img src="/images/news3.png" alt="Ранее в новостях" className="side-news-image" />
              <div className="side-news-info">
                <div className="side-news-title">Ранее в новостях</div>
                <div className="show-all"></div>
                <div className="side-news-date">Показать все</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-bottom-space"></div>
    </section>
  );
};

export default News;