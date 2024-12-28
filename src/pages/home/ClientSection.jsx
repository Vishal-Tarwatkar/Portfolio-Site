import brandImg1 from "../../assets/images/home/Clients/1.png";
import brandImg2 from "../../assets/images/home/Clients/2.png";
import brandImg3 from "../../assets/images/home/Clients/3.png";
import brandImg4 from "../../assets/images/home/Clients/4.png";
import brandImg5 from "../../assets/images/home/Clients/5.png";
import brandImg6 from "../../assets/images/home/Clients/6.png";

const ClientSection = () => {
   const brandImgs = [
      brandImg1,
      brandImg2,
      brandImg3,
      brandImg4,
      brandImg5,
      brandImg6,
   ];
   return (
      <section className="font-Inter py-10 px-3">
         <div className="border border-[#4b4b4b] rounded-2xl py-8 px-4">
            <div className="text-2xl font-semibold">
               Focused to create a thoughtful and unique visual craft for brands{" "}
            </div>
            <div className="flex flex-wrap justify-center items-center">
               {brandImgs.map((elem, index) => (
                  <img src={elem} alt="" key={index} className="w-28" />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ClientSection;
