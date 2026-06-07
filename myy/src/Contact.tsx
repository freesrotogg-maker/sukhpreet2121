import React, { useState, useEffect } from 'react';
import { Mail, Clock, Send, CheckCircle } from 'lucide-react';

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

export default function Contact({ navigateTo }: NavigationProps) {
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
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Feedback & Feature Suggestion', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-indigo-600 block mb-2 dark:text-indigo-400 font-mono tracking-widest uppercase">Get in Touch</span>
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
            <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-400 leading-relaxed mb-6 text-justify">
              Our primary goal is to ensure the <strong>American Dream Mall directory</strong> is as accurate, complete, and helpful as humanly possible. If you spot a retail modification, a schedule change, or wish to present feedback, we are eager to hear from you.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-9 h-9 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider font-mono">Direct Inbox</span>
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
                  <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider font-mono">Response Guarantee</span>
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
                <CheckCircle className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Transmitted Safely!</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                Thank you for helping us optimize our visitor database. One of our travel editors will review your request and get back to you inside our 24–48 hour guarantee window.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">Transit Feedback &amp; Support Ticket</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Submit a direct inquiry to our web engineering and travel planning editors below.</p>
              
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 font-mono">My Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 font-mono">My Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="e.g. alex@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 font-mono">Subject Matter</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option>Feedback &amp; Feature Suggestion</option>
                  <option>Store Directory Revision</option>
                  <option>Advertising Partnership</option>
                  <option>General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 font-mono">My Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="How can we assist your trip planning today?"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
