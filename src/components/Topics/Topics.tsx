import React, { useState } from 'react';
import { Wrench, Lightbulb, Settings, Cog, Terminal, Cpu, Briefcase, School, Factory, Users, Building2, Shield } from 'lucide-react';

interface Topic {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Topics: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const topics: Topic[] = [
    {
      icon: <Wrench size={24} />,
      title: "Развитие импортозамещающих отечественных технологий",
      description: "Инновационные решения и разработки для обеспечения технологической независимости"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Проекты и программы инновационного развития",
      description: "Передовые научно-технические разработки и их внедрение в производство"
    },
    {
      icon: <Settings size={24} />,
      title: "Модернизация технологий машиностроения",
      description: "Современные подходы к совершенствованию классического машиностроения"
    },
    {
      icon: <Cog size={24} />,
      title: "Передовые отечественные разработки",
      description: "Инновационные решения в промышленном машиностроении"
    },
    {
      icon: <Terminal size={24} />,
      title: "Производство высокотехнологичного оборудования",
      description: "Системы управления и автоматизации производственных процессов"
    },
    {
      icon: <Cpu size={24} />,
      title: "Технологические решения в энергетике",
      description: "Проектные и инженерные инновации в энергетической отрасли"
    },
    {
      icon: <Factory size={24} />,
      title: "Технологии нефтепереработки",
      description: "Импортозамещающие решения для нефтеперерабатывающей отрасли"
    },
    {
      icon: <Building2 size={24} />,
      title: "Новые материалы в металлургии",
      description: "Перспективные технологии производства металлоконструкций"
    },
    {
      icon: <Shield size={24} />,
      title: "Продукция и технологии для ОПК",
      description: "Инновационные разработки в сфере оборонно-промышленного комплекса"
    },
    {
      icon: <Users size={24} />,
      title: "Решение кадровой проблемы",
      description: "Преодоление «кадрового голода» в промышленности"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Партнерство бизнеса и образования",
      description: "Организация эффективного сотрудничества для подготовки кадров"
    }
  ];

  const visibleTopics = showAll ? topics : topics.slice(0, 6);

  return (
    <section id="topics" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="topics-header text-center">
          <h2 className="topics-title relative inline-block" style={{fontFamily: 'Onest, sans-serif', fontWeight: 800, fontSize: 32, color: '#151d50', textAlign: 'center', lineHeight: 1, marginBottom: 16}}>
            Темы для <span style={{color: '#151d50'}}>обсуждения</span>
          </h2>
          <p style={{fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 20, color: '#4B5563', opacity: 0.8, marginBottom: 32, marginTop: 0, textAlign: 'center'}}>
            Ключевые направления развития технологий и промышленности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {visibleTopics.map((topic, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-200 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-100 transition-colors">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        {topics.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#151d50] hover:bg-[#30378f] text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-bold text-base shadow-md"
            >
              {showAll ? 'Показать меньше' : 'Показать все темы'}
            </button>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

// Добавляю CSS для черты под заголовком
const style = `
.topics-title {
  position: relative;
  display: inline-block;
}
.topics-header {
  margin-bottom: 48px;
}
@media (max-width: 768px) {
  .topics-title {
    font-size: 32px !important;
  }
  .topics-header p {
    font-size: 16px !important;
    padding: 0 16px;
  }
  .topics-header {
    margin-bottom: 32px;
  }
}
@media (max-width: 480px) {
  .topics-title {
    font-size: 28px !important;
  }
  .topics-header p {
    font-size: 14px !important;
  }
}
`;

if (typeof document !== 'undefined' && !document.getElementById('topics-title-style')) {
  const styleTag = document.createElement('style');
  styleTag.id = 'topics-title-style';
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}

export default Topics; 