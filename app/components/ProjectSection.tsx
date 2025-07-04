import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/images/porto/codedev.png",
    title: "CodeDev",
    description: "An e-commerce site for Jasa Coding services and products.",
    type: "Website",
    link: "https://codedev-app.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    image: "/images/porto/maggot.png",
    title: "MAGGOT BSF COLOMADU",
    description: "A simple company profile for maggot farming.",
    type: "Web Application",
    link: "https://maggotbsfcolomadu.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    image: "/images/porto/dompet.png",
    title: "DompetKu",
    description: "An app to record and manage financial data.",
    type: "Mobile App",
    link: "https://github.com/johannesdebritto/Dompetku",
    tags: ["Flutter", "SQLite"],
  },
  {
    id: 4,
    image: "/images/porto/map.png",
    title: "AzimuthTracker",
    description: "An Application azimuth tracking tool.",
    type: "Mobile App",
    link: "https://github.com/johannesdebritto/AZIMUTHTRACKER",
    tags: ["Flutter"],
  },
  {
    id: 5,
    image: "/images/porto/scan.png",
    title: "Scan Event",
    description: "A mobile app to scan items at events.",
    type: "Mobile App",
    link: "https://github.com/johannesdebritto/ScanBarang_Frontend",
    tags: ["Flutter", "Node.js"],
  },
  {
    id: 6,
    image: "/images/porto/sehat.png",
    title: "JuniorCare",
    description: "An app for buying and ordering medicine.",
    type: "Mobile App",
    link: "https://github.com/johannesdebritto/TubesMobilePrograming_JUNIORCARE",
    tags: ["Flutter", "SharedPreferences"],
  },
  {
    id: 7,
    image: "/images/porto/konimexxx.png",
    title: "Konimex Monitoring",
    description: "Monitoring app for PT KONIMEX buildings using RFID/NFC.",
    type: "Mobile App",
    link: "https://github.com/johannesdebritto/MonitoringGuard-Konimex",
    tags: ["Flutter", "Node.js", "SQLite", "NFC"],
  },
];

const Portofolio = () => {
  return (
    <section id="portfolio" className="scroll-offset bg-black max-w-7xl mx-auto px-4 py-20" aria-labelledby="portfolio-heading">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 id="portfolio-heading" className="text-3xl font-bold mb-2 text-white">
          Latest Works
        </h2>
        <p className="text-purple-500 text-xl">
          Explore My Popular <span className="text-white">Projects</span>
        </p>
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article key={project.id} className="relative group w-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white">
            <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`} className="block">
              <Image src={project.image} alt={`Preview of ${project.title}`} width={400} height={200} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 bg-black" priority={index === 0} />
            </Link>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end bg-black/0 group-hover:bg-black/80 transition-all duration-300">
              <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <p className="text-sm text-purple-300">{project.type}</p>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-purple-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-purple-400 hover:underline hover:text-white transition" aria-label={`Visit ${project.title} project page`}>
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
