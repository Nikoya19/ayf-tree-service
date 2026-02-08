// ============================================
// AYF TREE SERVICE - WEBSITE CONTENT
// ============================================
// EDIT THIS FILE TO CUSTOMIZE YOUR WEBSITE
// All text, services, and image paths are here
// ============================================

export const siteConfig = {
  // Company Info
  name: "AYF Tree Service",
  tagline: "Professional Tree Care You Can Trust",
  description: "Expert tree removal, trimming, stump grinding, and emergency storm damage cleanup. Licensed, insured, and serving your community with pride.",

  // Contact Information - EDIT THESE
  phone: "(555) 123-4567",
  email: "info@ayftreeservice.com",
  address: "123 Oak Street, Springfield, ST 12345",

  // Business Hours
  hours: {
    weekday: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Emergency Only"
  },

  // Social Links (leave empty "" if you don't have them)
  social: {
    facebook: "https://facebook.com/ayftreeservice",
    instagram: "https://instagram.com/ayftreeservice",
    google: "https://g.page/ayftreeservice"
  },

  // SEO
  url: "https://ayftreeservice.com",
  ogImage: "/images/hero/og-image.jpg"
}

// ============================================
// HERO SECTION IMAGES
// ============================================
// Place images in: /public/images/hero/
// Recommended size: 1920x1080px (16:9 ratio)
// Format: JPG or WebP for best performance

export const heroImages = {
  // Main hero background image
  main: "/images/hero/hero-main.jpg",

  // Alternative hero images for slider (optional)
  slides: [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-3.jpg"
  ]
}

// ============================================
// SERVICES
// ============================================
// Each service has its own image folder: /public/images/services/[service-name]/

export const services = [
  {
    id: "tree-removal",
    title: "Tree Removal",
    shortDescription: "Safe removal of dead, diseased, or hazardous trees of any size.",
    fullDescription: "Our expert team safely removes trees that are dead, diseased, damaged, or pose a risk to your property. We use advanced techniques and equipment to ensure safe removal without damage to surrounding structures or landscaping.",
    features: [
      "Emergency tree removal",
      "Dead or dying trees",
      "Hazardous tree assessment",
      "Large tree specialists",
      "Complete cleanup included",
      "Stump removal available"
    ],
    // Image path: place in /public/images/services/tree-removal/
    image: "/images/services/tree-removal/main.jpg",
    gallery: [
      "/images/services/tree-removal/work-1.jpg",
      "/images/services/tree-removal/work-2.jpg",
      "/images/services/tree-removal/work-3.jpg"
    ]
  },
  {
    id: "tree-trimming",
    title: "Tree Trimming & Pruning",
    shortDescription: "Expert pruning to improve health, appearance, and safety.",
    fullDescription: "Regular trimming and pruning promote healthy growth, improve tree structure, and enhance the beauty of your landscape. Our certified arborists know exactly how to trim each species for optimal health.",
    features: [
      "Crown thinning and reduction",
      "Deadwood removal",
      "Structural pruning",
      "Seasonal maintenance",
      "Ornamental tree shaping",
      "Clearance pruning"
    ],
    image: "/images/services/tree-trimming/main.jpg",
    gallery: [
      "/images/services/tree-trimming/work-1.jpg",
      "/images/services/tree-trimming/work-2.jpg",
      "/images/services/tree-trimming/work-3.jpg"
    ]
  },
  {
    id: "stump-grinding",
    title: "Stump Grinding",
    shortDescription: "Complete stump removal to reclaim your yard space.",
    fullDescription: "Don't let ugly stumps ruin your landscape. Our stump grinding service removes stumps below ground level, allowing you to replant, sod, or landscape the area. Fast, efficient, and thorough cleanup.",
    features: [
      "Below-grade grinding (6-12 inches)",
      "Root system removal",
      "Site restoration",
      "Mulch recycling option",
      "Multiple stump discounts",
      "Minimal ground disturbance"
    ],
    image: "/images/services/stump-grinding/main.jpg",
    gallery: [
      "/images/services/stump-grinding/work-1.jpg",
      "/images/services/stump-grinding/work-2.jpg",
      "/images/services/stump-grinding/work-3.jpg"
    ]
  },
  {
    id: "storm-cleanup",
    title: "Storm Damage Cleanup",
    shortDescription: "24/7 emergency response for storm-damaged trees.",
    fullDescription: "When storms strike, we're here to help. Our emergency team responds quickly to remove fallen trees, clear debris, and make your property safe. We work with insurance companies and provide documentation for claims.",
    features: [
      "24/7 emergency service",
      "Fallen tree removal",
      "Branch and debris clearing",
      "Insurance claim assistance",
      "Temporary tarping",
      "Priority response"
    ],
    image: "/images/services/storm-cleanup/main.jpg",
    gallery: [
      "/images/services/storm-cleanup/work-1.jpg",
      "/images/services/storm-cleanup/work-2.jpg",
      "/images/services/storm-cleanup/work-3.jpg"
    ]
  }
]

