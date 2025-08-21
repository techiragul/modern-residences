import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Offer Banner */}
        <div className="bg-gradient-to-r from-primary to-accent text-white p-6 mb-12 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Upto 20% Offer on the Interiors</h3>
          <p className="text-lg md:text-xl">For those who opt for Turnkey Solutions</p>
        </div>

        {/* Experience Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-accent/10 p-8 rounded-full border-2 border-accent/20">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">20+</div>
            <p className="text-xl font-medium text-gray-800">Years of Experience</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            A Journey That Began Small
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            What started as a small construction service has now grown into a name hundreds trust. 
            Today, over 500 happy clients stand as proof of our commitment, care, and quality. 
            Be it homes, apartments, or commercial spaces—we do it all, just the way you imagine. 
            Agasa Residences isn't just about buildings—it's about people, dreams, and doing things right.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;