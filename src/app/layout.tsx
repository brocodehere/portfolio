import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Piyush Kumar - Full-Stack Developer | Golang | React | PostgreSQL",
  description: "Backend-focused full-stack engineer building scalable e-commerce platforms and secure learning management systems. 1+ years professional experience with production-level systems, Golang, React, PostgreSQL, and Redis.",
  keywords: ["Full-Stack Developer", "Golang Developer", "React Developer", "PostgreSQL", "Redis", "E-commerce Development", "Backend Engineer", "API Development", "TypeScript", "Node.js"],
  authors: [{ name: "Piyush Kumar" }],
  creator: "Piyush Kumar",
  publisher: "Piyush Kumar",
  robots: "index, follow",
  openGraph: {
    title: "Piyush Kumar - Full-Stack Developer",
    description: "Backend-focused full-stack engineer building scalable e-commerce platforms and secure learning management systems",
    type: "website",
    url: "https://piyushkumar.dev",
    siteName: "Piyush Kumar Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://piyushkumar.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piyush Kumar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Kumar - Full-Stack Developer",
    description: "Backend-focused full-stack engineer building scalable e-commerce platforms and secure learning management systems",
    creator: "@piyushkumar",
    images: {
      url: "https://piyushkumar.dev/twitter-image.jpg",
      width: 1200,
      height: 600,
      alt: "Piyush Kumar - Full-Stack Developer",
    },
  },
  icons: [
    { rel: 'icon', url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/favicon.png', sizes: '180x180', type: 'image/png' },
  ],
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
