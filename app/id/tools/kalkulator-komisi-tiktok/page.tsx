import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Komisi TikTok Shop Indonesia - Hitung Profit Jualan",
  description:
    "Kalkulator komisi TikTok Shop gratis untuk seller Indonesia. Hitung komisi, biaya platform, modal produk, profit, dan margin jualan online.",
  alternates: {
    canonical: "https://indosellertools.com/id/tools/kalkulator-komisi-tiktok",
    languages: {
      en: "https://indosellertools.com/tools/tiktok-commission-calculator",
      id: "https://indosellertools.com/id/tools/kalkulator-komisi-tiktok",
    },
  },
};

export default function Page() {
  return <Calculator />;
}