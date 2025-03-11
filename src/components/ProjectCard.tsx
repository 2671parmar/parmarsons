
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  subtitle?: string;
  keyFeatures?: string[];
  delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
  websiteUrl,
  githubUrl,
  subtitle,
  keyFeatures,
  delay = '',
}) => {
  return (
    <div className={`bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in ${delay}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mb-3 italic">{subtitle}</p>}
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {keyFeatures && keyFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {websiteUrl && (
            <a 
              href={websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Visit Site
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:underline transition-colors"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
