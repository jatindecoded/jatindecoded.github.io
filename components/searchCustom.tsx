import { PackageOpen, Search, SearchIcon } from "lucide-react";
import { useRouter } from '@bprogress/next/app';
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { productsPageHref } from "./constants";
import { Button } from "./ui/button";
import products from "@/data/products.json";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

export const SearchCustom = ({ }: {
	// results: Product[];
	// setResults: Dispatch<React.SetStateAction<Product[]>>;
	// activeFilters?: string[];
	// setActiveFilters?: Dispatch<React.SetStateAction<String[]>>;

}) => {
	const searchParams = useSearchParams();
	const name = searchParams.get('name');
	// const [searchQuery, setSearchQuery] = useState('');
	const router = useRouter();

	const [open, setOpen] = useState(false)
	const [query, setQuery] = useState("");


	const onSubmitQuery = () => {
		router.push(productsPageHref + (query !== "" ? ("?name=" + query) : ""))
	}


	// const handleToggle = (filter: string) => {
	// 	if (!activeFilters || !setActiveFilters) {
	// 		return;
	// 	}
	// 	setActiveFilters(prev =>
	// 		prev.includes(filter)
	// 			? prev.filter(f => f !== filter)
	// 			: [...prev, filter]
	// 	);
	// };

	// const fuse = useMemo(() => {
	// 	return new Fuse(products, {
	// 		keys: ['partNumber', 'type', 'OEM', 'compatibleWith'],
	// 		threshold: 0.2, // adjust for fuzziness (0 = exact, 1 = very fuzzy)
	// 	});
	// }, [products]);


	// useEffect(() => {
	// 	setResults(
	// 		searchQuery
	// 			? fuse
	// 				.search(searchQuery)
	// 				.map(result => result.item)
	// 				.filter(product =>
	// 					(!activeFilters || activeFilters.length === 0) ? true : activeFilters.includes(product.type.toLowerCase())
	// 				)
	// 			: products.filter(product =>
	// 				(!activeFilters || activeFilters.length === 0) ? true : activeFilters.includes(product.type.toLowerCase())
	// 			)
	// 	)
	// }, [searchQuery])

	return (
		<div className="relative mb-6 h-[36px] relative flex justify-center gap-1">
			{/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-3 w-3" />
			<Input
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search for a product. (Eg. B006700770010)"
				className="px-8 text-xs!" />
			<Button className="absolute right-0.5 top-1/2 -translate-y-1/2" size={'sm'} type="submit">Search</Button> */}

			<Popover open={open} onOpenChange={setOpen} >
				<PopoverTrigger asChild className="h-full">
					<Button
						variant="input"
						role="combobox"
						aria-expanded={open}
						className="w-[80vw] max-w-[600px] justify-start"
					>
						<SearchIcon className="size-4 shrink-0 opacity-50" />

						{query || "Search products..."}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					sideOffset={-36}
					className="w-[80vw] max-w-[600px] p-0 animate-[wiggle_10s_ease-in-out_infinite]!"
					avoidCollisions={false}
				>
					<Command
						filter={(value, search, keywords) => {
							const searchValue =
								keywords && keywords.length > 0 ? keywords.join(" ") : value;

							return searchValue.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
						}}
					>
						<CommandInput
							value={query}
							onValueChange={setQuery}
							placeholder="Search products..." className="h-9" />
						<CommandList>
							<CommandEmpty>No products found.</CommandEmpty>
							<CommandGroup>
								{products.map((product, idx) => (
									<CommandItem
										key={idx}
										value={idx.toString()}
										keywords={[product.partNumber, product.type]}
										// value={product.partNumber + " - " + product.type}
										onSelect={(currentValue) => {
											setOpen(false)
											router.push(product.url)
										}}
										className="font-semibold"
									>
										<Link href={product.url} className="flex gap-4 w-full justify-between">
											<div className="flex gap-2 items-center">
												<PackageOpen />
												<span>
													{product.partNumber}
												</span>
											</div>
											<span className="text-xs uppercase text-muted-foreground font-normal">
												{product.type}
											</span>
										</Link>
										{/* <Check
											className={cn(
												"ml-auto",
												searchQuery === product.partNumber ? "opacity-100" : "opacity-0"
											)}
										/> */}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<Button
				className="h-full"
				onClick={onSubmitQuery}
			>
				<span className="block md:hidden">
					<Search />
				</span>
				<span className="hidden md:block">
					Search
				</span>
			</Button>
			{/* <Command
				className="rounded-lg border shadow-md md:min-w-[450px]">
				<CommandInput
					value={searchQuery}
					onValueChange={(value) => setSearchQuery(value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onSubmitQuery()
						}
					}}
					placeholder="Search a part number"
					className="pr-18"
				/>
				<Button className="absolute right-0.5 top-1/2 -translate-y-1/2" size={'sm'} onClick={onSubmitQuery}>Search</Button> */}
			{/* {searchQuery.length > 0 &&
					<CommandList
						className="absolute z-50 w-full top-10 bg-white shadow-md border rounded-md" >
						{results.length > 0 && searchQuery !== "" && <CommandGroup heading="Products">
							{results.map((product) => {
								return (
									<CommandItem
										className="cursor:pointer"
										key={product.url}
										onSelect={() => {
											router.push(product.url)
										}}
									>
										<Leaf />
										<span className="font-semibold">{product.partNumber || ""}</span>
										<CommandShortcut className="tracking-tight uppercase">{product.type}</CommandShortcut>
									</CommandItem>

								)
							})}
						</CommandGroup>}
						<CommandGroup heading="Search for">
							<CommandItem
								className="cursor:pointer"
								key="fallback"
								onSelect={onSubmitQuery}
							><span>{searchQuery}</span></CommandItem>
						</CommandGroup>
					</CommandList>
				} */}
			{/* </Command> */}
			{/* <Select>
				<SelectTrigger  className="w-[180px]">
					<Input />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select> */}


		</div >
	)
}