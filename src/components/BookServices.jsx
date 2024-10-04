
import Diagnosis from "../assets/img/Diagnosis2.jpg"; // Ensure the filename is correct
import { FaCheck } from "react-icons/fa"; // Import the tick icon

const services = [
  "Complete System Scan",
  "Engine Oil Replacement",
  "Tow-Truck Services",
  "Oil Filter, Air Filter & Cabin Filter Replacement",
  "Brake-Pads Check & Cleanup",
  "Brake Fluid Top-Up",
  "Spark Plug Check",
  "Fuel Filter Check",
  "Coolant Top-Up",
  "Wiper Fluid Top-Up",
  "Thorough Interior Vacuum",
  "Car Wash",
  "Dashboard Protector",
  "Engine Cleaner",
  "Alloys Wheel Cleaner",
  "Tyre Shine",
  "Battery Check",
];

const BookServices = () => {
  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-around items-start">
        
        {/* Left side - Detailed Description with Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="bg-zinc-950 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 duration-300">
            <img
              src={Diagnosis}
              alt="Service Image"
              className="w-full h-96 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Car Care Services</h3>
              <p className="text-gray-400 mb-4">
                At our auto service center, we provide a complete range of car care solutions, designed to ensure that your vehicle operates smoothly and efficiently. Our team of expert technicians is highly trained and equipped to handle any task, from routine maintenance to complex repairs.
              </p>
              <p className="text-gray-400 mb-4">
                Whether your car requires an oil change, engine diagnostics, or brake service, we are committed to delivering exceptional service with precision and care. Using state-of-the-art equipment and modern techniques, we diagnose problems accurately and fix them quickly to get you back on the road.
              </p>
              <p className="text-gray-400">
                Your car deserves the best, and we are here to provide just that. Our services ensure longevity, safety, and optimal performance for your vehicle, no matter its make or model. Trust us with your car care needs, and experience unmatched professionalism, quality, and reliability.
              </p>

              {/* Services List with Tick Icons */}
              <div className="mt-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center text-gray-400 mb-2">
                    <FaCheck className="text-green-500 mr-2" /> {/* Tick icon */}
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Booking Section */}
        <div className="w-full lg:w-2/5 lg:ml-6 sticky top-20">
          <div className="bg-red-600 rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition-all hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">Book Your Service Now</h3>
            <p className="text-white mb-6">
              Don’t wait! Schedule an appointment today and experience the best car care services in town.
            </p>
            <button
              className="bg-white text-red-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 self-end"
              aria-label="Book your service"
              onClick={() => alert("Booking functionality coming soon!")}
            >
              Book Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookServices;
