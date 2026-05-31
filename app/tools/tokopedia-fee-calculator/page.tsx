import type { Metadata } from "next";

import TokopediaFeeCalculator from "./Calculator";

export const metadata: Metadata = {
  title: "Tokopedia Fee Calculator Indonesia",
  
  description:
    "Free Tokopedia Fee Calculator for Indonesian sellers. Calculate Tokopedia commissions, marketplace fees and net profit instantly.",
};

export default function Page() {
  return <TokopediaFeeCalculator />;
}