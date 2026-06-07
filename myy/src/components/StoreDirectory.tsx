import React, { useState, useMemo } from 'react';
import { Search, Star, Bookmark, Filter, BookOpen, Building2, MapPin, Navigation, Tag } from 'lucide-react';
import { Store } from '../types';

interface StoreDirectoryProps {
  stores: Store[];
  onSelectStore: (id: string) => void;
  bookmarkedStoreIds: string[];
  onToggleStoreBookmark: (id: string) => void;
}

export default function StoreDirectory({
  stores,
  onSelectStore,
  bookmarkedStoreIds,
  onToggleStoreBookmark,
}: StoreDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'reviews'>('name');

  const categories = useMemo(() => {
    const list = new Set(stores.map((s) => s.category));
    return ['All', ...Array.from(list)];
  }, [stores]);

  const filteredStores = useMemo(() => {
    return stores
      .filter((store) => {
        const matchesSearch =
          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.popularProducts.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === 'All' || store.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
        return a.name.localeCompare(b.name);
      });
  }, [stores, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-200">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">Interactive Directory</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
            <Building2 className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
            Complete Store & Brand Directory
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
            Browse through luxury salons, sports labels, children toys, and high-tech electronic showrooms.
          </p>
        </div>
 
        {/* Total stats */}
        <div className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 sm:px-4 py-2 self-start">
          Displaying <strong className="text-slate-800 dark:text-slate-200">{filteredStores.length}</strong> of {stores.length} elite stores
        </div>
      </div>
 
      {/* Advanced Searching Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-8">
        {/* Left Search Bar (Highly visible and highlighted) */}
        <div className="lg:col-span-6 relative flex items-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-3 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search stores, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl pl-10 pr-24 py-2 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all shadow-md placeholder-slate-500 dark:placeholder-slate-450"
            />
            <span className="absolute right-2.5 top-1.5 sm:top-2 px-2.5 py-1 bg-blue-600 text-white text-[10px] sm:text-xs font-bold rounded-lg cursor-default select-none shadow-xs">
              SEARCH
            </span>
          </div>
        </div>
 
        {/* Right Sort controls */}
        <div className="lg:col-span-6 flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 bg-slate-50/50 dark:bg-slate-800/40 px-2.5 py-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-705">
            <Filter className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Sort</span>
          </div>
 
          <div className="inline-flex rounded-xl bg-slate-50 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-xs font-medium">
            <button
              onClick={() => setSortBy('name')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all ${
                sortBy === 'name' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              A-Z
            </button>
            <button
              onClick={() => setSortBy('rating')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all ${
                sortBy === 'rating' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Stars
            </button>
            <button
              onClick={() => setSortBy('reviews')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all ${
                sortBy === 'reviews' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Popular
            </button>
          </div>
        </div>
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Category Filters Left Sidebar rail */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 self-start flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-2 border-r-0 lg:border-r border-slate-100 dark:border-slate-850 pr-0 lg:pr-6 whitespace-nowrap lg:whitespace-normal scrollbar-none max-h-[calc(100vh-8rem)]">
          <span className="hidden lg:block text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 font-mono">Categories</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-xs font-bold'
                  : 'bg-slate-50 dark:bg-slate-800/65 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
              id={`cat-btn-${cat}`}
            >
              🏷️ {cat === 'All' ? 'All Retail' : cat}
            </button>
          ))}
        </div>
 
        {/* Store Grid Right */}
        <div className="lg:col-span-9">
          {filteredStores.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 dark:bg-slate-800 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-4">
              <Search className="w-8 h-8 text-slate-300 dark:text-slate-650 mx-auto mb-3" />
              <h3 className="font-extrabold text-slate-700 dark:text-slate-200 text-sm sm:text-base">No Stores Match Your Filter</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto mt-1">
                Empty the search bar or choose 'All Retail' to view items.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {filteredStores.map((store) => {
                const isBookmarked = bookmarkedStoreIds.includes(store.id);
                return (
                  <div
                    key={store.id}
                    className="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:shadow-lg dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-750 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Logo, name & bookmark */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 text-xl sm:text-2xl shadow-inner group-hover:scale-110 transition-transform shrink-0">
                            {store.logo}
                          </span>
                          <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug">{store.name}</h3>
                            <span className="text-[9px] sm:text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 inline-block mt-0.5">
                              {store.category}
                            </span>
                          </div>
                        </div>
 
                        <button
                          onClick={() => onToggleStoreBookmark(store.id)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isBookmarked
                              ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/50 text-rose-500'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-400 hover:text-rose-500'
                          }`}
                          title={isBookmarked ? 'Remove bookmark' : 'Bookmark store'}
                        >
                          <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isBookmarked ? 'fill-rose-500' : ''}`} />
                        </button>
                      </div>
 
                      {/* Decription */}
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-350 leading-relaxed mb-4 line-clamp-3">
                        {store.description}
                      </p>
 
                      {/* Mini features */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span className="truncate">Loc: <strong className="text-slate-800 dark:text-slate-200">{store.location}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                          <Navigation className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span className="text-slate-400 dark:text-slate-400 truncate">Nearest Park: <strong className="text-slate-700 dark:text-slate-200">{store.nearestParking.split(' (')[0]}</strong></span>
                        </div>
                      </div>
                    </div>
 
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {/* Rating Block */}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-500" />
                        <span className="font-extrabold text-[11px] sm:text-xs text-slate-800 dark:text-slate-200">{store.rating}</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500">({store.reviewCount})</span>
                      </div>
 
                      <button
                        onClick={() => onSelectStore(store.id)}
                        className="text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:underline flex items-center gap-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-all font-semibold cursor-pointer"
                      >
                        Details &rarr;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
