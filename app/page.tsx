import Navbar from "@/components/Navbar";

import ToolCard from "@/components/ToolCard";

import Link from "next/link";

export const metadata = {
  title: "Indo Seller Tools - Free Tools for Shopee & TikTok Shop Sellers",
  description:
    "Free tools for Indonesian online sellers. Calculate Shopee fees, TikTok Shop fees, affiliate commission, profit margin, ROI, and generate product titles.",
  alternates: {
    canonical: "https://indosellertools.com",
    languages: {
      en: "https://indosellertools.com",
      id: "https://indosellertools.com/id",
    },
  },
};
export default function Home() {
  return (
   <>
    

    <main className="min-h-screen bg-white text-black">
    <Navbar />
      
     
    
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-end">
        <Link
          href="/id"
          className="text-sm text-gray-500 hover:text-black"
        >
          Bahasa Indonesia →
        </Link>
      </div>
    

    {/* Hero Section */}
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
    <h1 className="text-5xl font-bold leading-tight">
     Free Seller Tools for Shopee and TikTok Shop Sellers
    </h1>

    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
     Calculate marketplace fees, affiliate commissions, profit margins, ROI,
     and product title ideas for Indonesian online sellers.
    </p>

    <div className="mt-10 flex justify-center gap-4 flex-wrap">
  <Link
    href="/id/tools/kalkulator-profit-tiktok-shop"
    className="bg-black text-white px-8 py-4 rounded-2xl inline-block"
  >
    Hitung Biaya TikTok Shop
  </Link>

  <Link
    href="/id/tools/kalkulator-biaya-shopee"
    className="border border-gray-300 text-black px-8 py-4 rounded-2xl inline-block hover:bg-gray-50"
  >
    Hitung Biaya Shopee
  </Link>

  <Link
    href="/id"
    className="border border-gray-300 text-black px-8 py-4 rounded-2xl inline-block hover:bg-gray-50"
  >
    Bahasa Indonesia
  </Link>
</div>

<div className="mt-8 flex justify-center gap-6 flex-wrap text-center">
  <Link
    href="/tools"
    className="text-lg underline"
  >
    Browse All Tools →
  </Link>

  <Link
    href="/categories/ecommerce-tools"
    className="text-lg underline"
  >
    Browse Ecommerce Tools →
  </Link>

  <Link
    href="/categories/calculators"
    className="text-lg underline"
  >
    Browse Calculators →
  </Link>
</div>

</section>
   {/* Tools Section */}
<section id="tools" className="max-w-6xl mx-auto px-6 py-12">
  <div className="mb-10">
    <h2 className="text-3xl font-bold">
      Popular Seller Tools
    </h2>

    <p className="mt-3 text-gray-600 max-w-3xl">
      Start with the most useful calculators for TikTok Shop, Shopee,
      Lazada, Tokopedia, marketplace fees, commissions, profit margins,
      and product titles.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ToolCard
      title="TikTok Shop Fee Calculator"
      description="Calculate TikTok Shop seller fees and net profit instantly."
      href="/tools/tiktok-shop-fee-calculator"
    />

    <ToolCard
      title="TikTok Profit Calculator"
      description="Calculate your real TikTok Shop profit margin."
      href="/tools/tiktok-profit-calculator"
    />

    <ToolCard
      title="TikTok Commission Calculator"
      description="Calculate TikTok Shop commission fees and seller profit instantly."
      href="/tools/tiktok-commission-calculator"
    />

    <ToolCard
      title="Shopee Fee Calculator"
      description="Calculate Shopee fees, seller costs, profit, and margin."
      href="/tools/shopee-fee-calculator"
    />

    <ToolCard
      title="Shopee Commission Calculator"
      description="Calculate Shopee commission fees for Indonesian sellers."
      href="/tools/shopee-commission-calculator"
    />

    <ToolCard
      title="Shopee Affiliate Calculator"
      description="Calculate Shopee affiliate commissions and seller profit."
      href="/tools/shopee-affiliate-calculator"
    />

    <ToolCard
      title="Lazada Fee Calculator"
      description="Calculate Lazada seller fees, costs, profit, and margin."
      href="/tools/lazada-fee-calculator"
    />

    <ToolCard
      title="Tokopedia Fee Calculator"
      description="Calculate Tokopedia seller fees and marketplace costs."
      href="/tools/tokopedia-fee-calculator"
    />

    <ToolCard
      title="Product Title Generator"
      description="Generate better product title ideas for Shopee, TikTok Shop, Tokopedia, and Lazada."
      href="/tools/product-title-generator"
    />
  </div>

  <div className="mt-10 text-center">
  <Link
    href="/categories/ecommerce-tools"
    className="inline-block rounded-2xl border px-8 py-4 font-medium hover:bg-gray-50"
  >
    View All 25 Seller Tools →
  </Link>
</div>

  <div className="mt-10 flex gap-6 flex-wrap">
    <Link
      href="/categories/ecommerce-tools"
      className="text-lg underline"
    >
      Browse all ecommerce tools →
    </Link>

    <Link
      href="/categories/calculators"
      className="text-lg underline"
    >
      Browse all calculators →
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
        <section className="max-w-6xl mx-auto px-6 py-24">

       <h2 className="text-4xl font-bold">
         Latest Ecommerce Guides
       </h2>

       <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        mt-10
        ">
      
      <Link
      href="/blog/how-much-profit-should-shopee-sellers-make"
      className="border rounded-2xl p-6 hover:shadow-lg"
     >
      <h3 className="text-xl font-semibold">
        How Much Profit Should Shopee Sellers Make?
      </h3>

      <p className="mt-3 text-gray-600">
        Learn the ideal profit margin and ROI targets for Shopee sellers.
      </p>
     </Link>

     <Link
      href="/blog/how-to-price-products-on-shopee"
      className="border rounded-2xl p-6 hover:shadow-lg"
     >
      <h3 className="text-xl font-semibold">
        How To Price Products On Shopee
      </h3>

      <p className="mt-3 text-gray-600">
        Discover pricing strategies that improve margins.
      </p>
      </Link>
      
      <Link
      href="/blog/shopee-cod-vs-non-cod"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
        Shopee COD vs Non-COD
      </h3>

      <p className="mt-3 text-gray-600">
        Compare COD and prepaid orders for Indonesian sellers.
      </p>
    </Link>

    <Link
      href="/blog/how-to-calculate-shopee-roi"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
       How to calculate Shopee roi
      </h3>

      <p className="mt-3 text-gray-600">
       Learn the Shopee ROI formula and discover how profitable sellers evaluate ecommerce performance.
      </p>
    </Link>

    <Link
      href="/blog/why-tiktok-sellers-lose-money"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
       Why Tiktok sellers lose money
      </h3>

      <p className="mt-3 text-gray-600">
      Learn why many TikTok Shop sellers struggle with profit despite high sales volume.
      </p>
    </Link>

    <Link
      href="/blog/shopee-vs-tiktok-shop"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
        Shopee vs Tiktok shop
      </h3>

      <p className="mt-3 text-gray-600">
      Compare traffic, profit margins and growth opportunities across both platforms.
      </p>
    </Link>

    <Link
      href="/blog/how-to-calculate-tiktok-shop-profit"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
       How to calculate Tiktok shop profit
      </h3>

      <p className="mt-3 text-gray-600">
       Understand TikTok Shop profit calculations including fees, commissions, shipping and advertising costs.
      </p>
    </Link>

    <Link
      href="/blog/tiktok-affiliate-commission-explained"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
       TikTok Affiliate Commission Explained
      </h3>

      <p className="mt-3 text-gray-600">
       Learn how TikTok affiliate commissions work and how they affect seller profitability.
      </p>
    </Link>

    <Link
      href="/blog/how-much-does-tiktok-shop-charge-sellers"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
       How Much Does TikTok Shop Charge Sellers?
      </h3>

      <p className="mt-3 text-gray-600">
       Understand TikTok Shop fees, commissions and seller costs before launching your products.
      </p>
    </Link>

    <Link
      href="/blog/shopee-live-vs-tiktok-live"
      className="border rounded-2xl p-6 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
       Shopee Live vs TikTok Live
      </h3>

      <p className="mt-3 text-gray-600">
      Compare Shopee Live and TikTok Live to find the best channel for sales and customer engagement.
      </p>
    </Link>

     </div>

    </section>

    <footer className="mt-24 border-t">
    <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex gap-4 flex-wrap justify-between">
    <div>
      © 2026 Indo Seller Tools
    </div>

    <div className="flex gap-4 flex-wrap">
      <Link href="/about" className="hover:text-black">
        About
      </Link>
      <Link href="/contact" className="hover:text-black">
        Contact
      </Link>
      <Link href="/privacy-policy" className="hover:text-black">
        Privacy Policy
      </Link>
    </div>
  </div>
  </footer>
    </main>
    </>
  );
}
