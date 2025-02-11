"use client"; // Menandai bahwa file ini adalah Client Component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Memastikan bahwa komponen hanya akan dirender di sisi klien
  }, []);

  if (!isClient) {
    return null; // Tidak render apapun di sisi server
  }

  return (
    <section id="contact" className="bg-black text-white py-16 px-8 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bagian Kiri */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let’s Talk For your <span className="text-purple-500">Next Projects</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Discuss a project or just want to say hi? Connect with me via email or through a phone call.
          </p>
          <ul className="mb-6">
            {[
              "1+ Years of Experience",
              "Professional Web Designer",
              "Mobile Apps Design",
              "UX/UI Designer",
              "Fullstack Developer",
            ].map((item, index) => (
              <li className="flex items-center mb-2" key={index}>
                <span className="text-purple-500 mr-2">✓</span> {item}
              </li>
            ))}
          </ul>
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

        {/* Bagian Kanan */}
        <div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Tery Humfy D. Tawez"
                className="w-full bg-gray-800 text-white p-3 rounded"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-gray-400 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="teryy@humfy.org"
                className="w-full bg-gray-800 text-white p-3 rounded"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-gray-400 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+821 (123) 45678"
                className="w-full bg-gray-800 text-white p-3 rounded"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-gray-400 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-800 text-white p-3 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-400 mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full bg-gray-800 text-white p-3 rounded h-32"
                rows={4}
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hover:scale-110 transition-transform">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Send Message
            </span>
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
