import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Star,
  MapPin,
  Sun,
  Moon,
  Phone,
  Clock,
  Globe,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Sparkles,
  Heart,
  Store as StoreIcon,
  Tag,
  HelpCircle,
  Hash,
  Filter,
  CheckCircle,
  Car,
  Compass,
  Network,
  ArrowRight,
  Bookmark,
  BookmarkPlus,
  Utensils,
  Ticket
} from 'lucide-react';
import { 
  STORES_DATA as RAW_STORES_DATA, 
  PARKING_DATA, 
  ATTRACTIONS_DATA as RAW_ATTRACTIONS_DATA,
  ParkingNode
} from './data';
import { Store, Restaurant, Attraction } from './types';

// @ts-ignore
import appLogo from './assets/images/app_icon_1780824446809.png';

// Import child directory components
import StoreDirectory from './components/StoreDirectory';
import RestaurantDirectory from './components/RestaurantDirectory';
import Attractions from './components/Attractions';
import SEOArticle from './components/SEOArticle';
import { AboutPage, ContactPage, TermsPage, PrivacyPage } from './components/LegalContactAbout';
import { NotFoundPage, ServerErrorPage } from './components/ErrorPages';

// Helper to assign icons/emojis based on category or name
const getLogoForCategory = (category: string, id: string = ''): string => {
  const c = category.toLowerCase();
  const i = id.toLowerCase();
  if (i.includes('apple')) return '🍎';
  if (i.includes('nike')) return '✔️';
  if (i.includes('adidas')) return '👟';
  if (i.includes('lego')) return '🧱';
  if (i.includes('starbucks')) return '☕';
  if (i.includes('cinnabon')) return '🥮';
  if (i.includes('pretzel')) return '🥨';
  if (i.includes('vitamin')) return '💊';
  
  if (c.includes('apparel') || c.includes('fashion') || c.includes('clothing')) return '👔';
  if (c.includes('footwear') || c.includes('shoes')) return '👟';
  if (c.includes('sportswear') || c.includes('outdoor')) return '🏂';
  if (c.includes('kids') || c.includes('toy')) return '🧸';
  if (c.includes('beauty') || c.includes('wellness') || c.includes('cosmetics')) return '💄';
  if (c.includes('jewelry') || c.includes('gift')) return '💎';
  if (c.includes('electronics') || c.includes('tech')) return '💻';
  if (c.includes('food') || c.includes('dining') || c.includes('restaurant')) return '🍽️';
  if (c.includes('entertainment') || c.includes('cinema') || c.includes('parks')) return '🍿';
  if (c.includes('home') || c.includes('decor')) return '🛋️';
  return '🏬';
};

// -------------------------------------------------------------
// UNIFORM ROAD BLOCK FIX: MAPPER TO CAMELCASE FRONTEND PROTOCOLS
// -------------------------------------------------------------
const RAW_STORES = RAW_STORES_DATA || [];

// Conforms RAW_STORES database arrays into highly compliant Store interfaces
export const STORES_DATA: Store[] = RAW_STORES
  .filter((x: any) => x.category !== 'Food' && x.category !== 'Entertainment')
  .map((st: any): Store => {
    return {
      id: st.id,
      name: st.store_name || st.name || 'Store',
      description: st.description || `Explore ${st.store_name || st.name || 'the store'} inside our American Dream shopping directory.`,
      category: st.category || 'Retail',
      logo: getLogoForCategory(st.category || '', st.id),
      rating: parseFloat(st.google_rating || st.rating || '4.3'),
      reviewCount: parseInt(st.review_count || st.reviews || '45'),
      location: st.floor_zone || `${st.floor_str || 'Level 1'}, ${st.zone || 'Court A'}`,
      nearestParking: st.nearest_parking || st.primary_parking_id || 'Deck A',
      popularProducts: st.popular_products || st.products || [],
      
      // Keep backwards compatibility properties for other files and crawler FAQ segments
      store_name: st.store_name || st.name || 'Store',
      floor: st.floor || 1,
      zone_id: st.zone_id || 'court_a',
      seo_intro: st.seo_intro || `Crawl segment for flagship ${st.store_name || st.name}.`,
      faqs: (st.faqs || st.faq || []).map((faq_item: any) => ({
        q: faq_item.question || faq_item.q || '',
        a: faq_item.answer || faq_item.a || ''
      })),
      hours: st.hours || st.opening_hours || '11:00 AM - 9:00 PM',
      phone: st.phone || 'N/A',
      nearestEntrance: st.nearest_entrance || 'Entrance A',
      heroImage: st.heroImage || `https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=600`,
      website: st.website || st.official_website || 'https://www.americandream.com',
      whyVisit: st.whyVisit || `Unique collections and premium layouts.`,
      shoppingTips: st.shoppingTips || ['Plan your visit during weekday mornings for optimized mall walks.'],
      gallery: st.gallery || [],
      relatedStoreIds: st.relatedStoreIds || [],
      nearbyRestaurantIds: st.nearbyRestaurantIds || [],
      nearbyAttractionIds: st.nearbyAttractionIds || []
    };
  });

