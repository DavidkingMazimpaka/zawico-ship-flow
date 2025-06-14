import { useState } from "react";
import { Button } from "@/components/UI/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm shadow-lg border-b-2 border-orange-400/30" style={{ background: 'linear-gradient(to right, #090144, #1a0f5c, #2d1b74)' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Button 
            variant="ghost"
            onClick={() => window.location.href = '/'}
            className="p-0 hover:bg-transparent"
          >
            <div className="h-12 md:h-14 bg-white rounded-lg p-1 shadow-md group-hover:shadow-lg transition-all duration-300 flex items-center">
              <img 
                src="/ZAWICO.png"
                alt="ZAWICO Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => 
              item.isButton ? ( 
                <Button 
                  key={item.label}
                  onClick={() => window.location.href = item.path}
                  variant="default"
                  size="default"
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  onClick={() => window.location.href = item.path}
                  variant="ghost"
                  size="default"
                  className={`text-base font-medium transition-all duration-300 hover:text-[#090144] relative ${
                    item.path === '/services' ? "text-white" : "text-white/80"
                  } hover:transform hover:-translate-y-0.5`}
                >
                  {item.label}
                  {item.path === '/services' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                  )}
                </Button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
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
        <div className="md:hidden backdrop-blur-sm border-t border-white/10" style={{ backgroundColor: 'rgba(9, 1, 68, 0.95)' }}>
          <nav className="container mx-auto py-4 flex flex-col gap-4">
            {navItems.map((item) => 
              item.isButton ? (
                <Button 
                  key={item.label}
                  onClick={() => {
                    window.location.href = item.path;
                    setIsMenuOpen(false);
                  }}
                  variant="default"
                  size="default"
                  className="w-full bg-white hover:bg-blue-50 py-3 rounded-lg font-medium transition-colors shadow-md" 
                  style={{ color: '#090144' }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  onClick={() => {
                    window.location.href = item.path;
                    setIsMenuOpen(false);
                  }}
                  variant="ghost"
                  size="default"
                  className={`py-2 text-left text-base font-medium transition-colors hover:text-[#090144] ${
                    item.path === '/services' ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.label}
                </Button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;