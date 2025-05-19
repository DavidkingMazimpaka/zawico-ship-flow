
import { Truck, Plane, Box, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Plane size={28} />,
      title: "Air Freight",
      description: "Express air shipping solutions for time-sensitive cargo with global reach and reliable delivery timelines.",
    },
    {
      id: 2,
      icon: <Ship size={28} />,
      title: "Sea Freight",
      description: "Cost-effective sea shipping for large volumes with comprehensive container and bulk cargo options.",
    },
    {
      id: 3,
      icon: <Truck size={28} />,
      title: "Land Transport",
      description: "Efficient road and rail transportation networks for domestic and cross-border deliveries.",
    },
    {
      id: 4,
      icon: <Box size={28} />,
      title: "Last-Mile Delivery",
      description: "Reliable final-leg delivery service ensuring your packages reach their destination on time.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your shipping needs, from international freight to last-mile delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group hover-up"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <Link
                to="/services"
                className="text-brand-blue font-medium flex items-center group-hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-50">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
};

export default ServicesSection;
