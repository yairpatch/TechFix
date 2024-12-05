import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationMapProps {
  address: string;
  directions: string;
  mapUrl: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ address, directions, mapUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold">{directions}</h3>
      </div>
      <p className="mb-4 text-gray-600">{address}</p>
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Business Location"
        />
      </div>
    </div>
  );
};