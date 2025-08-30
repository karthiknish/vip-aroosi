import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovingStrip from "./MovingStrip";

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

  const couples = [
    "Amina ♥ Ahmad",
    "Fatima ♥ Haroon",
    "Layla ♥ Bilal",
    "Mariam ♥ Sameer",
    "Nadia ♥ Zubair",
    "Roya ♥ Farid",
    "Shazia ♥ Kareem",
    "Yasmin ♥ Hamid",
    "Parisa ♥ Jawad",
    "Haleema ♥ Imran",
  ];

  // Start from middle
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
      {/* Background (lowest layer) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 to-blue-50/30 z-[-20]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl z-[-20]" />

      {/* Left Section Fade Mask */}
      <div
        className="absolute left-0 top-0 h-full w-[10%] 
    bg-gradient-to-r from-white via-white/60 to-transparent 
    z-30 pointer-events-none"
      ></div>

      {/* Right Section Fade Mask */}
      <div
        className="absolute right-0 top-0 h-full w-[10%] 
    bg-gradient-to-l from-white via-white/60 to-transparent 
    z-30 pointer-events-none"
      ></div>

      {/* Diagonal Strips Layer (behind cards but above background) */}
      <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none">
        {/* Top Strip */}
        <div className="flex justify-center">
          <MovingStrip
            items={couples}
            color="#BE185D"
            rotation={-12} // ulta tilt
            speed={20}
            direction="right" // right ko move karegi
          />
        </div>

        {/* Middle Strip */}
        <div className="flex justify-center">
          <MovingStrip
            items={couples}
            color="#BE185D"
            rotation={-12} // jaisa tha
            speed={15}
            direction="left" // left ko move karegi
          />
        </div>
        {/* Middle Strip - 2 */}
        {/* <div className="flex justify-center h-40">
          <MovingStrip
            items={couples}
            color="#BE185D"
            rotation={12} // jaisa tha
            speed={15}
            direction="right" // left ko move karegi
          />
        </div> */}

        {/* Bottom Strip */}
        <div className="flex justify-center">
          <MovingStrip
            items={couples}
            color="#BE185D"
            rotation={-12} // ulta tilt
            speed={18}
            direction="right" // right ko move karegi
          />
        </div>
      </div>

      {/* Content (cards above strip) */}
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-3xl font-extrabold text-primary-dark font-serif drop-shadow-[1px_1px_0px_black]">
          Inspiring VIP Aroosi Stories
        </h2>

        <div className="relative flex items-center justify-center py-6">
          {/* Left Button */}
          <button
            onClick={goLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          <div className="flex items-center justify-center relative w-full max-w-4xl h-[380px] overflow-hidden">
            {stories.map((s, idx) => {
              // cyclic positioning
              let position =
                (idx - activeIndex + stories.length) % stories.length;

              // normalize position to -1, 0, 1 for left, center, right
              if (position > stories.length / 2) {
                position -= stories.length;
              }

              return (
                <blockquote
                  key={s.name}
                  className="absolute w-[340px] h-[340px] p-6 my-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-base-dark flex flex-col justify-center gap-4 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `translateX(${position * 60}%) scale(${
                      position === 0 ? 1 : 0.9
                    })`,
                    zIndex: position === 0 ? 10 : 5,
                    opacity: Math.abs(position) > 1 ? 0 : 1, // only 3 visible
                  }}
                >
                  {/* Background Image with 20% opacity */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />

                  {/* Overlay text content */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <p className="italic text-sm font-bold">"{s.quote}"</p>
                    <span className="font-bold text-primary-dark">
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
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
