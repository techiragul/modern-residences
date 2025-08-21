import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaRuler } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    plotSize: '',
    estimatedProject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                GET IN TOUCH
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                {/* Left Side - Contact Info */}
                <div className="bg-primary text-white p-8 md:w-2/5">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-accent/20 p-2 rounded-full mr-4">
                        <FaPhone className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-sm text-gray-300">+1 234 567 890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-accent/20 p-2 rounded-full mr-4">
                        <FaEnvelope className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-gray-300">info@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-accent/20 p-2 rounded-full mr-4">
                        <FaMapMarkerAlt className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-gray-300">123 Street, City, Country</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Form */}
                <div className="p-8 md:w-3/5">
                  <h3 className="text-xl font-bold text-dark mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="plotSize" className="block text-sm font-medium text-gray-700 mb-1">
                          Plot Size
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="plotSize"
                            name="plotSize"
                            value={formData.plotSize}
                            onChange={handleChange}
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <FaRuler className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="estimatedProject" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Project Cost
                      </label>
                      <select
                        id="estimatedProject"
                        name="estimatedProject"
                        value={formData.estimatedProject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="5-10L">₹5-10 Lakhs</option>
                        <option value="10-25L">₹10-25 Lakhs</option>
                        <option value="25-50L">₹25-50 Lakhs</option>
                        <option value="50L-1C">₹50 Lakhs - 1 Crore</option>
                        <option value="1C+">Above 1 Crore</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end mt-6">
                      <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-accent transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;