// app/product/[slug]/page.tsx
import { Careers4 } from "@/components/careers4";
import { Hero3 } from "@/components/hero3";
import products from "../../../data/products.json";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import Home from "@/app/products/page";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
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
