"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import properties from "../data/properties.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "OEM Spare Parts for",
  // logos = [
  //   {
  //     id: "logo-1",
  //     description: "Logo 1",
  //     image: "https://shadcnblocks.com/images/block/logos/astro-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  //   {
  //     id: "logo-2",
  //     description: "Logo 2",
  //     image: "https://shadcnblocks.com/images/block/logos/figma-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  //   {
  //     id: "logo-3",
  //     description: "Logo 3",
  //     image: "https://shadcnblocks.com/images/block/logos/nextjs-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  //   {
  //     id: "logo-4",
  //     description: "Logo 4",
  //     image: "https://shadcnblocks.com/images/block/logos/react-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  //   {
  //     id: "logo-5",
  //     description: "Logo 5",
  //     image: "https://shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  //   {
  //     id: "logo-6",
  //     description: "Logo 6",
  //     image: "https://shadcnblocks.com/images/block/logos/supabase-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  //   {
  //     id: "logo-7",
  //     description: "Logo 7",
  //     image: "https://shadcnblocks.com/images/block/logos/tailwind-wordmark.svg",
  //     className: "h-4 w-auto",
  //   },
  //   {
  //     id: "logo-8",
  //     description: "Logo 8",
  //     image: "https://shadcnblocks.com/images/block/logos/vercel-wordmark.svg",
  //     className: "h-7 w-auto",
  //   },
  // ],
}: Logos3Props) => {
  return (
    <section className="pt-12">
      <div className="container flex flex-col">
        <h1 className="mt-6 text-2xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-16 overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, direction: "backward" })]}
          >
            <CarouselContent className="ml-0">
              {properties["media.oem.logos"].media.toReversed().map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={img}
                        alt={"OEM Logo"}
                        className={"h-14 w-auto"}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
        {/* <div className="md:hidden mt-12 relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {properties["media.oem.logos"].media.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={img}
                        alt={"OEM Logo"}
                        className={"h-14 w-auto"}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div> */}
        <div className="mt-16 text-xs text-muted-foreground">
          Logos of OEMs shown—like Atlas Copco, Ingersoll Rand, Elgi, etc.—belong to their respective owners. Kenrax Industries is not affiliated with them; logos are used only to indicate product compatibility.
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
