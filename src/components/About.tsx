import React, { useEffect, useRef } from 'react';
import { User, Mail, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden mx-auto border-4 border-teal-500 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
                <img 
                  src="public/azouii.png"alt="anatxp" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">About Me</h2>
            
            <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mb-6 animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-1000 ease-out animation-delay-300"></div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-300">
              I'm a passionate graphic designer and web developer with over 5 years of experience creating stunning visual identities and engaging web experiences. My approach combines aesthetic sensibility with technical expertise to deliver projects that not only look beautiful but also provide intuitive user experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-400">
              Whether I'm designing a brand identity, creating illustrations, or building responsive websites, I focus on clean, purposeful design that effectively communicates my clients' messages and achieves their business goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-500">
              <div className="flex items-center">
                <User className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Abdelahk</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">contact@antaxP.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Morocco, MA</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">5+ Years Experience</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-600">
              <a href="#portfolio" 
                className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Portfolio
              </a>
              <a href="/resume.pdf" className="px-6 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-full font-medium hover:bg-teal-600/10 transition-colors">
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
            <Award className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Creative Design</h3>
            <p className="text-gray-600 dark:text-gray-300">Crafting visually stunning designs that capture attention and communicate your message effectively.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-200">
            <Award className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Building responsive, user-friendly websites that provide seamless experiences across all devices.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-400">
            <Award className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Brand Identity</h3>
            <p className="text-gray-600 dark:text-gray-300">Developing cohesive brand identities that resonate with your audience and set you apart from competitors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;