import { UserRoundCheck } from "lucide-react";

interface Testimonial10Props {
  testimonials?: {
    quote: string;
    author: {
      name: string;
      role: string;
      avatar: {
        src: string;
        alt: string;
      };
    };
  }[]
}

const Testimonial10 = ({
  testimonials = [
    {
      quote: "Reliable supplier, quick dispatch and the filters are spot on in terms of fit and performance. We’ve shifted most of our orders to Kenrax.",
      author: {
        name: "Pradeep Sharma",
        role: "Maintenance Head, Delhi Tools & Compressors",
        avatar: {
          src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
          alt: "Customer Name",
        },
      },
    },
    {
      quote: "Their support team is responsive and knows their products well. Got custom filters delivered faster than expected. Would recommend for OEM-replacement needs.",
      author: {
        name: "Amit Khurana",
        role: "Procurement Lead, Airtronics Pvt. Ltd.",
        avatar: {
          src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
          alt: "Customer Name",
        },
      },
    }
  ]
}: Testimonial10Props) => {
  return (
    <section className="py-2">
      <div className="items-center">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="mb-4 pt-10 flex flex-col items-center text-center">
            <p className="mb-4 max-w-4xl px-8 font-bold tracking-tight lg:text-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center md:gap-2">
              {/* <Avatar className="size-12 md:size-16 items-center">
                <AvatarImage src={testimonial.author.avatar.src} alt={testimonial.author.avatar.alt} />
                <AvatarFallback>{testimonial.author.name}</AvatarFallback>
              </Avatar> */}
              <div className="center">
                <p className="text-sm font-medium md:text-base flex gap-2 justify-center mt-4 center"><UserRoundCheck className="text-(--primary)" />{testimonial.author.name}</p>
                <p className="text-sm text-muted-foreground md:text-base">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Testimonial10 };
