"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import AroosiEdge from "../components/AroosEdge";
import PoweredByAroosi from "../components/PoweredByAroosi";
import EnquiryFormSection from "../components/EnquiryFormSection";
import Hero from "../components/Hero";
import Stories from "../components/Stories";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full overflow-x-hidden text-gray-800 bg-base-light -mt-6">
      {/* Hero */}
      <Hero />
      {/* Advantage Cards - Lightweight */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "98%", label: "Match Success" },
            { value: "70+", label: "Countries Served" },
            { value: "24h", label: "Concierge Response" },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative p-8 rounded-lg border border-base-dark bg-base cursor-pointer transition-transform duration-150 ease-out hover:scale-[1.05] hover:shadow-xl hover:border-amber-400/40 hover:bg-white overflow-hidden"
            >
              {/* Diagonal shine on hover (top-left to bottom-right) */}
              <div className="pointer-events-none absolute -inset-[45%] rotate-45 -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-80 mix-blend-screen blur-sm transition-transform duration-500 ease-out" />

              {/* Subtle radial highlight */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.10),rgba(251,191,36,0.10)_35%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top-edge shimmer */}
              <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-200/70 to-transparent opacity-0 group-hover:opacity-100 blur-[0.5px] transition-opacity duration-300" />

              {/* Inset ring glow */}
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-amber-300/20 group-hover:ring-amber-400/40 transition-colors duration-300" />

              <span className="text-3xl md:text-4xl font-bold text-primary block">
                {item.value}
              </span>
              <p className="mt-2 font-medium text-primary-dark/80 group-hover:text-primary-dark transition-colors duration-150">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <Stories />

      {/* Powered By Aroosi */}

      <PoweredByAroosi />

      {/* How It Works - Styled like Stories */}
      <section className="py-16 px-4 bg-base relative overflow-hidden">
        {/* Luxury background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 to-blue-50/30" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2
            className="text-3xl font-extrabold text-primary-dark font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your VIP Journey
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                desc: "Our senior consultant learns about your values, lifestyle & partner expectations in a private call.",
                icon: "💬",
              },
              {
                title: "Personalised Search",
                desc: "Leveraging Aroosi's extensive database & elite network, we shortlist truly compatible profiles.",
                icon: "🔍",
              },
              {
                title: "Curated Introductions",
                desc: "Meet hand-selected matches at your pace – every interaction arranged with full discretion.",
                icon: "🤝",
              },
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-base-dark flex flex-col gap-4 cursor-pointer hover:bg-white transition-all duration-200 ease-out relative overflow-hidden hover:shadow-2xl hover:border-purple-300/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -4, rotate: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
              >
                {/* Corner accents (appear on hover) */}
                <div className="pointer-events-none absolute inset-0">
                  <span className="absolute top-2 left-2 h-4 w-4 rounded-sm bg-gradient-to-br from-purple-300/60 to-primary/40 transform scale-0 group-hover:scale-100 transition-transform duration-200" />
                  <span className="absolute top-2 right-2 h-4 w-4 rounded-sm bg-gradient-to-bl from-purple-300/60 to-primary/40 transform scale-0 group-hover:scale-100 transition-transform duration-200" />
                  <span className="absolute bottom-2 left-2 h-4 w-4 rounded-sm bg-gradient-to-tr from-purple-300/60 to-primary/40 transform scale-0 group-hover:scale-100 transition-transform duration-200" />
                  <span className="absolute bottom-2 right-2 h-4 w-4 rounded-sm bg-gradient-to-tl from-purple-300/60 to-primary/40 transform scale-0 group-hover:scale-100 transition-transform duration-200" />
                </div>

                {/* Bottom glow overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-purple-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                {/* Icon with glow */}
                <div className="relative mx-auto">
                  <span className="text-4xl relative z-10">{s.icon}</span>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500" />
                </div>

                <h3 className="text-lg font-semibold text-primary-dark font-serif relative z-10">
                  {s.title}
                </h3>
                <p className="text-neutral text-sm leading-relaxed relative z-10">
                  {s.desc}
                </p>

                {/* Underline animation */}
                <div className="relative z-10 mt-[-4px] h-[2px] w-20 mx-auto origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Aroosi Edge */}

      <AroosiEdge />

      {/* FAQ */}
      <FAQ />

      {/* Enquiry Form */}

      <EnquiryFormSection />
    </main>
  );
}
