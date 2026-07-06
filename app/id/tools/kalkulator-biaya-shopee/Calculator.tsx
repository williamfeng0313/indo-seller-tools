"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import FAQSection from "@/components/FAQSection";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [feePercent, setFeePercent] = useState(0);

  const shopeeFee = (price * feePercent) / 100;

  const totalCost =
    productCost + shippingCost + packagingCost + shopeeFee;

  const profit = price - totalCost;

  const margin =
    price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <CalculatorLayout
      title="Kalkulator Biaya Shopee"
      description="Hitung biaya Shopee, profit bersih, dan margin jualan dengan cepat."
    >
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Masukkan Biaya</h2>

          <div className="space-y-5">
            <InputField label="Harga Jual Produk" onChange={setPrice} />
            <InputField label="Modal Produk" onChange={setProductCost} />
            <InputField label="Ongkir" onChange={setShippingCost} />
            <InputField label="Biaya Packing" onChange={setPackagingCost} />
            <InputField label="Fee Shopee %" onChange={setFeePercent} />
          </div>
        </div>

        <div className="border rounded-2xl p-8 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-8">Hasil Profit</h2>

          <div className="space-y-6">
            <ResultCard label="Profit Bersih" value={`Rp ${profit.toFixed(0)}`} />
            <ResultCard label="Margin Profit" value={`${margin}%`} />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Biaya Shopee
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Seller Shopee di Indonesia tidak cukup hanya melihat harga jual dan
          modal produk. Untuk mengetahui profit sebenarnya, seller perlu
          menghitung fee Shopee, ongkir, biaya packing, dan biaya operasional
          lainnya. Banyak toko Shopee terlihat ramai order, tetapi profit kecil
          karena biaya marketplace tidak dihitung sejak awal.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Rumus sederhana:
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Profit = Harga Jual - Modal Produk - Ongkir - Biaya Packing - Fee Shopee
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Margin = Profit / Harga Jual
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
       <h2 className="text-3xl font-bold">Tools Terkait</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
     <a
      href="/id/tools/kalkulator-komisi-shopee"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
     >
      <h3 className="text-2xl font-semibold">
        Kalkulator Komisi Shopee
      </h3>
      <p className="mt-4 text-gray-600">
        Hitung komisi Shopee dan estimasi pendapatan setelah komisi.
      </p>
     </a>

     <a
      href="/id/tools/kalkulator-profit-tiktok-shop"
      className="border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold">
        Kalkulator Profit TikTok Shop
      </h3>
      <p className="mt-4 text-gray-600">
        Hitung profit TikTok Shop, biaya iklan, affiliate, dan margin.
      </p>
    </a>
       </div>
    </section>

      <FAQSection
        faqs={[
          {
            question: "Berapa biaya Shopee untuk seller?",
            answer:
              "Biaya Shopee bisa berbeda tergantung kategori produk, program gratis ongkir, komisi, dan biaya transaksi. Seller perlu menghitung semua biaya sebelum menentukan harga jual.",
          },
          {
            question: "Bagaimana cara meningkatkan margin profit di Shopee?",
            answer:
              "Seller bisa meningkatkan margin dengan mengontrol modal produk, ongkir, biaya packing, diskon, voucher, dan fee platform agar profit bersih tetap sehat.",
          },
        ]}
      />
    </CalculatorLayout>
  );
}