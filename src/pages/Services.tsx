
import React from 'react';
import { Code, Server, Database, Brain, GitBranch, Cloud, Zap, Settings } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in section-heading">Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              Specialized technical solutions tailored to meet your specific requirements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Web Development */}
            <div className="opacity-0 animate-fade-in animate-delay-100">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="text-primary" size={24} />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-4 section-heading">Web Development</h2>
                  <p className="text-gray-600 mb-4">
                    Creating modern, responsive web applications that provide excellent user experiences across all devices.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Frontend development with React, Vue, and modern JavaScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Responsive and mobile-first design implementation
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Progressive Web Applications (PWAs)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Web performance optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Backend Development */}
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Server className="text-primary" size={24} />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-4 section-heading">Backend Development</h2>
                  <p className="text-gray-600 mb-4">
                    Building robust server-side applications and APIs that power your digital solutions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      RESTful and GraphQL API development
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Node.js and Express server implementation
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Python Django/Flask application development
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Database design and optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Custom Solutions */}
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Database className="text-primary" size={24} />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-4 section-heading">Custom Solutions</h2>
                  <p className="text-gray-600 mb-4">
                    Developing tailor-made software solutions that address your specific business challenges.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Bespoke web application development
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Custom content management systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      E-commerce solutions and integrations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Workflow automation tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* AI Applications */}
            <div className="opacity-0 animate-fade-in animate-delay-400">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Brain className="text-primary" size={24} />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-4 section-heading">AI Applications</h2>
                  <p className="text-gray-600 mb-4">
                    Integrating artificial intelligence capabilities into your applications for enhanced functionality.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Llama-Index implementations and integrations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Natural language processing features
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Intelligent search and recommendation systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Data analysis and visualization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-12 bg-secondary dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 section-heading">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complementary offerings that help ensure the success of your technical projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg shadow-md p-6 opacity-0 animate-fade-in animate-delay-100">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GitBranch className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 section-heading">Code Audit & Refactoring</h3>
              <p className="text-gray-600 text-center">
                Reviewing and improving existing codebases for better maintainability and performance.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 opacity-0 animate-fade-in animate-delay-200">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Cloud className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 section-heading">Cloud Deployment</h3>
              <p className="text-gray-600 text-center">
                Setting up and optimizing your applications on cloud platforms like AWS, Azure, or Google Cloud.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 opacity-0 animate-fade-in animate-delay-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 section-heading">Performance Optimization</h3>
              <p className="text-gray-600 text-center">
                Enhancing application speed, responsiveness, and resource efficiency.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 opacity-0 animate-fade-in animate-delay-400">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Settings className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 section-heading">Technical Consultation</h3>
              <p className="text-gray-600 text-center">
                Providing expert advice on technology selection, architecture, and implementation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 section-heading">My Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure successful project delivery.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="relative mb-12">
              <div className="flex items-center mb-6">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div className="w-1/2 pr-12 text-right opacity-0 animate-fade-in animate-delay-100">
                  <h3 className="text-xl font-semibold mb-2 section-heading">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    Understanding your requirements, goals, and constraints to create a detailed project plan.
                  </p>
                </div>
                <div className="w-1/2"></div>
              </div>
              
              <div className="flex items-center mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-12 opacity-0 animate-fade-in animate-delay-200">
                  <h3 className="text-xl font-semibold mb-2 section-heading">Design & Architecture</h3>
                  <p className="text-gray-600">
                    Creating the technical blueprint for your solution, including UI/UX design and system architecture.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div className="w-1/2 pr-12 text-right opacity-0 animate-fade-in animate-delay-300">
                  <h3 className="text-xl font-semibold mb-2">Development</h3>
                  <p className="text-gray-600">
                    Implementing the solution with regular check-ins and updates to ensure alignment with requirements.
                  </p>
                </div>
                <div className="w-1/2"></div>
              </div>
              
              <div className="flex items-center mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                </div>
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-12 opacity-0 animate-fade-in animate-delay-400">
                  <h3 className="text-xl font-semibold mb-2">Testing & Refinement</h3>
                  <p className="text-gray-600">
                    Thorough testing to ensure functionality, performance, and security, followed by necessary refinements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                </div>
                <div className="w-1/2 pr-12 text-right opacity-0 animate-fade-in animate-delay-500">
                  <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                  <p className="text-gray-600">
                    Launching your solution and providing ongoing support and maintenance as needed.
                  </p>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tech-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to discuss your project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact me to schedule a consultation and learn how I can help bring your ideas to life.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
