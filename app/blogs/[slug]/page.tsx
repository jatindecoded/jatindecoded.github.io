import { BlogPost } from "@/components/blogPost";
import blogs from "../../../data/blogs/blogs.json"
import { Blog8 } from "@/components/blog8";


export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const blog = blogs.find((blog) => blog.slug === slug)
	if (!blog) {
		return <Blog8 />
	}
	return (
		<BlogPost blog={blog} />
	)
}

// synchronous static params—no async keyword
export function generateStaticParams() {
	return blogs.map((b) => ({
		slug: b.slug,
	}));
}

