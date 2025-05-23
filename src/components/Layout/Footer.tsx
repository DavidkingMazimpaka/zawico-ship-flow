
import { Link } from "react-router-dom";
import { Instagram, Twitter} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer columns data
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
          <p>Email: zappaworldwideinvestmentscompany@gmail.com</p>
          <p>Phone: +250788903507</p>
          <p>WhatsApp: +250789837250</p>
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
              <span className="text-2xl font-bold text-white">Za.w.i.co<span className="text-brand-100">.Ltd</span></span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Global logistics and shipping solutions that connect businesses and individuals worldwide.
              Our services are designed to make shipping simple, reliable, and efficient.
            </p>
           <div className="flex space-x-4">
<div className="flex space-x-4">
  <a 
    href="https://twitter.com/zawico" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-[#1DA1F2] text-neutral-400 transition-colors"
    aria-label="Twitter"
  >
    <Twitter size={24} />
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
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{column.title}</h3>
              {column.links ? (
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.url}
                        className="text-neutral-400 hover:text-brand-blue transition-colors"
                      >
                        {link.label}
                      </Link>
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
              <Link to="#" className="hover:text-brand-blue">Terms of Service</Link>
              <Link to="#" className="hover:text-brand-blue">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
