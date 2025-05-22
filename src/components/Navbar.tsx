import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrollPosition: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isScrolled = scrollPosition > 50;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-3xl font-bold text-teal-600 dark:text-teal-400 z-50 font-script hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          Antax
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 
              <Sun className="h-5 w-5 text-yellow-400" /> : 
              <Moon className="h-5 w-5 text-gray-700" />
            }
          </button>
        </div>
        
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 
              <Sun className="h-5 w-5 text-yellow-400" /> : 
              <Moon className="h-5 w-5 text-gray-700" />
            }
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : 
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;