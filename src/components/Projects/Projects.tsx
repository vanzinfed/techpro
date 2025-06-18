import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Региональная энергетика и энергосбережение',
    description: 'Журнал рассказывает о развитии энергетики, энергоэффективности, экологии и научных достижениях. Это площадка для обмена мнениями между властью, бизнесом и экспертами отрасли.',
    image: '/images/pj1.png',
    link: 'https://energy.s-kon.ru/',
  },
  {
    id: 2,
    title: 'Межрегиональное партнерство',
    description: 'Масштаб и сложность накопленных проблем требуют системного подхода и объединения усилий власти, бизнеса, науки, образования и общества. Этому способствует единая общественная платформа в формате межрегионального партнёрства.',
    image: '/images/pj2.png',
    link: 'https://mrprussia.ru/',
  },
  {
    id: 3,
    title: 'Дальний Восток и Арктика-2025',
    description: 'Международная конференция «Дальний Восток и Арктика – 2025» во исполнение поручений Президента РФ. За 9 лет конференция зарекомендовала себя как авторитетная площадка для обсуждения ключевых задач дальневосточных и арктических регионов.',
    image: '/images/pj3.png',
    link: 'https://arctic.s-kon.ru/',
  },
  {
    id: 4,
    title: 'Премия За развитие Дальнего Востока и Арктики',
    description: 'Премия «За развитие Дальнего Востока и Арктики» учреждена для поддержки устойчивого развития регионов, внедрения инноваций и привлечения инвестиций. Она также направлена на сохранение культурного наследия народов, проживающих в этих территориях.',
    image: '/images/pj4.png',
    link: 'https://premiya.mrprussia.ru/',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 projects-header">
          <h2 className="projects-title relative inline-block" style={{fontFamily: 'Onest, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 32px)', color: '#151d50', textAlign: 'center', lineHeight: 1, marginBottom: 28}}>
            Наши <span style={{color: '#151d50'}}>проекты</span>
          </h2>
          <p style={{fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', opacity: 0.8, marginBottom: 32, marginTop: 0, textAlign: 'center', padding: '0 16px'}}>
            Ознакомьтесь с ключевыми проектами и инициативами, разработанными и поддержанными в рамках ТехПро.
          </p>
        </div>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group block"
            >
              <div className="project-image w-full h-48 flex items-center justify-center bg-[#F8F8F8] relative">
                <img src={project.image} alt={project.title} className="max-w-[120px] max-h-[120px] mx-auto my-4 object-contain transition duration-300" />
                <div className="absolute inset-0">
                  <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#1e293bcc] via-[#1e293b66] to-transparent"></div>
                  <div
                    className="absolute left-4 bottom-3 flex items-center gap-2 text-white text-[14px] font-normal group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                    style={{fontFamily: 'Onest, sans-serif'}}
                  >
                    Подробнее о проекте
                    <ExternalLink size={16} strokeWidth={2} className="text-white opacity-80" />
                  </div>
                </div>
              </div>
              <div className="project-info p-4 sm:p-6 text-left">
                <h3 className="text-[#151d50] font-bold text-[18px] sm:text-[20px] mb-2" style={{fontFamily: 'Onest, sans-serif', textAlign: 'left'}}>{project.title}</h3>
                <p className="text-[#4B5563] text-[14px] sm:text-[16px]" style={{fontFamily: 'Onest, sans-serif', fontWeight: 400, textAlign: 'justify'}}>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 