import albumNeonShadows from "@/assets/album-neon-shadows.jpg";
import albumMidnightEcho from "@/assets/album-midnight-echo.jpg";
import albumSilentThunder from "@/assets/album-silent-thunder.jpg";
import albumCosmicDrift from "@/assets/album-cosmic-drift.jpg";
import albumLostHorizon from "@/assets/album-lost-horizon.jpg";
import albumElectricDreams from "@/assets/album-electric-dreams.jpg";
import merchTshirt from "@/assets/merch-tshirt.jpg";
import merchVinyl from "@/assets/merch-vinyl.jpg";

export interface Release {
  slug: string;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
}

export interface MerchItem {
  slug: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export interface Video {
  slug: string;
  title: string;
  type: string;
  duration: string;
  image: string;
}

export interface TourDate {
  id: string;
  date: string;
  month: string;
  day: number;
  city: string;
  state: string;
  venue: string;
  eventName: string;
  status: "available" | "sold-out" | "presale";
}

export const releases: Release[] = [
  { slug: "neon-shadows", title: "Neon Shadows", type: "LP", year: 2024, description: "Our latest full-length exploration of urban isolation and digital connection", image: albumNeonShadows },
  { slug: "midnight-echo", title: "Midnight Echo", type: "Album", year: 2023, description: "Ten tracks recorded live in a single night, capturing raw emotion", image: albumMidnightEcho },
  { slug: "silent-thunder", title: "Silent Thunder", type: "Single", year: 2024, description: "A haunting meditation on unspoken words and missed moments", image: albumSilentThunder },
  { slug: "cosmic-drift", title: "Cosmic Drift", type: "EP", year: 2022, description: "Four-track journey through space and introspection", image: albumCosmicDrift },
  { slug: "lost-horizon", title: "Lost Horizon", type: "Mixtape", year: 2023, description: "Experimental collection featuring collaborations and remixes", image: albumLostHorizon },
  { slug: "electric-dreams", title: "Electric Dreams", type: "Album", year: 2021, description: "Debut album that launched our sonic exploration", image: albumElectricDreams },
];

export const merchItems: MerchItem[] = [
  { slug: "neon-shadows-vinyl", title: "\"Neon Shadows\" Vinyl", category: "Vinyl", price: "$29.99", description: "180g black vinyl with exclusive poster insert", image: merchVinyl },
  { slug: "midnight-echo-cd", title: "\"Midnight Echo\" CD", category: "CD", price: "$14.99", description: "Enhanced packaging with 12-page booklet and bonus track", image: albumMidnightEcho },
  { slug: "tour-2024-tshirt", title: "Tour 2024 T-Shirt", category: "Apparel", price: "$34.99", description: "100% cotton tee with tour dates on back", image: merchTshirt },
  { slug: "band-logo-hoodie", title: "Band Logo Hoodie", category: "Apparel", price: "$59.99", description: "Premium heavyweight hoodie with embroidered logo", image: merchTshirt },
  { slug: "cosmic-drift-poster", title: "\"Cosmic Drift\" Poster", category: "Print", price: "$24.99", description: "18x24 hand-numbered art print, signed by band", image: albumCosmicDrift },
  { slug: "electric-dreams-cassette", title: "\"Electric Dreams\" Cassette", category: "Cassette", price: "$12.99", description: "Limited run of 500, includes digital download code", image: albumElectricDreams },
];

export const videos: Video[] = [
  { slug: "silent-thunder-mv", title: "Silent Thunder", type: "Official Music Video", duration: "3:45", image: albumSilentThunder },
  { slug: "midnight-echo-live", title: "Midnight Echo", type: "Live Session", duration: "4:12", image: albumMidnightEcho },
  { slug: "electric-dreams-bts", title: "Electric Dreams", type: "Behind the Scenes", duration: "6:20", image: albumElectricDreams },
  { slug: "neon-shadows-lyric", title: "Neon Shadows", type: "Lyric Video", duration: "3:58", image: albumNeonShadows },
  { slug: "tour-diary-2023", title: "Tour Diary 2023", type: "Documentary", duration: "12:45", image: merchTshirt },
  { slug: "cosmic-drift-live", title: "Cosmic Drift", type: "Live at Red Rocks", duration: "18:30", image: albumCosmicDrift },
];

export const tourDates: TourDate[] = [
  { id: "1", date: "2024-03-15", month: "MAR", day: 15, city: "Brooklyn", state: "NY", venue: "Brooklyn Steel", eventName: "Spring Awakening Tour", status: "available" },
  { id: "2", date: "2024-03-22", month: "MAR", day: 22, city: "Los Angeles", state: "CA", venue: "The Wiltern", eventName: "West Coast Sessions", status: "available" },
  { id: "3", date: "2024-04-05", month: "APR", day: 5, city: "Chicago", state: "IL", venue: "Metro Chicago", eventName: "Midwest Thunder", status: "available" },
  { id: "4", date: "2024-04-12", month: "APR", day: 12, city: "Austin", state: "TX", venue: "Mohawk Austin", eventName: "Southern Nights", status: "sold-out" },
  { id: "5", date: "2024-04-20", month: "APR", day: 20, city: "Seattle", state: "WA", venue: "The Showbox", eventName: "Pacific Northwest Run", status: "presale" },
  { id: "6", date: "2024-05-03", month: "MAY", day: 3, city: "Portland", state: "OR", venue: "Crystal Ballroom", eventName: "Rose City Show", status: "available" },
];

export const bandMembers = [
  { name: "Maya Chen", role: "Vocals, Synths" },
  { name: "David Torres", role: "Guitar, Production" },
  { name: "Jordan Lee", role: "Bass" },
  { name: "Sam Rivera", role: "Drums" },
];

export const bandBio = "Harper emerged from High Point's underground music scene in 2026, blending post-punk aesthetics with electronic experimentation. Led by vocalist Maya Chen and guitarist David Torres, the band has evolved from DIY basement shows to international tours. Their sound—characterized by atmospheric guitars, driving rhythms, and introspective lyrics—has earned critical acclaim and a devoted following. With three studio albums and countless live performances, Harper continues to push boundaries while staying true to their raw, emotional core.";

export const navLinks = [
  { label: "Music", path: "/music" },
  { label: "Projects", path: "/merch" },
  { label: "Videos", path: "/videos" },
  { label: "Tour", path: "/tour" },
  { label: "Info", path: "/info" },
];
