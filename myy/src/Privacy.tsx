import React, { useEffect } from 'react';

interface NavigationProps {
  navigateTo: (path: string) => void;
}

// Custom hook to set document metadata for elite Technical SEO E-E-A-T compliance
function usePageSEO(path: string, title: string, description: string, schemaJson?: object) {
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

    // 4. Dynamic JSON-LD injection and teardown
    const existingScript = document.getElementById('dynamic-jsonld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaJson) {
      const script = document.createElement('script');
      script.id = 'dynamic-jsonld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaJson);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('dynamic-jsonld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [path, title, description, schemaJson]);
}

export default function Privacy({ navigateTo }: NavigationProps) {
  usePageSEO(
    '/privacy-policy',
    'Privacy Policy | American Dream Visitor Guide',
    'Your privacy matters. Read how our digital American Dream planner secures your data and utilizes location services for real-time map navigation.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest block mb-2 font-mono">Data Protection Protocols</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Privacy Policy
        </h1>
        <div className="w-16 h-1 bg-slate-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justify leading-relaxed">
        <h2 className="text-base font-extrabold text-slate-950 dark:text-white">1. Commitment to User Privacy</h2>
        <p>
          Your privacy is of paramount importance. Our digital American Dream travel helper is architected to prioritize a clean, offline-style, zero-tracking user environment. We do not require account sign-ups to access the map and directories, and we never compile, share, or sell your personal details to third parties.
        </p>

        <h2 className="text-base font-extrabold text-slate-950 dark:text-white">2. Geolocation Services Data</h2>
        <p>
          Some interactive components, such as the <strong>American Dream store map</strong> wayfinder, may request temporary permission to read your physical device geolocation. This data is handled entirely client-side inside your browser context to place your location pointer on our visual map. This location dataset is never transmitted back to our databases, processed server-side, or linked with individual identifiers.
        </p>

        <h2 className="text-base font-extrabold text-slate-950 dark:text-white">3. Device Cookies &amp; Local Persistence Storage</h2>
        <p>
          We employ browser <code>localStorage</code> capabilities strictly to improve user experience. These include caching your personal bookmarks (stores, restaurants, or active itineraries) and persisting your preferred layout configurations (such as dark mode preferences). This data is stored directly on your physical hardware, and clearing your browser storage will reset these settings.
        </p>

        <h2 className="text-base font-extrabold text-slate-950 dark:text-white">4. Independent Technical Telemetry</h2>
        <p>
          We utilize standard, anonymous, non-identifying telemetry metrics (such as page request volume, browser types, and general geographical country regions) strictly to optimize our linter metrics and server loads. This guarantees seamless responsiveness for visitors accessing our directory during weekends.
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-500 uppercase font-bold font-mono">
          <span>Last Updated: June 7, 2026</span>
          <button onClick={() => navigateTo('/')} className="text-blue-500 hover:underline cursor-pointer">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
}
