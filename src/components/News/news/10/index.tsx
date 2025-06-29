import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 10,
  title: "Заседание коллегии Министерства РФ по развитию Дальнего Востока и Арктики",
  date: "6 июня, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Состоялось итоговое заседание коллегии Министерства РФ по развитию Дальнего Востока и Арктики"
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
            <p>
              Состоялось итоговое заседание коллегии Министерства РФ по развитию Дальнего Востока и Арктики. Сегодня, 6 июня 2025 года, в Москве, в Международном мультимедийном пресс-центре МИА «Россия сегодня», состоялось итоговое заседание коллегии Министерства РФ по развитию Дальнего Востока и Арктики. Оно было посвящено результатам работы ведомства в 2024 году и задачам на текущий год.
            </p>

            <p>
              Заседание прошло под руководством министра РФ по развитию Дальнего Востока и Арктики А. О. Чекункова. Он отметил, что мероприятие можно рассматривать и как подведение итогов первого десятилетия опережающего развития Дальнего Востока и первой пятилетки опережающего развития Арктики.
            </p>

            <p>
              Видеообращение к участникам заседания представила заместитель Председателя Государственной Думы ФС РФ И. А. Яровая.
            </p>

            <p>
              С докладами выступили председатель Комитета Государственной Думы ФС РФ по развитию Дальнего Востока и Арктики Герой Труда РФ Н. М. Харитонов, председатель Комитета Совета Федерации ФС РФ по федеративному устройству, региональной политике, местному самоуправлению и делам Севера А. А. Шевченко, губернатор Сахалинской области В. И. Лимаренко, губернатор Мурманской области А. В. Чибис (выступление было представлено в онлайн-формате), председатель Общественного совета при Министерстве РФ по развитию Дальнего Востока и Арктики В. А. Шалай (выступление также состоялось в онлайн-формате).
            </p>

            <p>
              В финале заседания губернатор Приморского края О. Н. Кожемяко вручил награды Приморского края государственным служащим – участникам СВО. Также состоялись торжественная церемония награждения государственных и муниципальных служащих, руководителей предприятий, внёсших значительный вклад в развитие дальневосточных и арктических регионов РФ и торжественная церемония награждения детей – участников конкурса «Рисуем Победу».
            </p>

            <p>
              В итоговом заседании коллегии Министерства РФ по развитию Дальнего Востока и Арктики приняла участие директор по развитию Межрегионального научно-технологического, делового и образовательного партнёрства «Устойчивое развитие Дальнего Востока и Арктики (МРПА)» Л. Г. Курбаналиева.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
