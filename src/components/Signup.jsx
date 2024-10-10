import BackgroundImage from "../assets/img/mech_login.jpg";
import googleIcon from "../assets/img/google.png";

const SignupPage = () => {
  return (
    <div className="flex h-screen relative">
      {/* Left Section */}
      <div
        className="w-4/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Right Section */}
      <div className="w-3/5 flex flex-col justify-center p-16 bg-gray-50 relative">
        <h2 className="text-3xl font-bold mb-16">Sign up</h2>

        {/* Social Sign-Up Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <button className="border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center">
            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>

        <div className="text-center text-gray-400 mb-4">OR</div>

        {/* Sign-Up Form */}
        <div className="grid grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="first-name" className="mb-2 text-gray-600">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Your first name"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="last-name" className="mb-2 text-gray-600">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Your last name"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="mb-2 text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="border border-gray-300 py-2 px-4 rounded-full"
            />
          </div>
        </div>

        {/* Sign-Up Button */}
        <div className="mt-7">
          <button className="bg-gray-400 w-40  text-white py-2 px-4 rounded-full">
            Sign up
          </button>
        </div>

        {/* Positioned "Sign in" Link Below Form */}
        <div className="text-center mt-10">
          <p className="text-base text-gray-500">
            Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
