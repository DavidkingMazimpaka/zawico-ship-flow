import { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  '/01.jpg',
  '/02.jpg',
  '/03.jpeg',
  '/04.jpg',
  '/05.jpg',
  '/06.jpg',
  '/08.jpg',
  '/09.jpg',
  '/10.jpg',
];

const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Background slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Gradient overlay for extra depth and branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-slate-900/30"></div>
    </div>
  );
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Shipping slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-lg ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Slideshow */}
      <BackgroundSlideshow />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Worldwide Shipping Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Global Shipping &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Logistics
              </span>{' '}
              Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Simplifying international shipping and logistics with reliable, flexible, and cost-effective solutions for businesses and individuals worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/services">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Our Services <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/70">Reliability</div>
              </div>
            </div>
          </div>
          
          {/*  */}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;