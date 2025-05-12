import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPool from '../components/News/NewsPool';
import NewsDetail from '../components/News/NewsDetail';

const NewsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPool />} />
      <Route path="/:id" element={<NewsDetail />} />
    </Routes>
  );
};

export default NewsRoutes; 