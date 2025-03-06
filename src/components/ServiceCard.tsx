
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  delay = '' 
}) => {
  return (
    <div className={`bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 opacity-0 animate-fade-in ${delay}`}>
      <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="text-primary font-medium flex items-center hover:underline cursor-pointer">
        Learn more
        <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
