import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 11,
  title: "Вышел в свет второй в 2025 году номер ежеквартального информационно-аналитического журнала «Региональная энергетика и энергосбережение»",
  date: "10 июня, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Вышел в свет второй в 2025 году номер журнала «Региональная энергетика и энергосбережение», посвящённый стратегии развития энергетики РФ, инновациям и кибербезопасности."
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
            <p>Дорогие друзья!</p>

            <p>
              Вышел в свет второй в 2025 году номер ежеквартального информационно-аналитического журнала «Региональная энергетика и энергосбережение»
              <br></br>(
              <a
                href="https://energy.s-kon.ru/ree-02-2025/"
                className={styles.newsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://energy.s-kon.ru/ree-02-2025/
              </a>
              )
              <br></br><br></br>
              Прочитав наше издание, Вы получите представление о принятой 12 апреля 2025 года «Энергетической стратегии РФ на период до 2050 года»,
              узнаете о результатах прошедшей в Москве 13 – 14 марта 2025 года X Юбилейной международной научно-практической конференции «Дальний Восток и Арктика: устойчивое развитие»,
              о становлении отечественной атомной энергетики, о перспективах угольной отрасли России, о различных аспектах цифровой безопасности (кибербезопасности); познакомитесь с инновационными разработками наших учёных и инженеров.
            </p>

            <p>
              Вы также прочитаете интервью с руководителями высокотехнологичных предприятий и финансовых учреждений, вносящих существенный вклад в развитие нашей страны.
            </p>

            <p>
              Желаем Вам приятного чтения и надеемся, что оно окажется для вас увлекательным, познавательным и полезным.
            </p>

            <p>
              С глубочайшим уважением к вам и с благодарностью за ваше внимание<br/>
              редакция журнала «Региональная энергетика и энергосбережение» и его директор-издатель Тамара Ивановна Мордасова
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
