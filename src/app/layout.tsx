import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import CallButton from "@/components/CallButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bandeins = localFont({
  src: "../assets/fonts/BandeinsStrangeVariable.ttf",
  variable: "--font-bandeins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Digital Marketing Agency Austin |  Vertical Click - Grow Your Business",
  description:
    "Vertical Click, a leading digital marketing agency in Austin, boosts businesses with SEO Agency, PPC, and social media. Drive growth and get results today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vertical Click",
    "url": "https://verticalclick.us/",
    "logo": "https://verticalclick.us/logo.svg",
    "description": "Vertical Click is a digital marketing agency based in Euless, Texas, specializing in SEO, SEM, Paid Media, E-Commerce SEO, and Local SEO services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1001 W Euless Blvd, suit 408, Euless, TX 76040, United States",
      "addressLocality": "Euless",
      "addressRegion": "TX",
      "postalCode": "76040",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1469-854-1204",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/verticalclick",
      "https://www.linkedin.com/company/verticalclick",
      "https://www.instagram.com/vertical_click"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "SEO Services",
      "description": "Boost your online presence with our expert SEO services."
    },
    {
      "@type": "Service",
      "name": "Paid Media",
      "Description": "Increase conversions with our data-driven paid media campaigns."
    },
    {
      "@type": "Service",
      "name": "Local SEO",
      "description": "Optimize your business for local searches and Google My Business."
    },
    {
      "@type": "Service",
      "name": "E-Commerce SEO",
      "Description": "Drive more sales with our tailored e-commerce SEO strategies."
    }
  ]
}



return (
  <html lang="en-us">
    <Head>
      <meta name="google-site-verification" content="A9IPkQrZRNxrrT6bahoACofVPDAjgaApAyU7Duixbvs" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
    <body
      className={`${bandeins.className} ${geistSans.variable} ${geistMono.variable} `}
    >
      {children}
      <GoogleAnalytics gaId="G-EK11VJ6YW4" />
      
      <CallButton/>

    </body>
  </html>
);
}
