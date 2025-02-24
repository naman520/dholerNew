import Image from "next/image";
import React from "react";
import heroBg from "../assets/images/heroBackground.webp";
import arrowIcon from "../assets/icons/arrow.png";
import phoneIcon from "../assets/icons/contact.png";
import mailIcon from "../assets/icons/mail.png";

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById("about-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col w-full h-screen ">
      <Image
        src={heroBg}
        alt="bg image"
        fill
        // className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center"
        className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center brightness-50"
      />
      <div className="w-full h-screen  ">
        <div className="w-full relative pt-32 text-center flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 ">
            {/* Left Section */}
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
              <button className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-full text-white h-10 w-auto font-black text-sm uppercase cursor-pointer transition-colors duration-300 mb-6">
                Real Estate
              </button>

              <h1 className="font-normal text-4xl md:text-5xl lg:text-7xl text-white capitalize leading-tight">
                find real estate
                <br /> that suits you
              </h1>

              <p className="mt-6 text-gray-300 max-w-md text-lg hidden md:block">
                Discover your perfect property with our expert guidance and
                extensive portfolio of premium real estate options.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-1/2 max-w-md">
              <form className="space-y-6 bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-lg px-6 md:px-10 py-8 rounded-xl shadow-xl border border-gray-700/50">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 "
                  ></label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-700 dark:placeholder-gray-400  outline-none transition-all duration-300"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-700 dark:placeholder-gray-400 outline-none transition-all duration-300"
                    placeholder=" Email Address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-200"
                  ></label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-700 dark:placeholder-gray-400 outline-none transition-all duration-300"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 font-semibold text-sm uppercase"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>

          {/* Show more button  */}
          <div className="  absolute -bottom-20 w-full text-center ">
            <button
              onClick={showMoreBtn}
              className=" text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
            >
              show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
