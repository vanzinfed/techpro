import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 7,
  title: "Председатель правления Группы компаний «ВЕРАТЕК» А. Ю. Никитин выступает модератором сессии в рамках Национального форума-выставки «Транспортные коридоры России»",
  date: "30 Май, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Вместе с Анатолием Юрьевичем Никитиным модератором сессии выступает руководитель направления портовой инфраструктуры ПАО «Северсталь»"
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
            <p>Председатель правления Группы компаний «ВЕРАТЕК» кандидат экономических наук Анатолий Юрьевич Никитин выступает модератором сессии «Технологические решения и проекты для создания и модернизации инфраструктуры в условиях современных вызовов» в рамках Национального форума-выставки «Транспортные коридоры России», проходящего 30 мая 2025 года в Москве, в Гостинице «Президент-Отель».</p>

            <p>Вместе с Анатолием Юрьевичем Никитиным модератором сессии выступает руководитель направления портовой инфраструктуры ПАО «Северсталь» Ксения Владимировна Лужецкая.</p>

            <p>На сессии рассматриваться вопросы организации деятельности подрядных организаций по строительству портовой и железнодорожной инфраструктуры; грузоподъёмные механизмы; машины и механизмы для портов и железнодорожных транспортно-логистических терминалов (локомотивы, рельсы, шпалы, склады и прочее); деятельность различных категорий подрядчиков: строителей портовой инфраструктуры; строителей объектов железнодорожной инфраструктуры; производителей трубошпунта и металлоконструкций; поставщиков портовой техники и локомотивов; инженерных компаний, занимающихся ИТ-обеспечением деятельности железнодорожного транспорта и других видов транспорта; строителей легковозводимых зданий; проектных институтов, разрабатывающих объекты железнодорожной инфраструктуры и гидротехнические объекты.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
