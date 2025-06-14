/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { Truck, Plane, Box, Ship, ArrowRight, ArrowLeft, Clock, Shield, Globe, Zap } from "lucide-react";
import React from "react";

const serviceSlides = [
  {
    id: 1,
    icon: <Plane size={64} className="text-white drop-shadow-lg" />,
    title: "Air Freight",
    description: "Express air shipping solutions for time-sensitive cargo with global reach and reliable delivery timelines.",
    features: ["24-48 hour delivery", "Global network", "Priority handling", "Real-time tracking"],
    bg: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    accent: "bg-blue-500",
    stats: { time: "24-48hrs", coverage: "5 countries" }
  },
  {
    id: 2,
    icon: <Ship size={64} className="text-white drop-shadow-lg" />,
    title: "Sea Freight",
    description: "Cost-effective sea shipping for large volumes with comprehensive container and bulk cargo options.",
    features: ["FCL & LCL options", "Port-to-port service", "Customs clearance", "Cargo insurance"],
    bg: "bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600",
    accent: "bg-teal-500",
    stats: { time: "15-45 days", coverage: "10 ports" }
  },
  {
    id: 3,
    icon: <Truck size={64} className="text-white drop-shadow-lg" />,
    title: "Land Transport",
    description: "Efficient road and rail transportation networks for domestic and cross-border deliveries.",
    features: ["Door-to-door service", "Cross-border expertise", "Temperature control", "Flexible scheduling"],
    bg: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-500",
    accent: "bg-orange-500",
    stats: { time: "1-7 days", coverage: "5+ countries" }
  },
  {
    id: 4,
    icon: <Box size={64} className="text-white drop-shadow-lg" />,
    title: "Last-Mile Delivery",
    description: "Reliable final-leg delivery service ensuring your packages reach their destination on time.",
    features: ["Same-day delivery", "Proof of delivery", "SMS notifications", "Flexible time slots"],
    bg: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600",
    accent: "bg-purple-500",
    stats: { time: "Same day", coverage: "Urban areas" }
  },
];

const ServicesSection = () => { 
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const total = serviceSlides.length;
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setIsAutoPlaying(false);
        prev();
      }
      if (e.key === "ArrowRight") {
        setIsAutoPlaying(false);
        next();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
    touchStartX.current = null;
  };

  const goTo = (idx: number) => {
    setCurrent((idx + total) % total);
    setIsAutoPlaying(false);
  };
  
  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const currentSlide = serviceSlides[current];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(#E7D887FF_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions tailored to meet your shipping needs, from international freight to last-mile delivery with cutting-edge technology.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-6xl mx-auto">
          <div
            className="relative select-none"
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Service carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Slide */}
            <div className={`relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-out ${currentSlide.bg}`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-24 translate-x-24"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              </div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="text-white space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                        {currentSlide.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">
                          {currentSlide.title}
                        </h3>
                        <div className="flex items-center gap-4 text-white/80">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{currentSlide.stats.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            <span className="text-sm">{currentSlide.stats.coverage}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-white/90 leading-relaxed">
                      {currentSlide.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {currentSlide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/90">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="hidden md:flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <div className="w-48 h-48 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                          <div className="text-white">
                            {React.cloneElement(currentSlide.icon, { size: 96 })}
                          </div>
                        </div>
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 -left-6 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                aria-label="Previous service"
                onClick={prev}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transform hover:scale-110"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-3">
                {serviceSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      idx === current ? "w-12 h-4" : "w-4 h-4"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-current={idx === current}
                  >
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      idx === current ? slide.accent : "bg-gray-300"
                    }`}></div>
                    {idx === current && (
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              <button
                aria-label="Next service"
                onClick={next}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transform hover:scale-110"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className={`w-2 h-2 rounded-full transition-colors ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Ship with Confidence?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their logistics needs. Get started today with a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Free Quote
                </button>
                <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <Shield className="w-5 h-5" />
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;