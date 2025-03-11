
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Brain, Code, Database, Globe, Server } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "LendMatch.ai",
      subtitle: "In Development",
      description: "An innovative platform that streamlines the lending process for lenders and loan officers. The platform leverages AI to match loan officers with suitable lenders based on client requirements.",
      keyFeatures: [
        "AI-driven lender recommendations",
        "PDF parsing for product data extraction",
        "Real-time chat interface with NLP-powered assistant"
      ],
      technologies: ["Python", "LlamaIndex", "React", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      githubUrl: "#",
    },
    {
      title: "PatchMaster",
      subtitle: "patchmaster.com",
      description: "A service provider finder platform connecting users with local drywall repair franchises through zip code-based search, generating franchise pages with tailored content.",
      keyFeatures: [
        "Zip code geolocation for localized service discovery",
        "Dynamic content generation for franchise pages",
        "Responsive design optimized for all devices"
      ],
      technologies: ["PHP", "MySQL", "ZIP Code API"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      websiteUrl: "https://patchmaster.com",
    },
    {
      title: "Premier SMP Micropigmentation",
      subtitle: "premiersmpmicropigmentation.com",
      description: "A website for a Maryland-based scalp micropigmentation service aimed at restoring confidence for those experiencing hair loss, emphasizing non-surgical hair loss solutions.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      websiteUrl: "https://premiersmpmicropigmentation.com",
    },
    {
      title: "Hybrid Ink",
      subtitle: "hybridink.net",
      description: "A promotional website for a modern scalp micropigmentation studio offering immediate hair loss solutions, featuring video integration, service highlights, and client testimonials.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
      websiteUrl: "https://hybridink.net",
    },
    {
      title: "Taba Machinery",
      subtitle: "tabamachinery.com",
      description: "A professional website for a Boise, Idaho-based family business specializing in land clearing and forestry mulching, showcasing their expertise, services, and financing options.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      websiteUrl: "https://tabamachinery.com",
    },
    {
      title: "Buzzard Excavating",
      subtitle: "buzzard-excavating.com",
      description: "A straightforward, service-focused website for an Illinois-based, family-owned land clearing and mulching company, highlighting their offerings like land clearing and demolition.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      websiteUrl: "https://buzzard-excavating.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 opacity-0 animate-fade-in">Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-100">
              A showcase of my recent web development, backend, and AI application projects.
            </p>
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                keyFeatures={project.keyFeatures}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                websiteUrl={project.websiteUrl}
                githubUrl={project.githubUrl}
                delay={`animate-delay-${(index % 3) * 100 + 100}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The technical skills and expertise I bring to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div className="opacity-0 animate-fade-in animate-delay-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Frontend Development
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">React/Next.js</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">JavaScript/TypeScript</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">CSS/Tailwind/SCSS</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Vue.js</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Server className="mr-2 h-5 w-5" />
                Backend Development
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Node.js/Express</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python (Django/Flask)</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">RESTful/GraphQL APIs</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Database Design</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                AI & Data
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Llama-Index Integration</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Analysis</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Machine Learning Basics</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">NLP Implementation</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-400">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="mr-2 h-5 w-5" />
                DevOps & Tools
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Git/GitHub</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Docker/Containerization</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">CI/CD</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">AWS/Cloud Services</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
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
