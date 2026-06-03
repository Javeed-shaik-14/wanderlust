const sampleListings = [
  {
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    price: 1500,
    location: "Malibu",
    country: "United States",
    filters: ["trending", "amazingpools"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    price: 1200,
    location: "New York City",
    country: "United States",
    filters: ["iconiccities", "rooms"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    price: 1000,
    location: "Aspen",
    country: "United States",
    filters: ["mountains", "trending", "camping"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    price: 2500,
    location: "Florence",
    country: "Italy",
    filters: ["trending", "castles"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    price: 800,
    location: "Portland",
    country: "United States",
    filters: ["camping", "trending", "amazingpools"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    filters: ["trending", "amazingpools", "iconiccities"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    filters: ["mountains", "trending", "camping"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    filters: ["iconiccities", "rooms", "trending"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    filters: ["mountains", "trending", "domes"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    filters: ["camping", "farms", "trending"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    title: "Luxurious Arctic Lodge",
    description:
      "Experience the magic of the Northern Lights from this luxurious arctic lodge.",
    price: 5000,
    location: "Lapland",
    country: "Finland",
    filters: ["arctic", "domes", "trending"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WWFjaHQlMjBFeHBlcmllbmNlJTIwR3JlZWNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    title: "Yacht Experience",
    description:
      "Sail the open seas in luxury on this beautiful yacht. Perfect for a unique and memorable vacation.",
    price: 7000,
    location: "Santorini",
    country: "Greece",
    filters: ["boats", "trending", "amazingpools"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697730288131-6684ca63584b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage1",
    },
    title: "Island Paradise Villa",
    description:
      "Relax in this private island villa surrounded by crystal-clear waters and tropical greenery.",
    price: 4500,
    location: "Bora Bora",
    country: "French Polynesia",
    filters: ["trending", "amazingpools", "boats"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage2",
    },
    title: "Forest Hideaway Cottage",
    description:
      "A secluded cottage deep in the forest, perfect for a peaceful retreat and nature walks.",
    price: 1100,
    location: "Black Forest",
    country: "Germany",
    filters: ["camping", "trending", "farms"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1682285210821-5d1b5a406b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2glMjBIb3VzZSUyMHdpdGglMjBQcml2YXRlJTIwRG9jayUyMEtleSUyMFdlc3QlMjBVU0F8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage3",
    },
    title: "Beach House with Private Dock",
    description:
      "Enjoy stunning ocean views and direct access to the sea from this luxurious beach house.",
    price: 3200,
    location: "Key West",
    country: "United States",
    filters: ["trending", "amazingpools", "boats"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661878010419-0f4c0114d87a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJ5JTIwRG93bnRvd24lMjBMb2Z0JTIwVG9yb250byUyMENhbmFkYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage4",
    },
    title: "Luxury Downtown Loft",
    description:
      "Experience urban luxury in this modern loft located in the heart of downtown.",
    price: 2800,
    location: "Toronto",
    country: "Canada",
    filters: ["iconiccities", "rooms", "trending"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1688480179675-8f211d16e9a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1lZGlldmFsJTIwQ2FzdGxlJTIwU3RheSUyMEVkaW5idXJnaCUyMHNjb3RsYW5kfGVufDB8fDB8fHww",
      filename: "listingimage5",
    },
    title: "Medieval Castle Stay",
    description:
      "Live like royalty in this restored medieval castle nestled in the countryside.",
    price: 5000,
    location: "Edinburgh",
    country: "Scotland",
    filters: ["castles", "trending", "iconiccities"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1704455306069-d98fd946f32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmluZXlhcmQlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage6",
    },
    title: "Vineyard Villa",
    description:
      "Stay in a beautiful villa surrounded by lush vineyards. Perfect for wine enthusiasts.",
    price: 3400,
    location: "Napa Valley",
    country: "United States",
    filters: ["trending", "farms", "iconiccities"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1675745329634-4dc1f4247e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJvcGljYWwlMjBCdW5nYWxvdyUyMFRoYWlsYW5kfGVufDB8fDB8fHww",
      filename: "listingimage7",
    },
    title: "Tropical Bungalow",
    description:
      "Experience tropical bliss in this cozy bungalow surrounded by palm trees and exotic plants.",
    price: 1300,
    location: "Phuket",
    country: "Thailand",
    filters: ["trending", "amazingpools", "camping"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG91c2Vib2F0JTIwQWR2ZW50dXJlJTIwS2VyYWxhJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage8",
    },
    title: "Houseboat Adventure",
    description:
      "Float in comfort on this spacious houseboat. Explore the waterways at your own pace.",
    price: 1700,
    location: "Kerala",
    country: "India",
    filters: ["boats", "trending", "amazingpools"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1604178449156-323f840ed736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hhbGV0JTIwaW4lMjB0aGUlMjBBbHBzJTIwZnJhbmNlfGVufDB8fDB8fHww",
      filename: "listingimage9",
    },
    title: "Chalet in the Alps",
    description:
      "Enjoy world-class skiing and breathtaking views from this charming alpine chalet.",
    price: 2700,
    location: "Chamonix",
    country: "France",
    filters: ["mountains", "trending", "domes"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1453747063559-36695c8771bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29hc3RhbCUyMFJldHJlYXQlMjBJdGFseXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage10",
    },
    title: "Coastal Retreat",
    description:
      "Relax in this coastal retreat with panoramic sea views and luxurious amenities.",
    price: 3800,
    location: "Amalfi Coast",
    country: "Italy",
    filters: ["trending", "iconiccities", "amazingpools"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1554072676-3ea1cdcb2c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhpc3RvcmljJTIwQ2FzdGxlJTIwU3RheSUyMEVuZ2xhbmR8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage11",
    },
    title: "Historic Castle Stay",
    description:
      "Stay in a historic castle with rich history and stunning architecture.",
    price: 5100,
    location: "Transylvania",
    country: "Romania",
    filters: ["castles", "trending", "iconiccities"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q291bnRyeXNpZGUlMjBNYW5zaW9uJTIwRW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage12",
    },
    title: "Countryside Mansion",
    description:
      "Relax in luxury at this countryside mansion, complete with expansive gardens and modern amenities.",
    price: 2900,
    location: "Cotswolds",
    country: "England",
    filters: ["trending", "farms", "rooms"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWNvJTIwZnJpZW5kbHklMjBKdW5nbGUlMjBMb2RnZSUyMEJyYXppbHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage13",
    },
    title: "Eco-friendly Jungle Lodge",
    description:
      "Stay in an eco-friendly lodge in the heart of the jungle. Perfect for nature lovers.",
    price: 1900,
    location: "Amazon Rainforest",
    country: "Brazil",
    filters: ["camping", "trending", "farms"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1694475540500-1fc7d45467a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9kZXJuJTIwR2xhc3MlMjBIb3VzZSUyMFVuaXRlZCUyMFN0YXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage14",
    },
    title: "Modern Glass House",
    description:
      "Experience unparalleled views from this modern glass house overlooking the countryside.",
    price: 2500,
    location: "Big Sur",
    country: "United States",
    filters: ["rooms", "trending", "iconiccities"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1505855720065-0bd509eba08b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW91bnRhaW4lMjBDYWJpbiUyMFVuaXRlZCUyMFN0YXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage15",
    },
    title: "Mountain Cabin",
    description:
      "Escape to this cozy cabin in the mountains. Perfect for hiking and enjoying nature.",
    price: 1200,
    location: "Rocky Mountains",
    country: "United States",
    filters: ["mountains", "trending", "domes"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1664300695672-f247311db0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdsYW1waW5nJTIwVGVudCUyME1vcm9jY298ZW58MHx8MHx8fDA%3D",
      filename: "listingimage16",
    },
    title: "Glamping Tent",
    description:
      "Enjoy a unique glamping experience in this luxurious tent with all modern comforts.",
    price: 800,
    location: "Sahara Desert",
    country: "Morocco",
    filters: ["camping", "trending", "domes"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9hdCUyMEhvdXNlJTIwU3RheSUyMEl0YWx5fGVufDB8fDB8fHww",
      filename: "listingimage17",
    },
    title: "Boat House Stay",
    description:
      "Experience life on the water with this cozy boat house, complete with all amenities.",
    price: 1500,
    location: "Venice",
    country: "Italy",
    filters: ["boats", "trending", "amazingpools"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1607570799395-b968ad047e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXJiYW4lMjBQZW50aG91c2UlMjBVbml0ZWQlMjBTdGF0ZXN8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage18",
    },
    title: "Urban Penthouse",
    description:
      "Enjoy the best views of the city from this luxurious urban penthouse.",
    price: 3700,
    location: "New York City",
    country: "United States",
    filters: ["iconiccities", "rooms", "trending"],
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1626867245452-bdc8f7e865cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW4lMjBMb2RnZSUyMEFzcGVufGVufDB8fDB8fHww",
      filename: "listingimage19",
    },
    title: "Mountain Lodge",
    description:
      "Stay at this beautiful mountain lodge and enjoy the best of nature and luxury.",
    price: 2600,
    location: "Aspen",
    country: "United States",
    filters: ["mountains", "trending", "domes"],
  },
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1663089271707-64f242a1769a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZhcm1ob3VzZSUyMFJldHJlYXQlMjBJdGFseXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage20",
    },
    title: "Farmhouse Retreat",
    description:
      "Reconnect with nature at this charming farmhouse surrounded by rolling hills and pastures.",
    price: 1800,
    location: "Tuscany",
    country: "Italy",
    filters: ["farms", "trending", "camping"],
  },
];

module.exports = { data: sampleListings };
