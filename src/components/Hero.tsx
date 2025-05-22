import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1280')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-teal-900/90"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-teal-500/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-orange-500/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-purple-500/20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-400 font-medium mb-4 opacity-0 animate-fade-in">
            Hello, I'm a
          </p>
          
          <h1 
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          >
            <span className="inline-block mx-2">Graphic designer</span>
            <span className="inline-block mx-2">&</span>
            <span className="inline-block mx-2">Web devloper </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Creating beautiful, functional designs and websites that help brands stand out in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-600">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-full font-medium hover:bg-teal-400/10 transition-all transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-400 hover:text-teal-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;