"use client"
import Image from 'next-export-optimize-images/image'
import { ArrowDownRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Product } from "@/scripts/fetchNotionProducts";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { buyNowHref, checkPriceHref } from "./constants";
import properties from "@/data/properties.json";
import { SearchCustom } from "./searchCustom";

interface Hero3Props {
  product: Product
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
}

const Hero3 = ({
  product,
  description,
  buttons = {
    primary: {
      text: "Buy Now",
      url: buyNowHref + product?.partNumber
    },
    secondary: {
      text: "Show Price",
      url: checkPriceHref + product?.partNumber
    },
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero3Props) => {
  return (
    <section className="py-4">
      <SearchCustom
      />
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 pt-8">
        <div className="mx-auto order-1 lg:order-0 flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="mt-6 text-lg uppercase font-semibold text-muted-foreground">
            {product?.type}
          </h1>
          <h1 className="text-4xl font-bold tracking-tight">
            {product?.partNumber}
          </h1>
          <div className="my-8 flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button aria-label={buttons.primary.text} asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button aria-label={buttons.secondary.text} asChild variant="outline">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            {/* <span className="inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span> */}
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="mr-1 font-semibold">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from {reviews.count}+ reviews
              </p>
            </div>
          </div>
          <p className="mb-8 max-w-xl text-sm text-muted-foreground">
            {product?.description}
          </p>
        </div>
        <div className="flex justify-center items-start lg:mt-8 h-full order-0 lg:order-1 px-12">
          <Carousel className="w-full">
            <CarouselContent className="w-full">
              {product.images.length > 0 ? product?.images?.map(((image, idx) => {
                return (
                  <CarouselItem
                    key={idx}
                    className="place-items-center flex justify-center">
                    <Dialog>
                      <DialogTrigger className="place-items-center">
                        <Image
                          width={400}
                          height={500}
                          src={image}
                          alt={product.partNumber}
                          className="object-contain max-h-[40vh] zoom-image md:max-h-[50vh] rounded-md"
                        />
                      </DialogTrigger>
                      <DialogContent className="place-items-center">
                        <Image
                          width={1000}
                          height={1000}
                          src={image}
                          alt={product.partNumber}
                          className="object-contain max-h-[100vh] rounded-md"
                        />
                      </DialogContent>
                    </Dialog>

                  </CarouselItem>

                )
              })) :
                (
                  <CarouselItem
                    // key={idx}
                    className="place-items-center flex justify-center relative">
                    <Image
                      width={400}
                      height={500}
                      src={properties["media.homepage.photo.1"].media[0]}
                      alt={product.partNumber}
                      className="object-contain max-h-[40vh] zoom-image md:max-h-[50vh] rounded-md opacity-50 "
                    />
                    <div className="flex items-center flex-col absolute font-bold opacity-80">
                      <span className="uppercase">
                        {product.type}
                      </span>
                      <span>
                        {product.partNumber}
                      </span>
                    </div>


                  </CarouselItem>
                )
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div >
    </section >
  );
};

export { Hero3 };