// ============================================
// GALLERY IMAGES
// ============================================
// Place images in: /public/images/gallery/
// These appear in the Gallery page
// Recommended: mix of different services

export const galleryImages = [
  {
    src: "/images/gallery/project-1.jpg",
    alt: "Large tree removal project",
    category: "Tree Removal",
    title: "Oak Tree Removal"
  },
  {
    src: "/images/gallery/project-2.jpg",
    alt: "Tree trimming in progress",
    category: "Trimming",
    title: "Crown Reduction"
  },
  {
    src: "/images/gallery/project-3.jpg",
    alt: "Stump grinding work",
    category: "Stump Grinding",
    title: "Stump Removal"
  },
  {
    src: "/images/gallery/project-4.jpg",
    alt: "Storm damage cleanup",
    category: "Storm Cleanup",
    title: "Emergency Response"
  },
  {
    src: "/images/gallery/project-5.jpg",
    alt: "Tree pruning work",
    category: "Trimming",
    title: "Precision Pruning"
  },
  {
    src: "/images/gallery/project-6.jpg",
    alt: "Dangerous tree removal",
    category: "Tree Removal",
    title: "Hazardous Removal"
  },
  {
    src: "/images/gallery/project-7.jpg",
    alt: "Commercial tree service",
    category: "Commercial",
    title: "Commercial Property"
  },
  {
    src: "/images/gallery/project-8.jpg",
    alt: "After storm cleanup",
    category: "Storm Cleanup",
    title: "Post-Storm Cleanup"
  }
]

// ============================================
// ABOUT PAGE IMAGES
// ============================================
// Place in: /public/images/about/

export const aboutImages = {
  // Main image on about page
  main: "/images/about/team.jpg",

  // Team member photos (place in /public/images/about/team/)
  team: [
    {
      name: "John Smith",
      role: "Founder & Lead Arborist",
      bio: "ISA Certified Arborist with 20+ years of experience in tree care and removal.",
      image: "/images/about/team/john.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Operations Manager",
      bio: "Expert in large-scale tree removals and complex rigging operations.",
      image: "/images/about/team/mike.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Customer Relations",
      bio: "Dedicated to ensuring every client receives exceptional service and support.",
      image: "/images/about/team/sarah.jpg"
    }
  ],

  // Equipment/company photos
  equipment: [
    "/images/about/equipment-1.jpg",
    "/images/about/equipment-2.jpg",
    "/images/about/equipment-3.jpg"
  ]
}

// ============================================
// SERVICE AREAS
// ============================================
// List of cities/areas you serve

export const serviceAreas = [
  "Springfield",
  "Riverside",
  "Oakwood",
  "Maple Heights",
  "Pine Valley",
  "Cedar Grove",
  "Willow Creek",
  "Birchwood",
  "Elmwood Park",
  "Forest Hills",
  "Greenfield",
  "Sunnydale",
  "Ridgeview",
  "Meadowbrook",
  "Hillcrest"
]

// ============================================
// FAQS
// ============================================
// Edit these questions and answers

