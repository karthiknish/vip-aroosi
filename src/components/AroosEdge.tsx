import { useEffect, useRef, useState } from "react";

export default function AroosiEdge() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-4 bg-base relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[url('https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1718695569777-7JMTP88KEOHZTA9BLN1X/JBX53235.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Soft blur spots (no heavy animations) */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div
          className={`space-y-6 transform transition-all duration-700 ease-out opacity-0 ${
            isVisible ? "animate-slideInLeft" : ""
          }`}
        >
          <h2 className="text-5xl font-bold text-primary-dark font-serif">
            The Aroosi Edge
          </h2>
          <p className="text-lg leading-relaxed text-neutral">
            Beyond technology, VIP Aroosi blends <strong>heritage</strong>,
            <strong> expertise</strong>, and <strong>human insight</strong> to
            create unions destined to thrive. Here's why discerning singles
            choose us.
          </p>
          <ul className="space-y-3 list-disc list-inside">
            <li>Hand-curated matches reviewed by senior consultants</li>
            <li>In-depth cultural & family alignment assessments</li>
            <li>Exclusive invites to private Aroosi networking salons</li>
            <li>Post-match relationship coaching & support</li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          className={`w-full h-64 md:h-full rounded-lg overflow-hidden shadow-2xl group transform transition-all duration-700 ease-out opacity-0 ${
            isVisible ? "animate-slideInRight delay-200" : ""
          }`}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1718695569777-7JMTP88KEOHZTA9BLN1X/JBX53235.jpg"
            alt="VIP Aroosi consultancy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Keyframes for scroll animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
