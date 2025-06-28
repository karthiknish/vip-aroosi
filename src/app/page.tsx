import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-gray-800 bg-base-light">
      {/* Hero */}
      <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center min-h-[60vh] px-4 py-20">
        <div className="backdrop-brightness-90 backdrop-blur-sm inset-0 absolute" />
        <div className="relative max-w-3xl space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">
            No. 1 Matchmaking Service for Elites
          </h1>
          <p className="text-lg md:text-xl text-neutral-light">
            5× higher success rate · Assured meetings · Top consultants
          </p>
          <a
            href="#enquiry"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Advantage Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "20+", label: "Years Expertise" },
            { value: "50,000+", label: "Happy VIPs" },
            { value: "100%", label: "Privacy" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-8 rounded-lg border border-base-dark bg-base"
            >
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {item.value}
              </span>
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
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
            ].map((s) => (
              <blockquote
                key={s.name}
                className="p-6 bg-white rounded-lg shadow-sm border border-base-dark flex flex-col gap-4"
              >
                <p className="italic text-sm">“{s.quote}”</p>
                <span className="font-semibold text-primary-dark">
                  {s.name}
                </span>
              </blockquote>
            ))}
          </div>
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
          <ContactForm defaultSubject="VIP Aroosi Enquiry" />
        </div>
      </section>
    </main>
  );
}
