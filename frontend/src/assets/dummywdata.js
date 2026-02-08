import W1 from "../assets/W1.png"
import W2 from "../assets/W2.png"
import W3 from "../assets/W3.png"
import W4 from "../assets/W4.png"
import W5 from "../assets/W5.png"
import W6 from "../assets/W6.png"
import W7 from "../assets/W7.png"
import W8 from "../assets/W8.png"
import W9 from "../assets/W9.png"
import W10 from "../assets/W10.png"
import W11 from "../assets/W11.png"
import W12 from "../assets/W12.png"

export const WATCHES = [
  {
    id: 1,
    name: "JACOB & CO. EPIC X",
    desc: "Automatic • Sport Strap",
    price: "₱ 6,19,000",
    img: W1,
    gender: "men",
  },
  {
    id: 2,
    name: "H. MOSER & CIE.",
    desc: "Chronograph • Leather",
    price: "₱ 10,69,200",
    img: W2,
    gender: "men",
  },
  {
    id: 3,
    name: "BVLGARI OCTO",
    desc: "Limited Edition • Bold",
    price: "₱ 31,00,000",
    img: W3,
    gender: "men",
  },
  {
    id: 4,
    name: "IWC PORTUGIESER",
    desc: "Skeleton • Titanium",
    price: "₱ 24,50,000",
    img: W4,
    gender: "men",
  },
  {
    id: 5,
    name: "BELL & ROSS URBAN",
    desc: "Minimal • Purple Dial",
    price: "₱ 33,00,000",
    img: W5,
    gender: "men",
  },
  {
    id: 6,
    name: "D1 MILANO",
    desc: "Classic • Dress",
    price: "₱ 38,40,000",
    img: W6,
    gender: "men",
  },
  {
    id: 7,
    name: "LONGINES ELEGANCE",
    desc: "Quartz • Mesh Strap",
    price: "₱ 2,99,000",
    img: W7,
    gender: "women",
  },
  {
    id: 8,
    name: "RADO CENTRIX",
    desc: "Slim • Steel",
    price: "₱ 1,49,000",
    img: W8,
    gender: "women",
  },
  {
    id: 9,
    name: "BVLGARI SERPENTI",
    desc: "Slim • Steel",
    price: "₱ 1,49,000",
    img: W9,
    gender: "women",
  },
  {
    id: 10,
    name: "ORIS AQUIS",
    desc: "Slim • Steel",
    price: "₱ 1,49,000",
    img: W10,
    gender: "women",
  },
  {
    id: 11,
    name: "OMEGA",
    desc: "Slim • Steel",
    price: "₱ 1,49,000",
    img: W11,
    gender: "women",
  },
  {
    id: 12,
    name: "MASERATI LIFESTYLE",
    desc: "Slim • Steel",
    price: "₱ 1,49,000",
    img: W12,
    gender: "women",
  },
];

export const FILTERS = [
  { key: "all", label: "All", iconName: "Grid" },
  { key: "men", label: "Men", iconName: "User" },
  { key: "women", label: "Women", iconName: "Users" },
];

