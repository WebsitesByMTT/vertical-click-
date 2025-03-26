import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

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
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="A9IPkQrZRNxrrT6bahoACofVPDAjgaApAyU7Duixbvs"
        />
      </Head>
      <body
        className={`${bandeins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-EK11VJ6YW4" />
      </body>
    </html>
  );
}
