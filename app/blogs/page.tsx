import { Blog8 } from "@/components/blog8";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Blog8 />
    </>
  );
}


export const metadata: Metadata = {
  title: "Blog - Insights on Air Compressor Filters | Kenrax",
  description: "Explore articles and updates about air compressor filters, OEM replacements, maintenance tips, and industry insights from Kenrax.",
  openGraph: {
    title: "Blog - Insights on Air Compressor Filters | Kenrax",
    description: "Explore articles and updates about air compressor filters, OEM replacements, maintenance tips, and industry insights from Kenrax.",
    url: "https://kenrax.in/blogs",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Blog - Insights on Air Compressor Filters | Kenrax",
    description: "Get insights on air compressor spares, filters, and industry trends from the Kenrax blog."
  }
};
