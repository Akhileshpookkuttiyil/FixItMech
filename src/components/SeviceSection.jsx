import React from "react";
import CarInspection1 from "../assets/img/car-inspection-1.jpg";
import CarInspection2 from "../assets/img/car-inspection-2.jpg";
import CarInspection3 from "../assets/img/car-inspection-3.jpg";
import CarInspection4 from "../assets/img/car-inspection-4.png";
import Payment from "../assets/img/payment.png";

const ServiceSection = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">How do we help you?</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Enjoy fast and reliable service with our professional bike and car repair solutions! 
        Our certified technicians arrive with all the necessary tools to quickly address any issue, 
        ensuring your vehicle is back on the road in optimal condition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="text-center">
          <img
            src={CarInspection1}
            alt="Inspect Vehicle"
            className="mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-lg font-medium max-w-xs mx-auto">
            Inspect your vehicle thoroughly
          </h3>
          <p className="text-gray-500 text-sm max-w-xs mx-auto">
            Our certified experts perform a detailed check to find any issues with your vehicle.
          </p>
        </div>
        <div className="text-center">
          <img
            src={CarInspection2}
            alt="Immediate Repairs"
            className="mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-lg font-medium max-w-xs mx-auto">
            Provide quick repair solutions
          </h3>
          <p className="text-gray-500 text-sm max-w-xs mx-auto">
            We address minor issues immediately to ensure that your vehicle is ready to go.
          </p>
        </div>
        <div className="text-center">
          <img
            src={CarInspection3}
            alt="Double Check Faults"
            className="mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-lg font-medium max-w-xs mx-auto">
            Double-check for any other faults
          </h3>
          <p className="text-gray-500 text-sm max-w-xs mx-auto">
            Our team performs a secondary check to ensure no additional issues are present.
          </p>
        </div>
        <div className="text-center">
          <img
            src={CarInspection4}
            alt="Maintenance Advice"
            className="mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-lg font-medium max-w-xs mx-auto">
            Offer expert advice on maintenance
          </h3>
          <p className="text-gray-500 text-sm max-w-xs mx-auto">
            Get helpful tips and advice on how to maintain your vehicle in top condition.
          </p>
        </div>
        <div className="text-center">
          <img
            src={Payment}
            alt="Payment Methods"
            className="mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-lg font-medium max-w-xs mx-auto">
            Secure payment options available
          </h3>
          <p className="text-gray-500 text-sm max-w-xs mx-auto">
            We accept payments via UPI, PayTM, and other online methods for your convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
