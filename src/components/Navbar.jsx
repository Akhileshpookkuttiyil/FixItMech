import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/car-icn2.png'; // Adjust the import path if necessary

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center" data-aos="fade-right">
          <img src={logo} alt="Logo" className="h-5 sm:h-9 mr-2" />
          <h1 className="text-base sm:text-2xl md:text-3xl font-bold text-red-800 whitespace-nowrap">FixItMech</h1>
        </div>

        <nav className="hidden md:flex relative" data-aos="fade-left">
          <ul className="flex space-x-12">
            <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
            <li className="relative">
              <button 
                onClick={toggleDropdown}
                className="text-white hover:text-blue-500 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 text-white rounded shadow-lg">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Repair</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Maintenance</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Diagnostics</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Tow Truck</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Oil Change</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Battery Replacement</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="text-white hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="text-white hover:text-blue-500">About</a></li>
            <li><Link to="/login" className="text-white bg-red-800 rounded-sm p-2 hover:text-blue-500">Login</Link></li>
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
            <li>
              <button 
                onClick={toggleDropdown}
                className="text-white hover:text-blue-500 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 w-full rounded shadow-lg">
                  <li><a href="#" className="block px-4 py-2 ">Repair</a></li>
                  <li><a href="#" className="block px-4 py-2">Maintenance</a></li>
                  <li><a href="#" className="block px-4 py-2">Diagnostics</a></li>
                  <li><a href="#" className="block px-4 py-2">Tow Truck</a></li>
                  <li><a href="#" className="block px-4 py-2">Oil Change</a></li>
                  <li><a href="#" className="block px-4 py-2">Battery Replacement</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="text-white hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="text-white hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-white bg-red-800 rounded-sm p-2 hover:text-blue-500">Login</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
