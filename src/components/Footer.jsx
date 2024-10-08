
import logo from "../assets/img/car-icn2.png"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-black text-gray-700 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img src={logo} alt="FixItMech Logo" className="h-10" />
            <span className="text-red-900 font-bold text-2xl ml-3">FixItMech</span>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © 2024 FixItMech. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-blue-500 hover:text-blue-600 mx-2 transition-all duration-300">
              Facebook
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 mx-2 transition-all duration-300">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 mx-2 transition-all duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
