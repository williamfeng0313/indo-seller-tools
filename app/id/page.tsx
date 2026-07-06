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
      <section className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-black">
            ← English version
          </Link>

          <Link
            href="/id/tools"
            className="text-sm text-gray-500 hover:text-black"
          >
            Semua tools →
          </Link>
        </div>

        <section className="text-center py-16">
          <p className="text-sm font-medium text-gray-500 mb-4">
            Untuk seller Shopee, TikTok Shop, Tokopedia, dan Lazada
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tools Gratis untuk Seller Online Indonesia
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Hitung biaya marketplace, profit jualan, margin produk, dan buat
            judul produk sebelum listing atau menjalankan promosi.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/id/tools/kalkulator-biaya-shopee"
              className="rounded-xl bg-black text-white px-6 py-3 font-medium hover:bg-gray-800"
            >
              Hitung Biaya Shopee
            </Link>

            <Link
              href="/id/tools/kalkulator-profit-tiktok-shop"
              className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
            >
              Hitung Profit TikTok
            </Link>

            <Link
              href="/id/tools"
              className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
            >
              Lihat Semua Tools
            </Link>
          </div>
        </section>

        <section className="mt-10 bg-gray-50 rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold">
            Omzet Bukan Profit
          </h2>

          <p className="mt-5 text-gray-700 leading-8">
            Banyak seller online terlihat ramai order, tetapi profit bersihnya
            kecil karena biaya seperti ongkir, packing, fee marketplace, iklan,
            voucher, dan komisi affiliate tidak dihitung sejak awal.
          </p>

          <p className="mt-5 text-xl font-semibold">
            Profit = Harga Jual - Semua Biaya
          </p>
        </section>

        <section className="mt-20">
          <div className="flex justify-between items-end gap-4 flex-wrap mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                Tools untuk Seller Indonesia
              </h2>

              <p className="mt-3 text-gray-600">
                Pilih tool sesuai kebutuhan jualan kamu.
              </p>
            </div>

            <Link
              href="/id/tools"
              className="text-sm font-medium underline"
            >
              Lihat semua tools →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/id/tools/kalkulator-biaya-shopee"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">Shopee</p>

              <h3 className="text-xl font-semibold">
                Kalkulator Biaya Shopee
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Hitung fee Shopee, modal produk, ongkir, biaya packing, profit,
                dan margin jualan.
              </p>

              <p className="mt-5 text-sm font-medium">Buka tool →</p>
            </Link>

            <Link
              href="/id/tools/kalkulator-profit-tiktok-shop"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">TikTok Shop</p>

              <h3 className="text-xl font-semibold">
                Kalkulator Profit TikTok Shop
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Hitung modal produk, ongkir, biaya iklan, komisi affiliate,
                total biaya, dan margin.
              </p>

              <p className="mt-5 text-sm font-medium">Buka tool →</p>
            </Link>

            <Link
              href="/id/tools/generator-judul-produk"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">Marketplace SEO</p>

              <h3 className="text-xl font-semibold">
                Generator Judul Produk
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Buat ide judul produk untuk Shopee, TikTok Shop, Tokopedia, dan
                Lazada.
              </p>

              <p className="mt-5 text-sm font-medium">Buka tool →</p>
            </Link>

            <Link
              href="/id/tools/kalkulator-komisi-shopee"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">Shopee</p>

              <h3 className="text-xl font-semibold">
                Kalkulator Komisi Shopee
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Hitung komisi Shopee dan estimasi pendapatan setelah komisi.
              </p>

              <p className="mt-5 text-sm font-medium">Buka tool →</p>
            </Link>

            <Link
              href="/id/tools/kalkulator-biaya-lazada"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">Lazada</p>

              <h3 className="text-xl font-semibold">
                Kalkulator Biaya Lazada
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Hitung fee Lazada, modal produk, ongkir, biaya packing, profit,
                dan margin jualan.
              </p>

              <p className="mt-5 text-sm font-medium">Buka tool →</p>
            </Link>

            <Link
              href="/id/tools/kalkulator-komisi-tiktok"
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">TikTok Shop</p>

              <h3 className="text-xl font-semibold">
                Kalkulator Komisi TikTok
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Hitung komisi TikTok Shop dan estimasi pendapatan setelah
                komisi.
              </p>

              <p className="mt-5 text-sm font-medium">Buka tool →</p>
            </Link>
          </div>
        </section>

        <section className="mt-24 border-t pt-12">
          <h2 className="text-3xl font-bold">
            Kenapa seller perlu menghitung profit?
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            Banyak seller online fokus pada omzet, tetapi lupa menghitung biaya
            marketplace, ongkir, biaya packing, voucher, diskon, iklan, dan
            komisi affiliate. Akibatnya, order terlihat banyak tetapi profit
            sebenarnya kecil.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            Indo Seller Tools dibuat untuk membantu seller Indonesia mengecek
            angka dasar sebelum listing produk, menjalankan promo, atau
            menaikkan budget iklan.
          </p>
        </section>
      </section>
    </main>
  );
}