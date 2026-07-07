"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [ads, setAds] = useState(0);
  const [affiliate, setAffiliate] = useState(0);

  const affiliateFee = (price * affiliate) / 100;

  const totalCost = cost + shipping + ads + affiliateFee;

  const profit = price - totalCost;

  const margin = price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Link href="/id/tools" className="text-sm text-gray-500 hover:text-black">
        ← Kembali ke Tools
      </Link>

      <ToolHero
        title="Kalkulator Profit TikTok Shop"
        description="Hitung profit TikTok Shop, biaya iklan, komisi affiliate, dan margin jualan dengan cepat."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Masukkan Biaya</h2>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">
                Harga Jual Produk
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Modal Produk</label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Ongkir</label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setShipping(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Biaya Iklan</label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setAds(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Komisi Affiliate %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setAffiliate(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-8 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-8">Hasil Perhitungan</h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-400">Biaya Affiliate</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {affiliateFee.toFixed(0)}
              </h3>
            </div>

            <div>
              <p className="text-gray-400">Total Biaya</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {totalCost.toFixed(0)}
              </h3>
            </div>

            <div>
              <p className="text-gray-400">Profit Bersih</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {profit.toFixed(0)}
              </h3>
            </div>

            <div>
              <p className="text-gray-400">Margin Profit</p>

              <h3 className="text-3xl md:text-4xl font-bold">{margin}%</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Profit TikTok Shop
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Seller TikTok Shop tidak cukup hanya melihat omzet atau jumlah order.
          Untuk mengetahui profit sebenarnya, seller perlu menghitung modal
          produk, ongkir, biaya iklan, dan komisi affiliate.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Banyak seller terlihat ramai order, tetapi margin kecil karena biaya
          iklan dan affiliate tidak dihitung sejak awal.
        </p>

        <p className="mt-6 text-gray-700 leading-8">Rumus sederhana:</p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Profit = Harga Jual - Modal Produk - Ongkir - Biaya Iklan - Biaya
          Affiliate
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Margin = Profit / Harga Jual
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Pertanyaan Umum</h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Apa margin TikTok Shop yang bagus?
            </h3>

            <p className="mt-2 text-gray-600">
              Banyak seller menargetkan margin di atas 20% sampai 30%, tetapi
              angka ideal tergantung kategori produk, biaya iklan, dan komisi
              affiliate.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Berapa biaya iklan yang ideal untuk TikTok Shop?
            </h3>

            <p className="mt-2 text-gray-600">
              Biaya iklan tergantung kategori produk, kompetisi, harga jual,
              dan target margin. Seller sebaiknya menghitung profit sebelum
              menaikkan budget iklan.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Tools Terkait</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Link
            href="/id/tools/kalkulator-biaya-shopee"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">
              Kalkulator Biaya Shopee
            </h3>

            <p className="mt-4 text-gray-600">
              Hitung biaya Shopee, profit bersih, dan margin jualan.
            </p>
          </Link>

          <Link
            href="/id/tools/generator-judul-produk"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">
              Generator Judul Produk
            </h3>

            <p className="mt-4 text-gray-600">
              Buat judul produk yang lebih rapi untuk marketplace.
            </p>
          </Link>
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto mt-24">
  <h2 className="text-3xl font-bold">Tools Terkait</h2>

  <div className="grid md:grid-cols-3 gap-6 mt-10">
    <a
      href="/id/tools/kalkulator-komisi-tiktok"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold">
        Kalkulator Komisi TikTok
      </h3>

      <p className="mt-4 text-gray-600">
        Hitung komisi TikTok Shop dan estimasi pendapatan setelah komisi.
      </p>
    </a>

    <a
      href="/id/tools/generator-judul-produk"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold">
        Generator Judul Produk
      </h3>

      <p className="mt-4 text-gray-600">
        Buat ide judul produk untuk Shopee, TikTok Shop, Tokopedia, dan Lazada.
      </p>
    </a>

    <a
      href="/id/tools/kalkulator-biaya-shopee"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold">
        Kalkulator Biaya Shopee
      </h3>

      <p className="mt-4 text-gray-600">
        Hitung biaya Shopee, profit bersih, dan margin jualan.
      </p>
    </a>
  </div>
 </section>
    </main>
  );
}