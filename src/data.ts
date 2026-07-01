import { Destination, TourPackage, Event, BlogPost, VlogItem, Testimonial } from './types';

// Let's define the beautiful content for Passe tour and travel.

export const DESTINATIONS: Destination[] = [
  {
    id: 'lalibela',
    name: 'Lalibela Rock-Hewn Churches',
    description: 'A UNESCO World Heritage site featuring eleven spectacular monolithic cave churches carved out of solid rock in the 12th century. Often referred to as the "Eighth Wonder of the World," this sacred pilgrimage site stands as a testament to medieval Ethiopian civilization and engineering marvel.',
    image: '/Lalibela.jfif',
    location: 'Amhara Region, Ethiopia',
    rating: 5,
    highlights: ['Biete Giyorgis (Church of St. George)', 'Active pilgrimage liturgies', 'Exquisite stone relief carvings', 'Hidden underground tunnels']
  },
  {
    id: 'simien-mountains',
    name: 'Simien Mountains National Park',
    description: 'A breathtaking landscape of massive erosion, deep valleys, and jagged peaks rising up to 4,500 meters. This dramatic plateau is sanctuary to ultra-rare, endemic wildlife species like the Gelada Baboon (Bleeding-Heart Monkey), the Walia Ibex, and the Ethiopian Wolf.',
    image: '/Semen.jfif',
    location: 'Northern Ethiopia',
    rating: 5,
    highlights: ['Ras Dashen (Ethiopia\'s highest peak)', 'Massive herds of friendly Gelada baboons', 'Breathtaking canyon vistas', 'Jinbar Waterfall (500m plunge)']
  },
  {
    id: 'danakil-depression',
    name: 'Danakil Depression & Dallol',
    description: 'One of the lowest, hottest, and most unearthly places on the planet. Famed for its neon-colored hydrothermal sulfur pools, salt lakes, acid springs, and Erta Aleâ€”the actively boiling basalt shield volcano. Step onto another planet with vast salt flats and visual spectacles.',
    image: '/Denakil.jfif',
    location: 'Afar Triangle, Ethiopia',
    rating: 5,
    highlights: ['Erta Ale active lava lake', 'Dallol hyper-acidic yellow pools', 'Camel caravans transporting salt', 'Lake Assal salt plains']
  },
  {
    id: 'bale-mountains',
    name: 'Bale Mountains National Park',
    description: 'An alpine playground showcasing spectacular afro-alpine plateau ecosystems, ancient cloud forest, and pristine glacial lakes. This is the global stronghold of the endangered Ethiopian Wolf and boasts some of the highest endemic bird and mammal densities in Africa.',
    image: '/bale.jpg',
    location: 'Oromia Region, Ethiopia',
    rating: 5,
    highlights: ['Sanetti Plateau (Afro-alpine wonder)', 'Harenna Forest cloud mist', 'Endemic Ethiopian Wolves', 'Spectacular mountain hiking trails']
  },
  {
    id: 'addis-ababa',
    name: 'Addis Ababa (The Capital)',
    description: 'The energetic diplomatic capital of Africa. Boasting rich museums displaying \"Lucy\" (our 3.2 million-year-old human ancestor), vibrant micro-roastery coffee cultures, the massive open-air Mercato, and breathtaking mountaintop views from Mount Entoto.',
    image: '/Ethiopia 🇪🇹.jfif',
    location: 'Central Ethiopia',
    rating: 4.8,
    highlights: ['National Museum (Meet Lucy)', 'Entoto Park eucalyptus forests', 'Sipping traditional coffee roasts', 'Vibrant cultural restaurants and live music']
  },
  {
    id: 'lake-tana',
    name: 'Lake Tana & Island Monasteries',
    description: 'The largest lake in Ethiopia and the official source of the Blue Nile. Scattered across its tranquil blue waters are historic 14th-century island monasteries guarding precious structural art, ancient parchment bibles, and crowned royal crowns.',
    image: '/tana.jpg',
    location: 'Bahir Dar, Ethiopia',
    rating: 4.9,
    highlights: ['Ura Kidane Mehret monastery', 'Blue Nile Falls (Tis Abay) outlet', 'Boat cruises with local fisherman', 'Pelican bird colonies']
  },
  {
    id: 'dorze-village',
    name: 'Dorze Village',
    description: 'Located high in the Guge Hills, the Dorze people are famous for their giant dome-shaped bamboo houses resembling elephant heads, vibrant cotton weaving craftsmanship, and traditional preparation of Kocho flatbread from the enset (false banana) plant.',
    image: '/dorze.png',
    location: 'Chencha Highlands, Ethiopia',
    rating: 4.7,
    highlights: ['Towering elephant-shaped huts', 'Traditional cotton weaving looms', 'Fermented enset kocho baking', 'Polyphonic communal singing']
  },
  {
    id: 'konso-landscape',
    name: 'Konso Cultural Landscape',
    description: 'A UNESCO World Heritage site recognized for its spectacular dry-stone terraces, fortified hillside settlements (Kantas), and unique cultural traditions. Dating back over 400 years, this landscape reflects the outstanding engineering and social cohesion of the Konso people.',
    image: '/konso.png',
    location: 'Southern Nations, Ethiopia',
    rating: 4.8,
    highlights: ['Dry-stone hillside terraces', 'Fortified Kanta settlements', 'Waga wooden grave markers', 'Olaha community generation poles']
  },
  {
    id: 'omo-valley',
    name: 'Omo Valley Tribes',
    description: 'An extraordinary anthropological region home to diverse ethnic groups, including the Mursi, Hamer, Karo, and Daasanach. Famed for their ancient customs, distinctive body ornamentation, scarification, and vibrant market days, it offers a window into rich ancestral heritage.',
    image: '/omo-valley.png',
    location: 'Omo Valley, Southern Ethiopia',
    rating: 5,
    highlights: ['Mursi clay lip plates', 'Hamer Bull-Jumping ceremonies', 'Karo elaborate body painting', 'Vibrant weekly tribal markets']
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'historic-route',
    name: 'Historic Route & Southern Cultural Tour',
    duration: '16 Days / 15 Nights',
    price: 2850,
    highlights: ['Lalibela Rock Churches', 'Royal Enclosure of Gondar', 'Axum Obelisks', 'Bahir Dar & Lake Tana', 'Dorze Village', 'Konso Cultural Landscape', 'Omo Valley Tribes', 'Professional local historians', 'All domestic flights & eco-lodges included'],
    image: '/Lalibela.jfif',
    category: 'Cultural & History'
  },
  {
    id: 'northern-ethiopia',
    name: 'Northern Ethiopia Tour',
    duration: '12 Days / 11 Nights',
    price: 2100,
    highlights: ['Simien Mountains Trekking', 'Gondar Imperial City', 'Rock Churches of Tigray', 'Lalibela pilgrims', 'Scenic mountain drives', 'Traditional dance feasts'],
    image: '/Semen.jfif',
    category: 'Adventure & History'
  },
  {
    id: 'cultural-experience',
    name: 'Cultural Experience Tour',
    duration: '8 Days / 7 Nights',
    price: 1450,
    highlights: ['Omo Valley ethnic villages', 'Mursi & Hamer Tribes', 'Vibrant local markets', 'Traditional pottery & weaving', 'Anthropologist guiding', 'Stunning rift valley scenery'],
    image: '/omo-valley.png',
    category: 'Tribal & Heritage'
  },
  {
    id: 'adventure-safari',
    name: 'Adventure Safari Tour',
    duration: '7 Days / 6 Nights',
    price: 1650,
    highlights: ['Danakil salt basin descent', 'Erta Ale active volcano trek', 'Bale Mountains wildlife ride', 'Rare birds and wolves sight-seeing', 'All-terrain 4x4 Land Cruisers', 'Camp under stars'],
    image: '/Denakil.jfif',
    category: 'Extreme Adventure'
  },
  {
    id: 'coffee-experience',
    name: 'Coffee Experience Tour',
    duration: '6 Days / 5 Nights',
    price: 1150,
    highlights: ['Kaffa - Coffee\'s birth birthplace', 'Organic forest coffee harvest', 'Roasting classes in Addis Ababa', 'Buna ceremonies with local families', 'Cupping expert masterclasses', 'Lush rainforest eco-resorts'],
    image: '/coffee.png',
    category: 'Culinary & Agro'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'timkat',
    name: 'Timkat Festival (Epiphany)',
    date: 'January 19 (Annually)',
    location: 'Gondar & Addis Ababa',
    description: 'The most spectacular religious festival in Ethiopia, celebrating the baptism of Jesus in the Jordan River. Tabots (holy replicas of the Ark of the Covenant) are carried in colorful processions led by heavily vested priests dancing to rhythmic drumming.',
    image: '/Timket.jfif'
  },
  {
    id: 'meskel',
    name: 'Meskel Celebration',
    date: 'September 27 (Annually)',
    location: 'Meskel Square, Addis Ababa',
    description: 'UNESCO registered feast celebrating the finding of the True Cross. Thousands gather to ignite "Demera," a massive bonfire topped with cross-petaled yellow Meskel daisies symbolizing the smoke of Queen Helena\'s guiding fire.',
    image: '/Meskel.jfif'
  },
  {
    id: 'cultural-dance',
    name: 'Cultural Dance Shows',
    date: 'Weekly Every Friday / Saturday',
    location: 'Yod Abyssinia, Addis Ababa',
    description: 'Immersive nights showcasing the jaw-droppingly rapid shoulder dances (Eskista) from diverse ethnic groups including Amhara, Oromo, Tigray, Gurage, and more, performed alongside authentic instruments like the Masinko.',
    image: '/Gonder.jfif'
  },
  {
    id: 'coffee-ceremony',
    name: 'Ethiopian Coffee Ceremonies',
    date: 'Daily Interactive Experiences',
    location: 'Passe tour and travel Headquarters & Village Homes',
    description: 'Participate in the highly ritualized \"Buna\" brewing, from hand-washing the green coffee beans, roasting them over glowing hot coals, dispersing fragrant frankincense, to serving three traditional rounds: Awel, Kalei, and Baraka.',
    image: '/Coffe.jfif'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'top-10-places',
    title: 'Top 10 Places to Visit in Ethiopia',
    author: 'Abeselom Beyene Yosef',
    date: 'May 12, 2026',
    category: 'Travel Guide',
    excerpt: 'From extreme salt deserts to lush cloud forests and medieval stone churches, explore the best places that make Ethiopia an absolute global travel gem.',
    content: 'Ethiopia is a land of unique extremes, beautiful wildlife, and centuries-old cultural structures. Unlike most of the continent, Ethiopia was never colonized, meaning its ancient histories, languages, and calendar survive pristine and intact. In this article, our leading travel experts count down the top ten must-see landscapes, including Dallol, Lalibela, the Simien Mountains, and the active lava flows of Erta Ale.',
    image: 'https://via.placeholder.com/1200x800?text=Top+10+Places+in+Ethiopia'
  },
  {
    id: 'guide-to-lalibela',
    title: 'An Insider\'s Guide to Lalibela\'s Secrets',
    author: 'Passe tour and travel Team',
    date: 'April 28, 2026',
    category: 'Historical Insight',
    excerpt: 'Uncover the engineering mysteries, deep hidden spiritual paths, and active pilgrim ceremonies running inside Lalibela\'s iconic red volcanic rock churches.',
    content: 'Carven single-handedly out of the living mountain rock, the churches of Lalibela defy simple geological or architectural explanation. To walk through their cold trenches, through darkness into the illuminated stone chambers, is an unmatched moving experience. Learn how to prepare, the ideal times for peaceful exploration, and why experiencing the sunrise liturgy is unforgettable.',
    image: 'https://via.placeholder.com/1200x800?text=Guide+to+Lalibela+Churches'
  },
  {
    id: 'culture-and-traditions',
    title: 'Ethiopian Culture and Traditions Explained',
    author: 'Samrawit Kassa',
    date: 'March 15, 2026',
    category: 'Culture',
    excerpt: 'Discover why Ethiopians use an 13-month calendar, start the day at sunrise, and share "Gursha" meals in ultimate acts of loving hospitality.',
    content: 'Ethiopian culture is deeply communal and proudly unique. If you visit, you will soon realize the calendar says we are seven years behind, and the clock measures twelve hours from sunrise. This distinct way of living, paired with the legendary communal eating plate of Injera where we feed each other "Gursha," creates a warm, hospitable welcome that charms every international visitor.',
    image: 'https://via.placeholder.com/1200x800?text=Ethiopian+Culture+and+Traditions'
  },
  {
    id: 'best-time-to-visit',
    title: 'Best Time to Visit Ethiopia: Weather & festivals',
    author: 'Abeselom Beyene Yosef',
    date: 'February 2, 2026',
    category: 'Planning Tips',
    excerpt: 'When is the rainy season? When do the spectacular yellow wildflowers bloom? Read our guide to planning your holiday around major national festivals.',
    content: 'The dry season from October to May is widely considered ideal for high-altitude mountain trekking and exploring tourist routes. However, traveling right after the light rains in September greets you with emerald hills covered in golden Meskel flowers. This guide breaks down local temperatures, regional trends, and how to synchronize your arrival with major national festivals like Timkat or Ledet.',
    image: 'https://via.placeholder.com/1200x800?text=Best+Time+To+Visit+Ethiopia'
  }
];

