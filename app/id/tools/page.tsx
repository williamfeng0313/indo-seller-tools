import Link from "next/link";

export const metadata = {
  title: "Tools Seller Online Indonesia - Indo Seller Tools",
  description:
    "Kumpulan tools gratis untuk seller online Indonesia. Hitung biaya Shopee, profit jualan, margin produk, dan optimasi marketplace.",
  alternates: {
    canonical: "https://indosellertools.com/id/tools",
    languages: {
      en: "https://indosellertools.com/categories/ecommerce-tools",
      id: "https://indosellertools.com/id/tools",
    },
  },
};

export default function IndonesianToolsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <div className="mb-10 flex justify-between items-center">
          <Link href="/id" className="text-sm text-gray-500 hover:text-black">
            ← Beranda
          </Link>

          <Link
            href="/categories/ecommerce-tools"
            className="text-sm text-gray-500 hover:text-black"
          >
            English tools →
          </Link>
        </div>

        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tools untuk Seller Online Indonesia
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Gunakan tools gratis untuk menghitung biaya marketplace, profit,
            margin, dan kebutuhan operasional seller Shopee, TikTok Shop,
            Tokopedia, dan Lazada.
          </p>
        </section>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <Link
            href="/id/tools/kalkulator-biaya-shopee"
            className="border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              Kalkulator Biaya Shopee
            </h2>

            <p className="mt-3 text-gray-600 leading-7">
              Hitung fee Shopee, modal produk, ongkir, biaya packing, profit
              bersih, dan margin jualan.
            </p>

            <p className="mt-5 text-sm font-medium">Buka tool →</p>
          </Link>

          <Link
            href="/id/tools/kalkulator-komisi-tiktok"
            className="border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              Kalkulator Komisi TikTok
            </h2>

            <p className="mt-3 text-gray-600 leading-7">
              Hitung komisi TikTok Shop, biaya platform, profit bersih, dan
              margin jualan.
            </p>

            <p className="mt-5 text-sm font-medium">Buka tool →</p>
          </Link>

          <Link
            href="/id/tools/generator-judul-produk"
            className="border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              Generator Judul Produk
            </h2>

            <p className="mt-3 text-gray-600 leading-7">
              Buat judul produk yang lebih rapi dan menarik untuk Shopee,
              TikTok Shop, Tokopedia, dan Lazada.
            </p>

            <p className="mt-5 text-sm font-medium">Buka tool →</p>
          </Link>
        </section>
      </section>
    </main>
  );
}