import React, { useState } from 'react';
import './Experts.css';

const experts = [
  {
    id: 1,
    name: 'Анатолий Иванович Широков',
    description: 'Заместитель председателя Комитета Совета Федерации по федеративному устройству, региональной политике, местному самоуправлению и делам Севера',
    image: '/expert/ex1.jpg'
  },
  {
    id: 2,
    name: 'Екатерина Витальевна Кузьмина',
    description: 'Вице-президент - начальник Управления устойчивого развития ПАО «Промсвязьбанк»',
    image: '/expert/ex2.jpg'
  },
  {
    id: 3,
    name: 'Николай Владимирович Карпов',
    description: 'Генеральный директор ПАО «Славнефть-ЯНОС»',
    image: '/expert/ex3.jpg'
  },
  {
    id: 4,
    name: 'Тамара Ивановна Мордасова',
    description: 'Исполнительный директор',
    image: '/expert/ex4.jpg'
  },
  {
    id: 5,
    name: 'Борис Григорьевич Асташев',
    description: 'Основатель ООО НПП «Циркон-сервис»',
    image: '/expert/ex5.jpg'
  },
  {
    id: 6,
    name: 'Константин Александрович Федоров',
    description: 'Заместитель директора Департамента металлургии и материалов Минпромторга России',
    image: '/expert/ex6.jpg'
  },
  {
    id: 7,
    name: 'Евгений Сергеевич Колганов',
    description: 'Руководитель межрегионального проектного офиса, директор АНО «Центр управления проектами НОЦ «Север»',
    image: '/expert/ex7.jpg'
  },
  {
    id: 8,
    name: 'Дмитрий Владимирович Борисанов',
    description: 'Начальник исследовательской лаборатории ПАО «Славнефть-ЯНОС»',
    image: '/expert/ex8.jpg'
  },
  {
    id: 9,
    name: 'Андреев Дуолан Юрьевич',
    description: 'Руководитель военного направления ООО «Север-Тент»',
    image: '/expert/ex9.jpg'
  },
  {
    id: 10,
    name: 'Генадий Иосифович Шмаль',
    description: 'Президент Союза нефтегазопромышленников России',
    image: '/expert/ex10.jpg'
  },
  {
    id: 11,
    name: 'Андрей Николаевич Карпов',
    description: 'Инженер-технолог ООО «ЛУКОЙЛ-Нижегороднефтеоргсинтез»',
    image: '/expert/ex11.jpg'
  },
  {
    id: 12,
    name: 'Иванов Сергей Викторович',
    description: 'д.ф.-м.н., член-корреспондент РАН, директор ФТИ им. А.Ф. Иоффе',
    image: '/expert/ex12.jpg'
  },
  {
    id: 13,
    name: 'Алексей Сергеевич Болбенков',
    description: 'Президент ГК «Инко-Энерго»',
    image: '/expert/ex13.jpg'
  },
  {
    id: 14,
    name: 'Денис Олегович Болушевский',
    description: 'Управляющий директор АНО «Агентство по технологическому развитию»',
    image: '/expert/ex14.jpg'
  },
  {
    id: 15,
    name: 'Николай Николаевич Ботин',
    description: 'Генеральный директор ООО «Обнинск Сталь Проект»',
    image: '/expert/ex15.jpg'
  },
  {
    id: 16,
    name: 'Никита Владимирович Кислов',
    description: 'Менеджер по проектным продажам',
    image: '/expert/ex16.jpg'
  },
  {
    id: 17,
    name: 'Глеб Александрович Куницын',
    description: 'Директор по инновациям АО «Уральской Сталь»',
    image: '/expert/ex17.jpg'
  },
  {
    id: 18,
    name: 'Семен Юрьевич Лунев',
    description: 'Директор департамента информационного сопровождения: АНО «Центр поддержки инжиниринга и инноваций»',
    image: '/expert/ex18.jpg'
  },
  {
    id: 19,
    name: 'Дмитрий Вадимович Нижельский',
    description: 'Начальник отдела новых видов продукции АО «Уральская Сталь»',
    image: '/expert/ex19.jpg'
  },
  {
    id: 20,
    name: 'Андрей Юрьевич Недре',
    description: 'Советник генерального директора ФГАУ «НИИ «Центр экологической промышленной политики» Минпромторга России',
    image: '/expert/ex20.jpg'
  },
  {
    id: 21,
    name: 'Дмитрий Валерьевич Полохин',
    description: 'Главный эксперт Департамента проектной и инвестиционной деятельности ТПП РФ',
    image: '/expert/ex21.jpg'
  },
  {
    id: 22,
    name: 'Дмитрий Викторович Пряхин',
    description: 'Руководитель ИЦ «ТС-ТЕСТ» АО ЦНИИТС',
    image: '/expert/ex22.jpg'
  },
  {
    id: 23,
    name: 'Андрей Евгеньевич Розен',
    description: 'Заведующий кафедрой «Сварочное, литейное производство и материаловедение» ФГБОУ ВО «Пензенский государственный университет»',
    image: '/expert/ex23.jpg'
  },
  {
    id: 24,
    name: 'Михаил Борисович Ушаков',
    description: 'Генеральный директор АО «Север СТТ»',
    image: '/expert/ex24.jpg'
  }
];

const Experts: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleExperts = isExpanded ? experts : experts.slice(0, 4);

  return (
    <section id="experts" className="experts-section">
      <div className="container">
        <h2 className="section-title">Эксперты</h2>
        
        <div className={`experts-grid ${isExpanded ? 'expanded' : ''}`}>
          {visibleExperts.map(expert => (
            <div key={expert.id} className="expert-card">
              <div className="expert-image">
                <img src={expert.image} alt={expert.name} />
              </div>
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <p className="expert-description">{expert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {experts.length > 4 && (
          <button 
            className="show-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Скрыть' : 'Показать всех экспертов'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Experts;