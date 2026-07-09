import Calculator from "./Calculator";

export const metadata = {
  title: "Kalkulator Biaya Admin Shopee Indonesia - Hitung Profit Seller",
  description:
    "Kalkulator biaya admin Shopee untuk seller Indonesia. Hitung fee Shopee, modal produk, ongkir, biaya packing, profit bersih, dan margin jualan online.",
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