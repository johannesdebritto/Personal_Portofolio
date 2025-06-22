"use client";

import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 relative">
      <div className="container mx-auto px-6">
        {" "}
        {/* Tambahkan padding horizontal */}
        {/* Kontainer Navigasi dan Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm mb-4 md:mb-0">
            Copyright ©2024,{" "}
            <span>
              Johannes <span className="text-purple-500">Works</span>.{" "}
            </span>
            All Rights Reserved
          </p>

          {/* Navigasi */}
          <div className="flex space-x-10 items-center">
            <Link href="#home" className="group">
              <button className="text-white cursor-pointer duration-200 hover:scale-110 transition-transform hover:shadow-lg hover:text-purple-500 relative">
                <span>Home</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              </button>
            </Link>

            <Link href="#about" className="group">
              <button className="text-white cursor-pointer duration-200 hover:scale-110 transition-transform hover:shadow-lg hover:text-purple-500 relative">
                <span>About</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              </button>
            </Link>

            <Link href="#resume" className="group">
              <button className="text-white cursor-pointer duration-200 hover:scale-110 transition-transform hover:shadow-lg hover:text-purple-500 relative">
                <span>Resume</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              </button>
            </Link>

            <Link href="#project" className="group">
              <button className="text-white cursor-pointer duration-200 hover:scale-110 transition-transform hover:shadow-lg hover:text-purple-500 relative">
                <span>Project</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tombol Panah */}
      <div className="absolute bottom-16 right-4">
        <button
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
