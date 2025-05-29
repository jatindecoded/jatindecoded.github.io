import { Product, toKebabCase } from "@/scripts/fetchNotionProducts"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button";
import properties from "../data/properties.json"

export default function ProductCard({ product, descMaxLength = 80 }: { product: Product, descMaxLength?: number }) {

	const truncatedDescription = () => {
		if (!product.description || descMaxLength <= 0 || product.description.length == 0) {
			return ""
		}
		if (product.description?.length ? product.description?.length > descMaxLength : false) {
			return product.description?.substring(0, descMaxLength) + '...';
		}
		return product.description;
	}
	return (
		<a
			href={"/product/" + toKebabCase(product.partNumber)}
			key={product.id} className="flex flex-col lg:items-start items-center h-full" >
			{
				product.images?.[0] ? (
					<img
						src={product.images?.[0]}
						alt={product.partNumber}
						className="w-full aspect-4/5 object-cover rounded-sm mb-4 md:mb-5"
					/>
				) : (
					<FallbackProductImage product={product} />
				)
			}
			<p className="text-muted-foreground text-xs uppercase font-semibold">{product.type}</p>
			<p className="font-bold tracking-tighter" > {product.partNumber}</p>
			<Separator className="my-2" />
			<div className=" w-full grid grid-cols-1 md:grid-cols-2">
				<div className="order-1 md:order-none text-muted-foreground text-xs flex-1 self-end">OEMs</div>
				<div className="order-3 md:order-none text-muted-foreground text-xs flex-1 md:text-right self-end pt-2 md:pt-none">Compatible with</div>
				<div className="order-2 md:order-none flex-1 text-xs font-semibold line-clamp-2">
					{product.OEMs.map((OEM, idx) => {
						return (
							<span key={idx}>{OEM}{idx == product.OEMs.length - 1 ? "" : ", "}</span>
						)
					})}
				</div>
				<div className="order-4 md:order-none flex-1 md:text-right text-xs font-semibold pb-1 md:pb-none line-clamp-2">
					{product.compatibleWith.map((c, idx) => {
						return (
							<p key={idx}>{c}{idx == product.compatibleWith.length - 1 ? "" : ", "}</p>
						)
					})}
				</div>
			</div>
			<div className="w-full">
				<p className="py-1 text-xs text-muted-foreground lg:text-left line-clamp-2">
					{truncatedDescription()}

				</p>
			</div>
			<div className="mt-2 flex flex-col justify-end items-stretch w-full gap-2 flex-1 items-end">
				<Button key={product.id + "1"}>Buy Now</Button>
				<Button key={product.id + "2"} variant={"outline"}>Get Price</Button>
			</div>
		</a>
	)
}

export const FallbackProductImage = ({ product, fallback }: { product: Product, fallback?: string }) => {
	if (!fallback) {
		fallback = properties["media.homepage.photo.1"].media[0]
	}
	return (
		<div className={`w-full aspect-4/5 flex flex-col items-center justify-center rounded-sm text-sm font-bold text-gray-600 mb-4 md:mb-5 uppercase bg-blend-lighten relative`}
			style={{ backgroundImage: `url(${fallback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			<div className="absolute inset-0 bg-white/70" />
			<div className="relative items-center flex flex-col">
				<p>
					{product.type}
				</p>
				<p>
					{product.partNumber}
				</p>
			</div>
		</div>
	)
}