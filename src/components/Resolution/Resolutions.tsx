import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Download } from 'lucide-react';

interface Resolution {
  year: number;
  title: string;
  description: string;
  downloadUrl: string;
}

const Resolutions: React.FC = () => {
  const [expandedYear, setExpandedYear] = useState<number>(2024);

  const resolutions: Resolution[] = [
    {
      year: 2024,
      title: "Резолюция ТехПро 2024",
      description: "Участники экспертной встречи «Технологический прорыв» («ТехПро»), проведённой 13 августа 2024 года в рамках Международного военно-технического форума «Армия – 2024», рассмотрев актуальные вопросы, связанные с внедрением инновационных технологий с целью обеспечения устойчивого технологического суверенитета Российской Федерации, высказали предложения, важные для развития ряда ключевых отраслей отечественной экономики.",
      downloadUrl: "https://disk.yandex.ru/i/pe6lQlMlwyuvhg"
    },
    {
      year: 2023,
      title: "Резолюция ТехПро 2023",
      description: "Ключевые решения и рекомендации по итогам экспертной встречи «Технологический прорыв» 2023 года, направленные на развитие инновационного потенциала и укрепление технологического суверенитета России.",
      downloadUrl: "https://disk.yandex.ru/d/Mvs0ESsKZRcGkg"
    }
  ];

  return (
    <section id="resolution" className="py-20" style={{ background: '#F5F7FA' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 resolutions-header">
          <h2 className="resolutions-title relative inline-block" style={{fontFamily: 'Onest, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 32px)', color: '#151d50', textAlign: 'center', lineHeight: 1, marginBottom: 16}}>
            Резолюция <span style={{color: '#151d50'}}>«ТехПро»</span>
          </h2>
          <p style={{fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', opacity: 0.8, marginBottom: 0, marginTop: 0, textAlign: 'center', padding: '0 16px'}}>
            Итоговые документы и рекомендации экспертных встреч прошлых лет
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {resolutions.map((resolution) => (
            <div
              key={resolution.year}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setExpandedYear(expandedYear === resolution.year ? 0 : resolution.year)}
                className="w-full px-4 sm:px-8 md:px-16 py-6 md:py-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4 md:space-x-8">
                  <div className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <FileText size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{resolution.title}</h3>
                    <p className="text-sm md:text-base text-gray-500">Итоговый документ</p>
                  </div>
                </div>
                {expandedYear === resolution.year ? (
                  <ChevronUp className="text-gray-400" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              {expandedYear === resolution.year && (
                <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12 border-t border-gray-100 animate-fadeIn">
                  <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed px-4 sm:px-8 md:px-0" style={{ textAlign: 'justify' }}>
                    {resolution.description}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href={resolution.downloadUrl}
                      className="inline-flex items-center px-4 py-2 bg-[#151d50] hover:bg-[#30378f] text-white rounded-lg transition-colors text-sm md:text-base"
                    >
                      <Download size={18} className="mr-2" />
                      Скачать резолюцию
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm md:text-base text-gray-500">
            Архив резолюций доступен по{' '}
            <a href="https://disk.yandex.ru/d/Mvs0ESsKZRcGkg" style={{ color: '#2563EB', textDecoration: 'none' }}>данной ссылке</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resolutions; 