// Conforms RAW_STORES database arrays into highly compliant Restaurant interfaces
export const RESTAURANTS_DATA: Restaurant[] = RAW_STORES
  .filter((x: any) => x.category === 'Food')
  .map((st: any): Restaurant => {
    const cuisine = st.subcategory || 'Specialty Dining';
    const sub = cuisine.toLowerCase();
    const name = st.store_name || st.name || 'Restaurant';
    let ratingCategory: 'Casual' | 'Fine Dining' | 'Sweet Treats' | 'Quick Bite' = 'Casual';
    if (sub.includes('fine') || sub.includes('steakhouse') || sub.includes('seafood') || sub.includes('bistro')) {
      ratingCategory = 'Fine Dining';
    } else if (sub.includes('snack') || sub.includes('cookie') || sub.includes('pretzel') || sub.includes('ice cream') || sub.includes('candy') || sub.includes('sweet') || sub.includes('boba')) {
      ratingCategory = 'Sweet Treats';
    } else if (sub.includes('quick-service') || sub.includes('fast food') || sub.includes('burger') || sub.includes('chicken') || sub.includes('express')) {
      ratingCategory = 'Quick Bite';
    }

    return {
      id: st.id,
      name,
      description: st.description || `Delight in spectacular culinary highlights from ${name} inside American Dream corridor.`,
      cuisine,
      logo: getLogoForCategory('Food', st.id),
      rating: parseFloat(st.google_rating || st.rating || '4.2'),
      reviewCount: parseInt(st.review_count || st.reviews || '54'),
      location: st.floor_zone || `${st.floor_str || 'Level 1'}, ${st.zone || 'Court A'}`,
      nearestParking: st.nearest_parking || st.primary_parking_id || 'Deck A',
      priceRange: st.budget_level || '$$',
      features: ['Dine-In Available', 'Express Takeout', 'Authentic Menu options'],
      
      ratingCategory,
      isFamilyFriendly: st.isFamilyFriendly !== undefined ? st.isFamilyFriendly : true,
      bestDishes: st.popular_products || st.products || ['Signature Dish'],
      hours: st.hours || st.opening_hours || '11:00 AM - 9:00 PM',
      phone: st.phone || 'N/A',
      nearestEntrance: st.nearest_entrance || 'Entrance A',
      website: st.website || st.official_website || 'https://www.americandream.com',
      nearbyStoreIds: st.nearbyStoreIds || [],
      nearbyAttractionIds: st.nearbyAttractionIds || [],
      gallery: st.gallery || [],
      visitorTips: st.visitorTips || ['A wonderful dining break on your mall exploration.']
    };
  });

// Conforms RAW_STORES & RAW_ATTRACTIONS database arrays into highly compliant Attraction interfaces
const mappedEntertainmentAnchors = RAW_STORES
  .filter((x: any) => x.category === 'Entertainment')
  .map((st: any): Attraction => {
    return {
      id: st.id,
      name: st.store_name || st.name || 'Entertainment Attraction',
      description: st.description || `Thrill in world-record-breaking recreation inside the major American Dream campus.`,
      type: st.subcategory || 'Theme Park',
      logo: getLogoForCategory('Entertainment', st.id),
      rating: parseFloat(st.google_rating || st.rating || '4.5'),
      reviewCount: parseInt(st.review_count || st.reviews || '1205'),
      location: st.floor_zone || `${st.floor_str || 'Level 1'}, ${st.zone || 'Court A'}`,
      nearestParking: st.nearest_parking || st.primary_parking_id || 'Deck A',
      ticketRequired: true,
      waitTime: 20,
      
      hours: st.hours || st.opening_hours || '11:00 AM - 8:00 PM',
      ticketInfo: 'Passes and single entries are sold both online and at physical counters.',
      visitorTips: ['Wear athletic shoes and plan your route beforehand.', 'Group tickets offers are available on holidays.'],
      ageRecommendation: 'All families and thrill enthusiasts welcome.',
      parkingAdvice: `Select ${st.nearest_parking || 'Deck A'} corridor for elevator entrances.`,
      nearbyRestaurantIds: [],
      nearbyStoreIds: [],
      faq: (st.faqs || st.faq || []).map((faq_item: any) => ({
        question: faq_item.question || faq_item.q || '',
        answer: faq_item.answer || faq_item.a || ''
      })),
      gallery: st.gallery || [],
      heroImage: st.heroImage || `https://images.unsplash.com/photo-1513885016102-39a04517af3a?w=800`
    };
  });

