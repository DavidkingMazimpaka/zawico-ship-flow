
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/UI/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/ZAWICO.png" 
              alt="ZAWICO Company Logo" 
              className="h-20 md:h-20 w-auto object-contain" // Reduced from h-12 to h-8/h-10
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => 
              item.isButton ? (
                <Button key={item.label} asChild className="bg-brand-blue hover:bg-brand-700">
                  <Link to={item.path}>
                    {item.label}
                  </Link>
                </Button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-base font-medium transition-colors hover:text-brand-blue ${
                    location.pathname === item.path ? "text-brand-blue" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto py-4 flex flex-col gap-4">
            {navItems.map((item) => 
              item.isButton ? (
                <Button key={item.label} asChild className="w-full bg-brand-blue hover:bg-brand-700">
                  <Link 
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </Button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path ? "text-brand-blue" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
