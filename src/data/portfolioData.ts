import { GalleryItem, ServiceCategory, TimelineMilestone, CityHub } from '../types';

export const PERSONAL_DETAILS = {
  name: "Nishi Rawat",
  stageName: "Anchor Nishi Rawat",
  tagline: "Where Every Moment Becomes a Memory",
  subTagline: "Creating unforgettable experiences through energy, elegance and extraordinary stage presence.",
  titles: ["ANCHOR", "EMCEE", "VOICE ARTIST", "JOURNALIST"],
  phone: "6281968720",
  formattedPhone: "+91 62819 68720",
  email: "nishirawatt@gmail.com",
  instagram: "@anchornishirawat",
  instagramUrl: "https://www.instagram.com/anchornishirawat",
  location: "Bhopal, Madhya Pradesh, India",
  journeyStartYear: 2021,
  startAge: 18,
  closingStatement: "EVERY STAGE DESERVES A STORY. LET'S MAKE YOURS UNFORGETTABLE."
};

export const INTRODUCTION_TEXT = `I'm Anchor Nishi Rawat, your go-to host for events that leave a lasting impression! With years of experience in the art of engaging audiences, I specialize in creating unforgettable moments filled with energy, fun, and entertainment.

From the grandest weddings to corporate galas, award ceremonies, and cultural fests, I bring charisma, creativity, and a lively vibe that captivates every audience.

My events are more than just shows; they're experiences loved and cherished by clients and guests alike. Let's make your special day extraordinary together!`;

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2021",
    period: "Age 18 • The Inception",
    title: "Stepping Onto The Stage",
    role: "Professional Debut",
    description: "Started her anchoring journey at the young age of 18 in 2021, turning innate stage passion into a high-octane profession.",
    image: "./images/journey-laughing.jpg",
    tag: "Milestone",
    highlights: [
      "Took the microphone professionally at age 18",
      "Discovered an unmatched flair for connecting with audiences of all generations",
      "Laid the cornerstone of the Anchor Nishi Rawat personal brand"
    ]
  },
  {
    year: "2022 – 2023",
    period: "Expansion • Media & Voice",
    title: "Wearing The Journalist's Hat",
    role: "Broadcaster & Storyteller",
    description: "Proud to also wear the hat of a journalist, bringing real stories to life through on-camera reporting, live conclaves, and expressive voice artistry.",
    image: "./images/corporate-media-crew.jpg",
    tag: "Dual Identity",
    highlights: [
      "On-camera broadcast journalism and field coverage",
      "Voice artistry and narration for corporate films & stage intros",
      "Mastery of high-pressure live televised conclaves"
    ]
  },
  {
    year: "2024 – Present",
    period: "Prestige • National Summits & Grand Celebrations",
    title: "The Signature Stage Presence",
    role: "Premier Emcee",
    description: "Anchoring national award ceremonies, diamond luxury exhibitions, corporate summits, and premier destination wedding rituals across Central India and beyond.",
    image: "./images/stage-full-vertical.jpg",
    tag: "Recognition",
    highlights: [
      "Host of Education Excellence Conclave & Swami Vivekananda National Awards 2024",
      "Luxury Diamond Exhibition anchor & Keynote summit host",
      "Trusted by corporate leaders, cultural foundations, and royal wedding families"
    ]
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "weddings",
    number: "01",
    title: "Wedding Ceremonies",
    subtitle: "Sacred Traditions • Royal Festivities • Unbounded Joy",
    description: "From the playful laughter of Haldi rituals to the regal majesty of the Varmala and the electrifying beats of Sangeet night, transforming sacred vows into cinematic memories.",
    image: "./images/wedding-haldi-pool.jpg",
    accentColor: "#D6B779",
    items: [
      "Haldi Ceremony",
      "Sangeet Ceremony",
      "Engagement Ceremony",
      "Cocktail / Bachelorette Party",
      "Barat On Wheels",
      "Reception",
      "Varmala"
    ]
  },
  {
    id: "corporate",
    number: "02",
    title: "Corporate Events",
    subtitle: "Executive Poise • Conclave Leadership • Flawless Protocol",
    description: "Commanding corporate stages with articulate diction, impeccable schedule management, and engaging panel facilitation for national brands and industry summits.",
    image: "./images/corporate-awards-vivekananda.jpg",
    accentColor: "#BFA16A",
    items: [
      "Media Conclave",
      "MeetX Meet-up",
      "Solar Business Meet-up",
      "School Inauguration",
      "Diamond Exhibition",
      "Youth Sustainable Entrepreneurship Summit",
      "Swami Vivekananda National Award Ceremony"
    ]
  },
  {
    id: "other",
    number: "03",
    title: "Other Celebrations",
    subtitle: "Vibrant Energy • Youth Vibes • Unforgettable Nights",
    description: "Igniting festivals, high-fashion runways, and joyful personal milestones with infectious energy, witty crowd interaction, and magnetic stage charisma.",
    image: "./images/featured-royal-stage.jpg",
    accentColor: "#641C32",
    items: [
      "Fashion Shows",
      "Open Mic",
      "Holi Rave Party",
      "Music Carnival",
      "Anniversary Celebrations",
      "Baby Shower",
      "College Fest",
      "Birthday Party",
      "Christmas Party"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "The Regal Stage Presence",
    category: "stage",
    categoryLabel: "Stage & Media",
    image: "./images/featured-royal-stage.jpg",
    location: "Golden Throne Stage",
    description: "In flowing scarlet red gown, commanding the royal event stage with effortless charm and microphone in hand.",
    highlights: ["Regal Stage Setup", "Signature Red Styling", "Prime Stage Anchor"]
  },
  {
    id: "gal-dandiya",
    title: "Mega Cultural Fest & Dandiya Night",
    category: "celebrations",
    categoryLabel: "Cultural & Fest",
    image: "./images/dandiya-garba-night.jpg",
    location: "Grand Cultural Grounds",
    description: "Electrifying thousands with live stage hosting, interactive Gujarati folk banter, and traditional mirror-work attire.",
    highlights: ["Live Crowd Banter", "Folk Heritage Stage", "Multi-thousand Crowd"]
  },
  {
    id: "gal-concert-gala",
    title: "Black-Tie Evening Stage & Concert",
    category: "stage",
    categoryLabel: "Stage & Media",
    image: "./images/stage-full-vertical.jpg",
    location: "Celebrity Concert Stage",
    description: "Commanding the chevron-lit event stage in sparkling black sequin saree with concert truss lighting.",
    highlights: ["Truss Light Show", "Concert Stage", "Celebrity Gala Presence"]
  },
  {
    id: "gal-royal-festive",
    title: "Royal Varmala & Festive Celebration",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "./images/wedding-festive-red.jpg",
    location: "Heritage Palace Courtyard",
    description: "Welcoming wedding families and guiding auspicious rituals with radiant warmth, mic, and traditional red elegance.",
    highlights: ["Royal Destination Wedding", "Ritual Narration", "Crowd Connection"]
  },
  {
    id: "gal-02",
    title: "Swami Vivekananda National Awards",
    category: "corporate",
    categoryLabel: "Corporate Conclave",
    image: "./images/corporate-awards-vivekananda.jpg",
    location: "Amer Greens, Bhopal",
    description: "Hosting the prestigious Education Excellence Conclave & Swami Vivekananda National Award Ceremony 2024.",
    highlights: ["31st August 2024", "National Award Conclave", "Dignitary Stage Protocol"]
  },
  {
    id: "gal-03",
    title: "Poolside Haldi Celebration",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "./images/wedding-haldi-pool.jpg",
    location: "Central India Resort",
    description: "Daylight poolside celebration with guests in sunny yellows, floral organza drape and chic sunglasses.",
    highlights: ["Poolside Mehendi", "Crowd Engagement", "Daylight Festivity"]
  },
  {
    id: "gal-04",
    title: "Authentic Audience Connection",
    category: "celebrations",
    categoryLabel: "Celebrations",
    image: "./images/journey-laughing.jpg",
    location: "Family Celebration Gala",
    description: "Sharing heartfelt laughter and memorable moments with elders and wedding guests directly in the audience.",
    highlights: ["Unscripted Warmth", "Elderly Interaction", "Pure Joy"]
  },
  {
    id: "gal-05",
    title: "Luxury Diamond Exhibition",
    category: "corporate",
    categoryLabel: "Corporate & Luxury",
    image: "./images/corporate-diamond-expo.jpg",
    location: "Grand Jewelry Pavilion",
    description: "Anchoring the exclusive 'Anmol Heeron Ka Utsav evam Pradarshani' luxury diamond showcase.",
    highlights: ["Fine Diamond Launch", "High-Net-Worth Gathering", "Luxury Brand Presence"]
  },
  {
    id: "gal-06",
    title: "The Sacred Varmala & Vows",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "./images/wedding-varmala.jpg",
    location: "Destination Wedding Lawn",
    description: "Guiding the bride and groom through personalized vows and royal varmala ritual under evening fairy lights.",
    highlights: ["Ritual Narration", "Emotional Climax", "Night Lawn Stage"]
  },
  {
    id: "gal-07",
    title: "Youth Sustainable Entrepreneurship Summit",
    category: "corporate",
    categoryLabel: "Corporate Conclave",
    image: "./images/corporate-entrepreneurship-summit.jpg",
    location: "University Auditorium",
    description: "Addressing academic dignitaries and student entrepreneurs for Indian Red Cross Society conclave.",
    highlights: ["Youth Summit", "Podium Address", "Social Impact"]
  },
  {
    id: "gal-08",
    title: "Behind The Broadcast Camera",
    category: "stage",
    categoryLabel: "Stage & Media",
    image: "./images/corporate-media-crew.jpg",
    location: "Broadcast Production Set",
    description: "Working side by side with professional broadcast cameramen, embodying her dual identity as anchor and journalist.",
    highlights: ["Broadcast Journalism", "Media Conclave", "Live On-Air"]
  },
  {
    id: "gal-09",
    title: "Leading The Grand Barat On Wheels",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "./images/wedding-barat.jpg",
    location: "Wedding Procession Entry",
    description: "Leading the family procession and Barat with vibrant festive energy, golden saree, and interactive commentary.",
    highlights: ["Barat on Wheels", "Interactive Host", "High Energy Entry"]
  },
  {
    id: "gal-10",
    title: "Keynote & Institutional Inauguration",
    category: "corporate",
    categoryLabel: "Corporate",
    image: "./images/corporate-keynote.jpg",
    location: "Conference Hall",
    description: "Delivering the opening address at the ivory damask keynote podium with LED backdrop.",
    highlights: ["Keynote Address", "Corporate Etiquette", "Audience Engagement"]
  },
  {
    id: "gal-11",
    title: "Floral Ring Glamour Night",
    category: "celebrations",
    categoryLabel: "Celebrations",
    image: "./images/wedding-glamour.jpg",
    location: "Luxury Banquet Stage",
    description: "Radiant in draped sapphire blue gown and white fur stole inside an opulent floral garland ring.",
    highlights: ["Evening Gala", "Fashion Styling", "Starlit Stage"]
  },
  {
    id: "gal-12",
    title: "Haldi Marigold Triangle Stage",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "./images/wedding-marigold.jpg",
    location: "Haldi Garden Pavilion",
    description: "Celebrating auspicious Haldi traditions framed by geometric marigold garlands.",
    highlights: ["Haldi Aesthetics", "Traditional Chic", "Celebratory Spirit"]
  },
  {
    id: "gal-13",
    title: "Dr. Agarwals Eye Hospital Press Launch",
    category: "corporate",
    categoryLabel: "Corporate",
    image: "./images/corporate-press-conference.jpg",
    location: "Press Conference Lounge",
    description: "Facilitating press conference briefings and inaugural proceedings in traditional handloom silk saree.",
    highlights: ["Press Conference", "Medical Conclave", "Media Interaction"]
  },
  {
    id: "gal-14",
    title: "The Electrifying Sangeet Co-Host",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "./images/wedding-sangeet.jpg",
    location: "Sangeet Grand Ballroom",
    description: "Co-hosting energetic family sangeet battles and welcoming royal guests with traditional warmth.",
    highlights: ["Sangeet Battles", "Stage Chemistry", "Festive Banter"]
  },
  {
    id: "gal-15",
    title: "Play School Grand Inauguration",
    category: "celebrations",
    categoryLabel: "Celebrations",
    image: "./images/corporate-school-opening.jpg",
    location: "Laurel Play School, Bhopal",
    description: "Conducting the official opening ceremony and interviewing young students with playful warmth.",
    highlights: ["School Inauguration", "Kids Interaction", "Community Event"]
  },
  {
    id: "gal-16",
    title: "Modern Executive Lifestyle",
    category: "stage",
    categoryLabel: "Stage & Media",
    image: "./images/corporate-chic.jpg",
    location: "Executive Lounge",
    description: "Posing with poise in black tailored vest and cream trousers, capturing modern corporate sophistication.",
    highlights: ["Editorial Style", "Contemporary Emcee", "Fashion Forward"]
  },
  {
    id: "gal-17",
    title: "Gala Banquet Table",
    category: "corporate",
    categoryLabel: "Corporate",
    image: "./images/corporate-gala.jpg",
    location: "Convention Grand Ballroom",
    description: "Seated with executive delegates and red rose centerpieces at a national corporate convention.",
    highlights: ["Executive Presence", "Conference Banquet", "Professional Demeanor"]
  }
];

export const CITY_HUBS: CityHub[] = [
  { name: "Bhopal", state: "Madhya Pradesh", isBase: true, featuredEvent: "Headquarters & Primary Base" },
  { name: "Indore", state: "Madhya Pradesh", featuredEvent: "Corporate Conclaves & Weddings" },
  { name: "Jaipur", state: "Rajasthan", featuredEvent: "Destination Royal Weddings" },
  { name: "Khajuraho", state: "Madhya Pradesh", featuredEvent: "Cultural Festivals & Heritage Events" },
  { name: "Katni", state: "Madhya Pradesh", featuredEvent: "Celebration Galas" },
  { name: "Ratlam", state: "Madhya Pradesh", featuredEvent: "Business Meets & Sangeet Nights" },
  { name: "Rajgarh", state: "Madhya Pradesh", featuredEvent: "Cultural Gatherings" },
  { name: "Vidisha", state: "Madhya Pradesh", featuredEvent: "Inaugural Ceremonies" },
  { name: "Berasia", state: "Madhya Pradesh", featuredEvent: "Community & School Festivals" },
  { name: "Chhindwara", state: "Madhya Pradesh", featuredEvent: "Trade Expositions & Conclaves" }
];

