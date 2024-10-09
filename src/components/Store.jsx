

// Image variables for product icons (dummy paths, replace with actual)
import maintenanceIcon from '../assets/img/car-maintain.jpg';
import airConditioningIcon from '../assets/img/air-conditioning.jpg';
import beltsIcon from '../assets/img/belts.jpg';
import bearingsIcon from '../assets/img/bearings.jpg';
import bodyIcon from '../assets/img/body-icon.jpg';
import brakesIcon from '../assets/img/brakes.jpg';
import exhaustIcon from '../assets/img/exhaust.jpg';
import suspensionIcon from '../assets/img/suspension.jpg';
import engineIcon from '../assets/img/engine.jpg';
import electricalIcon from '../assets/img/electrical.jpg';
import fuelIcon from '../assets/img/fuel.jpg';
import transmissionIcon from '../assets/img/transmission.jpg';
import coolingIcon from '../assets/img/cooling.jpg';
import interiorIcon from '../assets/img/interior.jpg';
import wheelsIcon from '../assets/img/wheels.jpg';  // New icon for Wheels and Tires
import fluidsIcon from '../assets/img/lubricants.jpg';  // New icon for Lubricants and Fluids

// Array of product groups data
const productGroups = [
  {
    id: 1,
    title: 'Maintenance Service Parts',
    icon: maintenanceIcon,
  },
  {
    id: 2,
    title: 'Air Conditioning',
    icon: airConditioningIcon,
  },
  {
    id: 3,
    title: 'Belts Chains and Rollers',
    icon: beltsIcon,
  },
  {
    id: 4,
    title: 'Bearings',
    icon: bearingsIcon,
  },
  {
    id: 5,
    title: 'Body',
    icon: bodyIcon,
  },
  {
    id: 6,
    title: 'Brakes and Brake Parts',
    icon: brakesIcon,
  },
  {
    id: 7,
    title: 'Exhaust Systems',
    icon: exhaustIcon,
  },
  {
    id: 8,
    title: 'Suspension and Steering',
    icon: suspensionIcon,
  },
  {
    id: 9,
    title: 'Engine Components',
    icon: engineIcon,
  },
  {
    id: 10,
    title: 'Electrical and Lighting',
    icon: electricalIcon,
  },
  {
    id: 11,
    title: 'Fuel Systems',
    icon: fuelIcon,
  },
  {
    id: 12,
    title: 'Transmission and Drivetrain',
    icon: transmissionIcon,
  },
  {
    id: 13,
    title: 'Cooling Systems',
    icon: coolingIcon,
  },
  {
    id: 14,
    title: 'Interior Accessories',
    icon: interiorIcon,
  },
  {
    id: 15,
    title: 'Wheels and Tires',  // New Product Group
    icon: wheelsIcon,
  },
  {
    id: 16,
    title: 'Lubricants and Fluids',  // New Product Group
    icon: fluidsIcon,
  },
];

const Store = () => {
  return (
    <div className="py-12 bg-gray-50 my-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Our Parts Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productGroups.map((group) => (
            <div key={group.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={group.icon}
                alt={group.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-medium text-gray-700">{group.title}</h3>
            </div>
          ))}
        </div>

        {/* Load More button */}
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
