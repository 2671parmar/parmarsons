
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Web & Backend <br/>
                <span className="tech-gradient">Development</span> <br/>
                Specialist
              </h1>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-100">
              <p className="text-xl text-gray-600 mb-8">
                Custom solutions focused on modern web technologies, backend development and AI applications.
              </p>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-200 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View Portfolio
              </Link>
            </div>
            
            <div className="mt-12 opacity-0 animate-fade-in animate-delay-300">
              <p className="text-gray-500 text-sm mb-2">Technologies</p>
              <div className="flex items-center space-x-6">
                <span className="code-text font-mono text-sm">JavaScript</span>
                <span className="code-text font-mono text-sm">Python</span>
                <span className="code-text font-mono text-sm">Llama-Index</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-600 opacity-30 blur-xl rounded-lg"></div>
              <div className="relative bg-white dark:bg-gray-900 p-5 rounded-lg shadow-xl">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 overflow-auto">
                  <code>{`// Modern web solutions
const developer = {
  name: "ParmarSons",
  skills: ["Web Development", 
          "Backend Services", 
          "AI Applications"],
  languages: ["JavaScript", "Python"],
  tools: ["Llama-Index", "React", "Node.js"],
  focus: "Building scalable digital solutions"
};

// Let's create something amazing
developer.startProject(yourIdea);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
