"use client";

import ToolHero from "@/components/ToolHero";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [commissionPercent, setCommissionPercent] = useState(0);

  const commission = (price * commissionPercent) / 100;
  const finalRevenue = price - commission;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Link href="/id/tools" className="text-sm text-gray-500 hover:text-black">
        ← Kembali ke Tools
      </Link>

      <ToolHero
        title="Kalkulator Komisi Shopee"
        description="Hitung komisi Shopee dan estimasi pendapatan setelah komisi dengan cepat."
      />

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Masukkan Data Komisi
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
                Komisi Shopee %
              </label>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setCommissionPercent(Number(e.target.value))
                }
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
              <p className="text-gray-400">Biaya Komisi</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {commission.toFixed(0)}
              </h3>
            </div>

            <div>
              <p className="text-gray-400">Pendapatan Setelah Komisi</p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Rp {finalRevenue.toFixed(0)}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold">
          Cara Menghitung Komisi Shopee
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Komisi Shopee adalah salah satu biaya yang perlu diperhitungkan oleh
          seller sebelum menentukan harga jual. Jika komisi tidak dihitung dari
          awal, pendapatan bersih bisa lebih kecil dari perkiraan.
        </p>

        <p className="mt-6 text-gray-700 leading-8">Rumus sederhana:</p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Komisi = Harga Jual × Persentase Komisi
        </p>

        <p className="mt-4 text-gray-900 font-semibold leading-8">
          Pendapatan Setelah Komisi = Harga Jual - Komisi
        </p>
      </section>
    </main>
  );
}