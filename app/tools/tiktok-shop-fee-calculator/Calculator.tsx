"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import FAQSection from "@/components/FAQSection";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [feePercent, setFeePercent] = useState(0);

  const tiktokFee = (price * feePercent) / 100;

  const totalCost =
    productCost + shippingCost + packagingCost + tiktokFee;

  const profit = price - totalCost;

  const margin =
    price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <CalculatorLayout
      title="TikTok Shop Fee Calculator"
      description="Calculate TikTok Shop seller fees and net profit instantly."
    >
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Input Costs</h2>

          <div className="space-y-5">
            <InputField label="Product Price" onChange={setPrice} />
            <InputField label="Product Cost" onChange={setProductCost} />
            <InputField label="Shipping Cost" onChange={setShippingCost} />
            <InputField label="Packaging Cost" onChange={setPackagingCost} />
            <InputField label="TikTok Shop Fee%" onChange={setFeePercent} />
          </div>
        </div>

        <div className="border rounded-2xl p-8 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-8">Profit Results</h2>

          <div className="space-y-6">
            <ResultCard label="Net Profit" value={`Rp ${profit.toFixed(0)}`} />
            <ResultCard label="Profit Margin" value={`${margin}%`} />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">How TikTok Shop Fees Work</h2>

        <p className="mt-6 text-gray-700 leading-8">
        TikTok Shop sellers in Indonesia need to calculate
        platform commissions, affiliate fees, shipping costs
        and operational expenses carefully.

        Many sellers underestimate TikTok Shop transaction fees
        and lose profit margins while scaling.
        </p>
      </section>

      <FAQSection
        faqs={[
          {
            question: "How much does TikTok Shop charge sellers?",
            answer:
              "TikTok Shop seller fees vary by category, campaign type and affiliate programs.",
          },
          {
            question: "How can sellers improve TikTok Shop margins?",
            answer:
              "Sellers can improve margins by optimizing shipping, affiliate commissions and operational costs.",
          },
        ]}
      />
    </CalculatorLayout>
  );
}
