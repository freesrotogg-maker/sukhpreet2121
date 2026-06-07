import React, { useEffect, useState } from 'react';
import { HelpCircle, AlertOctagon, CornerUpLeft, Search, RefreshCw, Navigation, HelpCircle as HelpIcon } from 'lucide-react';

interface ErrorProps {
  navigateTo: (path: string) => void;
  onSearchInputFocus?: () => void;
}

// Custom hook to set document metadata for Technical SEO E-E-A-T and Search engine status compliance
function usePageSEO(path: string, title: string, description: string) {
  useEffect(() => {
    // 1. Dynamic Head Title
    document.title = title;

    // 2. Self-Referencing Canonical Tag Update
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://americandreamguide.com${path}`);

    // 3. Dynamic Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [path, title, description]);
}

// PAGE 6: CUSTOM 404 PAGE (Page Not Found)
export function NotFoundPage({ navigateTo }: ErrorProps) {
  usePageSEO(
    '/404',
    'Page Not Found | American Dream Visitor Guide',
    'Oops! The page you are looking for at our American Dream navigation guide cannot be found. Search our interactive directory to get back on track.'
  );

  const [localSearch, setLocalSearch] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo('/');
  };

  return (
    <div id="custom-404-container" className="max-w-2xl mx-auto px-4 py-12 sm:py-20 text-center animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/20 text-rose-550 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-3xs border border-rose-100 dark:border-rose-900/30">
        <HelpCircle className="w-11 h-11" />
      </div>

      <span className="text-[10px] sm:text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block mb-2 font-mono">
        HTTP Status Error: 404 Not Found
      </span>
      <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
        Looks Like You Got Lost in the Mall!
      </h1>
      <div className="w-12 h-1 bg-rose-550 mx-auto mt-4 rounded mb-6"></div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed text-center max-w-lg mx-auto mb-8">
        With over three million square feet of world-record-breaking entertainment and retail spaces, getting turned around is incredibly easy—even online! The specific URL or guide segment you are looking for apparently doesn’t exist or has migrated to a more optimized directory path. Let’s make sure you don't take a 15-minute detour: explore our helpful fast utilities below to get back on track.
      </p>

      {/* SEO Utility Search bar */}
      <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto mb-10 relative">
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search stores, restaurants, or attractions..."
          className="w-full bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-2xl pl-4 pr-12 py-3 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-rose-550 dark:focus:border-rose-500 focus:ring-1 focus:ring-rose-50 dark:focus:ring-rose-900/10 transition-all shadow-3xs"
        />
        <button
          type="submit"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8.5 h-8.5 bg-rose-550 hover:bg-rose-600 rounded-xl flex items-center justify-center text-white cursor-pointer transition-all border-none"
          title="Search directory"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      {/* Quick Navigation Directory Link Equity */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-4xs text-left">
        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-4">
          Ultimate Quick Navigation Routes
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <button
            onClick={() => navigateTo('/')}
            className="flex flex-col items-start p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-850/60 rounded-xl border border-slate-150 dark:border-slate-800/60 text-left transition-all cursor-pointer"
          >
            <span className="text-xs font-extrabold text-slate-800 dark:text-white">Trip Planner &amp; Home</span>
            <span className="text-[10px] text-slate-550 dark:text-slate-400 mt-1">Configure your perfect customizable day itinerary.</span>
          </button>

          <button
            onClick={() => navigateTo('/')}
            className="flex flex-col items-start p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-850/60 rounded-xl border border-slate-150 dark:border-slate-800/60 text-left transition-all cursor-pointer"
          >
            <span className="text-xs font-extrabold text-slate-800 dark:text-white">Mall Directory</span>
            <span className="text-[10px] text-slate-550 dark:text-slate-400 mt-1">Browse and filter verified retail and shopping options.</span>
          </button>

          <button
            onClick={() => navigateTo('/')}
            className="flex flex-col items-start p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-850/60 rounded-xl border border-slate-150 dark:border-slate-800/60 text-left transition-all cursor-pointer"
          >
            <span className="text-xs font-extrabold text-slate-800 dark:text-white">Smart Parking Map</span>
            <span className="text-[10px] text-slate-550 dark:text-slate-400 mt-1">Review ultimate parking decks and cost structures.</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// PAGE 7: CUSTOM 500 PAGE (Internal Server Error)
export function ServerErrorPage({ navigateTo }: ErrorProps) {
  usePageSEO(
    '/500',
    'System Error | American Dream Guide Tool',
    'Our interactive American Dream directory tool is experiencing a temporary server error. We are fixing it right now—please try again shortly!'
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      navigateTo('/');
    }, 1200);
  };

  return (
    <div id="custom-500-container" className="max-w-2xl mx-auto px-4 py-12 sm:py-20 text-center animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="w-20 h-20 bg-amber-50 dark:bg-amber-950/20 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-3xs border border-amber-100 dark:border-amber-900/30">
        <AlertOctagon className="w-11 h-11" />
      </div>

      <span className="text-[10px] sm:text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-2 font-mono">
        HTTP Status Error: 500 Internal Server Error
      </span>
      <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
        Our Directory Tool is Taking a Quick Break
      </h1>
      <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded mb-6"></div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed text-center max-w-lg mx-auto mb-8">
        We apologize for the inconvenience. Our interactive American Dream directory and smart navigation helper is currently experiencing an unexpected traffic spike, a temporary gateway disruption, or a brief software maintenance check. Rest assured that our web architecture team is fixing this right now. Please refresh this page momentarily to restore full dynamic services.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-bold py-3 px-6 rounded-2xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-200"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Re-establishing Connection...' : 'Refresh Interactive Page'}
        </button>

        <button
          onClick={() => navigateTo('/contact')}
          className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-250 py-3 px-6 rounded-2xl text-xs sm:text-sm transition-all shadow-4xs border border-slate-200 dark:border-slate-800 cursor-pointer"
        >
          Contact Editorial Support
        </button>
      </div>

      <div className="mt-12 text-[10px] text-slate-400 dark:text-slate-650 tracking-wider uppercase font-mono">
        Wayfinding telemetry code sync: AD-958b // Server node: live-replicated
      </div>
    </div>
  );
}
