import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'other';
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: 'Adobe Photoshop', level: 90, category: 'design', color: 'bg-blue-500' },
    { name: 'Adobe Illustrator', level: 85, category: 'design', color: 'bg-orange-500' },
    { name: 'UI/UX Design', level: 80, category: 'design', color: 'bg-purple-500' },
    { name: 'HTML/CSS', level: 95, category: 'development', color: 'bg-teal-500' },
    { name: 'JavaScript', level: 85, category: 'development', color: 'bg-yellow-500' },
    { name: 'React', level: 80, category: 'development', color: 'bg-blue-400' },
    { name: 'Tailwind CSS', level: 90, category: 'development', color: 'bg-cyan-500' },
    { name: 'WordPress', level: 75, category: 'development', color: 'bg-indigo-500' },
    { name: 'Motion Graphics', level: 70, category: 'design', color: 'bg-pink-500' },
    { name: 'Responsive Design', level: 90, category: 'development', color: 'bg-green-500' },
  ];

  const [activeTab, setActiveTab] = React.useState<'all' | 'design' | 'development' | 'other'>('all');
  
  const filteredSkills = skills.filter(skill => 
    activeTab === 'all' ? true : skill.category === activeTab
  );
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            if (entry.target === skillsRef.current) {
              const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
              skillBars.forEach((bar, index) => {
                setTimeout(() => {
                  bar.classList.add('animate-skill');
                }, index * 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">My Skills</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-300"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-300">
            I've developed expertise in various design and development technologies over the years.
            Here's a glimpse of my technical proficiency.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-400">
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
            {['all', 'design', 'development'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-white dark:bg-gray-600 text-teal-600 dark:text-teal-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-500"
        >
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`skill-bar h-full ${skill.color} rounded-full w-0`}
                  style={{ '--target-width': `${skill.level}%` } as any}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Design Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expert in Adobe Creative Suite, Figma, Sketch, and other industry-standard design tools.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-200">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proficient in modern front-end technologies including React, Vue, and responsive frameworks.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animation-delay-400">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Problem Solving</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Strong analytical skills to find creative solutions for complex design and technical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;