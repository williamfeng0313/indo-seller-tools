import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Free AI Tools for Indonesian Sellers
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Boost your TikTok Shop & Shopee sales with free AI-powered tools.
        </p>

        
        <Link
          href="/tools/tiktok-profit-calculator"
          className="bg-black text-white px-8 py-4 rounded-2xl inline-block"
        >
          Try Free Tools
        </Link>
      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        
        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">
            TikTok Profit Calculator
          </h2>

          <p className="mt-4 text-gray-600">
            Calculate your real TikTok Shop profit margin.
          </p>

          <button className="mt-6 text-black font-medium">
            Open Tool →
          </button>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">
            Shopee Title Generator
          </h2>

          <p className="mt-4 text-gray-600">
            Generate SEO-friendly product titles with AI.
          </p>

          <Link 
            href="/tools/product-title-generator"
            className="inline-block mt-6 text-black font-medium"
          >
            Open Tool →
          </Link>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">
            WhatsApp Reply Generator
          </h2>

          <p className="mt-4 text-gray-600">
            Reply to customers using AI-generated responses.
          </p>

          <button className="mt-6 text-black font-medium">
            Open Tool →
          </button>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">
            Shopee Fee Calculator
          </h2>

          <p className="mt-4 text-gray-600">
            Calculate Shopee commissions and seller profit instantly.
          </p>

          <Link 
            href="/tools/shopee-fee-calculator"
            className="inline-block mt-6 text-black font-medium"
          >
            Open Tool →
          </Link>
        </div>
      
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">
          Why Indonesian Sellers Need AI Tools
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Indonesian e-commerce sellers are facing increasing competition
          on TikTok Shop and Shopee. AI tools can help sellers generate
          better product titles, improve WhatsApp customer replies,
          and calculate real profit margins faster.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-8">

          <div>
            <h3 className="font-semibold text-xl">
              How much does TikTok Shop charge in Indonesia?
            </h3>

            <p className="mt-2 text-gray-600">
              TikTok Shop charges platform fees, affiliate commissions,
              and additional advertising costs depending on the seller setup.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
              Can AI improve Shopee product titles?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. AI can generate keyword-rich product titles
              optimized for Shopee SEO and click-through rates.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