export const VLOGS: VlogItem[] = [
  {
    id: 'vlog-1',
    title: 'The Great Northern Loop Adventure',
    description: 'Join our travelers as they hike Simien peaks, walk with Gelada baboons, explore ancient castles of Gondar, and walk on red sacred soil of Lalibela.',
    videoUrl: 'https://via.placeholder.com/1280x720?text=Vlog+Ethiopia+Northern+Loop+Pase+Tour',
    thumbnailUrl: 'https://via.placeholder.com/1200x800?text=Vlog+1+Northern+Loop'
  },
  {
    id: 'vlog-2',
    title: 'Dallol & Erta Ale Lava Lake Journey',
    description: 'An extreme cinematic tour into the Afar salt desert. Stand right beside the bubbling magma of Erta Ale volcano and Dallol sulfur geysers under security guidance.',
    videoUrl: 'https://via.placeholder.com/1280x720?text=Vlog+Ethiopia+Extreme+Danakil+Pase+Tour',
    thumbnailUrl: 'https://via.placeholder.com/1200x800?text=Vlog+2+Extreme+Danakil'
  },
  {
    id: 'vlog-3',
    title: 'Culture and Coffee: Heart of Kaffa',
    description: 'Discover the native birthplace of Arabica coffee. Trek deep into cloud forests with traditional farmers and experience an open fire coffee roasting.',
    videoUrl: 'https://via.placeholder.com/1280x720?text=Vlog+Ethiopia+Coffee+Birthplace+Pase+Tour',
    thumbnailUrl: 'https://via.placeholder.com/1200x800?text=Vlog+3+Coffee+Birthplace'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sophia Mueller',
    country: 'Germany',
    rating: 5,
    review: 'Our historic tour with Passe tour and travel was truly outstanding. Lalibela was deeply spiritual, and our expert guides from Bahir Dar brought the secrets of the monasteries alive. The service, vehicles, and standard of hotels exceeded our expectations!',
    image: 'https://via.placeholder.com/1200x800?text=Sophia+Mueller'
  },
  {
    id: 't-2',
    name: 'David Carter',
    country: 'USA',
    rating: 5,
    review: 'Trekking the Danakil Depression with Passe tour and travel was an ultimate adrenaline-filled, yet completely safe expedition. The active magma lake at Erta Ale is something I have never witnessed anywhere else. The staff was incredibly warm, organized, and professional.',
    image: 'https://via.placeholder.com/1200x800?text=David+Carter'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    country: 'Italy',
    rating: 5,
    review: 'The cultural coffee pilgrimage in Kaffa was beautiful. Meeting the local pickers, hiking standard rainforest streams, and staying in gorgeous mountain lodges was amazing. Passe tour and travel curated a perfect, custom trip for our family.',
    image: 'https://via.placeholder.com/1200x800?text=Elena+Rostova'
  }
];

