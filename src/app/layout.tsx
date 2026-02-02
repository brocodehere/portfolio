import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Piyush Kumar - Full-Stack Developer",
  description: "Building scalable e-commerce and secure learning platforms with modern web technologies. Golang | React | PostgreSQL | Redis",
  keywords: ["Full-Stack Developer", "Golang", "React", "PostgreSQL", "Redis", "E-commerce", "Web Development"],
  authors: [{ name: "Piyush Kumar" }],
  openGraph: {
    title: "Piyush Kumar - Full-Stack Developer",
    description: "Building scalable e-commerce and secure learning platforms with modern web technologies",
    type: "website",
    url: "https://piyushkumar.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Kumar - Full-Stack Developer",
    description: "Building scalable e-commerce and secure learning platforms with modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
