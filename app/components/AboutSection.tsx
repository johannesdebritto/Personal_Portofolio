import Image from "next/image";
import Head from "next/head";

export default function AboutSection() {
  return (
    <>
      <Head>
        <title>About Johannes - Innovative Software Engineer</title>
        <meta name="description" content="Johannes is an experienced software engineer specializing in web and Android development using React, Next.js, and Flutter." />
      </Head>

      <section id="about" className="bg-black text-white py-16 flex justify-center items-center min-h-screen">
        <article className="max-w-6xl flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-16">
          {/* Gambar Profil */}
          <figure className="flex-shrink-0 md:mr-8 mb-8 md:mb-0 border-4 border-purple-500 p-3 rounded-lg">
            <Image src="/images/logo/fotobg.png" alt="Portrait of Johannes" width={384} height={384} className="rounded-lg object-cover w-72 h-72 md:w-96 md:h-96" priority />
            <figcaption className="sr-only">Johannes profile photo</figcaption>
          </figure>

          {/* Konten Teks */}
          <div className="flex-1 max-w-3xl text-left">
            <header className="mb-6">
              <h2 className="text-purple-500 text-lg md:text-xl font-semibold uppercase mb-2">About Me</h2>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Johannes, <span className="text-purple-500">Innovative</span> Software Engineer
              </h1>
            </header>

            <p className="text-gray-300 mb-6 text-justify leading-relaxed text-sm sm:text-base md:text-lg">
              With around 3 years of experience in software development, I specialize in crafting web and Android applications that are efficient, scalable, and tailored to client needs. I am committed to writing clean, maintainable code
              and always strive to stay up to date with the latest technologies to deliver impactful digital solutions.
            </p>

            <ul className="space-y-4 text-justify text-sm sm:text-base md:text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <p>Developed responsive websites using modern frameworks such as React and Next.js, optimized for performance and SEO.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <p>Built Android applications with Flutter, integrating REST APIs and ensuring smooth functionality on various devices.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✅</span>
                <p>Collaborated with clients to plan, build, and maintain custom digital products that align with their business goals.</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
