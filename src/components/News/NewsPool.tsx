import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import './NewsPool.css';

const NewsPool: React.FC = () => {
  return (
    <div className="news-page-container">
      <div className="news-pool">
        <h1 className="news-pool-title">Все новости</h1>
        <div className="news-pool-grid">
          {newsData.map(news => (
            <Link to={`/news/${news.id}`} className="news-pool-item" key={news.id}>
              <div className="news-pool-image-container">
                <img src={news.image} alt={news.title} className="news-pool-image" />
              </div>
              <div className="news-pool-content">
                <h2 className="news-pool-item-title">{news.title}</h2>
                <div className="news-pool-date">{news.date}</div>
                <p className="news-pool-preview">{news.content.substring(0, 150)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPool; 