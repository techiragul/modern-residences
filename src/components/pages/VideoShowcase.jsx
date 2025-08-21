import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoShowcase = () => {
  const videos = [
    {
      id: 'N3AkSS5hXMA',
      title: 'Project Showcase 2023',
      description: 'Take a tour of our latest residential project in the heart of the city.'
    },
    {
      id: 's2skans2dP4',
      title: 'Client Testimonials',
      description: 'Hear what our clients have to say about working with Agasa Residences.'
    }
  ];

  return (
    <section id="video-showcase" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our <span className="text-primary">Work in Motion</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch our latest projects and hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-video bg-gray-900">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-300"
                />
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </a>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            <FaPlay className="mr-2" />
            View More Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
