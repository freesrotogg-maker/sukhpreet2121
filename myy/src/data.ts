export interface Store {
  id: string; // [PK: store_id]
  store_name: string;
  category: string;
  subcategory: string;
  floor: number;
  floor_zone: string; // Keeping for backward compatibility
  zone_id: string; // [FK to Zones]
  primary_parking_id: string; // [FK to Parking]
  target_customers: string[]; // Match requirement
  target_customer: string[]; // Keeping for backward compatibility
  popular_products: string[]; // Match requirement
  products: string[]; // Keeping for backward compatibility
  related_categories: string[];
  phone: string;
  hours: string;
  rating: number;
  reviews: number;
  website: string;
  description: string;
  seo_intro: string;
  faqs: { q: string; a: string }[];

  // New CSV integrated fields
  store_id: string;
  official_website: string;
  opening_hours: string;
  google_rating: number;
  review_count: number;
  floor_str: string;
  zone: string;
  nearest_entrance: string;
  nearest_parking: string;
  best_for: string;
  budget_level: string;
  google_maps_url: string;
  last_verified: string;
}

export interface ParkingNode {
  parking_id: string; // [PK: parking_id]
  deck_name: string;
  capacity_rating: string;
  rates_tier: string;
  closest_entrances: string[];
  optimal_for_zones: string[];
  structural_tips: string;
}

export interface AttractionNode {
  attraction_id: string; // [PK: attraction_id]
  attraction_name: string;
  zone_id: string; // [FK]
  floor: number;
  target_audience: string;
  description: string;
}

export const PARKING_DATA: ParkingNode[] = [
  {
    parking_id: "deck_a",
    deck_name: "Parking Deck A",
    capacity_rating: "Gold Elite (Avg. 3,500 spaces available)",
    rates_tier: "Free first 30 mins, $5 Flat Rate for day",
    closest_entrances: ["Entrance A", "Lark Hub Access Lobby"],
    optimal_for_zones: ["court_a", "garden_court"],
    structural_tips: "Best deck for quick exit onto Route 3. Houses immediate high-speed EV chargers on Lobby Level G1 with elevators connecting directly into Level 1."
  },
  {
    parking_id: "deck_b",
    deck_name: "Parking Deck B (Family Express)",
    capacity_rating: "Diamond Elite (Avg. 4,200 spaces available)",
    rates_tier: "Free first 30 mins, $5 Flat Rate for day",
    closest_entrances: ["Entrance B", "Dream Square Gate"],
    optimal_for_zones: ["court_b"],
    structural_tips: "Equipped with wide parking bays perfect for strollers and minivans. Heavily saturated during weekends; arrive before 11:30 AM for premium slots on G2/G3."
  },
  {
    parking_id: "deck_c",
    deck_name: "Parking Deck C",
    capacity_rating: "Platinum Prestige (Avg. 3,800 spaces available)",
    rates_tier: "Free first 30 mins, $5 Flat Rate for day",
    closest_entrances: ["Entrance C", "Court Rotunda North Entrance"],
    optimal_for_zones: ["court_c", "garden_court"],
    structural_tips: "Direct climate-controlled path linkage. Ideal choice for rapid access to Level 1 high-fashion avenues and premium dining corners."
  },
  {
    parking_id: "deck_d",
    deck_name: "Parking Deck D (Sports Elite)",
    capacity_rating: "Diamond Elite (Avg. 4,000 spaces available)",
    rates_tier: "Free first 30 mins, $5 Flat Rate for day",
    closest_entrances: ["Entrance D", "Shed Road Access Gate"],
    optimal_for_zones: ["court_d"],
    structural_tips: "Optimized bypass lanes allow visitors to skip heavy highway bottlenecks during evening departures. Recommended for sneaker collectors and tech seekers."
  },
  {
    parking_id: "deck_g",
    deck_name: "Parking Deck G (Outdoor Direct)",
    capacity_rating: "Silver Standard (Avg. 3,200 spaces available)",
    rates_tier: "Free first 30 mins, $5 Flat Rate for day",
    closest_entrances: ["Entrance G", "Adventure Gateway West"],
    optimal_for_zones: ["court_g"],
    structural_tips: "Nearest to larger storage facilities and direct drop-off curves. Best choice for loading winter ski/snowboard equipment and thermal gears."
  }
];

export const ATTRACTIONS_DATA: AttractionNode[] = [
  {
    attraction_id: "nickelodeon_universe",
    attraction_name: "Nickelodeon Universe Theme Park",
    zone_id: "court_a",
    floor: 1,
    target_audience: "Families, Kids, and Thrill Seekers",
    description: "The Western Hemisphere's largest indoor theme park. Features high-thrill roller coasters, vibrant interactive live characters, and customizable family fun points."
  },
  {
    attraction_id: "dream_works_water_park",
    attraction_name: "DreamWorks Water Park",
    zone_id: "court_b",
    floor: 2,
    target_audience: "Families, Kids, and Youth Groups",
    description: "Multi-acre tropical fantasy indoor paradise containing major scaling wave pools, adrenaline-packed slide tubes, and customizable private rental cabanas."
  },
  {
    attraction_id: "big_snow_ski",
    attraction_name: "Big SNOW American Dream",
    zone_id: "court_g",
    floor: 1,
    target_audience: "Active Enthusiasts, Snowboarders, and Families",
    description: "An unbelievable indoor alpine skiing experience featuring real manufactured powder snow year-round, complete with professional coaches and gear rentals."
  },
  {
    attraction_id: "sea_life_aquarium",
    attraction_name: "SEA LIFE Aquarium",
    zone_id: "court_a",
    floor: 1,
    target_audience: "Families, Curious Minds, and Kids",
    description: "An interactive underwater wonderland housing a 360-degree walk-through ocean tunnel, local marine preservation labs, and dynamic touch tank stations."
  },
  {
    attraction_id: "legoland_discovery",
    attraction_name: "LEGOLAND Discovery Center",
    zone_id: "court_c",
    floor: 1,
    target_audience: "Kids (Ages 3-10) and Building Collectors",
    description: "The ultimate indoor lego playground packed with an interactive laser ride, 4D cinema, creative construct labs, and meticulously modeled local landmark dioramas."
  }
];

