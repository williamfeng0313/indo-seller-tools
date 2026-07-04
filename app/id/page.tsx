import Link from "next/link";

export const metadata = {
  title: "Tools Gratis untuk Seller Online Indonesia - Indo Seller Tools",
  description:
    "Tools gratis untuk seller online Indonesia. Hitung biaya Shopee, profit TikTok Shop, margin jualan, dan buat judul produk untuk marketplace.",
  alternates: {
    canonical: "https://indosellertools.com/id",
    languages: {
      en: "https://indosellertools.com",
      id: "https://indosellertools.com/id",
    },
  },
};

export default function IndonesianHomePage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-black"
          >
            English version →
          </Link>
        </div>

        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tools Gratis untuk Seller Online Indonesia
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Hitung biaya marketplace, profit jualan, margin produk, dan buat
            judul produk untuk Shopee, TikTok Shop, Tokopedia, dan Lazada.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/id/tools/kalkulator-biaya-shopee"
              className="rounded-xl bg-black text-white px-6 py-3 font-medium hover:bg-gray-800"
            >
              Coba Kalkulator Shopee
            </Link>

            <Link
              href="/tools"
              className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
            >
              Lihat Tools English
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Tools untuk Seller Indonesia
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/id/tools/kalkulator-biaya-shopee"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">
                Kalkulator Biaya Shopee
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                Hitung fee Shopee, modal produk, ongkir, biaya packing,
                profit, dan margin jualan.
              </p>
            </Link>

            <div className="border rounded-2xl p-6 opacity-60">
              <h3 className="text-xl font-semibold">
                Kalkulator Profit TikTok Shop
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                Segera hadir. Hitung profit dan margin produk untuk TikTok Shop.
              </p>
            </div>

            <div className="border rounded-2xl p-6 opacity-60">
              <h3 className="text-xl font-semibold">
                Generator Judul Produk
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                Segera hadir. Buat judul produk yang lebih rapi untuk marketplace.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t pt-12">
          <h2 className="text-3xl font-bold">
            Kenapa seller perlu menghitung profit?
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            Banyak seller online fokus pada omzet, tetapi lupa menghitung biaya
            marketplace, ongkir, biaya packing, voucher, dan diskon. Akibatnya,
            order terlihat banyak tetapi profit sebenarnya kecil.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            Indo Seller Tools dibuat untuk membantu seller Indonesia mengecek
            angka dasar sebelum listing produk atau menjalankan promosi.
          </p>
        </section>
      </section>
    </main>
  );
}