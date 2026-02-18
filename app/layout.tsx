
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const cursive = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://farzeenilyaszargar.vercel.app"),
  title: "Farzeen Portfolio",
  description: "Explore the portfolio of Farzeen Ilyas Zargar, a passionate developer showcasing innovative projects, skills, and professional experience.",
  keywords: ["Farzeen Ilyas Zargar", "portfolio", "developer", "web development", "projects", "skills"],
  authors: [{ name: "Farzeen Ilyas Zargar" }],
  creator: "Farzeen Ilyas Zargar",
  publisher: "Farzeen Ilyas Zargar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: './favicon.ico',
  },
  openGraph: {
    title: "Farzeen's Portfolio",
    description: "check out my portfolio",
    url: "https://farzeenilyaszargar.vercel.app", 
    siteName: "Farzeen's Portfolio",
    images: [
      {
        url: "/portfolio-og-image.png", 
        width: 1200,
        height: 630,
        alt: "Farzeen's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farzeen's Portfolio",
    description: "check out my portfolio",
    images: ["/portfolio-og-image.png"], 
    creator: "@farzeenilya", 
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=5C3eli4hjHbSsJ_Ntwd95MceYvdlL3bqUya6NtkJJPQ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={`${cursive.variable}`}>
        {children}
      </body>
    </html>
  );
}
