import { AnalyticSection, Home} from "./components";
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

      <Home />
      <AnalyticSection/>
      <OurProducts/>
      <OurServices/>
      <VideoSection/>
      <AboutCompany/>

     {/* </WideScreenHandler> */}
    </>
  );
};

export default HomePage;
