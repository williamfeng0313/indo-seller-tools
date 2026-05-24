"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {

const [price, setPrice] = useState(0);
const [productCost, setProductCost] = useState(0);
const [shippingCost, setShippingCost] = useState(0);
const [commissionPercent, setCommissionPercent] = useState(0);

const commission = (price * commissionPercent) / 100;

const totalCost =
  productCost +
  shippingCost +
  commission;

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
title="TikTok Commission Calculator"
description="Calculate TikTok Shop commission fees instantly."
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
Commission %
</label>

<input
type="number"
className="w-full border rounded-xl px-4 py-3"
onChange={(e) => setCommissionPercent(Number(e.target.value))}
/>
</div>

</div>
</div>

<div className="border rounded-2xl p-8 bg-black text-white">

<h2 className="text-2xl font-semibold mb-8">
Results
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