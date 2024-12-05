import { useState } from 'react';
import { Monitor, Shield, Truck } from 'lucide-react';
import { LanguageSwitch } from './components/LanguageSwitch';
import { ServiceCard } from './components/ServiceCard';
import { LocationMap } from './components/LocationMap';
import { Hero } from './components/Hero';
import { ContactCard } from './components/ContactCard';
import { translations } from './data/translations';
import { Language } from './types/language';

function App() {
  const [language, setLanguage] = useState<Language>('he');
  const t = translations[language];

  // Replace this URL with your new location's embed URL from Google Maps
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.6621034848386!2d34.770232423898555!3d31.615717342424322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502915df637230d%3A0xc6525e27e9182320!2z16nXk9eo15XXqiDXnNeb15nXqSA1Niwg16fXqNeZ16og15LXqg!5e0!3m2!1siw!2sil!4v1733403910718!5m2!1siw!2sil";

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative"
      dir={t.direction}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-end items-center pt-4">
          <LanguageSwitch currentLang={language} onLanguageChange={setLanguage} />
        </div>
        
        <div className="pt-16">
          <Hero 
            title={t.title}
            subtitle={t.subtitle}
            expertService={t.expertService}
            yearsExperience={t.yearsExperience}
          />

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">{t.services}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ServiceCard 
                icon={Monitor} 
                title={t.computerRepair}
                description={t.computerRepairDesc}
              />
              <ServiceCard 
                icon={Shield} 
                title={t.virusRemoval}
                description={t.virusRemovalDesc}
              />
              <ServiceCard 
                icon={Truck} 
                title={t.pickupService}
                description={t.pickupServiceDesc}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            <div className="h-full flex items-stretch">
              <ContactCard 
                callNow={t.callNow}
                available247={t.available247}
              />
            </div>
            <div className="h-full">
              <LocationMap 
                directions={t.findUs}
                address={t.address}
                mapUrl={mapUrl}
              />
            </div>
          </div>

          <footer className="text-center py-4 text-gray-600 text-sm">
            <div>{t.createdBy}</div>
            <div>{t.allRightsReserved}</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;