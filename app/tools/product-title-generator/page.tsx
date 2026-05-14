
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductTitleGenerator() {
  const [keyword, setKeyword] = useState("");
  const [titles, setTitles] = useState<string[]>([]);

  const generateTitles = () => {
    if (!keyword) return;

    setTitles([
      `🔥 ${keyword} Terlaris 2026 | Kualitas Premium`,
      `⚡ ${keyword} Murah & Berkualitas untuk TikTok Shop`,
      `💎 ${keyword} Best Seller Shopee Indonesia`,
      `🚀 ${keyword} Viral untuk Affiliate TikTok`,
      `🎯 ${keyword} COD Gratis Ongkir Hari Ini`,
    ]);
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      
      <Link
      href="/"
      className="text-sm text-gray-500 hover:text-black"
      >
      ← Back to Home
      </Link>
      
      {/* Hero */}
      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold leading-tight">
          AI Product Title Generator
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Generate high-converting Shopee & TikTok Shop titles instantly.
        </p>

      </section>

      {/* Generator */}
      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Input */}
        <div className="border rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Product Keyword
          </h2>

          <input
            type="text"
            placeholder="Example: Sepatu Wanita"
            className="w-full border rounded-xl px-4 py-4"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <button
            onClick={generateTitles}
            className="mt-6 bg-black text-white px-8 py-4 rounded-xl hover:opacity-80 transition"
          >
            Generate Titles
          </button>

        </div>

        {/* Results */}
        <div className="border rounded-2xl p-8 bg-black text-white">

          <h2 className="text-2xl font-semibold mb-6">
            Generated Titles
          </h2>

          <div className="space-y-4">

            {titles.length === 0 ? (
              <p className="text-gray-400">
                Your AI generated titles will appear here.
              </p>
            ) : (
              titles.map((title, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-xl p-4"
                >
                  {title}
                </div>
              ))
            )}

          </div>

        </div>

      </section>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
          Why Product Titles Matter
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Product titles are one of the most important ranking factors
          for Shopee, Tokopedia, Lazada and TikTok Shop SEO.
          Better product titles improve click-through rate, search visibility
          and conversion rates.
        </p>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-8">

          <div>
            <h3 className="text-xl font-semibold">
              How does AI title generation work?
            </h3>

            <p className="mt-2 text-gray-600">
              AI analyzes keywords and generates optimized ecommerce titles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Which ecommerce platforms are supported?
            </h3>

            <p className="mt-2 text-gray-600">
              Shopee, TikTok Shop, Tokopedia and Lazada.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

