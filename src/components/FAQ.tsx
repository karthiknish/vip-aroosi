import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx : number) => {
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
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background blur (lightweight, no animations) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 to-blue-50/40" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10" id="faq">
        <h2 className="text-3xl font-extrabold font-serif text-center text-primary-dark">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="group border border-base-dark rounded-md bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 cursor-pointer overflow-hidden"
              onClick={() => toggleFaq(idx)}
            >
              <div className="p-4 font-medium flex justify-between items-center">
                <span>{item.q}</span>
                <span
                  className={`text-primary transform transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`px-4 pb-4 text-sm text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
