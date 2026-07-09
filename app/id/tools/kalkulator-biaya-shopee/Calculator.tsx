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
      title="Kalkulator Biaya Admin Shopee"
      description="Hitung biaya admin Shopee, fee marketplace, modal produk, ongkir, biaya packing, profit bersih, dan margin jualan sebelum menentukan harga jual."
    >
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Hitung Biaya Admin Shopee
          </h2>

          <div className="space-y-5">
            <InputField label="Harga Jual Produk" onChange={setPrice} />
            <InputField label="Modal Produk" onChange={setProductCost} />
            <InputField label="Ongkir" onChange={setShippingCost} />
            <InputField label="Biaya Packing" onChange={setPackagingCost} />
            <InputField label="Biaya Admin / Fee Shopee %" onChange={setFeePercent} />
          </div>
        </div>

        <div className="border rounded-2xl p-8 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-8">Hasil Perhitungan</h2>

          <div className="space-y-6">
            <ResultCard
              label="Biaya Admin Shopee"
              value={`Rp ${shopeeFee.toFixed(0)}`}
            />
            <ResultCard
              label="Total Biaya"
              value={`Rp ${totalCost.toFixed(0)}`}
            />
            <ResultCard
              label="Profit Bersih"
              value={`Rp ${profit.toFixed(0)}`}
            />
            <ResultCard
              label="Margin Profit"
              value={`${margin}%`}
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Biaya Admin Shopee
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Biaya admin Shopee adalah salah satu biaya penting yang perlu
          dihitung seller sebelum menentukan harga jual. Selain biaya admin
          atau fee Shopee, seller juga perlu menghitung modal produk, ongkir,
          biaya packing, voucher, diskon, biaya iklan, dan biaya lain agar
          profit bersih tidak terlalu kecil.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Dengan kalkulator biaya admin Shopee ini, seller bisa menghitung
          estimasi total biaya, profit bersih, dan margin jualan sebelum
          listing produk, mengikuti promo, atau menaikkan budget iklan.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Banyak seller Shopee di Indonesia terlihat ramai order, tetapi profit
          kecil karena biaya marketplace tidak dihitung sejak awal. Karena itu,
          kalkulator admin Shopee bisa membantu seller mengecek apakah harga
          jual masih sehat setelah semua biaya dihitung.
        </p>

        <div className="mt-8 rounded-2xl bg-gray-50 p-6">
          <p className="font-semibold">
            Rumus sederhana:
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Profit = Harga Jual - Modal Produk - Ongkir - Biaya Packing - Biaya Admin Shopee
          </p>

          <p className="mt-3 text-gray-900 font-semibold leading-8">
            Margin = Profit / Harga Jual
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">Tools Terkait</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
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
        </div>
      </section>

      <FAQSection
        faqs={[
          {
            question: "Apa itu biaya admin Shopee?",
            answer:
              "Biaya admin Shopee adalah biaya atau fee yang dikenakan kepada seller saat produk terjual. Besarnya biaya bisa berbeda tergantung kategori produk, program marketplace, promo, dan kebijakan Shopee yang berlaku.",
          },
          {
            question: "Bagaimana cara menghitung biaya admin Shopee?",
            answer:
              "Cara sederhana menghitung biaya admin Shopee adalah mengalikan harga jual dengan persentase fee Shopee. Setelah itu, seller perlu menambahkan modal produk, ongkir, biaya packing, voucher, diskon, dan biaya lain untuk mengetahui profit bersih.",
          },
          {
            question: "Berapa biaya Shopee untuk seller?",
            answer:
              "Biaya Shopee bisa berbeda tergantung kategori produk, program gratis ongkir, komisi, biaya transaksi, dan kebijakan platform. Seller perlu menghitung semua biaya sebelum menentukan harga jual.",
          },
          {
            question: "Bagaimana cara meningkatkan margin profit di Shopee?",
            answer:
              "Seller bisa meningkatkan margin dengan mengontrol modal produk, ongkir, biaya packing, diskon, voucher, biaya iklan, dan fee platform agar profit bersih tetap sehat.",
          },
        ]}
      />
    </CalculatorLayout>
  );
}