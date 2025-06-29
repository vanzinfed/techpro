import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 16,
  title: "Технологический прорыв – задача государственной важности",
  date: "26 июня, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Президент РФ В. В. Путин обозначил приоритеты технологического развития страны до 2030 года."
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
            <p>Выступая 20 июня 2025 года на пленарном заседании XXVIII Петербургского международного экономического форума, Президент РФ В. В. Путин отметил, что «экономика России должна стать более технологичной».</p>

            <p>«И это не пожелание – это объективное требование сегодняшнего, да и завтрашнего дня, вызов, на который обязательно нужно отвечать, если мы хотим стать сильнее. А мы хотим», – подчеркнул Глава Российского государства.</p>

            <p>Предстоит в полную силу развернуть новый этап технологического развития РФ, и ключевым инструментом станут реализуемые с 2025 года национальные проекты, направленные на обеспечение технологического лидерства нашей страны.</p>

            <p>В. В. Путин обратил внимание на то, что к 2030 году в России совокупные затраты государства и бизнеса на исследования и разработки должны вырасти не менее чем до двух процентов ВВП; особая роль отводится частному бизнесу, вложения которого на эти цели должны быть увеличены не менее чем в два раза.</p>

            <p>Президент РФ подчеркнул особую важность исключения дублирующих функций фондов и институтов развития, координации работы институтов развития и подготовки единых требований к процедурам поддержки бизнеса: от регистрации изобретения до серийного выпуска высокотехнологичной продукции.</p>

            <p>«Отмечу, что за два года число заявок на изобретения от отечественных компаний и научных организаций выросло на 13 процентов – хороший показатель. В том числе есть и рост в области оптических и компьютерных технологий, потребительских товаров, фармацевтики», – сказал В. В. Путин.</p>

            <p>Глава Российского государства отметил, что «коллеги в Правительстве будут держать на личном контроле внедрение новых технологий по своим сферам ответственности, донастроят нормативную базу на эксперименты, обкатку и тиражирование перспективных решений».</p>

            <p>«Дополню: считаю нужным, чтобы Правительство готовило ежегодный доклад о динамике технологического развития страны, где в том числе будут оцениваться текущий уровень технологического суверенитета и прорывные решения технологического лидерства, а также темпы их внедрения по отраслям экономики», – подчеркнул В. В. Путипн.</p>

            <p>Глава Российского государства отметил важность того, чтобы «эффект от технологического прорыва приносил благо, пользу всем», способствовал позитивному изменению структуры общества, снижению уровня бедности и повышению качества жизни, создавал равные возможности для каждого человека, позволял ему раскрыть свой потенциал; чтобы был реализован фундаментальный принцип справедливости.</p>

            <p>При подготовке материала были использованы сведения, представленные в опубликованном 20 июня 2025 года на официальном сайте Президента России тексте выступления Президента РФ В. В. Путина на пленарном заседании Петербургского международного экономического форума (www.kremlin.ru).</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
