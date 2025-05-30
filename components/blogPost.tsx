import { ChevronLeft } from "lucide-react";
import React from "react";
import { Blog } from "@/scripts/fetchNotionBlogs";
import { Separator } from "./ui/separator";

interface Block {
	type: "heading" | "paragraph" | "blockquote" | "list" | "image" | "table";
	level?: number;
	text?: string;
	html?: string;
	src?: string;
	items?: string[];
	rows?: string[][];
}

const BlogPost = ({ blog }: { blog: Blog }) => {
	const { title, createdAt, coverImage, content } = blog;

	const renderBlock = (block: any, idx: number) => {
		switch (block.type) {
			case "heading_1":
			case "heading_2":
			case "heading_3": {
				const level = parseInt(block.type.split("_")[1]); // 1, 2 or 3
				const Tag = (`h${level}` as unknown) as React.ElementType;

				// Extract plain text from rich_text array
				const text = block[block.type]?.rich_text
					.map((rt: any) => rt.plain_text)
					.join("") || "";

				return (
					<Tag
						key={idx}
						className={`text-${4 - level === 1 ? "" : 4 - level}xl font-bold py-4 tracking-tight`}
					>
						{text}
					</Tag>
				);
			}

			case "paragraph": {
				const text = block.paragraph?.rich_text
					.map((rt: any) => rt.plain_text)
					.join("") || "";

				return <p key={idx}>{text}</p>;
			}

			case "heading_2": // handled above in combined case, remove if duplicate

			case "blockquote": {
				const text = block.blockquote?.rich_text
					.map((rt: any) => rt.plain_text)
					.join("") || "";
				return <blockquote key={idx}>{text}</blockquote>;
			}

			case "bulleted_list_item":
			case "numbered_list_item": {
				// For lists, you might want to gather all list items separately and render as <ul> or <ol>.
				// Here just rendering single item:
				const text = block[block.type]?.rich_text
					.map((rt: any) => rt.plain_text)
					.join("") || "";
				return <li key={idx}>{text}</li>;
			}

			case "image": {
				const src = block.image?.type === "external"
					? block.image.external.url
					: block.image.file.url;
				return (
					<img
						key={idx}
						src={src}
						alt="blog graphic"
						className="mt-0 mb-8 aspect-video w-full rounded-lg object-cover"
					/>
				);
			}

			case "table": {
				// Notion API doesn't return a "table" block type, tables are composed differently,
				// You will need a custom handler for Notion tables if they exist or convert them on import.
				return null; // or handle accordingly
			}

			default:
				return null;
		}
	};


	// const renderBlock = (block: Block, idx: number) => {
	// 	switch (block.type) {
	// 		case "heading": {
	// 			const level = Math.min(Math.max(block.level ?? 2, 1), 6) as 1 | 2 | 3 | 4 | 5 | 6;
	// 			const Tag = (`h${level}` as unknown) as React.ElementType;
	// 			return <Tag key={idx} className={`text-${4 - level === 1 ? "" : 4 - level}xl font-bold py-4 tracking-tight`}>{block.text}</Tag>;
	// 		}
	// 		case "paragraph":
	// 			if (!block.html) {
	// 				return null;
	// 			}
	// 			else {
	// 				return <p key={idx} dangerouslySetInnerHTML={{ __html: block.html }} />;
	// 			}
	// 		case "blockquote":
	// 			return <blockquote key={idx}>{block.text}</blockquote>;
	// 		case "list":
	// 			return (
	// 				<ul key={idx}>
	// 					{block.items!.map((it, i) => (
	// 						<li key={i}>{it}</li>
	// 					))}
	// 				</ul>
	// 			);
	// 		case "image":
	// 			return (
	// 				<img
	// 					key={idx}
	// 					src={block.src}
	// 					alt="blog graphic"
	// 					className="mt-0 mb-8 aspect-video w-full rounded-lg object-cover"
	// 				/>
	// 			);
	// 		case "table":
	// 			return (
	// 				<table key={idx}>
	// 					<thead>
	// 						<tr>
	// 							{block.rows?.[0].map((h, i) => (
	// 								<th key={i}>{h}</th>
	// 							))}
	// 						</tr>
	// 					</thead>
	// 					<tbody>
	// 						{block.rows?.slice(1).map((row, r) => (
	// 							<tr key={r} className="m-0 border-t p-0 even:bg-muted">
	// 								{row.map((cell, c) => (
	// 									<td key={c}>{cell}</td>
	// 								))}
	// 							</tr>
	// 						))}
	// 					</tbody>
	// 				</table>
	// 			);
	// 		default:
	// 			return null;
	// 	}
	// };

	return (
		<section className="py-8">
			<div className="container">
				<div className="relative flex flex-col justify-between gap-10 lg:flex-row">
					<aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
						<a
							className="mb-5 flex items-center gap-1 text-muted-foreground hover:text-primary"
							href="/blogs"
						>
							<ChevronLeft className="h-full w-4" />
							Return to home
						</a>
						<h1 className="mb-2 text-3xl font-bold text-balance lg:text-4xl tracking-tight">{title}</h1>
						<Separator className="my-2" />
						<div className="flex">
							<div>
								<p className="text-sm font-bold text-muted-foreground">
									Published on: {new Date(createdAt).toLocaleDateString('en-GB', {
										day: '2-digit',
										month: 'short',
										year: 'numeric',
									})}

								</p>
							</div>
						</div>
					</aside>

					<article className="mx-auto prose prose-headings:scroll-mt-20 max-w-none dark:prose-invert leading-7">
						{coverImage && (
							<img
								src={coverImage}
								alt="cover"
								className="mt-0 mb-8 aspect-video w-full rounded-lg object-cover"
							/>
						)}
						{content?.map(renderBlock)}
					</article>
				</div>
			</div>
		</section>
	);
};

export { BlogPost };