import React from 'react';
import Image from 'next/image';
import instaImg1 from '../assets/images/insta1.png';
import instaImg2 from '../assets/images/insta2.png';
import instaImg3 from '../assets/images/insta3.png';
import instaImg4 from '../assets/images/insta4.png';
import instaImg5 from '../assets/images/insta5.png';
import instaImg6 from '../assets/images/insta6.png';
import instaImg7 from '../assets/images/insta7.png';
import instaImg8 from '../assets/images/insta8.png';
import instaIcon from '../assets/icons/instaIcon.png';

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about-container" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Our Story
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white
          "
          >
            Inside Dholera
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            We Will Find the Best Option
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20  text-bluePText">
          Real estate is &quot;property consisting of land and the buildings on
          it, along with its natural resources such as crops,
          <br /> minerals or water, immovable property of this nature; an
          interest vested in this (also) an item of real property,
          <br /> (more generally) buildings or housing in general.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[50px] ml-[28px]">
        <div className="bg-white  py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-4 gap-5 m-5 p-5 mt-20 max-w-[1100px] ">
          <Image
            src={instaImg1}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in duration-200"
          />
          <Image
            src={instaImg2}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110  ease-in duration-200"
          />
          <div className="relative ">
            <Image
              src={instaImg3}
              alt="instagram image"
              className="mx-5 my-3 w-[255px] h-[255px]  rounded-lg hover:scale-110  ease-in duration-200"
            />
            <div className="absolute top-[5px] left-[5px] mt-[54px] ml-[66px]  p-[30px] flex justify-center items-center ">
              <div className=" flex justify-center items-center bg-[#00000080]  p-[25px] gap-[10px] w-20 h-20 rounded-[120px] ">
                <Image src={instaIcon} alt="insta icon" className="w-5 h-5 " />
              </div>
            </div>
          </div>
          <Image
            src={instaImg4}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110  ease-in duration-200"
          />
          <Image
            src={instaImg5}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110  ease-in duration-200"
          />
          <Image
            src={instaImg6}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110  ease-in duration-200"
          />
          <Image
            src={instaImg7}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110  ease-in duration-200"
          />
          <Image
            src={instaImg8}
            alt="instagram image"
            className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110  ease-in duration-200"
          />
        </div>
      </div>
    </div>
  );
}
