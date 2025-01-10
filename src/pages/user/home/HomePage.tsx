import { AnalyticSection, Home, Navbar } from "./components";
import { AboutCompany } from "./subComponents";
import OurServices from "./ourServices/OurServices";
import { VideoSection } from "./videoSection";
import { OurProducts } from "./ourproducts";
// import WideScreenHandler from "../../../components/WideScreenHandler";
import { Footer } from "./footer";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
     {/* <WideScreenHandler> */}

      <Navbar />
      <Home />
      <AnalyticSection/>
      <AboutCompany/>
      <OurServices/>
      <VideoSection/>
      <OurProducts/>
      <Footer/>

     {/* </WideScreenHandler> */}
    </>
  );
};

export default HomePage;
