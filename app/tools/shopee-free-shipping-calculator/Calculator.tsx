
"use client";

import ToolHero from "@/components/ToolHero";

import Link from "next/link";
import { useState } from "react";

export default function ShopeeROICalculator() {
const [price, setPrice] = useState(0);
const [productCost, setProductCost] = useState(0);
const [shippingCost, setShippingCost] = useState(0);
const [packagingCost, setPackagingCost] = useState(0);
const [liveHostCost, setLiveHostCost] = useState(0);
const [discount, setDiscount] = useState(0);
const [freeShipping, setFreeShipping] = useState(0);


const discountedPrice =
  price - (price * discount) / 100;

const totalCost =
  productCost +
  shippingCost +
  packagingCost +
  freeShipping;
  

const profit = price - totalCost;



const margin =
  discountedPrice > 0
    ? ((profit / discountedPrice) * 100).toFixed(1)
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
        title="Shopee Free Shipping Calculator"
        description="Calculate Shopee free shipping impact on seller profits instantly."
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
      value={price}
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
    Live Host Cost
  </label>

  <input
    type="number"
    className="w-full border rounded-xl px-4 py-3"
    onChange={(e) => setLiveHostCost(Number(e.target.value))}
  />
  </div>
  
  <div>
    <label className="block mb-2 font-medium">
    Free Shipping Subsidy
    </label>

    <input
      type="number"
      className="w-full border rounded-xl px-4 py-3"
      onChange={(e) => setFreeShipping(Number(e.target.value))}
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
              Discounted Price
             </p>

             <h3 className="
              text-3xl
              md:text-4xl
              font-bold
              ">
              Rp {discountedPrice}
             </h3>
            </div>
            
            
            
            
            <div>
              <p className="text-gray-400">
                Net Profit
              </p>

              <h3 className="
              text-3xl
              md:text-4xl
              font-bold
              ">
                Rp {profit}
              </h3>
            </div>


           
             <div>
               <p className="text-gray-400">
                 Profit Margin
               </p>

               <h3 className="
               text-3xl
               md:text-4xl
               font-bold
               ">
                 {margin}%
               </h3>
             </div>



          </div>
        </div>

      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
        How Shopee Free Shipping Works
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
        
        Free shipping campaigns are one of the strongest conversion drivers on Shopee Indonesia.

        However, many sellers underestimate shipping subsidies and lose profit margins during promotional campaigns.

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
            Does Shopee free shipping reduce profits?
            </h3>

            <p className="mt-2 text-gray-600">
            Free shipping can increase conversion rates significantly, but shipping subsidies may reduce seller margins 
            if product pricing is not optimized carefully.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
            How do Shopee sellers stay profitable with free shipping?
            </h3>

            <p className="mt-2 text-gray-600">
            Many sellers increase product prices slightly or optimize logistics costs to offset shipping subsidies.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

