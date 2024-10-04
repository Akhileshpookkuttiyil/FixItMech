import React from 'react';
import './index.css'; // Make sure to import Tailwind CSS
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Services from './components/Services';
import BookServices from './components/BookServices';


function App() {
  return (
    <div>
      <HeroSection />
      <Services/>
      <BookServices/>
      <Footer />
    </div>
  );
}

export default App;
