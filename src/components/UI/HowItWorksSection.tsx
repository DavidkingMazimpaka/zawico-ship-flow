import { CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Book Your Shipment",
      description:
        "Fill out our simple booking form with your shipment details and preferred shipping method.",
      backgroundImage: "/booking.jpg"
    },
    {
      id: 2,
      title: "We Pick Up & Ship",
      description:
        "Our team collects your items and ships them using the most optimal route and method.",
      backgroundImage: "/picking.jpg"
    },
    {
      id: 3,
      title: "Track & Receive",
      description:
        "Track your shipment in real-time and receive your items at the destination safely and on time.",
      backgroundImage: "/tracking.jpg"
    },
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our streamlined process makes shipping with us simple, transparent, and hassle-free.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex-1 relative bg-white rounded-lg p-6 shadow-sm text-center overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-all duration-500"
                style={{ backgroundImage: `url(${step.backgroundImage})` }}
              />
              
              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">{step.id}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#090147] group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-[#090147] font-medium group-hover:text-neutral-800 transition-colors duration-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 transform translate-x-1/2">
                  <ArrowRight className="text-blue-500 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-100 rounded-lg shadow-sm p-6 md:p-8 max-w-4xl mx-auto animate-pulse">
          <h3 className="text-xl font-bold mb-4 text-center text-yellow-800">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 
              "24/7 customer support",
              "Real-time shipment tracking",
              "Competitive pricing",
              "Customs clearance expertise",
              "Global network coverage",
              "Secure handling of goods",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center group hover:scale-105 transition-transform duration-300">
                <CheckCircle size={18} className="text-yellow-600 mr-2 flex-shrink-0 group-hover:animate-bounce" />
                <span className="text-yellow-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
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

export default HowItWorksSection;
