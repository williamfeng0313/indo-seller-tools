"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [packagingCost, setPackagingCost] = useState(0);
  const [feePercent, setFeePercent] = useState(0);

  const lazadaFee = (price * feePercent) / 100;

  const totalCost =
    productCost + shippingCost + packagingCost + lazadaFee;

  const profit = price - totalCost;

  const margin =
    price > 0 ? ((profit / price) * 100).toFixed(1) : 0;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Link href="/id/tools" className="text-sm text-gray-500 hover:text-black">
        ← Kembali ke Tools
      </Link>

      <ToolHero
        title="Kalkulator Biaya Lazada"
        description="Hitung biaya Lazada, profit bersih, dan margin jualan dengan cepat."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Masukkan Biaya
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
                Biaya Packing
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setPackagingCost(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Fee Lazada %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) => setFeePercent(Number(e.target.value))}
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
              <p className="text-gray-400">Biaya Lazada</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {lazadaFee.toFixed(0)}
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
          Cara Menghitung Biaya Lazada
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Seller Lazada perlu menghitung semua biaya sebelum menentukan harga
          jual produk. Biaya seperti modal produk, ongkir, biaya packing, dan
          fee platform bisa memengaruhi profit bersih.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Banyak seller hanya melihat harga jual dan modal produk. Padahal,
          jika biaya marketplace tidak dihitung sejak awal, margin bisa jauh
          lebih kecil dari perkiraan.
        </p>

        <p className="mt-6 text-gray-700 leading-8">
          Rumus sederhana:
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Profit = Harga Jual - Modal Produk - Ongkir - Biaya Packing - Fee Lazada
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Margin = Profit / Harga Jual
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Pertanyaan Umum
        </h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Berapa biaya Lazada untuk seller?
            </h3>

            <p className="mt-2 text-gray-600">
              Biaya Lazada bisa berbeda tergantung kategori produk, program
              promosi, komisi, dan biaya layanan yang berlaku.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Bagaimana cara meningkatkan margin profit di Lazada?
            </h3>

            <p className="mt-2 text-gray-600">
              Seller bisa meningkatkan margin dengan mengontrol modal produk,
              ongkir, biaya packing, diskon, dan fee platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}