import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Biaya TikTok Shop Indonesia - Hitung Fee, Komisi & Profit",
  description:
    "Kalkulator biaya TikTok Shop untuk seller Indonesia. Hitung TikTok Shop fees, fee platform, komisi affiliate, biaya iklan, modal produk, profit bersih, dan margin jualan.",
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