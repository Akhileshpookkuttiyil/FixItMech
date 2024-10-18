import { useState } from 'react';
import BackgroundImage from "../assets/img/mech_login.jpg";
import googleIcon from "../assets/img/google.png";
import twitterIcon from "../assets/img/x.png"; // Twitter icon
import facebookIcon from "../assets/img/fb.png"; // Facebook icon
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="flex h-screen justify-center items-center relative">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', // Add the blur effect here
        }}
      ></div>

      {/* Container for Login Page Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-auto md:h-[90vh] lg:h-[85vh] w-[90vw] md:w-[80vw] lg:w-[75vw] bg-white rounded-lg overflow-hidden shadow-lg">
        
        {/* Left Section (Social Media Buttons for Larger Screens) */}
        <div
          className="hidden md:flex md:w-2/5 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          {/* Title and Social Icons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            {/* Title */}
            <h3 className="text-white text-lg font-semibold mb-2">Sign in with</h3>

            {/* Social Media Icons Row */}
            <div className="flex space-x-4 justify-center -mb-6">
              {/* Google Icon */}
              <button aria-label="Sign in with Google" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={googleIcon} alt="Google" className="w-8 h-8" />
              </button>

              {/* Twitter Icon */}
              <button aria-label="Sign in with Twitter" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={twitterIcon} alt="Twitter" className="w-7 h-7" />
              </button>

              {/* Facebook Icon */}
              <button aria-label="Sign in with Facebook" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Form and Social Media Buttons for Small Screens) */}
        <div className="w-full md:w-3/5 flex flex-col justify-center p-8 md:p-16 bg-gray-50">
          
          {/* Social Media Icons for Small Screens */}
          <div className="md:hidden mb-8 text-center">
            <h3 className="text-gray-700 text-lg font-semibold mb-4">Sign in with</h3>
            <div className="flex space-x-4 justify-center">
              <button aria-label="Sign in with Google" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={googleIcon} alt="Google" className="w-8 h-8" />
              </button>
              <button aria-label="Sign in with Twitter" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={twitterIcon} alt="Twitter" className="w-7 h-7" />
              </button>
              <button aria-label="Sign in with Facebook" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Sign in</h2>

          {/* Sign-In Form */}
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="User name or email address"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className="border border-gray-300 py-2 px-4 rounded-full w-full"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-3 text-gray-400 cursor-pointer"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i> // Eye Slash Icon
                ) : (
                  <i className="fas fa-eye"></i> // Eye Icon
                )}
              </span>
            </div>
            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-blue-500">
                Forgot your password?
              </a>
            </div>
            <button className="bg-gray-400 w-full md:w-32 text-white py-2 px-4 rounded-full">
              Sign in
            </button>
          </div>

          {/* Positioned "Sign up" Link Below Form */}
          <div className="text-center mt-10">
            <p className="text-base text-gray-500">
              Don’t have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
