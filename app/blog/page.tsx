import Link from "next/link";

export const metadata = {
  title: "Ecommerce Blog | Indo Seller Tools",
  description:
    "Guides, tutorials and ecommerce strategies for Shopee, TikTok Shop, Tokopedia and Lazada sellers in Indonesia.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Ecommerce Blog
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Ecommerce guides and profitability tips for Indonesian sellers.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <Link
          href="/blog/how-much-profit-should-shopee-sellers-make"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            How Much Profit Should Shopee Sellers Make?
          </h2>

          <p className="mt-3 text-gray-600">
          Learn the ideal profit margin, ROI targets and profitability benchmarks for Shopee sellers in Indonesia.
          </p>
        </Link>

        <Link
          href="/blog/how-to-price-products-on-shopee"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            How To Price Products On Shopee
          </h2>

          <p className="mt-3 text-gray-600">
           Discover pricing strategies that balance competitiveness, conversion rates and healthy profit margins.
          </p>
        </Link>

        <Link
          href="/blog/shopee-cod-vs-non-cod"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            Shopee COD vs Non-COD
          </h2>

          <p className="mt-3 text-gray-600">
           Compare COD and prepaid orders to understand their impact on profitability and cash flow.
          </p>
        </Link>

        <Link
          href="/blog/how-to-calculate-shopee-roi"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
           How To Calculate Shopee ROI
          </h2>

          <p className="mt-3 text-gray-600">
          Learn the Shopee ROI formula and discover how profitable sellers measure ecommerce performance.
          </p>
        </Link>

        <Link
          href="/blog/shopee-vs-tiktok-shop"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
           Shopee vs TikTok Shop
          </h2>

          <p className="mt-3 text-gray-600">
           Compare traffic sources, profit margins and growth opportunities across Indonesia's top ecommerce platforms.
          </p>
        </Link>

        <Link
          href="/blog/why-tiktok-sellers-lose-money"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
          TikTok Sellers Lose Money
          </h2>

          <p className="mt-3 text-gray-600">
           Learn the most common mistakes that reduce TikTok Shop profits and how to avoid them.
          </p>
        </Link>

        <Link
          href="/blog/how-to-calculate-tiktok-shop-profit"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
          How To Calculate TikTok Shop Profit
          </h2>

          <p className="mt-3 text-gray-600">
          Understand TikTok Shop profit calculations including fees, commissions, shipping and advertising costs.
          </p>
        </Link>

        <Link
          href="/blog/tiktok-affiliate-commission-explained"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
           TikTok Affiliate Commission Explained
          </h2>

          <p className="mt-3 text-gray-600">
          Learn how TikTok affiliate commissions work and how they affect seller profitability.
          </p>
        </Link>

        <Link
          href="/blog/how-much-does-tiktok-shop-charge-sellers"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
           How Much Does TikTok Shop Charge Sellers?
          </h2>

          <p className="mt-3 text-gray-600">
          Understand TikTok Shop fees, commissions and seller costs before launching your products.
          </p>
        </Link>

        <Link
          href="/blog/shopee-live-vs-tiktok-live"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
           Shopee Live vs TikTok Live
          </h2>

          <p className="mt-3 text-gray-600">
           Compare Shopee Live and TikTok Live to find the best channel for sales and customer engagement.
          </p>
        </Link>
        
      </div>

    </main>
  );
}