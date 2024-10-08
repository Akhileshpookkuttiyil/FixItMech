import { useState } from 'react';

// FAQ data
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services including car repair, maintenance, diagnostics, towing, oil change, and battery replacement."
  },
  {
    question: "How can I book a service?",
    answer: "You can book a service through our website or by calling our support team. Just choose your desired service, select a date, and we'll handle the rest."
  },
  {
    question: "Do you provide emergency services?",
    answer: "Yes, we offer emergency towing and repair services. Our team is available 24/7 to assist you in urgent situations."
  },
  {
    question: "What areas do you cover?",
    answer: "We provide services in major cities and towns. Check our website for the full list of areas we cover."
  },
  {
    question: "How can I track my service request?",
    answer: "You can track your service request directly through our website or mobile app. We provide real-time updates and notifications."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle dropdown
  };

  return (
    <section className="py-8 bg-gray-50 w-full mx-auto">
      <h2 className="text-center text-4xl font-semibold text-black mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4 px-4 md:px-12">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <button
              className="w-full text-left text-xl font-semibold text-black flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12" />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <p className="text-gray-700 mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
