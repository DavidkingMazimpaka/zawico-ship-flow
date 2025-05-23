
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/UI/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Company timeline data
  const timeline = [
    {
      year: 2020,
      title: "Company Founded",
      description:
        "Za.w.i.co.Ltd was established with a vision to simplify global logistics and provide accessible shipping solutions.",
    },
    {
      year: 2021,
      title: "International Expansion",
      description:
        "Expanded operations to cover international shipping routes across Asia, Europe, and North America.",
    },
    {
      year: 2022,
      title: "Digital Transformation",
      description:
        "Launched our online tracking system and digital booking platform to enhance customer experience.",
    },
    {
      year: 2023,
      title: "Sustainable Logistics Initiative",
      description:
        "Implemented eco-friendly shipping options and carbon offset programs for environmentally conscious clients.",
    },
    {
      year: 2024,
      title: "Global Network Milestone",
      description:
        "Reached presence in over 10 countries with a network of trusted partners and local expertise.",
    },
  ];

  // Company values
  const values = [
    {
      title: "Reliability",
      description:
        "We deliver on our promises, ensuring consistent and dependable service across all shipping routes.",
    },
    {
      title: "Transparency",
      description:
        "Our clients have full visibility into shipping processes, costs, and timelines.",
    },
    {
      title: "Customer Focus",
      description:
        "We put our customers first, tailoring solutions to meet their unique logistics needs.",
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our services through technology and creative solutions.",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to reducing the environmental impact of global shipping.",
    },
    {
      title: "Global Expertise",
      description:
        "Our local knowledge in global markets ensures smooth operations worldwide.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Za.w.i.co.Ltd</h1>
              <p className="text-lg text-neutral-700 mb-6">
                Za.w.i.co.Ltd is a global logistics and shipping company dedicated to connecting businesses and individuals worldwide through reliable, efficient, and innovative shipping solutions.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                Since our founding in 2010, we've grown from a small local courier service to an international logistics provider with operations in over 50 countries, built on the principles of reliability, transparency, and customer focus.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-brand-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="bg-neutral-200 rounded-lg aspect-square md:aspect-[4/3] flex items-center justify-center">
              <span className="text-lg text-neutral-500">Company image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-neutral-700 leading-relaxed">
              To simplify global logistics by providing accessible, reliable, and sustainable shipping solutions that enable businesses of all sizes to connect with markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 last:mb-0">
                <div className="mr-8 text-right">
                  <div className="text-2xl font-bold text-brand-blue">{item.year}</div>
                </div>
                <div className="relative">
                  <div className="absolute top-2 -left-5 w-2 h-2 rounded-full bg-brand-blue"></div>
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-3 -left-4 w-[1px] h-full bg-neutral-300"></div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{value.title}</h3>
                <p className="text-neutral-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Us?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the Za.w.i.co.Ltd difference with our reliable, transparent, and customer-focused shipping solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-neutral-100 text-brand-blue font-medium">
              <Link to="/booking">Book a Shipment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-brand-700">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
