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

  var title = null;
  var description = null
  if (product && product.partNumber) {
    title = (product.partNumber) + (product.type && (" - " + product.type))
  }
  if (product && product.description) {
    description = product.description
  }
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  }
}

