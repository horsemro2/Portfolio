import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      category: "web",
      image: "public/me.png",
      description: "A fully responsive e-commerce website with modern design, shopping cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "Tailwind CSS", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "graphic",
      image: "https://static.wixstatic.com/media/4b9d2b_4ba75c826a1b4308a6757ee924271032~mv2.png/v1/fill/w_980,h_534,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b9d2b_4ba75c826a1b4308a6757ee924271032~mv2.png",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
      link: "#"
    },
    {
      id: 3,
      title: "Mobile App UI Design",
      category: "ui",
      image: "https://images.pexels.com/photos/13897609/pexels-photo-13897609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "User interface design for a fitness tracking mobile application with focus on user experience and accessibility.",
      technologies: ["Figma", "Adobe XD", "Sketch"],
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      category: "web",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete redesign of a corporate website with improved user experience, responsive design, and modern aesthetics.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 5,
      title: "Product Packaging Design",
      category: "graphic",
      image: "https://images.pexels.com/photos/4464484/pexels-photo-4464484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Custom packaging design for a premium skincare product line, including box design, labels, and marketing materials.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "3D Modeling"],
      link: "#"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "graphic",
      image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Design and implementation of a cohesive social media campaign including posts, stories, and advertisements.",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "After Effects"],
      link: "#"
    }
  ];
  
  const categories = ['all', 'web', 'graphic', 'ui'];
  
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' ? true : project.category === activeCategory
  );
  
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
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
      }
    };
    
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-script font-bold text-gray-800 dark:text-white mb-2 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">Featured Works</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-300"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-300">
            Explore my recent projects showcasing creative design solutions and innovative web development.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-400">
          <div className="inline-flex p-1 bg-white dark:bg-gray-700 rounded-full shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-teal-500 text-white shadow-md transform scale-105' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out hover:shadow-2xl hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-teal-300 text-sm mb-4">{project.category.charAt(0).toUpperCase() + project.category.slice(1)} Design</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{selectedProject.title}</h3>
              <p className="text-teal-600 dark:text-teal-400 mb-6">{selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)} Design</p>
              
              <div className="mb-6">
                <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Project Overview</h4>
                <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.link && (
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-colors"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;