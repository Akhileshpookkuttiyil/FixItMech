import { useState } from "react";

// Image variables for product icons (dummy paths, replace with actual)
import maintenanceIcon from "../assets/img/car-maintain.jpg";
import airConditioningIcon from "../assets/img/air-conditioning.jpg";
import beltsIcon from "../assets/img/belts.jpg";
import bearingsIcon from "../assets/img/bearings.jpg";
import bodyIcon from "../assets/img/body-icon.jpg";
import brakesIcon from "../assets/img/brakes.jpg";
import exhaustIcon from "../assets/img/exhaust.jpg";
import suspensionIcon from "../assets/img/suspension.jpg";
import engineIcon from "../assets/img/engine.jpg";
import electricalIcon from "../assets/img/electrical.jpg";
import fuelIcon from "../assets/img/fuel.jpg";
import transmissionIcon from "../assets/img/transmission.jpg";
import coolingIcon from "../assets/img/cooling.jpg";
import interiorIcon from "../assets/img/interior.jpg";
import wheelsIcon from "../assets/img/wheels.jpg"; // New icon for Wheels and Tires
import fluidsIcon from "../assets/img/lubricants.jpg"; // New icon for Lubricants and Fluids

// Array of product groups data
const productGroups = [
  { id: 1, title: "Maintenance Service Parts", icon: maintenanceIcon },
  { id: 2, title: "Air Conditioning", icon: airConditioningIcon },
  { id: 3, title: "Belts Chains and Rollers", icon: beltsIcon },
  { id: 4, title: "Bearings", icon: bearingsIcon },
  { id: 5, title: "Body", icon: bodyIcon },
  { id: 6, title: "Brakes and Brake Parts", icon: brakesIcon },
  { id: 7, title: "Exhaust Systems", icon: exhaustIcon },
  { id: 8, title: "Suspension and Steering", icon: suspensionIcon },
  { id: 9, title: "Engine Components", icon: engineIcon },
  { id: 10, title: "Electrical and Lighting", icon: electricalIcon },
  { id: 11, title: "Fuel Systems", icon: fuelIcon },
  { id: 12, title: "Transmission and Drivetrain", icon: transmissionIcon },
  { id: 13, title: "Cooling Systems", icon: coolingIcon },
  { id: 14, title: "Interior Accessories", icon: interiorIcon },
  { id: 15, title: "Wheels and Tires", icon: wheelsIcon },
  { id: 16, title: "Lubricants and Fluids", icon: fluidsIcon },
];

const Store = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Start with 8 visible items
  const [showAll, setShowAll] = useState(false); // State to toggle show all items

  const handleLoadMore = () => {
    setVisibleCount(productGroups.length); // Show all items
    setShowAll(true); // Set state to show all items
  };

  const handleHide = () => {
    setVisibleCount(8); // Reset to show only 8 items
    setShowAll(false); // Set state to hide remaining items
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold flex-1 text-center">
            Browse Our Parts Collection
          </h2>
        </div>

        <div className="flex justify-end mb-10">
          <button className="text-blue-500 hover:underline">
            More&gt;&gt;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {productGroups.slice(0, visibleCount).map((group) => (
            <div
              key={group.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <img
                src={group.icon}
                alt={group.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-medium text-gray-700">
                {group.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Load More / Hide Button */}
        {visibleCount < productGroups.length && !showAll && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleLoadMore}
              className="border border-black text-gray-700 py-2 px-4 rounded transition duration-300 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 mr-2" // Adjust the size as needed
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Load More
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleHide}
              className="border border-black text-gray-700 py-2 px-4 rounded transition duration-300 flex items-center justify-center mt-20"
            >
              <svg
                className="w-4 h-4 mr-2" // Adjust the size as needed
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
              Hide
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
