export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'justpolymersolutions',
    company: 'JUSTPOLYMERSOLUTIONS',
    position: 'Web Developer',
    period: 'Sep 2025 – Present',
    description: 'Leading the development of e-commerce platforms and learning management systems with modern web technologies.',
    achievements: [
      'Developed and launched Ethnic Treasures, a high-performance e-commerce platform with SEO-optimized storefront',
      'Built full product/content admin dashboard using React + TypeScript, PostgreSQL, and Cloudflare R2 media handling',
      'Implemented secure backend services with Golang, Redis, JWT authentication, Razorpay payments, and multi-currency pricing'
    ],
    tech: ['Golang', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Cloudflare R2', 'Razorpay']
  },
  {
    id: 'mobiloitte',
    company: 'MOBILOITTE TECHNOLOGIES',
    position: 'Software Engineer',
    period: 'Jan 2025 – Jun 2025',
    description: 'Contributed to real estate and e-commerce platforms while gaining expertise in full-stack development.',
    achievements: [
      'Contributed to Lands & Homes real estate platform by building secure Golang + PostgreSQL REST APIs',
      'Maintained Exobe e-commerce web app with bug fixes and feature improvements',
      'Trained in UI/UX design with Figma and built a MEAN stack job portal demo project'
    ],
    tech: ['Golang', 'PostgreSQL', 'Node.js', 'Express', 'MongoDB', 'Angular', 'Figma']
  }
];
