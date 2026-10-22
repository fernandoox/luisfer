import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Fernando Fernández Cruz – Software Engineer",
  description: "Software Engineer specializing in React, Angular, and modern web technologies. Experience at Uber, Cornershop, and MaxiSend. Building scalable front-end applications.",
  keywords: ["Software Engineer", "Frontend Developer", "React", "Angular", "TypeScript", "Next.js", "Web Development", "Luis Fernando Fernández Cruz", "Full Stack Developer"],
  authors: [{ name: "Luis Fernando Fernández Cruz" }],
  creator: "Luis Fernando Fernández Cruz",
  publisher: "Luis Fernando Fernández Cruz",
  metadataBase: new URL('https://luisfer.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luisfer.vercel.app',
    title: 'Luis Fernando Fernández Cruz – Software Engineer',
    description: 'Software Engineer specializing in React, Angular, and modern web technologies. Experience at Uber, Cornershop, and MaxiSend.',
    siteName: 'Luis Fernando Fernández Cruz Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Luis Fernando Fernández Cruz - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Fernando Fernández Cruz – Software Engineer',
    description: 'Software Engineer specializing in React, Angular, and modern web technologies.',
    images: ['/opengraph-image.png'],
    creator: '@luisfer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
