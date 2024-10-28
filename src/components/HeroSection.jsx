import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar'; // Adjust the import path if necessary
import slider1 from '../assets/img/1st.jpg';
import slider2 from '../assets/img/2nd.jpg';
import slider3 from '../assets/img/3rd.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    // Initialize AOS animation
    AOS.init({
      duration: 1200,
      once: true,
    });

    // Preload all images
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.background;
    });
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-cover bg-center text-white h-screen">
      <div
        className="absolute inset-0 transition-opacity duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Navbar />

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
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-white placeholder-gray-400 focus:bg-transparent"
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
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-white placeholder-gray-400 focus:bg-transparent"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="service">Select Service</label>
              <select
                id="service"
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-gray-400 placeholder-gray-400 appearance-none focus:ring-0 focus:bg-transparent focus:outline-none"
                required
              >
                <option value="" className="bg-gray-800" disabled>Choose a service</option>
                <option value="repair" className="bg-gray-800">Repair</option>
                <option value="maintenance" className="bg-gray-800">Maintenance</option>
                <option value="diagnostics" className="bg-gray-800">Diagnostics</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full p-2 border border-white border-opacity-50 bg-transparent text-white placeholder-gray-400 focus:bg-transparent"
                required
              />
            </div>
            <button type="submit" className="w-full border border-white border-opacity-50 bg-transparent text-white py-2 transition">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
