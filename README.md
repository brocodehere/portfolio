# Piyush Kumar - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, experience, and projects as a Full-Stack Developer specializing in Golang, React, PostgreSQL, and Redis.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion with CSS 3D transforms and parallax effects
- **Dark/Light Mode**: System preference support with animated toggle
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Performance Optimized**: SEO-friendly with high Lighthouse scores
- **Interactive Components**: 3D hover cards, animated timelines, modal views
- **Contact Form**: Functional contact form with validation
- **Resume Download**: PDF resume download functionality

## 🛠️ Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icon library

### Backend & Database
- **Golang** - Backend services (referenced in projects)
- **PostgreSQL** - Primary database
- **Redis** - Caching and session management
- **Node.js** - Alternative backend runtime

### Tools & Deployment
- **Vercel** - Deployment platform
- **Cloudflare R2** - Media storage
- **Render** - Application hosting
- **Git/GitLab** - Version control

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── robots.ts       # SEO robots.txt
│   │   └── sitemap.ts      # SEO sitemap
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── navigation.tsx # Navigation bar
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── resume-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── theme-provider.tsx
│   │   └── dark-mode-toggle.tsx
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Helper functions
│   └── data/              # Static data
│       ├── projects.ts    # Projects data
│       ├── experience.ts  # Experience data
│       └── skills.ts      # Skills data
├── public/                # Static assets
│   └── resume.pdf         # Resume file
├── components/            # Legacy components (moved to src/)
├── data/                  # Legacy data (moved to src/)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Layout Metadata** (`src/app/layout.tsx`):
   ```typescript
   export const metadata: Metadata = {
     title: "Your Name - Full-Stack Developer",
     description: "Your professional description",
     // ... other metadata
   }
   ```

2. **Navigation** (`src/components/navigation.tsx`):
   - Update social media links
   - Modify navigation items if needed

3. **Hero Section** (`src/components/hero-section.tsx`):
   - Update name, title, and tagline
   - Modify button actions

4. **Contact Information** (`src/components/contact-section.tsx`):
   - Update email, phone, and social links
   - Modify contact form handling

### Data Updates

Update your portfolio data in the `src/data/` directory:

- **projects.ts** - Add/update your projects
- **experience.ts** - Add/update work experience
- **skills.ts** - Update your technical skills

### Styling

The project uses Tailwind CSS with custom design tokens. Modify the theme in:

- **tailwind.config.ts** - Tailwind configuration
- **src/app/globals.css** - Custom CSS and utility classes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on push to main branch

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance

This portfolio is optimized for performance:

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for fast loading
- **SEO**: Semantic HTML5, meta tags, sitemap
- **Accessibility**: WCAG 2.1 AA compliant
- **Images**: Optimized with WebP/AVIF formats

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Contact form (if using external service)
CONTACT_FORM_ENDPOINT=your_endpoint_url

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Next.js Configuration

The `next.config.ts` file includes:

- Package optimization for better performance
- Image optimization settings
- Security headers
- Compression and minification

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as inspiration or template for your own projects!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: piyushkumar61090@gmail.com
- **Phone**: +91 7667517759
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
