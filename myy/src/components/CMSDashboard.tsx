import React, { useState } from 'react';
import { Plus, Edit2, CheckCircle2, ShieldAlert, Code, Globe, Star, FileText, Trash2, Library, Save } from 'lucide-react';
import { Store, Restaurant, Attraction, Review } from '../types';

interface CMSDashboardProps {
  stores: Store[];
  restaurants: Restaurant[];
  attractions: Attraction[];
  reviews: Review[];
  onAddStore: (store: Store) => void;
  onAddRestaurant: (res: Restaurant) => void;
  onUpdateStore: (store: Store) => void;
  onUpdateRestaurant: (res: Restaurant) => void;
  onApproveReview: (id: string) => void;
  onDeleteReview: (id: string) => void;
}

export default function CMSDashboard({
  stores,
  restaurants,
  attractions,
  reviews,
  onAddStore,
  onAddRestaurant,
  onUpdateStore,
  onUpdateRestaurant,
  onApproveReview,
  onDeleteReview,
}: CMSDashboardProps) {
  const [activeSubTab, setActiveSubTab] = useState<'stores' | 'restaurants' | 'reviews' | 'seo-sitemap'>('stores');

  // Form states Store
  const [storeName, setStoreName] = useState('');
  const [storeCategory, setStoreCategory] = useState('Fashion');
  const [storeLocation, setStoreLocation] = useState('Level 2, Court C');
  const [storeHours, setStoreHours] = useState('11:00 AM - 9:00 PM');
  const [storeNearestParking, setStoreNearestParking] = useState('Garage B');
  const [storeDesc, setStoreDesc] = useState('');
  const [storeWhyVisit, setStoreWhyVisit] = useState('');

  // Form states Restaurant
  const [resName, setResName] = useState('');
  const [resCuisine, setResCuisine] = useState('American Fusion');
  const [resCategory, setResCategory] = useState<'Casual' | 'Fine Dining' | 'Sweet Treats' | 'Quick Bite'>('Casual');
  const [resPrice, setResPrice] = useState<'$' | '$$' | '$$$'>('$$');
  const [resHours, setResHours] = useState('11:00 AM - 10:00 PM');
  const [resLocation, setResLocation] = useState('Level 3, Food Court');
  const [resDesc, setResDesc] = useState('');
  const [resIsFamilyFriendly, setResIsFamilyFriendly] = useState(true);

  // Status message
  const [statusMessage, setStatusMessage] = useState('');

  const handleAddNewStore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName || !storeDesc) {
      alert('Please fill out Store Name and Description');
      return;
    }

    const newStore: Store = {
      id: `custom-store-${Date.now()}`,
      name: storeName,
      category: storeCategory,
      rating: 5.0,
      reviewCount: 0,
      hours: storeHours,
      phone: '(201) 555-0199',
      location: storeLocation,
      nearestEntrance: 'Main Entrance ' + storeLocation[storeLocation.length - 1],
      nearestParking: storeNearestParking + ' (Level 1)',
      logo: '🛍️',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      website: 'https://www.americandream.com',
      description: storeDesc,
      whyVisit: storeWhyVisit || 'Exclusive local brands and custom setups.',
      shoppingTips: ['Ask about promotions', 'Check out custom inventories'],
      faq: [{ question: 'Is gift wrapping available?', answer: 'Yes, ask the checkout desk' }],
      popularProducts: ['Trending Wear', 'Accessories'],
      gallery: [],
      relatedStoreIds: [],
      nearbyRestaurantIds: [],
      nearbyAttractionIds: [],
    };

    onAddStore(newStore);
    setStatusMessage(`Successfully Created Store "${storeName}"! View it on the Store Directory page.`);
    
    // Clear
    setStoreName('');
    setStoreDesc('');
    setStoreWhyVisit('');
    setTimeout(() => setStatusMessage(''), 4500);
  };

  const handleAddNewRes = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName || !resDesc) {
      alert('Please fill out Restaurant Name and Description');
      return;
    }

    const newRes: Restaurant = {
      id: `custom-res-${Date.now()}`,
      name: resName,
      cuisine: resCuisine,
      logo: '🍔',
      rating: 5.0,
      reviewCount: 0,
      hours: resHours,
      phone: '(201) 555-5200',
      location: resLocation,
      nearestEntrance: 'Court G Entrance',
      nearestParking: 'Garage C (Level 3)',
      website: 'https://www.americandream.com',
      description: resDesc,
      ratingCategory: resCategory,
      priceRange: resPrice,
      isFamilyFriendly: resIsFamilyFriendly,
      bestDishes: ['House Special Slider', 'Whipped Cream Milkshakes'],
      visitorTips: ['Arrive before Happy Hour'],
      nearbyStoreIds: [],
      nearbyAttractionIds: [],
      gallery: [],
    };

    onAddRestaurant(newRes);
    setStatusMessage(`Successfully Created Restaurant "${resName}"! View it on the Restaurant page.`);
    
    // Clear
    setResName('');
    setResDesc('');
    setTimeout(() => setStatusMessage(''), 4500);
  };

  // Dynamic compliant Structured JSON-LD / Schema code generator
  const generatedSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'American Dream Navigator Guide Platform',
    'description': 'The most complete shopping, planning, dining, and attraction platform for American Dream Mall.',
    'url': 'https://americandream-navigator.com',
    'numberOfStores': stores.length,
    'numberOfRestaurants': restaurants.length,
    'attractionsAvailable': attractions.map((a) => a.name),
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1 American Dream Way',
      'addressLocality': 'East Rutherford',
      'addressRegion': 'NJ',
      'postalCode': '07073',
      'addressCountry': 'US',
    },
  };

  const generatedSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Indexes -->
  <url>
    <loc>https://americandream-navigator.com/</loc>
    <lastmod>2026-06-07</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://americandream-navigator.com/parking-guide</loc>
    <lastmod>2026-06-07</lastmod>
    <priority>0.9</priority>
  </url>
  
  <!-- Dynamic Stores (${stores.length}) -->
  ${stores
    .map(
      (s) => `<url>
    <loc>https://americandream-navigator.com/store/${s.id}</loc>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n  ')}

  <!-- Dynamic Attractions (${attractions.length}) -->
  ${attractions
    .map(
      (a) => `<url>
    <loc>https://americandream-navigator.com/attraction/${a.id}</loc>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <div id="cms-header" className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-rose-600 tracking-wider uppercase block mb-1">Central Console</span>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Library className="w-6 h-6 text-slate-800" />
            Navigator Administration CMS (Local Panel)
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Maintain the platform, manage guest feedback, dynamic CRUD directories, and audit compliance indices. Saved directly in localStorage.
          </p>
        </div>

        {/* Total counts badges */}
        <div className="flex gap-2 text-xs">
          <span className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg font-bold border border-slate-200">
            🏬 {stores.length} Stores
          </span>
          <span className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg font-bold border border-slate-200">
            🍜 {restaurants.length} Dining
          </span>
        </div>
      </div>

      {statusMessage && (
        <div className="mb-6 bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl text-xs font-semibold flex items-center gap-2 animate-pulse">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          {statusMessage}
        </div>
      )}

      {/* Selector Tabs */}
      <div className="flex gap-2 border-b border-slate-100 pb-3 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('stores')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeSubTab === 'stores'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          🏬 Add New Store
        </button>
        <button
          onClick={() => setActiveSubTab('restaurants')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeSubTab === 'restaurants'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          🍔 Add New Restaurant
        </button>
        <button
          onClick={() => setActiveSubTab('reviews')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all relative ${
            activeSubTab === 'reviews'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          💬 Approve Reviews ({reviews.filter((r) => !r.approved).length} Pending)
        </button>
        <button
          onClick={() => setActiveSubTab('seo-sitemap')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeSubTab === 'seo-sitemap'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          🌐 SEO Audit & Google Sitemaps
        </button>
      </div>

      {/* Form content */}
      {activeSubTab === 'stores' && (
        <form onSubmit={handleAddNewStore} className="space-y-4 max-w-2xl bg-slate-50/50 border border-slate-100 p-5 rounded-2xl">
          <div className="flex items-center gap-1.5 mb-2 border-b border-slate-100 pb-2">
            <Plus className="w-5 h-5 text-blue-600 bg-white shadow-xs p-1 rounded-md" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Store Registry Entry form</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Store Name</label>
              <input
                type="text"
                placeholder="e.g. Mulberry Paris, Saint Laurent"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-blue-500 transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Retail Category</label>
              <select
                value={storeCategory}
                onChange={(e) => setStoreCategory(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-700 outline-none focus:border-blue-500 transition-all shadow-xs animate-fade-in"
              >
                {['Fashion', 'Luxury', 'Sports', 'Footwear', 'Jewelry', 'Beauty', 'Electronics', 'Home', 'Kids', 'Toys', 'Lifestyle'].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Location within Mall</label>
              <input
                type="text"
                placeholder="e.g. Level 1, The Avenue"
                value={storeLocation}
                onChange={(e) => setStoreLocation(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Daily Hours</label>
              <input
                type="text"
                placeholder="e.g. 11:00 AM - 9:00 PM"
                value={storeHours}
                onChange={(e) => setStoreHours(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nearest Garage Access</label>
              <input
                type="text"
                placeholder="e.g. Garage A"
                value={storeNearestParking}
                onChange={(e) => setStoreNearestParking(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Store Description</label>
            <textarea
              placeholder="Provide a detailed overview of what makes this store great. Write premium SEO copy..."
              rows={3}
              value={storeDesc}
              onChange={(e) => setStoreDesc(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Why Visit This Store</label>
            <input
              type="text"
              placeholder="e.g. Exclusive personal shoppers and rare designer models."
              value={storeWhyVisit}
              onChange={(e) => setStoreWhyVisit(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Save className="w-4 h-4" /> Save Store Profile
          </button>
        </form>
      )}

      {activeSubTab === 'restaurants' && (
        <form onSubmit={handleAddNewRes} className="space-y-4 max-w-2xl bg-slate-50/50 border border-slate-100 p-5 rounded-2xl animate-fade-in">
          <div className="flex items-center gap-1.5 mb-2 border-b border-slate-100 pb-2">
            <Plus className="w-5 h-5 text-blue-600 bg-white shadow-xs p-1 rounded-md" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Restaurant registry entry form</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Restaurant Name</label>
              <input
                type="text"
                placeholder="e.g. Yard House Express, Cinnabon Treats"
                value={resName}
                onChange={(e) => setResName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-blue-500 transition-all shadow-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Cuisine Type</label>
              <input
                type="text"
                placeholder="e.g. Italian Coffee, American Burgers"
                value={resCuisine}
                onChange={(e) => setResCuisine(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Dining Class</label>
              <select
                value={resCategory}
                onChange={(e) => setResCategory(e.target.value as any)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 outline-none"
              >
                <option value="Casual">Casual</option>
                <option value="Fine Dining">Fine Dining</option>
                <option value="Sweet Treats">Sweet Treats</option>
                <option value="Quick Bite">Quick Bite</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Budget Index</label>
              <select
                value={resPrice}
                onChange={(e) => setResPrice(e.target.value as any)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 outline-none"
              >
                <option value="$">$ (Inexpensive)</option>
                <option value="$$">$$ (Moderate)</option>
                <option value="$$$">$$$ (Luxurious)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Family Friendly Status</label>
              <div className="flex gap-2 justify-center pt-2.5">
                <button
                  type="button"
                  onClick={() => setResIsFamilyFriendly(true)}
                  className={`px-3 py-1.5 rounded text-[10px] font-bold transition-all ${
                    resIsFamilyFriendly ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setResIsFamilyFriendly(false)}
                  className={`px-3 py-1.5 rounded text-[10px] font-bold transition-all ${
                    !resIsFamilyFriendly ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Menu Description</label>
            <textarea
              placeholder="Describe top dishes and seating environments..."
              rows={3}
              value={resDesc}
              onChange={(e) => setResDesc(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Save className="w-4 h-4" /> Save Diner Profile
          </button>
        </form>
      )}

      {activeSubTab === 'reviews' && (
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <ShieldAlert className="w-5 h-5 text-amber-500 bg-white shadow-xs p-1 rounded-md" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Guest Review approvals queue</span>
          </div>

          {reviews.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-400">
              Zero active reviews currently in draft/queue.
            </div>
          ) : (
            <div className="space-y-3">
              {reviews.map((rev) => (
                <div key={rev.id} className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-extrabold text-xs text-slate-900">{rev.author}</span>
                      <div className="flex items-center text-[10px] text-amber-500 font-bold bg-white px-1.5 rounded border border-slate-100">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-500" /> {rev.rating} Stars
                      </div>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold tracking-wider uppercase ${
                        rev.approved ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {rev.approved ? 'Approved' : 'Pending-Draft'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mb-1">Target Module: {rev.targetId}</span>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl italic">"{rev.comment}"</p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    {!rev.approved && (
                      <button
                        onClick={() => onApproveReview(rev.id)}
                        className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all"
                      >
                        Approve Profile
                      </button>
                    )}
                    <button
                      onClick={() => onDeleteReview(rev.id)}
                      className="bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeSubTab === 'seo-sitemap' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SEO description audit */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <Globe className="w-5 h-5 text-blue-600 bg-white shadow-xs p-1 rounded-md" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Dynamic SEO JSON-LD Schema</span>
            </div>
            
            <p className="text-xs text-slate-500 leading-normal">
              American Dream Navigator injects dynamic page-level LocalBusiness micro-metadata to fulfill high ranking crawls on Google Mobile indexes. See active JSON-LD config:
            </p>

            <div className="relative">
              <pre className="bg-slate-900 text-emerald-400 text-[10px] leading-relaxed p-4 rounded-xl overflow-x-auto border border-slate-800 shadow-inner max-h-[350px]">
                <code>{JSON.stringify(generatedSchema, null, 2)}</code>
              </pre>
              <div className="absolute top-2 right-2 bg-emerald-950 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-800">
                AUTO-COMMITTED
              </div>
            </div>
          </div>

          {/* Sitemap audit code */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <FileText className="w-5 h-5 text-blue-600 bg-white shadow-xs p-1 rounded-md" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Dynamic XML Sitemap Code</span>
            </div>

            <p className="text-xs text-slate-500 leading-normal">
              XML Sitemaps keep page indices instantly alive for the American Dream directory routes. Whenever you create a new store above, it updates here!
            </p>

            <div className="relative">
              <pre className="bg-slate-900 text-slate-200 text-[10px] leading-relaxed p-4 rounded-xl overflow-x-auto border border-slate-800 shadow-inner max-h-[350px]">
                <code>{generatedSitemap}</code>
              </pre>
              <div className="absolute top-2 right-2 bg-slate-800 text-slate-400 text-[9px] font-bold px-2 py-0.5 rounded">
                XML COMPATIBLE
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
