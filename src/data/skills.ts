export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 5 },
      { name: 'Next.js', level: 5 },
      { name: 'Angular', level: 4 },
      { name: 'Astro', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Framer Motion', level: 4 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Golang (Gin)', level: 5 },
      { name: 'Node.js', level: 5 },
      { name: 'Express.js', level: 5 }
    ]
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL', level: 5 },
      { name: 'MongoDB', level: 4 },
      { name: 'Redis', level: 4 },
      { name: 'Swagger', level: 4 },
      { name: 'Git/GitLab', level: 5 }
    ]
  },
  {
    name: 'Cloud & Integrations',
    skills: [
      { name: 'Cloudflare R2', level: 4 },
      { name: 'Render', level: 4 },
      { name: 'Vercel', level: 5 },
      { name: 'Razorpay Payments', level: 4 }
    ]
  }
];
