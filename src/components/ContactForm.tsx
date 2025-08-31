"use client";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import PatternBG2 from "./PatternBG2";
// We'll submit via the API route instead of directly writing to Firestore

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return; // guard against double submit
    submittingRef.current = true;
    setStatus("submitting");
    setError(null);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    let message =
      (formData.get("message") as string) || "Interested in VIP Aroosi";

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      submittingRef.current = false;
      setStatus("error");
      setError("Please enter a valid email address.");
      toast.dismiss();
      toast.error("Please enter a valid email address.");
      return;
    }

    const payload = {
      name,
      email,
      message,
    };
    try {
      toast.dismiss();
      await toast.promise(
        (async () => {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) {
            const data = await res.json().catch(() => ({ error: "" }));
            throw new Error(data.error || "Request failed");
          }
        })(),
        {
          loading: "Sending...",
          success: "Thank you! We will contact you shortly.",
          error: "Something went wrong. Please try again later.",
        }
      );
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    } finally {
      submittingRef.current = false;
      // Optionally return to idle state after showing feedback
      setTimeout(() => {
        if (status !== "submitting") setStatus("idle");
      }, 500);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 text-left bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <div className="flex flex-col gap-2">
        <motion.label
          htmlFor="name"
          className="text-sm font-medium text-white/90"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Name
        </motion.label>
        <motion.input
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white/95 backdrop-blur-sm border border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-300 delay-0 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <motion.label
          htmlFor="email"
          className="text-sm font-medium text-white/90"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Email
        </motion.label>
        <motion.input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white/95 backdrop-blur-sm border border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-300 delay-0 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <motion.label
          htmlFor="message"
          className="text-sm font-medium text-white/90"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Message (optional)
        </motion.label>
        <motion.textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white/95 backdrop-blur-sm border border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-300 delay-0 shadow-lg hover:shadow-xl resize-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        className={`group relative w-full bg-white hover:bg-primary-dark text-primary py-3 rounded-lg font-medium transition-all duration-300 delay-0 overflow-hidden shadow-lg hover:shadow-2xl ${
          status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">
          {status === "submitting" ? "Sending..." : "Send Message"}
        </span>
        {/* Luxury button shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-0" />
      </motion.button>

      {/* Toast messages will show for success/error. Optionally keep inline messages: */}
      {status === "error" && (
        <motion.p
          className="text-red-200 text-sm mt-2 text-center bg-red-500/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-500/30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          {error}
        </motion.p>
      )}
    </motion.form>
  );
}
