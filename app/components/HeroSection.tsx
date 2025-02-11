import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 lg:px-32 py-20">
      {/* Bagian Teks (Kiri) */}
      <div>
        <p className="text-gray-500 uppercase mb-4">Hello, My Name is</p>
        <h1 className="text-4xl font-bold text-purple-500 mb-2">JOHANNES</h1>
        <p className="text-lg font-semibold mb-6">Software Engineer, Web Developer, and UX/UI</p>
        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
          I'm Johannes, a passionate and experienced developer with a strong background in the full development cycle of dynamic web projects and app development. I specialize in creating intuitive and user-friendly interfaces, and I'm proficient in UX/UI design, ensuring that every project I work on is both functional and visually appealing.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start mb-6">
          <Link href="/resume">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:scale-110 transition-transform">
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Download CV</span>
            </button>
          </Link>
        </div>
        {/* Ikon Sosial Media */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <Link href="https://github.com">
            <Image
              src="/images/icon/github.png"
              alt="GitHub"
              width={30}
              height={30}
              className="hover:scale-150 transition-transform"
            />
          </Link>
          <Link href="https://twitter.com">
            <Image
              src="/images/icon/twitter.png"
              alt="Twitter"
              width={30}
              height={30}
              className="hover:scale-150 transition-transform"
            />
          </Link>
          <Link href="https://twitter.com">
            <Image
              src="/images/icon/keranjang.png"
              alt="Twitter"
              width={30}
              height={30}
              className="hover:scale-150 transition-transform"
            />
          </Link>
        </div>
      </div>
      {/* Bagian Gambar Profil (Kanan) */}
      <div className="hidden md:block justify-self-end self-start mt-[-80px] md:mt-[-100px]">
        <Image
          src="/images/profile-no-bg.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
