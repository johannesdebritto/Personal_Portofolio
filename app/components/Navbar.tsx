"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsBurgerOpen(false);
    }
  };

  return (
    <nav className={`bg-black fixed top-0 left-0 w-full z-50 h-16 shadow-lg transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`} aria-label="Main navigation">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto p-4">
        {/* Logo */}
        <h1 className="text-white text-lg font-bold flex items-center">
          <span className="text-purple-500">Johannes</span>Works
        </h1>

        {/* Hamburger */}
        <button onClick={() => setIsBurgerOpen(!isBurgerOpen)} className="block md:hidden text-white focus:outline-none z-50" aria-label="Toggle navigation menu">
          {isBurgerOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        {/* Dropdown Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center h-screen space-y-6 p-6 transition-transform duration-300 ${
            isBurgerOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#resume", label: "Resume" },
            { href: "#portfolio", label: "Project" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={handleLinkClick} className="text-white text-xl hover:text-purple-500 duration-200 hover:scale-110 transition-transform">
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/6285602813201"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-110 transition-transform"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Contact Me</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row md:items-center md:space-x-10">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#resume", label: "Resume" },
            { href: "#portfolio", label: "Project" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="group text-white cursor-pointer duration-200 hover:scale-110 transition-transform hover:shadow-lg hover:text-purple-500 relative">
              <span>{label}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </Link>
          ))}
          <a
            href="https://wa.me/6285602813201"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-110 transition-transform"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Contact Me</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
