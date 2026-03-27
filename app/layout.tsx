import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farzeen's Portfolio",
  description: "A showcase of my work and projects as a software developer.",
  openGraph: {
    title: "Farzeen's Portfolio",
    description: "A showcase of my work and projects as a software developer.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Farzeen's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farzeen's Portfolio",
    description: "A showcase of my work and projects as a software developer.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Software Developer", "Portfolio", "Projects", "Experience", "Skills", "Farzeen Ilyas Zargar", "Delhi", "India"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
