import React from "react";
import Image from "next/image";

const AdvantageCard = () => {
  const steps = [
    {
      value: "98%",
      title: "Match Success",
      desc: [
        "Industry-leading compatibility rate.",
        "Thousands of happy matches worldwide.",
        "Personalized approach for every user.",
      ],
      img: "/couple10.jpeg",
    },
    {
      value: "70+",
      title: "Countries Served",
      desc: [
        "Global reach with local expertise.",
        "Trusted by diverse communities worldwide.",
        "Expanding presence every year.",
      ],
      img: "/couple2.jpeg",
      swap: true,
    },
    {
      value: "24h",
      title: "Concierge Response",
      desc: [
        "Round-the-clock personalized support.",
        "Dedicated concierge team always ready.",
        "Your queries answered within 24 hours.",
      ],
      img: "/couple3.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {steps.map((step) => (
          <div
            key={step.title}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image Section */}
            <div
              className={
                step.swap ? "order-2 md:order-2" : "order-1 md:order-1"
              }
            >
              <div className="relative w-full h-[420px] min-h-[320px]">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="rounded-xl shadow-lg object-cover object-top"
                />
              </div>
            </div>

            {/* Text Section */}
            <div
              className={
                step.swap ? "order-1 md:order-1" : "order-2 md:order-2"
              }
            >
              <span className="text-4xl font-bold text-indigo-600">
                {step.value}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                {step.title}
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                {step.desc.map((d, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-indigo-500">✔</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantageCard;
