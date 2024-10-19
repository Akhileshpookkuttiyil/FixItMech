// Image variables for product icons (dummy paths, replace with actual)
import maintenanceIcon from '../assets/img/car-maintain.jpg';
import airConditioningIcon from '../assets/img/air-conditioning.jpg';
import beltsIcon from '../assets/img/belts.jpg';
import bearingsIcon from '../assets/img/bearings.jpg';
import bodyIcon from '../assets/img/body-icon.jpg';
import brakesIcon from '../assets/img/brakes.jpg';
import exhaustIcon from '../assets/img/exhaust.jpg';
import suspensionIcon from '../assets/img/suspension.jpg';

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
  }
];

const Store = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold flex-1 text-center">Browse Our Parts Collection</h2>
        </div>

        <div className="flex justify-end mb-10"> {/* Flex container for right alignment */}
          <button className="text-blue-500 hover:underline">
             More&gt;&gt;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8"> {/* Added mt-8 for spacing */}
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
      </div>
    </div>
  );
};

export default Store;
