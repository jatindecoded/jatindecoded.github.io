import { Team2 } from "@/components/team2";
import products from '../../data/products.json'

export default async function Home() {
  return (
    <>
      <Team2
        // TODO
        fallback=""
        products={products}
      />
    </>
  );
}
