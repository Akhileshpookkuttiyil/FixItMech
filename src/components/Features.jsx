import React from 'react';

// Image variables
import oilChangeImage from '../assets/img/oilchange.webp';
import batteryReplacement from '../assets/img/Car-Battery.jpg';
import checkupImage from '../assets/img/dia.jpg'
import  towTruckImage from '../assets/img/tow-truck.jpeg'

// Features data
const features = [
  {
    id: 1,
    title: 'Oil Change Services',
    description: 'Our professional oil change service ensures that your vehicle runs smoothly and efficiently. Regular oil changes are crucial to maintain engine health by lubricating moving parts, preventing wear and tear, and removing sludge buildup. We use high-quality oils that cater to your vehicle’s specific needs, enhancing fuel efficiency and reducing harmful emissions. Our technicians perform a thorough inspection during every oil change, checking your filters, fluids, and overall engine performance, so you drive away with confidence and peace of mind.',
    image: oilChangeImage,
  },
  {
    id: 2,
    title: 'Battery Replacement',
    description: 'When your battery starts to show signs of weakness, it’s important to act fast to avoid being stranded. Our battery replacement service is designed to quickly and efficiently get your car back on the road. We offer a wide range of top-tier batteries compatible with all makes and models. Our expert technicians will also conduct a full diagnostic to ensure your vehicle’s electrical system is in good shape, making sure that the alternator, starter, and charging system are functioning properly. Plus, we handle the safe disposal of your old battery in an environmentally friendly way.',
    image: batteryReplacement,
  },
  {
    id: 3,
    title: 'Complete Checkup',
    description: 'A complete checkup is an essential part of regular vehicle maintenance, ensuring that every critical system is functioning as it should. Our service includes a thorough inspection of brakes, tires, engine, suspension, and other vital components to detect potential issues before they turn into costly repairs. Our team of highly skilled technicians uses advanced diagnostic tools to pinpoint any problems. From minor fixes to major concerns, we provide detailed reports and recommend necessary repairs, helping you maintain your vehicle’s reliability, safety, and longevity. Trust us to keep your car in top shape all year round.',
    image: checkupImage,
  },
  {
    id: 4,
    title: 'Tow Trucks',
    description: 'No one plans for a vehicle breakdown, but when it happens, our reliable tow truck service is just a call away. Available 24/7, we offer prompt towing assistance, whether you’re dealing with an accident, engine failure, or any other roadside emergency. Our fleet of modern tow trucks is equipped to handle all types of vehicles, ensuring that your car is transported safely to your preferred service location or repair shop. With a focus on customer satisfaction and safety, our trained drivers work efficiently to get you back on track with minimal hassle. Help is always nearby.',
    image: towTruckImage,
  },
];

const Features = () => {
  return (
    <div className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center my-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 p-6 flex flex-col items-center md:items-start">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{feature.title}</h2>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">{feature.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 text-xl">
                <li>High-quality services for all car models</li>
                <li>Authorized and trained technicians</li>
                <li>Customer satisfaction guaranteed</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto max-h-96 rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
