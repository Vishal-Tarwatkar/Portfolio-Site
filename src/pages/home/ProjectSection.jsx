import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "./ProjectData";
import { GoArrowUpRight } from "react-icons/go";

const ProjectSection = () => {
   const mainProjects = ProjectData.slice(0, 3);

   return (
      <section className="flex flex-col gap-10 items-center justify-center font-Inter py-10 px-3">
         <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h2 className="text-3xl font-semibold">
               Helping brands achieve sustainable results
            </h2>
            <p className="text-xs text-[#5F6980]">
               There are many variations of passages of Lorem Ipsum available,
               but the majority have suffered in some form, by injected humour
            </p>
         </div>
         <div className="flex flex-col gap-12">
            {mainProjects.map((elem, index) => (
               <div key={index} className="flex flex-col gap-6">
                  <div className="rounded-2xl overflow-hidden h-96">
                     <img
                        src={elem.imgUrl}
                        alt=""
                        className="w-full h-full object-cover object-left"
                     />
                  </div>
                  <div className="flex flex-col gap-3 px-2">
                     <div className="text-2xl font-medium leading-7">
                        {elem.title}
                     </div>
                     <div className="flex gap-2">
                        {elem.tags.map((tags, index) => (
                           <div
                              key={index}
                              className="border py-0.5 px-1 border-black rounded-full text-[.6rem] font-semibold"
                           >
                              {tags}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="border-2 border-black rounded-full py-2 px-4 text-sm font-medium">
            <Link to={""}>
               <button className="flex gap-1 justify-center items-center">
                  All Case Studies <GoArrowUpRight />
               </button>
            </Link>
         </div>
      </section>
   );
};

export default ProjectSection;
