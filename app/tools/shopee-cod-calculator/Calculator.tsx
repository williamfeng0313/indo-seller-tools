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

  const codFee = (price * feePercent) / 100;

  const totalCost =
    productCost + shippingCost + packagingCost + codFee;

  const profit = price - totalCost;

  const margin =
    price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <CalculatorLayout
      title="Shopee COD Calculator"
      description="Calculate Shopee COD fees and seller profit instantly."
    >
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Input Costs</h2>

          <div className="space-y-5">
            <InputField label="Product Price" onChange={setPrice} />
            <InputField label="Product Cost" onChange={setProductCost} />
            <InputField label="Shipping Cost" onChange={setShippingCost} />
            <InputField label="Packaging Cost" onChange={setPackagingCost} />
            <InputField label="COD Fee %" onChange={setFeePercent} />
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
        <h2 className="text-3xl font-bold">How Shopee COD Fees Work</h2>

        <p className="mt-6 text-gray-700 leading-8">
          Shopee COD orders in Indonesia include additional cash-on-delivery
          handling fees on top of regular platform commissions. Sellers need
          to factor in COD charges, shipping, packaging and product costs to
          understand their real profit on each order.
        </p>
      </section>

      <FAQSection
        faqs={[
          {
            question: "How much does Shopee charge for COD orders?",
            answer:
              "Shopee COD fees vary by order value and seller program, but typically include a percentage-based COD handling fee.",
          },
          {
            question: "Is COD profitable for Shopee sellers?",
            answer:
              "COD can be profitable when sellers account for higher return rates, COD fees and shipping costs in their pricing.",
          },
        ]}
      />
    </CalculatorLayout>
  );
}
