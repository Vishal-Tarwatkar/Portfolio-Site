import React from "react";
import Navbar from "../../components/Navbar";
import HeroArea from "./HeroArea";
import ServiceSection from "./ServiceSection";
import ProjectSection from "./ProjectSection";
import ClientSection from "./ClientSection";
import ContactSection from "../../components/ui/ContactSection";
import Footer from "../../components/Footer";

const Home = () => {
   return (
      <>
         <Navbar />
         <HeroArea />
         <ServiceSection />
         <ClientSection />
         <ContactSection />
         <Footer />
      </>
   );
};

export default Home;
