import Image from 'next-export-optimize-images/image'
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import blogs from "../data/blogs/blogs.json";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface Blog8Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Blog8 = ({
  heading = "Blog Posts",
  description = "Explore the newest insights, practical guides, and expert tips on air‑compressor filtration, maintenance, and OEM‑grade replacement parts—everything you need to keep your compressors running at peak efficiency.",
}: Blog8Props) => {
  const posts = blogs;
  return (
    <section className="py-8">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-3xl font-bold tracking-tight text-pretty md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-md">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  {/* <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div> */}
                  <h3 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">
                    <a
                      href={"/blogs/" + post.slug}
                      target="_blank"
                      className="hover:underline tracking-tight"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.content.map((block) =>
                      (block["paragraph"]?.rich_text ?? [])
                        .map((rt: any) => rt.plain_text)
                        .join('')
                    ).join('').slice(0, 100)}...
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">
                      Published on: {new Date(post.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={"/blogs/" + post.slug}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={"/blogs/" + post.slug} target="_blank" className="block">
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog8 };
