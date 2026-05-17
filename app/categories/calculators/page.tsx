
import ToolCard from "@/components/ToolCard";

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          Ecommerce Seller Calculators
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Free calculators for Shopee, TikTok Shop,
          Tokopedia and Lazada sellers in Indonesia.
        </p>

      </section>

      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-6">

        <ToolCard
          title="Shopee Fee Calculator"
          description="Calculate Shopee seller fees instantly."
          href="/tools/shopee-fee-calculator"
        />

        <ToolCard
          title="Tokopedia Fee Calculator"
          description="Calculate Tokopedia seller fees instantly."
          href="/tools/tokopedia-fee-calculator"
        />

        <ToolCard
          title="Lazada Fee Calculator"
          description="Calculate Lazada seller fees instantly."
          href="/tools/lazada-fee-calculator"
        />

        <ToolCard
          title="TikTok Profit Calculator"
          description="Calculate TikTok Shop profit instantly."
          href="/tools/tiktok-profit-calculator"
        />

        <ToolCard
          title="TikTok Affiliate Calculator"
          description="Calculate TikTok affiliate commissions instantly."
          href="/tools/tiktok-affiliate-calculator"
        />

        <ToolCard
          title="Shopee Ads ROI Calculator"
          description="Calculate Shopee advertising ROI instantly."
          href="/tools/shopee-ads-roi-calculator"
        />

      </section>

    </main>
  );
}
