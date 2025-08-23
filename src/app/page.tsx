"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full overflow-x-hidden text-gray-800 bg-base-light -mt-6">
      {/* Hero */}
      <section className="relative bg-[url('https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MjA2MTE0NDEyNDMwMzY5OTgx/brighter-side-of-afghanistan.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center min-h-[84vh] px-4 py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-brightness-75 backdrop-blur-sm" />
        {/* Luxury floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <motion.div
          className="relative max-w-3xl space-y-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary-dark font-lora"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ lineHeight: "1.4" }}
          >
            No. 1 Matchmaking Service for Elites
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            5× higher success rate · Assured meetings · Top consultants
          </motion.p>
          <motion.a
            href="#enquiry"
            className="group relative inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get a Free Consultation</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0"
              initial={false}
            />
          </motion.a>
        </motion.div>
      </section>

      {/* Advantage Cards */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Luxury animated background */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border border-primary/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.1, 0.9, 1],
                opacity: [0.1, 0.3, 0.1, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Luxury gradient waves */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        
        {/* Enhanced luxury blur elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
          {[
            { value: "98%", label: "Match Success" },
            { value: "70+", label: "Countries Served" },
            { value: "24h", label: "Concierge Response" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              className="group p-8 rounded-lg border border-base-dark bg-base cursor-pointer backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 delay-0 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Luxury shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-0" />
              
              <motion.span
                className="text-3xl md:text-4xl font-bold text-primary block"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {item.value}
              </motion.span>
              <p className="mt-2 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 px-4 bg-base relative overflow-hidden">
        {/* Luxury background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 to-blue-50/30" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 
            className="text-3xl font-extrabold text-primary-dark font-lora"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Inspiring VIP Aroosi Stories
          </motion.h2>
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
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-base-dark flex flex-col gap-4 cursor-pointer hover:bg-white transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                {/* Luxury card shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <p className="italic text-sm relative z-10">"{s.quote}"</p>
                <span className="font-semibold text-primary-dark relative z-10">
                  {s.name}
                </span>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By Aroosi */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Luxury animated background */}
        <div className="absolute inset-0">
          {/* Moving mesh pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #8b5cf6 2px, transparent 2px)`,
              backgroundSize: '40px 40px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Floating luxury elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border-2 border-primary/5 rounded-lg"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 45}deg)`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-[url('https://thedigitalglobetrotter.com/wp-content/uploads/2017/09/wp-1505474107833.-1024x576.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        
        {/* Enhanced luxury blur elements */}
        <motion.div 
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-purple-300/40 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 bg-blue-300/30 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-primary-dark font-lora">
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
          </motion.div>
          <motion.div 
            className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://thedigitalglobetrotter.com/wp-content/uploads/2017/09/wp-1505474107833.-1024x576.jpg"
              alt="Aroosi success graph"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-base-light relative overflow-hidden">
        {/* Luxury background blur */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/40 to-blue-50/40" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto space-y-12 text-center relative z-10">
          <motion.h2 
            className="text-5xl font-extrabold text-primary-dark font-lora"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
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
                className="group p-8 border border-base-dark bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl flex flex-col items-center gap-4 cursor-pointer transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                {/* Luxury icon glow */}
                <div className="relative">
                  <span className="text-4xl relative z-10">{s.icon}</span>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-dark font-lora">
                  {s.title}
                </h3>
                <p className="text-neutral text-sm leading-relaxed">{s.desc}</p>
                
                {/* Luxury border glow */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Aroosi Edge */}
      <section className="py-20 px-4 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1718695569777-7JMTP88KEOHZTA9BLN1X/JBX53235.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        {/* Enhanced luxury blur elements */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/40 blur-3xl rounded-full animate-pulse" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-blue-300/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary-dark font-lora">
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
            className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1718695569777-7JMTP88KEOHZTA9BLN1X/JBX53235.jpg"
              alt="VIP Aroosi consultancy"
              className="w-full h-full object-cover transition-transform duration-700 delay-0 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Luxury animated background */}
        <div className="absolute inset-0">
          {/* Animated question mark patterns */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl text-primary/5 font-bold select-none pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.02, 0.08, 0.02],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              ?
            </motion.div>
          ))}
          
          {/* Floating luxury icons */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center text-primary/10 text-2xl"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              💎
            </motion.div>
          ))}
        </div>
        
        {/* Luxury background blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30" />
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-3xl mx-auto space-y-8 relative z-10" id="faq">
          <motion.h2 
            className="text-3xl font-extrabold font-lora text-center text-primary-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
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
              <motion.div
                key={idx}
                className="group border border-base-dark rounded-md bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div 
                  className="p-4 font-medium cursor-pointer hover:text-primary transition-colors duration-300 flex justify-between items-center"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    ▼
                  </motion.span>
                </div>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === idx ? "auto" : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-sm text-gray-700">
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        id="enquiry"
        className="py-16 px-4 bg-primary text-white flex flex-col items-center relative overflow-hidden"
      >
        {/* Luxury background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-lg w-full space-y-6 text-center relative z-10">
          <motion.h2 
            className="text-5xl font-bold font-lora"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            Get Invited
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Submit your details for a free VIP consultation. Our consultant will
            call you shortly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
