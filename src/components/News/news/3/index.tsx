import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';


export const newsMeta = {
  id: 3,
  title: "Мантуров: В России выросло производство компонентов для боеприпасов",
  date: "Май 17, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Первый вице-премьер Денис Мантуров совместно с главой Минпромторга Антоном Алихановым посетил одно из ведущих предприятий по производству спецхимии."
};

const News: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.newsArticlePage}>
        <Link to="/news" className={styles.backButton}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад к новостям
        </Link>
        <div className={styles.newsContent}>
          <h1 className={styles.newsTitle}>{newsMeta.title}</h1>
          <div className={styles.newsDate}>{newsMeta.date}</div>
          <div className={styles.newsImageContainer}>
            <img src={newsMeta.image} alt={newsMeta.title} className={styles.newsImage} />
          </div>
          <div className={styles.newsText}>
            <p>🏭Первый вице-премьер Денис Мантуров совместно с главой Минпромторга Антоном Алихановым посетил одно из ведущих предприятий по производству спецхимии.</p>
            
            <p>🔺Денис Мантуров отметил значительный рост производства этой продукции в России. Он также добавил, что дальнейшему увеличению российских мощностей для выпуска основных компонентов для боеприпасов и других современных средств поражения будут способствовать создание новых и оптимизация существующих производственных площадок.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News; 