import React from 'react';
import { Zap, Users, Lightbulb, Trophy } from 'lucide-react';
import './About.css';

const features = [
  {
    icon: <Zap size={28} strokeWidth={2.2} />,
    title: "Инновации",
    description: "Познакомьтесь с прорывными технологиями и решениями, формирующими будущее различных отраслей."
  },
  {
    icon: <Users size={28} strokeWidth={2.2} />,
    title: "Нетворкинг",
    description: "Установите ценные контакты с лидерами индустрии, экспертами и единомышленниками."
  },
  {
    icon: <Lightbulb size={28} strokeWidth={2.2} />,
    title: "Экспертиза",
    description: "Получите знания и аналитику от ведущих экспертов в области технологий и инноваций."
  },
  {
    icon: <Trophy size={28} strokeWidth={2.2} />,
    title: "Возможности",
    description: "Откройте для себя новые бизнес-возможности и перспективы профессионального роста."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-gradient">
        <div className="bg-grid-pattern"></div>
        <div className="bg-tech-pattern"></div>
      </div>
      <div className="about-decor about-decor-blue"></div>
      <div className="about-decor about-decor-purple"></div>
      <div className="container">
        <div className="about-header">
          <h2 className="about-main-title">
            Экспертная встреча
          </h2>
          <p className="about-subtitle">
            Ежегодное мероприятие, объединяющее лидеров технологической индустрии, инноваторов и визионеров
          </p>
        </div>
        <div className="about-features">
          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Zap size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">500+</div>
                <div className="about-feature-innovation-stat-desc">Участников</div>
              </div>
            </div>
            <div className="about-feature-title">Технологическое развитие</div>
            <div className="about-feature-desc about-feature-desc-justify">
              Распоряжением Правительства РФ от 20 мая 2023 года была утверждена Концепция технологического развития страны до 2030 года. Основные цели документа — переход к инновационно ориентированному экономическому росту и обеспечение устойчивого развития производственных систем за счёт технологического прогресса.
            </div>
          </div>

          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Users size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">8+</div>
                <div className="about-feature-innovation-stat-desc">Сессий</div>
              </div>
            </div>
            <div className="about-feature-title">Устойчивый технологический суверенитет</div>
            <div className="about-feature-desc about-feature-desc-justify">
              Экспертная встреча посвящена формированию устойчивого технологического суверенитета Российской Федерации. Актуальность мероприятия продиктована необходимостью создания конкурентоспособной технологической устойчивости через развитие передовых технологий, модернизацию производств и техническое переоснащение предприятий.
            </div>
          </div>

          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Lightbulb size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">20+</div>
                <div className="about-feature-innovation-stat-desc">Экспертов</div>
              </div>
            </div>
            <div className="about-feature-title">Роль современных технологий</div>
            <div className="about-feature-desc about-feature-desc-justify">
              Современные технологии играют ключевую роль в развитии всех отраслей промышленного производства. Их внедрение способствует ускоренному росту, повышению эффективности и конкурентоспособности российских предприятий на внутреннем и внешнем рынках.
            </div>
          </div>
        </div>

        <div className="about-features-single">
          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Trophy size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">100%</div>
                <div className="about-feature-innovation-stat-desc">Эффективность</div>
              </div>
            </div>
            <div className="about-feature-title">Платформа для диалога и сотрудничества</div>
            <div className="about-feature-desc about-feature-desc-justify">
              «ТехПро» является идеальной площадкой для обмена опытом и знаниями, продвижения инновационных идей и проектов. Форум объединяет ключевых игроков технологической индустрии, создавая уникальное пространство для развития бизнеса и технологий.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;