import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function EnquiryFormSection() {
  return (
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
          className="text-5xl font-bold font-serif"
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
  );
}
