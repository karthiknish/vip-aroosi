import { useEffect, useRef } from "react";

export default function PoweredByAroosi() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current as HTMLElement | null;
    const observers =
      section?.querySelectorAll<HTMLElement>(
        ".fade-from-left, .fade-from-right"
      ) ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observers.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[url('https://thedigitalglobetrotter.com/wp-content/uploads/2017/09/wp-1505474107833.-1024x576.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Soft blur spots */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-200/30 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-5 sm:space-y-6 fade-from-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-dark font-serif">
            Powered by <span className="text-primary">Aroosi</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-neutral max-w-prose">
            VIP Aroosi is an exclusive concierge service built on the proven
            expertise of <strong>Aroosi</strong> – the number&nbsp;1 Afghan
            matrimony platform trusted by thousands worldwide. Our award-winning
            technology, rigorous profile verification, and culture-focused
            matchmaking have united countless couples in meaningful marriages.
          </p>
          <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-sm sm:text-base">
            <li>20+ years of community matchmaking experience</li>
            <li>Global network of 50,000+ vetted Afghan professionals</li>
            <li>Dedicated VIP consultants for white-glove service</li>
            <li>Absolute confidentiality & orchestrated introductions</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full h-48 sm:h-64 md:h-full rounded-lg overflow-hidden shadow-2xl group fade-from-right">
          <img
            src="https://thedigitalglobetrotter.com/wp-content/uploads/2017/09/wp-1505474107833.-1024x576.jpg"
            alt="Aroosi success graph"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        .fade-from-left,
        .fade-from-right {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .fade-from-left {
          transform: translateX(-40px);
        }

        .fade-from-right {
          transform: translateX(40px);
        }

        .fade-from-left.in-view,
        .fade-from-right.in-view {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }
      `}</style>
    </section>
  );
}
