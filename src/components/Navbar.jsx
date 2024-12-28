import React from "react";
import logo from "../assets/icons/logo.svg";
import HamburgerIcon from "./ui/HamburgerIcon";

const Navbar = () => {
   return (
      <div className="navbar flex justify-between items-center bg-[#fff0e3] p-3">
         <div>
            <img src={logo} alt="" className="w-8" />
         </div>
         <div className="flex justify-center items-center">
            <HamburgerIcon />
         </div>
      </div>
   );
};

export default Navbar;
