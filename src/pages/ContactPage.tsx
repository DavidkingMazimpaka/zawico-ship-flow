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
} from "@/components/UI/card";
import { Loader, MailIcon, PhoneIcon, MapPinIcon, Clock, Instagram, ArrowUpRightIcon } from "lucide-react";
import { useToast } from "@/components/UI/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond to you shortly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon size={24} className="text-green-600" />, title: "Phone", details: ["+250788903507 (Main)"]
    },
    {
      icon: <MailIcon size={24} className="text-red-500" />, title: "Email", details: ["zappaworldwideinvestments\ncompany@gmail.com"]
    },
    {
      icon: <MapPinIcon size={24} className="text-blue-500" />, title: "Address", details: ["KIGALI CITY KN 8 Ave", "Kigali, Rwanda"]
    },
    {
      icon: <Clock size={24} className="text-yellow-500" />, title: "Business Hours", details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 1PM", "Sunday: Closed"]
    },
  ];

  const socialContacts = [
    {
      icon: <Instagram size={24} className="text-pink-500" />, title: "Instagram", details: ["za.wi.co ltd"], link: "https://instagram.com/za.wi.co"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-green-500"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
      title: "WhatsApp",
      details: ["+971527629909", "0793903992"],
      link: "https://wa.me/971527629909"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-br from-brand-100 to-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-blue tracking-tight">Contact Us</h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-6">
              Have questions or need a quote? Drop us a message or reach out through the contacts below. We're here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive Form Section */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
                      Your Name *
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue/0 to-blue-600/0 group-hover:from-brand-blue/5 group-hover:to-blue-600/5 pointer-events-none transition-all duration-300"></div>
                  </div>

                  <div className="relative group">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue/0 to-blue-600/0 group-hover:from-brand-blue/5 group-hover:to-blue-600/5 pointer-events-none transition-all duration-300"></div>
                  </div>

                  <div className="relative group">
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1 block">
                      Subject
                    </Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                      placeholder="How can we help?"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue/0 to-blue-600/0 group-hover:from-brand-blue/5 group-hover:to-blue-600/5 pointer-events-none transition-all duration-300"></div>
                  </div>

                  <div className="relative group">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                      Your Message *
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue/0 to-blue-600/0 group-hover:from-brand-blue/5 group-hover:to-blue-600/5 pointer-events-none transition-all duration-300"></div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-brand-blue/90 hover:to-blue-600/90 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <Loader size={20} className="animate-spin" />
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <MailIcon size={20} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{info.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 group-hover:text-gray-800 transition-colors">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  {socialContacts.map((social, index) => (
                    <div 
                      key={`social-${index}`}
                      className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{social.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {social.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 group-hover:text-gray-800 transition-colors">
                            {detail}
                          </p>
                        ))}
                        <a 
                          href={social.link} 
                          className="inline-flex items-center gap-2 text-brand-blue hover:text-blue-600 transition-colors mt-2"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Connect with us</span>
                          <ArrowUpRightIcon size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                    Visit Our Office
                  </h2>
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                    <iframe 
                      src="https://www.google.com/maps/embed?..." 
                      className="w-full h-[350px]"
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                    <MapPinIcon size={16} />
                    KIGALI CITY KN 8 Ave, Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Global Offices
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices in key locations worldwide, we provide local expertise with global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                city: "Kigali", 
                country: "Rwanda", 
                address: "KIGALI CITY KN 8 Ave", 
                phone: "+250788903507",
                gradient: "from-blue-500 to-indigo-600"
              },
              { 
                city: "Dubai", 
                country: "UAE", 
                address: "Dubai Office", 
                phone: "+971527629909",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((office, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${office.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${office.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {office.city[0]}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900">
                      {office.city}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {office.country}
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPinIcon className="w-4 h-4 text-indigo-500" />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <PhoneIcon className="w-4 h-4 text-indigo-500" />
                      {office.phone}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="mt-4 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                  >
                    Get Directions
                  </Button>
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
