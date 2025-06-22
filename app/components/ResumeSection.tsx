import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="bg-black text-white py-12 px-6">
      {/* Special Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          My <span className="text-purple-500">Special Services</span> For your
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Business <span className="text-purple-500">Development</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Card Web Development */}
        {/* Card Web Development */}
        <div className="bg-[#323131] p-6 rounded-lg text-center overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] w-full mx-auto">
          <div className="flex justify-center mb-6">
            <img src="/images/logo/Globe.png" alt="Web Development Icon" className="w-14 h-14 object-contain" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Web Development</h3>
          <p className="text-gray-400 text-base">Modern and mobile-ready website that will help you reach all of your marketing.</p>
        </div>

        {/* Card App Development */}
        <div className="bg-[#323131] p-6 rounded-lg text-center overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] w-full mx-auto">
          <div className="flex justify-center mb-6">
            <img src="/images/logo/Phone.png" alt="App Development Icon" className="w-14 h-14 object-contain" />
          </div>
          <h3 className="text-lg font-semibold mb-4">App Development</h3>
          <p className="text-gray-400 text-base">Modern and mobile-ready application that will help you reach all of your marketing.</p>
        </div>
      </div>

      {/* Why Hire Me Section */}
      <div className="text-center mb-10 mt-10">
        <h3 className="text-2xl font-bold mb-6 text-white">Why Hire Me</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Workaholic */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-20 h-20">
              {/* Outer Circle */}
              <div className="absolute w-full h-full rounded-full border border-gray-700"></div>
              {/* Inner Circle */}
              <div className="absolute w-16 h-16 rounded-full bg-gray-900 border-2 border-purple-700 flex items-center justify-center">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm7 14h-2v-2h2v2zm0-4h-2V7h2v7z" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-white mt-4">Workaholic</h4>
            <p className="text-gray-400 text-sm mt-2 text-center">I am a kind of person who can't just stand doing nothing. I always find time to do something productive.</p>
          </div>

          {/* Communicative */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-20 h-20">
              {/* Outer Circle */}
              <div className="absolute w-full h-full rounded-full border border-gray-700"></div>
              {/* Inner Circle */}
              <div className="absolute w-16 h-16 rounded-full bg-gray-900 border-2 border-purple-700 flex items-center justify-center">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-6 8h-4V8h4v2zm0-4h-4V4h4v2z" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-white mt-4">Communicative</h4>
            <p className="text-gray-400 text-sm mt-2 text-center">I maintain clear and concise communication to ensure goals are aligned.</p>
          </div>

          {/* Cooperative */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-20 h-20">
              {/* Outer Circle */}
              <div className="absolute w-full h-full rounded-full border border-gray-700"></div>
              {/* Inner Circle */}
              <div className="absolute w-16 h-16 rounded-full bg-gray-900 border-2 border-purple-700 flex items-center justify-center">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 00-7 7 7 7 0 005.25 6.75v2.75H7v2h10v-2h-3.25v-2.75A7 7 0 0019 9a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-white mt-4">Cooperative</h4>
            <p className="text-gray-400 text-sm mt-2 text-center">Behind every successful project, there is great teamwork. I ensure to work cooperatively with everyone.</p>
          </div>

          {/* Perfectionist */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-20 h-20">
              {/* Outer Circle */}
              <div className="absolute w-full h-full rounded-full border border-gray-700"></div>
              {/* Inner Circle */}
              <div className="absolute w-16 h-16 rounded-full bg-gray-900 border-2 border-purple-700 flex items-center justify-center">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2zm0 4a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-white mt-4">Perfectionist</h4>
            <p className="text-gray-400 text-sm mt-2 text-center">I have a strong intuition and deliver high-quality solutions consistently.</p>
          </div>
        </div>
      </div>
      {/* End Why Hire Me Section */}

      {/* Tools and Skills Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Tools and Skills</h3>

        {/* Baris Pertama: 5 Tool */}
        <div className="flex justify-center gap-4 flex-wrap mb-4">
          {[
            { name: "Laravel", icon: "/images/logo/laravel.png" },
            { name: "Figma", icon: "/images/logo/figma.png" },
            { name: "Next.js", icon: "/images/logo/next.png" },
            { name: "PHP", icon: "/images/logo/php.png" },
            { name: "Bootstrap", icon: "/images/logo/bootstrap.png" },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-[#323131] p-4 w-36 h-36 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]"
            >
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 object-contain mb-3" />
              <p className="text-white-400 text-sm font-bold">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* Baris Kedua: 3 Tool */}
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { name: "Flutter", icon: "/images/logo/flutter.png" },
            { name: "Node.js", icon: "/images/logo/node.png" },
            { name: "MySQL", icon: "/images/logo/sql.png" },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-[#323131] p-4 w-36 h-36 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]"
            >
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 object-contain mb-3" />
              <p className="text-white-400 text-sm font-bold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
