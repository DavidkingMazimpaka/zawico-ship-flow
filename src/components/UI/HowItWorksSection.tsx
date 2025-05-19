
import { CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Book Your Shipment",
      description:
        "Fill out our simple booking form with your shipment details and preferred shipping method.",
    },
    {
      id: 2,
      title: "We Pick Up & Ship",
      description:
        "Our team collects your items and ships them using the most optimal route and method.",
    },
    {
      id: 3,
      title: "Track & Receive",
      description:
        "Track your shipment in real-time and receive your items at the destination safely and on time.",
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
              className="flex-1 relative bg-white rounded-lg p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">{step.id}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 transform translate-x-1/2">
                  <ArrowRight className="text-brand-blue" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "24/7 customer support",
              "Real-time shipment tracking",
              "Competitive pricing",
              "Customs clearance expertise",
              "Global network coverage",
              "Secure handling of goods",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle size={18} className="text-brand-blue mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
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

export default HowItWorksSection;
