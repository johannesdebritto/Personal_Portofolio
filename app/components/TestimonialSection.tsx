import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "SamCreative has been the best designer I have ever worked with. The UI designs he created are top-notch, and the design system he integrated allows for straightforward fixes throughout every area of the app. I'm looking forward to partnering up with him on upcoming projects.",
      author: "Anonim",
      role: "Project Manager, DaurLang",
    },
  ];

  return (
    <section id='testimoni' className="bg-black text-white py-10">
      {/* Header Section */}
      <div className="text-center mb-10 px-5">
        <p className="text-gray-500">Testimonials</p>
        <h2 className="text-3xl font-bold mb-2">What Do They Say About Me</h2>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-[#131313]  py-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-5"
          >
            {/* Kotak Kiri */}
            <div className="w-full md:w-1/3 flex items-center justify-center h-48 bg-blue-600 rounded-lg">
              <div className="relative w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center">
                {/* Dekorasi */}
                <div className="absolute w-6 h-6 bg-purple-500 rounded-full top-2 left-4"></div>
                <div className="absolute w-4 h-4 border border-purple-500 rounded-full bottom-3 right-3"></div>
                <div className="absolute w-2 h-2 bg-purple-500 top-12 left-12"></div>
              </div>
            </div>

            {/* Konten Kanan */}
            <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-8">
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="text-purple-500 font-bold">{testimonial.author}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
