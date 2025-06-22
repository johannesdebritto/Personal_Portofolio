import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectSection from "./components/ProjectSection";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        {/* Resume Section */}
        <ResumeSection />
        {/* Project Section */}
        <ProjectSection />
        {/* TestimonalSectio */}

        {/* Konten lain */}
        <Footer />
      </main>

      {/* Footer
      <footer className="bg-black text-white text-center py-4">
        <p>&copy; 2024 JohannesWorks. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
