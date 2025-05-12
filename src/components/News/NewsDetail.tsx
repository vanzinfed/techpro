import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import './NewsDetail.css';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const news = newsData.find(n => n.id === Number(id));

  if (!news) {
    return (
      <div className="news-page-container">
        <div className="news-detail-error">
          <h2>Новость не найдена</h2>
          <button onClick={() => navigate('/news')} className="back-link">
            Вернуться к списку новостей
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-page-container">
      <div className="news-detail">
        <button onClick={() => navigate('/news')} className="back-link">
          ← Назад к новостям
        </button>
        <article className="news-detail-content">
          <h1 className="news-detail-title">{news.title}</h1>
          <div className="news-detail-date">{news.date}</div>
          <div className="news-detail-image-container">
            <img src={news.image} alt={news.title} className="news-detail-image" />
          </div>
          <div className="news-detail-text">
            {news.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail; 