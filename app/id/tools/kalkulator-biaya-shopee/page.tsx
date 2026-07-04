import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Biaya Shopee Indonesia - Hitung Profit Jualan",
  description:
    "Kalkulator biaya Shopee gratis untuk seller Indonesia. Hitung fee Shopee, modal produk, ongkir, biaya packing, profit, dan margin jualan online.",
  alternates: {
    canonical: "https://indosellertools.com/id/tools/kalkulator-biaya-shopee",
    languages: {
      en: "https://indosellertools.com/tools/shopee-fee-calculator",
      id: "https://indosellertools.com/id/tools/kalkulator-biaya-shopee",
    },
  },
};

export default function Page() {
  return <Calculator />;
}