import React from 'react';
import { Monitor, Wrench, Cpu } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Monitor className="w-8 h-8 text-blue-600" />
        <Wrench className="w-4 h-4 text-blue-400 absolute -bottom-1 -right-1" />
        <Cpu className="w-4 h-4 text-blue-800 absolute -top-1 -right-1" />
      </div>
      <span className="font-bold text-xl text-gray-800">TechFix</span>
    </div>
  );
};