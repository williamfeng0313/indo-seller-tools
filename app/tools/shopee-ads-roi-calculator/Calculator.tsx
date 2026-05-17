
"use client";

import ToolHero from "@/components/ToolHero";

import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
const [price, setPrice] = useState(0);
const [productCost, setProductCost] = useState(0);
const [shippingCost, setShippingCost] = useState(0);
const [adsSpend, setAdsSpend] = useState(0);
const [packagingCost, setPackagingCost] = useState(0);
const [feePercent, setFeePercent] = useState(0);

const shopeeFee = (price * feePercent) / 100;

const totalCost =
  productCost +
  shippingCost +
  packagingCost +
  adsSpend+
  shopeeFee;

const profit = price - totalCost;

const roi =
  totalCost > 0
    ? ((profit / totalCost) * 100).toFixed(1)
    : 0;


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
        title="Shopee Ads ROI Calculator"
        description="Calculate Shopee advertising ROI and profitability instantly."
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
      onChange={(e) => setProductCost(Number(e.target.value))}
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Shipping Cost
    </label>

    <input
      type="number"
      className="w-full border rounded-xl px-4 py-3"
      onChange={(e) => setShippingCost(Number(e.target.value))}
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Packaging Cost
    </label>

    <input
      type="number"
      className="w-full border rounded-xl px-4 py-3"
      onChange={(e) => setPackagingCost(Number(e.target.value))}
    />
  </div>


  <div>
     <label className="block mb-2 font-medium">
    Ads Spend
    </label>

    <input
    type="number"
    className="w-full border rounded-xl px-4 py-3"
    onChange={(e) => setAdsSpend(Number(e.target.value))}
    />
  </div>



  <div>
    <label className="block mb-2 font-medium">
      Shopee Fee %
    </label>

    <input
      type="number"
      className="w-full border rounded-xl px-4 py-3"
      onChange={(e) => setFeePercent(Number(e.target.value))}
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
                ROI
              </p>

              <h3 className="text-4xl font-bold mt-2">
                {roi}%
              </h3>
            </div>

          </div>
        </div>

      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
        How Shopee Ads ROI Works
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
        
        Shopee sellers in Indonesia need to calculate
        advertising ROI carefully before scaling campaigns.

        Many ecommerce businesses lose money because
        they underestimate ad spend, shipping costs
        and operational expenses.
  


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
            What is a good Shopee ads ROI?
            </h3>

            <p className="mt-2 text-gray-600">
            Many profitable Shopee sellers target at least
            2x to 4x ROI on advertising campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
            How can sellers improve Shopee ad profitability?
            </h3>

            <p className="mt-2 text-gray-600">
            Sellers can improve ROI by lowering ad costs,
            increasing conversion rates and optimizing logistics.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

