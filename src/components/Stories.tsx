import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PatternBG from "./patterBG";

const Stories = () => {
  const stories = [
    {
      name: "Sara & Omar",
      quote:
        "We found each other through the meticulous efforts of the VIP Aroosi team!",
      image: "/couple6.jpeg",
    },
    {
      name: "Leena & Zayd",
      quote:
        "Their personalised approach made all the difference in our journey.",
      image: "/couple2.jpeg",
    },
    {
      name: "Aisha & Faris",
      quote:
        "Truly grateful for the professionalism and discretion throughout.",
      image: "/couple3.jpeg",
    },
    {
      name: "Mariam & Yusef",
      quote: "The team’s support was unmatched and heartfelt.",
      image: "/couple4.jpeg",
    },
    {
      name: "Hana & Kareem",
      quote: "VIP Aroosi made everything seamless and beautiful.",
      image: "/couple5.jpeg",
    },
    {
      name: "Fatima & Imran",
      quote: "A beautiful journey crafted with care and love.",
      image: "/couple6.jpeg",
    },
    {
      name: "Noor & Bilal",
      quote: "We couldn’t have asked for a better experience.",
      image: "/couple7.jpeg",
    },
    {
      name: "Amira & Sami",
      quote: "Their attention to detail was exceptional.",
      image: "/couple8.jpeg",
    },
    {
      name: "Laila & Haroon",
      quote: "They truly made our dreams come true.",
      image: "/couple9.jpeg",
    },
    {
      name: "Yara & Sameer",
      quote: "Professional, kind, and supportive all the way.",
      image: "/couple10.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(
    Math.floor(stories.length / 2)
  );

  const goLeft = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className="py-14 px-4 bg-base relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 to-blue-50/30 z-[-20]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl z-[-20]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <PatternBG />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug font-extrabold text-primary-dark font-serif drop-shadow-[1px_2px_0px_black]">
          Inspiring VIP Aroosi Stories
        </h2>

        <div className="relative flex items-center justify-center py-6">
          {/* Left Button */}
          <button
            onClick={goLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Wrapper */}
          <div className="flex items-center justify-center relative w-full max-w-4xl h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden">
            {stories.map((s, idx) => {
              let position =
                (idx - activeIndex + stories.length) % stories.length;
              if (position > stories.length / 2) {
                position -= stories.length;
              }

              return (
                <blockquote
                  key={s.name}
                  className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-base-dark flex flex-col justify-center gap-3 sm:gap-4 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `translateX(${position * 55}%) scale(${
                      position === 0 ? 1 : 0.9
                    })`,
                    zIndex: position === 0 ? 10 : 5,
                    opacity: Math.abs(position) > 1 ? 0 : 1,
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />

                  {/* Overlay text */}
                  <div className="relative z-10 flex flex-col gap-2 sm:gap-4">
                    <p className="italic text-xs sm:text-sm md:text-base font-bold">
                      "{s.quote}"
                    </p>
                    <span className="font-bold text-primary-dark text-sm sm:text-base md:text-lg">
                      {s.name}
                    </span>
                  </div>
                </blockquote>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={goRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
