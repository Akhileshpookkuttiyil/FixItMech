import BackgroundImage from "../assets/img/mech_login.jpg";
import googleIcon from "../assets/img/google.png";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex h-screen relative">
      {/* Left Section */}
      <div
        className="w-4/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Right Section */}
      <div className="w-3/5 flex flex-col justify-center p-16 bg-gray-50 relative">
        <h2 className="text-3xl font-bold mb-16">Sign in</h2>

        {/* Social Sign-In Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <button className="border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center">
            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>

        <div className="text-center text-gray-400 mb-4">OR</div>

        {/* Sign-In Form */}
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="User name or email address"
            className="border border-gray-300 py-2 px-4 rounded-full"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Your password"
              className="border border-gray-300 py-2 px-4 rounded-full w-full"
            />
            <span className="absolute right-4 top-3 text-gray-400 cursor-pointer">
              Hide
            </span>
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-blue-500">
              Forgot your password?
            </a>
          </div>
          <button className="bg-gray-400 w-32 text-white py-2 px-4 rounded-full">
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
  );
};

export default LoginPage;
