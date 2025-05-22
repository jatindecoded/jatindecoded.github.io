import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download, PhoneOutgoing } from "lucide-react";
import properties from "../data/properties.json"

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatars: Array<{
    image: string;
    fallback: string;
  }>;
}

interface Hero151Props {
  heading?: string;
  heading2?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  button2?: {
    text: string;
    url: string;
  };
  testimonial?: Testimonial;
  images?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const Hero151 = ({
  heading = "Air Filters; Oil Filters; Separators & more",
  heading2 = "for Screw Compressors",
  description = "Precision-crafted filtration solutions for every compressor need. Built for performance, priced for value.",
  button = {
    text: "Get Quote",
    url: `https://wa.me/91${properties["contact.phone.whatsapp"].value}?text=Hello%20Kenrax`
  },
  button2 = {
    text: "Product Catalog",
    url: "/media/catalog.pdf",
  },
  testimonial = {
    quote: "Kenrax filters have matched OEM quality at better pricing — they've become our go-to supplier.",
    author: "Procurement Head",
    role: "",
    company: "Leading Compressor Service Firm",
    avatars: [
      { image: "https://shadcnblocks.com/images/block/avatar-1.webp", fallback: "AB" },
      { image: "https://shadcnblocks.com/images/block/avatar-2.webp", fallback: "CD" },
      { image: "https://shadcnblocks.com/images/block/avatar-3.webp", fallback: "EF" },
    ],
  },
  images = {
    first: properties["media.homepage.photo.1"].media[0],
    second: properties["media.homepage.photo.2"].media[0],
    third: properties["media.homepage.photo.3"].media[0],
    fourth: properties["media.homepage.photo.4"].media[0],
  },
}: Hero151Props) => {
  return (
    <section className="py-12">
      <div className="items-center">
        <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
          <div className="w-full flex-1 max-w-[50rem]">
            <div className="h-full w-full md:aspect-1/1">
              <div className="grid h-full w-full grid-cols-2 grid-rows-1 md:grid-rows-2 gap-[3.5%]">
                <div className="aspect-5/4 md:aspect-auto overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                  <img
                    src={images.first}
                    alt=""
                    className="object-cover h-full w-full object-center"
                  />
                </div>
                <div className="aspect-5/4 md:aspect-auto md:overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                  <img
                    src={images.second}
                    alt=""
                    className="object-cover h-full w-full object-center"
                  />
                </div>
                <div className="hidden md:block overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                  <img
                    src={images.third}
                    alt=""
                    className="object-cover h-full w-full object-center"
                  />
                </div>
                <div className="hidden md:block overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                  <img
                    src={images.fourth}
                    alt=""
                    className="object-cover h-full w-full object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="flex flex-col gap-1 lg:gap-2">
                <h1 className="max-w-[80%] text-4xl leading-tighter font-bold text-foreground lg:text-5xl font-black tracking-tighter">
                  {heading}
                </h1>
                <h1 className="max-w-[80%] text-2xl leading-tighter font-bold text-foreground lg:text-3xl font-black tracking-tighter">
                  {heading2}
                </h1>
              </div>
              <p className="hidden md:block text-md text-muted-foreground">
                {description}
              </p>
              <a href={`tel:+91-${properties["contact.phone.visible"].value}`} className="lg:my-[-20px] font-bold ">
                <div className="flex gap-1 items-center">
                  <PhoneOutgoing size={16} />
                  <div>
                    +91-{properties["contact.phone.visible"].value}
                  </div>
                </div>
              </a>
            </div>
            <div className="my-6 lg:my-10 gap-4 gap-y-2 flex flex-wrap">
              <Button asChild size="lg">
                <a href={button.url} target="_blank">{button.text}</a>
              </Button>
              <Button asChild size="lg" variant='outline'>
                <a href={button2.url} target="_blank"><Download />{button2.text}</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {/* <div className="relative flex -space-x-[1.5rem]">
                {testimonial.avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className={`relative z-${index + 1}0 flex h-12 w-12 flex-shrink-0 rounded-full border-2 border-white object-cover`}
                  >
                    <AvatarImage src={avatar.image} alt="" />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div> */}
              <div>
                <p className="mb-1 text-sm text-muted-2-foreground italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm font-medium text-muted-2-foreground">
                  {testimonial.author} @
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero151 };
