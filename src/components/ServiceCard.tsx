import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-purple-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative">
        <div className="bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-indigo-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};