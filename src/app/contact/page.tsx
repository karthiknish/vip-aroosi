export const metadata = {
  title: "Contact – VIP Aroosi",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-lg space-y-6 text-center">
        <h1 className="text-3xl font-bold text-pink-700">Contact Us</h1>
        <p className="text-gray-600">
          Reach out to our VIP concierge team and start your bespoke matchmaking
          journey.
        </p>
        <form
          className="space-y-4 text-left"
          action="https://formspree.io/f/your-form-id" // replace with actual form endpoint
          method="POST"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
        <a href="/" className="text-pink-600 underline">
          Back to home
        </a>
      </div>
    </main>
  );
} 