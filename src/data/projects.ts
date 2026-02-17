export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem?: string;
  role?: string[];
  metrics?: { value: string; label: string }[];
  tech: string[];
  features: string[];
  image: string;
  logo?: string;
  github?: string;
  live?: string;
  category: 'ecommerce' | 'education' | 'realestate';
}

export const projects: Project[] = [
  {
    id: 'ethnic-treasures',
    title: 'Ethnic Treasures E-Commerce Platform',
    description: 'Full-stack custom e-commerce platform for handcrafted ethnic products',
    longDescription: 'A comprehensive e-commerce solution built from scratch with modern technologies. Features include a SEO-optimized storefront, admin dashboard for product management, secure payment processing, and multi-currency support.',
    problem: 'Small ethnic artisans needed a professional platform to sell handcrafted products globally, with challenges in payment processing, inventory management, and international shipping.',
    role: [
      'Backend development with Golang and PostgreSQL',
      'Database schema design and Redis caching strategy',
      'JWT authentication and Razorpay payment integration',
      'Cloudflare R2 media storage and CDN setup',
      'Solo full-stack development (2 months)'
    ],
    metrics: [
      { value: '99.9%', label: 'Uptime' },
      { value: '500ms', label: 'API Response Time' },
      { value: '10,000+', label: 'Products Managed' }
    ],
    tech: ['Golang', 'PostgreSQL', 'Redis', 'Astro', 'React', 'TypeScript', 'Cloudflare R2', 'Razorpay'],
    features: [
      'Admin product/catalog management',
      'Banner & offers system',
      'Secure payments & order verification',
      'SEO-ready static storefront',
      'Multi-currency pricing (INR/USD)'
    ],
    image: '/projects/ethnic-treasures.jpg',
    logo: '/ethnic_treasures_logo.png',
    live: 'https://ethnictreasures.co.in',
    category: 'ecommerce'
  },
  {
    id: 'student-learning-portal',
    title: 'Student Learning Portal',
    description: 'International student portal for chemical/polymer education',
    longDescription: 'An interactive learning platform designed for international students with advanced security features, dynamic content management, and engaging UI animations.',
    problem: 'International students needed secure access to educational resources with IP-based restrictions, OTP verification, and engaging multimedia content delivery.',
    role: [
      'Backend development with Node.js and Express',
      'Database schema design with PostgreSQL',
      'Redis caching for performance optimization',
      'JWT authentication and session management',
      'Cloudflare R2 video storage integration',
      'API development and documentation with Swagger',
      'Solo full-stack development (2 months)'
    ],
    metrics: [
      { value: '1000+', label: 'Concurrent Users' },
      { value: '40%', label: 'Performance Improvement' },
      { value: '99.9%', label: 'Security Success Rate' }
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Swagger', 'Cloudflare R2'],
    features: [
      'OTP email/mobile verification',
      'IP/device restricted login security',
      'Admin-managed dynamic learning modules',
      'Cloudflare R2 video storage',
      'Interactive animated UI with Framer Motion'
    ],
    image: '/projects/student-portal.jpg',
    logo: '/jps_logo.png',
    live: 'https://jpolymersolutions.com',
    category: 'education'
  },
  {
    id: 'lands-homes',
    title: 'Lands & Homes Real Estate Platform',
    description: 'Backend development project for property listings and AI-based recommendations',
    longDescription: 'A robust real estate platform with advanced property search capabilities, AI-powered recommendations, and comprehensive backend services.',
    problem: 'Real estate agencies needed a scalable backend system to manage thousands of property listings with AI-powered recommendations and automated workflows for better customer engagement.',
    role: [
      'Backend development with Golang and PostgreSQL',
      'Database schema design for property listings',
      'AI recommendation system implementation',
      'RESTful API development with Swagger documentation',
      'Automated workflow integration with n8n',
      'Team collaboration (3 developers)'
    ],
    tech: ['Golang', 'PostgreSQL', 'Next.js', 'Swagger', 'n8n'],
    features: [
      'Property listing management',
      'AI-based recommendations',
      'Advanced search and filtering',
      'Automated workflows with n8n',
      'RESTful API documentation'
    ],
    image: '/projects/lands-homes.jpg',
    logo: '/l&h_logo.svg',
    live: 'https://www.landsandhomes.com',
    category: 'realestate'
  }
];
