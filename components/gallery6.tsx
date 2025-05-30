"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import products from "../data/products.json";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./productCard";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
}

const Gallery6 = ({
  heading = "Product Gallery",
  demoUrl = "/products",
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="items-center">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <a
            href={demoUrl}
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
              {heading}
            </h2>
            <p
              className="group flex items-center gap-1 underline text-md font-medium"
            >
              Go to Products Page
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </p>
          </a>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
            loop: true
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]">
            {products.slice(0, 10).map((item) => (
              <CarouselItem key={item.id} className="pl-4 max-w-[252px]">
                <ProductCard product={item} descMaxLength={0} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
