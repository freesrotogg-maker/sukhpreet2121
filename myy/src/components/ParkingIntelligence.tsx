import React, { useState } from 'react';
import { Compass, ShieldAlert, Check, XCircle, ArrowRight, Car, Clock } from 'lucide-react';
import { Garage } from '../types';

interface ParkingIntelligenceProps {
  garages: Garage[];
}

export default function ParkingIntelligence({ garages }: ParkingIntelligenceProps) {
  const [selectedDestination, setSelectedDestination] = useState<string>('Nickelodeon Universe');
  const [selectedGarageId, setSelectedGarageId] = useState<string>('garage-c');

  // Destination Options with best garage and walking description
  const destinations = [
    { name: 'Nickelodeon Universe', bestGarageId: 'garage-c', walkingTime: '1 min walk' },
    { name: 'DreamWorks Water Park', bestGarageId: 'garage-a', walkingTime: '3 mins walk' },
    { name: 'BIG SNOW Skiing', bestGarageId: 'garage-a', walkingTime: '2 mins walk' },
    { name: 'The Avenue Luxury (Hermès/Gucci)', bestGarageId: 'garage-a', walkingTime: '1 min walk' },
    { name: 'Zara & Sephora', bestGarageId: 'garage-b', walkingTime: '1 min walk' },
    { name: 'Level 3 Food Court', bestGarageId: 'garage-b', walkingTime: '3 mins walk' },
    { name: 'Toys"R"Us / Lego Store', bestGarageId: 'garage-c', walkingTime: '2 mins walk' },
    { name: 'SEA LIFE Aquarium', bestGarageId: 'garage-a', walkingTime: '2 mins walk' },
  ];

  const matchedBest = destinations.find((d) => d.name === selectedDestination);
  const matchedGarage = garages.find((g) => g.id === matchedBest?.bestGarageId);

  // Quick select garage profile
  const activeGarageProfile = garages.find((g) => g.id === selectedGarageId);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-200 animate-fade-in">
      <div id="parking-header" className="mb-6">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">Transit Optimization</span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
          <Car className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
          American Dream Parking Intelligence (AI Advisor)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
          With thousands of spaces spanning different corners of the massive complex, choosing the wrong garage can lead to a 15-minute detour. Use our real-time smart garage calculator to align parking exactly with your plans.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Advisor Calculator */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
              <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin-slow animate-pulse" />
              Dynamic Route Calculator
            </h3>
            <p className="text-xs text-slate-550 dark:text-slate-400 mb-6">
              Where is your primary destination or first stop today?
            </p>

            <label className="block text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 font-mono">My First Destination</label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all shadow-3xs cursor-pointer"
            >
              {destinations.map((d) => (
                <option key={d.name} value={d.name} className="dark:bg-slate-900">
                  🎯 {d.name}
                </option>
              ))}
            </select>

            {matchedGarage && (
              <div className="mt-6 bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-700 shadow-3xs rounded-xl p-4">
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Check className="w-4 h-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 rounded-full p-0.5" /> Calculated Ultimate Park Match
                </span>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{matchedGarage.name}</h4>
                
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Est. Transit: <strong className="text-slate-800 dark:text-slate-200 font-bold">{matchedBest?.walkingTime}</strong></span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-450">
                    Status: <span className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold text-[9px]">EASY INGRESS</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 bg-blue-50/60 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300 border border-blue-100/50 dark:border-blue-905/30 rounded-xl p-4 text-xs leading-relaxed">
            <span className="font-bold flex items-center gap-1 mb-0.5 text-blue-900 dark:text-blue-400 uppercase text-[10px] tracking-wider">
              💡 VIP Valet Hack
            </span>
            Valet parking is exclusive to <strong className="text-blue-950 dark:text-white font-black">Garage A Level 1</strong>. If you are visiting Hermès, Gucci, Saint Laurent, or if you prefer a high-class, hassle-free entry, select Garage A.
          </div>
        </div>

        {/* Detailed Garage Profiles */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Explore Garage Profiles</span>
            <div className="flex-1 h-px bg-slate-150 dark:bg-slate-800"></div>
          </div>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 whitespace-nowrap scrollbar-none">
            {garages.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGarageId(g.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl border whitespace-nowrap transition-all cursor-pointer ${
                  selectedGarageId === g.id
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-sm font-bold'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-750 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
                id={`garage-tab-${g.id}`}
              >
                🛞 {g.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {activeGarageProfile && (
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-3xs bg-slate-50/50 dark:bg-slate-900/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 border-b border-slate-150 dark:border-slate-800 pb-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{activeGarageProfile.name}</h4>
                <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider self-start sm:self-center shrink-0 border ${
                  activeGarageProfile.capacityLevel === 'Low'
                    ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
                    : activeGarageProfile.capacityLevel === 'Moderate'
                    ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-450 border-amber-100 dark:border-amber-900/30'
                    : 'bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-450 border-rose-100 dark:border-rose-900/30'
                }`}>
                  Weekend Crowds: {activeGarageProfile.capacityLevel}
                </span>
              </div>

              {/* Best For Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {activeGarageProfile.bestForTags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-705 text-slate-700 dark:text-slate-200 text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-4xs"
                  >
                     {tag}
                  </span>
                ))}
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                  <span className="text-[9px] sm:text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2 font-mono">Advantages</span>
                  <ul className="space-y-1.5">
                    {activeGarageProfile.advantages.map((adv, idx) => (
                      <li key={idx} className="text-xs text-slate-650 dark:text-slate-300 flex items-start gap-1.5 leading-snug">
                        <span className="text-emerald-500 font-extrabold text-sm leading-none mt-0.5">&bull;</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                  <span className="text-[9px] sm:text-[10px] font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest block mb-2 font-mono">Disadvantages</span>
                  <ul className="space-y-1.5">
                    {activeGarageProfile.disadvantages.map((dis, idx) => (
                      <li key={idx} className="text-xs text-slate-650 dark:text-slate-300 flex items-start gap-1.5 leading-snug">
                        <span className="text-rose-400 font-extrabold text-sm leading-none mt-0.5">&bull;</span>
                        <span>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Walking Times Grid */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-4">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">Walk Estimates From This Garage</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(activeGarageProfile.walkingTimes).map(([dest, time]) => (
                    <div key={dest} className="border border-slate-100 dark:border-slate-800 p-2 rounded-lg bg-slate-50/20 dark:bg-slate-850/40 text-center">
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 block truncate">{dest}</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-blue-500" /> {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs border-l-2 border-slate-800 dark:border-slate-200 pl-3 italic text-slate-650 dark:text-slate-350 leading-relaxed bg-white dark:bg-slate-850 p-3 rounded-r-lg border border-transparent dark:border-slate-800">
                <strong>Navigator Insider Advice:</strong> {activeGarageProfile.parkingTips}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
