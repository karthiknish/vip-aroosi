"use client";
import { useState } from "react";

export default function ContactForm({ defaultSubject = "VIP Aroosi Enquiry" }) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: defaultSubject,
      message:
        (formData.get("message") as string) ||
        `Phone: ${formData.get("phone") as string}`,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 rounded-md text-gray-800"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 rounded-md text-gray-800"
        />
      </div>
      {/* optional phone/message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          className="w-full px-3 py-2 rounded-md text-gray-800"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 rounded-md text-gray-800"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-700 text-sm mt-2">
          Thank you! We will contact you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-danger text-sm mt-2">{error}</p>
      )}
    </form>
  );
}
