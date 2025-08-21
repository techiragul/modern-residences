import React from 'react';
import { FaHome, FaLeaf, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: 'Residential',
    description: 'Experience the perfect blend of comfort and luxury in our thoughtfully designed residential spaces.',
    features: [
      'Luxury Apartments',
      'Villas & Independent Houses',
      'Gated Communities',
      'Premium Amenities',
      '24/7 Security',
      'Landscaped Gardens'
    ],
    image: '/images/residential.jpg',
    icon: <FaHome className="w-12 h-12 text-white" />,
    bgColor: 'from-primary to-primary-dark',
    textColor: 'text-white'
  },
  {
    title: 'Smart & Green Buildings',
    description: 'Sustainable living with cutting-edge technology for a better tomorrow.',
    features: [
      'Energy Efficient Design',
      'Solar Power Integration',
      'Rainwater Harvesting',
      'Smart Home Automation',
      'Waste Management',
      'Green Spaces'
    ],
    image: '/images/green-building.jpg',
    icon: <FaLeaf className="w-12 h-12 text-green-100" />,
    bgColor: 'from-green-600 to-green-800',
    textColor: 'text-white'
  }
];

const ServiceCard = ({ service }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group h-full">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${service.bgColor} opacity-90`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
            {service.icon}
          </div>
          <h3 className={`text-3xl font-bold ${service.textColor} mb-4`}>{service.title}</h3>
          <p className={`${service.textColor} opacity-90 mb-6`}>{service.description}</p>
        </div>
        
        <div className="mt-auto">
          <h4 className={`text-lg font-semibold ${service.textColor} mb-4`}>Key Features:</h4>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className={`mt-1 flex-shrink-0 mr-3 ${service.textColor} opacity-80`} />
                <span className={service.textColor}>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="mt-8 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30">
            Explore {service.title}
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of real estate solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