export const GALLERY_IMAGES = [
  { url: 'https://via.placeholder.com/1200x800?text=Beautiful+Lalibela+Rock+Churches', caption: 'Lalibela monolithic marvel' },
  { url: 'https://via.placeholder.com/1200x800?text=Danakil+Depression+Sulfur+Pools', caption: 'Dallol hydrothermal geysers' },
  { url: 'https://via.placeholder.com/1200x800?text=Simien+Gelada+Baboon+Herd', caption: 'Gelada baboons of Simien Peaks' },
  { url: 'https://via.placeholder.com/1200x800?text=Timkat+Procession+Festivities', caption: 'Timkat (Epiphany) holy parade' },
  { url: 'https://via.placeholder.com/1200x800?text=Lake+Tana+Ura+Monastery+Art', caption: 'Biblical murals of island monasteries' },
  { url: 'https://via.placeholder.com/1200x800?text=Bale+Mountains+Wolf+Sighting', caption: 'Endemic Ethiopian Wolf in Bale' },
  { url: 'https://via.placeholder.com/1200x800?text=Meskel+Yellow+Daisy+Feast', caption: 'Meskel festival yellow blooms' },
  { url: 'https://via.placeholder.com/1200x800?text=Blue+Nile+Waterfalls+Cascades', caption: 'Spannung at Blue Nile Falls (Tis Abay)' }
];





