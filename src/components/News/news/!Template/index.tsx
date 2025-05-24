import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';


export const newsMeta = {
  id: 3,
  title: "Test Title 3",
  date: "Test, Date",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Test Description"
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
            <p>Test Text</p>
            
            <h2>Test Title 2</h2>
            <ul>
              <li>Test Item 1</li>
              <li>Test Item 2</li>
              <li>Test Item 3</li>
              <li>Test Item 4</li>
            </ul>

            <h2>Test Title 3</h2>
            <p>Test Text</p>

            <h2>Test Title 4</h2>
            <p>Test Text</p>

            <h2>Test Title 5</h2>
            <p>Test Text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News; 