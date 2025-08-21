import React from 'react';
import { FaCheckCircle, FaClipboardCheck, FaPencilRuler, FaHardHat, FaPaintRoller, FaHandshake, FaFileSignature } from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardCheck className="w-8 h-8" />,
    title: 'Site Check & Quote',
    description: 'Initial assessment and detailed project estimation'
  },
  {
    icon: <FaPencilRuler className="w-8 h-8" />,
    title: 'Design Stage',
    description: 'Architectural planning and design development'
  },
  {
    icon: <FaFileSignature className="w-8 h-8" />,
    title: 'Approvals & Permits',
    description: 'Handling all necessary legal documentation'
  },
  {
    icon: <FaHardHat className="w-8 h-8" />,
    title: 'Construction Progress',
    description: 'Timely execution with quality materials'
  },
  {
    icon: <FaPaintRoller className="w-8 h-8" />,
    title: 'Interior Finishing',
    description: 'Premium finishes and fittings installation'
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Final Handover',
    description: 'Project completion and key handover'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            How it <span className="text-primary">Works</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Content */}
                <div className={`w-full md:w-5/12 p-6 rounded-lg ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 pl-16">{step.description}</p>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl z-10 mx-4">
                  {index + 1}
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Approvals Section */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              <FaCheckCircle className="inline-block text-primary mr-2" />
              Approvals, Permits & Legal Setup
            </h3>
            <p className="text-gray-700">
              From BBMP building plan approvals to BDA NOCs, BESCOM connections, BWSSB water lines, 
              and even RERA registration—we handle it all. No chasing officers or waiting in long queues. 
              We get every file cleared legally and share updates with you. All documentation is secured 
              before the first brick.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['BBMP', 'BDA', 'BESCOM', 'BWSSB', 'RERA', 'NOCs', 'KHATA', 'A-KHATA'].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
