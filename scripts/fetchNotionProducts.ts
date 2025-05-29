import { Client } from "@notionhq/client";

import dotenv from "dotenv";
dotenv.config();


const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID!;

export async function fetchProductData(): Promise<Product[] | undefined> {
	try {
		const response = await notion.databases.query({ database_id: databaseId });
		return response.results.map((page: any) => {
			const props = page.properties;

			return {
				id: page.id,
				partNumber: props["Part Number"]?.title?.[0]?.plain_text || "",
				type: props["Type"]?.select?.name || "",
				OEMs: props["OEMs"]?.multi_select.map((tag: any) => tag.name) || [],
				compatibleWith: props["Compatible with"]?.multi_select.map((tag: any) => tag.name) || [],
				images: props["Images"]?.files?.map((file: any) =>
					file.external?.url || file.file?.url
				) || [],
				description: props["Description"]?.rich_text[0]?.plain_text || "",
				priority: props["Priority"]?.number,
				url: "/product/" + toKebabCase(props["Part Number"]?.title?.[0]?.plain_text || "")
			};

		}).toSorted((a, b) => ((a.priority ? a.priority : 99999) - (b.priority ? b.priority : 99999)));
	} catch (error) {
		console.error("Error fetching Notion Data", error);

	}
}

export interface Product {
	id: string;
	partNumber: string;
	type: string;
	// 'Air Filter' | 'Oil Filter' | 'Air-Oil Separator' | 'Hydraulic Filter' | 'Line Filter';
	OEMs: string[];
	compatibleWith: string[]; // E.g., ["Atlas Copco", "Ingersoll Rand"]
	images?: string[];
	description?: string;
	priority?: number | null;
	url: string
}


export function toKebabCase(str: string) {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')  // camelCase → camel-Case
		.replace(/\s+/g, '-')                 // spaces → -
		.replace(/_/g, '-')                   // underscores → -
		.toLowerCase();
}


