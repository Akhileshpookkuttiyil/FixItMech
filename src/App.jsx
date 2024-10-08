import React from 'react';
import './index.css'; // Make sure to import Tailwind CSS
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Services from './components/Services';
import ServiceSection from './components/SeviceSection';
// import BookServices from './components/BookServices';
import Features from './components/Features';
// import Store from './components/Store';


function App() {
  return (
    <div>
      <HeroSection />
      <ServiceSection/>
      <Features/>
      <Services/>
      {/* <Store/>
      <BookServices/> */}
      <Footer />
    </div>
  );
}

export default App;