export const PRODUCTS = [
  // Electronics
  {
    id: 101,
    name: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    price: "₱ 2,999",
    image: "https://images.pexels.com/photos/30009009/pexels-photo-30009009/free-photo-of-minimalist-wireless-earbuds-on-black-surface.jpeg",
    description: "Experience crystal clear sound with our latest Wireless Bluetooth Earbuds. Featuring active noise cancellation, 24-hour battery life, and a comfortable ergonomic fit. Perfect for music lovers and professionals alike.",
    rating: 4.8,
    reviews: [
      { user: "Alex M.", rating: 5, comment: "Best earbuds I've ever owned. The sound quality is incredible." },
      { user: "Sarah L.", rating: 4, comment: "Great battery life, but the case is a bit bulky." }
    ],
    sizes: ["One Size"],
    colors: ["#000000", "#FFFFFF"]
  },
  {
    id: 102,
    name: "Smart Watch Pro",
    category: "Electronics",
    price: "₱5,499",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    description: "Stay connected and healthy with the Smart Watch Pro. Tracks your heart rate, sleep, and workouts. Comes with a sleek design and customizable watch faces.",
    rating: 4.6,
    reviews: [
      { user: "John D.", rating: 5, comment: "Love the design and the fitness tracking features are spot on." }
    ],
    sizes: ["40mm", "44mm"],
    colors: ["#000000", "#C0C0C0", "#FFD700"]
  },
  {
    id: 103,
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: "₱ 12,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "Immerse yourself in music with our premium Noise Cancelling Headphones. Superior sound quality, plush ear cushions, and up to 30 hours of playback time.",
    rating: 4.9,
    reviews: [],
    sizes: ["One Size"],
    colors: ["#000000", "#000080"]
  },

  // Fashion
  {
    id: 201,
    name: "Cotton Classic T-Shirt",
    category: "Fashion",
    price: "₱ 899",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    description: "A wardrobe staple. Made from 100% organic cotton, this classic tee offers breathable comfort and a perfect fit. Available in multiple versatile colors.",
    rating: 4.5,
    reviews: [
      { user: "Mike T.", rating: 4, comment: "Good quality cotton. Fits true to size." },
      { user: "Emily R.", rating: 5, comment: "Very soft and comfortable." }
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFFFFF", "#000000", "#808080"]
  },
  {
    id: 202,
    name: "Leather Crossbody Bag",
    category: "Fashion",
    price: "₱ 4,500",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    description: "Crafted from genuine leather, this crossbody bag combines style and functionality. Features adjustable straps and multiple compartments for your essentials.",
    rating: 4.7,
    reviews: [],
    sizes: ["One Size"],
    colors: ["#8B4513", "#000000"]
  },
  {
    id: 203,
    name: "Denim Jacket",
    category: "Fashion",
    price: "₱ 3,299",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800",
    description: "The perfect layer for any season. This durable denim jacket features a classic cut, button closure, and chest pockets. A timeless addition to your closet.",
    rating: 4.8,
    reviews: [
      { user: "Chris P.", rating: 5, comment: "Excellent fit and quality denim." }
    ],
    sizes: ["M", "L", "XL"],
    colors: ["#000080", "#87CEEB"]
  },

  // Home & Living
  {
    id: 301,
    name: "Minimalist Ceramic Vase",
    category: "Home & Living",
    price: "₱ 1,299",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&q=80&w=800",
    description: "Add a touch of elegance to your home with this minimalist ceramic vase. Hand-crafted with a matte finish, it's perfect for fresh or dried flowers.",
    rating: 4.9,
    reviews: [],
    sizes: ["Small", "Medium", "Large"],
    colors: ["#FFFFFF", "#D2B48C"]
  },
  {
    id: 302,
    name: "Abstract Wall Art Print",
    category: "Home & Living",
    price: "₱ 2,499",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    description: "Transform your space with this stunning abstract wall art. Printed on high-quality archival paper with fade-resistant inks. Frame not included.",
    rating: 5.0,
    reviews: [
      { user: "Anna K.", rating: 5, comment: "Looks beautiful in my living room." }
    ],
    sizes: ["A4", "A3", "A2"],
    colors: []
  },
  {
    id: 303,
    name: "Bamboo Plant Stand",
    category: "Home & Living",
    price: "₱ 1,899",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
    description: "Display your greenery in style with this eco-friendly bamboo plant stand. Sturdy, moisture-resistant, and easy to assemble.",
    rating: 4.4,
    reviews: [],
    sizes: ["Standard"],
    colors: ["#DEB887"]
  }
];

export const STATS = [
  { value: "10+", label: "Years of Excellence" },
  { value: "25k+", label: "Happy Customers" },
  { value: "15+", label: "Awards Won" },
  { value: "100%", label: "Quality Guarantee" },
];

export const OUR_VALUES = [
  {
    id: 1,
    title: "Eco-Conscious",
    description: "We believe in sustainable living. Our products are crafted with the planet in mind, using eco-friendly materials and ethical manufacturing processes.",
    iconName: "Leaf"
  },
  {
    id: 2,
    title: "Quality First",
    description: "We never compromise on quality. Every item in our collection is hand-selected and rigorously tested to ensure it meets our high standards.",
    iconName: "ShieldCheck"
  },
  {
    id: 3,
    title: "Modern Design",
    description: "We celebrate the beauty of simplicity. Our curated selection features timeless, minimalist designs that elevate your everyday life.",
    iconName: "Zap" // or Layout
  },
  {
    id: 4,
    title: "Community Driven",
    description: "We are more than a store. We are a community of like-minded individuals who value design, quality, and sustainability.",
    iconName: "Users"
  }
];

export const SERVICE_HIGHLIGHTS = [
  {
    id: 1,
    title: "Free Shipping",
    description: "On all orders over $50",
    iconName: "Truck"
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "100% secure checkout",
    iconName: "ShieldCheck"
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Dedicated support team",
    iconName: "Headphones"
  },
  {
    id: 4,
    title: "Money Back",
    description: "30-day guarantee",
    iconName: "RefreshCcw"
  }
];

export const SLIDER_DATA = [
  {
    id: 1,
    subtitle: "New Arrival",
    title: "The Minimalist Collection",
    description: "Discover the beauty of less. Clean lines, premium materials, and timeless design.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 2,
    subtitle: "Season's Best",
    title: "Urban Essentials",
    description: "Curated pieces for the modern city dweller. Functional, stylish, and durable.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 3,
    subtitle: "Limited Edition",
    title: "Signature Series",
    description: "Exclusive designs available in limited quantities. Make a statement.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600"
  }
];

export const USER_ORDERS = [
  {
    id: "ORD-7752",
    date: "Feb 15, 2024",
    status: "Delivered",
    payment: "Paid",
    total: "₱ 1,299",
    items: [
      { name: "Minimalist Ceramic Vase", qty: 1, image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&q=80&w=800" }
    ],
    progress: 4 // 0: Placed, 1: Processing, 2: Shipped, 3: Out for delivery, 4: Delivered
  },
  {
    id: "ORD-9211",
    date: "Feb 28, 2024",
    status: "Processing",
    payment: "Pending",
    total: "₱ 4,198",
    items: [
      { name: "Cotton Classic T-Shirt", qty: 2, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" },
      { name: "Abstract Wall Art Print", qty: 1, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" }
    ],
    progress: 1
  }
];

export const USER_ADDRESSES = [
  {
    id: 1,
    type: "Home",
    name: "Alex Doe",
    details: "123 Maple Avenue, Apt 4B",
    city: "Quezon City",
    zip: "1100",
    isDefault: true
  },
  {
    id: 2,
    type: "Office",
    name: "Alex Doe",
    details: "45 Business Park, Tower 2",
    city: "Makati City",
    zip: "1200",
    isDefault: false
  }
];
