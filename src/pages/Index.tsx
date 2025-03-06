
import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Code, Database, Brain, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen pt-16"> {/* Added padding-top to account for fixed navbar */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Specialized Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering customized technical solutions with a focus on performance, scalability, and user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Web Development"
              description="Creating responsive, modern web applications with React, Vue, and other cutting-edge technologies."
              icon={<Code className="text-primary" />}
              delay="animate-delay-100"
            />
            <ServiceCard 
              title="Backend Development"
              description="Building robust server-side applications and APIs with Node.js, Express, and Python Flask/Django."
              icon={<Server className="text-primary" />}
              delay="animate-delay-200"
            />
            <ServiceCard 
              title="Custom Solutions"
              description="Developing tailor-made software solutions to address specific business challenges and requirements."
              icon={<Database className="text-primary" />}
              delay="animate-delay-300"
            />
            <ServiceCard 
              title="AI Applications"
              description="Implementing intelligent features and capabilities using Llama-Index and other AI frameworks."
              icon={<Brain className="text-primary" />}
              delay="animate-delay-400"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center justify-center bg-transparent border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/5 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 opacity-0 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-600 opacity-30 blur-xl rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                    alt="Tech workspace" 
                    className="w-full rounded-lg shadow-lg" 
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in">
                Technical Expertise <br />With a Creative Approach
              </h2>
              <p className="text-muted-foreground mb-4 opacity-0 animate-fade-in animate-delay-100">
                I specialize in creating digital solutions that combine technical excellence with creative problem-solving. My approach focuses on building applications that are not only functionally robust but also intuitive and enjoyable to use.
              </p>
              <p className="text-muted-foreground mb-6 opacity-0 animate-fade-in animate-delay-200">
                With expertise in JavaScript, Python, and emerging technologies like Llama-Index, I deliver custom web and backend solutions that help businesses streamline operations and enhance their digital presence.
              </p>
              <div className="opacity-0 animate-fade-in animate-delay-300">
                <Link to="/about" className="inline-flex items-center text-primary font-medium hover:underline">
                  Learn more about my approach
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-card text-card-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a technical solution tailored to your specific needs and goals.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
