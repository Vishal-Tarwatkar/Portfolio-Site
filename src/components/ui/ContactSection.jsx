import React from "react";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

const ContactSection = () => {
   return (
      <section className="flex gap-6 flex-col items-center font-Inter bg-[#282828] text-white py-16 px-4">
         <div className="flex flex-col gap-4 flex-wrap text-5xl font-semibold text-center">
            <div>Let's</div>
            <div className="w-32 h-12 rounded-full bg-red-300"></div>
            <div>Talk</div>
         </div>
         <div className="flex gap-6 flex-col items-center text-center">
            <div className="text-lg font-medium">
               Good design can make a real difference in the world. I love the
               challenge of taking someone's vision and turning it into a
               reality
            </div>
            <div>
               <Link>
                  <button className="flex gap-2 justify-center items-center text-[#282828] bg-white font-semibold rounded-full py-3 px-6">
                     <CiCalendar className="text-xl" />
                     Schedule a Call
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
