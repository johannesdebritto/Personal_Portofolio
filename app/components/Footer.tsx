"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 relative" aria-label="Site footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <address className="not-italic text-sm mb-4 md:mb-0">
            © 2024{" "}
            <strong>
              Johannes <span className="text-purple-500">Works</span>
            </strong>
            . All Rights Reserved.
          </address>

          {/* Navigasi */}
          <nav aria-label="Footer navigation">
            <ul className="flex space-x-10 items-center text-sm sm:text-base">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#resume", label: "Resume" },
                { href: "#project", label: "Project" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group relative text-white hover:text-purple-500 transition duration-200">
                    <span>{item.label}</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Tombol Scroll to Top */}
      <div className="absolute bottom-16 right-4">
        <button
          aria-label="Scroll to top"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
