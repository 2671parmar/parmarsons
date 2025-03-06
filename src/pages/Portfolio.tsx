
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully featured online store with product management, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "public/lovable-uploads/863ec95a-8d78-4b78-b438-10574e0c5e57.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Assistant",
      description: "An intelligent writing assistant that helps users generate and refine content using AI capabilities.",
      technologies: ["Python", "Llama-Index", "React", "Flask"],
      imageUrl: "public/lovable-uploads/ae0a83b7-ee27-415c-ba6b-8ce019015fb2.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Property Management System",
      description: "A comprehensive system for managing real estate properties, tenants, and maintenance requests.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "AWS"],
      imageUrl: "public/lovable-uploads/7af36104-119c-4f79-a6ca-4c9e0099123d.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      imageUrl: "public/lovable-uploads/81f6bd73-d671-43ab-820c-b5efb1d9c4b0.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Financial Dashboard",
      description: "An interactive dashboard for visualizing and analyzing financial data with customizable reports.",
      technologies: ["JavaScript", "D3.js", "Node.js", "MySQL"],
      imageUrl: "public/lovable-uploads/3b3733f4-802b-4d8f-9108-c4655a187be7.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Appointment System",
      description: "A secure platform for scheduling and managing healthcare appointments and patient records.",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      imageUrl: "public/lovable-uploads/d9c331bd-cfa5-4117-a28c-feba1ab73a92.png",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              A showcase of my recent web development, backend, and AI application projects.
            </p>
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                delay={`animate-delay-${(index % 3) * 100 + 100}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Feedback</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What clients say about working with me and the solutions I've delivered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-100">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The web application developed by ParmarSons exceeded our expectations. The attention to detail and technical implementation were impressive, and the final product has significantly improved our business operations."
              </p>
              <div>
                <p className="font-semibold">David Chen</p>
                <p className="text-sm text-gray-500">CEO, TechStart</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-200">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The AI integration project delivered by ParmarSons transformed our customer service capabilities. Their expertise in both backend development and AI applications was evident throughout the project."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">CTO, InnovateX</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-300">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Working with ParmarSons was a great experience. They translated our complex requirements into a streamlined, user-friendly system that has made a real difference for our team and customers."
              </p>
              <div>
                <p className="font-semibold">Michael Rodriguez</p>
                <p className="text-sm text-gray-500">Product Manager, PropertyPro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The technical skills and expertise I bring to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div className="opacity-0 animate-fade-in animate-delay-100">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">React/Next.js</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">JavaScript/TypeScript</span>
                    <span className="text-sm font-medium text-gray-700">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">CSS/Tailwind/SCSS</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Vue.js</span>
                    <span className="text-sm font-medium text-gray-700">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Node.js/Express</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Python (Django/Flask)</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">RESTful/GraphQL APIs</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Database Design</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-4">AI & Data</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Llama-Index Integration</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Data Analysis</span>
                    <span className="text-sm font-medium text-gray-700">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Machine Learning Basics</span>
                    <span className="text-sm font-medium text-gray-700">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">NLP Implementation</span>
                    <span className="text-sm font-medium text-gray-700">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-400">
              <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Git/GitHub</span>
                    <span className="text-sm font-medium text-gray-700">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Docker/Containerization</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">CI/CD</span>
                    <span className="text-sm font-medium text-gray-700">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">AWS/Cloud Services</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tech-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact me to discuss how I can help bring your digital vision to life with tailored web, backend, and AI solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Let's Build Something Great
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
