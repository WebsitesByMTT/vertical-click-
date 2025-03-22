import React from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";
import Highlights from "@/components/key-highlights/Highlights";

export default function Home() {
  return (
    <React.Fragment>
      <Services />
      {/* <Footer /> */}
      <Highlights/>
    </React.Fragment>

  );
}
