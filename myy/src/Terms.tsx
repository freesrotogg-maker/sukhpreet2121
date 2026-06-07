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

export default function Terms({ navigateTo }: NavigationProps) {
  usePageSEO(
    '/terms-and-conditions',
    'Terms & Conditions | American Dream Guide Tool',
    'Read the official terms of service and conditions for using our interactive digital American Dream directory, trip planner, and navigation tools.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 dark:text-slate-400 font-mono">Legal Compliance</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Terms &amp; Conditions
        </h1>
        <div className="w-16 h-1 bg-slate-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justify leading-relaxed">
        <h2 className="text-base font-extrabold text-slate-950 dark:text-white">1. Introduction and Independent Status Statement</h2>
        <p>
          Welcome to the ultimate American Dream tourist helper (the &ldquo;Service&rdquo;). This website, including all integrated interactive coordinates, directories, databases, designs, and content, is an independently developed fan/expert informational publication. We are not directly affiliated, authorized, endorsed, or in any way officially associated with Triple Five® Group, the official management of the American Dream Mall, or any retail affiliates represented inside.
        </p>

        <h2 className="text-base font-extrabold text-slate-955 dark:text-white">2. Permitted Use &amp; Scraping Prohibitions</h2>
        <p>
          You are granted a non-exclusive, non-transferable, revocable license to access our platform strictly to map out your private recreational itineraries. Downloading, collecting, scraping, extracting, harvesting, or indexing any datasets representing our 1. <strong>American Dream Mall directory</strong> layouts, coordinates maps, or aggregated parking decks statistics via automated spiders, scrapers, APIs, or scripts is strictly prohibited without explicit written consent.
        </p>

        <h2 className="text-base font-extrabold text-slate-955 dark:text-white">3. Intellectual Property of Directory Layout</h2>
        <p>
          The custom compilation, structure, formatting, layout, icons matching, calculations of walking routes, and semantic tagging of items represent proprietary content belonging exclusively to our publication and Web team. All trademarks, registered logos, brand names, and attraction symbols belong to their respective proprietors and are integrated here under Fair Use criteria for informational navigation purpose.
        </p>

        <h2 className="text-base font-extrabold text-slate-955 dark:text-white">4. No Disclaimer of Liability and Data Fluctuations</h2>
        <p>
          Mall logistics, including attraction schedules, individual restaurant operations, store hours, and <strong>American Dream parking costs</strong> are subject to sudden shifts, holiday modifiers, or operational updates. We deliver this Service in good faith on an &ldquo;As Is&rdquo; basis with no warranty. We shall not be held liable for any delays, extended walks, navigation detours, or losses resulting from fluctuations in accuracy. We advise verifying immediate details inside official terminals.
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-500 uppercase font-bold font-mono">
          <span>Effective Revision Date: June 7, 2026</span>
          <button onClick={() => navigateTo('/')} className="text-blue-500 hover:underline cursor-pointer">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
}
