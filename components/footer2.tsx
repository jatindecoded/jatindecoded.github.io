import Image from "next/image";
import properties from "../data/properties.json"
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: properties["media.logo"].media[0],
    alt: properties["company.name"].value,
    title: properties["company.name"].value,
    url: properties.domain.value,
  },
  tagline = "Air Filters | Oil Filters | Separators & more for Screw Compressors",
  menuItems = [
    {
      title: "Home",
      links: [
        { text: "Overview", url: "#" },
        { text: "Products", url: "/products" },
        { text: "Blog", url: "/blogs" },
        { text: "FAQs", url: "/#FAQ" }
      ],
    },
    // {
    //   title: "Company",
    //   links: [
    //     { text: "About", url: "#" },
    //     { text: "Team", url: "#" },
    //     { text: "Blog", url: "#" },
    //     { text: "Careers", url: "#" },
    //     { text: "Contact", url: "#" },
    //     { text: "Privacy", url: "#" },
    //   ],
    // },
    // {
    //   title: "Resources",
    //   links: [
    //     { text: "Help", url: "#" },
    //     { text: "Sales", url: "#" },
    //     { text: "Advertise", url: "#" },
    //   ],
    // },
    {
      title: "Social",
      links: [
        {
          text: "Instagram",
          url: `${properties["link.instagram"].value}`
        },
        {
          text: "LinkedIn",
          url: `${properties["link.linkedin"].value}`
        },
        {
          text: "Facebook",
          url: `${properties["link.facebook"].value}`
        },
        {
          text: `Call: +91-${properties["contact.phone.visible"].value}`,
          url: `tel:+91${properties["contact.phone.visible"].value}`
        }

      ],
    },
  ],
  copyright = `© 2024 ${properties["company.name"].value}. All rights reserved.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "/terms.html" },
    { text: "Privacy Policy", url: "/privacy.html" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32 px-4">
      <div className="items-center">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 md:col-span-3 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={properties.domain.value}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 border-1 rounded-md"
                  />
                </a>
                <p className={`${spaceGrotesk.className} uppercase text-md font-bold`}>{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary underline underline-offset-3 hover:underline-offset-4"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[8px] text-muted-foreground mt-2">The logos of OEM companies displayed on this website, including but not limited to Atlas Copco, Ingersoll Rand, Kirloskar, Kaeser, CP, Mann, Donaldson, Elgi, Chicago Pneumatic, Gardner Denver, CompAir, and KG Khosla, are the property of their respective owners. Kenrax Industries is not affiliated with, sponsored by, or endorsed by these companies. The use of these logos is solely for illustrative purposes to indicate the compatibility of our products with the equipment of these OEMs. All trademarks and registered trademarks are the property of their respective owners.
          </p>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
