import camaro from "../assets/img/camaro.jpg"; // Ensure the correct path

const HowWeDoIt = () => {
  return (
    <section
      className="relative text-white py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${camaro})` }} // Background image dynamically loaded
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12 mt-12 md:mt-24 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          How We Do It
        </h2>
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
          Fast and Efficient Auto Services, Tailored for You
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Only display the steps in a stacked format on small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Step 1 */}
          <div className="text-center w-full p-8 bg-black shadow-lg transform transition-transform hover:scale-105 rounded-lg">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">01</h3>
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">Choose Service</h4>
            <p className="text-sm sm:text-base">
              Select from a wide range of auto services tailored to meet your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center w-full p-8 bg-black shadow-lg transform transition-transform hover:scale-105 rounded-lg">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">02</h3>
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">Book Pickup</h4>
            <p className="text-sm sm:text-base">
              Schedule a pickup time that fits your busy schedule.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center w-full p-8 bg-black shadow-lg transform transition-transform hover:scale-105 rounded-lg">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">03</h3>
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-sm sm:text-base">
              Receive clear and fair pricing before any service begins.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center w-full p-8 bg-black shadow-lg transform transition-transform hover:scale-105 rounded-lg">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">04</h3>
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">Service & Delivery</h4>
            <p className="text-sm sm:text-base">
              We service your vehicle and deliver it back to your doorstep, hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
