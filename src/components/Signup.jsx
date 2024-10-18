import { useState } from 'react';
import BackgroundImage from "../assets/img/mech_signup.avif";
import googleIcon from "../assets/img/google.png";
import twitterIcon from "../assets/img/x.png"; // Twitter icon
import facebookIcon from "../assets/img/fb.png"; // Facebook icon
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
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
          filter: 'blur(8px)', // Blur effect
        }}
      ></div>

      {/* Container for Signup Page Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-[90vh] w-[90vw] max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Section */}
        <div
          className="w-full md:w-2/5 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          {/* Title and Social Icons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className="text-white text-lg font-semibold mb-6">Sign up with</h3>
            <div className="flex space-x-4 justify-center -mb-6">
              <button aria-label="Sign up with Google" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={googleIcon} alt="Google" className="w-8 h-8" />
              </button>
              <button aria-label="Sign up with Twitter" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={twitterIcon} alt="Twitter" className="w-7 h-7" />
              </button>
              <button aria-label="Sign up with Facebook" className="p-2 rounded-full shadow-lg hover:shadow-xl transition">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-center p-12 md:p-16 bg-gray-50 relative">
          <h2 className="text-3xl font-bold mb-8">Sign up</h2>

          {/* Sign-Up Form */}
          <div className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="first-name" className="mb-2 text-gray-600">First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder="Your first name"
                className="border border-gray-300 py-2 px-4 rounded-full w-full" // Set width to full
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="last-name" className="mb-2 text-gray-600">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Your last name"
                className="border border-gray-300 py-2 px-4 rounded-full w-full" // Set width to full
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="border border-gray-300 py-2 px-4 rounded-full w-full" // Set width to full
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-gray-600">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                className="border border-gray-300 py-2 px-4 rounded-full w-full" // Set width to full
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-gray-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  className="border border-gray-300 py-2 px-4 rounded-full w-full" // Set width to full
                  required
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
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label htmlFor="confirm-password" className="mb-2 text-gray-600">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="border border-gray-300 py-2 px-4 rounded-full w-full" // Set width to full
                  required
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 top-3 text-gray-400 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <i className="fas fa-eye-slash"></i> // Eye Slash Icon
                  ) : (
                    <i className="fas fa-eye"></i> // Eye Icon
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Sign-Up Button */}
          <div className="mt-7">
            <button className="bg-gray-400 w-40 text-white py-2 px-4 rounded-full">
              Sign up
            </button>
          </div>

          {/* Positioned "Sign in" Link Below Form */}
          <div className="text-center mt-10">
            <p className="text-base text-gray-500">
              Already have an account? <Link to="/login" className="text-blue-500">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
