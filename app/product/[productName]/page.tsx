import { Careers4 } from "@/components/careers4"
import { Hero3 } from "@/components/hero3"

export default async function Page({
  params,
}: {
  params: Promise<{ productName: string }>
}) {
  const { productName } = await params
  return <div>
    <Hero3 productName={productName}/>
    <Careers4/>
    </div>
}