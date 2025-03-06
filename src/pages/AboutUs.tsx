
import React from 'react';
import { Code, Server, Database, Brain } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">About ParmarSons</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              A passionate tech professional specializing in web development, backend solutions, and AI applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <img 
                src="public/lovable-uploads/7c3dbdc8-ec72-4446-a548-3f3adb1abab1.png" 
                alt="About ParmarSons" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-200">Who I Am</h2>
              <p className="text-gray-600 mb-4 opacity-0 animate-fade-in animate-delay-300">
                I'm a technical developer with a passion for creating elegant solutions to complex problems. My background spans web development, backend systems, and emerging technologies like AI applications.
              </p>
              <p className="text-gray-600 opacity-0 animate-fade-in animate-delay-400">
                What sets me apart is my approach to technology: I believe in building solutions that are not only technically sound but also user-friendly and maintainable in the long term. Every project I undertake is an opportunity to combine technical expertise with creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized skills in key development areas that drive modern technical solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-100">
              <div className="flex items-center mb-4">
                <Code className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p className="text-gray-600">
                Creating responsive, modern web applications with a focus on user experience and performance. Proficient in JavaScript frameworks and libraries including React, Vue, and modern frontend tools.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-200">
              <div className="flex items-center mb-4">
                <Server className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <p className="text-gray-600">
                Building robust server-side applications, APIs, and databases. Experienced with Node.js, Express, Python Django/Flask, and database systems like MongoDB, PostgreSQL, and MySQL.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-300">
              <div className="flex items-center mb-4">
                <Database className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold">Custom Solutions</h3>
              </div>
              <p className="text-gray-600">
                Developing tailor-made software solutions that address specific business challenges. From e-commerce platforms to content management systems, I create custom applications that precisely meet client requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-400">
              <div className="flex items-center mb-4">
                <Brain className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold">AI Applications</h3>
              </div>
              <p className="text-gray-600">
                Integrating artificial intelligence capabilities into applications using frameworks like Llama-Index. Specialized in creating intelligent features that enhance user experience and automate complex tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies for building robust digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "JavaScript", category: "Language" },
              { name: "Python", category: "Language" },
              { name: "React", category: "Frontend" },
              { name: "Vue.js", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "Express", category: "Backend" },
              { name: "Django", category: "Backend" },
              { name: "Flask", category: "Backend" },
              { name: "MongoDB", category: "Database" },
              { name: "PostgreSQL", category: "Database" },
              { name: "MySQL", category: "Database" },
              { name: "Llama-Index", category: "AI" },
              { name: "TensorFlow", category: "AI" },
              { name: "Docker", category: "DevOps" },
              { name: "AWS", category: "Cloud" },
              { name: "Git", category: "Tool" },
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className={`bg-white p-4 rounded-lg border border-gray-200 shadow-sm opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="font-mono text-primary font-medium">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-tech-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in">My Development Philosophy</h2>
              <div className="space-y-4">
                <p className="opacity-0 animate-fade-in animate-delay-100">
                  I believe that great software is more than just functioning code. It's about creating solutions that are intuitive, maintainable, and bring real value to users.
                </p>
                <p className="opacity-0 animate-fade-in animate-delay-200">
                  My approach combines technical excellence with a user-centered mindset. Every project begins with understanding the core needs and challenges, followed by thoughtful design and implementation.
                </p>
                <p className="opacity-0 animate-fade-in animate-delay-300">
                  I'm committed to writing clean, documented code that stands the test of time, and to staying current with emerging technologies and best practices in the field.
                </p>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">User-Centered</h3>
                  <p className="text-gray-300">
                    Designing with real users in mind to create intuitive experiences.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Maintainable</h3>
                  <p className="text-gray-300">
                    Building systems that are easy to update and scale over time.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Efficient</h3>
                  <p className="text-gray-300">
                    Optimizing for performance and resource usage.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Innovative</h3>
                  <p className="text-gray-300">
                    Embracing new technologies and approaches when they add value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
