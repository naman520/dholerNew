import Link from "next/link";
import React from "react";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#17202a]  text-white">

    <div className="relative pt-10 p-4 mx-[10px] border-t-2 border-solid border-[#EDEFF2]">
      <div className="gap-10 md:grid md:grid-flow-col md:grid-cols-3 justify-items-center items-center max-sm:text-center ">
        <div className="space-y-2">
          <h2 className="text-lg">Contact Us</h2>
          <div className="max-sm:grid max-sm:grid-flow-row grid-rows-3 text-sm text-nowrap ">
            <p className="break-words">
              620 JMD Megapolis, Sector-48, Sohna Road, Gurugram, India
            </p>
            <p className="break-words">+91 9958993549</p>
           
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <h2 className="text-lg">Social Media</h2>
            <div className=" grid-col-3 text-sm grid ">
              <Link href={""} className="break-words">Facebook</Link>
              <Link href={"https://www.instagram.com/dholera.insider?igsh=MWNnYzc5OG40a2dr"} className="break-words">Instagram</Link>
              <Link href={""} className="break-words">Twitter (X)</Link>
              <Link href={"https://www.linkedin.com/in/dholera-insider-1a6b57351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="break-words">LinkedIn</Link>
              <Link href={"https://youtube.com/@dholerainsider?si=ZcBtHqUhtxqi90dY"} className="break-words">YouTube</Link>
  
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <h2 className="text-lg">Contact Us</h2>
            <div className="max-sm:grid max-sm:grid-flow-row grid-rows-3 text-sm text-nowrap ">
              <p className="break-words">620 JMD Megapolis</p>
              <p className="break-words">+91 9958993549</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center pt-2">Copyright &copy; 2025 Dholera Insider | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
