import { fetchProductData } from './fetchNotionProducts';
import { fetchNotionBlogs } from './fetchNotionBlogs';
import fs from 'fs';
import path, { basename } from 'path';
import dotenv from "dotenv";
import * as https from 'https';
import { fetchNotionRemoteConfig } from './fetchNotionRemoteConfig';

dotenv.config();


async function saveData() {
	const products = await fetchProductData();
	products?.forEach(product => {
		product.images?.forEach((img) => {
			downloadImageFromS3(
				img,
				`./public/media/${extractObjectKeyFromURL(img)}`
			);
		})
	});

	console.log('======================PRODUCTS FROM NOTION===========================')
	console.log(products)

	// Function to update the image URLs for each product
	products?.map(product => {
		product.images?.map((img: string) => {
			const newImagePath = `/media/${extractObjectKeyFromURL(img)}`;
			// Update the product's image URL to the new one
			product.images = product.images?.map((image: string) =>
				image === img ? newImagePath : image
			);
		});
	});


	const filePath = path.join(__dirname, '../data/products.json');
	fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
	console.log('Data saved to products.json');
}


async function saveRemoteConfig() {
	const properties = await fetchNotionRemoteConfig();
	Object.keys(properties)?.forEach((key: any) => {
		const p = properties[key]
		p.media?.forEach((m: string) => {
			downloadImageFromS3(
				m,
				`./public/media/${extractObjectKeyFromURL(m, key === "media.catalog")}`
			);
		});
	});


	console.log('======================REMOTE CONFIG FROM NOTION===========================')
	console.log(properties)

	Object.keys(properties)?.forEach((key: any) => {
		const p = properties[key]
		p.media = p.media?.map((m: string) =>
			`/media/${extractObjectKeyFromURL(m, key === "media.catalog")}`
		);
	});


	const filePath = path.join(__dirname, '../data/properties.json');
	fs.writeFileSync(filePath, JSON.stringify(properties, null, 2));
	console.log('Data saved to properties.json');
}



function extractObjectKeyFromURL(url: string, catalog: boolean = false) {
	if (catalog) {
		return "catalog.pdf"
	}
	const urlParts = url.split(".amazonaws.com/"); // Split by the domain part
	if (urlParts.length > 1) {
		const slashSplitted = urlParts[1].split('/')
		const objectKey = (slashSplitted[1] + "--" + slashSplitted[2]).split("?")[0].replace("/", "-"); // Take everything after the domain and remove query params
		console.log(objectKey);

		return sanitizeFilenameForSEO(objectKey);
	}
	return null;
}

async function downloadImageFromS3(url: string, outputPath: string): Promise<void> {
	https.get(url, (response) => {
		// Ensure the status code is OK (200)
		if (response.statusCode !== 200) {
			console.error(`Failed to fetch image. Status code: ${response.statusCode}`);
			return;
		}

		// Create the write stream to save the file
		const writeStream = fs.createWriteStream(outputPath);

		if (fs.existsSync(outputPath)) {
			console.log("Rewriting " + outputPath)
		}

		// Pipe the response stream into the write stream
		response.pipe(writeStream);

		// Handle successful download
		writeStream.on('finish', () => {
			console.log('Image downloaded successfully!');
		});

		// Handle errors
		writeStream.on('error', (err) => {
			console.error('Error downloading the image:', err);
		});
	}).on('error', (err) => {
		console.error('Request error:', err);
	});
}

function sanitizeFilenameForSEO(filePath: string): string {

	const ext = path.extname(filePath);
	const name = path.basename(filePath, ext);

	const sanitizedName = name
		.toLowerCase()
		.normalize('NFKD') // handles accented characters
		.replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with dash
		.replace(/^-+|-+$/g, '')     // trim leading/trailing dashes
		.replace(/-+/g, '-');        // collapse multiple dashes

	return `${sanitizedName}${ext}`;

}

const blogsDir = path.join(__dirname, '../data/blogs');
if (!fs.existsSync(blogsDir)) {
	fs.mkdirSync(blogsDir, { recursive: true });
}

// async function saveBlogs() {
// 	const blogs = await fetchNotionBlogs();

// 	console.log("=========================BLOGS FROM NOTION============================")
// 	console.log(blogs)

// 	if (!blogs || blogs.length === 0) {
// 		console.log('No blogs found to save.');
// 		return;
// 	}

// 	// Save each blog as a separate JSON file named by slug or id
// 	blogs.forEach(blog => {
// 		// Assuming each blog has a unique 'slug' or 'id'
// 		const fileName = blog.slug
// 			? `${sanitizeFilenameForSEO(blog.slug)}.json`
// 			: `${blog.id}.json`;

// 		const filePath = path.join(blogsDir, fileName);

// 		fs.writeFileSync(filePath, JSON.stringify(blog, null, 2));
// 		console.log(`Blog saved: ${fileName}`);
// 	});
// }

async function saveBlogs() {
	const blogs = await fetchNotionBlogs();

	console.log('=========================BLOGS FROM NOTION============================');
	console.log(blogs);

	if (!blogs || blogs.length === 0) {
		console.log('No blogs found to save.');
		return;
	}

	blogs?.forEach(blog => {
		downloadImageFromS3(
			blog.coverImage,
			`./public/media/${extractObjectKeyFromURL(blog.coverImage)}`
		);
	});

	// Function to update the image URLs for each product
	blogs?.map(blog => {
		const newImagePath = `/media/${extractObjectKeyFromURL(blog.coverImage)}`;
		// Update the product's image URL to the new one
		blog.coverImage = newImagePath
	});

	// write all blogs into one file
	const filePath = path.join(blogsDir, 'blogs.json');
	fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
	console.log(`Blogs saved: blogs.json`);
}


saveData();
saveRemoteConfig();
saveBlogs();