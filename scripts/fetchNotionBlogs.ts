

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID || '';

export interface Blog {
	id: string;
	title: string;
	slug?: string;
	content?: any[];          // now stores blocks
	createdAt: string;
	updatedAt: string;
	coverImage: string;
	[key: string]: any;
}

export async function fetchNotionBlogs(): Promise<Blog[]> {
	if (!BLOG_DATABASE_ID) {
		console.error('No Notion Blog Database ID configured.');
		return [];
	}

	try {
		const { results } = await notion.databases.query({
			database_id: BLOG_DATABASE_ID,
			page_size: 100,
		});

		const blogs: Blog[] = await Promise.all(
			results.map(async (page: any) => {
				const props = page.properties;

				const title =
					props.Name?.title?.map((t: any) => t.plain_text).join('') || 'Blog';

				const slug = props.slug?.rich_text?.[0]?.plain_text;

				// fetch first 100 blocks (extend if needed)
				const { results: blocks } = await notion.blocks.children.list({
					block_id: page.id,
					page_size: 100,
				});

				// Extract cover image URL if available
				let coverImage = null;
				if (page.cover) {
					if (page.cover.type === 'external') {
						coverImage = page.cover.external.url;
					} else if (page.cover.type === 'file') {
						coverImage = page.cover.file.url;
					}
				}

				return {
					id: page.id,
					title,
					slug,
					content: blocks,
					coverImage,               // <-- added
					createdAt: page.created_time,
					updatedAt: page.last_edited_time,
				};
			})
		);

		return blogs;
	} catch (error) {
		console.error('Error fetching blogs from Notion:', error);
		return [];
	}
}
