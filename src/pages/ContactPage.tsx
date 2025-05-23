
import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { Textarea } from "@/components/UI/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader, MailIcon, PhoneIcon, MapPinIcon, Clock, Instagram } from "lucide-react";
import { useToast } from "@/components/UI/use-toast";

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
        description: "Please fill in all reqUIred fields.",
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
        "+250788903507 (Main)",
      ],
    },
    {
      icon: <MailIcon size={24} />,
      title: "Email",
      details: [
        "zappaworldwideinvestmentscompany@gmail.com",
      ],
    },
    {
      icon: <MapPinIcon size={24} />,
      title: "Address",
      details: [
        "KIGALI CITY KN 8 Ave",
        "Kigali, Rwanda",
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

  // Social media contacts
  const socialContacts = [
    {
      icon: <Instagram size={24} />,
      title: "Instagram",
      details: ["za.wi.co ltd"],
      link: "https://instagram.com/za.wi.co"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
      title: "WhatsApp",
      details: ["+971527629909", "+250789837250"],
      link: "https://wa.me/971527629909"
    }
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

                {/* Social Media Contacts */}
                {socialContacts.map((social, index) => (
                  <Card key={`social-${index}`} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-brand-blue">{social.icon}</div>
                        <CardTitle className="text-xl">{social.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {social.details.map((detail, i) => (
                        <p key={i} className="text-neutral-700">{detail}</p>
                      ))}
                      <a 
                        href={social.link}
                        className="text-brand-blue hover:underline mt-2 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect with us
                      </a>
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
                  KIGALI CITY KN 8 Ave, Kigali, Rwanda
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
                city: "Kigali",
                country: "Rwanda",
                address: "KIGALI CITY KN 8 Ave",
                phone: "+250788903507",
              },
              {
                city: "Dubai",
                country: "UAE",
                address: "Dubai Office",
                phone: "+971527629909",
              }
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
