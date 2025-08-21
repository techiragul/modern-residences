import React from 'react';
import { FaCheckCircle, FaLeaf, FaHandshake, FaBuilding, FaClipboardCheck, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaClipboardCheck className="w-8 h-8" />,
    title: 'Thorough Site Audits',
    description: 'Comprehensive analysis to ensure project feasibility and success.'
  },
  {
    icon: <FaBuilding className="w-8 h-8" />,
    title: 'Quality Material Procurement',
    description: 'Sourcing the finest materials for lasting quality and durability.'
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Reverse Engineering Excellence',
    description: 'Innovative problem-solving through advanced engineering techniques.'
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Transparent Accounting',
    description: 'Honest and clear financial reporting with no hidden costs.'
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: 'Collaborative Teamwork',
    description: 'Working closely with clients to bring visions to life.'
  },
  {
    icon: <FaLeaf className="w-8 h-8" />,
    title: 'Smart & Green Buildings',
    description: 'Sustainable and energy-efficient construction solutions.'
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: '360° Turnkey Solutions',
    description: 'End-to-end project management from concept to completion.'
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: 'Guaranteed Quality & Warranty',
    description: 'Our commitment to excellence with comprehensive warranties.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Choose <span className="text-primary">Modern Residences</span>?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine innovation, quality, and integrity to deliver exceptional construction solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
