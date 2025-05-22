import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What products does Kenrax Industries manufacture?",
    answer:
      "Kenrax specializes in manufacturing air filters, oil filters, air-oil separators, and hydraulic filters used in screw air compressors. We supply OEM-compatible parts for brands such as Atlas Copco, Ingersoll Rand, Kaeser, Elgi, and more.",
  },
  {
    question: "Are Kenrax filters compatible with OEM specifications?",
    answer:
      "Yes, all our filters are engineered to meet or exceed OEM standards, ensuring durability, fit, and performance in demanding industrial environments.",
  },
  {
    question: "How can I place a bulk order or inquire about pricing?",
    answer:
      "To place bulk orders or request pricing, you can contact us directly at kenraxindustries@gmail.com or call +91 9990249868. We cater to dealers, distributors, and OEMs.",
  },
  {
    question: "Do you offer custom part numbers or private labeling?",
    answer:
      "Yes, we offer custom part number mapping, labeling, and white-label manufacturing for high-volume buyers or OEM partnerships.",
  },
  {
    question: "Where are Kenrax products shipped from?",
    answer:
      "All products are shipped from our facility in New Delhi, India. We ensure secure packaging and reliable logistics for both domestic and international orders.",
  },
  {
    question: "Can I request a sample before bulk purchase?",
    answer:
      "Yes, we provide product samples on request to help you verify quality and compatibility before proceeding with larger orders.",
  },
];

const Faq5 = () => {
  return (
    <section className="pt-32" id="faq">
      <div className="items-center">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
            Common Questions & Answers
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Discover how our high-quality air compressor spares and tailored solutions can meet your specific needs, ensuring efficiency, reliability, and superior performance.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq5 };
