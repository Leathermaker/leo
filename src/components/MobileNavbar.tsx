import React from "react";
import { menus } from "../pages/user/home/subComponents/nav/NavbarMenu";
import { RxCross2 } from "react-icons/rx";
import useNavbarStore from "../store/NavbarStore";
import { Link } from "react-router-dom";

const MobileNavbar:React.FC = () => {
  const { closeNavbar } = useNavbarStore();

  return (
    <div className="fixed inset-0 left-0  bg-gray-900/80 z-[99] backdrop-blur-lg">
         <div onClick={() => closeNavbar()}>
          <RxCross2 color="white" size={30} className="absolute top-4 right-4" />
        </div>
       
      <div className="flex flex-col items-start ps-24 justify-center h-full">
       
        {menus.map((menu, index) => {
          return (
            <Link
              key={index}
              to={menu.href}
              onClick={() => closeNavbar()}
              className="text-white text-start text-4xl font-bold mb-4 motion-translate-x-in-[-100%] motion-translate-y-in-[-1%]"
            >
              {menu.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