export const BASE_STORES_DATA = [
  {
    id: "abercrombie-fitch",
    store_name: "Abercrombie & Fitch",
    category: "Apparel & Accessories",
    subcategory: "Casual Lifestyle",
    floor: 1,
    floor_zone: "Level 1, Court C",
    zone_id: "court_c",
    primary_parking_id: "deck_c",
    target_customers: ["Young Adults", "Professionals"],
    target_customer: ["Young Adults", "Professionals"],
    popular_products: ["Jeans", "Outerwear", "Graphic Tees", "Fragrance"],
    products: ["Jeans", "Outerwear", "Graphic Tees", "Fragrance"],
    related_categories: ["Fashion", "Accessories"],
    phone: "(201) 515-3733",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.3,
    reviews: 85,
    website: "https://www.abercrombie.com",
    description: "Abercrombie & Fitch delivers premium, modern-classic apparel engineered for the contemporary lifestyle. Shoppers browse an extensive selection of tailored denim, structural knitwear, seasonal outwear, and relaxed business-casual apparel. The location serves as an experiential storefront for consumers transitioning between upscale casual daywear and evening socialization clothing collections. It is a vital destination for high-quality wardrobe essentials.",
    seo_intro: "Abercrombie & Fitch at American Dream Mall redefines premium casual lifestyle retail within a state-of-the-art flagship environment. Located elegantly on Level 1 inside Court C, this premier location presents an extensive inventory of refined denim, structured knitwear, signature fragrances, and modern outerwear collections. The store attracts both style-conscious young adults and professional shoppers hunting for versatile wardrobe elements that blend effortlessly from workplace duties to weekend environments.",
    faqs: [
      { q: "What does Abercrombie & Fitch sell at American Dream?", a: "Abercrombie & Fitch sells premium casual lifestyle apparel including high-quality denim heritage jeans premium outerwear structured knitwear loungewear and exclusive fine fragrance lines for men and women." },
      { q: "Where is Abercrombie & Fitch located in American Dream Mall?", a: "Abercrombie & Fitch is located on Level 1 within Court C near Entrance C with convenient access out of Parking Deck C." },
      { q: "What are the store hours for Abercrombie & Fitch at American Dream?", a: "The store is open Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "abercrombie-kids",
    store_name: "Abercrombie Kids",
    category: "Kids",
    subcategory: "Children's Apparel",
    floor: 1,
    floor_zone: "Level 1, Court B",
    zone_id: "court_b",
    primary_parking_id: "deck_b",
    target_customers: ["Families", "Kids", "Teenagers"],
    target_customer: ["Families", "Kids", "Teenagers"],
    popular_products: ["Kids Jeans", "Hoodies", "Activewear", "Graphic Tees"],
    products: ["Kids Jeans", "Hoodies", "Activewear", "Graphic Tees"],
    related_categories: ["Kids", "Fashion"],
    phone: "(201) 515-3647",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.1,
    reviews: 14,
    website: "https://www.abercrombie.com",
    description: "Abercrombie Kids provides durable, trend-forward lifestyle apparel explicitly tailored for children and active youth. The storefront presents seasonal collections featuring premium denim, soft-knit activewear, graphic tees, and comfortable weather-resistant layers. Parents and children frequent the store to assemble functional yet contemporary daily wardrobes that mirror modern streetwear trends while maintaining long-lasting material durability.",
    seo_intro: "Abercrombie Kids at American Dream Mall brings a vibrant and durable world of contemporary children's lifestyle apparel to the modern family shopping experience. Situated prominently on Level 1 within the family-centric Court B, this specialty retail destination offers seasonal wardrobes featuring premium kids' denim, soft-knit activewear, comfortable graphic tees, and robust seasonal layers.",
    faqs: [
      { q: "What does Abercrombie Kids sell at American Dream?", a: "Abercrombie Kids sells trend-forward children apparel including durable youth jeans soft activewear hoodies graphic tees and seasonal weather-resistant layers designed for active kids." },
      { q: "Where is Abercrombie Kids located in American Dream Mall?", a: "Abercrombie Kids is positioned on Level 1 within Court B right near Entrance B and closest to Parking Deck B." },
      { q: "What are the store hours for Abercrombie Kids at American Dream?", a: "Abercrombie Kids runs Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "adidas",
    store_name: "Adidas",
    category: "Apparel & Accessories",
    subcategory: "Sportswear",
    floor: 2,
    floor_zone: "Level 2, Court D",
    zone_id: "court_d",
    primary_parking_id: "deck_d",
    target_customers: ["Sneaker Collectors", "Outdoor Enthusiasts", "Families", "Teenagers"],
    target_customer: ["Sneaker Collectors", "Outdoor Enthusiasts", "Families"],
    popular_products: ["Running Shoes", "Soccer Cleats", "Tracksuits", "Ultraboost"],
    products: ["Running Shoes", "Soccer Cleats", "Tracksuits", "Ultraboost"],
    related_categories: ["Sportswear", "Footwear"],
    phone: "(201) 636-2358",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.4,
    reviews: 122,
    website: "https://www.adidas.com",
    description: "Adidas showcases an expansive flagship retail landscape highlighting high-performance athletic footwear, running hardware, street-inspired loungewear, and historic lifestyle apparel collections. The environment bridges technical sportswear with urban design, attracting functional athletes and subculture fashion enthusiasts alike. Shoppers visit to access exclusive sneaker drops, technical workout essentials, and distinct lifestyle accessories curated for multi-sport disciplines.",
    seo_intro: "Adidas at American Dream Mall commands the retail environment with a massive high-performance flagship store located on Level 2 within Court D. This advanced retail hub bridges the gap between innovative athletic performance technology and historic street subculture apparel. Shoppers encounter an immersive footprint featuring advanced running systems, professional soccer hardware, premium training layers, and iconic streetwear items from the Adidas Originals collection.",
    faqs: [
      { q: "What does Adidas sell at American Dream?", a: "Adidas sells high-performance athletic footwear running items soccer cleats tracksuits workout activewear and iconic streetwear apparel from their Originals line." },
      { q: "Where is Adidas located in American Dream Mall?", a: "Adidas is situated on Level 2 within Court D directly accessible via Entrance D and adjacent to Parking Deck D." },
      { q: "What are the store hours for Adidas at American Dream?", a: "Adidas operating hours are Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "aland",
    store_name: "ALAND",
    category: "Apparel & Accessories",
    subcategory: "Streetwear",
    floor: 1,
    floor_zone: "Level 1, Court C",
    zone_id: "court_c",
    primary_parking_id: "deck_c",
    target_customers: ["Teenagers", "Sneaker Collectors"],
    target_customer: ["Teenagers", "Sneaker Collectors"],
    popular_products: ["Korean Streetwear", "Oversized Hoodies", "K-Beauty Accessories", "Novelty Stationery"],
    products: ["Korean Streetwear", "Oversized Hoodies", "K-Beauty Accessories", "Novelty Stationery"],
    related_categories: ["Fashion", "Accessories"],
    phone: "(551) 248-5221",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.2,
    reviews: 108,
    website: "https://www.alandusa.com",
    description: "ALAND operates as a high-energy, multi-brand lifestyle hub bringing contemporary Korean fashion design, accessories, and novel stationery to the retail forefront. The store acts as an incubator for progressive global trends, showcasing emerging indie designers alongside established urban apparel lines. Trend-focused individuals visit to explore unique, avant-garde silhouettes, eclectic jewelry, K-beauty elements, and expressive lifestyle items unavailable in standard retail avenues.",
    seo_intro: "ALAND at American Dream Mall stands out as a high-energy fashion incubator bringing the absolute forefront of contemporary Korean streetwear and lifestyle culture directly to North Jersey. Found on Level 1 within Court C, this expansive multi-brand boutique hosts an eccentric mix of rising indie design lines alongside highly coveted global K-fashion labels.",
    faqs: [
      { q: "What does ALAND sell at American Dream?", a: "ALAND sells multi-brand Korean streetwear lifestyle fashion accessories K-beauty products jewelry and unique novelty stationery lines sourced from emerging designers." },
      { q: "Where is ALAND located in American Dream Mall?", a: "ALAND is situated on Level 1 within Court C with direct proximity to Entrance C and Parking Deck C." },
      { q: "What are the store hours for ALAND at American Dream?", a: "ALAND is open for customers Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "aldo",
    store_name: "Aldo",
    category: "Footwear",
    subcategory: "Fashion Shoes",
    floor: 1,
    floor_zone: "Level 1, Court C",
    zone_id: "court_c",
    primary_parking_id: "deck_c",
    target_customers: ["Professionals", "Luxury Shoppers"],
    target_customer: ["Professionals", "Luxury Shoppers"],
    popular_products: ["High Heels", "Leather Loafers", "Boots", "Handbags"],
    products: ["High Heels", "Leather Loafers", "Boots", "Handbags"],
    related_categories: ["Footwear", "Accessories"],
    phone: "(201) 340-1925",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.0,
    reviews: 45,
    website: "https://www.aldoshoes.com",
    description: "Aldo delivers an accessible, high-fashion assortment of contemporary footwear, structured leather handbags, and lifestyle accessories engineered for men and women. The store tracks immediate global runway releases, translating premium trends into structural evening shoes, casual leather loafers, durable boots, and seasonal statement accents. Visitors shop here to source targeted occasion-based styles or build reliable, daily professional footwear foundations.",
    seo_intro: "Aldo at American Dream Mall presents a beautifully structured, highly accessible footwear and luxury accessory destination located on Level 1 within Court C. This bright modern storefront specializes in translating immediate international runway inspiration into wearable, high-quality fashion shoe collections for men and women.",
    faqs: [
      { q: "What does Aldo sell at American Dream?", a: "Aldo sells contemporary footwear including high heels dress shoes boots casual leather loafers and matching lifestyle accessories and premium structured handbags." },
      { q: "Where is Aldo located in American Dream Mall?", a: "Aldo is found on Level 1 within Court C conveniently positioned near Entrance C and the main Parking Deck C array." },
      { q: "What are the store hours for Aldo at American Dream?", a: "Aldo store hours operate Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM."}
    ]
  },
  {
    id: "alo-yoga",
    store_name: "Alo Yoga",
    category: "Apparel & Accessories",
    subcategory: "Athleisure",
    floor: 2,
    floor_zone: "Level 2, Court C",
    zone_id: "court_c",
    primary_parking_id: "deck_c",
    target_customers: ["Luxury Shoppers", "Professionals"],
    target_customer: ["Luxury Shoppers", "Professionals"],
    popular_products: ["Yoga Pants", "Airlift Leggings", "Hoodies", "Workout Sets"],
    products: ["Yoga Pants", "Airlift Leggings", "Hoodies", "Workout Sets"],
    related_categories: ["Sportswear", "Fashion"],
    phone: "(201) 608-2512",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.5,
    reviews: 38,
    website: "https://www.aloyoga.com",
    description: "Alo Yoga supplies studio-to-street luxury activewear and mindful lifestyle clothing engineered for performance and comfort. The boutique presents premium high-waisted leggings, performance sports bras, structured loungewear, and clean wellness essentials. Fitness enthusiasts and modern luxury shoppers frequent this storefront to acquire versatile wardrobe pieces that balance advanced sweat-wicking textile engineering with contemporary minimalist street styling.",
    seo_intro: "Alo Yoga at American Dream Mall anchors the premium activewear experience with a striking luxury oasis located on Level 2 within Court C. This retail space effortlessly showcases the brand's signature studio-to-street aesthetic through meticulously arranged displays of advanced yoga wear performance garments and comfortable lifestyle layers.",
    faqs: [
      { q: "What does Alo Yoga sell at American Dream?", a: "Alo Yoga sells luxury studio-to-street activewear including performance yoga pants high-waisted airlift leggings technical sports bras premium structured hoodies and mindful lifestyle wellness gear." },
      { q: "Where is Alo Yoga located in American Dream Mall?", a: "Alo Yoga is located on Level 2 within Court C accessible easily from Entrance C and nearest to Parking Deck C." },
      { q: "What are the store hours for Alo Yoga at American Dream?", a: "Alo Yoga operates Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "apple",
    store_name: "Apple",
    category: "Tech & Electronics",
    subcategory: "Consumer Tech",
    floor: 2,
    floor_zone: "Level 2, Court B",
    zone_id: "court_b",
    primary_parking_id: "deck_b",
    target_customers: ["Tech Enthusiasts", "Professionals", "Families"],
    target_customer: ["Tech Enthusiasts", "Professionals", "Families"],
    popular_products: ["iPhone", "MacBook", "iPad", "Apple Watch", "AirPods"],
    products: ["iPhone", "MacBook", "iPad", "Apple Watch", "AirPods"],
    related_categories: ["Electronics"],
    phone: "(201) 636-4840",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.5,
    reviews: 394,
    website: "https://www.apple.com",
    description: "Apple operates as a sprawling consumer tech destination showing the latest iterations of iPhones, MacBooks, iPads, and Apple Watches alongside a complete audio ecosystem. The modern interactive venue features expansive wooden islands for hands-on device exploration and a dedicated space for customer tech support. Visitors stop by to secure hardware updates, access personalized technical advice, or purchase verified structural device accessories.",
    seo_intro: "Apple at American Dream Mall stands as a flagship architectural and technology focal point located on Level 2 within Court B. The hyper-modern retail space delivers an expansive interactive layout where tech enthusiasts professionals and daily creators can explore the entire Apple ecosystem firsthand.",
    faqs: [
      { q: "What does Apple sell at American Dream?", a: "Apple sells premium consumer electronics including iPhones MacBooks iPads Apple Watches AirPods home automation hubs and official tech hardware protection accessories." },
      { q: "Where is Apple located in American Dream Mall?", a: "Apple is located on Level 2 within Court B sitting near Entrance B with the absolute closest parking found at Deck B." },
      { q: "What are the store hours for Apple at American Dream?", a: "Apple is open for visitors Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "arabian-oud",
    store_name: "Arabian Oud",
    category: "Beauty & Wellness",
    subcategory: "Luxury Fragrance",
    floor: 1,
    floor_zone: "Level 1, Court C",
    zone_id: "court_c",
    primary_parking_id: "deck_c",
    target_customers: ["Luxury Shoppers"],
    target_customer: ["Luxury Shoppers"],
    popular_products: ["Oud Perfume", "Incense", "Concentrated Oils", "Musk"],
    products: ["Oud Perfume", "Incense", "Concentrated Oils", "Musk"],
    related_categories: ["Beauty"],
    phone: "(551) 258-1549",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.6,
    reviews: 74,
    website: "https://www.arabianoud.com",
    description: "Arabian Oud provides an opulent fragrance retail setting specializing in traditional incense, premium oil blends, and world-class Eastern perfumes. The store offers custom sensory experiences where customers uncover complex aroma profiles featuring authentic agarwood oil, Damascus rose, and rare warm ambers. Fragrance collectors visit this outpost to obtain high-concentration artisanal sprays and statement gift boxes enclosed in signature decorative bottles.",
    seo_intro: "Arabian Oud at American Dream Mall introduces an unparalleled Eastern sensory journey inside a gorgeous scent lounge located on Level 1 within Court C. As an international leader in luxury oriental perfumes this specialized establishment houses rare traditional incense authentic agarwood extractions high-concentration musk sprays and bespoke botanical oil blends.",
    faqs: [
      { q: "What does Arabian Oud sell at American Dream?", a: "Arabian Oud sells premium Eastern fragrances including authentic luxury oud perfumes traditional incense sticks pure concentrated oil blends and custom musk creations wrapped in signature bottles." },
      { q: "Where is Arabian Oud located in American Dream Mall?", a: "Arabian Oud is located on Level 1 within Court C positioned with immediate access from Entrance C and Parking Deck C." },
      { q: "What are the store hours for Arabian Oud at American Dream?", a: "Arabian Oud runs Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "aritzia",
    store_name: "Aritzia",
    category: "Apparel & Accessories",
    subcategory: "Women's Boutique",
    floor: 1,
    floor_zone: "Level 1, Court C",
    zone_id: "court_c",
    primary_parking_id: "deck_c",
    target_customers: ["Professionals", "Luxury Shoppers"],
    target_customer: ["Professionals", "Luxury Shoppers"],
    popular_products: ["Super Puff Coat", "Babaton Trousers", "Sculpt Knit Tops", "Bodysuits"],
    products: ["Super Puff Coat", "Babaton Trousers", "Sculpt Knit Tops", "Bodysuits"],
    related_categories: ["Fashion"],
    phone: "(201) 351-1823",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.1,
    reviews: 63,
    website: "https://www.aritzia.com",
    description: "Aritzia functions as an upscale women's fashion boutique delivering beautifully constructed clothing collections spanning tailored everyday workwear, seasonal down coats, and clean lifestyle basics. The curated space highlights an array of proprietary brands focused on premium material construction and precise structural fit. Fashion-forward shoppers navigate this location to procure trend-aligned work wardrobes, minimalist everyday separates, and reliable cold-weather outerwear pieces.",
    seo_intro: "Aritzia at American Dream Mall operates as an expansive luxury fashion playground for women situated beautifully on Level 1 within Court C. The thoughtfully curated retail interior delivers a seamless blend of elevated independent apparel lines that focus on meticulous structural tailoring and world-class textiles.",
    faqs: [
      { q: "What does Aritzia sell at American Dream?", a: "Aritzia sells boutique women fashion including premium down coats tailored corporate trousers sculpt knit separates elevated dresses minimalist loungewear and modern styling accessories." },
      { q: "Where is Aritzia located in American Dream Mall?", a: "Aritzia is located on Level 1 within Court C close to the main Entrance C doors and corresponding Parking Deck C fields." },
      { q: "What are the store hours for Aritzia at American Dream?", a: "Aritzia is open Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:05 PM."}
    ]
  },
  {
    id: "bath-body-works",
    store_name: "Bath & Body Works",
    category: "Beauty & Wellness",
    subcategory: "Personal Care",
    floor: 1,
    floor_zone: "Level 1, Court A",
    zone_id: "court_a",
    primary_parking_id: "deck_a",
    target_customers: ["Families", "Teenagers"],
    target_customer: ["Families", "Teenagers"],
    popular_products: ["3-Wick Candles", "Fine Fragrance Mists", "Wallflowers", "Hand Soaps"],
    products: ["3-Wick Candles", "Fine Fragrance Mists", "Wallflowers", "Hand Soaps"],
    related_categories: ["Beauty"],
    phone: "(201) 340-2035",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.6,
    reviews: 114,
    website: "https://www.bathandbodyworks.com",
    description: "Bath & Body Works offers a deeply scented personal care retail experience packed with seasonal hand soaps, structural home 3-wick candles, rich body lotions, and target-focused skincare remedies. The store presents categorized wall displays that invite guests to test evolving fruit, floral, and warm spice scent profiles. Families and gifting shoppers visit to select custom personal care arrays and aromatic home enhancements.",
    seo_intro: "Bath & Body Works at American Dream Mall introduces an aromatic paradise of signature personal care items on Level 1 within Court A. The high-volume retail location provides a brilliantly organized sensory experience featuring organized columns of seasonal foaming hand soaps fine fragrance mists and three-wick candles.",
    faqs: [
      { q: "What does Bath & Body Works sell at American Dream?", a: "Bath & Body Works sells personal care and home items including three-wick candles fine fragrance body mists foaming hand soaps therapeutic aromatherapy lotions and hand sanitizer gels." },
      { q: "Where is Bath & Body Works located in American Dream Mall?", a: "Bath & Body Works is positioned on Level 1 within Court A with swift access out of Entrance A and Parking Deck A." },
      { q: "What are the store hours for Bath & Body Works at American Dream?", a: "The location is open Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "boss",
    store_name: "BOSS",
    category: "Apparel & Accessories",
    subcategory: "Luxury Menswear",
    floor: 1,
    floor_zone: "Level 1, Court D",
    zone_id: "court_d",
    primary_parking_id: "deck_d",
    target_customers: ["Professionals", "Luxury Shoppers"],
    target_customer: ["Professionals", "Luxury Shoppers"],
    popular_products: ["Tailored Suits", "Leather Dress Shoes", "Sportcoats", "Polo Shirts"],
    products: ["Tailored Suits", "Leather Dress Shoes", "Sportcoats", "Polo Shirts"],
    related_categories: ["Fashion", "Luxury"],
    phone: "(201) 621-1402",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.2,
    reviews: 29,
    website: "https://www.hugoboss.com",
    description: "BOSS delivers a sophisticated tailored luxury retail environment featuring structural menswear, precise modern suiting, premium casual sportswear, and high-end footwear. The boutique highlights clean German tailoring engineering alongside versatile everyday leather coordinates. Business professionals and luxury lifestyle consumers explore this environment to establish elevated workwear options, tailored dinner jackets, or minimalist luxury athletic outerwear pieces.",
    seo_intro: "BOSS at American Dream Mall defines contemporary sophistication with a meticulously designed premium apparel environment located on Level 1 within Court D. Representing elite German fashion design engineering this location delivers structured tailored suits professional mens styling options premium lifestyle sportswear and elevated leather footwear styles.",
    faqs: [
      { q: "What does BOSS sell at American Dream?", a: "BOSS sells luxury tailored suiting professional menswear premium sportswear designer polo shirts leather dress shoes and matching sophisticated leather coordinates." },
      { q: "Where is BOSS located in American Dream Mall?", a: "BOSS is located on Level 1 within Court D sitting in close proximity to Entrance D and Parking Deck D." },
      { q: "What are the store hours for BOSS at American Dream?", a: "BOSS operates Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "boxlunch",
    store_name: "BoxLunch",
    category: "Kids, Toys & Specialty",
    subcategory: "Pop Culture Novelties",
    floor: 1,
    floor_zone: "Level 1, Court A",
    zone_id: "court_a",
    primary_parking_id: "deck_a",
    target_customers: ["Teenagers", "Families"],
    target_customer: ["Teenagers", "Families"],
    popular_products: ["Mini Backpacks", "Funko Pop Figures", "Graphic Tees", "Anime Accessories"],
    products: ["Mini Backpacks", "Funko Pop Figures", "Graphic Tees", "Anime Accessories"],
    related_categories: ["Accessories", "Kids"],
    phone: "(201) 552-2051",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.6,
    reviews: 92,
    website: "https://www.boxlunch.com",
    description: "BoxLunch functions as a civic-minded novelty gift retailer packing pop culture apparel, licensed anime merchandise, graphic tees, specialized backpacks, and curated home collectibles. The store layout celebrates fandoms while providing a philanthropic backbone through direct food donation partnerships. Cultural collectors and teenage gift-givers visit this branch to source exclusive toys, entertainment clothing accessories, and rare industry items.",
    seo_intro: "BoxLunch at American Dream Mall introduces an incredibly unique civic-minded retail experience centered entirely on pop-culture enthusiasm and philanthropy located on Level 1 within Court A. The wonderfully eccentric store layout presents curated walls of licensed apparel anime collectibles graphic tees specialty mini-backpacks and exclusive pop-culture novelties.",
    faqs: [
      { q: "What does BoxLunch sell at American Dream?", a: "BoxLunch sells licensed pop-culture merchandise including media mini-backpacks collectibles anime graphic tees novelty items and specialized entertainment apparel accessories." },
      { q: "Where is BoxLunch located in American Dream Mall?", a: "BoxLunch is found on Level 1 within Court A reachable directly from Entrance A and utilizing Parking Deck A." },
      { q: "What are the store hours for BoxLunch at American Dream?", a: "BoxLunch runs Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "build-a-bear-workshop",
    store_name: "Build-A-Bear Workshop",
    category: "Kids, Toys & Specialty",
    subcategory: "Interactive Toys",
    floor: 1,
    floor_zone: "Level 1, Court A",
    zone_id: "court_a",
    primary_parking_id: "deck_a",
    target_customers: ["Families", "Kids"],
    target_customer: ["Families", "Kids"],
    popular_products: ["Custom Bears", "Licensed Plush", "Animal Outfits", "Sound Chips"],
    products: ["Custom Bears", "Licensed Plush", "Animal Outfits", "Sound Chips"],
    related_categories: ["Kids"],
    phone: "(201) 340-2101",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.5,
    reviews: 119,
    website: "https://www.buildabear.com",
    description: "Build-A-Bear Workshop introduces an experiential retail setting where families and children engage directly in crafting custom stuffed animals, adding physical stuffing, custom sound elements, and personalized outfits. The step-by-step layout turns standard retail into a lasting memory milestone. Families and youth groups navigate this outpost to mark celebratory events or build custom plush companions using a massive variety of pop-culture licenses.",
    seo_intro: "Build-A-Bear Workshop at American Dream Mall takes interactive family entertainment to the next level within a spacious hands-on workshop storefront located on Level 1 within Court A. Far beyond a standard retail store this experiential platform lets children and families custom manufacture their own plush companions.",
    faqs: [
      { q: "What does Build-A-Bear Workshop sell at American Dream?", a: "Build-A-Bear Workshop sells custom stuffed animals interactive plush toys licensed character editions custom sound inserts and extensive micro-apparel outfits." },
      { q: "Where is Build-A-Bear Workshop located in American Dream Mall?", a: "Build-A-Bear Workshop is situated on Level 1 within Court A easily accessed via Entrance A and closest to Parking Deck A." },
      { q: "What are the store hours for Build-A-Bear Workshop at American Dream?", a: "The workshop is open Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "champs-sports",
    store_name: "Champs Sports",
    category: "Apparel & Accessories",
    subcategory: "Athletic Gear",
    floor: 2,
    floor_zone: "Level 2, Court D",
    zone_id: "court_d",
    primary_parking_id: "deck_d",
    target_customers: ["Sneaker Collectors", "Teenagers"],
    target_customer: ["Sneaker Collectors", "Teenagers"],
    popular_products: ["Basketball Sneakers", "Team Jerseys", "Athletic Shorts", "Running Shoes"],
    products: ["Basketball Sneakers", "Team Jerseys", "Athletic Shorts", "Running Shoes"],
    related_categories: ["Sportswear", "Footwear"],
    phone: "(201) 507-0130",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.1,
    reviews: 58,
    website: "https://www.champssports.com",
    description: "Champs Sports provides an energetic athletic footwear and clothing environment dealing in high-demand basketball sneakers, signature team jerseys, performance running tracks, and athletic street apparel. The layout prioritizes premium sneaker drops and active lifestyle apparel collections from global athletic mainstays. Sneaker collectors and young athletes converge on this storefront to secure fresh sneaker drops, lifestyle athletic gear, and team performance clothing.",
    seo_intro: "Champs Sports at American Dream Mall commands the performance sneaker landscape with an intense high-energy flagship layout located on Level 2 within Court D. The tech-inspired store environment focuses directly on elite basketball sneakers premier running footwear team sports jerseys and modern street athletic apparel styles.",
    faqs: [
      { q: "What does Champs Sports sell at American Dream?", a: "Champs Sports sells premium athletic shoes performance basketball sneakers team sports jerseys active athletic shorts and modern street-inspired lifestyle apparel." },
      { q: "Where is Champs Sports located in American Dream Mall?", a: "Champs Sports is located on Level 2 within Court D positioned near Entrance D with direct proximity to Parking Deck D." },
      { q: "What are the store hours for Champs Sports at American Dream?", a: "Champs Sports store hours are Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "charlotte-russe",
    store_name: "Charlotte Russe",
    category: "Apparel & Accessories",
    subcategory: "Fast Fashion",
    floor: 1,
    floor_zone: "Level 1, Court A",
    zone_id: "court_a",
    primary_parking_id: "deck_a",
    target_customers: ["Teenagers", "Families"],
    target_customer: ["Teenagers"],
    popular_products: ["Nightlife Dresses", "Crop Tops", "High Waisted Denim", "Fashion Sandals"],
    products: ["Nightlife Dresses", "Crop Tops", "High Waisted Denim", "Fashion Sandals"],
    related_categories: ["Fashion", "Accessories"],
    phone: "(201) 212-6134",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 3.8,
    reviews: 32,
    website: "https://www.charlotterusse.com",
    description: "Charlotte Russe serves as a high-velocity, accessible fast-fashion outpost supplying trendy juniors clothing, nightlife dresses, everyday denim, and affordable footwear styles for young women. The floor plan is designed for budget-conscious fashion navigation, highlighting rotating seasonal party outfits and daily style essentials. Teenagers and young consumers shop here to quickly secure affordable accessories and immediate runway-inspired club fashion wear.",
    seo_intro: "Charlotte Russe at American Dream Mall delivers a fast-paced hyper-affordable fashion retail destination tailored for young women situated on Level 1 within Court A. The vibrant high-volume storefront specializes in high-velocity trend turnarounds offering extensive collections.",
    faqs: [
      { q: "What does Charlotte Russe sell at American Dream?", a: "Charlotte Russe sells affordable juniors fashion apparel including nightlife party dresses graphic crop tops high-waisted jeans fast-fashion footwear and trendy styling accessories." },
      { q: "Where is Charlotte Russe located in American Dream Mall?", a: "Charlotte Russe is positioned on Level 1 within Court A with swift exit and entry lines via Entrance A and Parking Deck A." },
      { q: "What are the store hours for Charlotte Russe at American Dream?", a: "Charlotte Russe operates Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "clarks",
    store_name: "Clarks",
    category: "Footwear",
    subcategory: "Comfort Shoes",
    floor: 2,
    floor_zone: "Level 2, Garden Court",
    zone_id: "garden_court",
    primary_parking_id: "deck_c",
    target_customers: ["Professionals", "Families"],
    target_customer: ["Professionals", "Families"],
    popular_products: ["Desert Boots", "Wallabees", "Leather Loafers", "Comfort Dress Shoes"],
    products: ["Desert Boots", "Wallabees", "Leather Loafers", "Comfort Dress Shoes"],
    related_categories: ["Footwear"],
    phone: "(201) 515-3912",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.1,
    reviews: 21,
    website: "https://www.clarks.com",
    description: "Clarks presents a heritage leather footwear environment known for structural comfort, premium construction materials, and timeless English design styles. The boutique displays legendary desert boots, flexible daily walking shoes, leather business loafers, and orthotic-supported dress footwear options. Lifestyle consumers and professional workers look to this location to secure long-lasting everyday comfort footwear that bridges formal professional requirements and smart casual weekend trips.",
    seo_intro: "Clarks at American Dream Mall offers an incredibly refined heritage shopping environment dedicated entirely to ergonomic comfort shoes and timeless footwear designs located on Level 2 within the unique Garden Court.",
    faqs: [
      { q: "What does Clarks sell at American Dream?", a: "Clarks sells heritage comfort shoes premium leather dress loafers legendary desert boots casual walking shoes and specialized orthotic-supported footwear models." },
      { q: "Where is Clarks located in American Dream Mall?", a: "Clarks is situated on Level 2 within the Garden Court section near Entrance A and corresponding Parking Deck A fields." },
      { q: "What are the store hours for Clarks at American Dream?", a: "Clarks operating hours run Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "coach",
    store_name: "Coach",
    category: "Apparel & Accessories",
    subcategory: "Luxury Leather Goods",
    floor: 1,
    floor_zone: "Level 1, Court D",
    zone_id: "court_d",
    primary_parking_id: "deck_d",
    target_customers: ["Luxury Shoppers", "Professionals"],
    target_customer: ["Luxury Shoppers", "Professionals"],
    popular_products: ["Tabby Handbag", "Leather Wallets", "Tote Bags", "Designer Coats"],
    products: ["Tabby Handbag", "Leather Wallets", "Tote Bags", "Designer Coats"],
    related_categories: ["Luxury", "Accessories", "Fashion"],
    phone: "(201) 340-2016",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.4,
    reviews: 41,
    website: "https://www.coach.com",
    description: "Coach presents a beautifully lit luxury accessory environment displaying signature leather goods, precision-crafted handbags, designer wallets, travel luggage, and premium lifestyle jewelry. The storefront demonstrates fine modern American luxury craftsmanship using high-grade grain leathers and historic patterns. Fashion collectors and luxury shoppers navigate this boutique to acquire iconic statement bags, durable small leather goods, and refined lifestyle gift assets.",
    seo_intro: "Coach at American Dream Mall defines contemporary luxury retail with a gorgeously illuminated accessory boutique located on Level 1 within Court D. Showcasing premium American craftsmanship and design legacy this specialized store houses an immaculate array of fine grain leather handbags.",
    faqs: [
      { q: "What does Coach sell at American Dream?", a: "Coach sells luxury leather goods including designer handbags grain leather wallets travel accessories statement trench coats and premium fashion jewelry items." },
      { q: "Where is Coach located in American Dream Mall?", a: "Coach is located on Level 1 within Court D easily reachable using Entrance D and utilizing Parking Deck D." },
      { q: "What are the store hours for Coach at American Dream?", a: "The Coach boutique operates Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "columbia-sportswear",
    store_name: "Columbia Sportswear",
    category: "Apparel & Accessories",
    subcategory: "Outdoor Performance",
    floor: 1,
    floor_zone: "Level 1, Court G",
    zone_id: "court_g",
    primary_parking_id: "deck_g",
    target_customers: ["Outdoor Enthusiasts", "Families"],
    target_customer: ["Outdoor Enthusiasts", "Families"],
    popular_products: ["Winter Parkas", "Hiking Boots", "Fleece Jackets", "Omni-Shade Shirts"],
    products: ["Winter Parkas", "Hiking Boots", "Fleece Jackets", "Omni-Shade Shirts"],
    related_categories: ["Outdoor", "Sportswear", "Apparel & Accessories"],
    phone: "(201) 340-5231",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.3,
    reviews: 77,
    website: "https://www.columbia.com",
    description: "Columbia Sportswear handles rugged outdoor performance outerwear, technical trail equipment, weather-resistant hiking boots, and sun-protective sportswear apparel. The showroom targets multi-climate adaptability, stocking proprietary heat-reflective winter parkas and breathable trail apparel lines. Outdoor enthusiasts and traveling families frequent this branch to prepare for demanding weather conditions, wilderness tracking, or cold-weather recreation.",
    seo_intro: "Columbia Sportswear at American Dream Mall anchors the complex's outdoor lifestyle segment with a robust technical equipment showroom located on Level 1 within Court G. Engineered specifically for wilderness adventurers trail hikers cold-weather enthusiasts and traveling families.",
    faqs: [
      { q: "What does Columbia Sportswear sell at American Dream?", a: "Columbia Sportswear sells outdoor gear performance parkas weather-resistant hiking boots trail footwear fleece jackets and UV-protective activewear sportswear lines." },
      { q: "Where is Columbia Sportswear located in American Dream Mall?", a: "Columbia Sportswear is found on Level 1 within Court G situated right by Entrance G and Parking Deck G." },
      { q: "What are the store hours for Columbia Sportswear at American Dream?", a: "Columbia Sportswear is open Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "dsw",
    store_name: "DSW Designer Shoe Warehouse",
    category: "Footwear",
    subcategory: "Shoe Warehouse",
    floor: 2,
    floor_zone: "Level 2, Court A",
    zone_id: "court_a",
    primary_parking_id: "deck_a",
    target_customers: ["Families", "Sneaker Collectors"],
    target_customer: ["Families", "Sneaker Collectors"],
    popular_products: ["Running Sneakers", "Leather Boots", "Formal Dress Heels", "Casual Sandals"],
    products: ["Running Sneakers", "Leather Boots", "Formal Dress Heels", "Casual Sandals"],
    related_categories: ["Footwear"],
    phone: "(201) 552-2085",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.2,
    reviews: 143,
    website: "https://www.dsw.com",
    description: "DSW Designer Shoe Warehouse operates a massive, multi-brand footwear showroom stacking thousands of athletic sneakers, professional dress shoes, seasonal sandals, and leather boots at competitive prices. The warehouse floor is clearly sorted by sizing matrix and shoe categorization block for independent high-volume browsing. Families and sneaker collectors explore this location to address complete domestic shoe needs across diverse brands simultaneously.",
    seo_intro: "DSW Designer Shoe Warehouse at American Dream Mall presents a massive footwear paradise holding thousands of multi-brand shoes within an expansive layout located on Level 2 within Court A. The high-volume megastore is organized logically using an accessible grid framework.",
    faqs: [
      { q: "What does DSW Designer Shoe Warehouse sell at American Dream?", a: "DSW Designer Shoe Warehouse sells massive arrays of brand-name shoes running sneakers formal dress heels leather boots casual sandals and athleisure footwear." },
      { q: "Where is DSW Designer Shoe Warehouse located in American Dream Mall?", a: "DSW is positioned on Level 2 within Court A with immediate access straight out of Entrance A and Parking Deck A." },
      { q: "What are the store hours for DSW Designer Shoe Warehouse at American Dream?", a: "The warehouse is open Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  },
  {
    id: "express",
    store_name: "Express",
    category: "Apparel & Accessories",
    subcategory: "Smart Casual",
    floor: 1,
    floor_zone: "Level 1, Court A",
    zone_id: "court_a",
    primary_parking_id: "deck_a",
    target_customers: ["Professionals", "Teenagers"],
    target_customer: ["Professionals", "Teenagers"],
    popular_products: ["Performance Shirts", "Tailored Blazers", "Men's Denim", "Cocktail Dresses"],
    products: ["Performance Shirts", "Tailored Blazers", "Men's Denim", "Cocktail Dresses"],
    related_categories: ["Fashion", "Apparel & Accessories"],
    phone: "(201) 515-3759",
    hours: "Mon-Thu 11:00 AM - 9:00 PM, Fri-Sat 11:00 AM - 10:00 PM, Sun 11:00 AM - 8:00 PM",
    rating: 4.0,
    reviews: 48,
    website: "https://www.express.com",
    description: "Express serves up a versatile smart-casual clothing retail space specializing in contemporary workwear apparel, performance dress shirts, crisp denim lines, and nightlife fashion options. The storefront focuses on seamless transition tailoring that carries professionals from desk responsibilities to evening social gatherings. Young professionals and style-conscious shoppers explore this footprint to source reliable, sharp styling profiles.",
    seo_intro: "Express at American Dream Mall delivers a sharp trend-driven smart casual retail environment for men and women situated on Level 1 within Court A. Focusing on modern lifestyle transitions the store presents extensive apparel inventories.",
    faqs: [
      { q: "What does Express sell at American Dream?", a: "Express sells smart casual fashion apparel including performance dress shirts tailored corporate blazers designer denim lines lifestyle cocktail dresses and casual styling accessories." },
      { q: "Where is Express located in American Dream Mall?", a: "Express is located on Level 1 within Court A conveniently near the main Entrance A doors and Parking Deck A fields." },
      { q: "What are the store hours for Express at American Dream?", a: "Express store hours run Monday through Thursday from 11:00 AM to 9:00 PM Friday and Saturday from 11:00 AM to 10:00 PM and Sunday from 11:00 AM to 8:00 PM." }
    ]
  }
];

const CSV_ENRICHMENT: Record<string, {
  store_id: string;
  category: string;
  subcategory: string;
  official_website: string;
  phone: string;
  opening_hours: string;
  google_rating: number;
  review_count: number;
  floor_str: string;
  zone: string;
  nearest_entrance: string;
  nearest_parking: string;
  best_for: string;
  budget_level: string;
  target_customer_str: string;
  popular_products_str: string;
  related_categories_str: string;
  google_maps_url: string;
  last_verified: string;
  store_name?: string;
}> = {
  "abercrombie-fitch": {
    store_id: "ADM-0001",
    category: "Fashion",
    subcategory: "Casual Apparel",
    official_website: "https://www.abercrombie.com",
    phone: "(201) 515-3733",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 85,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Professionals | Teenagers",
    popular_products_str: "Jeans | Outerwear | Graphic Tees | Fragrance",
    related_categories_str: "Lifestyle | Accessories",
    google_maps_url: "https://maps.google.com/?cid=1356789210456712390",
    last_verified: "2026-06-07"
  },
  "abercrombie-kids": {
    store_id: "ADM-0002",
    category: "Kids",
    subcategory: "Children's Clothing",
    official_website: "https://www.abercrombie.com",
    phone: "(201) 515-3647",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 14,
    floor_str: "Level 1",
    zone: "Court B",
    nearest_entrance: "Entrance B",
    nearest_parking: "Deck B",
    best_for: "Kids",
    budget_level: "$$",
    target_customer_str: "Families | Kids",
    popular_products_str: "Kids Jeans | Hoodies | Activewear | Graphic Tees",
    related_categories_str: "Fashion | Lifestyle",
    google_maps_url: "https://maps.google.com/?cid=4671238901245678912",
    last_verified: "2026-06-07"
  },
  "adidas": {
    store_id: "ADM-0003",
    category: "Sportswear",
    subcategory: "Athletic Performance",
    official_website: "https://www.adidas.com",
    phone: "(201) 636-2358",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 122,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$",
    target_customer_str: "Sneaker Collectors | Outdoor Enthusiasts | Families",
    popular_products_str: "Running Shoes | Soccer Cleats | Tracksuits | Sneakers",
    related_categories_str: "Footwear | Outdoor",
    google_maps_url: "https://maps.google.com/?cid=8912345678901234567",
    last_verified: "2026-06-07"
  },
  "aland": {
    store_id: "ADM-0004",
    category: "Fashion",
    subcategory: "Streetwear Boutique",
    official_website: "https://www.alandusa.com",
    phone: "(551) 248-5221",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 108,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Teenagers | Tourists | Students",
    popular_products_str: "Korean Streetwear | Oversized Hoodies | K-Beauty Accessories",
    related_categories_str: "Lifestyle | Beauty",
    google_maps_url: "https://maps.google.com/?cid=1234567890123456789",
    last_verified: "2026-06-07"
  },
  "aldo": {
    store_id: "ADM-0005",
    category: "Footwear",
    subcategory: "Fashion Shoes",
    official_website: "https://www.aldoshoes.com",
    phone: "(201) 340-1925",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.0,
    review_count: 45,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Accessories",
    budget_level: "$$",
    target_customer_str: "Professionals | Tourists",
    popular_products_str: "High Heels | Leather Loafers | Boots | Handbags",
    related_categories_str: "Fashion | Luxury",
    google_maps_url: "https://maps.google.com/?cid=2345678901234567890",
    last_verified: "2026-06-07"
  },
  "alo-yoga": {
    store_id: "ADM-0006",
    category: "Sportswear",
    subcategory: "Athleisure & Yoga",
    official_website: "https://www.aloyoga.com",
    phone: "(201) 608-2512",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 38,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$$",
    target_customer_str: "Luxury Shoppers | Professionals",
    popular_products_str: "Yoga Pants | Airlift Leggings | Hoodies | Workout Sets",
    related_categories_str: "Lifestyle | Fashion",
    google_maps_url: "https://maps.google.com/?cid=3456789012345678901",
    last_verified: "2026-06-07"
  },
  "apple": {
    store_id: "ADM-0007",
    category: "Electronics",
    subcategory: "Consumer Technology",
    official_website: "https://www.apple.com",
    phone: "(201) 636-4840",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 394,
    floor_str: "Level 2",
    zone: "Court B",
    nearest_entrance: "Entrance B",
    nearest_parking: "Deck B",
    best_for: "Tech Products",
    budget_level: "$$$",
    target_customer_str: "Tech Enthusiasts | Professionals | Families",
    popular_products_str: "iPhone | MacBook | iPad | Apple Watch | AirPods",
    related_categories_str: "Services",
    google_maps_url: "https://maps.google.com/?cid=4567890123456789012",
    last_verified: "2026-06-07"
  },
  "arabian-oud": {
    store_id: "ADM-0008",
    category: "Beauty",
    subcategory: "Luxury Fragrance",
    official_website: "https://www.arabianoud.com",
    phone: "(551) 258-1549",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.6,
    review_count: 74,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists",
    popular_products_str: "Oud Perfume | Incense | Concentrated Oils | Musk",
    related_categories_str: "Lifestyle | Luxury",
    google_maps_url: "https://maps.google.com/?cid=5678901234567890123",
    last_verified: "2026-06-07"
  },
  "aritzia": {
    store_id: "ADM-0009",
    category: "Fashion",
    subcategory: "Women's Boutique",
    official_website: "https://www.aritzia.com",
    phone: "(201) 351-1823",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 63,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$$",
    target_customer_str: "Luxury Shoppers | Professionals",
    popular_products_str: "Super Puff Coat | Babaton Trousers | Sculpt Knit Tops | Bodysuits",
    related_categories_str: "Luxury",
    google_maps_url: "https://maps.google.com/?cid=6789012345678901234",
    last_verified: "2026-06-07"
  },
  "bath-body-works": {
    store_id: "ADM-0010",
    category: "Beauty",
    subcategory: "Personal Care",
    official_website: "https://www.bathandbodyworks.com",
    phone: "(201) 340-2035",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.6,
    review_count: 114,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Beauty Products",
    budget_level: "$",
    target_customer_str: "Families | Teenagers",
    popular_products_str: "3-Wick Candles | Fine Fragrance Mists | Wallflowers | Hand Soaps",
    related_categories_str: "Lifestyle | Home",
    google_maps_url: "https://maps.google.com/?cid=7890123456789012345",
    last_verified: "2026-06-07"
  },
  "boss": {
    store_id: "ADM-0011",
    category: "Luxury",
    subcategory: "Premium Menswear",
    official_website: "https://www.hugoboss.com",
    phone: "(201) 621-1402",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 29,
    floor_str: "Level 1",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Professionals | Luxury Shoppers",
    popular_products_str: "Tailored Suits | Leather Dress Shoes | Sportcoats | Polo Shirts",
    related_categories_str: "Fashion",
    google_maps_url: "https://maps.google.com/?cid=8901234567890123456",
    last_verified: "2026-06-07"
  },
  "boxlunch": {
    store_id: "ADM-0012",
    category: "Lifestyle",
    subcategory: "Pop Culture Novelties",
    official_website: "https://www.boxlunch.com",
    phone: "(201) 552-2051",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.6,
    review_count: 92,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Gifts",
    budget_level: "$$",
    target_customer_str: "Teenagers | Students | Families",
    popular_products_str: "Mini Backpacks | Funko Pop Figures | Graphic Tees | Anime Accessories",
    related_categories_str: "Toys | Kids",
    google_maps_url: "https://maps.google.com/?cid=9012345678901234567",
    last_verified: "2026-06-07"
  },
  "build-a-bear-workshop": {
    store_id: "ADM-0013",
    category: "Toys",
    subcategory: "Interactive Experience",
    official_website: "https://www.buildabear.com",
    phone: "(201) 340-2101",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 119,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Kids",
    budget_level: "$$",
    target_customer_str: "Families | Kids",
    popular_products_str: "Custom Bears | Licensed Plush | Animal Outfits | Sound Chips",
    related_categories_str: "Entertainment | Kids",
    google_maps_url: "https://maps.google.com/?cid=0123456789012345678",
    last_verified: "2026-06-07"
  },
  "champs-sports": {
    store_id: "ADM-0014",
    category: "Sportswear",
    subcategory: "Athletic Apparel & Shoes",
    official_website: "https://www.champssports.com",
    phone: "(201) 507-0130",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 58,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$",
    target_customer_str: "Sneaker Collectors | Teenagers | Students",
    popular_products_str: "Basketball Sneakers | Team Jerseys | Athletic Shorts | Running Shoes",
    related_categories_str: "Footwear",
    google_maps_url: "https://maps.google.com/?cid=1234509876543210987",
    last_verified: "2026-06-07"
  },
  "charlotte-russe": {
    store_id: "ADM-0015",
    category: "Fashion",
    subcategory: "Fast Fashion Juniors",
    official_website: "https://www.charlotterusse.com",
    phone: "(201) 212-6134",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 3.8,
    review_count: 32,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Fashion",
    budget_level: "$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "Nightlife Dresses | Crop Tops | High Waisted Denim | Fashion Sandals",
    related_categories_str: "Accessories",
    google_maps_url: "https://maps.google.com/?cid=2345610987654321098",
    last_verified: "2026-06-07"
  },
  "clarks": {
    store_id: "ADM-0016",
    category: "Footwear",
    subcategory: "Comfort & Leather Shoes",
    official_website: "https://www.clarks.com",
    phone: "(201) 515-3912",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 21,
    floor_str: "Level 2",
    zone: "Garden Court",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Accessories",
    budget_level: "$$",
    target_customer_str: "Professionals | Families",
    popular_products_str: "Desert Boots | Wallabees | Leather Loafers | Comfort Dress Shoes",
    related_categories_str: "Fashion",
    google_maps_url: "https://maps.google.com/?cid=3456721098765432109",
    last_verified: "2026-06-07"
  },
  "coach": {
    store_id: "ADM-0017",
    category: "Luxury",
    subcategory: "Designer Leather Goods",
    official_website: "https://www.coach.com",
    phone: "(201) 340-2016",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 41,
    floor_str: "Level 1",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Professionals",
    popular_products_str: "Tabby Handbag | Leather Wallets | Tote Bags | Designer Coats",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "https://maps.google.com/?cid=4567832109876543210",
    last_verified: "2026-06-07"
  },
  "columbia-sportswear": {
    store_id: "ADM-0018",
    category: "Outdoor",
    subcategory: "Performance Outerwear",
    official_website: "https://www.columbia.com",
    phone: "(201) 340-5231",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 77,
    floor_str: "Level 1",
    zone: "Court G",
    nearest_entrance: "Entrance G",
    nearest_parking: "Deck G",
    best_for: "Outdoor Gear",
    budget_level: "$$",
    target_customer_str: "Outdoor Enthusiasts | Families",
    popular_products_str: "Winter Parkas | Hiking Boots | Fleece Jackets | Omni-Shade Shirts",
    related_categories_str: "Sportswear | Footwear",
    google_maps_url: "https://maps.google.com/?cid=5678943210987654321",
    last_verified: "2026-06-07"
  },
  "dsw": {
    store_id: "ADM-0019",
    category: "Footwear",
    subcategory: "Value Shoe Megastore",
    official_website: "https://www.dsw.com",
    phone: "(201) 552-2085",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 143,
    floor_str: "Level 2",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Accessories",
    budget_level: "$$",
    target_customer_str: "Families | Sneaker Collectors",
    popular_products_str: "Running Sneakers | Leather Boots | Formal Dress Heels | Casual Sandals",
    related_categories_str: "Sportswear",
    google_maps_url: "https://maps.google.com/?cid=6789054321098765432",
    last_verified: "2026-06-07"
  },
  "express": {
    store_id: "ADM-0020",
    category: "Fashion",
    subcategory: "Modern Smart Casual",
    official_website: "https://www.express.com",
    phone: "(201) 515-3759",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.0,
    review_count: 48,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Professionals | Teenagers",
    popular_products_str: "Performance Shirts | Tailored Blazers | Men's Denim | Cocktail Dresses",
    related_categories_str: "Lifestyle",
    google_maps_url: "https://maps.google.com/?cid=7890165432109876543",
    last_verified: "2026-06-07"
  },
  "a-bathing-ape": {
    store_id: "ADM-0021",
    store_name: "A Bathing Ape",
    category: "Luxury",
    subcategory: "Streetwear & Luxury Fashion",
    official_website: "https://bape.com",
    phone: "",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 28,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Sneaker Collectors",
    popular_products_str: "BAPE STA Sneakers | Shark Hoodies | Graphic Tees",
    related_categories_str: "Fashion | Footwear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "armani-exchange": {
    store_id: "ADM-0022",
    store_name: "Armani Exchange",
    category: "Fashion",
    subcategory: "Contemporary Casual Apparel",
    official_website: "https://www.armaniexchange.com",
    phone: "(201) 340-2342",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 36,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$$",
    target_customer_str: "Professionals | Young Adults",
    popular_products_str: "Graphic T-Shirts | Designer Denim | Hoodies | Watches",
    related_categories_str: "Luxury | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "balenciaga": {
    store_id: "ADM-0023",
    store_name: "Balenciaga",
    category: "Luxury",
    subcategory: "High Fashion Boutique",
    official_website: "https://www.balenciaga.com",
    phone: "(201) 621-1502",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 3.9,
    review_count: 47,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists",
    popular_products_str: "Triple S Sneakers | Hourglass Bags | Oversized Hoodies | Leather Goods",
    related_categories_str: "Fashion | Footwear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "best-buy": {
    store_id: "ADM-0024",
    store_name: "Best Buy",
    category: "Electronics",
    subcategory: "Technology & Appliances",
    official_website: "https://www.bestbuy.com",
    phone: "(201) 531-7090",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 312,
    floor_str: "Level 3",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Tech Products",
    budget_level: "$$",
    target_customer_str: "Tech Enthusiasts | Families | Students",
    popular_products_str: "4K Smart TVs | Laptops | Gaming Consoles | Headphones",
    related_categories_str: "Services | Home",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "carpaccio": {
    store_id: "ADM-0025",
    store_name: "Carpaccio",
    category: "Food",
    subcategory: "Italian Fine Dining",
    official_website: "https://www.carpaccioamericandream.com",
    phone: "(201) 515-5255",
    opening_hours: "Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:30 AM - 9:30 PM",
    google_rating: 4.5,
    review_count: 418,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists | Professionals",
    popular_products_str: "Beef Carpaccio | Truffle Pasta | Margherita Pizza | Branzino",
    related_categories_str: "Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "dolce-gabbana": {
    store_id: "ADM-0026",
    store_name: "Dolce & Gabbana",
    category: "Luxury",
    subcategory: "Italian High Fashion",
    official_website: "https://www.dolcegabbana.com",
    phone: "(201) 552-2122",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 19,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers",
    popular_products_str: "Designer Handbags | Tailored Blazers | Fragrances | Silk Dresses",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "fabletics": {
    store_id: "ADM-0027",
    store_name: "Fabletics",
    category: "Sportswear",
    subcategory: "Activewear & Athleisure",
    official_website: "https://www.fabletics.com",
    phone: "(201) 212-6321",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 53,
    floor_str: "Level 2",
    zone: "Court B",
    nearest_entrance: "Entrance B",
    nearest_parking: "Deck B",
    best_for: "Sports Equipment",
    budget_level: "$$",
    target_customer_str: "Outdoor Enthusiasts | Young Adults",
    popular_products_str: "PowerHold Leggings | Men's Athletic Shorts | Sports Bras | Yoga Pants",
    related_categories_str: "Fashion | Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "foot-locker": {
    store_id: "ADM-0028",
    store_name: "Foot Locker",
    category: "Footwear",
    subcategory: "Athletic Shoes & Apparel",
    official_website: "https://www.footlocker.com",
    phone: "(201) 340-2510",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.0,
    review_count: 186,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$",
    target_customer_str: "Sneaker Collectors | Teenagers",
    popular_products_str: "Air Force 1s | Nike Tech Fleece | Running Shoes | Basketball Sneakers",
    related_categories_str: "Sportswear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "hm": {
    store_id: "ADM-0029",
    store_name: "H&M",
    category: "Fashion",
    subcategory: "Fast Fashion Apparel",
    official_website: "https://www.hm.com",
    phone: "(855) 466-7467",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 288,
    floor_str: "Level 1",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Fashion",
    budget_level: "$",
    target_customer_str: "Families | Teenagers | Students",
    popular_products_str: "Basic Tees | Denim Jeans | Knitwear | Children's Outfits",
    related_categories_str: "Kids | Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "hermes": {
    store_id: "ADM-0030",
    store_name: "Hermès",
    category: "Luxury",
    subcategory: "High Luxury Leather Goods",
    official_website: "https://www.hermes.com",
    phone: "(201) 515-4011",
    opening_hours: "Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed",
    google_rating: 4.6,
    review_count: 82,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers",
    popular_products_str: "Birkin Bags | Silk Scarves | Leather Wallets | Enamel Bracelets",
    related_categories_str: "Fashion | Jewelry",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "itsugar": {
    store_id: "ADM-0031",
    store_name: "IT'SUGAR",
    category: "Lifestyle",
    subcategory: "Giant Candy Department Store",
    official_website: "https://itsugar.com",
    phone: "(201) 531-7040",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 615,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Gifts",
    budget_level: "$$",
    target_customer_str: "Families | Kids | Tourists",
    popular_products_str: "Bulk Jelly Belly | Giant Gummy Bears | Novelty Candy Boxes | Pop Culture Merch",
    related_categories_str: "Toys | Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "isola-bella": {
    store_id: "ADM-0032",
    store_name: "Isola Bella",
    category: "Food",
    subcategory: "Champagne Bar & Lounge",
    official_website: "https://www.americandream.com",
    phone: "",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 14,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Professionals",
    popular_products_str: "Craft Cocktails | Fine Champagne | Gourmet Bites | Caviar",
    related_categories_str: "Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "kay-jewelers": {
    store_id: "ADM-0033",
    store_name: "Kay Jewelers",
    category: "Jewelry",
    subcategory: "Fine Jewelry & Engagement",
    official_website: "https://www.kay.com",
    phone: "(201) 340-5402",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 29,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Accessories",
    budget_level: "$$$",
    target_customer_str: "Families | Professionals",
    popular_products_str: "Diamond Engagement Rings | Gold Chains | Gemstone Necklaces | Watches",
    related_categories_str: "Luxury",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "levis": {
    store_id: "ADM-0034",
    store_name: "Levi's",
    category: "Fashion",
    subcategory: "Denim & Casual Lifestyle",
    official_website: "https://www.levi.com",
    phone: "(201) 340-1044",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 94,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Families | Teenagers | Professionals",
    popular_products_str: "501 Original Jeans | Denim Jackets | Graphic Logo Tees | Western Shirts",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "lululemon": {
    store_id: "ADM-0035",
    store_name: "Lululemon",
    category: "Sportswear",
    subcategory: "Premium Athletic Apparel",
    official_website: "https://shop.lululemon.com",
    phone: "(201) 340-4215",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 142,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Sports Equipment",
    budget_level: "$$$",
    target_customer_str: "Professionals | Fitness Enthusiasts",
    popular_products_str: "Align Leggings | ABC Pants | Define Jackets | Metal Vent Tech Tees",
    related_categories_str: "Fashion | Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "mango": {
    store_id: "ADM-0036",
    store_name: "Mango",
    category: "Fashion",
    subcategory: "European Contemporary Style",
    official_website: "https://shop.mango.com",
    phone: "(201) 212-6410",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.0,
    review_count: 61,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Professionals | Young Adults",
    popular_products_str: "Tailored Coats | Pleated Trousers | Evening Dresses | Handbags",
    related_categories_str: "Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "primark": {
    store_id: "ADM-0037",
    store_name: "Primark",
    category: "Fashion",
    subcategory: "Discount Value Department Store",
    official_website: "https://www.primark.com",
    phone: "(201) 552-2144",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 1014,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Family Shopping",
    budget_level: "$",
    target_customer_str: "Families | Students | Budget Shoppers",
    popular_products_str: "Basic Hoodies | Children's Pajamas | Fast Fashion Accessories | Home Blankets",
    related_categories_str: "Kids | Home",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "sainsburys-toys-r-us-studio": {
    store_id: "ADM-0038",
    store_name: "Sainsbury's (Toys R Us Studio)",
    category: "Toys",
    subcategory: "Experiential Toy Boutique",
    official_website: "https://www.toysrus.com",
    phone: "(201) 531-7110",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 455,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Kids",
    budget_level: "$$",
    target_customer_str: "Families | Kids",
    popular_products_str: "LEGO Sets | Barbie Dolls | Hot Wheels Cars | Board Games",
    related_categories_str: "Kids | Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "sephora": {
    store_id: "ADM-0039",
    store_name: "Sephora",
    category: "Beauty",
    subcategory: "Cosmetics & Skincare Retail",
    official_website: "https://www.sephora.com",
    phone: "(201) 340-9885",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 212,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Beauty Products",
    budget_level: "$$",
    target_customer_str: "Teenagers | Professionals | Luxury Shoppers",
    popular_products_str: "Preppy Skincare | High-End Foundations | Lip Glosses | Designer Perfumes",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "zara": {
    store_id: "ADM-0040",
    store_name: "Zara",
    category: "Fashion",
    subcategory: "Trend-Driven Apparel Flagship",
    official_website: "https://www.zara.com",
    phone: "(201) 340-9905",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 3.9,
    review_count: 564,
    floor_str: "Level 1",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Young Adults | Professionals | Teenagers",
    popular_products_str: "Blazers | Linen Shirts | Faux Leather Jackets | Women's Outerwear",
    related_categories_str: "Kids | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "alexander-wang": {
    store_id: "ADM-0041",
    store_name: "Alexander Wang",
    category: "Luxury",
    subcategory: "Avant-Garde Fashion",
    official_website: "https://www.alexanderwang.com",
    phone: "(201) 515-4122",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 15,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Fashion",
    popular_products_str: "Logo Hoodies | Attica Fanny Packs | Rhinestone Bags | Heeled Sandals",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "american-eagle": {
    store_id: "ADM-0042",
    store_name: "American Eagle",
    category: "Fashion",
    subcategory: "Casual Denim & Apparel",
    official_website: "https://www.ae.com",
    phone: "(201) 340-2715",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 84,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "AE Jeans | Graphic Tees | Hoodies | Swimwear",
    related_categories_str: "Lifestyle | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "anne-fontaine": {
    store_id: "ADM-0043",
    store_name: "Anne Fontaine",
    category: "Luxury",
    subcategory: "Premium Women's Ready-to-Wear",
    official_website: "https://www.annefontaine.com",
    phone: "(201) 515-4088",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 12,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Professionals",
    popular_products_str: "White Collared Shirts | Luxury Blouses | Evening Jackets | Leather Handbags",
    related_categories_str: "Fashion",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "asics": {
    store_id: "ADM-0044",
    store_name: "Asics",
    category: "Sportswear",
    subcategory: "Athletic Running Footwear",
    official_website: "https://www.asics.com",
    phone: "(201) 340-2114",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 73,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$",
    target_customer_str: "Outdoor Enthusiasts | Sneaker Collectors",
    popular_products_str: "GEL-Kayano Running Shoes | GEL-Nimbus Sneakers | Track Jackets | Athletic Socks",
    related_categories_str: "Footwear | Outdoor",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "aerie": {
    store_id: "ADM-0045",
    store_name: "Aerie",
    category: "Fashion",
    subcategory: "Intimates & Loungewear",
    official_website: "https://www.ae.com",
    phone: "(201) 340-2716",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 91,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "Crossover Leggings | Sports Bras | Swimsuits | Cozy Hoodies",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "banana-republic": {
    store_id: "ADM-0046",
    store_name: "Banana Republic",
    category: "Fashion",
    subcategory: "Modern Classical Apparel",
    official_website: "https://bananarepublic.gap.com",
    phone: "(201) 340-1510",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 33,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$$",
    target_customer_str: "Professionals | Luxury Shoppers",
    popular_products_str: "Linen Blazers | Silk Shirts | Chino Pants | Cashmere Sweaters",
    related_categories_str: "Lifestyle | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "brilliant-earth": {
    store_id: "ADM-0047",
    store_name: "Brilliant Earth",
    category: "Jewelry",
    subcategory: "Ethical Diamonds & Engagement",
    official_website: "https://www.brilliantearth.com",
    phone: "(201) 515-3200",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.7,
    review_count: 56,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Accessories",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Professionals",
    popular_products_str: "Lab-Grown Engagement Rings | Diamond Studs | Wedding Bands | Tennis Bracelets",
    related_categories_str: "Luxury",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "burberry": {
    store_id: "ADM-0048",
    store_name: "Burberry",
    category: "Luxury",
    subcategory: "British Heritage Fashion",
    official_website: "https://www.burberry.com",
    phone: "(201) 515-4050",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 39,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists",
    popular_products_str: "Heritage Trench Coats | Plaid Cashmere Scarves | Leather Handbags | Quilted Jackets",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "canada-goose": {
    store_id: "ADM-0049",
    store_name: "Canada Goose",
    category: "Outdoor",
    subcategory: "Luxury Performance Outerwear",
    official_website: "https://www.canadagoose.com",
    phone: "(201) 515-4200",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 115,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Outdoor Gear",
    budget_level: "$$$$",
    target_customer_str: "Outdoor Enthusiasts | Luxury Shoppers",
    popular_products_str: "Expedition Parkas | Lightweight Down Jackets | Rainwear | Knit Hoodies",
    related_categories_str: "Sportswear | Luxury",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "cartier": {
    store_id: "ADM-0050",
    store_name: "Cartier",
    category: "Luxury",
    subcategory: "Prestige High Jewelry & Watches",
    official_website: "https://www.cartier.com",
    phone: "",
    opening_hours: "Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed",
    google_rating: 4.7,
    review_count: 42,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers",
    popular_products_str: "Love Bracelets | Tank Watches | Santos de Cartier | Diamond Rings",
    related_categories_str: "Jewelry",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "celine": {
    store_id: "ADM-0051",
    store_name: "Celine",
    category: "Luxury",
    subcategory: "French Minimalist Luxury",
    official_website: "https://www.celine.com",
    phone: "",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 18,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers",
    popular_products_str: "Triomphe Handbags | Cat-Eye Sunglasses | Leather Belts | Tailored Coats",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "childrens-place": {
    store_id: "ADM-0052",
    store_name: "Children's Place",
    category: "Kids",
    subcategory: "Value Children's Clothing",
    official_website: "https://www.childrensplace.com",
    phone: "(201) 340-1940",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.0,
    review_count: 24,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Kids",
    budget_level: "$",
    target_customer_str: "Families | Kids",
    popular_products_str: "Matching Pajama Sets | Graphic Tees | Toddler Denim | School Uniforms",
    related_categories_str: "Fashion",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "cinnabon": {
    store_id: "ADM-0053",
    store_name: "Cinnabon",
    category: "Food",
    subcategory: "Fresh Baked Sweet Treats",
    official_website: "https://www.cinnabon.com",
    phone: "(201) 340-9511",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 132,
    floor_str: "Level 3",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Gifts",
    budget_level: "$",
    target_customer_str: "Families | Kids | Tourists",
    popular_products_str: "Classic Cinnamon Rolls | Minibons | Center of the Roll | Chillatta Beverages",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "crocs": {
    store_id: "ADM-0054",
    store_name: "Crocs",
    category: "Footwear",
    subcategory: "Casual Molded Footwear",
    official_website: "https://www.crocs.com",
    phone: "(201) 340-5120",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 241,
    floor_str: "Level 1",
    zone: "Court K",
    nearest_entrance: "Entrance G",
    nearest_parking: "Deck G",
    best_for: "Kids",
    budget_level: "$$",
    target_customer_str: "Families | Teenagers | Kids",
    popular_products_str: "Classic Clogs | Jibbitz Charms | Platform Crocs | Fleece-Lined Clogs",
    related_categories_str: "Fashion",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "dior": {
    store_id: "ADM-0055",
    store_name: "Dior",
    category: "Luxury",
    subcategory: "Haute Couture & Fine Leather",
    official_website: "https://www.dior.com",
    phone: "(201) 515-4100",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 88,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists",
    popular_products_str: "Lady Dior Handbag | Saddle Bags | Dior B23 Sneakers | J'adore Perfume",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "dunkin": {
    store_id: "ADM-0056",
    store_name: "Dunkin'",
    category: "Food",
    subcategory: "Coffee & Baked Goods",
    official_website: "https://www.dunkindonuts.com",
    phone: "(201) 340-4402",
    opening_hours: "Mon-Sat 9:00 AM - 10:00 PM | Sun 10:00 AM - 8:00 PM",
    google_rating: 3.9,
    review_count: 105,
    floor_str: "Level 2",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Fashion",
    budget_level: "$",
    target_customer_str: "Tourists | Students | Families",
    popular_products_str: "Iced Coffee | Glazed Donuts | Breakfast Sandwiches | Munchkins",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "eataly": {
    store_id: "ADM-0057",
    store_name: "Eataly",
    category: "Food",
    subcategory: "Artisanal Italian Marketplace",
    official_website: "https://www.eataly.com",
    phone: "(201) 515-5600",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 9:00 PM",
    google_rating: 4.6,
    review_count: 1844,
    floor_str: "Level 1",
    zone: "Court F",
    nearest_entrance: "Entrance F",
    nearest_parking: "Deck F",
    best_for: "Family Shopping",
    budget_level: "$$",
    target_customer_str: "Tourists | Families | Professionals",
    popular_products_str: "Fresh Pasta | Neapolitan Pizza | Olive Oil | Gelato | Imported Prosciutto",
    related_categories_str: "Lifestyle | Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "ferrari-boutique": {
    store_id: "ADM-0058",
    store_name: "Ferrari Boutique",
    category: "Lifestyle",
    subcategory: "Motorsport Luxury Fanwear",
    official_website: "https://store.ferrari.com",
    phone: "(201) 340-6211",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 67,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Luxury Shopping",
    budget_level: "$$$",
    target_customer_str: "Tech Enthusiasts | Tourists | Professionals",
    popular_products_str: "F1 Team Jerseys | Puma Ferrari Sneakers | Scuderia Caps | Model Diecast Cars",
    related_categories_str: "Fashion | Sports Equipment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "finish-line": {
    store_id: "ADM-0059",
    store_name: "Finish Line",
    category: "Footwear",
    subcategory: "Athletic Sneakers & Apparel",
    official_website: "https://www.finishline.com",
    phone: "(201) 340-9122",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 114,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$",
    target_customer_str: "Sneaker Collectors | Teenagers",
    popular_products_str: "Nike Air Max | Adidas NMD | Jordan Retro Sneakers | Running Shoes",
    related_categories_str: "Sportswear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "five-below": {
    store_id: "ADM-0060",
    store_name: "Five Below",
    category: "Lifestyle",
    subcategory: "Discount Variety Store",
    official_website: "https://www.fivebelow.com",
    phone: "(201) 340-9844",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 198,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Gifts",
    budget_level: "$",
    target_customer_str: "Teenagers | Kids | Families",
    popular_products_str: "Tech Accessories | Graphic T-Shirts | Seasonal Candy | Fitness Equipment",
    related_categories_str: "Toys | Electronics",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "forever-21": {
    store_id: "ADM-0061",
    store_name: "Forever 21",
    category: "Fashion",
    subcategory: "Fast Fashion Apparel",
    official_website: "https://www.forever21.com",
    phone: "(201) 340-2211",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 3.9,
    review_count: 245,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Fashion",
    budget_level: "$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "Graphic Tees | Denim Jackets | Crop Tops | Fashion Accessories",
    related_categories_str: "Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "g-shock": {
    store_id: "ADM-0062",
    store_name: "G-Shock",
    category: "Electronics",
    subcategory: "Sports & Tactical Watches",
    official_website: "https://gshock.casio.com",
    phone: "(201) 340-8812",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 34,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Accessories",
    budget_level: "$$$",
    target_customer_str: "Outdoor Enthusiasts | Sneaker Collectors | Tech Enthusiasts",
    popular_products_str: "Mudmaster Watches | Custom G-Shocks | 2100 Series | Digital Sports Watches",
    related_categories_str: "Jewelry | Sportswear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "gamestop": {
    store_id: "ADM-0063",
    store_name: "GameStop",
    category: "Electronics",
    subcategory: "Video Games & Collectibles",
    official_website: "https://www.gamestop.com",
    phone: "(201) 340-4104",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 86,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Tech Products",
    budget_level: "$$",
    target_customer_str: "Teenagers | Kids | Students",
    popular_products_str: "PlayStation 5 Consoles | Nintendo Switch Games | Funko Pops | Gaming Headsets",
    related_categories_str: "Toys | Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "gentle-monster": {
    store_id: "ADM-0064",
    store_name: "Gentle Monster",
    category: "Luxury",
    subcategory: "Designer Eyewear",
    official_website: "https://www.gentlemonster.com",
    phone: "",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.6,
    review_count: 58,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Fashion | Tourists",
    popular_products_str: "Avant-Garde Sunglasses | Blue Light Glasses | Optical Frames | Collaborative Eyewear Collections",
    related_categories_str: "Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "gilly-hicks": {
    store_id: "ADM-0065",
    store_name: "Gilly Hicks",
    category: "Fashion",
    subcategory: "Activewear & Loungewear",
    official_website: "https://www.abercrombie.com",
    phone: "(201) 515-3734",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 19,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "Bralettes | Recharge Leggings | Sleepwear Pajamas | Hoodies",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "givenchy": {
    store_id: "ADM-0066",
    store_name: "Givenchy",
    category: "Luxury",
    subcategory: "Haute Couture & Leather",
    official_website: "https://www.givenchy.com",
    phone: "(201) 552-2180",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 22,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists",
    popular_products_str: "Antigona Handbags | Graphic Hoodies | Designer Boots | L'Interdit Perfume",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "gucci": {
    store_id: "ADM-0067",
    store_name: "Gucci",
    category: "Luxury",
    subcategory: "Italian Luxury Fashion",
    official_website: "https://www.gucci.com",
    phone: "(201) 515-4000",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 142,
    floor_str: "Level 1",
    zone: "The Avenue",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Luxury Shopping",
    budget_level: "$$$$",
    target_customer_str: "Luxury Shoppers | Tourists",
    popular_products_str: "Marmont Handbags | Ace Sneakers | Leather Belts | Logo T-Shirts",
    related_categories_str: "Fashion | Accessories",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "hollister-co": {
    store_id: "ADM-0068",
    store_name: "Hollister Co.",
    category: "Fashion",
    subcategory: "Casual Southern California Style",
    official_website: "https://www.hollisterco.com",
    phone: "(201) 515-3730",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 98,
    floor_str: "Level 1",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "Hollister Jeans | Graphic Hoodies | Swim Boardshorts | Polo Shirts",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "hot-topic": {
    store_id: "ADM-0069",
    store_name: "Hot Topic",
    category: "Lifestyle",
    subcategory: "Alternative Pop Culture Apparel",
    official_website: "https://www.hottopic.com",
    phone: "(201) 340-9115",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.4,
    review_count: 153,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Gifts",
    budget_level: "$$",
    target_customer_str: "Teenagers | Students",
    popular_products_str: "Band T-Shirts | Anime Merchandise | Funko Pops | Gothic Accessories",
    related_categories_str: "Fashion | Music",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "house-of-hoops": {
    store_id: "ADM-0070",
    store_name: "House of Hoops",
    category: "Footwear",
    subcategory: "Premium Basketball Retail",
    official_website: "https://www.footlocker.com",
    phone: "(201) 340-2511",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 64,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$$",
    target_customer_str: "Sneaker Collectors | Teenagers",
    popular_products_str: "Player Edition Jordans | Nike LeBron Sneakers | Kyrie Basketball Shoes | Premium Jerseys",
    related_categories_str: "Sportswear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "hugo": {
    store_id: "ADM-0071",
    store_name: "Hugo",
    category: "Fashion",
    subcategory: "Contemporary Edgy Apparel",
    official_website: "https://www.hugoboss.com",
    phone: "(201) 621-1405",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 16,
    floor_str: "Level 1",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Fashion",
    budget_level: "$$$",
    target_customer_str: "Young Adults | Professionals",
    popular_products_str: "Logo Sweatshirts | Slim-Fit Suits | Contemporary Denim | Leather Sneakers",
    related_categories_str: "Luxury",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "jcrew": {
    store_id: "ADM-0072",
    store_name: "J.Crew",
    category: "Fashion",
    subcategory: "Modern Classic Sportswear",
    official_website: "https://www.jcrew.com",
    phone: "(201) 340-4112",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 42,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Professionals | Families",
    popular_products_str: "Chino Pants | Linen Button-Downs | Cashmere Crewnecks | Structured Blazers",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "jd-sports": {
    store_id: "ADM-0073",
    store_name: "JD Sports",
    category: "Sportswear",
    subcategory: "Global Athletic Fashion",
    official_website: "https://www.jdsports.com",
    phone: "(201) 340-7714",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.2,
    review_count: 213,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Sneakers",
    budget_level: "$$",
    target_customer_str: "Sneaker Collectors | Teenagers | Students",
    popular_products_str: "Nike Air Max | Adidas Originals | Tech Fleece | Exclusive Sneaker Colorways",
    related_categories_str: "Footwear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "johnny-rockets": {
    store_id: "ADM-0074",
    store_name: "Johnny Rockets",
    category: "Food",
    subcategory: "All-American Diner Experience",
    official_website: "https://www.johnnyrockets.com",
    phone: "(201) 515-5151",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 3.8,
    review_count: 322,
    floor_str: "Level 3",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Family Shopping",
    budget_level: "$$",
    target_customer_str: "Families | Tourists | Students",
    popular_products_str: "Original Hamburgers | Hand-Spun Shakes | American Fries | Onion Rings",
    related_categories_str: "Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "johnston-murphy": {
    store_id: "ADM-0075",
    store_name: "Johnston & Murphy",
    category: "Footwear",
    subcategory: "Classic Premium Footwear",
    official_website: "https://www.johnstonmurphy.com",
    phone: "(201) 340-3320",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.3,
    review_count: 26,
    floor_str: "Level 2",
    zone: "Garden Court",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Accessories",
    budget_level: "$$$",
    target_customer_str: "Professionals | Luxury Shoppers",
    popular_products_str: "Leather Dress Shoes | XC4 Waterproof Shoes | Suede Loafers | Leather Belts",
    related_categories_str: "Fashion",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "journeys": {
    store_id: "ADM-0076",
    store_name: "Journeys",
    category: "Footwear",
    subcategory: "Youth Culture Shoe Retailer",
    official_website: "https://www.journeys.com",
    phone: "(201) 340-1412",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 59,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Fashion",
    budget_level: "$",
    target_customer_str: "Teenagers | Students | Kids",
    popular_products_str: "Vans Old Skool | Converse Chuck Taylors | Dr. Martens Boots | Birkenstock Sandals",
    related_categories_str: "Kids",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "kiehls": {
    store_id: "ADM-0077",
    store_name: "Kiehl's",
    category: "Beauty",
    subcategory: "Premium Skincare Formulations",
    official_website: "https://www.kiehls.com",
    phone: "(201) 340-7705",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.5,
    review_count: 43,
    floor_str: "Level 2",
    zone: "Court C",
    nearest_entrance: "Entrance C",
    nearest_parking: "Deck C",
    best_for: "Beauty Products",
    budget_level: "$$$",
    target_customer_str: "Professionals | Luxury Shoppers",
    popular_products_str: "Ultra Facial Cream | Midnight Recovery Concentrate | Calendula Toner | Facial Fuel",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "lego-store": {
    store_id: "ADM-0078",
    store_name: "Lego Store",
    category: "Toys",
    subcategory: "Branded Experiential Toy Space",
    official_website: "https://www.lego.com",
    phone: "(201) 340-5590",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.7,
    review_count: 512,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Kids",
    budget_level: "$$",
    target_customer_str: "Families | Kids | Tech Enthusiasts",
    popular_products_str: "Lego Star Wars Sets | Lego Creator Expert | Pick-A-Brick Wall | Lego Technic",
    related_categories_str: "Kids | Entertainment",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "lids": {
    store_id: "ADM-0079",
    store_name: "Lids",
    category: "Fashion",
    subcategory: "Custom Sports Headwear",
    official_website: "https://www.lids.com",
    phone: "(201) 340-1200",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.1,
    review_count: 134,
    floor_str: "Level 2",
    zone: "Court D",
    nearest_entrance: "Entrance D",
    nearest_parking: "Deck D",
    best_for: "Accessories",
    budget_level: "$",
    target_customer_str: "Teenagers | Sneaker Collectors | Tourists",
    popular_products_str: "MLB Fitted Hats | NFL Snapbacks | Custom Embroidery Caps | NBA Beanies",
    related_categories_str: "Sportswear",
    google_maps_url: "",
    last_verified: "2026-06-07"
  },
  "loft": {
    store_id: "ADM-0080",
    store_name: "Loft",
    category: "Fashion",
    subcategory: "Modern Women's Casual Wear",
    official_website: "https://www.loft.com",
    phone: "(201) 340-6641",
    opening_hours: "Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM",
    google_rating: 4.0,
    review_count: 31,
    floor_str: "Level 1",
    zone: "Court A",
    nearest_entrance: "Entrance A",
    nearest_parking: "Deck A",
    best_for: "Fashion",
    budget_level: "$$",
    target_customer_str: "Professionals | Families",
    popular_products_str: "Work Blouses | Casual Denim | Everyday Dresses | Cardigan Sweaters",
    related_categories_str: "Lifestyle",
    google_maps_url: "",
    last_verified: "2026-06-07"
  }
};

const RAW_CSV_BLOCK = `ADM-0081,Louis Vuitton,Luxury,Prestige Leather & Fashion,https://www.louisvuitton.com,(201) 515-4022,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,152,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Neverfull Tote | Speedy Bag | Designer Wallets | Luxury Belts,Fashion | Accessories,,2026-06-07
ADM-0082,Lush Fresh Handmade Cosmetics,Beauty,Natural Personal Care,https://www.lush.com,(201) 340-1215,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,184,Level 1,Court C,Entrance C,Deck C,Beauty Products,$$,Families | Teenagers | Students,Bath Bombs | Fresh Face Masks | Shampoo Bars | Body Lotions,Lifestyle,,2026-06-07
ADM-0083,Michael Kors,Luxury,Designer Fashion & Accessories,https://www.michaelkors.com,(201) 340-3302,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,79,Level 1,Court D,Entrance D,Deck D,Luxury Shopping,$$$,Luxury Shoppers | Professionals,Saffiano Leather Handbags | Designer Watches | Suede Boots | Sunglasses,Fashion | Accessories,,2026-06-07
ADM-0084,Miniso,Lifestyle,Japanese-Inspired Variety Store,https://www.minisousa.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,142,Level 1,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Kids | Students,Plush Toys | Blind Box Collectibles | Travel Accessories | Cute Stationery,Toys,,2026-06-07
ADM-0085,Morphe,Beauty,Professional Artistry Makeup,https://www.morphe.com,(201) 340-7711,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,93,Level 2,Court C,Entrance C,Deck C,Beauty Products,$$,Teenagers | Students,Eyeshadow Palettes | Makeup Brush Sets | Setting Sprays | Liquid Foundations,Lifestyle,,2026-06-07
ADM-0086,Mulberry,Luxury,British Leather Goods,https://www.mulberry.com,(201) 515-4060,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,18,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers,Bayswater Bag | Alexa Handbag | Leather Card Holders | Mulberry Scarves,Fashion | Accessories,,2026-06-07
ADM-0087,Nautica,Fashion,Heritage Nautical Sportswear,https://www.nautica.com,(201) 340-2911,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,43,Level 2,Court C,Entrance C,Deck C,Fashion,$$,Families | Professionals | Tourists,Polo Shirts | Sailing Jackets | Swimming Trunks | Casual Chinos,Lifestyle | Sportswear,,2026-06-07
ADM-0088,Nike Rise,Sportswear,Digital Experiential Retail,https://www.nike.com,(201) 340-8800,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,584,Level 1,Court D,Entrance D,Deck D,Sneakers,$$,Sneaker Collectors | Outdoor Enthusiasts | Families,Air Max Sneakers | Tech Fleece Apparel | Running Shoes | Dri-FIT Gear,Footwear | Outdoor,,2026-06-07
ADM-0089,Oakley,Sportswear,Performance Eyewear & Gear,https://www.oakley.com,(201) 340-4922,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,61,Level 2,Court D,Entrance D,Deck D,Sports Equipment,$$$,Outdoor Enthusiasts | Athletes,Prizm Sunglasses | Holbrook Shades | Sports Backpacks | Tactical Apparel,Outdoor | Accessories,,2026-06-07
ADM-0090,PacSun,Fashion,California Surf & Skate Style,https://www.pacsun.com,(201) 340-3105,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,112,Level 1,Court C,Entrance C,Deck C,Fashion,$$,Teenagers | Students,Graphic Hoodies | Cargo Pants | Skate Denim | Swim Essentials,Lifestyle,,2026-06-07
ADM-0091,Pandora,Jewelry,Customizable Charm Bracelets,https://us.pandora.net,(201) 340-5900,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,124,Level 1,Court C,Entrance C,Deck C,Accessories,$$,Families | Teenagers | Tourists,Silver Charm Bracelets | Disney Charms | Birthstone Rings | Tennis Bracelets,Luxury,,2026-06-07
ADM-0092,Popeyes Louisiana Kitchen,Food,New Orleans Style Fried Chicken,https://www.popeyes.com,(201) 340-5011,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.7,218,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Fried Chicken Sandwich | Chicken Tenders | Cajun Fries | Red Beans and Rice,Entertainment,,2026-06-07
ADM-0093,Pottery Barn Kids,Home,Premium Children's Furnishings,https://www.potterybarnkids.com,(201) 340-4410,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,22,Level 2,Court E,Entrance F,Deck F,Kids,$$$,Families | Kids,Kids Backpacks | Nursery Cribs | Organic Bedding | Children's Play Tables,Kids,,2026-06-07
ADM-0094, Saint Laurent (YSL),Luxury,Parisian Modern Luxury,https://www.ysl.com,(201) 515-4044,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,63,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Loulou Bag | Kate Crossbody | Leather Moto Jackets | Tribute Sandals,Fashion | Accessories,,2026-06-07
ADM-0095,Saks Fifth Avenue,Luxury,Premium Luxury Department Anchor,https://www.saksfifthavenue.com,(201) 515-4500,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.2,187,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Designer Shoes | High-End Cosmetics | Luxury Handbags | Tailored Suits,Fashion | Jewelry,,2026-06-07
ADM-0096,Swarovski,Jewelry,Premium Precision-Cut Crystal,https://www.swarovski.com,(201) 340-1022,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,56,Level 1,Court C,Entrance C,Deck C,Accessories,$$$,Luxury Shoppers | Professionals,Crystal Figurines | Tennis Bracelets | Crystal Necklaces | Statement Earrings,Luxury,,2026-06-07
ADM-0097,T-Mobile,Electronics,Wireless Service & Devices,https://www.t-mobile.com,(201) 340-8214,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,48,Level 2,Court A,Entrance A,Deck A,Tech Products,$$,Families | Professionals | Tech Enthusiasts,iPhone Plans | Samsung Galaxy Devices | Wireless Hotspots | Phone Cases,Services,,2026-06-07
ADM-0098,The North Face,Outdoor,Technical Outerwear & Gear,https://www.thenorthface.com,(201) 340-1154,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,136,Level 1,Court G,Entrance G,Deck G,Outdoor Gear,$$,Outdoor Enthusiasts | Families | Students,Nuptse Down Jackets | Borealis Backpacks | Rain Shells | Hiking Boots,Sportswear | Footwear,,2026-06-07
ADM-0099,Tommy Hilfiger,Fashion,Classic American Cool Style,https://usa.tommy.com,(201) 340-4450,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,178,Level 1,Court D,Entrance D,Deck D,Fashion,$$,Families | Tourists | Young Adults,Logo Sweatshirts | Chino Shorts | Oxford Button-Downs | Denim Jackets,Lifestyle,,2026-06-07
ADM-0100,Tumi,Luxury,Premium Travel & Business Gear,https://www.tumi.com,(201) 340-1980,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,31,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Professionals | Luxury Shoppers | Tourists,Alpha 3 Backpacks | International Carry-On Luggage | Leather Briefcases | Travel Organizers,Accessories,,2026-06-07
ADM-0101,UGG,Footwear,Premium Sheepskin Footwear,https://www.ugg.com,(201) 340-2214,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,94,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Families | Teenagers | Students,Classic Short Boots | Tasman Slippers | Fluff Yeah Slides | Care Cleaning Kits,Lifestyle,,2026-06-07
ADM-0102,Ulta Beauty,Beauty,Cosmetics & Salon Services,https://www.ulta.com,(201) 340-1411,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,165,Level 2,Court A,Entrance A,Deck A,Beauty Products,$$,Teenagers | Professionals | Families,Prestige Cosmetics | Drugstore Makeup | Hair Styling Tools | Perfumes | Skincare,Services | Lifestyle,,2026-06-07
ADM-0103,Uniqlo,Fashion,Minimalist Casual Essentials,https://www.uniqlo.com,(877) 486-4756,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,412,Level 1,Court C,Entrance C,Deck C,Fashion,$,Families | Students | Professionals,HEATTECH Layers | AIRism T-Shirts | Ultra Light Down Jackets | Pleated Pants,Lifestyle,,2026-06-07
ADM-0104,Urban Outfitters,Fashion,Alternative & Retro Apparel,https://www.urbanoutfitters.com,(201) 340-1123,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,148,Level 1,Court C,Entrance C,Deck C,Fashion,$$,Teenagers | Students,Graphic Tees | Cargo Pants | Vintage Denim | Room Decor Tapestries,Home | Music,,2026-06-07
ADM-0105,Vans,Footwear,Skate & Youth Culture Shoes,https://www.vans.com,(201) 340-9014,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,89,Level 1,Court A,Entrance A,Deck A,Sneakers,$,Teenagers | Students | Kids,Old Skool Sneakers | Slip-On Shoes | Sk8-Hi Tops | Skate Backpacks,Sportswear,,2026-06-07
ADM-0106,Victoria's Secret,Fashion,Intimates & Beauty,https://www.victoriassecret.com,(201) 340-4150,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,131,Level 1,Court C,Entrance C,Deck C,Fashion,$$,Teenagers | Young Adults | Professionals,Bombshell Bras | Loungewear Sets | Fine Fragrance Mists | Satin Pajamas,Beauty | Lifestyle,,2026-06-07
ADM-0107,Vineyard Vines,Fashion,Preppy Coastal Apparel,https://www.vineyardvines.com,(201) 340-5211,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,37,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Families | Professionals | Tourists,Whale Button-Down Shirts | Performance Polos | Chino Shorts | Performance Quarter-Zips,Lifestyle,,2026-06-07
ADM-0108,Warby Parker,Services,Prescription Eyewear & Exams,https://www.warbyparker.com,(201) 340-7215,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,59,Level 2,Court B,Entrance B,Deck B,Tech Products,$$,Professionals | Students | Families,Prescription Eyeglasses | Designer Sunglasses | Daily Contact Lenses | Eye Exams,Accessories | Electronics,,2026-06-07
ADM-0109,Wendy's,Food,Fast Food Hamburgers,https://www.wendys.com,(201) 340-6102,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.6,142,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Dave's Single Hamburger | Baconator | Spicy Chicken Nuggets | Chocolate Frosty,Entertainment,,2026-06-07
ADM-0110,Williams Sonoma,Home,Premium Cookware & Kitchen,https://www.williams-sonoma.com,(201) 340-4412,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,41,Level 2,Court E,Entrance F,Deck F,Gifts,$$$$,Professionals | Luxury Shoppers,Le Creuset Dutch Oceans | KitchenAid Stand Mixers | High-End Chef Knives | Artisan Food Base,Food,,2026-06-07
ADM-0111,Windsor,Fashion,Special Occasion Dresses,https://www.windsorstore.com,(201) 212-6610,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.0,52,Level 1,Court A,Entrance A,Deck A,Fashion,$$,Teenagers | Students,Prom Dresses | Homecoming Gowns | High Heeled Shoes | Rhinestone Jewelry,Accessories,,2026-06-07
ADM-0112,Ximi Vogue,Lifestyle,Korean-Style Fast Fashion Accessories,https://ximivogueretail.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,26,Level 1,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Kids | Students,Kawaii Plushies | Aesthetic Water Bottles | Korean Stationery | Headset Accessories,Toys,,2026-06-07
ADM-0113,Yankee Candle,Home,Scented Home Fragrance,https://www.yankeecandle.com,(201) 340-7115,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,49,Level 2,Court A,Entrance A,Deck A,Gifts,$$,Families | Tourists,Large Jar Candles | ScentPlug Diffusers | Car Jar Air Fresheners | Votive Candles,Lifestyle,,2026-06-07
ADM-0114,Zales,Jewelry,The Diamond Store Anchor,https://www.zales.com,(201) 340-3150,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.0,34,Level 1,Court C,Entrance C,Deck C,Accessories,$$$,Families | Professionals,Diamond Tennis Bracelets | Engagement Rings | Gold Hoop Earrings | Personalized Nameplates,Luxury,,2026-06-07
ADM-0115,Zimmi,Fashion,Contemporary Bohemian Wear,https://www.zimmermann.com,(201) 515-4090,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.6,23,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers | Fashion,Floral Linen Dresses | Silk Jumpsuits | High-End Resortwear | Swim Bikinis,Luxury | Accessories,,2026-06-07
ADM-0116,Zox,Lifestyle,Eco-Friendly Inspirational Wristbands,https://zox.la,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.7,18,Level 1,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Students | Kids,Elastic Wristbands | Inspirational Keychains | Collector Boxes | Apple Watch Bands,Accessories,,2026-06-07
ADM-0117,Zutti,Fashion,Modest & Premium Contemporary Clothing,https://www.zuttifashion.com,(201) 340-8440,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,15,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Professionals | Families,Modest Maxi Dresses | Tailored Long Coats | Structured Skirts | Hijabs & Scarves,Lifestyle,,2026-06-07
ADM-0118,Zwilling J.A. Henckels,Home,Premium German Cutlery & Kitchenware,https://www.zwilling.com,(201) 340-1190,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,29,Level 2,Court E,Entrance F,Deck F,Gifts,$$$,Professionals | Tech Enthusiasts,Zwilling Pro Chef Knives | Staub Cast Iron Cocottes | Enfinigy Electric Kettles | Knife Blocks,Lifestyle,,2026-06-07
ADM-0119,Angry Birds Mini Golf,Entertainment,Experiential Indoor Mini Golf,https://www.americandream.com,(201) 340-2000,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,342,Level 1,Court A,Entrance A,Deck A,Kids,$$,Families | Kids | Tourists,18-Hole Mini Golf Ticket | Glow-in-the-Dark Golf Balls | Angry Birds Merchandise,Services,,2026-06-07
ADM-0120,Blacklight Mini Golf,Entertainment,Intergalactic Neon Mini Golf,https://www.americandream.com,(201) 340-2000,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,215,Level 1,Court G,Entrance G,Deck G,Kids,$$,Families | Kids | Students,Neon Mini Golf Admission | 3D Glow Glasses | Sci-Fi Photo Ops,Services,,2026-06-07
ADM-0121,Big Snow,Entertainment,Indoor Ski & Snowboard Park,https://www.bigsnowamericandream.com,(973) 864-4444,Mon-Thu 1:00 PM - 8:00 PM | Fri 1:00 PM - 9:00 PM | Sat 10:00 AM - 9:00 PM | Sun 10:00 AM - 8:00 PM,4.5,2418,Level 1,Court G,Entrance G,Deck G,Outdoor Gear,$$$,Outdoor Enthusiasts | Families | Tourists,Snowboard Rentals | Ski Lift Tickets | Private Lessons | Winter Outerwear,Services | Outdoor,,2026-06-07
ADM-0122,DreamWorks Water Park,Entertainment,Indoor Water Attractions,https://www.americandream.com,(201) 340-2000,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 8:00 PM | Sun 11:00 AM - 7:00 PM,4.1,4892,Level 1,Court F,Entrance F,Deck F,Kids,$$$$,Families | Kids | Tourists,All-Day Admission Pass | Luxury Cabana Rentals | Shrek Merchandise | Swim Diapers,Services,,2026-06-07
ADM-0123,Nickelodeon Universe,Entertainment,Indoor Theme Park,https://www.americandream.com,(201) 340-2000,Mon-Thu 11:00 AM - 8:00 PM | Fri-Sat 11:00 AM - 9:00 PM | Sun 11:00 AM - 8:00 PM,4.2,6104,Level 1,Court A,Entrance A,Deck A,Kids,$$$$,Families | Kids | Teenagers,All-Rides Pass | Spongebob Plush Toys | Slime Souvenirs | Coaster Express Passes,Services,,2026-06-07
ADM-0124,Sea Life Aquarium,Entertainment,Indoor Marine Exhibits,https://www.visitsealife.com,(201) 212-6110,Mon-Thu 11:00 AM - 6:30 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun 11:00 AM - 6:30 PM,4.4,1108,Level 1,Court A,Entrance A,Deck A,Kids,$$,Families | Kids | Tourists,General Admission Tickets | Annual Passes | Marine Plush Toys | Ocean Conservation Books,Kids,,2026-06-07
ADM-0125,Legoland Discovery Center,Entertainment,Indoor Brick Play Space,https://www.legolanddiscoverycenter.com,(201) 212-6112,Mon-Thu 11:00 AM - 5:30 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun 11:00 AM - 5:30 PM,4.3,1342,Level 1,Court A,Entrance A,Deck A,Kids,$$,Families | Kids,Standard Admission | Lego Brick Keychains | Custom Minifigures | Exclusive Lego Sets,Kids | Toys,,2026-06-07
ADM-0126,The Rink,Entertainment,Indoor Ice Skating Rink,https://www.americandream.com,(201) 340-2000,Mon-Thu 11:00 AM - 8:00 PM | Fri-Sat 11:00 AM - 9:00 PM | Sun 11:00 AM - 8:00 PM,4.4,856,Level 1,Court C,Entrance C,Deck C,Family Shopping,$$,Families | Kids | Students,Ice Skating Admission | Skate Rentals | Skating Support Seals | Private Ice Lessons,Services,,2026-06-07
ADM-0127,Tiiko,Fashion,Premium Modest Accessories & Apparel,https://www.tiikowear.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,19,Level 1,Court D,Entrance D,Deck D,Fashion,$$,Professionals | Families,Premium Chiffon Hijabs | Magnetic Hijab Pins | Modest Underscarves | Under-caps,Accessories,,2026-06-07
ADM-0128,Toys R Us Flagship,Toys,Multi-Level Toy Megastore,https://www.toysrus.com,(201) 531-7100,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,1247,Level 1,Court A,Entrance A,Deck A,Kids,$$,Families | Kids | Teenagers,Geoffrey the Giraffe Plush | Hot Wheels Track Sets | Barbie Dreamhouses | Nerf Blasters,Kids | Entertainment,,2026-06-07
ADM-0129,Columbia Sportswear (Kids Store),Kids,Youth Performance Outerwear,https://www.columbia.com,(201) 340-5233,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,18,Level 1,Court G,Entrance G,Deck G,Kids,$$,Families | Kids | Outdoor Enthusiasts,Youth Fleece Jackets | Kids Winter Boots | Waterproof Rain Coats | Toddler Snowsuits,Outdoor | Sportswear,,2026-06-07
ADM-0130,Goldbelly,Food,Curated National Food Hall,https://www.goldbelly.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 9:00 PM,4.3,96,Level 3,Court A,Entrance A,Deck A,Family Shopping,$$,Tourists | Families | Foodies,Regional Deep Dish Pizzas | Famous NYC Cheesecakes | Gourmet BBQ Ribs | Craft Cookies,Entertainment,,2026-06-07
ADM-0131,Gourmet Dining,Food,International Fast Casual Counters,https://www.americandream.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.0,52,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Artisan Tacos | Rice Bowls | Crispy Chicken Tenders | French Fries,Entertainment,,2026-06-07
ADM-0132,Hard Rock Cafe,Food,Music Themed American Dining,https://www.hardrockcafe.com,(201) 340-6250,Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:30 AM - 10:00 PM,4.3,812,Level 1,Court A,Entrance A,Deck A,Family Shopping,$$,Tourists | Families | Professionals,Legendary Steak Burgers | Hot Fudge Brownies | Collectible Logo T-Shirts | Specialty Cocktails,Entertainment,,2026-06-07
ADM-0133,House of 'Que,Food,Austin-Style Barbecue Pit,https://www.houseofque.com,(201) 515-5300,Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:30 AM - 10:00 PM,4.1,438,Level 1,Court A,Entrance A,Deck A,Family Shopping,$$,Families | Tourists | Professionals,Smoked Brisket | Pulled Pork Sandwiches | Mac and Cheese | Texas Pit Ribs,Entertainment,,2026-06-07
ADM-0134,Jarana,Food,Authentic Peruvian Cuisine,https://www.jaranarestaurant.com,(201) 515-5420,Mon-Thu 12:00 PM - 10:00 PM | Fri-Sat 12:00 PM - 11:00 PM | Sun 12:00 PM - 9:00 PM,4.5,214,Level 3,Court A,Entrance A,Deck A,Family Shopping,$$,Professionals | Tourists | Foodies,Ceviche Clasico | Lomo Saltado | Pisco Sour Cocktails | Arroz con Pollo,Entertainment,,2026-06-07
ADM-0135,Marcus Live!,Food,Contemporary American Brasserie,https://www.marcusliveam.com,(201) 515-5550,Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:30 AM - 9:30 PM,4.4,312,Level 3,Court A,Entrance A,Deck A,Family Shopping,$$$,Professionals | Tourists | Luxury Shoppers,Brown Sugar Ribeye | Hot Honey Fried Chicken | Cornbread Madelines | Shrimp and Grits,Entertainment,,2026-06-07
ADM-0136,MrBeast Burger,Food,Virtual Concept Fast Casual,https://www.mrbeastburger.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.5,618,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Teenagers | Kids | Students,Beast Style Burgers | Karl's Grilled Cheese | Crinkle Cut Fries | Nashville Hot Chicken Tenders,Entertainment,,2026-06-07
ADM-0137,Ona,Food,Modern Mediterranean Grill,https://www.americandream.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,46,Level 3,Court A,Entrance A,Deck A,Family Shopping,$$,Professionals | Tourists,Chicken Shawarma Wraps | Hummus Platters | Falafel Bowls | Greek Salads,Entertainment,,2026-06-07
ADM-0138,Real Fruit Bubble Tea,Food,Fresh Fruit Smoothies & Boba,https://www.realfruitbubbletea.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,174,Level 2,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Students | Families,Mango Diamond Slush | Taro Milk Tea | Strawberry Banana Smoothie | Tapioca Pearls,Lifestyle,,2026-06-07
ADM-0139,Sbarro,Food,New York Style Pizza slice,https://www.sbarro.com,(201) 340-9150,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.8,112,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,XL Pepperoni Slice | Stromboli Rolls | Garlic Breadsticks | Baked Ziti Pasta,Entertainment,,2026-06-07
ADM-0140,Vince Camuto,Fashion,Contemporary Footwear & Apparel,https://www.vincecamuto.com,(201) 340-4130,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,27,Level 2,Court C,Entrance C,Deck C,Accessories,$$,Professionals | Young Adults,Leather Ankle Boots | Designer Heels | Crossbody Handbags | Tailored Skirts,Footwear,,2026-06-07
ADM-0141,Aerie (Standalone Wing),Fashion,Intimates & Activewear,https://www.ae.com,(201) 340-2718,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,41,Level 1,Court C,Entrance C,Deck C,Fashion,$$,Teenagers | Students,Offline Leggings | Sports Bras | Lounge Sets | Swimwear,Lifestyle,,2026-06-07
ADM-0142,Altar'd State,Fashion,Boho-Chic Women's Apparel,https://www.altardstate.com,(201) 340-6218,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,73,Level 2,Court C,Entrance C,Deck C,Fashion,$$,Teenagers | Students | Young Adults,Floral Dresses | Cozy Sweaters | Graphic Tees | Jewelry,Accessories | Lifestyle,,2026-06-07
ADM-0143,Anthropologie,Fashion,Bohemian Lifestyle & Home,https://www.anthropologie.com,(201) 340-5152,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,89,Level 2,Court C,Entrance C,Deck C,Gifts,$$$,Professionals | Luxury Shoppers,Maxi Dresses | Scented Candles | Home Decor | Statement Jewelry,Home | Lifestyle,,2026-06-07
ADM-0144,Armani Beauty,Beauty,Luxury Cosmetics & Fragrance,https://www.giorgioarmanibeauty-usa.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,24,Level 1,The Avenue,Entrance A,Deck A,Beauty Products,$$$$,Luxury Shoppers | Professionals,Luminous Silk Foundation | Acqua Di Gio | Lip Maestro | Power Fabric Concealer,Luxury,,2026-06-07
ADM-0145,Artisanal Burger Company,Food,Gourmet Burger Restaurant,https://www.americandream.com,,Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:30 AM - 9:30 PM,4.1,82,Level 3,Court A,Entrance A,Deck A,Family Shopping,$$,Families | Foodies | Tourists,Truffle Burgers | Sweet Potato Fries | Craft Milkshakes | Onion Rings,Entertainment,,2026-06-07
ADM-0146,Balmain,Luxury,High-End Parisian Fashion,https://www.balmain.com,(201) 515-4080,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,19,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers,Blazer Jackets | Logo T-Shirts | Leather Handbags | High-End Sneakers,Fashion,,2026-06-07
ADM-0147,Beef Jerky Experience,Food,Specialty Meat Snacks,https://www.beefjerkyx.com,(201) 340-8110,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,97,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Tourists | Families | Outdoor Enthusiasts,Smoked Beef Jerky | Hot Sauce | Venison Sticks | Gourmet Popcorn,Lifestyle,,2026-06-07
ADM-0148,Bling Bling,Jewelry,Custom Fashion & Iced Accessories,,(201) 340-9225,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,34,Level 1,Court A,Entrance A,Deck A,Accessories,$,Teenagers | Students,Custom Nameplates | Cubic Zirconia Chains | Fashion Rings | Iced Watches,Fashion,,2026-06-07
ADM-0149,Breguet,Luxury,Prestige Swiss Haute Horlogerie,https://www.breguet.com,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.8,11,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers,Classique Watches | Marine Chronographs | Reine de Naples | Tourbillon Timepieces,Jewelry,,2026-06-07
ADM-0150,Brooks Brothers,Fashion,Classic American Heritage Menswear,https://www.brooksbrothers.com,(201) 340-5412,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,28,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Professionals | Luxury Shoppers,Non-Iron Dress Shirts | Tailored Navy Blazers | Silk Ties | Chino Trousers,Lifestyle,,2026-06-07
ADM-0151,Burger King,Food,Fast Food Hamburgers,https://www.bk.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.5,145,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Whopper | Chicken Fries | French Fries | Onion Rings,Entertainment,,2026-06-07
ADM-0152,Capital One Lounge / Café,Services,Banking & Co-Working Space,https://www.capitalone.com,,Mon-Fri 9:00 AM - 6:00 PM | Sat 10:00 AM - 5:00 PM | Sun Closed,4.4,39,Level 2,Court A,Entrance A,Deck A,Tech Products,$,Professionals | Students,Peet's Coffee | Banking Assistance | Fee-Free ATMs | Co-Working Wi-Fi,Lifestyle,,2026-06-07
ADM-0153,Charleys Cheesesteaks,Food,Grilled Cheesesteaks & Fries,https://www.charleys.com,(201) 340-8451,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.0,119,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Philly Cheesesteak | Loaded Fries | Gourmet Lemonades | Chicken Teriyaki,Entertainment,,2026-06-07
ADM-0154,Chili's Grill & Bar,Food,Tex-Mex Casual Dining,https://www.chilis.com,(201) 515-5320,Mon-Thu 11:00 AM - 10:00 PM | Fri-Sat 11:00 AM - 11:00 PM | Sun 11:00 AM - 10:00 PM,3.9,412,Level 1,Court A,Entrance A,Deck A,Family Shopping,$$,Families | Tourists | Groups,Baby Back Ribs | Sizzling Fajitas | President Margarita | Skillet Queso,Entertainment,,2026-06-07
ADM-0155,Chipotle Mexican Grill,Food,Fast Casual Mexican Bowls,https://www.chipotle.com,(201) 340-7512,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.8,268,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Students | Professionals,Burrito Bowls | Large Guacamole | Chicken Al Pastor | Crispy Tacos,Entertainment,,2026-06-07
ADM-0156,Chumbak,Lifestyle,Boho-Chic Home & Gifts,https://www.chumbak.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,16,Level 1,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Students | Families,Souvenir Mugs | Printed Tote Bags | Planners & Notebooks | Tech Sleeves,Home | Toys,,2026-06-07
ADM-0157,Claire's,Jewelry,Ear Piercing & Accessories,https://www.claires.com,(201) 340-1550,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.0,62,Level 1,Court A,Entrance A,Deck A,Kids,$,Kids | Teenagers,Ear Piercing Service | Best Friend Necklaces | Hair Scrunchies | Cosmetic Sets,Toys | Kids,,2026-06-07
ADM-0158,Cole Haan,Footwear,Performance Dress Shoes & Luxury,https://www.colehaan.com,(201) 340-4220,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,48,Level 2,Court C,Entrance C,Deck C,Accessories,$$$,Professionals | Luxury Shoppers,ØriginalGrand Oxfords | GrandPrø Sneakers | Leather Bags | Waterproof Boots,Fashion,,2026-06-07
ADM-0159,Columbia Sportswear (Sno-Zone),Outdoor,Extreme Cold Alpine Gear,https://www.columbia.com,(201) 340-5232,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,51,Level 1,Court G,Entrance G,Deck G,Outdoor Gear,$$,Outdoor Enthusiasts | Tourists,Omni-Heat Infinity Jackets | Snow Pants | Thermal Base Layers | Ski Gloves,Sportswear | Footwear,,2026-06-07
ADM-0160,Cotton On,Fashion,Australian Casual Fast Fashion,https://cottonon.com/US,(201) 340-7110,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,84,Level 1,Court C,Entrance C,Deck C,Fashion,$,Teenagers | Students,Graphic Slouch Hoodies | High-Rise Denim | Slip Dresses | Ribbed Tank Tops,Lifestyle,,2026-06-07
ADM-0161,Davidoff of Geneva,Luxury,Premium Cigars & Luxury Accessories,https://us.davidoffgeneva.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.6,33,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$2,Professionals | Luxury Shoppers,Signature No. 2 Cigars | Custom Humidors | Luxury Cigar Cutters | Ashtrays,Lifestyle,,2026-06-07
ADM-0162,Diesel,Fashion,Premium Alternative Denim,https://www.diesel.com,(201) 340-6602,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,29,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Young Adults | Fashion,1978 D-Macs Jeans | 1DR Shoulder Bags | Graphic Logo Sweatshirts | Leather Belts,Luxury | Accessories,,2026-06-07
ADM-0163,Dunkin' (Level 3 Food Court),Food,Coffee & Quick Service Bakery,https://www.dunkindonuts.com,,Mon-Sat 9:00 AM - 10:00 PM | Sun 10:00 AM - 8:00 PM,3.7,54,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Tourists | Families | Students,Hot Breakfast Sandwiches | Cold Brew Coffee | Munchkins Assortment | Hash Browns,Entertainment,,2026-06-07
ADM-0164,EA7 Emporio Armani,Sportswear,Premium Technical Sportswear,https://www.armani.com,(201) 340-2345,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,21,Level 2,Court C,Entrance C,Deck C,Sports Equipment,$$$,Athletes | Sneaker Collectors | Luxury Shoppers,Technical Tracksuits | Athletic Running Shoes | Breathable T-Shirts | Gym Bags,Footwear | Luxury,,2026-06-07
ADM-0165,Ebisu,Lifestyle,Japanese Traditional Craft & Gifts,,(201) 340-8444,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,47,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Tourists | Families,Maneki-Neko Figurines | Japanese Chopstick Sets | Matcha Tea Bowls | Traditional Fans,Home,,2026-06-07
ADM-0166,Eddie Bauer,Outdoor,Heritage Performance Exploration Wear,https://www.eddiebauer.com,(201) 340-1912,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,63,Level 1,Court G,Entrance G,Deck G,Outdoor Gear,$$,Outdoor Enthusiasts | Families,First Ascent Parkas | Guide Pro Hiking Pants | Flannel Shirts | Daypacks,Sportswear | Footwear,,2026-06-07
ADM-0167,Eton,Luxury,Premium Swedish Dress Shirts,https://www.etonshirts.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.6,14,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Professionals | Luxury Shoppers,Signature Twill Shirts | Silk Pocket Squares | Formal Dress Shirts | Tuxedo Shirts,Fashion,,2026-06-07
ADM-0168,Faces,Beauty,Premium Middle Eastern Cosmetics,https://www.faces.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,26,Level 1,Court C,Entrance C,Deck C,Beauty Products,$$$,Luxury Shoppers | Tourists,Oud Fragrances | Long-Wear Liners | Hydrating Foundations | Skincare Serums,Lifestyle,,2026-06-07
ADM-0169,Falafel King,Food,Middle Eastern Fast Casual,https://www.americandream.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,49,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Students,Fresh Falafel Wraps | Chicken Shawarma Platters | Hummus and Pita | Tabbouleh Salad,Entertainment,,2026-06-07
ADM-0170,Fendi,Luxury,Italian Avant-Garde Luxury,https://www.fendi.com,(201) 515-4030,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.4,43,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers | Tourists,Baguette Handbags | Peekaboo Totes | FF Logo Jumpers | Designer Silk Scarves,Fashion | Accessories,,2026-06-07
ADM-0171,Fila,Sportswear,Heritage Athletic Lifestyle,https://www.fila.com,(201) 340-9125,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,58,Level 2,Court D,Entrance D,Deck D,Sneakers,$,Teenagers | Students | Sneaker Collectors,Disruptor II Sneakers | Heritage Track Jackets | Tennis Skirts | Crewneck Sweatshirts,Footwear,,2026-06-07
ADM-0172,Frutta Bowls,Food,Superfood Acai & Smoothie Bowls,https://www.fruttabowls.com,(201) 340-7540,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,82,Level 2,Court A,Entrance A,Deck A,Family Shopping,$,Students | Fitness Enthusiasts | Families,Classic Acai Bowls | Pitaya Smoothies | Kale Protein Shakes | Organic Oatmeal Toppings,Entertainment,,2026-06-07
ADM-0173,Gant,Fashion,Heritage East Coast Sportswear,https://www.gant.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,17,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Professionals | Young Adults,Oxford Cotton Shirts | Cable-Knit Sweaters | Chino Pants | Heavy Rugger Jerseys,Lifestyle,,2026-06-07
ADM-0174,Gilly HicksStandalone,Fashion,Intimates & Lifestyle Loungewear,https://www.abercrombie.com,(201) 515-3735,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,22,Level 2,Court C,Entrance C,Deck C,Fashion,$$,Teenagers | Students,Sleep Lounge Sets | Seamless Bralettes | Active Biker Shorts | Comfort Hoodies,Lifestyle,,2026-06-07
ADM-0175,Granny's Apple Fries,Food,Gourmet Sweet Fried Snacks,,(201) 340-1951,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,134,Level 3,Court A,Entrance A,Deck A,Gifts,$,Families | Kids | Tourists,Original Fried Apple Sticks | Vanilla Ice Cream Scoops | Caramel Dipping Sauce | Whipped Cream,Entertainment,,2026-06-07
ADM-0176,G-Star RAW,Fashion,Technical Avant-Garde Denim,https://www.g-star.com,(201) 340-4102,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,37,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Sneaker Collectors | Young Adults,301 3D Tapered Jeans | Raw Denim Jackets | Oversized Utility Hoodies | Graphic Tees,Sportswear,,2026-06-07
ADM-0177,Haagen-Dazs,Food,Premium Ice Cream & Sorbet,https://www.haagendazs.us,(201) 340-6215,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,188,Level 2,Court A,Entrance A,Deck A,Kids,$,Families | Kids | Tourists,Dulce de Leche Cones | Belgian Chocolate Shakes | Mango Sorbet Cups | Ice Cream Sundaes,Entertainment,,2026-06-07
ADM-0178,Hale & Hearty,Food,Gourmet Soups & Sandwiches,https://www.americandream.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.0,43,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Professionals | Families,Tomato Basil Soup | New England Clam Chowder | Turkey Avocado Club | Caesar Salad,Entertainment,,2026-06-07
ADM-0179,Hublot,Luxury,Swiss Fusion Watch Manufacture,https://www.hublot.com,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.7,16,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers,Big Bang Chronographs | Classic Fusion Watches | Spirit of Big Bang | Straps,Jewelry,,2026-06-07
ADM-0180,Hurley,Sportswear,Surf & Skate Boardwear,https://www.hurley.com,(201) 340-9851,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,49,Level 1,Court C,Entrance C,Deck C,Sports Equipment,$$,Teenagers | Students | Outdoor Enthusiasts,Phantom Boardshorts | Rash Guards | Graphic Logo T-Shirts | Snapback Hats,Outdoor | Footwear,,2026-06-07
ADM-0181,Icing,Jewelry,Fashion Accessories & Party Goods,https://www.icing.com,(201) 340-1555,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,43,Level 1,Court A,Entrance A,Deck A,Accessories,$,Young Adults | Students,Bridal Hair Accessories | Hoop Earrings | Cosmetic Palettes | Statement Rings,Fashion,,2026-06-07
ADM-0182,IWC Schaffhausen,Luxury,Swiss Technical Aviation Watches,https://www.iwc.com,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.6,18,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers,Big Pilot's Watches | Portugieser Chronographs | Aquatimer Divers | Portofino,Jewelry,,2026-06-07
ADM-0183,Jaeger-LeCoultre,Luxury,Prestige Swiss Horological Masterpieces,https://www.jaeger-lecoultre.com,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.8,22,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers,Reverso Timepieces | Master Ultra Thin Watches | Polaris Chronographs | Atmos Clock,Jewelry,,2026-06-07
ADM-0184,Jimmy Choo,Luxury,High Fashion Footwear & Bags,https://www.jimmychoo.com,(201) 515-4066,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.4,31,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers | Tourists,Stiletto Pumps | Luxury Bridal Heels | Studded Leather Clutch | Designer Sunglasses,Fashion | Accessories,,2026-06-07
ADM-0185,Just In Case,Electronics,Custom Mobile Defense Shields,,(201) 340-7751,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,56,Level 1,Court A,Entrance A,Deck A,Tech Products,$,Teenagers | Families,Shockproof Phone Cases | Tempered Glass Guards | Ring Lights | AirPod Covers,Accessories,,2026-06-07
ADM-0186,Karl Lagerfeld Paris,Fashion,Contemporary Parisian Ready-to-Wear,https://www.karllagerfeldparis.com,(201) 340-4411,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,39,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Professionals | Luxury Shoppers,Tweed Blazers | Karl Graphic Tote Bags | Leather Slip-On Shoes | Quilted Jackets,Luxury | Accessories,,2026-06-07
ADM-0187,Kate Spade New York,Fashion,Playful Designer Leather Luxury,https://www.katespade.com,(201) 340-2019,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,68,Level 1,Court D,Entrance D,Deck D,Accessories,$$$,Young Adults | Professionals | Tourists,Crossbody Handbags | Designer Wallets | Stationary Notebooks | Enamel Bangles,Lifestyle | Luxury,,2026-06-07
ADM-0188,KIKO Milano,Beauty,Italian Trendy Cosmetics,https://www.kikocosmetics.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,52,Level 2,Court C,Entrance C,Deck C,Beauty Products,$,Teenagers | Students | Young Adults,3D Hydra Lipgloss | Unlimited Foundation | High Pigment Eyeshadow | Face Primers,Lifestyle,,2026-06-07
ADM-0189,Lacoste,Fashion,Heritage French Athletic Wear,https://www.lacoste.com/us,(201) 340-5911,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,104,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Professionals | Tourists | Families,Classic Crocodile Polo Shirts | Lightweight Canvas Sneakers | Track Tops | Tennis Caps,Sportswear | Footwear,,2026-06-07
ADM-0190,Lady Foot Locker,Footwear,Women's Performance Sportswear,https://www.footlocker.com,(201) 340-2514,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,43,Level 2,Court D,Entrance D,Deck D,Sneakers,$$,Young Adults | Students,Women's Air Max | Training Leggings | Sports Bras | Platform Athletic Sneakers,Sportswear,,2026-06-07
ADM-0191,Le Creuset,Home,Premium Enameled Cast Iron Cookware,https://www.lecreuset.com,(201) 340-4114,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,37,Level 2,Court E,Entrance F,Deck F,Gifts,$$$$,Professionals | Luxury Shoppers,Signature Dutch Ovens | Stoneware Baking Dishes | Cast Iron Skillets | Tea Kettles,Food,,2026-06-07
ADM-0192,Longines,Luxury,Classic Swiss Fine Watchmakers,https://www.longines.com/en-us,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.5,24,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers | Professionals,Master Collection Chronographs | HydroConquest Divers | DolceVita Watches,Jewelry,,2026-06-07
ADM-0193,M Missoni,Luxury,Contemporary Knitwear Masterpieces,https://www.missoni.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.2,16,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers,Zigzag Knit Dresses | Colorful Scarves | Swim Cover-ups | Lightweight Cardigans,Fashion,,2026-06-07
ADM-0194,Macy's Backstage,Fashion,Discount Off-Price Department Store,https://www.macys.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,192,Level 1,Court A,Entrance A,Deck A,Family Shopping,$,Families | Budget Shoppers,Discounted Designer Apparel | Home Sheet Sets | Cheap Shoes | Travel Luggage,Home | Kids,,2026-06-07
ADM-0195,Maison Margiela,Luxury,Avant-Garde Parisian Fashion,https://www.maisonmargiela.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,29,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers | Fashion,Tabi Boots | Replica Jazz Club Fragrance | Oversized Sweaters | 5AC Handbags,Fashion | Beauty,,2026-06-07
ADM-0196,MCM Worldwide,Luxury,Premium Modern Monogram Luxury,https://us.mcmworldwide.com,(201) 340-9111,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,53,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Luxury Shoppers | Sneaker Collectors | Tourists,Stark Cognac Backpacks | Monogram Belt Bags | Visetos Wallets | High-Top Sneakers,Fashion | Accessories,,2026-06-07
ADM-0197,Mephisto,Footwear,Premium Handmade Comfort Walking Shoes,https://www.mephisto.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,18,Level 2,Garden Court,Entrance A,Deck A,Accessories,$$$,Professionals | Tourists,Match Walking Shoes | Helen Sandals | Leather Loafers | Suede Comfort Boots,Fashion,,2026-06-07
ADM-0198,Montblanc,Luxury,Prestige Writing Instruments & Leather,https://www.montblanc.com,(201) 340-1985,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,41,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$$,Professionals | Luxury Shoppers,Meisterstück Fountain Pens | Leather Briefcases | Smartwatches | Luxury Wallets,Accessories,,2026-06-07
ADM-0199,Movado,Jewelry,Modern Museum Dial Timepieces,https://www.movado.com,(201) 340-5205,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,38,Level 1,Court C,Entrance C,Deck C,Accessories,$$$,Professionals | Luxury Shoppers,Museum Dial Watches | Bold Chronographs | Stainless Steel Braces | Rose Gold Watches,Luxury,,2026-06-07
ADM-0200,Museum of Illusions,Entertainment,Experiential Interactive Optical Exhibits,https://moinj.moillusions.com,(201) 531-7300,Mon-Thu 10:00 AM - 9:00 PM | Fri-Sat 10:00 AM - 10:00 PM | Sun 10:00 AM - 8:00 PM,4.5,842,Level 1,Court A,Entrance A,Deck A,Kids,$$,Families | Kids | Students,General Entry Pass | Optical Illusion Puzzle Boxes | Brainteaser Books | Souvenir Magnets,Services,,2026-06-07
ADM-0201,NARS Cosmetics,Beauty,Prestige Artistry Cosmetics,https://www.narscosmetics.com,(201) 340-1552,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,62,Level 2,Court C,Entrance C,Deck C,Beauty Products,$$$,Young Adults | Professionals,Orgasm Blush | Radiant Creamy Concealer | Light Reflecting Foundation | Matte Lip Pencils,Lifestyle,,2026-06-07
ADM-0202,Nespresso,Food,Premium Espresso Machines & Pods,https://www.nespresso.com,(201) 340-4180,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,154,Level 2,Court E,Entrance F,Deck F,Gifts,$$$,Professionals | Luxury Shoppers,Vertuo Coffee Pods | Lattissima Machines | Aeroccino Milk Frothers | Espresso Cups,Home,,2026-06-07
ADM-0203,New Balance,Footwear,Performance Running & Lifestyle,https://www.newbalance.com,(201) 340-2391,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,312,Level 1,Court D,Entrance D,Deck D,Sneakers,$$,Sneaker Collectors | Families | Athletes,550 Sneakers | 990v6 Made in USA | Fresh Foam Running Shoes | Athletics Tracksuits,Sportswear,,2026-06-07
ADM-0204,NYX Professional Makeup,Beauty,Accessible Trend Cosmetics,https://www.nyxcosmetics.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,71,Level 1,Court A,Entrance A,Deck A,Beauty Products,$,Teenagers | Students,Butter Gloss | Fat Oil Lip Drip | Matte Setting Spray | Epic Ink Liner,Lifestyle,,2026-06-07
ADM-0205,Oahu Smoothie Bar,Food,Tropical Fruit Shakes & Snacks,,(201) 340-5221,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,38,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Students | Kids,Mango Piña Colada Smoothie | Acai Energy Shake | Soft Pretzels | Fresh Watermelon Juice,Entertainment,,2026-06-07
ADM-0206,Omega,Luxury,Prestige Swiss Chronometers,https://www.omegawatches.com,(201) 515-4095,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.7,48,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Professionals,Speedmaster Moonwatch | Seamaster Diver 300M | Constellation Timepieces | NATO Straps,Jewelry,,2026-06-07
ADM-0207,Origins,Beauty,Natural Plant-Based Skincare,https://www.origins.com,(201) 340-1114,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,29,Level 2,Court C,Entrance C,Deck C,Beauty Products,$$,Professionals | Families,Checks and Balances Face Wash | GinZing Gel Moisturizer | Clear Improvement Charcoal Mask,Lifestyle,,2026-06-07
ADM-0208,Panera Bread,Food,Bakery Café & Clean Soups,https://www.panerabread.com,(201) 340-6290,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.9,184,Level 2,Court A,Entrance A,Deck A,Family Shopping,$,Families | Professionals | Students,Broccoli Cheddar Soup Bowl | Toasted Frontega Chicken Sandwich | Fuji Apple Chicken Salad | Chocolate Chip Cookies,Entertainment,,2026-06-07
ADM-0209,Patek Philippe,Luxury,Elite Swiss Haute Horlogerie,https://www.patek.com,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.9,15,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers,Nautilus Ref. 5711 | Aquanaut Timepieces | Calatrava Dress Watches | Perpetual Calendars,Jewelry,,2026-06-07
ADM-0210,Perfumania,Beauty,Discount Designer Fragrances,https://www.perfumania.com,(201) 340-3320,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,96,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Tourists | Families | Budget Shoppers,Versace Eros EDT | Dolce & Gabbana Light Blue | Juicy Couture Viva La Juicy | Calvin Klein One,Lifestyle,,2026-06-07
ADM-0211,PIQ,Lifestyle,Design-Led Gifts & Novelty Toys,https://www.piqgifts.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,52,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Teenagers | Students | Tourists,Kidrobot Designer Vinyls | Tokidoki Blind Boxes | Quirky Coffee Mugs | Graphic Art Socks,Toys,,2026-06-07
ADM-0212,Polestar Spaces,Electronics,Premium Electric Vehicle Showroom,https://www.polestar.com,(800) 806-2504,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,43,Level 1,The Avenue,Entrance A,Deck A,Tech Products,$$$停,Professionals | Tech Enthusiasts,Polestar 2 Fastback Test Drive | Polestar 3 SUV Configurator | Performance Upgrade Packages,Services,,2026-06-07
ADM-0213,Polo Ralph Lauren,Fashion,Classic Heritage Lifestyle Wear,https://www.ralphlauren.com,(201) 340-1090,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,245,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Families | Professionals | Tourists,Mesh Polo Shirts | Cable-Knit Sweaters | Oxford Cotton Shirts | Classic Chino Shorts,Lifestyle,,2026-06-07
ADM-0214,Prada,Luxury,Avant-Garde Italian Luxury,https://www.prada.com,(201) 515-4015,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,61,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Galleria Saffiano Bag | Re-Nylon Backpacks | Monolith Platform Boots | Prada Paradoxe Perfume,Fashion | Accessories,,2026-06-07
ADM-0215,Puma,Sportswear,Performance Athletic Lifestyle,https://www.puma.com,(201) 340-9280,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,134,Level 2,Court D,Entrance D,Deck D,Sneakers,$,Teenagers | Students | Athletes,Suede Classic Sneakers | Palermo Trainers | T7 Track Jackets | Football Training Jerseys,Footwear,,2026-06-07
ADM-0216,Raza Kebab & Grill,Food,Halal Pakistani & Indian Counter,https://www.americandream.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,67,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists,Chicken Tikka Platters | Seekh Kebab Wraps | Garlic Naan | Basmati Biryani Rice,Entertainment,,2026-06-07
ADM-0217,Reebok,Sportswear,Heritage Fitness & Footwear,https://www.reebok.com,(201) 340-4105,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,76,Level 2,Court D,Entrance D,Deck D,Sneakers,$,Teenagers | Students | Athletes,Club C 85 Vintage Sneakers | Classic Leather Shoes | Nano Training Shoes | Vector Hoodies,Footwear,,2026-06-07
ADM-0218,Richard Mille,Luxury,High-Concept Swiss Racing Horology,https://www.richardmille.com,,Mon-Thu 11:00 AM - 7:00 PM | Fri-Sat 11:00 AM - 7:00 PM | Sun Closed,4.8,12,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers,RM 011 Flyback Chronograph | RM 035 Rafael Nadal | Tonneau Carbon Cases | Custom Straps,Jewelry,,2026-06-07
ADM-0219,Rinascente,Luxury,Premium European Curated Apparel,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.3,18,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Imported Italian Outerwear | Designer Silk Blouses | Luxury Resortwear | Tailored Trousers,Fashion,,2026-06-07
ADM-0220,Rolex,Luxury,Iconic Swiss Watch Manufacture,https://www.rolex.com,(201) 515-4070,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.6,87,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Professionals,Submariner Date | Datejust 41 | Cosmograph Daytona | Oyster Perpetual,Jewelry,,2026-06-07
ADM-0221,Sams Fried Ice Cream,Food,Artisanal Flash-Fried Desserts,,(201) 340-9912,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,115,Level 3,Court A,Entrance A,Deck A,Gifts,$,Families | Kids | Teenagers,Fried Vanilla Ice Cream Ball | Oreo Crust Fried Coating | Matcha Green Tea Fried Scoop | Chocolate Drizzle,Entertainment,,2026-06-07
ADM-0222,Samsonite,Luxury,Premium Durable Travel Luggage,https://www.samsonite.com,(201) 340-2210,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,42,Level 2,Court C,Entrance C,Deck C,Accessories,$$$,Professionals | Tourists | Families,Freeform Hardside Carry-On | Omni 2 Checked Spinners | Business Backpacks | Travel Pillows,Lifestyle,,2026-06-07
ADM-0223,Sephora,Beauty,Global Prestige Beauty Megastore,https://www.sephora.com,(201) 340-9090,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,512,Level 1,Court C,Entrance C,Deck C,Beauty Products,$$,Young Adults | Students | Professionals,Fenty Beauty Gloss Bomb | Sol de Janeiro Hair Mists | Rare Beauty Blush | Dyson Airwrap,Lifestyle,,2026-06-07
ADM-0224,Shiseido,Beauty,Japanese High-Performance Skincare,https://www.shiseido.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,31,Level 2,Court C,Entrance C,Deck C,Beauty Products,$$$,Luxury Shoppers | Professionals,Ultimune Power Infusing Concentrate | Benefiance Eye Cream | Eudermine Activating Essence,Lifestyle,,2026-06-07
ADM-0225,Sketches,Footwear,Casual & Athletic Comfort Shoes,https://www.skechers.com,(201) 340-8115,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,167,Level 1,Court A,Entrance A,Deck A,Accessories,$,Families | Kids | Budget Shoppers,Slip-Ins Comfort Walkers | Go Walk Sneakers | Light-Up Kids Shoes | Memory Foam Arch Fit,Lifestyle,,2026-06-07
ADM-0226,Smashburger,Food,Certified Angus Smashed Burgers,https://www.smashburger.com,(201) 340-4155,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.9,152,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Classic Smash Burger | SmashFries with Rosemary Garlic | Crispy Chicken Sandwich | Oreo Milkshakes,Entertainment,,2026-06-07
ADM-0227,Solstice Sunglasses,Fashion,Designer & Performance Eyewear,https://www.solsticesunglasses.com,(201) 340-6605,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,49,Level 1,Court C,Entrance C,Deck C,Accessories,$$,Young Adults | Tourists,Gucci Aviator Sunglasses | Prada Heritage Shades | Ray-Ban Wayfarers | Oakley Sport Eyewear,Luxury,,2026-06-07
ADM-0228,Somali Coffee House,Food,Authentic Spiced East African Brews,,(201) 340-3325,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,27,Level 2,Court A,Entrance A,Deck A,Family Shopping,$,Professionals | Students | Foodies,Somali Spiced Qahwa | Cardamom Milk Tea | Sambusa Meat Pastries | Honey Date Cake,Entertainment,,2026-06-07
ADM-0229,Spencer's,Lifestyle,Novelty Gifts & Pop Culture Apparel,https://www.spencersonline.com,(201) 340-1510,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,114,Level 1,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Students,Graphic Pop Culture Tees | Custom Body Jewelry | Lava Lamps | Novelty Party Games,Toys,,2026-06-07
ADM-0230,Starbucks (Court A - Level 1),Food,Global Quick Service Coffee House,https://www.starbucks.com,(201) 340-1102,Mon-Thu 7:30 AM - 10:00 PM | Fri-Sat 7:30 AM - 11:00 PM | Sun 8:00 AM - 9:00 PM,4.0,242,Level 1,Court A,Entrance A,Deck A,Family Shopping,$,Tourists | Families | Professionals,Iced Brown Sugar Oatmilk Shaken Espresso | Caramel Macchiato | Butter Croissants | Cake Pops,Entertainment,,2026-06-07
ADM-0231,Stance,Footwear,Premium Structural Graphic Socks,https://www.stance.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,39,Level 1,Court C,Entrance C,Deck C,Accessories,$$,Teenagers | Students | Athletes,Icon Performance Socks | Star Wars Collaboration Pairs | Men's Butter Blend Boxers,Sportswear | Lifestyle,,2026-06-07
ADM-0232,Steve Madden,Footwear,Trendy Fashion Footwear & Handbags,https://www.stevemadden.com,(201) 340-4940,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,106,Level 1,Court C,Entrance C,Deck C,Accessories,$$,Teenagers | Young Adults | Students,Platform Ankle Boots | Rhinestone Dress Heels | Chunky Fashion Sneakers | Quilted Shoulder Bags,Fashion,,2026-06-07
ADM-0233,Stussy,Fashion,Iconic Underground Streetwear,https://www.stussy.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,81,Level 1,Court D,Entrance D,Deck D,Fashion,$$,Teenagers | Students | Sneaker Collectors,8-Ball Graphic Hoodies | Basic Logo Beanies | Workwear Cargo Pants | Patterned Button-Downs,Lifestyle,,2026-06-07
ADM-0234,Subway,Food,Quick Service Made-to-Order Subs,https://www.subway.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.6,84,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Tourists | Students,Footlong Italian B.M.T. | Tuna Sub | Oven Roasted Turkey Sandwich | White Macadamia Cookies,Entertainment,,2026-06-07
ADM-0235,Sugarfina,Food,Luxury Gourmet Candy Boutique,https://www.sugarfina.com,(201) 340-9011,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,43,Level 1,Court D,Entrance D,Deck D,Gifts,$$$,Professionals | Luxury Shoppers,Champagne Bears Bento Box | Peach Bellini Gummies | Single Barrel Bourbon Caramels,Luxury,,2026-06-07
ADM-0236,Sunglass Hut,Fashion,Premium Global Eyewear Showcase,https://www.sunglasshut.com,(201) 340-5250,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,74,Level 1,Court C,Entrance C,Deck C,Accessories,$$,Families | Young Adults | Tourists,Ray-Ban Clubmaster | Oakley Flak 2.0 XL | Burberry Square Shades | Premium Cleaning Kits,Luxury,,2026-06-07
ADM-0237,Superdry,Fashion,British Design with Japanese Graphics,https://www.superdry.com,(201) 340-1915,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,63,Level 2,Court C,Entrance C,Deck C,Fashion,$$,Young Adults | Students | Tourists,Windcheater Technical Jackets | Vintage Logo Hoodies | Cargo Shorts | Embroidered Graphic Tees,Lifestyle,,2026-06-07
ADM-0238,Sushirrito,Food,Original Sushi Burrito Fast Casual,https://www.sushirrito.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,93,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Students | Professionals | Foodies,Sumo Crunch Sushi Burrito | Geisha's Kiss Salmon Roll | Lava Nachos | Spicy Tuna Handroll,Entertainment,,2026-06-07
ADM-0239,Taco Bell,Food,Tex-Mex Quick Service Restaurant,https://www.tacobell.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.6,141,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Students | Teenagers,Crunchwrap Supreme | Doritos Locos Tacos | Cheesy Gordita Crunch | Cinnamon Twists,Entertainment,,2026-06-07
ADM-0240,TAG Heuer,Luxury,Swiss Avant-Garde Sporting Chronographs,https://www.tagheuer.com,(201) 515-4085,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,33,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Athletes | Professionals,Carrera Chronographs | Monaco Square Timepieces | Aquaracer Divers | Formula 1 Watches,Jewelry,,2026-06-07
ADM-0241,Tapestry,Luxury,Multi-Brand Designer Footwear Lounge,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.2,14,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers,Designer Leather Mule Shoes | Suede Platform Wedges | High-End Evening Sandals,Fashion,,2026-06-07
ADM-0242,The Art of Shaving,Beauty,Premium Gentleman's Grooming Gear,https://www.theartofshaving.com,(201) 340-6240,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,26,Level 2,Court C,Entrance C,Deck C,Gifts,$$$,Professionals | Luxury Shoppers,Sandalwood Shaving Cream | Unscented Pre-Shave Oil | Pure Badger Safety Razors | Beard Balms,Lifestyle,,2026-06-07
ADM-0243,The Body Shop,Beauty,Ethical Nature-Inspired Personal Care,https://www.thebodyshop.com,(201) 340-1515,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,58,Level 2,Court C,Entrance C,Deck C,Beauty Products,$,Families | Teenagers | Students,Shea Body Butter | Tea Tree Skin Clearing Facial Wash | Hemp Hand Protector Cream,Lifestyle,,2026-06-07
ADM-0244,The Cheesecake Factory,Food,Extensive Menu Casual Dining Anchor,https://www.thecheesecakefactory.com,(201) 515-5100,Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:00 AM - 10:00 PM,4.3,1248,Level 1,Court A,Entrance A,Deck A,Family Shopping,$$,Families | Tourists | Groups,Fresh Strawberry Cheesecake | Avocado Eggrolls | Chicken Madeira | Brown Brown Bread,Entertainment,,2026-06-07
ADM-0245,The Children's Place,Kids,Value Children's Clothing Store,https://www.childrensplace.com,(201) 340-7715,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,86,Level 2,Court A,Entrance A,Deck A,Kids,$,Families | Kids,Graphic Kids Tees | Matching Family Pajamas | Toddler Denim Jeans | Uniform Polo Shirts,Toys,,2026-06-07
ADM-0246,The LEGO Store (Level 2 Wing),Toys,Official Branded Interactive Brick Store,https://www.lego.com,(201) 340-5225,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,412,Level 2,Court A,Entrance A,Deck A,Kids,$$,Families | Kids | Tech Enthusiasts,LEGO Star Wars Sets | Icons Botanical Collection | Pick-A-Brick Wall Cup | Creator Expert Models,Kids,,2026-06-07
ADM-0247,The Micro Store,Electronics,Specialty Drone & RC Hobbies,,(201) 340-9218,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,29,Level 2,Court A,Entrance A,Deck A,Tech Products,$$,Teenagers | Tech Enthusiasts | Kids,Mini RC Quadcopters | High-Speed RC Drift Cars | Replacement Props | Lithium Batteries,Toys,,2026-06-07
ADM-0248,The Vitamin Shoppe,Beauty,Health Supplements & Nutritional Care,https://www.vitaminshoppe.com,(201) 340-1011,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,47,Level 2,Court A,Entrance A,Deck A,Beauty Products,$$,Professionals | Fitness Enthusiasts,Whey Protein Isolate | Optimum Nutrition Pre-Workout | Daily Multivitamins | Fish Oil Capsules,Lifestyle,,2026-06-07
ADM-0249,Theory,Fashion,Minimalist Premium Contemporary Apparel,https://www.theory.com,(201) 340-4211,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,31,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Professionals | Luxury Shoppers,Precision Ponte Blazers | Stretch Wool Trousers | Silk Button-Down Shirts | Casual Knit Polos,Lifestyle,,2026-06-07
ADM-0250,Tiffany & Co.,Luxury,Legendary New York Fine Jewelry,https://www.tiffany.com,(201) 515-4010,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.6,134,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Return to Tiffany Heart Bracelets | Tiffany T Rings | Diamond Engagement Bands | Silver Necklaces,Jewelry,,2026-06-07
ADM-0251,Tillys,Fashion,Action Sports Lifestyle Apparel,https://www.tillys.com,(201) 340-5280,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,72,Level 1,Court C,Entrance C,Deck C,Fashion,$,Teenagers | Students,RSQ Denim Jeans | Graphic Skate Tees | Volcom Boardshorts | JanSport Backpacks,Lifestyle,,2026-06-07
ADM-0252,Tim Hortons,Food,Canadian Coffee & Quick Bakery,https://www.timhortons.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,3.8,92,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Tourists | Families | Students,Double Double Coffee | Timbits Donut Holes | Iced Cappuccino | Crispy Chicken Wraps,Entertainment,,2026-06-07
ADM-0253,Tissot,Luxury,Precision Heritage Swiss Timepieces,https://www.tissotwatches.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,41,Level 1,Court C,Entrance C,Deck C,Accessories,$$$,Professionals | Luxury Shoppers,PRX Powermatic 80 | Seastar 1000 Automatic | T-Touch Connect Solar | Heritage Chronographs,Luxury,,2026-06-07
ADM-0254,Tokidoki Boutique,Lifestyle,Pop Culture Character Art Collectibles,https://www.tokidoki.it,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,49,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Teenagers | Students | Kids,Unicorno Blind Boxes | Graphic Crossbody Bags | Moofia Collectibles | Novelty Keychains,Toys,,2026-06-07
ADM-0255,Tony Moly,Beauty,Playful Cult Korean Skincare,https://tonymoly.us,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,36,Level 2,Court A,Entrance A,Deck A,Beauty Products,$,Teenagers | Students,I'm Real Sheet Masks | Peach Hand Cream | Bunny Gloss Bars | Aloe Chok Chok Watery Cream,Lifestyle,,2026-06-07
ADM-0256,Tory Burch,Luxury,Classic American Designer Luxury,https://www.toryburch.com,(201) 340-9155,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,92,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Professionals | Tourists,Miller Leather Sandals | Ella Totes | Eleanor Shoulder Bags | Fleming Quilted Wallets,Fashion | Accessories,,2026-06-07
ADM-0257,True Religion,Fashion,Premium Statement Stitch Denim,https://www.truereligion.com,(201) 340-3340,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,74,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Young Adults | Fashion,Super T Thick Stitch Jeans | Buddha Logo Hoodies | Denim Trucker Jackets | Graphic T-Shirts,Lifestyle,,2026-06-07
ADM-0258,Twelve AM,Footwear,Contemporary High-Fashion Boots Lounge,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,19,Level 2,Court C,Entrance C,Deck C,Accessories,$$,Young Adults | Fashion,Patent Leather Thigh High Boots | Strappy Stiletto Sandals | Pointed Toe Mules,Fashion,,2026-06-07
ADM-0259,Twisted Pretzel,Food,Artisanal Hand-Rolled Hot Pretzels,,(201) 340-7744,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,63,Level 1,Court A,Entrance A,Deck A,Gifts,$,Families | Kids | Tourists,Cinnamon Sugar Hot Pretzel | Jalapeño Cheese Stuffed Pretzel Nuggets | Hot Dog Pretzel Wraps,Entertainment,,2026-06-07
ADM-0260,UNTUCKit,Fashion,Perfect Length Casual Button-Downs,https://www.untuckit.com,(201) 340-4215,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,34,Level 2,Court C,Entrance C,Deck C,Fashion,$$,Professionals | Families,Wrinkle-Free Wrinkle Shirts | Casual Linen Shirts | Performance Polos | Merino Sweater Pullovers,Lifestyle,,2026-06-07
ADM-0261,Valora,Fashion,Premium Modest Formalwear & Gowns,,(201) 340-9922,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,18,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Professionals | Families,Satin Modest Gowns | Velvet Abayas | Embroidered Evening Wraps | Lace Maxi Skirts,Accessories,,2026-06-07
ADM-0262,Vera Bradley,Fashion,Quilted Cotton Bags & Travel,https://www.verabradley.com,(201) 340-5290,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,53,Level 2,Court C,Entrance C,Deck C,Gifts,$$,Families | Students | Tourists,Quilted Duffle Bags | Triple Zip Hipster Crossbody | Lunch Totes | ID Case Lanyards,Lifestyle | Accessories,,2026-06-07
ADM-0263,Verizon Wireless,Electronics,Cellular Network Service & Tech,https://www.verizon.com,(201) 340-1015,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,62,Level 2,Court A,Entrance A,Deck A,Tech Products,$$,Families | Professionals,5G Wireless Plans | Apple iPhone 15 Pro | Samsung Galaxy Ultra | OtterBox Cases,Services,,2026-06-07
ADM-0264,Vilebrequin,Luxury,Premium French Resortwear & Swim,https://www.vilebrequin.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.5,14,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Tourists,Classic Moorea Men's Swim Trunks | Embroidered Boardshorts | Linen Beach Shirts | Kids Swimwear,Fashion,,2026-06-07
ADM-0265,Waffle de Lys,Food,Authentic Gourmet Belgian Waffles,https://www.waffledelys.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,92,Level 3,Court A,Entrance A,Deck A,Gifts,$,Families | Tourists | Kids,Warm Liège Waffles | Salted Caramel Drizzle | Fresh Strawberry Toppings | Belgian Chocolate Sauce,Entertainment,,2026-06-07
ADM-0266,Wee Ones,Kids,Children's Specialty Boutique,,(201) 340-7718,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,21,Level 2,Court A,Entrance A,Deck A,Kids,$$,Families | Kids,Grosgrain Hair Bows | Toddler Headbands | Special Occasion Socks | Monogrammed Hair Clips,Toys,,2026-06-07
ADM-0267,Wetzel's Pretzels (Level 2 Space),Food,Fresh-Baked Soft Pretzels & Lemonade,https://www.wetzels.com,(201) 340-4122,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,76,Level 2,Court A,Entrance A,Deck A,Family Shopping,$,Families | Students | Kids,Wetzel's Original Pretzel | Sinful Cinnamon Bites | Cheese Dog Wraps | Fresh Lemonade,Entertainment,,2026-06-07
ADM-0268,White House Black Market,Fashion,Chic Monochromatic Women's Apparel,https://www.whbm.com,(201) 340-3360,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,47,Level 2,Court C,Entrance C,Deck C,Fashion,$$$,Professionals | Families,Tailored Blazers | Slim Ankle Pants | Little Black Dresses | Statement Necklaces,Accessories | Lifestyle,,2026-06-07
ADM-0269,Yoyoso,Lifestyle,Aesthetic Korean-Inspired Variety Store,http://www.yoyosolife.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,58,Level 1,Court A,Entrance A,Deck A,Gifts,$,Teenagers | Students | Kids,Plush Travel Pillows | Cute Desktop Organizers | Pastel Gel Pens | Minimalist Cosmetic Bags,Toys,,2026-06-07
ADM-0270,Zara,Fashion,Global Fast Fashion Megastore,https://www.zara.com,(201) 531-6100,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,846,Level 1,Court C,Entrance C,Deck C,Fashion,$$,Young Adults | Professionals | Families,Oversized Blazers | Distressed Denim Jeans | Basic Crop Tops | Zara Premium Perfumes,Lifestyle | Accessories,,2026-06-07
ADM-0271,Zadig & Voltaire,Luxury,Chic Parisian Rock 'n' Roll Fashion,https://www.zadig-et-voltaire.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.4,27,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers | Fashion,Rock Clutch Bags | Skull Print Scarves | Distressed Cashmere Sweaters | Leather Combat Boots,Fashion,,2026-06-07
ADM-0272,Zaza Layer Cake,Food,Multi-Layered European Pastries,,(201) 340-8815,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,34,Level 3,Court A,Entrance A,Deck A,Gifts,$,Tourists | Foodies | Families,20-Layer Crepe Cake Slice | Matcha Green Tea Layer Cake | Signature Milk Tea | Espresso,Entertainment,,2026-06-07
ADM-0273,Zen Diamond,Jewelry,Premium Diamond & Precious Gem Design,https://www.zendiamond.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,19,Level 1,Court C,Entrance C,Deck C,Accessories,$$$,Professionals | Luxury Shoppers,Diamond Eternity Bands | Sapphire Drop Earrings | Solitaire Diamond Pendants | Gold Tennis Bracelets,Luxury,,2026-06-07
ADM-0274,Zinburger,Food,Wine & Gourmet Burger Bar,https://www.zinburger.com,(201) 515-5250,Mon-Thu 11:30 AM - 10:00 PM | Fri-Sat 11:30 AM - 11:00 PM | Sun 11:30 AM - 9:30 PM,4.3,642,Level 1,Court A,Entrance A,Deck A,Family Shopping,$$,Families | Professionals | Groups,The Zinburger | Double Truffle Fries | Sonoma Chicken Sandwich | Artisan Wine Flights,Entertainment,,2026-06-07
ADM-0275,Zitomer,Beauty,Premium NYC Heritage Pharmacy Showcase,https://www.zitomer.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,15,Level 2,Court C,Entrance C,Deck C,Beauty Products,$$$,Luxury Shoppers | Professionals,High-End French Skincare | Custom Hair Accessories | Luxury Bath Elixirs | Imported Grooming Brushes,Lifestyle,,2026-06-07
ADM-0276,Zizi Boutique,Fashion,Contemporary Evening Outfits & Heels,,(201) 340-5255,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,23,Level 1,Court A,Entrance A,Deck A,Fashion,$$,Young Adults | Students,Rhinestone Bodycon Dresses | Clear Strap Stiletto Heels | Metallic Evening Clutches,Accessories,,2026-06-07
ADM-0277,Zofia,Jewelry,Handcrafted Fine Silver & Amber Crystals,,(201) 340-1919,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,31,Level 1,Court A,Entrance A,Deck A,Accessories,$$,Tourists | Families,Baltic Amber Pendants | Sterling Silver Filigree Rings | Raw Crystal Bracelets,Fashion,,2026-06-07
ADM-0278,Zoomo,Services,E-Bike Rental & Courier Support,https://www.ridezoomo.com,,Mon-Fri 10:00 AM - 7:00 PM | Sat 10:00 AM - 5:00 PM | Sun Closed,4.5,41,Level 1,Ground Service Zone,Entrance G,Deck G,Tech Products,$$,Professionals,Weekly E-Bike Rental Plans | High-Capacity Courier Batteries | E-Bike Safety Helmets,Electronics,,2026-06-07
ADM-0279,Zora,Fashion,Modern High-End Modest Outerwear,,(201) 340-3311,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,16,Level 1,Court D,Entrance D,Deck D,Fashion,$$$,Professionals | Luxury Shoppers,Structured Wool Long Coats | Luxury Georgette Hijabs | Tailored Modest Pantsuits,Lifestyle,,2026-06-07
ADM-0280,Zoya,Beauty,Eco-Friendly Clean Nail Care Lounge,https://www.zoya.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,28,Level 2,Court C,Entrance C,Deck C,Beauty Products,$,Teenagers | Students | Professionals,Big 10 Free Nail Polishes | Fast-Drying Top Coats | Hydrating Nail Serum | Non-Acetone Remover,Services,,2026-06-07
ADM-0281,Auntie Anne's (Court A - Level 1),Food,Freshly Baked Soft Pretzels,https://www.auntieannes.com,(201) 340-1200,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,284,Level 1,Court A,Entrance A,Deck A,Family Shopping,$,Families | Kids | Tourists,Cinnamon Sugar Pretzel Nuggets | Pepperoni Pretzel | Original Pretzel | Fresh Squeezed Lemonade,Entertainment,,2026-06-07
ADM-0282,Cinnabon (Court A - Level 1),Food,Classic Warm Cinnamon Rolls,https://www.cinnabon.com,(201) 340-1201,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,215,Level 1,Court A,Entrance A,Deck A,Gifts,$,Families | Kids | Tourists,Classic Cinnamon Roll | Minibon | Cinnachips | Caramel PecanBon,Entertainment,,2026-06-07
ADM-0283,H&M Flagship,Fashion,Trendy Global Fast Fashion,https://www.hm.com,(855) 466-7467,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,642,Level 1,Court C,Entrance C,Deck C,Fashion,$,Teenagers | Students | Families,Oversized Hoodies | Denim Jackets | Linen Blend Shirts | Kids Cotton Bodysuits,Lifestyle | Kids,,2026-06-07
ADM-0284,Garrett Popcorn Shops,Food,Chicago Style Gourmet Popcorn,https://www.garrettpopcorn.com,(201) 340-8188,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,184,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Tourists | Families | Professionals,Garrett Mix (Cheese & Caramel) | Pecan CaramelCrisp | CheeseCorn Tins,Entertainment,,2026-06-07
ADM-0285,It'Sugar,Lifestyle,Department Store Scale Candy Emporium,https://www.itsugar.com,(201) 515-3400,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,712,Level 1,Court A,Entrance A,Deck A,Gifts,$$,Kids | Teenagers | Tourists,Giant 5lb Gummy Bears | Retro Candy Mystery Boxes | Sour Patch Kids Merch | Bulk Jelly Belly,Toys | Food,,2026-06-07
ADM-0286,Dunkin' (Court C - Level 1),Food,Quick Service Coffee & Donuts,https://www.dunkindonuts.com,,Mon-Sat 9:00 AM - 10:00 PM | Sun 10:00 AM - 8:00 PM,3.8,96,Level 1,Court C,Entrance C,Deck C,Family Shopping,$,Tourists | Families | Students,Original Blend Iced Coffee | Boston Kreme Donut | Wake-Up Wraps | Glazed Donut Holes,Entertainment,,2026-06-07
ADM-0287,Starbucks (The Avenue),Food,Premium Reserve Format Coffee House,https://www.starbucks.com,(201) 515-4112,Mon-Thu 9:00 AM - 9:00 PM | Fri-Sat 9:00 AM - 10:00 PM | Sun Closed,4.3,115,Level 1,The Avenue,Entrance A,Deck A,Family Shopping,$$,Luxury Shoppers | Professionals | Tourists,Reserve Nitro Cold Brew | Pour-Over Hazelnut Latte | Avocado Toast | Premium Pastry Board,Entertainment,,2026-06-07
ADM-0288,Build-A-Bear Workshop,Toys,Interactive Custom Plush Experience,https://www.buildabear.com,(201) 340-9110,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,142,Level 2,Court A,Entrance A,Deck A,Kids,$$,Kids | Families,Custom Teddy Bears | Paw Patrol Plush | Heart Ceremony Inserts | Sound & Scent Modules,Kids,,2026-06-07
ADM-0289,GameStop,Electronics,Gaming Consoles & Collectibles,https://www.gamestop.com,(201) 340-7740,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,118,Level 2,Court A,Entrance A,Deck A,Tech Products,$$,Teenagers | Students | Tech Enthusiasts,PlayStation 5 Consoles | Nintendo Switch Games | Funko Pop Vinyls | Wireless Controllers,Toys,,2026-06-07
ADM-0290,Foot Locker Flagship,Footwear,Premium Athletic Footwear & Apparel,https://www.footlocker.com,(201) 340-2510,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,324,Level 1,Court D,Entrance D,Deck D,Sneakers,$$,Sneaker Collectors | Teenagers | Families,Nike Air Force 1 | Jordan Retro Sneakers | Adidas NMD | Premium Shoe Cleaning Kits,Sportswear,,2026-06-07
ADM-0291,Champs Sports,Sportswear,Athletic Lifestyle Footwear & Fan Gear,https://www.champssports.com,(201) 340-2560,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,168,Level 1,Court D,Entrance D,Deck D,Sneakers,$$,Teenagers | Students,Jordan Fleece Hoodies | Nike Dunk Lows | Adidas Ultraboost | New Era Fitted Hats,Footwear,,2026-06-07
ADM-0292,Kids Foot Locker,Kids,Children's Athletic Sneakers & Apparel,https://www.kidsfootlocker.com,(201) 340-2512,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,93,Level 2,Court D,Entrance D,Deck D,Kids,$,Families | Kids,Grade School Air Max | Toddler Jordan Shoes | Kids Nike Tracksuits | Athletic Socks,Toys | Footwear,,2026-06-07
ADM-0293,Journeys,Footwear,Youth Culture Casual Shoe Boutique,https://www.journeys.com,(201) 340-1440,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,112,Level 1,Court A,Entrance A,Deck A,Sneakers,$,Teenagers | Students,Converse All Star High Tops | Vans Old Skool | Dr. Martens 1460 Boots | Crocs Clogs,Sportswear,,2026-06-07
ADM-0294,Journeys Kidz,Kids,Youth Casual & Skate Sneaker Lounge,https://www.journeys.com/kidz,(201) 340-1442,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,56,Level 2,Court A,Entrance A,Deck A,Kids,$,Families | Kids,Kids Converse Chuck Taylors | Toddler Vans Slip-Ons | Light-Up Skechers | Kids Crocs Charms,Toys | Footwear,,2026-06-07
ADM-0295,Lids,Fashion,Custom Branded Athletic Headwear,https://www.lids.com,(201) 340-8330,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,145,Level 1,Court D,Entrance D,Deck D,Accessories,$,Teenagers | Students | Tourists,MLB Custom Fitted Hats | NFL Snapbacks | Custom Side Patch Stitching | Knit Beanies,Sportswear,,2026-06-07
ADM-0296,Asics,Sportswear,Performance Running Eyewear & Footwear,https://www.asics.com/us/en-us,(201) 340-9119,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,124,Level 2,Court D,Entrance D,Deck D,Sneakers,$$,Athletes | Outdoor Enthusiasts,GEL-Kayano Running Shoes | GEL-Nimbus Trainers | Performance Run Shorts | Moisture-Wicking Socks,Footwear,,2026-06-07
ADM-0297,Skechers Superstore,Footwear,Family Value Comfort Footwear Hub,https://www.skechers.com,(201) 340-8116,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,212,Level 1,Court A,Entrance A,Deck A,Accessories,$,Families | Budget Shoppers | Kids,Hands-Free Slip-Ins | Foamies Sandals | Work-Ready Steel Toe Boots | Air-Cooled Memory Foam,Lifestyle,,2026-06-07
ADM-0298,Crocs Retail,Footwear,Iconic Molded Foam Clogs & Charms,https://www.crocs.com,(201) 340-6612,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,268,Level 1,Court A,Entrance A,Deck A,Accessories,$,Families | Students | Teenagers,Classic Clogs | Jibbitz Charms | Cozzzy Lined Sandals | Platform Crocs,Lifestyle,,2026-06-07
ADM-0299,Aldo,Footwear,On-Trend Fashion Shoes & Handbags,https://www.aldoshoes.com/us/en_US,(201) 340-4910,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,134,Level 1,Court C,Entrance C,Deck C,Accessories,$$,Young Adults | Professionals | Students,Leather Dress Oxfords | Strappy Fashion Heels | Quilted Tote Bags | Statement Sunglasses,Fashion,,2026-06-07
ADM-0300,Clarks,Footwear,Heritage British Leather Comfort Footwear,https://www.clarks.com/en-us,(201) 340-5215,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,87,Level 2,Court C,Entrance C,Deck C,Accessories,$$,Professionals | Families | Tourists,Desert Suede Boots | Wallabees Low Cut | Unstructured Loafers | Leather Smart Dress Shoes,Fashion,,2026-06-07
ADM-0461,The Vitamin Shoppe,Beauty,Health & Wellness Supplements,https://www.vitaminshoppe.com,(201) 340-1016,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,92,Level 2,Court A,Entrance A,Deck A,Beauty Products,$$,Fitness Enthusiasts | Professionals,BodyTech Whey Protein | Optimum Nutrition Essential Amino Energy | Vitamin Shoppe Multi-Vitamins,Lifestyle,,2026-06-07
ADM-0462,Gourmet Pretzels,Food,Quick-Service Snack Counter,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,54,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Kids | Tourists,Original Salted Pretzel | Cinnamon Sugar Pretzel Bites | Warm Cheese Dipping Sauce,Entertainment,,2026-06-07
ADM-0463,Sinnabon Baker,Food,Gourmet Cinnamon Rolls Counter,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,118,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Kids | Students,Classic Cinnamon Roll | Minibon Roll Box | Caramel PecanBon | Cinnabon Stix,Entertainment,,2026-06-07
ADM-0464,Auntie Anne's (Court C),Food,Hand-Rolled Soft Pretzels Kiosk,https://www.auntieannes.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,86,Level 1,Court C,Entrance C,Deck C,Quick Snacks,$,Families | Shoppers,Pepperoni Pretzel | Sweet Almond Pretzel Nuggets | Fresh Squeezed Lemonade,Entertainment,,2026-06-07
ADM-0465,Carvel Express,Food,Soft Serve Ice Cream Counter,https://www.carvel.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,63,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Families | Kids,Flying Saucer Ice Cream Sandwiches | Soft Serve Vanilla Cone | Carvel Ice Cream Cake Slices,Entertainment,,2026-06-07
ADM-0466,Dippin' Dots,Food,Flash-Frozen Bead Ice Cream Kiosk,https://www.dippindots.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.2,42,Level 2,Court A,Entrance A,Deck A,Quick Snacks,$,Kids | Families,Cookies 'n Cream Dippin' Dots | Banana Split Ice Cream beads | Rainbow Ice Flash-Frozen Tub,Entertainment,,2026-06-07
ADM-0467,Dunkin' Express,Food,Coffee & Baked Goods Counter,https://www.dunkindonuts.com,,Mon-Sat 8:00 AM - 9:00 PM | Sun 8:00 AM - 8:00 PM,4.0,142,Level 1,Court A,Entrance A,Deck A,Quick Snacks,$,Commuters | Families | Students,Original Blend Iced Coffee | Boston Kreme Donut | Melted Cheese Wake-Up Wrap,Entertainment,,2026-06-07
ADM-0468,Starbucks (Court D),Food,Premium Espresso & Coffee Kiosk,https://www.starbucks.com,,Mon-Thu 10:00 AM - 9:00 PM | Fri-Sat 10:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,215,Level 1,Court D,Entrance D,Deck D,Quick Snacks,$$,Shoppers | Professionals,Iced Caramel Macchiato | Pink Drink Beverage | Warm Butter Croissant,Entertainment,,2026-06-07
ADM-0469,Jolt Coffee,Food,Artisanal Third-Wave Espresso Bar,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,38,Level 2,Court C,Entrance C,Deck C,Quick Snacks,$$,Professionals | Tech Enthusiasts,Nitro Cold Brew | Vanilla Oat Milk Latte | Avocado Toast Slices,Entertainment,,2026-06-07
ADM-0470,Bubble Tea House,Food,Taiwanese Boba & Fruit Tea Lounge,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,96,Level 3,Court A,Entrance A,Deck A,Family Shopping,$,Teenagers | Students | Youth,Classic Brown Sugar Milk Tea | Mango Green Fruit Tea | Taro Boba Smoothie,Entertainment,,2026-06-07
ADM-0471,Kung Fu Tea,Food,Authentic Creative Boba Milk Teas,https://www.kungfutea.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,184,Level 1,Court A,Entrance A,Deck A,Quick Snacks,$,Teenagers | Students,Kung Fu Milk Tea with Boba | Cocoa Cream Wow Milk | Honey Green Tea,Entertainment,,2026-06-07
ADM-0472,Gong Cha,Food,Prestige Taiwanese Layered Foam Teas,https://www.gongchausa.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,132,Level 2,Court C,Entrance C,Deck C,Quick Snacks,$,Students | Young Adults,Earl Grey Milk Tea with 3J's | Milk Foam Green Tea | Matcha Latte with Pearl,Entertainment,,2026-06-07
ADM-0473,Vitamins Plus,Beauty,Nutrition Specialists & Wellness Fuel,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.1,28,Level 2,Court A,Entrance A,Deck A,Beauty Products,$$,Athletes | Fitness Enthusiasts,Plant-Based Organic Protein Powders | Premium Fish Oil Softgels | Creatine Monohydrate,Lifestyle,,2026-06-07
ADM-0474,Nutrishop,Beauty,Elite Sports Nutrition & Supplement Hub,https://www.nutrishopusa.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.6,54,Level 2,Court D,Entrance D,Deck D,Beauty Products,$$,Athletes | Fitness Enthusiasts,Pro7ein Synthesis Powder | Thermovex Metabolic Formula | BCAA Sport Recovery,Lifestyle,,2026-06-07
ADM-0475,The Face Shop,Beauty,Korean Botanical Clean Skincare House,https://thefaceshop-america.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,72,Level 1,Court C,Entrance C,Deck C,Beauty Products,$$,Young Adults | Students | Fashion,Rice Water Bright Cleansing Foam | Real Nature Sheet Mask Pack | Chia Seed Hydrating Cream,Lifestyle,,2026-06-07
ADM-0476,Innisfree,Beauty,Jeju Island Natural Sustainable Skincare,https://us.innisfree.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,114,Level 1,Court C,Entrance C,Deck C,Beauty Products,$$,Young Adults | Students | Eco Shoppers,Green Tea Seed Hyaluronic Serum | Super Volcanic Pore Clay Mask | Daily UV Defense Sunscreen,Lifestyle,,2026-06-07
ADM-0477,TonyMoly,Beauty,Playful Pop-Culture K-Beauty Cosmetics,https://tonymoly.us,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.4,86,Level 1,Court A,Entrance A,Deck A,Beauty Products,$,Teenagers | Students,I'm Real Sheet Masks | Peach Hand Cream | Bunny Gloss Bars,Lifestyle,,2026-06-07
ADM-0478,Nature Republic,Beauty,Pure Natural Aloe Vera Extract Skincare,https://www.naturerepublicusa.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.3,61,Level 1,Court A,Entrance A,Deck A,Beauty Products,$,Families | Students,Soothing & Moisture Aloe Vera 92% Gel | Ginseng Royal Silk Watery Cream | Argan Essential Deep Care Hair Pack,Lifestyle,,2026-06-07
ADM-0479,Missha,Beauty,Advanced High-Performance Korean Cosmetics,https://misshaus.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun 11:00 AM - 8:00 PM,4.5,43,Level 1,Court C,Entrance C,Deck C,Beauty Products,$$,Young Adults | Professionals,Time Revolution Night Repair Ampoule | Perfect Cover BB Cream SPF 42 | Vita C Plus Spot Correcting Ampoule,Lifestyle,,2026-06-07
ADM-0480,Amorepacific,Luxury,Elite High-End Korean Luxury Skincare,https://us.amorepacific.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.6,31,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers,Time Response Skin Reserve Cream | Vintage Single Extract Essence | Treatment Enzyme Peel Cleansing Powder,Beauty,,2026-06-07
ADM-0481,Sulwhasoo,Luxury,Prestige Korean Herbal Ginseng Holistics,https://us.sulwhasoo.com,,Mon-Thu 11:00 AM - 9:00 PM | Fri-Sat 11:00 AM - 10:00 PM | Sun Closed,4.7,58,Level 1,The Avenue,Entrance A,Deck A,Luxury Shopping,$$$停,Luxury Shoppers,First Care Activating Serum | Concentrated Ginseng Renewing Cream | Overnight Vitalizing Mask,Beauty,,2026-06-07`;

const PARSED_EXTRA_IDS: string[] = [];

RAW_CSV_BLOCK.split("\n").forEach((line) => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("store_id")) return;
  const parts = trimmed.split(",").map((p) => p.trim());
  if (parts.length < 18) return;

  const rawName = parts[1];
  const slug = rawName.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  CSV_ENRICHMENT[slug] = {
    store_id: parts[0],
    category: parts[2],
    subcategory: parts[3],
    official_website: parts[4],
    phone: parts[5],
    opening_hours: parts[6],
    google_rating: parseFloat(parts[7]) || 4.0,
    review_count: parseInt(parts[8]) || 0,
    floor_str: parts[9],
    zone: parts[10],
    nearest_entrance: parts[11],
    nearest_parking: parts[12],
    best_for: parts[13],
    budget_level: parts[14],
    target_customer_str: parts[15],
    popular_products_str: parts[16],
    related_categories_str: parts[17],
    google_maps_url: parts[18] || "",
    last_verified: parts[19] || "2026-06-07",
    store_name: rawName
  };
  PARSED_EXTRA_IDS.push(slug);
});

const NEW_STORE_IDS = [
  "a-bathing-ape",
  "armani-exchange",
  "balenciaga",
  "best-buy",
  "carpaccio",
  "dolce-gabbana",
  "fabletics",
  "foot-locker",
  "hm",
  "hermes",
  "itsugar",
  "isola-bella",
  "kay-jewelers",
  "levis",
  "lululemon",
  "mango",
  "primark",
  "sainsburys-toys-r-us-studio",
  "sephora",
  "zara",
  "alexander-wang",
  "american-eagle",
  "anne-fontaine",
  "asics",
  "aerie",
  "banana-republic",
  "brilliant-earth",
  "burberry",
  "canada-goose",
  "cartier",
  "celine",
  "childrens-place",
  "cinnabon",
  "crocs",
  "dior",
  "dunkin",
  "eataly",
  "ferrari-boutique",
  "finish-line",
  "five-below",
  "forever-21",
  "g-shock",
  "gamestop",
  "gentle-monster",
  "gilly-hicks",
  "givenchy",
  "gucci",
  "hollister-co",
  "hot-topic",
  "house-of-hoops",
  "hugo",
  "jcrew",
  "jd-sports",
  "johnny-rockets",
  "johnston-murphy",
  "journeys",
  "kiehls",
  "lego-store",
  "lids",
  "loft",
  ...PARSED_EXTRA_IDS
];

const UNIQUE_NEW_STORE_IDS = Array.from(new Set(NEW_STORE_IDS));

const DYNAMIC_BASE_STORES = UNIQUE_NEW_STORE_IDS.map(id => {
  const csv = CSV_ENRICHMENT[id];
  const splitPipes = (str: string) => str.split('|').map(s => s.trim()).filter(Boolean);
  const target = splitPipes(csv.target_customer_str);
  const products = splitPipes(csv.popular_products_str);
  const related = splitPipes(csv.related_categories_str);
  
  const floorNum = parseInt(csv.floor_str.replace('Level ', '').trim()) || 1;
  const zoneId = csv.zone.toLowerCase().trim().replace(/ /g, '_');
  const primaryParkingId = csv.nearest_parking.toLowerCase().trim().replace(/ /g, '_');

  const desc = `The premier ${csv.store_name} flagship ${csv.subcategory} destination delivering high-quality offerings tailored for modern customers. Shoppers can explore a curated selection of ${products.join(', ')} in a gorgeous, modern shopping environment.`;
  
  const seo = `${csv.subcategory} offerings at American Dream Mall redefines expectations. Found beautifully on ${csv.floor_str} in ${csv.zone}, it features immediate proximity to ${csv.nearest_entrance}.`;

  const faqs = [
    {
      q: `What kinds of products does ${csv.subcategory} at American Dream target?`,
      a: `This storefront carries highly specialized items including ${products.slice(0, 3).join(', ')} customized for ${target.join(' and ')}.`
    },
    {
      q: `How do visitors locate ${csv.store_name} in the American Dream Mall?`,
      a: `Locate it directly in ${csv.zone} near ${csv.nearest_entrance} on ${csv.floor_str}. Access is most convenient using Parking ${csv.nearest_parking}.`
    },
    {
      q: `What is the rating and feedback profiles of ${csv.store_name}?`,
      a: `It holds a reliable customer satisfaction profile of ${csv.google_rating} Stars based on ${csv.review_count} verified Google reviews.`
    }
  ];

  return {
    id,
    store_name: csv.store_name || id,
    category: csv.category,
    subcategory: csv.subcategory,
    floor: floorNum,
    floor_zone: `${csv.floor_str}, ${csv.zone}`,
    zone_id: zoneId,
    primary_parking_id: primaryParkingId,
    target_customers: target,
    target_customer: target,
    popular_products: products,
    products,
    related_categories: related,
    phone: csv.phone || "N/A",
    hours: csv.opening_hours.split('|').map(s => s.trim()).join(', '),
    rating: csv.google_rating,
    reviews: csv.review_count,
    website: csv.official_website,
    description: desc,
    seo_intro: seo,
    faqs
  };
});

const uniqueStoresMap = new Map<string, any>();
BASE_STORES_DATA.forEach(store => {
  uniqueStoresMap.set(store.id, store);
});
DYNAMIC_BASE_STORES.forEach(store => {
  if (!uniqueStoresMap.has(store.id)) {
    uniqueStoresMap.set(store.id, store);
  }
});
const ALL_BASE_STORES = Array.from(uniqueStoresMap.values());

export const STORES_DATA: Store[] = ALL_BASE_STORES.map(base => {
  const csv = CSV_ENRICHMENT[base.id];
  if (!csv) {
    throw new Error(`Missing CSV enrichment for store ID: ${base.id}`);
  }

  const splitPipes = (str: string) => str.split('|').map(s => s.trim()).filter(Boolean);

  return {
    ...base,
    category: csv.category,
    subcategory: csv.subcategory,
    phone: csv.phone,
    website: csv.official_website,
    rating: csv.google_rating,
    reviews: csv.review_count,
    hours: csv.opening_hours.split('|').map(s => s.trim()).join(', '),

    // Enrich fields
    store_id: csv.store_id,
    official_website: csv.official_website,
    opening_hours: csv.opening_hours,
    google_rating: csv.google_rating,
    review_count: csv.review_count,
    floor_str: csv.floor_str,
    zone: csv.zone,
    nearest_entrance: csv.nearest_entrance,
    nearest_parking: csv.nearest_parking,
    best_for: csv.best_for,
    budget_level: csv.budget_level,
    google_maps_url: csv.google_maps_url,
    last_verified: csv.last_verified,

    target_customers: splitPipes(csv.target_customer_str),
    target_customer: splitPipes(csv.target_customer_str),
    popular_products: splitPipes(csv.popular_products_str),
    products: splitPipes(csv.popular_products_str),
    related_categories: splitPipes(csv.related_categories_str)
  };
});
