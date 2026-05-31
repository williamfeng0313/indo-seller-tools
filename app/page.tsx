import Navbar from "@/components/Navbar";

import ToolCard from "@/components/ToolCard";

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
    
        
        <div className="mt-8">
          <Link
            href="/categories/calculators"
            className="text-lg underline"
          >
            Browse All Calculators →
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

        <ToolCard
          title="Shopee COD Calculator"
          description="Calculate Shopee COD fees and seller profit instantly."
          href="/tools/shopee-cod-calculator"
        />


        <ToolCard
          title="Shopee live ROI Calculator"
          description="Calculate Shopee live ROI fees and seller profit instantly."
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
           title="Shopee Commission Calculator Indonesia"
           description="Free Shopee commission calculator for Indonesian sellers."
           href="/tools/shopee-commission-calculator"
        />

        <ToolCard
           title="TikTok Live Profit Calculator Indonesia"
           description="Free TikTok live profit calculator for Indonesian sellers."
           href="/tools/tiktok-live-profit-calculator"
        />

        <ToolCard
           title="TikTok Commission Calculator Indonesia"
           description="Calculate TikTok Shop commission fees and seller profit instantly."
           href="/tools/tiktok-commission-calculator"
        />

        <ToolCard
           title="TikTok Live ROI Calculator"
           description="Calculate TikTok Live ROI and profitability instantly."
           href="/tools/tiktok-live-roi-calculator"
        />

        <ToolCard
           title="TikTok Shop Fee Calculator"
           description="Calculate TikTok Shop seller fees and net profit instantly."
           href="/tools/tiktok-shop-fee-calculator"   
        />

        <ToolCard
           title="Tiktok margin Calculator Indonesia"
           description="Calculate Tiktok Live seller margins instantly"
           href="/tools/tiktok-margin-calculator"
        />

        <ToolCard
           title="TikTok Shop Profit Calculator Indonesia"
           description="Free TikTok Shop Profit Calculator for Indonesian sellers."
           href="/tools/tiktok-shop-profit-calculator"
        />

        <ToolCard
           title="TikTok Shop Margin Calculator Indonesia"
           description="Free TikTok Shop Margin Calculator for Indonesian sellers."
           href="/tools/tiktok-shop-margin-calculator"
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

      <section className="max-w-6xl mx-auto mt-24">

      <h2 className="text-3xl font-bold">
       Latest Ecommerce Guides
      </h2>

       <div className="grid md:grid-cols-3 gap-6 mt-8">

      <Link
      href="/blog/how-much-profit-should-shopee-sellers-make"
       className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold">
        How Much Profit Should Shopee Sellers Make?
      </h3>

      <p className="mt-3 text-gray-600">
        Learn the ideal profit margin and ROI targets for Shopee sellers in Indonesia.
      </p>
    </Link>

     </div>

   </section>

    </main>
    </>
  );
}
