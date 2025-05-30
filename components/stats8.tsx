
interface Stats8Props {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats8 = ({
  heading = "Serving our loyal customers for more than 2 Decades",
  description = "Delivering reliability and scalable supply for industrial needs.",
  stats = [
    {
      id: "stat-1",
      value: "850+",
      label: "Trusted Clients",
    },
    {
      id: "stat-2",
      value: "20+",
      label: "OEM Brands Supported",
    },
    {
      id: "stat-3",
      value: "550+",
      label: "Product SKUs in Stock",
    },
    {
      id: "stat-4",
      value: "99.9%",
      label: "Repeat Order Rate",
    },
  ],
}: Stats8Props) => {
  return (
    <section className="py-16">
      <div className="items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold md:text-4xl tracking-tight">{heading}</h2>
          <p className="text-md font-medium">{description}</p>
          {/* <a
            href={link.url}
            className="flex items-center gap-1 font-bold hover:underline"
          >
            {link.text}
            <ArrowRight className="h-auto w-4" />
          </a> */}
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
              <div className="text-6xl font-bold tracking-tight">{stat.value}</div>
              <p className="tracking-tight font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
