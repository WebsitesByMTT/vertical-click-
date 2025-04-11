import Header from "@/components/Header";
import Services from "@/components/services/Services";
import Footer from "@/components/footer/Footer";
import React from "react";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services | SEO, PPC, Social Media & Branding Experts",
  description:
    "Boost your business with Vertical Click’s marketing services: SEO, PPC, social media, content marketing & branding. Drive traffic & maximize conversions!",
    alternates : {
      canonical : "https://verticalclick.us/our-services"
    },
    openGraph : {
      title : "Marketing Services | SEO, PPC, Social Media & Branding Experts",
      description : "Boost your business with Vertical Click’s marketing services: SEO, PPC, social media, content marketing & branding. Drive traffic & maximize conversions!",
      url : "https://verticalclick.us/our-services",
      type : 'website',
      images : [
        {
          url : 'https://verticalclick.us/logo.svg',
          height : 630,
          width : 1200,
          alt : 'Vertical Click'
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Marketing Services | SEO, PPC, Social Media & Branding Experts",
      description: "Boost your business with Vertical Click’s marketing services: SEO, PPC, social media, content marketing & branding. Drive traffic & maximize conversions!",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

const OurServicesPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {/* <Services /> */}
        <Services />
        {/* <Highlights /> */}
        <Divider />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default OurServicesPage;
