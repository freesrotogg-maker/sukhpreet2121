import React, { useEffect } from 'react';
import { Sparkles, Navigation } from 'lucide-react';

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

export default function About({ navigateTo }: NavigationProps) {
  usePageSEO(
    '/about',
    'About Us | The Team Behind the Ultimate American Dream Guide',
    'Meet the travel experts and developers building the smartest American Dream navigation guide. Learn how we simplify your shopping and entertainment trip.',
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://americandreamguide.com/about#webpage",
          "url": "https://americandreamguide.com/about",
          "name": "About Us | The Team Behind the Ultimate American Dream Guide",
          "description": "Meet the travel experts and developers building the smartest American Dream navigation guide. Learn how we simplify your shopping and entertainment trip.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://americandreamguide.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://americandreamguide.com/about"
              }
            ]
          }
        },
        {
          "@type": "Organization",
          "@id": "https://americandreamguide.com/#organization",
          "name": "American Dream Digital Guide",
          "url": "https://americandreamguide.com",
          "email": "support@americandreamguide.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://americandreamguide.com/assets/favicon.png"
          }
        }
      ]
    }
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-blue-600 block mb-2 dark:text-blue-400 font-mono tracking-widest uppercase">Our Mission &amp; Roots</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Your Ultimate American Dream Navigation Partners
        </h1>
        <div className="w-16 h-1 bg-blue-605 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium italic">
          &ldquo;Navigating a three-million-square-foot mega-complex shouldn’t feel like a wilderness trek. We built this guide to restore clarity, simplicity, and joy to your visits.&rdquo;
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 text-justify">
          The origin story of the <strong>American Dream navigation guide</strong> began on a hectic Saturday afternoon. Our founding team of local travel writers and tech developers realized that despite the incredible world-class attractions at American Dream, first-time visitors spent an average of 45 minutes simply searching for interactive directories, getting lost between retail wings, or walking the wrong way to locate their respective parking decks. 
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 text-justify">
          To solve this massive coordination problem, we set out to blueprint the ultimate <strong>American Dream travel guide</strong> and trip planner. Our mission was straightforward: mapping out every single walkway, matching specialized entrance sectors, tracking budget logistics like parking structures, and presenting highly structured visitor information into a single responsive, beautiful interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-5 rounded-2xl">
            <span className="text-amber-500 text-lg font-bold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-5 h-5 animate-pulse" /> Curative Insider Advice
            </span>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
              Our travel specialists constantly update key <strong>visitor tips</strong> to help you optimize time. Discover the perfect arrival slots, quiet morning hours for families, and how to sequence food and ride directories efficiently.
            </p>
          </div>

          <div className="border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-5 rounded-2xl">
            <span className="text-blue-500 text-lg font-bold flex items-center gap-1.5 mb-2">
              <Navigation className="w-5 h-5" /> Uncover Hidden Gems
            </span>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
              Beyond the primary coasters, the mall hosts incredible <strong>hidden gems</strong>. We catalog secret viewpoints, quiet gourmet seating areas, and special playground parameters that you won’t find on official maps.
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 text-justify">
          Today, our software uses highly structured physical database properties to instantly calculate the absolute best parking areas, map retail categories from sneaker stops to luxury rows, and curate food courts. We believe that by delivering real-time clarity, we can help people craft perfect weekend memories. We are incredibly proud to be your local navigation companion!
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 justify-between items-center bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl mt-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">AM</div>
              <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">SK</div>
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Curated by our Core Editorial Board</span>
          </div>
          <button 
            onClick={() => navigateTo('/')}
            className="px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
          >
            Launch Interactive Planner
          </button>
        </div>
      </div>
    </div>
  );
}
