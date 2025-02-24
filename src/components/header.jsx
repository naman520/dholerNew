import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../src/assets/icons/search.png';
import logo from "../../src/assets/icons/logo.webp";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300 
        ${scrolled ? 'bg-green-600 dark:bg-[#0a5307]' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <div className="md:max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <Image src={logo} className="h-14 w-14" alt="Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden sm:flex">
        <Image src={searchIcon} alt="Search" className="w-4 h-4 self-center" />
        <input
          type="text"
          placeholder="Search"
          maxLength="20"
          className="w-40 bg-transparent outline-none placeholder-gray-300 mx-4 py-2 text-white capitalize"
        />
      </div>

      {/* Navbar Links */}
      <ul className="text-sm font-bold hidden sm:flex text-white">
        <li className="p-4 hover:text-orange-500">
          <Link href="#about-container">About</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="#services">Services</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="#reviews">Reviews</Link>
        </li>
        <li className="p-4 hover:text-orange-500">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <p className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer text-white">
        Get In Touch
      </p>

      <div className="mr-10">
        <ThemeChanger />
      </div>

      {/* Mobile Menu Button */}
      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 
        ${header ? 'bg-[#020308ea]' : 'left-[-100%]'}`}
      >
        <ul className="text-sm font-bold text-white">
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#about-container" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#deals" onClick={handleMobileHeader}>
              Deals
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
