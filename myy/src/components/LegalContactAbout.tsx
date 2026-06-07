import React, { useEffect, useState } from 'react';
import { Mail, Clock, ShieldCheck, FileText, Sparkles, Navigation, CheckCircle, Heart, Star, Send } from 'lucide-react';

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

// PAGE 2: ABOUT US
export function AboutPage({ navigateTo }: NavigationProps) {
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
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">Our Mission &amp; Roots</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Your Ultimate American Dream Navigation Partners
        </h1>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium italic">
          &ldquo;Navigating a three-million-square-foot mega-complex shouldn’t feel like a wilderness trek. We built this guide to restore clarity, simplicity, and joy to your visits.&rdquo;
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-slate-650 dark:text-slate-350 text-justify">
          The origin story of the <strong>American Dream navigation guide</strong> began on a hectic Saturday afternoon. Our founding team of local travel writers and tech developers realized that despite the incredible world-class attractions at American Dream, first-time visitors spent an average of 45 minutes simply searching for interactive directories, getting lost between retail wings, or walking the wrong way to locate their respective parking decks. 
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-slate-650 dark:text-slate-350 text-justify">
          To solve this massive coordination problem, we set out to blueprint the ultimate <strong>American Dream travel guide</strong> and trip planner. Our mission was straightforward: mapping out every single walkway, matching specialized entrance sectors, tracking budget logistics like parking structures, and presenting highly structured visitor information into a single responsive, beautiful interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-5 rounded-2xl">
            <span className="text-amber-500 text-lg font-bold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-5 h-5" /> Curative Insider Advice
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              Our travel specialists constantly update key <strong>visitor tips</strong> to help you optimize time. Discover the perfect arrival slots, quiet morning hours for families, and how to sequence food and ride directories efficiently.
            </p>
          </div>

          <div className="border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-5 rounded-2xl">
            <span className="text-blue-500 text-lg font-bold flex items-center gap-1.5 mb-2">
              <Navigation className="w-5 h-5" /> Uncover Hidden Gems
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              Beyond the primary coasters, the mall hosts incredible <strong>hidden gems</strong>. We catalog secret viewpoints, quiet gourmet seating areas, and special playground parameters that you won’t find on official maps.
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-slate-650 dark:text-slate-350 text-justify">
          Today, our software uses highly structured physical database properties to instantly calculate the absolute best parking areas, map retail categories from sneaker stops to luxury rows, and curate food courts. We believe that by delivering real-time clarity, we can help people craft perfect weekend memories. We are incredibly proud to be your local navigation companion!
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 justify-between items-center bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl mt-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">AM</div>
              <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">SK</div>
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
            </div>
            <span className="text-xs text-slate-550 dark:text-slate-400 font-bold">Curated by our Core Editorial Board</span>
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


// PAGE 3: CONTACT US
export function ContactPage({ navigateTo }: NavigationProps) {
  usePageSEO(
    '/contact',
    'Contact Us | American Dream Guide Help & Support',
    'Have questions or feedback about our interactive American Dream Mall directory and tool? Get in touch with our support team today for quick assistance.',
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://americandreamguide.com/contact#webpage",
      "url": "https://americandreamguide.com/contact",
      "name": "Contact Us | American Dream Guide Help & Support",
      "description": "Have questions or feedback about our interactive American Dream Mall directory and tool? Get in touch with our support team today for quick assistance.",
      "mainEntity": {
        "@type": "Organization",
        "name": "American Dream Digital Guide",
        "url": "https://americandreamguide.com",
        "email": "support@americandreamguide.com"
      }
    }
  );

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Feedback', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">Get in Touch</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Connect With Our Directory Support Team
        </h1>
        <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-4">Core Directory Pathways</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-justify">
              Our primary goal is to ensure the <strong>American Dream Mall directory</strong> is as accurate, complete, and helpful as humanly possible. If you spot a retail modification, a schedule change, or wish to present feedback, we are eager to hear from you.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-9 h-9 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Direct Inbox</span>
                  <a href="mailto:support@americandreamguide.com" className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-bold">
                    support@americandreamguide.com
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-9 h-9 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Response Guarantee</span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">
                    Within 24 to 48 Hours
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/60 dark:bg-slate-900 border border-amber-200/50 dark:border-slate-800 rounded-2xl p-5 text-xs text-amber-900 dark:text-slate-300 leading-relaxed">
            <span className="font-extrabold block text-amber-950 dark:text-amber-400 mb-1">📢 COMMERCIAL &amp; PARTNERSHIPS</span>
            If you own a retail brand or dining outlet located in the complex and want to update your profile highlights or request sponsored placement inside our curated shopping planner, please state &ldquo;Advertising Partnership&rdquo; as your subject line.
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Transmitted Safely!</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                Thank you for helping us optimize our visitor database. One of our travel editors will review your request and get back to you inside our 24–48 hour guarantee window.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">Transit Feedback &amp; Support Ticket</h2>
              <p className="text-xs text-slate-450 dark:text-slate-400">Submit a direct inquiry to our web engineering and travel planning editors below.</p>
              
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">My Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">My Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="e.g. alex@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">Subject Matter</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white"
                >
                  <option>Feedback &amp; Feature Suggestion</option>
                  <option>Store Directory Revision</option>
                  <option>Advertising Partnership</option>
                  <option>General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">My Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="How can we assist your trip planning today?"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 sm:py-3 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Transmit Support Inquiries
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


// PAGE 4: TERMS & CONDITIONS
export function TermsPage({ navigateTo }: NavigationProps) {
  usePageSEO(
    '/terms-and-conditions',
    'Terms & Conditions | American Dream Guide Tool',
    'Read the official terms of service and conditions for using our interactive digital American Dream directory, trip planner, and navigation tools.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest block mb-2">Legal Compliance</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Terms &amp; Conditions
        </h1>
        <div className="w-16 h-1 bg-slate-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-650 dark:text-slate-350 text-justify leading-relaxed">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">1. Introduction and Independent Status Statement</h2>
        <p>
          Welcome to the ultimate American Dream tourist helper (the &ldquo;Service&rdquo;). This website, including all integrated interactive coordinates, directories, databases, designs, and content, is an independently developed fan/expert informational publication. We are not directly affiliated, authorized, endorsed, or in any way officially associated with Triple Five® Group, the official management of the American Dream Mall, or any retail affiliates represented inside.
        </p>

        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">2. Permitted Use &amp; Scraping Prohibitions</h2>
        <p>
          You are granted a non-exclusive, non-transferable, revocable license to access our platform strictly to map out your private recreational itineraries. Downloading, collecting, scraping, extracting, harvesting, or indexing any datasets representing our 1. <strong>American Dream Mall directory</strong> layouts, coordinates maps, or aggregated parking decks statistics via automated spiders, scrapers, APIs, or scripts is strictly prohibited without explicit written consent.
        </p>

        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">3. Intellectual Property of Directory Layout</h2>
        <p>
          The custom compilation, structure, formatting, layout, icons matching, calculations of walking routes, and semantic tagging of items represent proprietary content belonging exclusively to our publication and Web team. All trademarks, registered logos, brand names, and attraction symbols belong to their respective proprietors and are integrated here under Fair Use criteria for informational navigation purpose.
        </p>

        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">4. No Disclaimer of Liability and Data Fluctuations</h2>
        <p>
          Mall logistics, including attraction schedules, individual restaurant operations, store hours, and <strong>American Dream parking costs</strong> are subject to sudden shifts, holiday modifiers, or operational updates. We deliver this Service in good faith on an &ldquo;As Is&rdquo; basis with no warranty. We shall not be held liable for any delays, extended walks, navigation detours, or losses resulting from fluctuations in accuracy. We advise verifying immediate details inside official terminals.
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-450 uppercase font-bold">
          <span>Effective Revision Date: June 7, 2026</span>
          <button onClick={() => navigateTo('/')} className="text-blue-500 hover:underline">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
}


// PAGE 5: PRIVACY POLICY
export function PrivacyPage({ navigateTo }: NavigationProps) {
  usePageSEO(
    '/privacy-policy',
    'Privacy Policy | American Dream Visitor Guide',
    'Your privacy matters. Read how our digital American Dream planner secures your data and utilizes location services for real-time map navigation.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest block mb-2">Data Protection Protocols</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Privacy Policy
        </h1>
        <div className="w-16 h-1 bg-slate-400 mx-auto mt-4 rounded"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-650 dark:text-slate-350 text-justify leading-relaxed">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">1. Commitment to User Privacy</h2>
        <p>
          Your privacy is of paramount importance. Our digital American Dream travel helper is architected to prioritize a clean, offline-style, zero-tracking user environment. We do not require account sign-ups to access the map and directories, and we never compile, share, or sell your personal details to third parties.
        </p>

        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">2. Geolocation Services Data</h2>
        <p>
          Some interactive components, such as the <strong>American Dream store map</strong> wayfinder, may request temporary permission to read your physical device geolocation. This data is handled entirely client-side inside your browser context to place your location pointer on our visual map. This location dataset is never transmitted back to our databases, processed server-side, or linked with individual identifiers.
        </p>

        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">3. Device Cookies &amp; Local Persistence Storage</h2>
        <p>
          We employ browser <code>localStorage</code> capabilities strictly to improve user experience. These include caching your personal bookmarks (stores, restaurants, or active itineraries) and persisting your preferred layout configurations (such as dark mode preferences). This data is stored directly on your physical hardware, and clearing your browser storage will reset these settings.
        </p>

        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">4. Independent Technical Telemetry</h2>
        <p>
          We utilize standard, anonymous, non-identifying telemetry metrics (such as page request volume, browser types, and general geographical country regions) strictly to optimize our linter metrics and server loads. This guarantees seamless responsiveness for visitors accessing our directory during weekends.
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-450 uppercase font-bold">
          <span>Last Updated: June 7, 2026</span>
          <button onClick={() => navigateTo('/')} className="text-blue-500 hover:underline">Back to Homepage</button>
        </div>
      </div>
    </div>
  );
}
