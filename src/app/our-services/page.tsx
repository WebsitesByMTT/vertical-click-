import Header from "@/components/Header";
import Services1 from "@/components/services/Services1";
import Footer from "@/components/footer/Footer";
import React from "react";
import Divider from "@/components/Divider";
import Container from "@/components/Container";

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
