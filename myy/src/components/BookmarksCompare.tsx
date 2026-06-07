import React, { useState } from 'react';
import { Bookmark, Scale, Trash2, CheckCircle, HelpCircle, Star, Sparkles } from 'lucide-react';
import { Store, Restaurant } from '../types';

interface BookmarksCompareProps {
  bookmarkedStoreIds: string[];
  bookmarkedRestaurantIds: string[];
  stores: Store[];
  restaurants: Restaurant[];
  onToggleStoreBookmark: (id: string) => void;
  onToggleRestaurantBookmark: (id: string) => void;
  onSelectStore: (id: string) => void;
  onSelectRestaurant: (id: string) => void;
}

export default function BookmarksCompare({
  bookmarkedStoreIds,
  bookmarkedRestaurantIds,
  stores,
  restaurants,
  onToggleStoreBookmark,
  onToggleRestaurantBookmark,
  onSelectStore,
  onSelectRestaurant,
}: BookmarksCompareProps) {
  const [activeCompareTab, setActiveCompareTab] = useState<'stores' | 'restaurants'>('stores');

  const bookmarkedStores = stores.filter((s) => bookmarkedStoreIds.includes(s.id));
  const bookmarkedRestaurants = restaurants.filter((r) => bookmarkedRestaurantIds.includes(r.id));

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-200 animate-fade-in">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">My Navigator Plan</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
            <Scale className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" />
            Comparison & Bookmarks Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-1">
            Bookmark stores and restaurants throughout the portal and compare their logistics side-by-side to optimize your route.
          </p>
        </div>

        {/* Comparison Type Toggle */}
        <div className="inline-flex rounded-xl bg-slate-105 dark:bg-slate-800 p-1 border border-slate-250 dark:border-slate-700 self-start sm:self-center">
          <button
            onClick={() => setActiveCompareTab('stores')}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeCompareTab === 'stores'
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Stores ({bookmarkedStoreIds.length})
          </button>
          <button
            onClick={() => setActiveCompareTab('restaurants')}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeCompareTab === 'restaurants'
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Dining ({bookmarkedRestaurantIds.length})
          </button>
        </div>
      </div>

      {activeCompareTab === 'stores' ? (
        bookmarkedStores.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/45 rounded-2xl border border-dashed border-slate-200 dark:border-slate-850 p-4">
            <Bookmark className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3 animate-bounce" />
            <h3 className="font-bold text-slate-700 dark:text-slate-200 text-sm sm:text-base">No Stores Bookmarked</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto mt-1 leading-relaxed">
              Browse the store directory and tap the premium bookmark ribbon on Apple Store, Zara, or Hermès to see them compared here.
            </p>
          </div>
        ) : (
          <div className="relative">
            <span className="md:hidden block text-[9px] font-black text-rose-500 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/35 px-2.5 py-1 rounded-lg text-center mb-3">
              👉 Swipe horizontally on the table to compare side-by-side
            </span>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl scrollbar-none">
              <table className="w-full text-left text-sm border-collapse min-w-[600px] transition-colors">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <th className="p-4 font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider w-1/4">Criteria</th>
                    {bookmarkedStores.map((store) => (
                      <th key={store.id} className="p-4 font-bold text-slate-900 dark:text-white w-1/4 relative group min-w-[180px] border-l border-slate-200 dark:border-slate-805">
                        <div className="flex items-center gap-2 pr-6">
                          <span className="text-xl shrink-0">{store.logo}</span>
                          <div className="min-w-0">
                            <span
                              onClick={() => onSelectStore(store.id)}
                              className="hover:underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-450 block truncate text-xs sm:text-sm"
                            >
                              {store.name.split(' American')[0]}
                            </span>
                            <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-normal mt-0.5 truncate">{store.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onToggleStoreBookmark(store.id)}
                          className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 hover:text-rose-500 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-350">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Mall Location</td>
                    {bookmarkedStores.map((store) => (
                      <td key={store.id} className="p-4 text-xs font-semibold text-slate-800 dark:text-slate-200 border-l border-slate-150 dark:border-slate-805">
                        {store.location}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Trust Score</td>
                    {bookmarkedStores.map((store) => (
                      <td key={store.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805">
                        <div className="flex items-center gap-1 flex-wrap">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                          <strong className="font-bold text-slate-800 dark:text-slate-200">{store.rating}</strong>
                          <span className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-xs">({store.reviewCount} views)</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Hours Daily</td>
                    {bookmarkedStores.map((store) => (
                      <td key={store.id} className="p-4 text-xs text-slate-650 dark:text-slate-350 border-l border-slate-150 dark:border-slate-805 font-medium">
                        {store.hours}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Access & Parking</td>
                    {bookmarkedStores.map((store) => (
                      <td key={store.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805">
                        <div className="font-bold text-slate-900 dark:text-white leading-snug">{store.nearestParking}</div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Ent: {store.nearestEntrance}</div>
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Why Visit</td>
                    {bookmarkedStores.map((store) => (
                      <td key={store.id} className="p-4 text-xs leading-relaxed italic border-l border-slate-150 dark:border-slate-805 max-w-[200px]">
                        "{store.whyVisit}"
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Signature Lines</td>
                    {bookmarkedStores.map((store) => (
                      <td key={store.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805">
                        <div className="flex flex-wrap gap-1">
                          {store.popularProducts.map((p, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-50/60 dark:bg-blue-950/20 text-blue-700 dark:text-blue-350 border border-blue-100/50 dark:border-blue-900/30 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md font-medium"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : bookmarkedRestaurants.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/45 rounded-2xl border border-dashed border-slate-200 dark:border-slate-850 p-4">
          <Bookmark className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3 animate-bounce" />
          <h3 className="font-bold text-slate-700 dark:text-slate-200 text-sm sm:text-base">No Restaurants Bookmarked</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto mt-1 leading-relaxed">
            Browse the restaurant directory and bookmark dining places like Yard House, IT'SUGAR, or Five Guys to compare their cuisines, budgets, and menus.
          </p>
        </div>
      ) : (
        <div className="relative">
          <span className="md:hidden block text-[9px] font-black text-rose-500 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/35 px-2.5 py-1 rounded-lg text-center mb-3">
            👉 Swipe horizontally on the table to compare side-by-side
          </span>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl scrollbar-none">
            <table className="w-full text-left text-sm border-collapse min-w-[600px] transition-colors">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-4 font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider w-1/4">Criteria</th>
                  {bookmarkedRestaurants.map((res) => (
                    <th key={res.id} className="p-4 font-bold text-slate-900 dark:text-white w-1/4 relative group min-w-[180px] border-l border-slate-200 dark:border-slate-805">
                      <div className="flex items-center gap-2 pr-6">
                        <span className="text-xl shrink-0">🍔</span>
                        <div className="min-w-0">
                          <span
                            onClick={() => onSelectRestaurant(res.id)}
                            className="hover:underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-450 block truncate text-xs sm:text-sm"
                          >
                            {res.name}
                          </span>
                          <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-normal mt-0.5 truncate">{res.cuisine}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onToggleRestaurantBookmark(res.id)}
                        className="absolute top-3 right-3 text-slate-400 dark:text-slate-500 hover:text-rose-500 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-350">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Cuisine Class</td>
                  {bookmarkedRestaurants.map((res) => (
                    <td key={res.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805 font-medium">
                      <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider inline-block">
                        {res.ratingCategory}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Pricing Bracket</td>
                  {bookmarkedRestaurants.map((res) => (
                    <td key={res.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805 font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                      {res.priceRange}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Rating (Views)</td>
                  {bookmarkedRestaurants.map((res) => (
                    <td key={res.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805 font-medium">
                      <div className="flex items-center gap-1 flex-wrap">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                        <strong className="font-bold text-slate-800 dark:text-slate-200">{res.rating}</strong>
                        <span className="text-slate-400 dark:text-slate-500 text-[10px]">({res.reviewCount})</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Family Friendly</td>
                  {bookmarkedRestaurants.map((res) => (
                    <td key={res.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805">
                      {res.isFamilyFriendly ? (
                        <span className="text-emerald-605 dark:text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                          <CheckCircle className="w-3.5 h-3.5" /> Approved
                        </span>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-550">Standard</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Elite Menus</td>
                  {bookmarkedRestaurants.map((res) => (
                    <td key={res.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805">
                      <ul className="list-disc pl-4 space-y-0.5 text-[10px] sm:text-[11px] leading-relaxed">
                        {res.bestDishes.map((dish, i) => (
                          <li key={i}>{dish}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                  <td className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-xs bg-slate-50/50 dark:bg-slate-800/30">Direct Parking</td>
                  {bookmarkedRestaurants.map((res) => (
                    <td key={res.id} className="p-4 text-xs border-l border-slate-150 dark:border-slate-805 font-bold text-slate-800 dark:text-slate-200 truncate">
                      {res.nearestParking.split(' (')[0]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
