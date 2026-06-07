import React, { useState, useMemo } from 'react';
import { Search, Star, Bookmark, Filter, BookOpen, Utensils, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantDirectoryProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (id: string) => void;
  bookmarkedRestaurantIds: string[];
  onToggleRestaurantBookmark: (id: string) => void;
}

export default function RestaurantDirectory({
  restaurants,
  onSelectRestaurant,
  bookmarkedRestaurantIds,
  onToggleRestaurantBookmark,
}: RestaurantDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisineCategory, setSelectedCuisineCategory] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');
  const [familyFriendlyOnly, setFamilyFriendlyOnly] = useState<boolean>(false);

  // Derive categories
  const cuisineCategories = useMemo(() => {
    const list = new Set(restaurants.map((r) => r.ratingCategory));
    return ['All', ...Array.from(list)];
  }, [restaurants]);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((res) => {
      const matchesSearch =
        res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.bestDishes.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCuisine =
        selectedCuisineCategory === 'All' || res.ratingCategory === selectedCuisineCategory;

      const matchesPrice = selectedPrice === 'All' || res.priceRange === selectedPrice;

      const matchesFamily = !familyFriendlyOnly || res.isFamilyFriendly;

      return matchesSearch && matchesCuisine && matchesPrice && matchesFamily;
    });
  }, [restaurants, searchQuery, selectedCuisineCategory, selectedPrice, familyFriendlyOnly]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-200">
      {/* Header and Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">Authentic Dining</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
            <Utensils className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
            American Dream Mall Dining & Cuisine
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
            Discover craft brewpubs, sweet candy superstores, quick bites, and cozy family bakeries in the food corridors.
          </p>
        </div>

        <div className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 sm:px-4 py-2 rounded-xl self-start">
          Displaying <strong className="text-slate-800 dark:text-slate-200">{filteredRestaurants.length}</strong> of {restaurants.length} dining spots
        </div>
      </div>

      {/* Directory Searching bar (Highly visible) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-8">
        <div className="lg:col-span-5 relative flex items-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-3 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search cuisines, dishes, desserts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl pl-10 pr-24 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all shadow-md placeholder-slate-500 dark:placeholder-slate-450"
            />
            <span className="absolute right-2.5 top-1.5 sm:top-2 px-2.5 py-1 bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-bold rounded-lg cursor-default select-none shadow-xs">
              CUISINE
            </span>
          </div>
        </div>

        {/* Filters right and budget selectors */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Price dropdown filter */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase outline-none focus:border-blue-500 shadow-xs cursor-pointer"
            >
              <option value="All" className="dark:bg-slate-900">All Budgets ($ - $$$)</option>
              <option value="$" className="dark:bg-slate-900">Budget ($)</option>
              <option value="$$" className="dark:bg-slate-900">Casual ($$)</option>
              <option value="$$$" className="dark:bg-slate-900">Fine Dining ($$$)</option>
            </select>
          </div>

          {/* Family Switcher */}
          <button
            onClick={() => setFamilyFriendlyOnly(!familyFriendlyOnly)}
            className={`w-full sm:w-auto px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center sm:justify-start gap-1.5 shadow-xs cursor-pointer ${
              familyFriendlyOnly
                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            👨‍👩‍👧‍👦 {familyFriendlyOnly ? 'Family Selected' : 'Family Friendly Only'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Cuisine Category List */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 self-start flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-2 border-r-0 lg:border-r border-slate-100 dark:border-slate-850 pr-0 lg:pr-6 whitespace-nowrap lg:whitespace-normal scrollbar-none max-h-[calc(100vh-8rem)]">
          <span className="hidden lg:block text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 font-mono">Dining Class</span>
          {cuisineCategories.map((classType) => (
            <button
              key={classType}
              onClick={() => setSelectedCuisineCategory(classType)}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                selectedCuisineCategory === classType
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-xs font-bold'
                  : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              🍜 {classType === 'All' ? 'All Cuisines' : classType}
            </button>
          ))}
        </div>

        {/* Dining Spots layout */}
        <div className="lg:col-span-9">
          {filteredRestaurants.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 dark:bg-slate-800 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-4">
              <AlertCircle className="w-8 h-8 text-slate-300 dark:text-slate-400 mx-auto mb-3" />
              <h3 className="font-extrabold text-slate-700 dark:text-slate-200 text-sm sm:text-base">No Dining Establishments Match</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto mt-1">
                Refine your budget selector, clear queries, or tap 'All Cuisines' to see core locations.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {filteredRestaurants.map((res) => {
                const isBookmarked = bookmarkedRestaurantIds.includes(res.id);
                return (
                  <div
                    key={res.id}
                    className="group bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:shadow-lg dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-755 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Name and bookmark header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                            <span className="text-[9px] sm:text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider truncate">{res.cuisine}</span>
                            <span className="bg-amber-50 dark:bg-amber-950/20 rounded px-1.5 py-0.5 text-[8px] sm:text-[9px] font-extrabold text-amber-800 dark:text-amber-400 uppercase tracking-wider border border-amber-100 dark:border-amber-900/40">
                              {res.ratingCategory}
                            </span>
                            <span className="text-emerald-700 dark:text-emerald-400 font-extrabold text-[9px] sm:text-[10px] bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/65 dark:border-emerald-900/30 px-1 py-1.5 rounded">
                              {res.priceRange}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all leading-snug truncate">{res.name}</h3>
                        </div>

                        <button
                          onClick={() => onToggleRestaurantBookmark(res.id)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                            isBookmarked
                              ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/55 text-rose-500'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-400 hover:text-rose-500'
                          }`}
                          title="Bookmark restaurant"
                        >
                          <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isBookmarked ? 'fill-rose-500' : ''}`} />
                        </button>
                      </div>

                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-350 leading-relaxed line-clamp-3 mb-4">
                        {res.description}
                      </p>

                      {/* Best dishes */}
                      <div className="bg-slate-50 dark:bg-slate-850 rounded-xl p-3 mb-4 border border-slate-100 dark:border-slate-700">
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider block mb-1">Popular dishes</span>
                        <div className="flex flex-wrap gap-1">
                          {res.bestDishes.map((dish, i) => (
                            <span
                              key={i}
                              className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 shadow-3xs"
                            >
                              🔥 {dish}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                      {/* Rating block */}
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-500" />
                        <span className="font-extrabold text-[11px] sm:text-xs text-slate-800 dark:text-slate-200">{res.rating}</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500">({res.reviewCount})</span>
                      </div>

                      {res.isFamilyFriendly && (
                        <div className="hidden sm:flex text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/20 px-2 py-1 rounded items-center gap-1 border border-transparent dark:border-emerald-900/30">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Family
                        </div>
                      )}

                      <button
                        onClick={() => onSelectRestaurant(res.id)}
                        className="text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:underline bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-all shadow-3xs cursor-pointer"
                      >
                        Inspect &rarr;
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
