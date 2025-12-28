import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for Typewriter effect
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Cynthia Liu";
  
  // Configuration for animation speeds (in milliseconds)
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 2000; // How long to wait after typing the full name

  // Typewriter effect logic
  useEffect(() => {
    let timer;

    if (isDeleting) {
      // Deleting Logic
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, switch to typing mode
        setIsDeleting(false);
      }
    } else {
      // Typing Logic
      if (displayText.length < fullName.length) {
        timer = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  // Blinking cursor independent of typing
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Market Stimulation Game",
      description: "This is a project I work with my other teammate for the Programming and Web Scraping course.",
      link: "https://www.youtube.com/watch?v=fdVVbSM-xtE",
      videoId: "fdVVbSM-xtE"
    },
    {
      id: 2,
      title: "Bomberman",
      description: "This is a project I work with my teammates for the Introduction to Computer course. It is a game created by Jack language.",
      link: "https://www.youtube.com/watch?v=t7gM4wY1O0g",
      videoId: "t7gM4wY1O0g"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#5F6F52]">Cynthia Liu's Personal Website</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#5F6F52] transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#5F6F52] transition">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-[#5F6F52] transition">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#5F6F52] transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-[#5F6F52]">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-[#5F6F52]">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-gray-700 hover:text-[#5F6F52]">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#5F6F52]">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-[#BBC8B1]">
        <div className="text-center px-4">
          {/* Animated Name with Typewriter Effect */}
          <h1 className="text-5xl md:text-8xl font-bold text-[#2F3B26] mb-24 h-20 min-h-[5rem]">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-[#5F6F52]`}>|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-black mb-16 font-medium">
            Computer Science and Information Engineering Freshman @ National Taiwan University
          </p>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-[#5F6F52] text-white px-8 py-3 rounded-full text-lg hover:bg-[#4a5740] transition shadow-lg"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5F6F52] mb-8 text-center">About Me</h2>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 border-t-4 border-[#5F6F52]">
            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm a Computer Science freshman at National Taiwan University.
              I am only half way through my first year, but I'm already having lots of fun in various courses.
            </p>
            <p className="text-lg text-gray-700">
              I really look forward to the rest of my college years and knowing more people!
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#5F6F52] mb-12 text-center">My Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full border border-gray-200">
                <div className="h-64 bg-black shrink-0 relative group">
                  <img 
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#5F6F52] mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow text-lg">
                    {project.description}
                  </p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5F6F52] hover:text-[#4a5740] font-bold inline-block mt-auto flex items-center gap-2 text-lg"
                  >
                    Learn More <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#5F6F52]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-lg text-blue-50 mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex flex-col items-center space-y-6">
            
            {/* Phone */}
            <div className="flex items-center space-x-3 text-white text-lg">
              <Phone size={24} />
              <span>0905525341</span>
            </div>

            {/* GitHub */}
            <a href="https://github.com/YuHsinL" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white text-lg hover:text-[#BBC8B1] transition">
              <Github size={24} />
              <span>github.com/YuHsinL</span>
            </a>

            {/* Email */}
            <a href="mailto:cynthialiu0310@gmail.com" className="flex items-center space-x-3 text-white text-lg hover:text-[#BBC8B1] transition">
              <Mail size={24} />
              <span>cynthialiu0310@gmail.com</span>
            </a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a5740] text-white py-8 text-center">
        <p>&copy; 2025 Yu-Hsin Liu. All rights reserved.</p>
      </footer>
    </div>
  );
}