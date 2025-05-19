
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Global Imports Ltd",
      role: "Supply Chain Manager",
      content:
        "Za.w.i.co has transformed our logistics operations. Their reliable service and real-time tracking capabilities have significantly improved our supply chain efficiency. We've reduced delivery times by 30%.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Tech Innovations Inc",
      role: "Operations Director",
      content:
        "The customs clearance expertise that Za.w.i.co brings to the table is unmatched. They've helped us navigate complex international shipping regulations with ease, saving us both time and money.",
      rating: 4,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      company: "Artisan Exports",
      role: "CEO",
      content:
        "As a small business shipping delicate handcrafted items internationally, we needed a logistics partner we could trust. Za.w.i.co's attention to detail and careful handling has been exceptional.",
      rating: 5,
    },
    {
      id: 4,
      name: "James Wilson",
      company: "Retail Solutions Group",
      role: "Logistics Coordinator",
      content:
        "The last-mile delivery service from Za.w.i.co has dramatically improved our customer satisfaction rates. Their consistent on-time delivery and professional service make them a valuable partner.",
      rating: 5,
    },
  ];

  // State for active testimonial (for small screens)
  const [activeIndex, setActiveIndex] = useState(0);

  // Rendering stars for ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            See what our clients say about their experience working with Za.w.i.co.Ltd.
          </p>
        </div>

        {/* Mobile Testimonials (Single Card with Navigation) */}
        <div className="md:hidden">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="flex">{renderStars(testimonials[activeIndex].rating)}</div>
              </div>
              <p className="italic text-neutral-700 mb-4">"{testimonials[activeIndex].content}"</p>
              <div className="text-center">
                <p className="font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-neutral-500">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-brand-blue" : "bg-neutral-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Testimonials (Grid) */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="italic text-neutral-700 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
