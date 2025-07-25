import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Our Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Program", href: "#program" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = item.href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigation]);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/d6604ed3-4ec7-4ef7-bc70-c7c7008ab589.png"
                alt="SatuHikmah Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-primary">SatuHikmah</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-transform transition-colors duration-200 ease-in-out text-foreground hover:text-secondary hover:scale-105 ${
                      isActive
                        ? "text-secondary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:rounded after:animate-underline"
                        : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-transform transition-colors duration-200 ease-in-out text-foreground hover:text-secondary hover:scale-105 ${
                    isActive
                      ? "text-secondary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:rounded after:animate-underline"
                      : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes underline {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
          button::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background-color: #facc15; /* yellow-400 */
            border-radius: 9999px;
            transition: width 0.3s ease-in-out;
            width: 0;
          }
          button:hover::after {
            width: 100%;
            animation: underline 0.3s forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
