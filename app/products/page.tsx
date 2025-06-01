import { Team2 } from "@/components/team2";
import products from '../../data/products.json'
import { Metadata } from "next";
import properties from "@/data/properties.json"
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="text-center w-full min-h-[80vh] flex flex-col place-items-center justify-center font-bold tracking-tight text-xl">
            <img src="/spinner.svg" width={96} />
            <span className="mt-[-20px]">Loading product details...</span>
          </div>
        }
      >
        <Team2
          products={products}
        />
      </Suspense>
    </>
  );
}


export const metadata: Metadata = {
  title: "Products - Air Oil Filters, Separators | Kenrax",
  description: "Explore Kenrax's wide range of OEM replacement air filters, oil filters, air-oil separators, and hydraulic filters for industrial air compressors including Atlas Copco, Ingersoll Rand, Elgi, CP, Kaeser, and more. Built for performance and reliability.",
  keywords: [
    "Air Filters for Compressors",
    "Oil Filters for Air Compressors",
    "Air Oil Separators",
    "Hydraulic Filters for Compressors",
    "Compressed Air Filters",
    "Atlas Copco Replacement Air Filters",
    "Atlas Copco Replacement Oil Filters",
    "Atlas Copco Replacement Air Oil Separators",
    "Ingersoll Rand Replacement Air Filters",
    "Ingersoll Rand Replacement Oil Filters",
    "Ingersoll Rand Replacement Air Oil Separators",
    "Elgi Replacement Air Filters",
    "Elgi Replacement Oil Filters",
    "Elgi Replacement Air Oil Separators",
    "Kaeser Replacement Air Filters",
    "Kaeser Replacement Oil Filters",
    "Kaeser Replacement Air Oil Separators",
    "CP Replacement Air Filters",
    "CP Replacement Oil Filters",
    "CP Replacement Air Oil Separators",
    "Kirloskar Replacement Air Filters",
    "Kirloskar Replacement Oil Filters",
    "Donaldson Replacement Air Filters",
    "Mann Replacement Air Filters",
    "Gardner Denver Replacement Air Filters",
    "Gardner Denver Replacement Oil Filters",
    "Chicago Pneumatic Replacement Filters",
    "OEM Replacement Air Filters",
    "OEM Replacement Oil Filters",
    "Air Compressor Filter Replacement",
    "Air Compressor Spare Parts India",
    "Air Compressor Filter Manufacturer"
  ],
  openGraph: {
    url: "https://kenrax.in/products",
    type: "website",
    title: "Products - Air Oil Filters, Separators | Kenrax",
    description: "Explore Kenrax's wide range of OEM replacement air filters, oil filters, air-oil separators, and hydraulic filters for industrial air compressors including Atlas Copco, Ingersoll Rand, Elgi, CP, Kaeser, and more. Built for performance and reliability.",
    images: [
      {
        url: `https://kenrax.in/og_image.png`,
        width: 640,
        height: 800,
        alt: "Kenrax"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - Air Oil Filters, Separators | Kenrax",
    description: "Explore Kenrax's wide range of OEM replacement air filters, oil filters, air-oil separators, and hydraulic filters for industrial air compressors including Atlas Copco, Ingersoll Rand, Elgi, CP, Kaeser, and more. Built for performance and reliability.",
    images: [
      {
        url: `https://kenrax.in/og_image.png`,
        width: 640,
        height: 800,
        alt: "Kenrax"
      }
    ]
  },
  alternates: {
    canonical: "https://kenrax.in/products"
  }
};
