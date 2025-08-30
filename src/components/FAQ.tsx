dekh md size se neeche hi grid wagera hoga isme uske upar relative se -translate-x krdio



import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PatternBG from "./patterBG";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What makes VIP Aroosi different?",
      a: "Our bespoke, concierge-style matchmaking leverages a private global network ensuring matches that fit your lifestyle and values.",
    },
    {
      q: "How do I get started?",
      a: "Simply fill in the enquiry form below and our VIP consultant will contact you for a confidential discussion.",
    },
    {
      q: "Is my data kept private?",
      a: "Absolutely. Your profile remains 100% confidential and is shared only with hand-selected matches after your approval.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 to-blue-50/40" />
      {/* background image */}
      <div className="absolute inset-0 ">
        <PatternBG />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side image */}
        <div className="relative flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-xl border-4 sm:border-6 md:border-8 border-black shadow-lg w-full max-w-[600px]">
            <Image
              src="/couple1.jpeg"
              alt="FAQ Illustration"
              width={600}
              height={500}
              className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Right side FAQs */}
        <div className="space-y-8" id="faq">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-dark font-serif drop-shadow-[1px_2px_0px_black]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <FAQItem
                key={idx}
                idx={idx}
                q={item.q}
                a={item.a}
                openFaq={openFaq}
                toggleFaq={toggleFaq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  idx,
  q,
  a,
  openFaq,
  toggleFaq,
}: {
  idx: number;
  q: string;
  a: string;
  openFaq: number | null;
  toggleFaq: (idx: number) => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isOpen = openFaq === idx;
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className="group border border-base-dark rounded-md bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 cursor-pointer overflow-hidden"
      onClick={() => toggleFaq(idx)}
    >
      <div className="p-4 font-medium flex justify-between items-center">
        <span>{q}</span>
        <span
          className={`text-primary transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition:
            "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
        className="px-4 pb-4 text-sm text-gray-700 overflow-hidden"
      >
        {a}
      </div>
    </div>
  );
}
