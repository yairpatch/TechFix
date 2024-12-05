import React from 'react';
import { Phone } from 'lucide-react';

interface ContactCardProps {
  callNow: string;
  available247: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ callNow, available247 }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex items-center justify-center">
      <div className="flex flex-col items-center text-center w-full">
        <div className="bg-white/10 rounded-full p-4 mb-6">
          <Phone className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <a 
            href="tel:+058-4643886" 
            className="text-2xl md:text-3xl font-bold hover:underline break-words max-w-full"
          >
            {callNow}: 058-4643886
          </a>
          
          <div className="w-full border-t border-white/20 my-2"></div>
          
          <div className="flex flex-col">
            <span className="text-lg text-blue-100 mb-1">או התקשרו ל:</span>
            <a 
              href="tel:+053-4372323" 
              className="text-2xl md:text-3xl font-bold hover:underline break-words max-w-full"
            >
              053-4372323
            </a>
          </div>
        </div>
        <p className="text-blue-100 text-lg">{available247}</p>
      </div>
    </div>
  );
};