export const faqs = [
  {
    question: "How much does tree removal cost?",
    answer: "Tree removal costs vary based on tree size, location, accessibility, and complexity. On average, expect $300-$2,500 per tree. We provide free, no-obligation estimates for all jobs. Emergency services may have additional fees."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, AYF Tree Service is fully licensed and carries comprehensive liability insurance and workers' compensation. We provide certificates of insurance upon request and maintain all required local and state certifications."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Absolutely! We offer 24/7 emergency tree removal for storm damage, fallen trees, and hazardous situations. Call us anytime at our emergency hotline for immediate response. We prioritize safety and rapid response during emergencies."
  },
  {
    question: "How long does a typical job take?",
    answer: "Most standard tree removals take 2-6 hours depending on size and complexity. Trimming jobs typically take 1-4 hours. Large or complex jobs may take a full day. We always provide time estimates with our quotes and work efficiently to minimize disruption."
  },
  {
    question: "Do I need a permit to remove a tree?",
    answer: "Permit requirements vary by municipality. Many cities require permits for removing trees over a certain size or in specific zones. We handle all permit applications as part of our service and ensure full compliance with local regulations."
  },
  {
    question: "What happens to the wood after removal?",
    answer: "We offer several options: we can haul away all debris, cut wood into firewood lengths for your use, or leave chips for mulch. Just let us know your preference when we provide the estimate. We strive to recycle and repurpose whenever possible."
  },
  {
    question: "How do I know if my tree is dangerous?",
    answer: "Warning signs include: dead or hanging branches, cracks in the trunk, leaning significantly, fungus growth, hollow sections, or roots lifting. If you're unsure, we offer free hazard assessments to evaluate your trees' health and stability."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we regularly work with insurance companies for storm damage claims. We provide detailed documentation, photos, and reports to support your claim. We can also work directly with your insurance adjuster to streamline the process."
  }
]

// ============================================
// WHY CHOOSE US
// ============================================
// These appear on the homepage

export const whyChooseUs = [
  {
    title: "Licensed & Insured",
    description: "Full coverage for your protection and peace of mind. Certified professionals.",
    icon: "Shield"
  },
  {
    title: "24/7 Emergency Service",
    description: "Available around the clock for urgent tree situations and storm damage.",
    icon: "Clock"
  },
  {
    title: "Expert Team",
    description: "ISA Certified Arborists with years of hands-on experience.",
    icon: "Users"
  },
  {
    title: "Free Estimates",
    description: "No-obligation quotes with transparent, upfront pricing.",
    icon: "ClipboardCheck"
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art tools and machinery for safe, efficient work.",
    icon: "Settings"
  },
  {
    title: "Clean Guarantee",
    description: "We leave your property cleaner than we found it. Guaranteed.",
    icon: "Sparkles"
  }
]


// ============================================
// VIDEOS
// ============================================
// Add your YouTube or Vimeo videos here
// Just paste the video ID from the URL

export const videos = {
  // Featured video (shown on homepage)
  featured: {
    id: "YOUR_VIDEO_ID_HERE",  // YouTube video ID (e.g., "dQw4w9WgXcQ")
    title: "See Our Work in Action",
    description: "Watch how we safely remove large trees and handle emergency situations.",
    platform: "youtube"  // or "vimeo"
  },

  // Video gallery (shown on videos page)
  gallery: [
    {
      id: "VIDEO_ID_1",
      title: "Large Oak Tree Removal",
      description: "Removing a 100-year-old oak tree safely from a residential property.",
      category: "Tree Removal",
      platform: "youtube"
    },
    {
      id: "VIDEO_ID_2", 
      title: "Emergency Storm Cleanup",
      description: "24-hour emergency response after major storm damage.",
      category: "Storm Cleanup",
      platform: "youtube"
    },
    {
      id: "VIDEO_ID_3",
      title: "Precision Tree Trimming",
      description: "Crown reduction and shaping for better tree health.",
      category: "Trimming",
      platform: "youtube"
    },
    {
      id: "VIDEO_ID_4",
      title: "Stump Grinding Process",
      description: "Complete stump removal and site restoration.",
      category: "Stump Grinding",
      platform: "youtube"
    }
  ]
}

// ============================================
// ============================================
// TESTIMONIALS
// ============================================
// Customer reviews (optional)

export const testimonials = [
  {
    name: "Robert Johnson",
    location: "Springfield",
    text: "AYF Tree Service removed a huge oak tree from our backyard safely and efficiently. The crew was professional and left the yard spotless. Highly recommend!",
    rating: 5
  },
  {
    name: "Maria Garcia",
    location: "Oakwood",
    text: "They came out in the middle of the night after a storm damaged our trees. Fast response and excellent work. True professionals.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Riverside",
    text: "Great pricing and even better service. They trimmed all our trees and you can tell they really know what they're doing. Will use again!",
    rating: 5
  }
]
