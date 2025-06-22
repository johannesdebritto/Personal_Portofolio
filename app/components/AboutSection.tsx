"use client"; // Pastikan ini ada di awal untuk komponen client-side

import React, { useState, useEffect } from "react";

const AboutSection = () => {
  // Gunakan state jika ada data yang perlu diperbarui di klien
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    // Pastikan state untuk render dinamis hanya diatur di klien
    setClientReady(true);
  }, []);

  return (
    <section id="about" className="bg-black text-white py-16 flex justify-center items-center min-h-screen">
      <div className="max-w-6xl flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-16">
        {/* Gambar Profil */}
        <div className="flex-shrink-0 md:mr-8 mb-8 md:mb-0">
          <div className="border-4 border-purple-500 p-3 rounded-lg">
            <img
              src="/images/logo/fotobg.png" // Ganti dengan path gambar Anda
              alt="Johannes"
              className="w-72 h-72 md:w-96 md:h-96 rounded-lg object-cover" // Ukuran gambar disesuaikan
            />
          </div>
        </div>

        {/* Konten Teks */}
        <div className="flex-1 max-w-3xl text-left">
          <h2 className="text-purple-500 text-lg md:text-xl font-semibold uppercase mb-2">About Me</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Johannes, <span className="text-purple-500">Innovative</span> Software Engineer
          </h1>
          <p className="text-gray-300 mb-6 text-justify leading-relaxed text-sm sm:text-base md:text-lg">
            With over 1 year of experience in software and solutions development, I am a detail-oriented professional passionate about creating innovative and efficient digital solutions. I thrive on learning new concepts and applying them
            to streamline development processes, driving organizational success. My expertise spans web development, app development, and UX/UI design, aiming to blend functionality with exceptional user experiences.
          </p>
          <ul className="space-y-4 text-justify text-sm sm:text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✅</span>
              <p>Designed and developed responsive company profile websites, ensuring cross-platform compatibility and modern aesthetics.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✅</span>
              <p>Created Android applications with intuitive interfaces and robust backends to meet specific client requirements.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✅</span>
              <p>Crafted user-centric designs for web and mobile platforms, ensuring an engaging and accessible user experience.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
