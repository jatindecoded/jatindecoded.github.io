
import { Separator } from "./ui/separator";
import { Product } from "@/scripts/fetchNotionProducts";

interface JobOpening {
  title: string;
  location: string;
  url: string;
}

interface JobCategory {
  category: string;
  openings: JobOpening[];
}

interface Careers4Props {
  product: Product
  heading?: string;
  jobs?: JobCategory[];
}

const Careers4 = ({
  product,
  heading = "Product Details",
  jobs = [
    {
      category: "Engineering",
      openings: [
        {
          title: "Senior Frontend Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "UI/UX Designer",
          location: "San Francisco",
          url: "#",
        },
        {
          title: "React Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Technical Lead",
          location: "London",
          url: "#",
        },
      ],
    },
    {
      category: "Design",
      openings: [
        {
          title: "Product Designer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Visual Designer",
          location: "Berlin",
          url: "#",
        },
      ],
    },
  ],
}: Careers4Props) => {
  return (
    <section className="py-4">
      <div className="items-center">
        <div className="mx-auto">
          <div className="text-center">
            <h1 className="font-bold tracking-tight text-2xl">
              {heading}
            </h1>
          </div>
          <div className="text-center py-2 grid md:grid-cols-2 gap-10 px-10 flex-wrap gap-6 gap-y-2">
            <div className="py-4">
              <h2 className="font-bold tracking-tight text-xl text-muted-foreground">
                Type of Product
              </h2>
              <Separator className="mb-2" />
              <div className="flex-col font-bold capitalize">
                {product.type}
              </div>
            </div>
            <div className="py-4">
              <h2 className="font-bold tracking-tight text-xl text-muted-foreground">
                OEM
              </h2>
              <Separator className="mb-2" />
              <div className="flex-col">
                {
                  product.OEMs.map((OEM, idx) => {
                    return (
                      <p
                        key={idx}
                        className="font-bold">
                        {OEM}
                      </p>
                    )
                  })

                }
              </div>
            </div>
            {product.compatibleWith.length > 0 && (

              <div className="py-4">
                <h2 className="font-bold tracking-tight text-xl text-muted-foreground">
                  Compatible with
                </h2>
                <Separator className="mb-2" />
                <div className="flex-col overflow-auto max-h-[200px]">
                  {
                    product.compatibleWith.map((c, idx) => {
                      return (
                        <p
                          key={idx}
                          className="font-bold">
                          {c}
                        </p>
                      )
                    })

                  }
                </div>
              </div>
            )}
          </div>
          {/* <div className="mx-auto flex flex-col gap-16 mt-6">
            {jobs.map((jobCategory) => (
              <div key={jobCategory.category} className="grid">
                {jobCategory.openings.map((job) => (
                  <div
                    key={job.title}
                    className="flex items-center justify-between border-b py-4 hover:underline font-semibold"
                  >
                    {job.title}
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "sm",
                        }),
                        "pointer-events-none rounded-full",
                      )}
                    >
                      {job.location}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export { Careers4 };
