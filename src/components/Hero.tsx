import React from 'react';
import { Wrench } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  title: string;
  subtitle: string;
  expertService: string;
  yearsExperience: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle,
  expertService,
  yearsExperience 
}) => {
  return (
    <div className="text-center mb-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 transform -skew-y-6"></div>
      </div>
      
      <div className="pt-8 pb-16">
        <Logo className="justify-center mb-12 transform hover:scale-105 transition-transform duration-300" />
        
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-3">15+</div>
              <div className="text-gray-700 font-medium">{yearsExperience}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-3">24/7</div>
              <div className="text-gray-700 font-medium">{expertService}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};