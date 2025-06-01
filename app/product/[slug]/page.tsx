// app/product/[slug]/page.tsx
import { Careers4 } from "@/components/careers4";
import { Hero3 } from "@/components/hero3";
import products from "../../../data/products.json";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import Home from "@/app/products/page";
import { Metadata, ResolvingMetadata } from "next";
import properties from "@/data/properties.json"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}
export default async function Page({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(
    (p) => toKebabCase(p.partNumber) === slug
  ) ?? null;

  if (!product) {
    return Home();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.partNumber,
    "description": product.description,
    "sku": product.partNumber,
    "brand": {
      "@type": "Brand",
      "name": product.OEMs.join(", ") || "Kenrax"
    },
    "image": `https://kenrax.in/${product.images[0] || properties["media.homepage.photo.1"].media[0]}`,
    "offers": {
      "@type": "Offer",
      "url": `https://kenrax.in/product/${slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <div>
      <Hero3 product={product} />

      <Careers4 product={product} />
    </div >
  );
}

// synchronous static params—no async keyword
export function generateStaticParams() {
  return products.map((p) => ({
    slug: toKebabCase(p.partNumber),
  }));
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(
    (p) => toKebabCase(p.partNumber) === slug
  ) ?? null;

  if (!product) return {};

  const brand = product.OEMs.join(", ") || "Kenrax";
  const partNumber = product.partNumber;
  const type = product.type || "Filter | Separator";
  const title = `${partNumber} - ${type}`;
  const description = product.description ||
    `Buy ${brand} replacement ${type} - ${partNumber} for industrial air compressors. High-quality, compatible with OEMs.`;

  const keywords = [
    `${brand} Replacement ${type}`,
    `${brand} ${type}`,
    `${partNumber} ${brand}`,
    `${type} for ${brand}`,
    `${partNumber} replacement filter`,
    "Air Compressor Spare Parts",
    "OEM Replacement Filters",
    "Kenrax Filters"
  ];

  const imageUrl = `https://kenrax.in/${product.images[0] || properties["media.homepage.photo.1"].media[0]}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://kenrax.in/product/${slug}`,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 800,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 800,
          alt: title
        }
      ]
    }
  };
}
