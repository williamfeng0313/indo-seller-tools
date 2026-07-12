import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Komisi TikTok Shop Indonesia - Hitung Affiliate Commission",
  description:
    "Kalkulator komisi TikTok Shop untuk seller Indonesia. Hitung TikTok affiliate commission, biaya komisi, total biaya, profit bersih, dan margin jualan.",
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