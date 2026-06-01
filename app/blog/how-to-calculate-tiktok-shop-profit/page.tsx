import Link from "next/link";

export const metadata = {
  title: "How To Calculate TikTok Shop Profit",
  description:
    "Learn how to calculate TikTok Shop profit after fees, affiliate commissions, shipping and advertising costs.",
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

      <article className="
        prose
        prose-base
        md:prose-lg
        max-w-none
        mt-8
      ">

        <h1>How To Calculate TikTok Shop Profit</h1>

        <p>
          Revenue is not profit.
        </p>

        <p>
          Many TikTok Shop sellers focus on sales volume but fail to track
          the true cost of selling. Understanding profit is essential if you
          want to scale sustainably.
        </p>

        <h2>TikTok Shop Profit Formula</h2>

        <p>
          Profit = Selling Price − Total Costs
        </p>

        <h2>What Costs Should Be Included?</h2>

        <ul>
          <li>Product Cost</li>
          <li>TikTok Shop Fees</li>
          <li>Affiliate Commission</li>
          <li>Shipping Subsidies</li>
          <li>Packaging Costs</li>
          <li>Advertising Costs</li>
        </ul>

        <h2>Example Calculation</h2>

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

        <p>
          Profit Margin = 36.7%
        </p>

        <h2>Common Profit Mistakes</h2>

        <ul>
          <li>Ignoring affiliate commissions</li>
          <li>Overusing discounts</li>
          <li>Ignoring shipping costs</li>
          <li>Scaling ads too early</li>
        </ul>

        <h2>Final Thoughts</h2>

        <p>
          Successful TikTok sellers monitor profit every week, not just sales.
        </p>

        <p>
          A profitable store grows faster than a store chasing revenue alone.
        </p>

        <h2>Related Tools</h2>

        <ul>
          <li>
            <Link href="/tools/tiktok-shop-profit-calculator">
              TikTok Shop Profit Calculator
            </Link>
          </li>

          <li>
            <Link href="/tools/tiktok-shop-fee-calculator">
              TikTok Shop Fee Calculator
            </Link>
          </li>

          <li>
            <Link href="/tools/tiktok-live-roi-calculator">
              TikTok Live ROI Calculator
            </Link>
          </li>
        </ul>

      </article>

    </main>
  );
}