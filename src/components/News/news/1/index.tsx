import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';


export const newsMeta = {
  id: 1,
  title: "Итоги мероприятия ТехПро 2023",
  date: "Декабрь 03, 2023",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "В этом году мероприятие ТехПро достигло новых высот, собрав рекордное количество участников и экспертов из различных отраслей."
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
            <p>В этом году мероприятие ТехПро достигло новых высот, собрав рекордное количество участников и экспертов из различных отраслей. Основные моменты мероприятия включают:</p>
            
            <h2>Ключевые достижения</h2>
            <ul>
              <li>Более 1000 участников из 20 стран</li>
              <li>50 инновационных проектов</li>
              <li>30 экспертных сессий</li>
              <li>15 стратегических партнерств</li>
            </ul>

            <h2>Инновационные проекты</h2>
            <p>Особое внимание было уделено проектам в области искусственного интеллекта, устойчивого развития и цифровой трансформации. Участники представили решения, которые могут изменить будущее технологической индустрии.</p>

            <h2>Экспертные дискуссии</h2>
            <p>Проведенные дискуссии охватили широкий спектр тем, от развития технологий до их влияния на общество. Эксперты поделились своими взглядами на будущее индустрии и возможные пути развития.</p>

            <h2>Заключение</h2>
            <p>ТехПро 2023 подтвердил свой статус как ключевой площадки для обсуждения будущего технологий. Следующее мероприятие запланировано на 2024 год, и мы ожидаем еще больше инноваций и прорывных идей.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News; 