import { useState, useEffect } from 'react';

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
  // Add more images as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 5 seconds

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
              index === currentIndex ? 'bg-brand-blue' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-100 to-brand-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900">
              Global Shipping & <span className="text-brand-blue">Logistics</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              Simplifying international shipping and logistics with reliable, flexible, and cost-effective solutions for businesses and individuals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-700 text-white font-medium">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-50">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative animate-slide-from-right">
            <div className="aspect-[4/3] bg-brand-blue/10 rounded-lg overflow-hidden">
              {/* Image would go here, using a placeholder for now */}
              <Slideshow />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-blue/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-100 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
