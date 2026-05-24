"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  feeLabel: string;
  resultLabel: string;
};

export default function EcommerceCalculator({
  title,
  description,
  feeLabel,
  resultLabel,
}: Props) {

  const [price, setPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [feePercent, setFeePercent] = useState(0);

  const platformFee = (price * feePercent) / 100;

  const totalCost =
    productCost +
    shippingCost +
    packagingCost +
    platformFee;

  const profit = price - totalCost;

  const margin =
    price > 0
      ? ((profit / price) * 100).toFixed(1)
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
        title={title}
        description={description}
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

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
                value={price}
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setPrice(Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Product Cost
              </label>

              <input
                type="number"
                value={productCost}
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setProductCost(Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Shipping Cost
              </label>

              <input
                type="number"
                value={shippingCost}
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setShippingCost(Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Packaging Cost
              </label>

              <input
                type="number"
                value={packagingCost}
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setPackagingCost(Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                {feeLabel}
              </label>

              <input
                type="number"
                value={feePercent}
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setFeePercent(Number(e.target.value))
                }
              />
            </div>

          </div>
        </div>

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
                {resultLabel}
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