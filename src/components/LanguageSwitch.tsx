import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface LanguageSwitchProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getFlagEmoji = (lang: Language) => {
    switch (lang) {
      case 'he':
        return '🇮🇱';
      case 'ru':
        return '🇷🇺';
      default:
        return '🌐';
    }
  };

  const handleLanguageClick = (lang: Language) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-4 right-4">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <Languages className="w-5 h-5 text-blue-600" />
          <span className="mr-2">{getFlagEmoji(currentLang)}</span>
          <span className="text-gray-700">{translations[currentLang].languageName}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
            {Object.entries(translations).map(([lang, trans]) => (
              <button
                key={lang}
                onClick={() => handleLanguageClick(lang as Language)}
                className={`
                  w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-blue-50 transition-colors duration-200
                  ${currentLang === lang ? 'bg-blue-50' : ''}
                `}
              >
                <span>{getFlagEmoji(lang as Language)}</span>
                <span className="text-gray-700">{trans.languageName}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};