import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Komisi Shopee Indonesia - Hitung Biaya Komisi",
  description:
    "Kalkulator komisi Shopee gratis untuk seller Indonesia. Hitung biaya komisi Shopee dan estimasi pendapatan setelah komisi.",
  alternates: {
    canonical: "https://indosellertools.com/id/tools/kalkulator-komisi-shopee",
    languages: {
      en: "https://indosellertools.com/tools/shopee-commission-calculator",
      id: "https://indosellertools.com/id/tools/kalkulator-komisi-shopee",
    },
  },
};

export default function Page() {
  return <Calculator />;
}