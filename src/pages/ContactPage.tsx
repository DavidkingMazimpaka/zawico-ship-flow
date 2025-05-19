
import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader, MailIcon, PhoneIcon, MapPinIcon, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  // Contact info cards
  const contactInfo = [
    {
      icon: <PhoneIcon size={24} />,
      title: "Phone",
      details: [
        "+1 234 567 8900 (Main)",
        "+1 234 567 8901 (Support)"
      ],
    },
    {
      icon: <MailIcon size={24} />,
      title: "Email",
      details: [
        "info@zawico.com",
        "support@zawico.com"
      ],
    },
    {
      icon: <MapPinIcon size={24} />,
      title: "Address",
      details: [
        "123 Shipping Lane",
        "Port City, PC 12345",
        "United States"
      ],
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8AM - 6PM",
        "Saturday: 9AM - 1PM",
        "Sunday: Closed"
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-neutral-700 mb-6">
              Have questions about our services or need a quote? Our team is here to help. 
              Reach out to us through the form below or use our direct contact information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <Card>
                <form onSubmit={handleSubmit}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-blue hover:bg-brand-700" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader size={16} className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-brand-blue">{info.icon}</div>
                        <CardTitle className="text-xl">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-neutral-700">{detail}</p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Our Location</h2>
                <div className="bg-neutral-200 rounded-lg h-[300px] flex items-center justify-center">
                  <p className="text-neutral-600">Map integration would go here</p>
                </div>
                <p className="mt-2 text-sm text-neutral-500">
                  123 Shipping Lane, Port City, PC 12345, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Global Offices</h2>
          <p className="text-lg text-neutral-600 mb-10 text-center max-w-3xl mx-auto">
            With offices in key locations worldwide, we provide local expertise with global reach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: "New York",
                country: "United States",
                address: "123 Shipping Lane, NY 10001",
                phone: "+1 234 567 8900",
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "45 Logistics Street, London EC1A 1BB",
                phone: "+44 20 1234 5678",
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "78 Marina Bay, Singapore 018956",
                phone: "+65 6123 4567",
              },
              {
                city: "Dubai",
                country: "UAE",
                address: "56 Sheikh Zayed Rd, Dubai",
                phone: "+971 4 123 4567",
              },
            ].map((office, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-brand-blue">{office.country}</p>
                  <p className="text-neutral-600 mt-2">{office.address}</p>
                  <p className="text-neutral-600">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
