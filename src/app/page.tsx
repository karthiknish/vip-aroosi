"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-gray-800 bg-base-light">
      {/* Hero */}
      <section className="relative bg-[url('https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MjA2MTE0NDEyNDMwMzY5OTgx/brighter-side-of-afghanistan.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center min-h-[60vh] px-4 py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-brightness-75 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-3xl space-y-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary-dark "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ lineHeight: "1.4" }}
          >
            No. 1 Matchmaking Service for Elites
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            5× higher success rate · Assured meetings · Top consultants
          </motion.p>
          <motion.a
            href="#enquiry"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Get a Free Consultation
          </motion.a>
        </motion.div>
      </section>

      {/* Advantage Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "98%", label: "Match Success" },
            { value: "70+", label: "Countries Served" },
            { value: "24h", label: "Concierge Response" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              className="p-8 rounded-lg border border-base-dark bg-base cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <motion.span
                className="text-3xl md:text-4xl font-bold text-primary block"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
              >
                {item.value}
              </motion.span>
              <p className="mt-2 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 px-4 bg-base">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-primary-dark">
            Inspiring VIP Aroosi Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sara & Omar",
                quote:
                  "We found each other through the meticulous efforts of the VIP Aroosi team!",
              },
              {
                name: "Leena & Zayd",
                quote:
                  "Their personalised approach made all the difference in our journey.",
              },
              {
                name: "Aisha & Faris",
                quote:
                  "Truly grateful for the professionalism and discretion throughout.",
              },
            ].map((s, idx) => (
              <motion.blockquote
                key={s.name}
                className="p-6 bg-white rounded-lg shadow-sm border border-base-dark flex flex-col gap-4 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <p className="italic text-sm">“{s.quote}”</p>
                <span className="font-semibold text-primary-dark">
                  {s.name}
                </span>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By Aroosi */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://thedigitalglobetrotter.com/wp-content/uploads/2017/09/wp-1505474107833.-1024x576.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        {/* Decorative purple circle */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-purple-300 opacity-30 blur-3xl rounded-full" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary-dark font-serif">
              Powered by <span className="text-primary">Aroosi</span>
            </h2>
            <p className="text-lg leading-relaxed text-neutral">
              VIP Aroosi is an exclusive concierge service built on the proven
              expertise of <strong>Aroosi</strong> – the number&nbsp;1 Afghan
              matrimony platform trusted by thousands worldwide. Our
              award-winning technology, rigorous profile verification, and
              culture-focused matchmaking have united countless couples in
              meaningful marriages.
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>20+ years of community matchmaking experience</li>
              <li>Global network of 50,000+ vetted Afghan professionals</li>
              <li>Dedicated VIP consultants for white-glove service</li>
              <li>Absolute confidentiality & orchestrated introductions</li>
            </ul>
          </div>
          <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thedigitalglobetrotter.com/wp-content/uploads/2017/09/wp-1505474107833.-1024x576.jpg"
              alt="Aroosi success graph"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-base-light">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-bold text-primary-dark font-serif">
            Your VIP Journey
          </h2>
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
                className="p-8 border border-base-dark bg-white rounded-lg shadow-sm flex flex-col items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="text-xl font-semibold text-primary-dark">
                  {s.title}
                </h3>
                <p className="text-neutral text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Aroosi Edge */}
      <section className="py-20 px-4 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1718695569777-7JMTP88KEOHZTA9BLN1X/JBX53235.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        {/* Decorative purple circle */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 blur-3xl rounded-full" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-primary-dark font-serif">
              The <span className="text-primary">Aroosi Edge</span>
            </h2>
            <p className="text-lg leading-relaxed text-neutral">
              Beyond technology, VIP Aroosi blends <strong>heritage</strong>,
              <strong> expertise</strong>, and <strong>human insight</strong>
              to create unions destined to thrive. Here's why discerning singles
              choose us.
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>Hand-curated matches reviewed by senior consultants</li>
              <li>In-depth cultural & family alignment assessments</li>
              <li>Exclusive invites to private Aroosi networking salons</li>
              <li>Post-match relationship coaching & support</li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1718695569777-7JMTP88KEOHZTA9BLN1X/JBX53235.jpg"
              alt="VIP Aroosi consultancy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8" id="faq">
          <h2 className="text-3xl font-bold text-center text-primary-dark">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
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
            ].map((item, idx) => (
              <details
                key={idx}
                className="border border-base-dark rounded-md p-4"
              >
                <summary className="font-medium cursor-pointer">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        id="enquiry"
        className="py-16 px-4 bg-primary text-white flex flex-col items-center"
      >
        <div className="max-w-lg w-full space-y-6 text-center">
          <h2 className="text-3xl font-bold">Get Invited</h2>
          <p>
            Submit your details for a free VIP consultation. Our consultant will
            call you shortly.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
