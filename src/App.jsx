// import React from 'react';
import './index.css'; // Make sure to import Tailwind CSS
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Services from './components/services';
import ServiceSection from './components/SeviceSection';
// import BookServices from './components/BookServices';
import Features from './components/Features';
import Store from './components/Store';
import FAQ from './components/Faq';
import Steps from './components/Steps';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define the main route (homepage) */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServiceSection />
                <Steps />
                <Store/>
                <Features />
                <Services />
                      {/* <Store/>
      <BookServices/> */}.
                <FAQ />
                <Footer />
              </>
            }
          />

          {/* Define the route for the login page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;