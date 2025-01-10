import React from "react";
import {
  // Experience,
  HeroRightSection,
  // RoundedButtonSlider,
  Tag,
  Title,
} from "../subComponents";

const Home: React.FC = () => {
  return (
    <div className="h-[45rem h-auto grid grid-cols-12 relative  bg-red-5">
      {/* Left Section */}
      <div className="lg:col-span-6 col-span-12 flex flex-col gap-6 items-center lg:items-start justify-center  px-4 sm:px-8 lg:px-16 xl:px-24 ">
        
        <Tag />
        <Title />
       
        
        {/* <RoundedButtonSlider /> */}
        {/* <Experience /> */}
      </div>

      {/* Right Section */}
      <div className="lg:col-span-6 col-span-12 lg:block overflow-hidden  ">
        <div className="p-4 sm:p-8 lg:p-12">
          <HeroRightSection />
        </div>
      </div>
    </div>
  );
};

export default Home;