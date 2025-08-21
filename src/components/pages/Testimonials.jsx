import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Rohit sharma',
    role: 'Homeowner',
    content: 'Residences transformed our house into a dream home. Their attention to detail and quality is unmatched.',
    rating: 5
  },
  {
    id: 2,
    name: 'Gopi',
    role: 'Business Owner',
    content: 'The team delivered our commercial project on time and within budget. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Vikram ',
    role: 'Investor',
    content: 'Professional service with transparent communication throughout the project lifecycle.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            What our <span className="text-primary">clients say</span> about us?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-yellow-400 text-2xl mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < testimonial.rating ? '★' : '☆'}</span>
                ))}
              </div>
              <FaQuoteLeft className="text-gray-300 text-4xl mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
