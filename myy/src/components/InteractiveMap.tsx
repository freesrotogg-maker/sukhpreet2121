import React, { useState } from 'react';
import { Map, MapPin, Compass, ShieldAlert, CheckCircle, Info } from 'lucide-react';
import { Store, Restaurant, Attraction } from '../types';

interface InteractiveMapProps {
  stores: Store[];
  restaurants: Restaurant[];
  attractions: Attraction[];
  onSelectStore: (id: string) => void;
  onSelectRestaurant: (id: string) => void;
  onSelectAttraction: (id: string) => void;
}

export default function InteractiveMap({
  stores,
  restaurants,
  attractions,
  onSelectStore,
  onSelectRestaurant,
  onSelectAttraction,
}: InteractiveMapProps) {
  const [selectedZone, setSelectedZone] = useState<string | null>('Court-G');

  // Zones representation
  const zones = [
    {
      id: 'The-Avenue',
      name: 'The Avenue (Luxury Wing)',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
      fill: '#D1FAE5',
      stroke: '#059669',
      coordinates: 'M 20 20 L 180 20 L 180 120 L 20 120 Z',
      textX: 100,
      textY: 70,
      description: 'Home to Hermès, Gucci, Tiffany & Co. and adjacent to DreamWorks Waterpark & Sea Life.',
      parks: ['dreamworks-water-park', 'aquarium', 'big-snow'],
      luxuryStores: ['hermes', 'gucci', 'tiffany-co'],
    },
    {
      id: 'Court-C',
      name: 'Central Retail Hub (Court C & D)',
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
      fill: '#DBEAFE',
      stroke: '#2563EB',
      coordinates: 'M 200 20 L 380 20 L 380 220 L 200 220 Z',
      textX: 290,
      textY: 120,
      description: 'The heartbeat of fashion shopping. Located adjacent to Food Court, Zara, Sephora and Lululemon.',
      parks: [],
      luxuryStores: ['zara', 'sephora', 'lululemon', 'apple-store'],
    },
    {
      id: 'Court-G',
      name: 'Entertainment District (Court G)',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100',
      fill: '#E0E7FF',
      stroke: '#4F46E5',
      coordinates: 'M 400 20 L 580 20 L 580 320 L 400 320 Z',
      textX: 490,
      textY: 170,
      description: 'Massive excitement region housing Nickelodeon Universe, the Toys\"R\"Us flagship, and IT\'SUGAR.',
      parks: ['nickelodeon-universe', 'mini-golf'],
      luxuryStores: ['toys-r-us', 'lego-store'],
    },
  ];

  const activeZoneInfo = zones.find((z) => z.id === selectedZone);

  // Content matching
  const matchingStores = stores.filter((s) => activeZoneInfo?.luxuryStores.includes(s.id));
  const matchingAttractions = attractions.filter((a) => activeZoneInfo?.parks.includes(a.id));
  const matchingRestaurants = restaurants.filter((r) => r.location.includes(selectedZone === 'The-Avenue' ? 'The Avenue' : selectedZone === 'Court-C' ? 'Court' : 'Court G') || activeZoneInfo?.luxuryStores.includes(r.id) || activeZoneInfo?.parks.includes(r.id));

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" id="interactive-map-header">
        <div>
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">Navigation Helper</span>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-6 h-6 text-slate-800" />
            Interactive Smart Map
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Tap on any section of the American Dream floorplan blueprint to find local directories and fast walkways.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <Info className="w-4 h-4 text-slate-400" />
          <span>Interactive zones link directly to guides and parking garages</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SVG Map Section */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-lg aspect-[600/350] bg-slate-50 rounded-xl p-4 border border-slate-200 overflow-hidden shadow-inner">
            <svg viewBox="0 0 600 350" className="w-full h-full select-none">
              {/* Outer Boundary */}
              <rect x="5" y="5" width="590" height="340" rx="10" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 4" />
              
              {/* Background Guide / Grid */}
              <line x1="200" y1="5" x2="200" y2="345" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="400" y1="5" x2="400" y2="345" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Garage Overlays */}
              <rect x="25" y="140" width="130" height="60" rx="4" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
              <text x="90" y="175" textAnchor="middle" fill="#64748B" className="text-[10px] font-bold tracking-wider">PREMIUM GARAGE A</text>

              <rect x="225" y="240" width="130" height="60" rx="4" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
              <text x="290" y="275" textAnchor="middle" fill="#64748B" className="text-[10px] font-bold tracking-wider">CENTRAL GARAGE B</text>

              <rect x="425" y="250" width="130" height="60" rx="4" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
              <text x="490" y="285" textAnchor="middle" fill="#64748B" className="text-[10px] font-bold tracking-wider">FAMILY GARAGE C</text>

              {/* Zones */}
              {zones.map((zone) => (
                <path
                  key={zone.id}
                  d={zone.coordinates}
                  fill={selectedZone === zone.id ? zone.fill : '#FFFFFF'}
                  stroke={selectedZone === zone.id ? zone.stroke : '#CBD5E1'}
                  strokeWidth={selectedZone === zone.id ? '3' : '1.5'}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setSelectedZone(zone.id)}
                />
              ))}

              {/* Labels on Map */}
              {zones.map((zone) => (
                <g key={`lbl-${zone.id}`} className="pointer-events-none">
                  <rect
                    x={zone.textX - 70}
                    y={zone.textY - 15}
                    width="140"
                    height="30"
                    rx="4"
                    fill="white"
                    fillOpacity="0.9"
                    stroke={selectedZone === zone.id ? zone.stroke : '#E2E8F0'}
                    strokeWidth="1"
                  />
                  <text
                    x={zone.textX}
                    y={zone.textY + 4}
                    textAnchor="middle"
                    fill={selectedZone === zone.id ? '#0F172A' : '#475569'}
                    className="text-[10px] font-bold"
                  >
                    {zone.name.split(' (')[0]}
                  </text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded border border-slate-200 text-[10px] text-slate-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse"></span>
              Level 1 & 2 Blueprint Layout
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setSelectedZone(z.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  selectedZone === z.id
                    ? 'bg-slate-900 text-white border-slate-950 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
                id={`zone-btn-${z.id}`}
              >
                {z.name.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Detail Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex-1">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              {activeZoneInfo?.name}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {activeZoneInfo?.description}
            </p>

            {/* Attractions Section inside zone */}
            {matchingAttractions.length > 0 && (
              <div className="mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Connected Attractions</span>
                <div className="flex flex-col gap-2">
                  {matchingAttractions.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => onSelectAttraction(a.id)}
                      className="cursor-pointer bg-white border border-slate-200 rounded-lg p-2.5 hover:border-blue-500 hover:shadow-xs transition-all flex items-center justify-between"
                    >
                      <span className="text-xs font-semibold text-slate-800">{a.name}</span>
                      <span className="text-[10px] text-blue-600 font-medium hover:underline">View Ticket info &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Premium Stores in Zone */}
            {matchingStores.length > 0 && (
              <div className="mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Featured Stores & Boutiques</span>
                <div className="grid grid-cols-2 gap-2">
                  {matchingStores.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => onSelectStore(s.id)}
                      className="cursor-pointer bg-white border border-slate-200 rounded-lg p-2 text-center hover:border-emerald-500 hover:shadow-xs transition-all"
                    >
                      <span className="text-lg block mb-0.5">{s.logo}</span>
                      <span className="text-xs font-medium text-slate-800 line-clamp-1">{s.name.replace(' American Dream', '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Cuisine & Dining in Zone */}
            {matchingRestaurants.length > 0 && (
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Nearby Cuisine</span>
                <div className="flex flex-wrap gap-1.5">
                  {matchingRestaurants.map((r) => (
                    <span
                      key={r.id}
                      onClick={() => onSelectRestaurant(r.id)}
                      className="cursor-pointer bg-white hover:bg-slate-100 hover:border-slate-300 transition-all border border-slate-200 px-2 py-1 rounded text-xs text-slate-700 font-medium"
                    >
                      🍜 {r.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 bg-slate-900 text-slate-200 rounded-xl p-4 text-xs border border-slate-950">
            <h4 className="font-semibold text-white mb-1 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
              <ShieldAlert className="w-4 h-4 text-yellow-400" />
              Visitor Pro Tip
            </h4>
            <p className="text-slate-300 leading-normal">
              {selectedZone === 'The-Avenue'
                ? 'VIP Valet parking is located on Level 1, Garage A. It puts you exactly inside this zone in under 45 seconds.'
                : selectedZone === 'Court-C'
                ? 'Park in Garage B level 2 to exit directly onto the main clothing corridors.'
                : 'For theme parks and Toys"R"Us, use Garage C level 1 to skip elevators.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
