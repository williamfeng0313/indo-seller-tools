import Link from "next/link";
import ToolCard from "@/components/ToolCard";

export const metadata = {
  title: "All Ecommerce Seller Tools - Indo Seller Tools",
  description:
    "Browse all free ecommerce seller tools for Shopee, TikTok Shop, Tokopedia, and Lazada sellers. Calculate fees, profit, ROI, commission, margin, and product titles.",
  alternates: {
    canonical: "https://indosellertools.com/categories/ecommerce-tools",
  },
};

export default function EcommerceToolsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back to Home
        </Link>

        <h1 className="mt-10 text-5xl font-bold">
          All Ecommerce Seller Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-8">
          Free calculators and tools for Shopee, TikTok Shop, Tokopedia, and
          Lazada sellers in Indonesia. Calculate marketplace fees, profit,
          commission, ROI, margin, shipping costs, discounts, and product title
          ideas.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link
            href="/categories/calculators"
            className="rounded-xl border px-5 py-3 hover:bg-gray-50"
          >
            Browse Calculators →
          </Link>

          <Link
            href="/id/tools"
            className="rounded-xl border px-5 py-3 hover:bg-gray-50"
          >
            Bahasa Indonesia Tools →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold">
          TikTok Shop Tools
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard
            title="TikTok Profit Calculator"
            description="Calculate your real TikTok Shop profit margin."
            href="/tools/tiktok-profit-calculator"
          />

          <ToolCard
            title="TikTok Affiliate Calculator"
            description="Calculate TikTok affiliate commissions instantly."
            href="/tools/tiktok-affiliate-calculator"
          />

          <ToolCard
            title="TikTok Commission Calculator Indonesia"
            description="Calculate TikTok Shop commission fees and seller profit instantly."
            href="/tools/tiktok-commission-calculator"
          />

          <ToolCard
            title="TikTok Shop Fee Calculator"
            description="Calculate TikTok Shop seller fees and net profit instantly."
            href="/tools/tiktok-shop-fee-calculator"
          />

          <ToolCard
            title="TikTok Shop Profit Calculator Indonesia"
            description="Free TikTok Shop profit calculator for Indonesian sellers."
            href="/tools/tiktok-shop-profit-calculator"
          />

          <ToolCard
            title="TikTok Shop Margin Calculator Indonesia"
            description="Free TikTok Shop margin calculator for Indonesian sellers."
            href="/tools/tiktok-shop-margin-calculator"
          />

          <ToolCard
            title="TikTok Live Profit Calculator Indonesia"
            description="Free TikTok Live profit calculator for Indonesian sellers."
            href="/tools/tiktok-live-profit-calculator"
          />

          <ToolCard
            title="TikTok Live ROI Calculator"
            description="Calculate TikTok Live ROI and profitability instantly."
            href="/tools/tiktok-live-roi-calculator"
          />

          <ToolCard
            title="TikTok Margin Calculator Indonesia"
            description="Calculate TikTok seller margins instantly."
            href="/tools/tiktok-margin-calculator"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">
          Shopee Tools
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard
            title="Shopee Fee Calculator"
            description="Calculate Shopee fees, seller costs, profit, and margin."
            href="/tools/shopee-fee-calculator"
          />

          <ToolCard
            title="Shopee Commission Calculator Indonesia"
            description="Free Shopee commission calculator for Indonesian sellers."
            href="/tools/shopee-commission-calculator"
          />

          <ToolCard
            title="Shopee Affiliate Calculator"
            description="Calculate Shopee affiliate commissions instantly."
            href="/tools/shopee-affiliate-calculator"
          />

          <ToolCard
            title="Shopee ROI Calculator"
            description="Calculate Shopee ROI and profitability instantly."
            href="/tools/shopee-roi-calculator"
          />

          <ToolCard
            title="Shopee Ads ROI Calculator"
            description="Calculate Shopee advertising ROI instantly."
            href="/tools/shopee-ads-roi-calculator"
          />

          <ToolCard
            title="Shopee COD Calculator"
            description="Calculate Shopee COD fees and seller profit instantly."
            href="/tools/shopee-cod-calculator"
          />

          <ToolCard
            title="Shopee Live ROI Calculator"
            description="Calculate Shopee Live ROI fees and seller profit instantly."
            href="/tools/shopee-live-roi-calculator"
          />

          <ToolCard
            title="Shopee Live Profit Calculator"
            description="Calculate Shopee Live selling profit and livestream costs."
            href="/tools/shopee-live-profit-calculator"
          />

          <ToolCard
            title="Shopee Live Margin Calculator"
            description="Calculate Shopee Live seller margins instantly."
            href="/tools/shopee-live-margin-calculator"
          />

          <ToolCard
            title="Shopee Discount Calculator"
            description="Calculate Shopee discounts and seller margins instantly."
            href="/tools/shopee-discount-calculator"
          />

          <ToolCard
            title="Shopee Free Shipping Calculator"
            description="Calculate Shopee free shipping costs and seller margins."
            href="/tools/shopee-free-shipping-calculator"
          />

          <ToolCard
            title="Shopee Title Generator"
            description="Generate SEO-friendly product titles with AI."
            href="/tools/product-title-generator"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">
          Lazada, Tokopedia, and Customer Tools
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard
            title="Lazada Fee Calculator"
            description="Calculate Lazada seller fees instantly."
            href="/tools/lazada-fee-calculator"
          />

          <ToolCard
            title="Tokopedia Fee Calculator"
            description="Calculate Tokopedia seller fees instantly."
            href="/tools/tokopedia-fee-calculator"
          />

          <ToolCard
            title="WhatsApp Reply Generator"
            description="Reply to customers using AI-generated responses."
            href="/tools/whatsapp-reply-generator"
          />

          <ToolCard
            title="Product Title Generator"
            description="Generate better product title ideas for Shopee, TikTok Shop, Tokopedia, and Lazada."
            href="/tools/product-title-generator"
          />
        </div>
      </section>
    </main>
  );
}