const parsedEntertainmentIds = new Set(mappedEntertainmentAnchors.map(a => a.id));
const originalAttractions = (RAW_ATTRACTIONS_DATA || []).map((at: any): Attraction => {
  return {
    id: at.attraction_id,
    name: at.attraction_name || 'Attraction Theme Park',
    description: at.description || 'Record-breaking entertainment anchor with immense fun zones.',
    type: at.target_audience || 'Universal Fun Anchor',
    logo: getLogoForCategory('Entertainment', at.attraction_id),
    rating: 4.6,
    reviewCount: 3410,
    location: at.location || `Level ${at.floor || 1}, ${at.zone_id ? at.zone_id.replace('_', ' ').replace(/\b\w/g, (l: any) => l.toUpperCase()) : 'Court A'}`,
    nearestParking: at.nearest_parking || 'Deck A',
    ticketRequired: true,
    waitTime: 25,
    
    hours: at.hours || '11:00 AM - 8:00 PM',
    ticketInfo: 'All-day riding passes and combo passes sold on official platforms.',
    visitorTips: ['Arrive early on weekends to dodge large ticket queues.', 'Locker units are situated near main gates.'],
    ageRecommendation: at.target_audience || 'Perfect for all ages.',
    parkingAdvice: 'Parking decks provide quick access lanes.',
    nearbyRestaurantIds: [],
    nearbyStoreIds: [],
    faq: [],
    gallery: [],
    heroImage: at.heroImage || `https://images.unsplash.com/photo-1513885016102-39a04517af3a?w=800`
  };
});

export const ATTRACTIONS_DATA: Attraction[] = [
  ...mappedEntertainmentAnchors,
  ...originalAttractions.filter(o => !parsedEntertainmentIds.has(o.id))
];

