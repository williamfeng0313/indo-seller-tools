import Link from "next/link";

export const metadata = {
  title: "How to Calculate Shopee ROI",
  description:
    "Learn how to calculate Shopee ROI and improve ecommerce profitability.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/">← Back Home</Link>

      <article className="prose prose-lg max-w-none mt-8">
        <h1>How to Calculate Shopee ROI</h1>

        <p>
          ROI is one of the most important metrics for Shopee sellers.
          It measures how much profit you generate from every rupiah invested.
        </p>

        <h2>ROI Formula</h2>

        <p>
          ROI = (Profit ÷ Total Cost) × 100
        </p>

        <h2>Example</h2>

        <p>
          Selling Price: Rp150,000
        </p>

        <p>
          Total Cost: Rp100,000
        </p>

        <p>
          Profit: Rp50,000
        </p>

        <p>
          ROI = 50%
        </p>

        <h2>Why ROI Matters</h2>

        <ul>
          <li>Measures business efficiency</li>
          <li>Helps evaluate ads</li>
          <li>Improves pricing decisions</li>
        </ul>
      </article>
    </main>
  );
}