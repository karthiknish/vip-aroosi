export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4 text-center space-y-6">
      <h1 className="text-4xl font-bold text-pink-700">
        VIP Aroosi Marriage
      </h1>
      <p className="max-w-xl text-gray-700 text-lg">
        An exclusive, bespoke matrimonial service connecting elite singles
        seeking meaningful lifelong partnerships. Privacy, personalization, and
        premium matchmaking — tailored just for you.
      </p>
      <a
        href="/contact"
        className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
      >
        Contact Our Concierge
      </a>
    </main>
  );
} 