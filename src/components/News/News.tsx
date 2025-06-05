import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

// ИМПОРТ НОВОСТЕЙ И ОПЕРДЕЛЕНИЕ ЕЁ СТАТУСА
import { newsMeta as Main } from './news/10';
import { newsMeta as Side } from './news/9';

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  imageMain: string;
  imagePool: string;
  excerpt: string;
};

const News: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainNews = Main;
  const sideNews = Side;

  return (
    <section className="news-section">
      <h2 className="news-title">Новости мероприятия</h2>
      <div className="news-grid">
        <div className="main-news">
          {mainNews && (
            <Link to={`/news/${mainNews.id}`} className="news-link" onClick={scrollToTop}>
              <img src={mainNews.imageMain} alt={mainNews.title} className="main-news-image" />
              <div className="main-news-info">
                <h3 className="main-news-title">{mainNews.title}</h3>
              </div>
            </Link>
          )}
        </div>
        <div className="side-news">
          <div className="side-news-item">
            <Link to="/news" className="news-link" onClick={scrollToTop}>
              <img src="/images/otherNews.png" alt="Ранее в новостях" className="side-news-image" />
              <div className="side-news-info">
                <div className="side-news-title">Показать все новости</div>
                <div className="show-all"></div>
                
              </div>
            </Link>
          </div>
          {sideNews && (
            <div className="side-news-item">
              <Link to={`/news/${sideNews.id}`} className="news-link" onClick={scrollToTop}>
                <img src={sideNews.imageMain} alt={sideNews.title} className="side-news-image" />
                <div className="side-news-info">
                  <div className="side-news-title">{sideNews.title}</div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="news-bottom-space"></div>
    </section>
  );
};

export default News;