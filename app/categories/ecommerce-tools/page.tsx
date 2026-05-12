
import Link from "next/link";

export default function EcommerceToolsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          Indonesian Ecommerce Seller Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Free AI-powered tools for Shopee, TikTok Shop,
          Tokopedia and Lazada sellers in Indonesia.
        </p>

      </section>

      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            TikTok Profit Calculator
          </h2>

          <Link
            href="/tools/tiktok-profit-calculator"
            className="inline-block mt-6 text-black font-medium"
          >
            Open Tool →
          </Link>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            Shopee Fee Calculator
          </h2>

          <Link
            href="/tools/shopee-fee-calculator"
            className="inline-block mt-6 text-black font-medium"
          >
            Open Tool →
          </Link>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            Product Title Generator
          </h2>

          <Link
            href="/tools/product-title-generator"
            className="inline-block mt-6 text-black font-medium"
          >
            Open Tool →
          </Link>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            WhatsApp Reply Generator
          </h2>

          <Link
            href="/tools/whatsapp-reply-generator"
            className="inline-block mt-6 text-black font-medium"
          >
            Open Tool →
          </Link>
        </div>

      </section>

    </main>
  );
}
