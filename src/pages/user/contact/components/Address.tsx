import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

interface AddressProps {
  icon: React.ReactNode;
  title: string;
  desc1: string;
  desc2: string;
}

const Address: React.FC = () => {
  const address: AddressProps[] = [
    {
      icon: <SlLocationPin />,
      title: "Address",
      desc1: "Kapurthala Road,",
      desc2: "Jalandhar 144002 Punjab, INDIA",
    },
    {
      icon: <MdOutlineEmail />,
      title: "Email Us",
      desc1: "info@leovinyls.com",
      desc2: "info@leovinyls.com",
    },
    {
      icon: <BiPhoneCall />,
      title: "Call Now",
      desc1: "+91-181-2651732",
      desc2: "+91-181-3259445",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4 py-24">
      {address.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 shadow-lg p-8 rounded-lg w-full sm:w-[20rem] lg:w-[22rem] bg-white"
        >
          <div className="text-3xl text-gray-600 bg-gray-100 p-4 rounded-full">
            {item.icon}
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="text-xl font-semibold text-blue-950">{item.title}</div>
            <div className="text-sm text-gray-600">{item.desc1}</div>
            <div className="text-sm text-gray-600">{item.desc2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;