"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [commissionPercent, setCommissionPercent] = useState(0);

  const commission = (price * commissionPercent) / 100;

  const totalCost = productCost + shippingCost + commission;

  const profit = price - totalCost;

  const margin = price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Link href="/id/tools" className="text-sm text-gray-500 hover:text-black">
        ← Kembali ke Tools
      </Link>

      <ToolHero
        title="Kalkulator Komisi TikTok Shop"
        description="Hitung komisi TikTok Shop, profit bersih, dan margin jualan dengan cepat."
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
                onChange={(e) => setProductCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Ongkir</label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setShippingCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Komisi TikTok Shop %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setCommissionPercent(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-8 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-8">Hasil Perhitungan</h2>

          <div className="space-y-6">
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

            <div>
              <p className="text-gray-400">Estimasi Komisi</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {commission.toFixed(0)}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Komisi TikTok Shop
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Seller TikTok Shop tidak cukup hanya melihat harga jual dan modal
          produk. Untuk mengetahui profit sebenarnya, seller perlu menghitung
          komisi platform, ongkir, modal produk, dan biaya lain yang muncul
          saat menjual produk.
        </p>

        <p className="mt-6 text-gray-700 leading-8">Rumus sederhana:</p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Profit = Harga Jual - Modal Produk - Ongkir - Komisi TikTok Shop
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Margin = Profit / Harga Jual
        </p>
      </section>
    </main>
  );
}