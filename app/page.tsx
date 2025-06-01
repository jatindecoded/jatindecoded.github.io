import { Contact7 } from "@/components/contact7";
import { Faq5 } from "@/components/faq5";
import { Gallery6 } from "@/components/gallery6";
import { Hero151 } from "@/components/hero151";
import { Logos3 } from "@/components/logos3";
import { Stats8 } from "@/components/stats8";
import { Testimonial10 } from "@/components/testimonial10";
import { Metadata } from "next";
import properties from "@/data/properties.json"

export default function Home() {
  return (
    <>
      <Hero151 />
      <Stats8 />
      <Logos3 />
      <Gallery6 />
      <Testimonial10 />
      <Faq5 />
      <Contact7 />
    </>
  );
}


export const metadata: Metadata = {
  title: "Kenrax - Air Oil Filters, Separators",
  description: "Kenrax is a trusted manufacturer and supplier of OEM replacement air filters, oil filters, air-oil separators, and hydraulic filters for screw air compressors. We deliver high-quality spares compatible with Atlas Copco, Ingersoll Rand, Elgi, CP, Kaeser, and more.",
  keywords: [
    "Air Compressor Filters",
    "Oil Filters for Compressors",
    "Air Oil Separators Manufacturer",
    "Hydraulic Filters for Compressors",
    "Compressor Filter Manufacturer India",
    "OEM Replacement Filters",
    "Atlas Copco Replacement Filters",
    "Ingersoll Rand Replacement Filters",
    "Elgi Replacement Filters",
    "Kaeser Replacement Filters",
    "CP Replacement Filters",
    "Chicago Pneumatic Filters",
    "Kirloskar Replacement Filters",
    "Gardner Denver Filters",
    "Donaldson Filter Alternatives",
    "Mann Filter Replacements",
    "Compressed Air Filter Supplier",
    "Air Compressor Spare Parts India",
    "Kenrax Filters",
    "Kenrax Air Oil Separators"
  ],
  openGraph: {
    url: "https://kenrax.in",
    type: "website",
    title: "Kenrax | Air Compressor Filters Manufacturer & Supplier in India",
    description: "Kenrax is a trusted manufacturer and supplier of OEM replacement air filters, oil filters, air-oil separators, and hydraulic filters for screw air compressors. We deliver high-quality spares compatible with Atlas Copco, Ingersoll Rand, Elgi, CP, Kaeser, and more.",
    images: [
      {
        url: `https://kenrax.in/og_image.png`,
        width: 640,
        height: 800,
        alt: "Kenrax Filters"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrax | Air Compressor Filters Manufacturer & Supplier in India",
    description: "Explore Kenrax's range of OEM replacement air filters, oil filters, separators, and more. Built for reliability and performance across all major air compressor brands.",
    images: [
      {
        url: `https://kenrax.in/og_image.png`,
        width: 640,
        height: 800,
        alt: "Kenrax Filters"
      }
    ]
  }
};
