
import { useState } from "react";
import { Truck, Plane, Box, Ship } from "lucide-react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Plane size={24} />,
      title: "Air Freight Forwarding",
      shortDescription:
        "Express air shipping solutions for time-sensitive cargo.",
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
      shortDescription:
        "Cost-effective sea shipping for large volume cargo.",
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
      shortDescription:
        "Efficient road and rail transport for domestic and cross-border deliveries.",
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
      shortDescription:
        "Reliable final-leg delivery service with real-time tracking.",
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
      shortDescription:
        "Expert handling of customs documentation and procedures.",
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
      shortDescription:
        "Specialized transport solutions for automotive shipping.",
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
      icon: <Plane size={24} />,
      title: "Travel Concierge Service",
      shortDescription:
        "Premium assistance for travelers with luggage and logistics needs.",
      fullDescription: `Our Travel Concierge Service offers premium assistance for travelers, ensuring seamless handling of luggage and logistics needs. We take care of the details so you can focus on your journey.

Key features:
• Luggage shipping and storage
• Door-to-airport-to-door service
• Customs and immigration assistance
• Travel document coordination
• VIP airport services`,
      features: [
        "Luggage shipping and storage",
        "Door-to-airport-to-door service",
        "Customs and immigration assistance",
        "Travel document coordination",
        "VIP airport services",
      ],
    },
    {
      id: 8,
      icon: <Box size={24} />,
      title: "International Shipping",
      shortDescription:
        "Comprehensive global shipping solutions for businesses and individuals.",
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
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-neutral-700 mb-6">
              Za.w.i.co.Ltd offers a comprehensive range of logistics and shipping solutions designed to meet the diverse needs of businesses and individuals globally. Explore our services below to find the right solution for your shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-blue mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{service.shortDescription}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-50"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-blue">
                  {selectedService.icon}
                </div>
                <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
              </div>
              <DialogDescription className="text-base">
                <div className="mt-4 space-y-4">
                  <div className="text-neutral-700 whitespace-pre-line">{selectedService.fullDescription}</div>
                  
                  <div className="mt-6">
                    <Link to="/booking">
                      <Button className="bg-brand-blue hover:bg-brand-700 w-full">Book This Service</Button>
                    </Link>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>

      {/* CTA Section */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Logistics Solution?</h2>
            <p className="text-lg opacity-80 mb-8">
              Our team of experts can create a tailored logistics plan based on your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-600">
                <Link to="/contact">Get a Custom Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-neutral-800">
                <Link to="/booking">Book Standard Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Types
interface Service {
  id: number;
  icon: JSX.Element;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

export default ServicesPage;
