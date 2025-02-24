import React from "react";
import building from "../assets/images/land.webp";
import Image from "next/image";

export default function Aboutus() {
  return (
    <>
      <div>
        <section className="relative w-full h-screen">
          <Image
            src={building}
            alt="bg image"
            fill
            className="w-full h-full bg-no-repeat rounded-b-4xl object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6 sm:space-y-10">
            <div className="relative">
              <div className="flex flex-col justify-center items-center pb-5">
                <p className="text-6xl sm:text-9xl text-white opacity-5 font-black z-0 absolute top-0 uppercase dark:text-white">
                  About Us
                </p>
                <p className="text-3xl sm:text-4xl text-white font-bold z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300">
                  About Us
                </p>
              </div>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-xl shadow-lg max-w-4xl mx-auto sm:w-11/12">
              <p className="text-white text-md sm:text-lg leading-relaxed text-justify">
                At Dholera Times, we don’t just talk about real estate, we talk
                about the future. As India’s first smart city, Dholera is paving
                the way for a new era of urban development where modern
                infrastructure, seamless connectivity, and strategic planning
                converge to create a thriving economic and residential hub.
              </p>
              <p className="text-white text-md sm:text-lg leading-relaxed mt-4 text-justify">
                Our goal is to connect visionary investors with high-growth real
                estate opportunities, ensuring they benefit from the rapid
                development and appreciation of this emerging city. Our team of
                experts is dedicated to providing you with in-depth market
                insights, professional guidance, and a seamless investment
                experience from property selection to acquisition.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 dark:bg-[#17202a] text-black dark:text-white">
          <div className="container mx-auto px-6 sm:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
              {/* Mission Section */}
              <div className="sm:w-1/2 text-center sm:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold">Our Mission</h2>
                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  We aim to connect visionary investors with high-growth real
                  estate opportunities, ensuring they benefit from the rapid
                  development and appreciation of this emerging city. Our team
                  of experts provides in-depth market insights, professional
                  guidance, and a seamless investment experience from property
                  selection to acquisition.
                </p>
              </div>

              {/* Vision Section */}
              <div className="sm:w-1/2 text-center sm:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold">Our Vision</h2>
                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  We envision a future where strategic real estate investments
                  drive economic growth, empower communities, and create
                  long-term wealth for our investors. By leveraging market
                  expertise and innovation, we strive to build a thriving
                  investment ecosystem that transforms potential into
                  prosperity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
