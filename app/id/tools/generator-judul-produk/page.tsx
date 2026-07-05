"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function GeneratorJudulProduk() {
  const [keyword, setKeyword] = useState("");
  const [titles, setTitles] = useState<string[]>([]);

  const generateTitles = () => {
    if (!keyword) return;

    setTitles([
      `🔥 ${keyword} Terlaris 2026 | Kualitas Premium`,
      `⚡ ${keyword} Murah & Berkualitas untuk Shopee`,
      `💎 ${keyword} Best Seller Marketplace Indonesia`,
      `🚀 ${keyword} Viral untuk TikTok Shop`,
      `🎯 ${keyword} COD Gratis Ongkir Hari Ini`,
    ]);
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Link href="/id/tools" className="text-sm text-gray-500 hover:text-black">
        ← Kembali ke Tools
      </Link>

      <ToolHero
        title="Generator Judul Produk"
        description="Buat judul produk yang lebih menarik untuk Shopee, TikTok Shop, Tokopedia, dan Lazada."
      />

      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Keyword Produk</h2>

          <input
            type="text"
            placeholder="Contoh: Sepatu Wanita"
            className="w-full border rounded-xl px-4 py-4"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <button
            onClick={generateTitles}
            className="mt-6 bg-black text-white px-8 py-4 rounded-xl hover:opacity-80 transition"
          >
            Buat Judul Produk
          </button>
        </div>

        <div className="border rounded-2xl p-8 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-6">Hasil Judul</h2>

          <div className="space-y-4">
            {titles.length === 0 ? (
              <p className="text-gray-400">
                Hasil judul produk akan muncul di sini.
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

      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Kenapa Judul Produk Itu Penting?
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Judul produk adalah salah satu faktor penting dalam pencarian di
          Shopee, Tokopedia, Lazada, dan TikTok Shop. Judul yang jelas dan
          mengandung keyword dapat membantu produk lebih mudah ditemukan calon
          pembeli.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Judul produk yang baik biasanya berisi jenis produk, fitur utama,
          ukuran, warna, model, dan kata kunci yang sering dicari pembeli.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Pertanyaan Umum</h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Bagaimana cara membuat judul produk yang bagus?
            </h3>

            <p className="mt-2 text-gray-600">
              Gunakan keyword utama, nama produk, fitur penting, ukuran, warna,
              dan manfaat produk. Hindari judul yang terlalu pendek atau terlalu
              umum.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Platform apa saja yang cocok untuk tool ini?
            </h3>

            <p className="mt-2 text-gray-600">
              Tool ini bisa digunakan untuk membuat judul produk Shopee, TikTok
              Shop, Tokopedia, dan Lazada.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}