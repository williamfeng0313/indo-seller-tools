
"use client";

import ToolHero from "@/components/ToolHero";

import Link from "next/link";
import { useState } from "react";

export default function ShopeeAffiliateCalculator() {
const [price, setPrice] = useState(0);
const [productCost, setProductCost] = useState(0);
const [shippingCost, setShippingCost] = useState(0);
const [packagingCost, setPackagingCost] = useState(0);
const [feePercent, setFeePercent] = useState(0);

const affiliateCommission = (price * feePercent) / 100;

const totalCost =
  productCost +
  shippingCost +
  packagingCost +
  affiliateCommission;

const profit = price - totalCost;

const roi =
  totalCost > 0
    ? ((profit / totalCost) * 100).toFixed(1)
    : 0;




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
        title="Shopee Affiliate Calculator"
        description="Calculate Shopee affiliate commissions and seller profit instantly."
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
      Affiliate Commission %
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
         How Shopee Affiliate Fees Work
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
        
        Shopee affiliate marketing is growing rapidly in Indonesia.
        Sellers need to calculate affiliate commissions carefully
        to maintain healthy profit margins and sustainable growth.


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
            How much commission do Shopee affiliates charge?
            </h3>

            <p className="mt-2 text-gray-600">
            Shopee affiliate commissions vary by product category,
            but many sellers offer between 5% and 20%.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
            How can sellers stay profitable with affiliates?
            </h3>

            <p className="mt-2 text-gray-600">
            Sellers should calculate commissions, shipping fees
            and product costs carefully before setting affiliate payouts.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

