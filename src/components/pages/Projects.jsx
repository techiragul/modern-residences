import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 4,
    area: 4200,
    price: '4,200,000',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    location: 'Manhattan, NY',
    beds: 3,
    baths: 2,
    area: 1800,
    price: '2,800,000',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Beachfront Mansion',
    location: 'Miami, FL',
    beds: 6,
    baths: 5,
    area: 5800,
    price: '8,500,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Featured Properties
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties in the most sought-after locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-accent text-white inline-block px-3 py-1 rounded-full text-sm font-medium">
                    For Sale
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-1 text-accent" />
                  <span>{project.location}</span>
                </div>
                
                <div className="flex justify-between border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center">
                    <FaBed className="mr-2 text-accent" />
                    <span>{project.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-2 text-accent" />
                    <span>{project.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <FaRulerCombined className="mr-2 text-accent" />
                    <span>{project.area} sq.ft</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">${project.price}</span>
                  <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-md font-medium transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
