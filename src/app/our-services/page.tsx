import Header from "@/components/Header";
import Highlights from "@/components/key-highlights/Highlights";
import Services from "@/components/services/Services";
import Services1 from "@/components/services/Services1";
import Footer from "@/components/footer/Footer";
import React from "react";
import Divider from "@/components/Divider";

const OurServicesPage = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <Services /> */}
      <Services1/>
      <Highlights />
      <Divider/>
      <Footer/>
    </React.Fragment>
  );
};

export default OurServicesPage;
