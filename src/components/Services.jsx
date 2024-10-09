import repairIcon from '../assets/img/repair.jpg'; 
import maintenanceIcon from '../assets/img/maintenance-icon.jpg';
import diagnosticsIcon from '../assets/img/diagnostics-icon.jpg';
import towTruck from '../assets/img/tow-truck.jpg'; 
import oilChangeIcon from '../assets/img/oil-jug-icon.jpg';
import batteryReplacementIcon from '../assets/img/car-battery-icon.jpg';

// Service data
const services = [
  { title: "Repair", description: "Comprehensive car repair services", icon: repairIcon },
  { title: "Maintenance", description: "Regular maintenance to keep your car running smoothly", icon: maintenanceIcon },
  { title: "Diagnostics", description: "Advanced diagnostics to identify issues", icon: diagnosticsIcon },
  { title: "Tow Truck", description: "Reliable towing service for emergencies", icon: towTruck },
  { title: "Oil Change", description: "Quick and efficient oil change services", icon: oilChangeIcon },
  { title: "Battery Replacement", description: "Fast battery replacement for any vehicle", icon: batteryReplacementIcon }
];

const Services = () => {
  return (
    <section className="py-10 bg-gray-900 w-6/6 mx-auto">
      <h2 className="text-center text-4xl font-semibold text-white mb-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600 mr-3">
          <path fillRule="evenodd" d="M19 9l-7 7-7-7" clipRule="evenodd" />
        </svg>
        Why Choose Us
      </h2>
      <div className="flex flex-wrap justify-around gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 flex-shrink-0 w-full sm:w-56 md:w-48 lg:w-40 h-64"
          >
            <img
              src={service.icon}
              alt={`${service.title} icon`}
              className="w-20 h-20 mb-4 rounded-full bg-black"
            />
            <h3 className="text-xl font-bold text-white h-12 w-full flex items-center justify-center">
              {service.title}
            </h3>
            <p className="text-gray-400 h-16 w-full flex items-center justify-center text-center mt-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
