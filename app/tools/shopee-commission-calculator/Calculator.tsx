"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [commissionPercent, setCommissionPercent] = useState(0);

  const commission = (price * commissionPercent) / 100;

  const finalRevenue = price - commission;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-black"
      >
        ← Back to Home
      </Link>

      <ToolHero
        title="Shopee Commission Calculator"
        description="Calculate Shopee seller commissions instantly."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Inputs */}
        <div className="border rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Commission Inputs
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
                Commission %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setCommissionPercent(Number(e.target.value))
                }
              />
            </div>

          </div>
        </div>

        {/* Results */}
        <div className="border rounded-2xl p-8 bg-black text-white">

          <h2 className="text-2xl font-semibold mb-8">
            Commission Results
          </h2>

          <div className="space-y-6">

            <div>
              <p className="text-gray-400">
                Commission Fee
              </p>

              <h3 className="text-4xl font-bold mt-2">
                Rp {commission}
              </h3>
            </div>

            <div>
              <p className="text-gray-400">
                Final Revenue
              </p>

              <h3 className="text-4xl font-bold mt-2">
                Rp {finalRevenue}
              </h3>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}