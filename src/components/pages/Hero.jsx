import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Background images array - using local images from public/images
  const backgroundImages = [
    { 
      url: '/images/hero-bg-1.jpg',
      alt: 'Luxury house exterior',
      title: 'Luxury Living Spaces',
      subtitle: 'Experience the pinnacle of modern architecture and design',
      buttonText: 'Explore Properties'
    },
    { 
      url: '/images/hero-bg-2.jpg',
      alt: 'Modern house design',
      title: 'Modern Architecture',
      subtitle: 'Innovative designs for the modern lifestyle',
      buttonText: 'View Projects'
    }
  ];

  // Simple navigation functions
  const goToNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goToNext]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    plotSize: '',
    estimatedCost: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Add your form submission logic
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-black"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            transform: 'none',
            willChange: 'opacity',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white text-center lg:text-left xl:col-span-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {backgroundImages[currentImageIndex].title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              {backgroundImages[currentImageIndex].subtitle}
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-semibold rounded-lg flex items-center gap-2 mx-auto lg:mx-0 group transition-all duration-300">
              {backgroundImages[currentImageIndex].buttonText}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl border border-white/20 xl:absolute xl:right-1 xl:top-1/2 xl:-translate-y-1/2 xl:w-[450px]">
            <h2 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="plotSize"
                    placeholder="Size of Plot"
                    value={formData.plotSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <select
                  name="estimatedCost"
                  value={formData.estimatedCost}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all appearance-none"
                  required
                >
                  <option value="">Estimated Project Cost</option>
                  <option value="5-10L">₹5-10 Lakhs</option>
                  <option value="10-25L">₹10-25 Lakhs</option>
                  <option value="25-50L">₹25-50 Lakhs</option>
                  <option value="50L-1C">₹50 Lakhs - 1 Crore</option>
                  <option value="1C+">Above 1 Crore</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Contact Us Now
              </button>
            </form>
            
            <p className="text-sm text-white/70 mt-4 text-center">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <button 
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all transform hover:scale-110"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all transform hover:scale-110"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
        
        <button
          onClick={toggleAutoPlay}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all transform hover:scale-110"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
