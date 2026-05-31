import Link from "next/link";

export const metadata = {
  title: "Ecommerce Blog",
  description:
    "Guides for Shopee, TikTok Shop, Tokopedia and Indonesian ecommerce sellers.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Ecommerce Seller Blog
      </h1>

      <p className="mt-4 text-gray-600">
        Practical guides for Indonesian ecommerce sellers.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <Link
          href="/blog/how-much-profit-should-shopee-sellers-make"
          className="border rounded-2xl p-6 hover:shadow-lg"
        >
          <h2 className="text-2xl font-semibold">
            How Much Profit Should Shopee Sellers Make?
          </h2>

          <p className="mt-3 text-gray-600">
            Learn healthy Shopee profit margins and avoid common mistakes.
          </p>
        </Link>

        <Link
          href="/blog/how-to-price-products-on-shopee"
          className="border rounded-2xl p-6 hover:shadow-lg"
        >
          <h2 className="text-2xl font-semibold">
            How To Price Products On Shopee
          </h2>

          <p className="mt-3 text-gray-600">
            Discover pricing strategies that improve margins.
          </p>
        </Link>

      </div>

    </main>
  );
}