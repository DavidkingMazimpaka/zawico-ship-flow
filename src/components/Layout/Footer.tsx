import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/UI/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About Us", url: "/about" },
        { label: "Our Services", url: "/services" },
        { label: "Contact Us", url: "/contact" },
        { label: "Careers", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Freight Forwarding", url: "/services" },
        { label: "Last-Mile Delivery", url: "/services" },
        { label: "Customs Clearance", url: "/services" },
        { label: "Vehicle Logistics", url: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQs", url: "#" },
        { label: "Terms & Conditions", url: "#" },
      ],
    },
    {
      title: "Contact Us",
      content: (
        <div className="space-y-2 text-neutral-600">
          <p>KIGALI CITY KN 8 Ave, Kigali</p>
          <p>Email: zappaworldwideinvestment@gmail.com</p>
          <p>Phone: +250788903507</p>
          <p>WhatsApp: 0793903992</p>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">
                Za.w.i.co<span className="text-brand-100">.Ltd</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Global logistics and shipping solutions that connect businesses and individuals worldwide.
              Our services are designed to make shipping simple, reliable, and efficient.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:zappaworldwideinvestment@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1DA1F2] text-neutral-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://instagram.com/za.wi.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#E4405F] text-neutral-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{column.title}</h3>
              {column.links ? (
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.label.includes("Terms") ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="text-neutral-400 hover:text-brand-blue transition-colors">
                              {link.label}
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Terms and Conditions</DialogTitle>
                              <DialogDescription>
                                By using our services, you agree to our terms, including acceptable use, payment, and liability limitations. This information is provided for general guidance and may be updated periodically.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3 text-sm text-neutral-600">
                              <p><strong>Service Use:</strong> You agree not to misuse our platform or engage in prohibited activities.</p>
                              <p><strong>Liability:</strong> We operate with reasonable care but are not liable for delays beyond our control.</p>
                              <p><strong>Customs & Compliance:</strong> Shippers are responsible for accurate declarations and compliance with destination regulations.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : link.label.includes("FAQs") ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="text-neutral-400 hover:text-brand-blue transition-colors">
                              {link.label}
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Frequently Asked Questions</DialogTitle>
                              <DialogDescription>
                                Quick answers to common questions about our shipping services.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 text-sm text-neutral-700">
                              <div>
                                <p className="font-medium text-neutral-900">How long does international shipping take?</p>
                                <p className="mt-1">Transit times vary by service: Express (2-5 days), Standard (5-10 days), Economy (10-20 days). Customs processing may add extra time.</p>
                              </div>
                              <div>
                                <p className="font-medium text-neutral-900">Do you offer door-to-door service?</p>
                                <p className="mt-1">Yes. We provide door-to-door pickup and delivery for most destinations, subject to local availability.</p>
                              </div>
                              <div>
                                <p className="font-medium text-neutral-900">What items are restricted or prohibited?</p>
                                <p className="mt-1">Hazardous materials, perishable goods, currency, and certain electronics may be restricted. Contact us for a compliance check before shipping.</p>
                              </div>
                              <div>
                                <p className="font-medium text-neutral-900">Can I track my shipment?</p>
                                <p className="mt-1">Absolutely. Use the Tracking page with your tracking number to see real-time updates.</p>
                              </div>
                              <div>
                                <p className="font-medium text-neutral-900">How are shipping costs calculated?</p>
                                <p className="mt-1">Pricing is based on weight/volume, route, service level, and special requirements. For tailored pricing, use “Get a Custom Quote”.</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Link
                          to={link.url}
                          className="text-neutral-400 hover:text-brand-blue transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                column.content
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-6 text-neutral-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Za.w.i.co.Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-brand-blue">Privacy Policy</Link>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-brand-blue">Terms of Service</button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Terms of Service</DialogTitle>
                    <DialogDescription>
                      Please review these terms before using Za.w.i.co.Ltd services.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <p><strong>Agreement:</strong> By accessing our site or using our services, you accept these terms.</p>
                    <p><strong>Shipping:</strong> Transit times are estimates; customs and third-party delays may occur.</p>
                    <p><strong>Payments:</strong> Fees are due as invoiced. Unpaid balances may result in service suspension.</p>
                  </div>
                </DialogContent>
              </Dialog>
              <Link to="#" className="hover:text-brand-blue">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;