"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {

  const [revenue, setRevenue] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [adsCost, setAdsCost] = useState(0);
  const [hostFee, setHostFee] = useState(0);

  const totalCost =
    productCost +
    adsCost +
    hostFee;

  const profit = revenue - totalCost;

  const margin =
    revenue > 0
      ? ((profit / revenue) * 100).toFixed(1)
      : 0;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-black"
      >
        ← Back to Home
      </Link>

      <ToolHero
        title="TikTok Live Profit Calculator"
        description="Calculate TikTok live selling profits instantly."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Inputs */}
        <div className="border rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Live Selling Costs
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Live Revenue
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setRevenue(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Product Cost
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setProductCost(Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Ads Cost
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setAdsCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Host Fee
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setHostFee(Number(e.target.value))}
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

    </main>
  );
}