import Navbar from "./components/Navbar";

import ToolCard from "./components/ToolCard";

import Link from "next/link";
export default function Home() {
  return (
   <>
    <Navbar />

    <main className="min-h-screen bg-white text-black">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Free AI Tools for Indonesian Sellers
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Boost your TikTok Shop & Shopee sales with free AI-powered tools.
        </p>

        
        <Link
          href="/tools/tiktok-profit-calculator"
          className="bg-black text-white px-8 py-4 rounded-2xl inline-block"
        >
          Try Free Tools
        </Link>
        
        <div className="mt-8">
          <Link
            href="/categories/ecommerce-tools"
            className="text-lg underline"
          >
            Browse All Ecommerce Tools →
          </Link>
        </div>


      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        
      
      <ToolCard
        title="TikTok Profit Calculator"
        description="Calculate your real TikTok Shop profit margin."
        href="/tools/tiktok-profit-calculator"
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
        title="Shopee Fee Calculator"
        description="Calculate Shopee commissions and seller profit instantly."
        href="/tools/shopee-fee-calculator"
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


        <ToolCard
          title="Lazada Fee Calculator"
          description="Calculate Lazada seller fees instantly."
          href="/tools/lazada-fee-calculator"
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

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">
          Why Indonesian Sellers Need AI Tools
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Indonesian e-commerce sellers are facing increasing competition
          on TikTok Shop and Shopee. AI tools can help sellers generate
          better product titles, improve WhatsApp customer replies,
          and calculate real profit margins faster.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-8">

          <div>
            <h3 className="font-semibold text-xl">
              How much does TikTok Shop charge in Indonesia?
            </h3>

            <p className="mt-2 text-gray-600">
              TikTok Shop charges platform fees, affiliate commissions,
              and additional advertising costs depending on the seller setup.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
              Can AI improve Shopee product titles?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. AI can generate keyword-rich product titles
              optimized for Shopee SEO and click-through rates.
            </p>
          </div>

        </div>
      </section>

    </main>
    </>
  );
}
