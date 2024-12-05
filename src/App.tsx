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

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.6621034848386!2d34.770232423898555!3d31.615717342424322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502915df637230d%3A0xc6525e27e9182320!2z16nXk9eo15XXqiDXnNeb15nXqSA1Niwg16fXqNeZ16og15LXqg!5e0!3m2!1siw!2sil!4v1733403910718!5m2!1siw!2sil";

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden"
      dir={t.direction}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center pt-6">
            <LanguageSwitch currentLang={language} onLanguageChange={setLanguage} />
          </div>
          
          <div className="pt-8">
            <Hero 
              title={t.title}
              subtitle={t.subtitle}
              expertService={t.expertService}
              yearsExperience={t.yearsExperience}
            />

            <section className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t.services}</h2>
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
            </section>

            <section className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <ContactCard 
                  callNow={t.callNow}
                  available247={t.available247}
                />
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <h3 className="text-2xl font-bold mb-2">{t.findUs}</h3>
                    <p>{t.address}</p>
                  </div>
                  <LocationMap 
                    mapUrl={mapUrl} 
                    address={t.address} 
                    directions="Get directions from Waze or Google Maps"
                  />
                </div>
              </div>
            </section>

            <footer className="text-center py-8 border-t border-gray-200">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-gray-600 mb-2">
                  {new Date().getFullYear()} TechFix. {t.allRightsReserved}
                </div>
                <div className="text-gray-500 text-sm">
                  {t.createdBy}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;