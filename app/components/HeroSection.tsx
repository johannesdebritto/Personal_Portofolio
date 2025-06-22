import React from "react";
import Image from "next/image";
import "./Hero.css"; // Import CSS animasi profil

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 lg:px-32 py-20">
      {/* Bagian Teks */}
      <div>
        <p className="text-gray-500 uppercase mb-4">Hello, My Name is</p>
        <h1 className="text-4xl font-bold text-purple-500 mb-2">JOHANNES</h1>
        <p className="text-lg font-semibold mb-6">Software Engineer, Web Developer, and UX/UI</p>
        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 text-justify">
          I'm Johannes, a passionate and experienced developer with a strong background in the full development cycle of dynamic web projects and Android applications. I focus on building reliable, efficient, and scalable solutions that
          meet real-world needs through clean code and modern technologies.
        </p>

        {/* Tombol Download CV */}
        <div className="flex space-x-4 justify-center md:justify-start mb-6">
          <a
            href="/CV_JOHANNES%20DE%20BRITTO.pdf"
            download
            className="pulse-button-border relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:scale-110 transition-transform"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Download CV</span>
          </a>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a href="https://github.com/johannesdebritto?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icon/github.png" alt="GitHub" width={30} height={30} className="hover:scale-150 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bagian Gambar Profil (Hanya muncul di Desktop) */}
      <div className="hidden md:flex justify-center md:justify-end">
        <div className="pulse-ring w-[400px] h-[400px] ml-0 md:ml-10 lg:ml-20 -mt-8 relative">
          <Image src="/images/logo/propile.png" alt="Profile Picture" fill className="rounded-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
