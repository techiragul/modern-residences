import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
  ];

  const quickLinks = [
    'Home', 'Services', 'Projects', 'Why Modern',
    'Events', 'Blogs', 'Contact Us', 'Book Free Consulting'
  ];

  const services = [
    'Residential', 'Smart & Green Buildings',
    'Interior', 'Commercial'
  ];

  const howItWorks = [
    'Site Check & Quote', 'Design Stage',
    'Approvals & Permits', 'Construction Progress',
    'Interior Finishing', 'Final Handover'
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4"> Modern Residences</h3>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.cloneElement(social.icon, { size: 20 })}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-accent" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-accent" />
                <span>info@modernresidences.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent" />
                <span>chennai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Modern Residences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
