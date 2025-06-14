import { useState } from "react";
import { Truck, Plane, Box, Ship } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Plane size={24} />,
      title: "Air Freight Forwarding",
      shortDescription: "Express air shipping solutions for time-sensitive cargo.",
      backgroundImage: "/airfreight.jpg",
      fullDescription: `Our Air Freight services provide rapid, reliable transportation for urgent shipments. With strategic partnerships with major airlines, we offer competitive rates and flexible scheduling options.

Key features:
• Express delivery options for time-sensitive cargo
• Regular consolidated shipments for cost efficiency
• Temperature-controlled solutions for sensitive goods
• Door-to-door service with complete tracking
• Customs clearance assistance`,
      features: [
        "Express delivery options",
        "Regular consolidated shipments",
        "Temperature-controlled solutions",
        "Door-to-door service",
        "Customs clearance assistance",
      ],
    },
    {
      id: 2,
      icon: <Ship size={24} />,
      title: "Sea Freight Forwarding",
      shortDescription: "Cost-effective sea shipping for large volume cargo.",
      backgroundImage: "/seafreight.jpg",
      fullDescription: `Our Sea Freight services offer economical solutions for larger shipments. We provide both FCL (Full Container Load) and LCL (Less than Container Load) options to meet your specific needs.

Key features:
• FCL and LCL shipping solutions
• Regular sailing schedules on major trade lanes
• Special equipment for oversized cargo
• Port-to-port and door-to-door options
• Competitive rates with premium carriers`,
      features: [
        "FCL and LCL shipping solutions",
        "Regular sailing schedules",
        "Special equipment for oversized cargo",
        "Port-to-port and door-to-door options",
        "Competitive rates with premium carriers",
      ],
    },
    {
      id: 3,
      icon: <Truck size={24} />,
      title: "Land Transportation",
      shortDescription: "Efficient road and rail transport for domestic and cross-border deliveries.",
      backgroundImage: "/landtransportation.jpg",
      fullDescription: `Our Land Transportation services cover road and rail freight within and across borders. With modern fleets and established routes, we ensure your cargo reaches its destination safely and on time.

Key features:
• Domestic and international trucking services
• Intermodal solutions combining rail and road
• Specialized vehicles for various cargo types
• GPS tracking for real-time shipment visibility
• Express and economy options`,
      features: [
        "Domestic and international trucking services",
        "Intermodal solutions combining rail and road",
        "Specialized vehicles for various cargo types",
        "GPS tracking for real-time shipment visibility",
        "Express and economy options",
      ],
    },
    {
      id: 4,
      icon: <Box size={24} />,
      title: "Last-Mile Delivery",
      shortDescription: "Reliable final-leg delivery service with real-time tracking.",
      backgroundImage: "/lastmile.jpg",
      fullDescription: `Our Last-Mile Delivery service ensures your packages reach their final destination efficiently. With real-time tracking and flexible delivery options, we make sure recipients receive their items securely and on schedule.

Key features:
• Scheduled and same-day delivery options
• Real-time tracking and notifications
• Proof of delivery documentation
• Residential and commercial deliveries
• Return logistics management`,
      features: [
        "Scheduled and same-day delivery options",
        "Real-time tracking and notifications",
        "Proof of delivery documentation",
        "Residential and commercial deliveries",
        "Return logistics management",
      ],
    },
    {
      id: 5,
      icon: <Box size={24} />,
      title: "Customs Clearance",
      shortDescription: "Expert handling of customs documentation and procedures.",
      backgroundImage: "/customerclearance.jpg",
      fullDescription: `Our Customs Clearance services simplify the complex process of moving goods across international borders. Our experienced team handles all documentation requirements and ensures compliance with regulations.

Key features:
• Complete documentation preparation
• Classification and valuation assistance
• Regulatory compliance management
• Import/export license coordination
• Duty and tax calculation`,
      features: [
        "Complete documentation preparation",
        "Classification and valuation assistance",
        "Regulatory compliance management",
        "Import/export license coordination",
        "Duty and tax calculation",
      ],
    },
    {
      id: 6,
      icon: <Truck size={24} />,
      title: "Vehicle Logistics",
      shortDescription: "Specialized transport solutions for automotive shipping.",
      backgroundImage: "/vehicleLogistics.jpg",
      fullDescription: `Our Vehicle Logistics services provide specialized solutions for transporting automobiles and other vehicles. From individual cars to fleet relocations, we ensure secure and efficient transportation.

Key features:
• Enclosed and open-air transport options
• Secure handling with specialized equipment
• Door-to-door auto shipping
• International vehicle transportation
• Fleet relocation services`,
      features: [
        "Enclosed and open-air transport options",
        "Secure handling with specialized equipment",
        "Door-to-door auto shipping",
        "International vehicle transportation",
        "Fleet relocation services",
      ],
    },
    {
      id: 7,
      icon: <Box size={24} />,
      title: "International Shipping",
      shortDescription: "Comprehensive global shipping solutions for businesses and individuals.",
      backgroundImage: "/internationalshipping.jpg",
      fullDescription: `Our International Shipping services provide comprehensive solutions for sending packages and freight worldwide. With a global network of partners, we ensure reliable delivery to virtually any destination.

Key features:
• Worldwide package delivery
• Multiple service levels to fit your budget
• Customs clearance included
• Online tracking in multiple languages
• Insurance options for valuable items`,
      features: [
        "Worldwide package delivery",
        "Multiple service levels to fit your budget",
        "Customs clearance included",
        "Online tracking in multiple languages",
        "Insurance options for valuable items",
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-blue-900">Our Services</h1>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Za.w.i.co.Ltd offers a comprehensive range of logistics and shipping solutions designed to meet the diverse needs of businesses and individuals globally. Explore our services below to find the right solution for your shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group">
                {/* Background Image Header */}
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
                  <button
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-md transition-colors duration-200 font-medium"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Dialog */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  {selectedService.icon}
                </div>
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                <button
                  className="ml-auto text-gray-400 hover:text-gray-600"
                  onClick={() => setSelectedService(null)}
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div className="text-gray-700 whitespace-pre-line">{selectedService.fullDescription}</div>
                
                <div className="mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 px-4 rounded-md transition-colors duration-200">
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Need a Custom Logistics Solution?</h2>
            <p className="text-base md:text-lg opacity-80 mb-6 md:mb-8">
              Our team of experts can create a tailored logistics plan based on your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors duration-200 w-full sm:w-auto">
                Get a Custom Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-gray-800 py-3 px-6 rounded-md transition-colors duration-200 w-full sm:w-auto">
                Book Standard Service
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;