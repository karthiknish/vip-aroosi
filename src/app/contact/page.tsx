import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact – VIP Aroosi",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-light px-4 py-16">
      <div className="w-full max-w-lg space-y-8 text-center bg-white p-8 rounded-lg shadow-sm border border-base-dark">
        <h1 className="text-3xl font-bold text-primary-dark">Contact Us</h1>
        <p className="text-neutral">
          Reach out to our VIP concierge team and begin your bespoke matchmaking
          journey.
        </p>
        <ContactForm defaultSubject="VIP Aroosi Contact" />
        <a href="/" className="text-primary underline">
          Back to home
        </a>
      </div>
    </main>
  );
}
