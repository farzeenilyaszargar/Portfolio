import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = new URL("https://farzeenilyaszargar.online");
const siteName = "Farzeen Ilyas Zargar";
const siteAltName = "Farzeen";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteAltName}`,
  },
  applicationName: siteName,
  description: "A showcase of my work and projects as a software developer.",
  openGraph: {
    title: siteName,
    description: "A showcase of my work and projects as a software developer.",
    type: "website",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "A showcase of my work and projects as a software developer.",
    images: ["/og-img.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Software Developer", "Portfolio", "Projects", "Experience", "Skills", "Farzeen Ilyas Zargar", "Delhi", "India", "Web Development", "Open Source", "Tech Enthusiast"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: siteAltName,
    url: siteUrl.href,
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