export default function App() {
  // -------------------------------------------------------------
  // SYSTEM STATE MANAGEMENT & REQUISITE ROOT TRACKERS
  // -------------------------------------------------------------
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('adm_dark_mode');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('adm_dark_mode', darkMode ? 'true' : 'false');
    } catch (e) {
      // Ignored
    }
  }, [darkMode]);

  const [activeTab, setActiveTab] = useState<'stores' | 'restaurants' | 'attractions' | 'saved'>('stores');
  
  // Multi-page routing integration
  const getPathFromLocation = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    if (path && path !== '/') return path;
    const hash = window.location.hash;
    if (hash.startsWith('#/')) return hash.slice(1);
    if (hash.startsWith('#')) return hash.slice(1);
    return '/';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPathFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPathFromLocation());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      // Fallback update hash for seamless SPA nested navigation inside iFrames
      window.location.hash = '#' + path;
      setCurrentPage(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // Persistence Bookmarks State
  const [bookmarkedStoreIds, setBookmarkedStoreIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('adm_bookmarked_stores');
      return saved ? JSON.parse(saved) : ['apple', 'adidas', 'abercrombie-fitch'];
    } catch {
      return ['apple', 'adidas', 'abercrombie-fitch'];
    }
  });

  const [bookmarkedRestaurantIds, setBookmarkedRestaurantIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('adm_bookmarked_restaurants');
      return saved ? JSON.parse(saved) : ['gourmet-pretzels', 'sinnabon-baker'];
    } catch {
      return ['gourmet-pretzels', 'sinnabon-baker'];
    }
  });

  // Programmatic SEO expanded FAQ states for crawler carpet
  const [expandedSeoStore, setExpandedSeoStore] = useState<string | null>(null);
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: string]: boolean }>({});

  // -------------------------------------------------------------
  // SYSTEM HANDLERS & CALLBACK PROPS
  // -------------------------------------------------------------
  const handleSelectStore = (id: string) => {
    setSelectedItemId(id);
  };

  const handleSelectRestaurant = (id: string) => {
    setSelectedItemId(id);
  };

  const handleSelectAttraction = (id: string) => {
    setSelectedItemId(id);
  };

  const handleToggleStoreBookmark = (id: string) => {
    if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.vibrate === 'function') {
      window.navigator.vibrate(40);
    }
    setBookmarkedStoreIds(prev => {
      const updated = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('adm_bookmarked_stores', JSON.stringify(updated));
      } catch (_) {}
      return updated;
    });
  };

  const handleToggleRestaurantBookmark = (id: string) => {
    if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.vibrate === 'function') {
      window.navigator.vibrate(40);
    }
    setBookmarkedRestaurantIds(prev => {
      const updated = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('adm_bookmarked_restaurants', JSON.stringify(updated));
      } catch (_) {}
      return updated;
    });
  };

  // -------------------------------------------------------------
  // INTERACTIVE ALGORITHMIC CALCULATORS
  // -------------------------------------------------------------
  const savedStores = useMemo(() => {
    return STORES_DATA.filter(s => bookmarkedStoreIds.includes(s.id));
  }, [bookmarkedStoreIds]);

  const savedRestaurants = useMemo(() => {
    return RESTAURANTS_DATA.filter(r => bookmarkedRestaurantIds.includes(r.id));
  }, [bookmarkedRestaurantIds]);

  // Unified lookup for active detail modal inspect panels
  const activeInspectedItem = useMemo(() => {
    if (!selectedItemId) return null;
    const s = STORES_DATA.find(x => x.id === selectedItemId);
    if (s) return { type: 'store' as const, data: s };
    
    const r = RESTAURANTS_DATA.find(x => x.id === selectedItemId);
    if (r) return { type: 'restaurant' as const, data: r };
    
    const a = ATTRACTIONS_DATA.find(x => x.id === selectedItemId);
    if (a) return { type: 'attraction' as const, data: a };
    
    return null;
  }, [selectedItemId]);

  // Optimal parking recommend algorithm for saved bookmarks list
  const optimalSavedDecks = useMemo(() => {
    const decks = new Set<string>();
    savedStores.forEach(s => s.nearestParking && decks.add(s.nearestParking));
    savedRestaurants.forEach(r => r.nearestParking && decks.add(r.nearestParking));
    const list = Array.from(decks).map(d => d.replace('_', ' ').split(' (')[0].toUpperCase());
    return list.slice(0, 2);
  }, [savedStores, savedRestaurants]);

  // Live total analytics values
  const globalMetrics = useMemo(() => {
    const totalZones = Array.from(new Set(STORES_DATA.map(st => st.zone_id))).length;
    const totalDecks = PARKING_DATA.length;
    const totalAttractions = ATTRACTIONS_DATA.length;
    const referencedPaths = STORES_DATA.length * 3;

    return {
      totalRetailers: STORES_DATA.length,
      activeMappingNodes: totalZones + totalDecks + totalAttractions,
      crossReferencedPaths: referencedPaths
    };
  }, []);

  const handleResetFilters = () => {
    setSearchQuery('');
  };

  const toggleFaq = (storeId: string, index: number) => {
    const key = `${storeId}-${index}`;
    setExpandedFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSeoStoreSegment = (id: string) => {
    setExpandedSeoStore(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans flex flex-col antialiased pb-24 sm:pb-0 transition-colors duration-200">
      
      {/* 1. Global Navigation Bar & Responsive Action Menus */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand/Identity block */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none group"
            onClick={() => navigateTo('/')}
          >
            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center shadow-md border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
              <img 
                src={appLogo} 
                alt="American Dream Geometric Circular Logo Icon" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-base leading-tight tracking-tight uppercase group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                American Dream
              </h1>
              <span className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest block leading-none">
                Navigator &bull; Intel Hub
              </span>
            </div>
          </div>

          {/* Premium responsive navbar layout tabs */}
          <div className="flex items-center gap-2">
            <nav className="hidden sm:flex items-center gap-1">
              {[
                { id: 'stores', label: 'Stores', icon: StoreIcon },
                { id: 'restaurants', label: 'Cuisine', icon: Utensils },
                { id: 'attractions', label: 'Parks', icon: Ticket },
                { id: 'saved', label: 'Bookmarks', icon: Bookmark }
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = currentPage === '/' && activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      navigateTo('/');
                      setActiveTab(tab.id as any);
                      handleResetFilters();
                    }}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    id={`nav-tab-${tab.id}`}
                  >
                    <TabIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden md:inline">{tab.label}</span>
                    {tab.id === 'saved' && (bookmarkedStoreIds.length + bookmarkedRestaurantIds.length > 0) && (
                      <span className="bg-rose-500 text-white font-black text-[9px] px-1.5 rounded-full">
                        {bookmarkedStoreIds.length + bookmarkedRestaurantIds.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <span className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

            {/* Crawlable MPA Header Internal Links (E-E-A-T and Link Equity distribution) */}
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/about');
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all leading-tight ${
                  currentPage === '/about'
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Meet the team behind our American Dream guide"
              >
                About Us
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/contact');
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all leading-tight ${
                  currentPage === '/contact'
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Get support or make updates regarding our American Dream Mall directory"
              >
                Contact
              </a>
            </nav>

            <span className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block" />

            {/* Dark Mode Toggle Switch (Accessible & Beautiful) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all cursor-pointer flex items-center justify-center shadow-xs"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-650" />}
            </button>
          </div>

        </div>
      </header>

      {/* 3. Search & Interactive Section (Only rendering when on home path and not viewing Saved Bookmarks) */}
      {currentPage === '/' && activeTab !== 'saved' && (
        <section className="relative bg-white dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden shrink-0 transition-colors duration-200">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-[10px] font-extrabold tracking-wider uppercase rounded-full border border-blue-100 dark:border-blue-900/40 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" /> Wayfinding Schema Algorithm Integrated
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-none tracking-tight mb-3">
              American Dream Mall <br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Directory &amp; Navigation Platform
              </span>
            </h2>


          </div>
        </section>
      )}

      {/* 4. Unified Active Directory Grid Render */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full transition-all duration-300">
        
        {/* MPA Subpages (E-E-A-T Core Compliance) */}
        {currentPage === '/about' && (
          <AboutPage navigateTo={navigateTo} />
        )}

        {currentPage === '/contact' && (
          <ContactPage navigateTo={navigateTo} />
        )}

        {currentPage === '/terms-and-conditions' && (
          <TermsPage navigateTo={navigateTo} />
        )}

        {currentPage === '/privacy-policy' && (
          <PrivacyPage navigateTo={navigateTo} />
        )}

        {currentPage === '/500' && (
          <ServerErrorPage navigateTo={navigateTo} />
        )}

        {!['/', '/about', '/contact', '/terms-and-conditions', '/privacy-policy', '/500'].includes(currentPage) && (
          <NotFoundPage navigateTo={navigateTo} />
        )}

        {/* Homepage Core Navigation Tool Route */}
        {currentPage === '/' && (
          <>
            {/* TAB 1: STORES */}
            {activeTab === 'stores' && (
          <div className="animate-fade-in duration-300">
            <StoreDirectory 
              stores={STORES_DATA} 
              onSelectStore={handleSelectStore} 
              bookmarkedStoreIds={bookmarkedStoreIds} 
              onToggleStoreBookmark={handleToggleStoreBookmark} 
            />
          </div>
        )}

        {/* TAB 2: CUISINES / RESTAURANTS */}
        {activeTab === 'restaurants' && (
          <div className="animate-fade-in duration-300">
            <RestaurantDirectory 
              restaurants={RESTAURANTS_DATA} 
              onSelectRestaurant={handleSelectRestaurant} 
              bookmarkedRestaurantIds={bookmarkedRestaurantIds} 
              onToggleRestaurantBookmark={handleToggleRestaurantBookmark} 
            />
          </div>
        )}

        {/* TAB 3: PARKS & ATTRACTIONS */}
        {activeTab === 'attractions' && (
          <div className="animate-fade-in duration-300">
            <Attractions 
              attractions={ATTRACTIONS_DATA} 
              stores={STORES_DATA} 
              restaurants={RESTAURANTS_DATA} 
              onSelectStore={handleSelectStore} 
              onSelectRestaurant={handleSelectRestaurant} 
              onSelectAttraction={handleSelectAttraction} 
            />
          </div>
        )}

        {/* TAB 4: SAVED BOOKMARKS INTEGRATED MATRIX */}
        {activeTab === 'saved' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs animate-fade-in duration-350 transition-colors duration-200">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">Your Curated Selections</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Bookmark className="w-7 h-7 text-rose-500 fill-rose-500/10" /> Saved Directory Matrix
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
                  Evaluate parking corridors, floor proximity, and details for your bookmarked locations.
                </p>
              </div>
              
              <div className="flex gap-2 shrink-0">
                <span className="bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-200 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-slate-950 dark:border-slate-700 flex items-center gap-1.5">
                  🏬 {bookmarkedStoreIds.length} Brands
                </span>
                <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900/30 flex items-center gap-1.5">
                  🍔 {bookmarkedRestaurantIds.length} Dining
                </span>
              </div>
            </div>

            {/* Smart relational parking hack widget */}
            {(savedStores.length > 0 || savedRestaurants.length > 0) ? (
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200/80 dark:border-blue-900/40 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xl shadow-inner shrink-0 leading-none">
                    🅿️
                  </span>
                  <div>
                    <h4 className="font-extrabold text-blue-900 dark:text-blue-200 text-sm">Optimal Wayfinding Solution</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300 max-w-xl leading-relaxed mt-0.5">
                      Based on your saved profile nodes, we calculated the most recommended parking deck decks: <strong className="text-blue-900 dark:text-blue-100 font-extrabold">{optimalSavedDecks.join(' and ') || 'Deck A'}</strong>.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedItemId(savedStores[0]?.id || savedRestaurants[0]?.id || null)}
                  className="bg-blue-600 hover:bg-blue-705 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-extrabold text-xs px-4.5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  Inspect Saved Deck
                </button>
              </div>
            ) : null}

            {/* Matrix contents */}
            {savedStores.length === 0 && savedRestaurants.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl max-w-md mx-auto">
                <BookmarkPlus className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-705 dark:text-slate-200 text-base">Your saved matrix is empty</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto mt-1 leading-relaxed">
                  Go back to Stores, Dining, or Attractions tabs and bookmark nodes to automatically compile your target matrix.
                </p>
                <div className="mt-5 flex justify-center gap-2">
                  <button
                    onClick={() => setActiveTab('stores')}
                    className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    Select Stores
                  </button>
                  <button
                    onClick={() => setActiveTab('restaurants')}
                    className="bg-white dark:bg-slate-850 border dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    Select Dining
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bookmarked Brands Grid column */}
                <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                    🏬 Saved Stores &amp; Brands ({savedStores.length})
                  </h3>
                  {savedStores.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-500 italic p-3 text-center">No retail brand bookmarks saved.</p>
                  ) : (
                    <div className="space-y-3">
                      {savedStores.map(store => (
                        <div 
                          key={store.id}
                          onClick={() => handleSelectStore(store.id)}
                          className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-750 rounded-xl p-4 flex items-center justify-between gap-4 transition-all hover:shadow-2xs cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-lg shadow-inner group-hover:scale-105 transition-transform shrink-0">
                              {store.logo}
                            </span>
                            <div>
                              <h4 className="font-extrabold text-slate-900 dark:text-white text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">{store.name}</h4>
                              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold px-1.5 py-0.2 rounded uppercase">
                                  {store.category}
                                </span>
                                <span className="text-[10px] text-slate-405 dark:text-slate-300 font-mono">
                                  Level: {store.location.split(',')[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <button
                            onClick={(e) => { e.stopPropagation(); handleToggleStoreBookmark(store.id); }}
                            className="p-1 text-slate-400 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 rounded border border-slate-200 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/20 cursor-pointer"
                            title="Remove Store Bookmark"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bookmarked Cuisine Grid column */}
                <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                    🍽️ Saved Cuisine &amp; Dining ({savedRestaurants.length})
                  </h3>
                  {savedRestaurants.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-400 italic p-3 text-center">No restaurant/dining bookmarks saved.</p>
                  ) : (
                    <div className="space-y-3">
                      {savedRestaurants.map(res => (
                        <div 
                          key={res.id}
                          onClick={() => handleSelectRestaurant(res.id)}
                          className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-750 rounded-xl p-4 flex items-center justify-between gap-4 transition-all hover:shadow-2xs cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-lg shadow-inner group-hover:scale-105 transition-transform shrink-0">
                              {res.logo}
                            </span>
                            <div>
                              <h4 className="font-extrabold text-slate-900 dark:text-white text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">{res.name}</h4>
                              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                <span className="text-[9px] bg-amber-50 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30 font-extrabold px-1.5 py-0.2 rounded uppercase">
                                  {res.ratingCategory}
                                </span>
                                <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono">
                                  {res.cuisine}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <button
                            onClick={(e) => { e.stopPropagation(); handleToggleRestaurantBookmark(res.id); }}
                            className="p-1 text-slate-400 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 rounded border border-slate-200 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/20 cursor-pointer"
                            title="Remove Restaurant Bookmark"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        )}

          </>
        )}

      </main>
      
      {/* 4b. Authoritative Brand & Navigation Article (Root path only) */}
      {currentPage === '/' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full transition-all">
          <SEOArticle />
        </div>
      )}

      {/* 5. Unified Modal Profiler Detail View */}
      {activeInspectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedItemId(null)}
          id="item-profile-modal"
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-2xl w-full overflow-hidden flex flex-col hover:border-slate-200/90 dark:hover:border-slate-700/90 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Heading Header - Image removed */}
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 shrink-0 bg-slate-50 dark:bg-slate-950">
              <div className="flex items-center gap-3.5">
                <span className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-3xl font-black shadow-sm shrink-0">
                  {activeInspectedItem.data.logo}
                </span>
                <div>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest leading-none">
                    {activeInspectedItem.type.toUpperCase()} PROFILE
                  </span>
                  <h3 className="text-slate-900 dark:text-white font-black text-xl leading-tight mt-1.5">
                    {activeInspectedItem.data.name}
                  </h3>
                </div>
              </div>
              
              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedItemId(null)}
                className="bg-slate-200/60 dark:bg-slate-800 border border-slate-300/40 dark:border-slate-700 select-none cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 p-2 text-slate-500 dark:text-slate-400 rounded-full transition-all"
                id="modal-close-btn"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Contents description */}
            <div className="p-6 md:p-8 space-y-5 overflow-y-auto max-h-[50vh] scrollbar-thin">
              
              {/* Core summary metrics panel */}
              <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 transition-colors">
                <div className="text-center border-r border-slate-200 dark:border-slate-700">
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Review Rating</span>
                  <div className="flex items-center gap-1 justify-center mt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <strong className="text-xs font-black text-slate-800 dark:text-white">{activeInspectedItem.data.rating.toFixed(1)}</strong>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">({activeInspectedItem.data.reviewCount})</span>
                  </div>
                </div>

                <div className="text-center border-r border-slate-200 dark:border-slate-700">
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider font-bold">Physical location</span>
                  <strong className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight block mt-1">
                    {activeInspectedItem.data.location.split(',')[0]}
                  </strong>
                </div>

                <div className="text-center">
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Nearest Deck</span>
                  <strong className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-tight block mt-1 uppercase">
                    {activeInspectedItem.data.nearestParking.split(' (')[0]}
                  </strong>
                </div>
              </div>

              {/* Bio description text */}
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">About &amp; Overview</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {activeInspectedItem.data.description}
                </p>
              </div>

              {/* Highlight list */}
              {activeInspectedItem.type === 'store' && (activeInspectedItem.data as Store).popularProducts && (
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">Popular Flagship products</h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {(activeInspectedItem.data as Store).popularProducts.map((p, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700/80 px-2.5 py-1 rounded-xl text-[10px] shadow-3xs">
                        💎 {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeInspectedItem.type === 'restaurant' && (activeInspectedItem.data as Restaurant).bestDishes && (
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">Signature Best Dishes</h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {(activeInspectedItem.data as Restaurant).bestDishes?.map((d, idx) => (
                      <span key={idx} className="bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40 px-2.5 py-1 rounded-xl text-[10px] font-extrabold shadow-3xs">
                        🔥 {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Logistics tips */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>Verified Schedule: <strong className="text-slate-800 dark:text-slate-200">{(activeInspectedItem.data as any).hours || '11:00 AM - 9:00 PM'}</strong></span>
                </div>
                {activeInspectedItem.data.phone && activeInspectedItem.data.phone !== 'N/A' && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <span>Contact Line: <strong className="text-slate-800 dark:text-slate-200">{activeInspectedItem.data.phone}</strong></span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>Wayfinding: <strong className="text-slate-800 dark:text-slate-200">{activeInspectedItem.data.location}</strong></span>
                </div>
              </div>

            </div>

            {/* Modal Bottom control buttons */}
            <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-5 px-6 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
              <div className="text-[10px] text-slate-450 dark:text-slate-500 font-semibold font-mono">
                Relational ID: <strong className="font-bold text-slate-700 dark:text-slate-350">{activeInspectedItem.data.id.toUpperCase()}</strong>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Keep bookmark buttons sync inside modal */}
                {activeInspectedItem.type === 'store' ? (
                  <button
                    onClick={() => handleToggleStoreBookmark(activeInspectedItem.data.id)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-3xs flex items-center gap-1 text-rose-600 bg-white dark:bg-slate-800 border border-rose-100 dark:border-rose-950 hover:bg-rose-50 dark:hover:bg-rose-900/40 cursor-pointer"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarkedStoreIds.includes(activeInspectedItem.data.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{bookmarkedStoreIds.includes(activeInspectedItem.data.id) ? 'Saved' : 'Bookmark'}</span>
                  </button>
                ) : activeInspectedItem.type === 'restaurant' ? (
                  <button
                    onClick={() => handleToggleRestaurantBookmark(activeInspectedItem.data.id)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-3xs flex items-center gap-1 text-rose-600 bg-white dark:bg-slate-800 border border-rose-100 dark:border-rose-950 hover:bg-rose-50 dark:hover:bg-rose-900/40 cursor-pointer"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarkedRestaurantIds.includes(activeInspectedItem.data.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{bookmarkedRestaurantIds.includes(activeInspectedItem.data.id) ? 'Saved' : 'Bookmark'}</span>
                  </button>
                ) : null}

                <button
                  onClick={() => setSelectedItemId(null)}
                  className="px-4 py-2.5 bg-slate-900 dark:bg-slate-100 border border-slate-950 dark:border-slate-200 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-950 rounded-xl text-xs font-extrabold shadow-3xs transition-all cursor-pointer"
                >
                  Close Segment
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 6. Clean Minimal Global Footer (Crawlable MPA links to distribute link equity fluidly) */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
            {/* Branding Column / E-E-A-T Trust Builder */}
            <div className="md:col-span-6 space-y-3 text-center md:text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block leading-tight">
                AMERICAN DREAM NAVIGATION &amp; INTEL HUB
              </span>
              <p className="text-[11px] text-slate-500 leading-relaxed text-justify max-w-xl">
                This interactive visitor system is an independent database, fan guide, and custom trip planner. All trademark and copyright properties concerning Nickelodeon Universe, DreamWorks Water Park, or official retail stores belong exclusively to their respective owners.
              </p>
            </div>

            {/* Sitemap Routing Column to distribute link equity fluidly */}
            <div className="md:col-span-6 flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-3.5 text-xs font-semibold">
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
                className={`transition-colors hover:text-white ${currentPage === '/' ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="American Dream Trip Planner &amp; Interactive Map"
              >
                Home Tool
              </a>
              <a 
                href="/about" 
                onClick={(e) => { e.preventDefault(); navigateTo('/about'); }}
                className={`transition-colors hover:text-white ${currentPage === '/about' ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="Learn more about our travel editors"
              >
                About Us
              </a>
              <a 
                href="/contact" 
                onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
                className={`transition-colors hover:text-white ${currentPage === '/contact' ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="Get in touch with support"
              >
                Contact
              </a>
              <a 
                href="/terms-and-conditions" 
                onClick={(e) => { e.preventDefault(); navigateTo('/terms-and-conditions'); }}
                className={`transition-colors hover:text-white ${currentPage === '/terms-and-conditions' ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="Read terms and conditions"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy-policy" 
                onClick={(e) => { e.preventDefault(); navigateTo('/privacy-policy'); }}
                className={`transition-colors hover:text-white ${currentPage === '/privacy-policy' ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="Read privacy policies"
              >
                Privacy Policy
              </a>
              <span className="text-slate-800">|</span>
              <a 
                href="/404" 
                onClick={(e) => { e.preventDefault(); navigateTo('/404-error-test'); }}
                className={`transition-colors hover:text-white ${!['/', '/about', '/contact', '/terms-and-conditions', '/privacy-policy', '/500'].includes(currentPage) ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="Test 404 Error Page"
              >
                404 Error
              </a>
              <a 
                href="/500" 
                onClick={(e) => { e.preventDefault(); navigateTo('/500'); }}
                className={`transition-colors hover:text-white ${currentPage === '/500' ? 'text-white underline font-bold' : 'text-slate-400'}`}
                title="Test 500 Error Page"
              >
                500 Error
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-mono">
            <span className="uppercase tracking-widest text-[9px] text-center sm:text-left text-slate-500">
              &copy; 2026 American Dream Navigation and intelligence system.
            </span>
            <div className="flex gap-4">
              <span>Wayfinding Standard System v2.10</span>
              <span>All Rights Reserved</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 7. Mobile Sticky Bottom Tab Bar (Touch-friendly and highly tactile for phone overlays) */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-45 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2 shadow-xl flex items-center justify-around gap-1 transition-all duration-250">
        {[
          { id: 'stores', label: 'Stores', icon: StoreIcon },
          { id: 'restaurants', label: 'Cuisine', icon: Utensils },
          { id: 'attractions', label: 'Parks', icon: Ticket },
          { id: 'saved', label: 'Bookmarks', icon: Bookmark }
        ].map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                handleResetFilters();
                // Trigger tactile vibrator feedback if supported
                if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.vibrate === 'function') {
                  window.navigator.vibrate(30);
                }
              }}
              className={`flex-1 flex flex-col items-center justify-center gap-1 p-2 rounded-xl text-[10px] font-bold transition-all relative cursor-pointer ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/55 dark:bg-blue-900/20'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              id={`mobile-tab-${tab.id}`}
            >
              <TabIcon className="w-5 h-5 shrink-0 transition-transform duration-200" />
              <span>{tab.label}</span>
              {tab.id === 'saved' && (bookmarkedStoreIds.length + bookmarkedRestaurantIds.length > 0) && (
                <span className="absolute top-1.5 right-3.5 bg-rose-500 text-white font-bold text-[8px] h-4 w-4 flex items-center justify-center rounded-full border border-white dark:border-slate-950">
                  {bookmarkedStoreIds.length + bookmarkedRestaurantIds.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}
