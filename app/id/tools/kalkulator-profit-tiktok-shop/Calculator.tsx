"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [ads, setAds] = useState(0);
  const [platformFeePercent, setPlatformFeePercent] = useState(0);
  const [affiliate, setAffiliate] = useState(0);

  const platformFee = (price * platformFeePercent) / 100;
  const affiliateFee = (price * affiliate) / 100;

  const totalCost =
    cost + shipping + ads + platformFee + affiliateFee;

  const profit = price - totalCost;

  const margin = price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Link href="/id/tools" className="text-sm text-gray-500 hover:text-black">
        ← Kembali ke Tools
      </Link>

      <ToolHero
        title="Kalkulator Biaya TikTok Shop dan Profit Seller"
        description="Hitung TikTok Shop fees, fee platform, komisi affiliate, biaya iklan, modal produk, profit bersih, dan margin sebelum jualan."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Masukkan Biaya TikTok Shop
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
                onChange={(e) => setCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Ongkir
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setShipping(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Biaya Iklan
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setAds(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Fee TikTok Shop %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setPlatformFeePercent(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Komisi Affiliate TikTok %
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
          <h2 className="text-2xl font-semibold mb-8">
            Hasil Perhitungan
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-400">Fee TikTok Shop</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {platformFee.toFixed(0)}
              </h3>
            </div>

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

              <h3 className="text-3xl md:text-4xl font-bold">
                {margin}%
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Biaya TikTok Shop
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Biaya TikTok Shop adalah salah satu hal penting yang perlu dihitung
          seller sebelum menentukan harga jual. Seller tidak cukup hanya
          menghitung modal produk, karena masih ada ongkir, biaya iklan, fee
          TikTok Shop, komisi affiliate, voucher, diskon, dan biaya operasional
          lain.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          Dengan kalkulator biaya TikTok Shop ini, seller bisa menghitung
          estimasi total biaya, profit bersih, dan margin jualan sebelum
          menjalankan iklan, memakai affiliate, atau ikut campaign marketplace.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          Banyak seller TikTok Shop mendapatkan order besar, tetapi profit tetap
          kecil karena TikTok Shop fees, biaya iklan, dan komisi affiliate tidak
          dihitung sejak awal.
        </p>

        <div className="mt-8 rounded-2xl bg-gray-50 p-6">
          <p className="font-semibold">
            Rumus sederhana:
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Fee TikTok Shop = Harga Jual × Persentase Fee TikTok Shop
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Biaya Affiliate = Harga Jual × Persentase Komisi Affiliate
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Total Biaya = Modal Produk + Ongkir + Biaya Iklan + Fee TikTok Shop + Biaya Affiliate
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Profit = Harga Jual - Total Biaya
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Margin = Profit / Harga Jual
          </p>
        </div>
      </section>
      

      <section className="max-w-4xl mx-auto mt-24 rounded-2xl bg-gray-50 p-8">
        <p className="text-sm font-medium text-gray-500">
          Panduan Terkait
        </p>

       <h2 className="mt-2 text-2xl font-bold">
         Biaya TikTok Shop Seller
       </h2>

       <p className="mt-4 text-gray-700 leading-8">
         Pelajari cara menghitung TikTok Shop fees, komisi affiliate, biaya iklan,
         profit bersih, dan margin sebelum menentukan harga jual.
       </p>

       <Link
         href="/id/blog/biaya-tiktok-shop-seller"
         className="mt-5 inline-block font-medium underline"
       >
         Baca panduan lengkap →
       </Link>
       </section>
       
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Pertanyaan Umum</h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Apa itu biaya TikTok Shop?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Biaya TikTok Shop adalah biaya yang perlu diperhitungkan seller
              saat berjualan, seperti fee platform, komisi affiliate, biaya
              iklan, ongkir, voucher, diskon, dan biaya operasional lain.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Bagaimana cara menghitung TikTok Shop fees?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Cara sederhana menghitung TikTok Shop fees adalah menjumlahkan
              semua biaya yang muncul dalam penjualan, termasuk modal produk,
              ongkir, biaya iklan, fee platform, komisi affiliate, dan biaya
              lain. Setelah itu, kurangi total biaya dari harga jual untuk
              mengetahui profit bersih.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Apa itu komisi affiliate TikTok Shop?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Komisi affiliate TikTok Shop adalah komisi yang diberikan kepada
              affiliate atau creator ketika mereka membantu menjual produk.
              Komisi ini perlu dihitung karena bisa mengurangi margin profit
              seller.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              How much does TikTok Shop take from sellers?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              The amount TikTok Shop takes from sellers can vary depending on
              platform fees, affiliate commission, campaigns, ads, discounts,
              and other selling costs. Sellers should calculate all fees before
              setting product prices or running promotions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Apa margin TikTok Shop yang bagus?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Banyak seller menargetkan margin di atas 20% sampai 30%, tetapi
              angka ideal tergantung kategori produk, biaya iklan, fee TikTok
              Shop, dan komisi affiliate.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Berapa biaya iklan yang ideal untuk TikTok Shop?
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Biaya iklan tergantung kategori produk, kompetisi, harga jual,
              dan target margin. Seller sebaiknya menghitung profit sebelum
              menaikkan budget iklan.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Tools Terkait</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Link
            href="/id/tools/kalkulator-komisi-tiktok"
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">
              Kalkulator Komisi TikTok
            </h3>

            <p className="mt-4 text-gray-600">
              Hitung komisi TikTok Shop dan estimasi pendapatan setelah komisi.
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
        </div>
      </section>
    </main>
  );
}