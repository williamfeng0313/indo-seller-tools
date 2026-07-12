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
        description="Hitung komisi TikTok Shop, TikTok affiliate commission, modal produk, ongkir, profit bersih, dan margin seller sebelum menjalankan campaign."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Hitung Komisi TikTok Shop
          </h2>

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
              <label className="block mb-2 font-medium">
                Modal Produk
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setProductCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Ongkir
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setShippingCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Komisi Affiliate TikTok Shop %
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
          <h2 className="text-2xl font-semibold mb-8">
            Hasil Perhitungan
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-400">Estimasi Komisi TikTok Shop</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {commission.toFixed(0)}
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

              <h3 className="text-3xl md:text-4xl font-bold">
                {margin}%
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Komisi Affiliate TikTok Shop
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Komisi TikTok Shop adalah biaya yang perlu dihitung seller ketika
          menggunakan affiliate atau creator untuk membantu menjual produk.
          Komisi ini biasanya dihitung berdasarkan persentase dari harga jual
          produk.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          Seller TikTok Shop tidak cukup hanya menghitung harga jual dan modal
          produk. Untuk mengetahui profit bersih, seller juga perlu menghitung
          ongkir, komisi affiliate TikTok Shop, fee platform, voucher, diskon,
          biaya iklan, dan biaya operasional lain.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          TikTok affiliate commission bisa membantu produk mendapatkan lebih
          banyak exposure dan order. Tetapi jika komisi tidak dihitung sejak
          awal, margin profit seller bisa menjadi terlalu tipis.
        </p>

        <div className="mt-8 rounded-2xl bg-gray-50 p-6">
          <p className="font-semibold">
            Rumus sederhana:
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Komisi TikTok Shop = Harga Jual × Persentase Komisi
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Total Biaya = Modal Produk + Ongkir + Komisi TikTok Shop
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Profit = Harga Jual - Total Biaya
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Margin = Profit / Harga Jual
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Kapan Seller Perlu Menghitung Komisi TikTok Shop?
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Seller sebaiknya menghitung komisi TikTok Shop sebelum menentukan
          harga jual, menjalankan campaign affiliate, memberi diskon, atau
          menaikkan budget promosi. Produk yang terlihat ramai order belum
          tentu sehat secara profit jika komisi dan biaya lain tidak dihitung.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          Dengan kalkulator komisi TikTok Shop ini, seller bisa melihat estimasi
          biaya komisi, total biaya, profit bersih, dan margin sebelum membuat
          keputusan promosi.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Pertanyaan Umum</h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Apa itu komisi TikTok Shop?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Komisi TikTok Shop adalah biaya atau persentase yang perlu
              dihitung seller saat menggunakan affiliate, creator, atau program
              promosi tertentu. Komisi ini dapat mempengaruhi profit bersih dan
              margin jualan.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Apa itu TikTok affiliate commission?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              TikTok affiliate commission adalah komisi yang diberikan kepada
              affiliate atau creator ketika mereka membantu menjual produk.
              Seller perlu menghitung komisi ini sebelum menentukan harga jual
              atau menjalankan campaign.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Bagaimana cara menghitung komisi TikTok Shop?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Cara sederhana menghitung komisi TikTok Shop adalah mengalikan
              harga jual produk dengan persentase komisi. Setelah itu, seller
              bisa menambahkan modal produk dan ongkir untuk mengetahui total
              biaya dan profit bersih.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Apakah komisi TikTok Shop mengurangi profit seller?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Ya. Komisi TikTok Shop dapat mengurangi profit seller jika tidak
              dihitung sejak awal. Karena itu seller perlu memastikan harga jual
              masih cukup untuk menutup modal produk, ongkir, komisi, dan biaya
              lain.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              How much is TikTok affiliate commission?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              TikTok affiliate commission can vary depending on the seller,
              product category, campaign, and agreed commission rate. Sellers
              should calculate commission before setting product prices or
              running affiliate promotions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Tools Terkait</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Link
            href="/id/tools/kalkulator-profit-tiktok-shop"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">
              Kalkulator Biaya TikTok Shop
            </h3>

            <p className="mt-4 text-gray-600">
              Hitung TikTok Shop fees, biaya iklan, komisi affiliate, profit,
              dan margin jualan.
            </p>
          </Link>

          <Link
            href="/id/tools/kalkulator-biaya-shopee"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">
              Kalkulator Biaya Shopee
            </h3>

            <p className="mt-4 text-gray-600">
              Hitung biaya admin Shopee, profit bersih, dan margin jualan.
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
              Buat ide judul produk untuk Shopee, TikTok Shop, Tokopedia, dan Lazada.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}