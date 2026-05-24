
"use client";
import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [ads, setAds] = useState(0);
  const [affiliate, setAffiliate] = useState(0);

  const totalCost =
    cost + shipping + ads + (price * affiliate) / 100;

  const profit = price - totalCost;

  const margin =
    price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-black"
      >
      ← Back to Home
      </Link>
      
      {/* Hero */}

      <ToolHero
         title="TikTok Shop Margin Calculator"
         description="Calculate TikTok Shop profit margins instantly."
      />

      {/* Calculator */}
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Inputs */}
        <div className="border rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Input Costs
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Product Price
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Product Cost
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Shipping Cost
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setShipping(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Ads Cost
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setAds(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Affiliate %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setAffiliate(Number(e.target.value))
                }
              />
            </div>

          </div>
        </div>

        {/* Results */}
        <div className="border rounded-2xl p-8 bg-black text-white">

          <h2 className="text-2xl font-semibold mb-8">
            Profit Results
          </h2>

          <div className="space-y-6">

            <div>
              <p className="text-gray-400">
                Net Profit
              </p>

              <h3 className="text-4xl font-bold mt-2">
                Rp {profit}
              </h3>
            </div>

            <div>
              <p className="text-gray-400">
                Profit Margin
              </p>

              <h3 className="text-4xl font-bold mt-2">
                {margin}%
              </h3>
            </div>

            <div>
            <p className="text-gray-400">
            Net Profit
            </p>

            <h3 className="text-4xl font-bold mt-2">
            Rp {profit}
           </h3>
          </div>

          </div>
        </div>

      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
          How TikTok Shop margin Work
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
        TikTok Shop profit margins are critical for long-term
        ecommerce success in Indonesia.

        Sellers need to balance advertising costs, affiliate
        commissions and shipping expenses carefully to maintain
        healthy margins while scaling.
        </p>

      </section>

      {/* FAQ */}
<section className="max-w-4xl mx-auto mt-24">

<h2 className="text-3xl font-bold">
  Frequently Asked Questions
</h2>

<div className="mt-10 space-y-8">

  <div>
    <h3 className="text-xl font-semibold">
      Why are profit margins important for TikTok Shop sellers?
    </h3>

    <p className="mt-2 text-gray-600">
      Profit margins help sellers understand whether
      their business remains profitable after all operating
      costs and marketplace expenses.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold">
      How can sellers improve TikTok Shop margins?
    </h3>

    <p className="mt-2 text-gray-600">
      Sellers can improve margins by reducing shipping
      costs, optimizing advertising spend and increasing
      product pricing efficiency.
    </p>
  </div>

</div>

</section>
    
{/* Related Tools */}
<section className="max-w-4xl mx-auto mt-24">

  <h2 className="text-3xl font-bold">
    Related Ecommerce Tools
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    <Link
      href="/tools/tiktok-shop-profit-calculator"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold">
        TikTok Shop Profit Calculator
      </h3>

      <p className="mt-4 text-gray-600">
        Calculate TikTok Shop seller profit instantly.
      </p>
    </Link>

    <Link
      href="/tools/tiktok-live-profit-calculator"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold">
        TikTok Live Profit Calculator
      </h3>

      <p className="mt-4 text-gray-600">
        Calculate TikTok live selling profitability.
      </p>
    </Link>

  </div>

</section>


    </main>
  );
}

