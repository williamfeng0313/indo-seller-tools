import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Biaya Lazada Indonesia - Hitung Profit Jualan",
  description:
    "Kalkulator biaya Lazada gratis untuk seller Indonesia. Hitung fee Lazada, modal produk, ongkir, biaya packing, profit bersih, dan margin jualan.",
  alternates: {
    canonical: "https://indosellertools.com/id/tools/kalkulator-biaya-lazada",
    languages: {
      en: "https://indosellertools.com/tools/lazada-fee-calculator",
      id: "https://indosellertools.com/id/tools/kalkulator-biaya-lazada",
    },
  },
};

export default function Page() {
  return <Calculator />;
}