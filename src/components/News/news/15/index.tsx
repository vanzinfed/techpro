import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 15,
  title: "Федеральный координатор сообщества практик превентивной медицины Агентства стратегических инициатив С. Ю. Чудаков примет участие в экспертной встрече «Технологический прорыв»",
  date: "24 июня, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "С. Ю. Чудаков представит уникальную отечественную технологию здоровьесбережения на экспертной встрече «ТЕХПРО-2025» в рамках форума «Армия – 2025»."
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
            <p>Федеральный координатор сообщества практик превентивной медицины АНО «Агентство стратегических инициатив по продвижению новых проектов», вице-президент по стратегическому развитию Национальной ассоциации заслуженных врачей РФ, заместитель председателя экспертного совета Фонда персонализированной медицины кандидат медицинских наук, врач общей практики, доцент кафедры ВОП МОНИКИ Сергей Юрьевич Чудаков представит уникальную отечественную технологию здоровьесбережения, связанную с реабилитацией участников СВО, на III Экспертной встрече «Технологический прорыв» («ТЕХПРО-2025»), которая состоится 12 августа 2025 года и пройдёт в рамках XI Международного военно-технического форума «Армия» («Армия – 2025») в Конгрессно-выставочном центре «Патриот» в городе Кубинке Московской области.</p>

            <p>Не имеющая аналогов в мире медицинская технология предполагает поэтапное восстановление здоровья прошедших боевые действия людей по инновационной методике на основе принципа «От боевого стресса к управляемому восстановлению физического и ментального здоровья».</p>

            <p>Методика разработана в рамках проекта «Управляй СВОим здоровьем» российскими учёными, инженерами и специалистами по восстановительной медицине – партнёрами экосистемы #ЗдоровьеЗдоровых. Проект реализуется при участии Кубанского научного фонда и представляет собой результат объединения передовых технологических решений, клинического опыта и принципов персонализированной медицины. Цель проекта — помочь участникам СВО вернуться к полноценной жизни с помощью применения доступных, масштабируемых и адаптивных методов реабилитации.</p>

            <p>Ключевая особенность подхода — каскадная организация реабилитационных мероприятий: каждый следующий этап дополняет и усиливает предыдущий.</p>

            <p>Каждому пациенту формируют индивидуальную траекторию реабилитации.</p>

            <p>Организаторы экспертной встречи – Межрегиональное научно-технологическое, деловое и образовательное партнёрство «Устойчивое развитие Дальнего Востока и Арктики (МРПА)» и ООО «Системный консалтинг» – приглашают к участию в мероприятии руководителей предприятий, предпринимателей, учёных, инженерно-технических работников. Подробности на сайтах: https://techproforum.ru; https://techproforum.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
