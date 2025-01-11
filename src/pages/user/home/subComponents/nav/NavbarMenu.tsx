import React from "react";
import { Link } from "react-router-dom";


interface NavbarMenuType{

  title : string;
  href : string;
}

export const menus: NavbarMenuType[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Page",
    href: "/page",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

 const NavbarMenu: React.FC = () => {
  
  return (
    <div className="hidden md:flex gap-6  ">
      {menus.map((menu, idx) => {
        return (
          <React.Fragment  key={`MENU_INDEX_${idx}`}>
            <Link
              to={menu.href}
              className="cursor-pointer "
            >
              <p className="hover:text-blue-900 ">{menu.title}</p>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};  

export default NavbarMenu;
