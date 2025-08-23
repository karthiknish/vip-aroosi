"use client";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
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
        className={`w-full bg-white hover:bg-primary-dark text-primary py-2 rounded-md font-medium transition-colors ${
          status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {/* Toast messages will show for success/error. Optionally keep inline messages: */}
      {status === "error" && (
        <p className="text-danger text-sm mt-2">{error}</p>
      )}
    </form>
  );
}
