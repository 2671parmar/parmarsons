
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
    <div className={`bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 opacity-0 animate-fade-in ${delay}`}>
      <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{description}</p>
      <div className="text-primary text-sm sm:text-base font-medium flex items-center hover:underline cursor-pointer">
        Learn more
        <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
