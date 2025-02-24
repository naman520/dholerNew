import React, { useState, useEffect } from "react";
import Image from "next/image";
import About from "../components/about";
import Services from "../components/services";
import Review from "../components/review";
import scrollIcon from "../assets/icons/topArrowIcon.png";
import Hero from "@/components/hero";
import Whatsapp from "@/components/whatsapp";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dark:bg-bgDark">
      <Hero
        address="620 JMD Megapolis, Sector-48, Sohna Road, Gurugram, India"
        phone="+91 9958993549"
        email="info@dholerinsider.com"
      />
      <Whatsapp/>
      <About
        cardTitle1="15 years"
        cardSubText1="in business"
        cardTitle2="$1 billion"
        cardSubText2="property brokered"
        cardTitle3="10,000"
        cardSubText3="transactions"
      />
      <Services />
      <Review />
      
      {showButton && (
        <div className="fixed bottom-24 right-10 z-50">
          <button
            onClick={handleScrollToTop}
            className="bg-slate-100 rounded shadow-xl overflow-visible"
          >
            <Image src={scrollIcon} alt="scroll button" />
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
