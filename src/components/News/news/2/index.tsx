import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

import DownloadButton from '../!elements/DownloadButton';


export const newsMeta = {
  id: 2,
  title: "Спец выпуск Техпро",
  date: "Декабрь 03, 2023",
  image: newsImage,
  imageMain: newsImageMain,
  imagePool: newsImagePool,
  excerpt: "В специальном выпуске ТехПро мы рассказываем о самых значимых достижениях и инновациях, представленных на мероприятии."
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
            <p>В специальном выпуске ТехПро мы рассказываем о самых значимых достижениях и инновациях, представленных на мероприятии. Особое внимание уделено проектам, которые могут изменить будущее технологической индустрии.</p>
            
            <div style={{ marginTop: '2rem' }}>
              <DownloadButton 
                href="https://disk.360.yandex.ru/i/2BYzaubRuvBYHQ" 
                text="Скачать спецвыпуск"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News; 