import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import News from './components/News/News';
import PhotoBlock from './components/PhotoBlock/PhotoBlock';
import About from './components/About/About';
import Experts from './components/Experts/Experts';
import Partners from './components/Partners/Partners';
import Topics from './components/Topics/Topics';
import Resolutions from './components/Resolution/Resolutions';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';

import NewsRoutes from './routes/NewsRoutes';

function HomePage() {
  return (
    <>
      <Hero />
      <News />
      <PhotoBlock />
      <About />
      <Topics />
      <Experts />
      <Partners />
      <Resolutions />
      <Projects />
      <Contacts />
      <Registration />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = 'ТЕХПРО - Экспертная встреча';
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/*" element={<NewsRoutes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;