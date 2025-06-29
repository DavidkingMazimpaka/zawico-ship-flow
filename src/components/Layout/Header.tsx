import { useState } from "react";
import { Button } from "@/components/UI/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm shadow-lg border-b-2 border-yellow-200/40" style={{ background: 'linear-gradient(to right, #fffbeb, #fef3c7, #fde68a)' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="p-0 hover:bg-transparent flex items-center">
            <div className="h-20 md:h-28 p-1 flex items-center">
              <img 
                src="/ZAPPA_LOGO-1.png"
                alt="ZAPPA LOGO"
                className="h-16 md:h-24 w-auto object-contain drop-shadow-lg"
                style={{ maxHeight: "5rem", minHeight: "4rem" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => 
              item.isButton ? ( 
                <Link 
                  key={item.label}
                  to={item.path}
                >
                  <Button 
                    variant="default"
                    size="default"
                    // Removed hover:text-white and kept only background color change on hover
                    className="bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                >
                  <Button
                    variant="ghost"
                    size="default"
                    // Removed any hover:text-white, only hover:text-violet-600 remains
                    className={`text-base font-medium transition-all duration-300 hover:text-violet-600 relative ${
                      item.path === '/services' ? "text-gray-800" : "text-gray-700"
                    } hover:transform hover:-translate-y-0.5`}
                  >
                    {item.label}
                    {item.path === '/services' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-500 rounded-full"></div>
                    )}
                  </Button>
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2 text-gray-800 bg-yellow-100/60 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-sm border-t border-yellow-200/40" style={{ backgroundColor: 'rgba(255, 251, 235, 0.95)' }}>
          <nav className="container mx-auto py-4 flex flex-col gap-4">
            {navItems.map((item) => 
              item.isButton ? (
                <Link 
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    variant="default"
                    size="default"
                    // Removed hover:text-white and kept only background color change on hover
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 py-3 rounded-lg font-medium transition-colors shadow-md"
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    size="default"
                    className={`py-2 text-left text-base font-medium transition-colors hover:text-violet-600 ${
                      item.path === '/services' ? "text-gray-800" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Button>
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