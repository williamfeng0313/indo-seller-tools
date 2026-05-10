
"use client";

import { useState } from "react";

export default function TikTokProfitCalculator() {
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
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto">
        
        <h1 className="text-5xl font-bold">
          TikTok Shop Profit Calculator
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Calculate your real TikTok Shop profit after ads,
          shipping and affiliate fees.
        </p>

      </section>

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

          </div>
        </div>

      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
          How TikTok Shop Fees Work
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          TikTok Shop sellers in Indonesia need to calculate
          platform fees, affiliate commissions, shipping costs
          and advertising expenses carefully. Many sellers lose
          money because they underestimate their true operating
          costs.
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
              What is a good TikTok Shop margin?
            </h3>

            <p className="mt-2 text-gray-600">
              Most profitable sellers target margins above 30%.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              How much should sellers spend on ads?
            </h3>

            <p className="mt-2 text-gray-600">
              Ad costs depend on the product category and competition.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

