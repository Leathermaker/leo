import React from "react";
import image from "../../../../assets/images/aboutimage.png";
const AboutImageSection: React.FC = () => {
  return (
    <div className=" relative">
      <div className="     flex items-center justify-center   ">
        <img src={image} alt="image" />
        <h1 className="absolute text-[4rem] font-bold top-4 -z-30 motion-scale-in-[0.2] motion-translate-x-in-[0%] motion-translate-y-in-[96%] motion-opacity-in-[10%] text-blue-950">ABOUT US</h1>
      </div>
    </div>
  );
};

export default AboutImageSection;
