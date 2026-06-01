import Link from "next/link";

export const metadata = {
  title: "How Much Does TikTok Shop Charge Sellers?",
  description:
    "Understand TikTok Shop fees, commissions and seller costs before scaling your ecommerce business.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-black"
      >
        ← Back to Blog
      </Link>

      <article className="prose prose-lg max-w-none mt-8">

        <h1>How Much Does TikTok Shop Charge Sellers?</h1>

        <p>
          Many new sellers focus on revenue but underestimate the actual
          cost of selling on TikTok Shop.
        </p>

        <p>
          Understanding platform fees is critical if you want to maintain
          healthy profit margins.
        </p>

        <h2>Main TikTok Shop Costs</h2>

        <ul>
          <li>Platform Fees</li>
          <li>Transaction Fees</li>
          <li>Affiliate Commissions</li>
          <li>Advertising Costs</li>
          <li>Shipping Subsidies</li>
        </ul>

        <h2>Platform Fee Example</h2>

        <p>
          Suppose you sell a product for Rp100,000.
        </p>

        <p>
          If TikTok charges a 5% platform fee:
        </p>

        <p>
          Platform Fee = Rp5,000
        </p>

        <p>
          Revenue After Fee = Rp95,000
        </p>

        <h2>The Hidden Cost: Affiliates</h2>

        <p>
          For many sellers, affiliate commissions are larger than
          TikTok's platform fees.
        </p>

        <ul>
          <li>10% Commission = Rp10,000</li>
          <li>20% Commission = Rp20,000</li>
          <li>30% Commission = Rp30,000</li>
        </ul>

        <h2>Real Profit Example</h2>

        <ul>
          <li>Selling Price: Rp150,000</li>
          <li>Product Cost: Rp60,000</li>
          <li>TikTok Fee: Rp7,500</li>
          <li>Affiliate Commission: Rp15,000</li>
          <li>Shipping Subsidy: Rp10,000</li>
          <li>Packaging: Rp2,500</li>
        </ul>

        <p>
          Total Cost = Rp95,000
        </p>

        <p>
          Net Profit = Rp55,000
        </p>

        <h2>How To Protect Your Margin</h2>

        <ul>
          <li>Track fees weekly</li>
          <li>Monitor affiliate ROI</li>
          <li>Control discount campaigns</li>
          <li>Calculate profit before scaling</li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          TikTok fees alone rarely destroy profitability.
        </p>

        <p>
          The combination of commissions, discounts, ads and shipping
          is what typically reduces seller margins.
        </p>

      </article>

    </main>
  );
}