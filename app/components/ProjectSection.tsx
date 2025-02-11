import React from 'react';
import Link from 'next/link';
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      image: '/images/porto/porto1.png',
      title: 'Pacific Game Center',
      description: 'A non-profit that is dedicated to preserving the environment and the wildlife within.',
      type: 'Website',
    },
    {
      id: 2,
      image: '/images/porto/porto2.png',
      title: 'Rajanya Teh Solo',
      description:
        'A Congress for building a Resilient Future in Africa through Conservation Agriculture and Sustainable Mechanisation.',
      type: 'Web Application',
    },
    {
      id: 3,
      image: '/images/porto/porto3.png',
      title: 'KasirPintar',
      description:
        'Pay via top bank accounts in minutes and send money to anyone in seconds. Pay bills, make purchases, and transfer money with the app.',
      type: 'Mobile Application (iOS, Android)',
    },
  ];

  return (
    <section id='project' className="bg-black text-white py-10 px-5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Latest Works</h2>
        <p className="text-purple-500 text-xl">
          Explore My Popular <span className="text-white">Projects</span>
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="aspect-w-16 aspect-h-10 w-11/12 rounded-lg overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <p className="text-sm text-purple-500 mb-2">{project.type}</p>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
             {/* Button with Arrow */}
              <div className="flex justify-center md:justify-start">
                <Link href="#home" className="group">
                  <button className="text-white cursor-pointer duration-200 hover:scale-110 transition-transform hover:shadow-lg hover:text-purple-500 relative flex items-center justify-center md:justify-between">
                    <span>View More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2" // Menambahkan margin ke kanan untuk panah
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6h12v12"
                      />
                    </svg>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 hover:scale-110 transition-transform">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      View More Project
      </span>
      </button>
      </div>
    </section>
  );
};

export default ProjectSection;



