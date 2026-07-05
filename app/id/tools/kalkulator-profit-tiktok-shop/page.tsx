import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Profit TikTok Shop Indonesia - Hitung Margin Jualan",
  description:
    "Kalkulator profit TikTok Shop gratis untuk seller Indonesia. Hitung modal produk, ongkir, biaya iklan, komisi affiliate, profit bersih, dan margin jualan.",
  alternates: {
    canonical: "https://indosellertools.com/id/tools/kalkulator-profit-tiktok-shop",
    languages: {
      en: "https://indosellertools.com/tools/tiktok-profit-calculator",
      id: "https://indosellertools.com/id/tools/kalkulator-profit-tiktok-shop",
    },
  },
};

export default function Page() {
  return <Calculator />;
}