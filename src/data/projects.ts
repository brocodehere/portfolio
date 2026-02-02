export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  image: string;
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
    tech: ['Golang', 'PostgreSQL', 'Redis', 'Astro', 'React', 'TypeScript', 'Cloudflare R2', 'Razorpay'],
    features: [
      'Admin product/catalog management',
      'Banner & offers system',
      'Secure payments & order verification',
      'SEO-ready static storefront',
      'Multi-currency pricing (INR/USD)'
    ],
    image: '/projects/ethnic-treasures.jpg',
    category: 'ecommerce'
  },
  {
    id: 'student-learning-portal',
    title: 'Student Learning Portal',
    description: 'International student portal for chemical/polymer education',
    longDescription: 'An interactive learning platform designed for international students with advanced security features, dynamic content management, and engaging UI animations.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Swagger', 'Cloudflare R2'],
    features: [
      'OTP email/mobile verification',
      'IP/device restricted login security',
      'Admin-managed dynamic learning modules',
      'Cloudflare R2 video storage',
      'Interactive animated UI with Framer Motion'
    ],
    image: '/projects/student-portal.jpg',
    category: 'education'
  },
  {
    id: 'lands-homes',
    title: 'Lands & Homes Real Estate Platform',
    description: 'Backend development project for property listings and AI-based recommendations',
    longDescription: 'A robust real estate platform with advanced property search capabilities, AI-powered recommendations, and comprehensive backend services.',
    tech: ['Golang', 'PostgreSQL', 'Next.js', 'Swagger', 'n8n'],
    features: [
      'Property listing management',
      'AI-based recommendations',
      'Advanced search and filtering',
      'Automated workflows with n8n',
      'RESTful API documentation'
    ],
    image: '/projects/lands-homes.jpg',
    category: 'realestate'
  }
];
