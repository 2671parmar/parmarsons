
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl = "/placeholder.svg",
  liveUrl,
  githubUrl,
  delay = '',
}) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in ${delay}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:underline transition-colors"
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
