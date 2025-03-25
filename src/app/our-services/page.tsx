import Header from "@/components/Header";
import Services1 from "@/components/services/Services1";
import Footer from "@/components/footer/Footer";
import React from "react";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services | SEO, PPC, Social Media & Branding Experts",
  description:
    "Boost your business with Vertical Click’s marketing services: SEO, PPC, social media, content marketing & branding. Drive traffic & maximize conversions!",
};

const OurServicesPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {/* <Services /> */}
        <Services1 />
        {/* <Highlights /> */}
        <Divider />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default OurServicesPage;
