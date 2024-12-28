import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
   const heroLinks = [
      {
         linkName: "Dribbble",
         linkUrl: "",
      },
      {
         linkName: "Behance",
         linkUrl: "",
      },
      {
         linkName: "Instagram",
         linkUrl: "",
      },
      {
         linkName: "LinkedIn",
         linkUrl: "",
      },
   ];

   return (
      <section className="flex gap-4 flex-col py-10 px-4 bg-[#fea75f] font-Inter">
         <div className="text-lg">vishal.tarwatkar.work@gmail.com</div>
         <div className="flex gap-8 flex-col">
            <div className="flex justify-around font-Onest">
               {heroLinks.map((elem, index) => (
                  <button
                     key={index}
                     className="border border-black rounded-full px-2 py-.9 text-xs font-medium"
                  >
                     <a href={elem.linkUrl} className="">
                        {elem.linkName}
                     </a>
                  </button>
               ))}
            </div>
            <div className="">
               <ul className="flex flex-col gap-3 font-medium">
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/portfolio">Projects</Link>
                  </li>
                  <li>
                     <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Footer;
