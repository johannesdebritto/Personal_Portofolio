import React from "react";
import Image from "next/image";
import "./Hero.css";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 lg:px-32 py-20" aria-label="Hero section introducing Johannes">
      {/* Bagian Teks */}
      <div>
        <header>
          <p className="text-gray-500 uppercase mb-4">Hello, My Name is</p>
          <h1 className="text-4xl font-bold text-purple-500 mb-2">JOHANNES</h1>
          <h2 className="text-lg font-semibold mb-6">Android dan Web Developer</h2>
        </header>

        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 text-justify">
          I&apos;m Johannes, a passionate and experienced developer with a strong background in the full development cycle of dynamic web projects and Android applications. I focus on building reliable, efficient, and scalable solutions
          that meet real-world needs through clean code and modern technologies.
        </p>

        {/* Tombol Download CV */}
        <div className="flex space-x-4 justify-center md:justify-start mb-6">
          <a
            href="/CV_JOHANNES%20DE%20BRITTO.pdf"
            download
            aria-label="Download Johannes' CV"
            className="pulse-button-border relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:scale-110 transition-transform"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Download CV</span>
          </a>
        </div>

        {/* Ikon Sosial Media */}
        <nav aria-label="Social media links" className="flex space-x-6 justify-center md:justify-start">
          <a href="https://github.com/johannesdebritto?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Visit Johannes' GitHub profile">
            <Image src="/images/icon/github.png" alt="GitHub logo" width={30} height={30} className="hover:scale-150 transition-transform" />
          </a>
        </nav>
      </div>

      {/* Gambar Profil */}
      <div className="hidden md:flex justify-center md:justify-end">
        <figure className="pulse-ring w-[400px] h-[400px] ml-0 md:ml-10 lg:ml-20 -mt-8 relative" aria-label="Johannes profile picture">
          <Image src="/images/logo/prof.png" alt="Profile picture of Johannes" fill className="rounded-full object-cover" priority />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
