import Link from "next/link";

export const metadata = {
  title: "Contact - Indo Seller Tools",
  description:
    "Contact Indo Seller Tools for questions, feedback, or suggestions.",
  alternates: {
    canonical: "https://indosellertools.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back to Home
        </Link>

        <h1 className="mt-10 text-4xl md:text-5xl font-bold">
          Contact
        </h1>

        <p className="mt-6 text-gray-700 leading-8">
          Indo Seller Tools is a free website for online sellers who need simple
          calculators and tools for Shopee, TikTok Shop, Tokopedia, and Lazada.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          For questions, feedback, or suggestions, please contact:
        </p>

        <p className="mt-6 text-xl font-semibold">
          contact@indosellertools.com
        </p>
      </section>
    </main>
  );
}