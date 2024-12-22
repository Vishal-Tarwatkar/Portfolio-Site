import React, { useEffect, useState } from "react";

const HeroArea = () => {
   const [heroHeight, setHeroHeight] = useState("100vh");

   useEffect(() => {
      const adjustHeroHeight = () => {
         const navbar = document.querySelector(".navbar");
         const navbarHeight = navbar ? navbar.offsetHeight : 0;
         setHeroHeight(`calc(100vh - ${navbarHeight}px)`);
      };

      adjustHeroHeight(); // Adjust on load
      window.addEventListener("resize", adjustHeroHeight); // Adjust on resize

      return () => {
         window.removeEventListener("resize", adjustHeroHeight);
      };
   }, []);

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
      <section
         className="flex flex-col gap-10 px-3 py-6 bg-[#fff0e3]"
         style={{ height: heroHeight }}
      >
         <div className="flex flex-wrap items-center text-3xl font-semibold font-Inter">
            {/* hero upper text */}
         </div>
         <div className="font-Onest">
            I'm passionate about my work because I believe that good design can
            make a real difference in the world — It can help businesses attract
            new customers, build stronger relationships, and create a more
            positive brand image. I love the challenge of taking someone's
            vision and turning it into a reality.
         </div>
         <div className="flex justify-around font-Onest">
            {heroLinks.map((elem, index) => (
               <button className="border border-black rounded-full px-2 text-xs">
                  <a key={index} href={elem.linkUrl} className="">
                     {elem.linkName}
                  </a>
               </button>
            ))}
         </div>
      </section>
   );
};

export default HeroArea;
