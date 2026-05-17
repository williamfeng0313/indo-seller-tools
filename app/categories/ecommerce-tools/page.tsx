

import ToolCard from "../../components/ToolCard";

export default function EcommerceToolsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <section className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold">
          Ecommerce Seller Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Free AI tools and calculators for Shopee, TikTok Shop,
          Tokopedia and Lazada sellers in Indonesia.
        </p>

      </section>

      <section className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">

        <ToolCard
          title="TikTok Profit Calculator"
          description="Calculate your real TikTok Shop profit margin."
          href="/tools/tiktok-profit-calculator"
        />

        <ToolCard
          title="Shopee Fee Calculator"
          description="Calculate Shopee commissions and seller profit instantly."
          href="/tools/shopee-fee-calculator"
        />

        <ToolCard
          title="Shopee Title Generator"
          description="Generate SEO-friendly product titles with AI."
          href="/tools/product-title-generator"
        />

        <ToolCard
          title="WhatsApp Reply Generator"
          description="Reply to customers using AI-generated responses."
          href="/tools/whatsapp-reply-generator"
        />
        
        <ToolCard
          title="Shopee ROI Calculator"
          description="Calculate Shopee ROI and profitability instantly."
          href="/tools/shopee-roi-calculator"
        />
        
        <ToolCard
           title="Shopee Affiliate Calculator"
           description="Calculate Shopee affiliate commissions instantly."
           href="/tools/shopee-affiliate-calculator"
         />
        
        
        <ToolCard
           title="Tokopedia Fee Calculator"
           description="Calculate Tokopedia seller fees instantly."
           href="/tools/tokopedia-fee-calculator"
        />



      </section>

    </main>
  );
}

