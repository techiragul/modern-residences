import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/pages/Hero';
import AboutUs from './components/pages/AboutUs';
import WhyChooseUs from './components/pages/WhyChooseUs';
import VideoShowcase from './components/pages/VideoShowcase';
import Services from './components/pages/Services';
import HowItWorks from './components/pages/HowItWorks';
import Testimonials from './components/pages/Testimonials';
import BlogSection from './components/pages/BlogSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <VideoShowcase />
        <Services />
        <HowItWorks />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;