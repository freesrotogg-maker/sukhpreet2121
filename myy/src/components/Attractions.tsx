import React, { useState } from 'react';
import { Compass, Ticket, Clock, Star, HelpCircle, Utensils, ShoppingBag, ShieldAlert, Heart } from 'lucide-react';
import { Attraction, Store, Restaurant } from '../types';

interface AttractionsProps {
  attractions: Attraction[];
  stores: Store[];
  restaurants: Restaurant[];
  onSelectStore: (id: string) => void;
  onSelectRestaurant: (id: string) => void;
  onSelectAttraction: (id: string) => void;
}

export default function Attractions({
  attractions,
  stores,
  restaurants,
  onSelectStore,
  onSelectRestaurant,
  onSelectAttraction,
}: AttractionsProps) {
  const [selectedAttractionId, setSelectedAttractionId] = useState<string>('nickelodeon-universe');

  const activeAttraction = attractions.find((a) => a.id === selectedAttractionId);

  // Match nearby
  const matchingStores = stores.filter((s) => activeAttraction?.nearbyStoreIds.includes(s.id));
  const matchingRestaurants = restaurants.filter((r) => activeAttraction?.nearbyRestaurantIds.includes(r.id));

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-200">
      <div id="attractions-header" className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">Entertainment Anchor</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
            <Ticket className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
            World-Record Entertainment & Theme Parks
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
            American Dream hosts the world's largest record-breaking indoor water parks, roller coasters, and ski slopes.
          </p>
        </div>
      </div>

      {/* Selector Tabs wrapper */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-8 overflow-x-auto whitespace-nowrap scrollbar-none">
        {attractions.map((a) => (
          <button
            key={a.id}
            onClick={() => {
              setSelectedAttractionId(a.id);
              onSelectAttraction(a.id);
            }}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 text-xs font-semibold rounded-xl border whitespace-nowrap transition-all cursor-pointer ${
              selectedAttractionId === a.id
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-sm font-bold'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            🍿 {a.name}
          </button>
        ))}
      </div>

      {activeAttraction && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Main left content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Layout Header without Image */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest inline-block mb-2">
                    Mega Anchor Highlight
                  </span>
                  <h3 className="font-black text-slate-900 dark:text-white text-lg sm:text-2xl leading-tight">{activeAttraction.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-800 dark:text-slate-200 font-extrabold px-2.5 py-1.5 rounded-xl self-start sm:self-center shrink-0 shadow-3xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> {activeAttraction.rating} <span className="text-slate-405 dark:text-slate-500 font-mono text-[10px]">({activeAttraction.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 tracking-wider uppercase text-[11px] font-mono">
                Overview & Description
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeAttraction.description}
              </p>
            </div>

            {/* General FAQs */}
            {activeAttraction.faq && activeAttraction.faq.length > 0 && (
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 mb-4 tracking-wider uppercase text-[11px] flex items-center gap-1 font-mono">
                  <HelpCircle className="w-4 h-4 text-blue-500" /> Frequently Asked Questions
                </h4>
                <div className="space-y-4">
                  {activeAttraction.faq.map((fq, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                      <h5 className="font-bold text-xs text-slate-900 dark:text-white">Q: {fq.question}</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{fq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Logistics right panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6 max-h-[calc(100vh-8rem)] lg:overflow-y-auto scrollbar-none">
            {/* Quick logistics */}
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl space-y-4">
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm tracking-wider uppercase font-mono">Vitals & Hours</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xs">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-400 dark:text-slate-400 block text-[10px]">Hours Today</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{activeAttraction.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <Ticket className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-400 dark:text-slate-400 block text-[10px]">Ticket Specs</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 leading-tight block">{activeAttraction.ticketInfo}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <Heart className="w-4 h-4 text-rose-500 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-400 dark:text-slate-400 block text-[10px]">Age Guideline</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] leading-tight block">{activeAttraction.ageRecommendation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart parking advice */}
            <div className="bg-slate-900 dark:bg-slate-950 text-slate-200 dark:text-slate-200 border border-slate-950 dark:border-slate-900 rounded-2xl p-5">
              <h5 className="text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-1 mb-2 font-mono">
                <ShieldAlert className="w-4 h-4 text-yellow-400" /> Parking Smart Hack
              </h5>
              <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed mb-3">
                {activeAttraction.parkingAdvice}
              </p>
            </div>

            {/* Connected Stores Nearby */}
            {matchingStores.length > 0 && (
              <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4 rounded-xl space-y-3">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block flex items-center gap-1 font-mono">
                  <ShoppingBag className="w-3.5 h-3.5" /> Shopping Steps Away
                </span>
                <div className="space-y-1.5 animate-fade-in">
                  {matchingStores.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => onSelectStore(s.id)}
                      className="cursor-pointer bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg p-2 flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{s.name.split(' American')[0]}</span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Inside detail &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Connected Dining Nearby */}
            {matchingRestaurants.length > 0 && (
              <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4 rounded-xl space-y-3">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block flex items-center gap-1 font-mono">
                  <Utensils className="w-3.5 h-3.5" /> Dine Steps Away
                </span>
                <div className="space-y-1.5 animate-fade-in">
                  {matchingRestaurants.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => onSelectRestaurant(r.id)}
                      className="cursor-pointer bg-slate-50 dark:bg-slate-800 border border-slate-250 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg p-2 flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{r.name}</span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Inside menu &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
