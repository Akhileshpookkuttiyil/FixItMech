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
            <li><Link to="/" className="text-white hover:text-blue-500">Home</Link></li>
            <li className="relative">
              <button 
                onClick={toggleDropdown}
                className="text-white hover:text-blue-500 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
                  <li><Link to="/repair" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Repair</Link></li>
                  <li><Link to="/maintenance" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Maintenance</Link></li>
                  <li><Link to="/diagnostics" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Diagnostics</Link></li>
                  <li><Link to="/towtruck" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Tow Truck</Link></li>
                  <li><Link to="/oilchange" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Oil Change</Link></li>
                  <li><Link to="/batteryreplacement" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Battery Replacement</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="text-white hover:text-blue-500">Contact</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-500">About</Link></li>
            <li>
              <Link to="/login" className="text-white bg-red-800 rounded-sm p-2 hover:text-blue-500">Login</Link>
            </li>
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
        <div className="md:hidden bg-gray-800 p-4">
          <form className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="p-2 rounded border border-gray-300" 
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="p-2 rounded border border-gray-300" 
              required
            />
            <textarea 
              placeholder="Message" 
              className="p-2 rounded border border-gray-300" 
              rows="3" 
              required
            />
            <button type="submit" className="bg-red-800 text-white py-2 rounded">Submit</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
