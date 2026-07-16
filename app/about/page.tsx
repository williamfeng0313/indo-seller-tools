import Link from "next/link";

export const metadata = {
  title: "About - Indo Seller Tools",
  description:
    "About Indo Seller Tools, a free tool website for online sellers in Indonesia.",
  alternates: {
    canonical: "https://indosellertools.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back to Home
        </Link>

        <h1 className="mt-10 text-4xl md:text-5xl font-bold">
          About Indo Seller Tools
        </h1>

        <p className="mt-6 text-gray-700 leading-8">
          Indo Seller Tools provides free calculators and simple tools for
          online sellers in Indonesia. The website helps sellers estimate
          marketplace fees, product costs, profit, margin, and product title
          ideas before listing or promoting products.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Our tools are designed for sellers on Shopee, TikTok Shop, Tokopedia,
          and Lazada who want to make better pricing and promotion decisions.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Indo Seller Tools is not affiliated with Shopee, TikTok, Tokopedia,
          Lazada, or any marketplace platform. All calculators are for estimation
          purposes only.
        </p>
      </section>
    </main>
  );
}