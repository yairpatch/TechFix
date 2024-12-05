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
    <div className="text-center mb-20">
      <Logo className="justify-center mb-8" />
      <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex justify-center gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
          <div className="text-gray-600">{yearsExperience}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">{expertService}</div>
        </div>
      </div>
    </div>
  );
};