import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

// ИМПОРТ НОВОЙ НОВОСТИ


import { newsMeta as news11Meta } from './news/11';
import { newsMeta as news10Meta } from './news/10';
import { newsMeta as news9Meta } from './news/9';
import { newsMeta as news8Meta } from './news/8';
import { newsMeta as news7Meta } from './news/7';
import { newsMeta as news6Meta } from './news/6';
import { newsMeta as news5Meta } from './news/5';
import { newsMeta as news4Meta } from './news/4';
import { newsMeta as news3Meta } from './news/3';
import { newsMeta as news2Meta } from './news/2';
import { newsMeta as news1Meta } from './news/1';

// ДОБАВЛЕНИЕ НОВОСТЕЙ В ПУЛ
const newsItems = [ news10Meta, news9Meta, news8Meta, news7Meta, news6Meta, news5Meta, news4Meta, news3Meta, news2Meta, news1Meta].sort((a, b) => b.id - a.id);

const NewsPool: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-40 md:mt-40 mt-[120px] max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Новости</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link 
              to={`/news/${news.id}`} 
              key={news.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={scrollToTop}
            >
              <div className="relative w-full aspect-[16/9]">
                <img 
                  src={news.imagePool} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                <div className="text-sm text-gray-500 mb-3">{news.date}</div>
                <p className="text-gray-600 line-clamp-3">{news.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPool;