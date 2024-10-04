import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/img/car-icn2.png';
import slider1 from '../assets/img/1st.jpg';
import slider2 from '../assets/img/2nd.jpg';
import slider3 from '../assets/img/3rd.jpg';


const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const slides = [
    {
      title: "Welcome to FixItMech",
      description: "Your one-stop solution for auto repair services",
      background: slider1,
    },
    {
      title: "Expert Mechanics",
      description: "Get your car repaired by certified professionals",
      background: slider2,
    },
    {
      title: "Fast and Reliable",
      description: "We ensure quick and efficient service",
      background: slider3,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className={`relative bg-cover bg-center text-white h-screen transition-opacity duration-700`}
      style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <header className="relative z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center" data-aos="fade-right">
            <img src={logo} alt="Logo" className="h-5 sm:h-9 mr-2" />
            <h1 className="text-base sm:text-2xl md:text-3xl font-bold text-red-400 whitespace-nowrap">FixItMech</h1>
          </div>

          <nav className="hidden md:flex" data-aos="fade-left">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-blue-500">About</a></li>
              <li><a href="#" className="text-white hover:text-blue-500">Services</a></li>
              <li><a href="#" className="text-white hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button id="menu-toggle" className="text-white focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <button className="hidden md:block text-white px-6 py-2 border border-white border-opacity-50 rounded-lg transition hover:bg-white hover:text-blue-500">
            Book An Appointment
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav id="mobile-menu" className="md:hidden">
            <ul className="flex flex-col space-y-4 text-center mt-2">
              <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-blue-500">About</a></li>
              <li><a href="#" className="text-white hover:text-blue-500">Services</a></li>
              <li><a href="#" className="text-white hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6">
        <div className="text-center md:text-left md:w-1/2 mb-4 md:mb-0 ml-8" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg mb-6">{slides[currentSlide].description}</p>
          <button className="text-white px-6 py-2 border border-white border-opacity-50 rounded-lg transition hover:bg-white hover:text-blue-500 mt-2">
            Learn More
          </button>

          <div className="flex justify-center md:justify-center space-x-6 mt-14" data-aos="zoom-in">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-1 rounded-full ${index === currentSlide ? 'bg-orange-600' : 'bg-white'}`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="bg-transparent border border-white border-opacity-50 p-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-2 mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Register for Services</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-white placeholder-gray-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-white placeholder-gray-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="service">Select Service</label>
              <select
                id="service"
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-gray-400 placeholder-gray-400"
                required
              >
                <option value="">Choose a service</option>
                <option value="repair">Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="diagnostics">Diagnostics</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-white placeholder-gray-400"
                required
              />
            </div>
            <button type="submit" className="w-full border border-white border-opacity-50 bg-transparent text-white py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
