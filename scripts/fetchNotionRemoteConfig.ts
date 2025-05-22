import { Client } from "@notionhq/client";

import dotenv from "dotenv";
dotenv.config();


const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_REMOTE_CONFIG_ID!;

export async function fetchNotionRemoteConfig(): Promise<any | undefined> {
	try {
		const response = await notion.databases.query({ database_id: databaseId });

		return response.results.reduce((acc: Record<string, any>, page: any) => {
			const props = page.properties;
			const key = props["Key"]?.title?.[0]?.plain_text;

			if (key) {
				acc[key] = {
					id: page.id,
					key,
					media: props["Media"]?.files?.map((file: any) =>
						file.external?.url || file.file?.url
					) || [],
					value: props["Value"]?.rich_text?.[0]?.plain_text || "",
				};
			}
			return acc;
		}, {});
	} catch (error) {
		console.error("Error fetching Notion Data", error);
	}
}
