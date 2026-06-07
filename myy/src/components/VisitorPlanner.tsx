import React, { useState } from 'react';
import { Compass, Sparkles, Clock, CheckCircle2, ChevronRight, Bookmark, ArrowRight, UserCheck, HelpCircle } from 'lucide-react';
import { Itinerary, ShoppingGuide, Store, Restaurant, Attraction } from '../types';

interface VisitorPlannerProps {
  itineraries: Itinerary[];
  guides: ShoppingGuide[];
  stores: Store[];
  restaurants: Restaurant[];
  attractions: Attraction[];
  onSelectStore: (id: string) => void;
  onSelectRestaurant: (id: string) => void;
  onSelectAttraction: (id: string) => void;
  bookmarkedStoreIds: string[];
  bookmarkedRestaurantIds: string[];
  onToggleStoreBookmark: (id: string) => void;
  onToggleRestaurantBookmark: (id: string) => void;
}

export default function VisitorPlanner({
  itineraries,
  guides,
  stores,
  restaurants,
  attractions,
  onSelectStore,
  onSelectRestaurant,
  onSelectAttraction,
  bookmarkedStoreIds,
  bookmarkedRestaurantIds,
  onToggleStoreBookmark,
  onToggleRestaurantBookmark,
}: VisitorPlannerProps) {
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>('3-hour-itinerary');
  const [activeGuideCategory, setActiveGuideCategory] = useState<string>('Kids');

  const activeItinerary = itineraries.find((i) => i.id === selectedItineraryId);
  const filteredGuides = guides.filter((g) => g.category === activeGuideCategory || activeGuideCategory === 'All');

  // Convert locationId & type to descriptive labels and actions
  const renderStepLink = (step: any) => {
    if (!step.locationId || !step.type) return null;

    let name = '';
    let action = () => {};

    if (step.type === 'store') {
      const match = stores.find((s) => s.id === step.locationId);
      name = match ? match.name : 'Store';
      action = () => onSelectStore(step.locationId);
    } else if (step.type === 'restaurant') {
      const match = restaurants.find((r) => r.id === step.locationId);
      name = match ? match.name : 'Restaurant';
      action = () => onSelectRestaurant(step.locationId);
    } else if (step.type === 'attraction') {
      const match = attractions.find((a) => a.id === step.locationId);
      name = match ? match.name : 'Attraction';
      action = () => onSelectAttraction(step.locationId);
    }

    return (
      <button
        onClick={action}
        className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-center gap-1 bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-105 dark:border-blue-900/40 transition-all self-start cursor-pointer"
      >
        🔎 Inspect details for {name.split(' American')[0]} &rarr;
      </button>
    );
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Itineraries Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-200 animate-fade-in">
        <div id="itinerary-header" className="mb-6">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">Time Optimization Templates</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
            <Compass className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
            Curated Visitor Trip Planners
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
            Whether arriving for a hyper-focused 3-hour shopping streak or planning a full 10-hour weekend family holiday, follow our optimized routes designed by local travel agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* List of itineraries left */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {itineraries.map((itinerary) => (
              <button
                key={itinerary.id}
                onClick={() => setSelectedItineraryId(itinerary.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedItineraryId === itinerary.id
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                id={`itinerary-card-${itinerary.id}`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase ${
                    selectedItineraryId === itinerary.id ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-750 text-slate-800 dark:text-slate-300'
                  }`}>
                    {itinerary.duration}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm">{itinerary.title}</h4>
                <p className={`text-[11px] mt-1.5 line-clamp-2 ${
                  selectedItineraryId === itinerary.id ? 'text-slate-300 dark:text-slate-700' : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {itinerary.description}
                </p>
              </button>
            ))}

            <div className="mt-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-250 dark:border-slate-800 rounded-xl p-4 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                All itineraries automatically match walking directions, specific nearest parking garages, and casual family dining places.
              </span>
            </div>
          </div>

          {/* Detailed timeline right */}
          <div className="lg:col-span-8 bg-slate-50/55 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 sm:p-6">
            {activeItinerary && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6 gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">{activeItinerary.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-slate-450 dark:text-slate-500" />
                      Audience: <strong className="text-slate-700 dark:text-slate-300">{activeItinerary.targetAudience}</strong>
                    </p>
                  </div>
                  <span className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold leading-none self-start sm:self-center shrink-0">
                    ⏱️ Total: {activeItinerary.duration}
                  </span>
                </div>

                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-5 sm:pl-6 space-y-6 sm:space-y-8">
                  {activeItinerary.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Circle Dot Marker */}
                      <span className="absolute -left-[29px] sm:-left-[31px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-900 dark:bg-slate-100 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-xs">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white dark:bg-slate-900"></span>
                      </span>

                      <div>
                        <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono">
                          {step.time}
                        </span>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm mt-0.5 leading-snug">{step.activity}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">{step.description}</p>
                        
                        {renderStepLink(step)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Shopping Guides Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden transition-colors duration-200 animate-fade-in">
        <div id="shopping-guide-header" className="mb-6">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">Curation Experts</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
            <Sparkles className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
            Specialized Brand Shopping Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
            Skip the massive directories and zoom right into the top stores inside American Dream based on specialized shopping requirements.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
          {['Kids', 'Luxury', 'Sneaker'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveGuideCategory(cat)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeGuideCategory === cat
                  ? 'bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-b-2 border-blue-600 dark:border-blue-500 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-amber-500'
              }`}
            >
              🧩 {cat === 'Kids' ? 'For Kids' : cat === 'Luxury' ? 'Elite Luxury' : 'Sportswear & Sneakers'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="border border-slate-150 dark:border-slate-800 rounded-xl p-4 sm:p-5 hover:shadow-md transition-all bg-slate-50/20 dark:bg-slate-900/40 flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50/50 dark:bg-blue-950/25 px-2.5 py-1 rounded-full inline-block mb-3">
                  {guide.category === 'Kids' ? 'Family Guides' : guide.category === 'Luxury' ? 'Luxury Elite' : 'Fitness Enthusiast'}
                </span>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base mb-2 leading-snug">{guide.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{guide.description}</p>

                {/* Stores linked list */}
                <div className="space-y-2 mb-4">
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Featured Locations</span>
                  {stores
                    .filter((s) => guide.featuredStoreIds.includes(s.id))
                    .map((s) => (
                      <div
                        key={s.id}
                        onClick={() => onSelectStore(s.id)}
                        className="cursor-pointer bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 p-2 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-205 flex items-center justify-between"
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="shrink-0">{s.logo}</span>
                          <span className="truncate">{s.name.split(' American')[0]}</span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 bg-amber-50/30 dark:bg-amber-950/10 p-3 rounded-lg text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed border border-amber-100/50 dark:border-amber-900/20">
                <strong>Insider Advice:</strong> {guide.insiderTips}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
