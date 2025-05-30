import Image from 'next-export-optimize-images/image'
import { Mail, MapPin } from "lucide-react";
import properties from "../data/properties.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { whatsappHref } from "./constants";

const Contact7 = () => {
  return (
    <section className="py-32" id="AboutUs">
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-4xl">
            Contact Us
          </h1>
          <p className="text-md font-medium">
            We&apos;d love to assist you. Call us, drop us an email or WhatsApp.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <Link
            // href={`tel:+91-${properties["contact.phone.visible"].value}`} 
            href={whatsappHref}
            className="cursor:pointer">
            <Button>
              <Image src={"/whatsapp.svg"} alt={'whatsapp'} className="h-5 w-auto text-white!" />
              Whatsapp
            </Button>
            <p className="text-xl mt-2 font-semibold tracking-tight">WhatsApp or Call Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              We&apos;re available Mon-Fri, 10am-6pm.
            </p>
            <div className="font-bold">
              +91-{properties["contact.phone.whatsapp"].value}
            </div>
          </Link>
          <Link href={`mailto:${properties["contact.email"].value}`} className="cursor:pointer">
            <Button>
              <Mail />
              Mail
            </Button>
            <p className="text-xl mt-2 font-semibold tracking-tight">Email Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              Our team is ready to assist.
            </p>
            <div className="font-bold">
              {properties["contact.email"].value}
            </div>
          </Link>
          {/* <div>
            <span className="mb-3 flex size-12 bg-(--color-primary) flex-col items-center justify-center rounded-xl text-white">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="text-lg font-semibold tracking-tight">Call Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              We&apos;re available Mon-Fri, 10am-6pm.
            </p>
            <Link href={`tel:+91-${properties["contact.phone.visible"].value}`} className="font-bold cursor:pointer">
              +91-{properties["contact.phone.visible"].value}
            </Link>
          </div> */}
          <Link target="_blank" href={`${properties["contact.location"].value}`} className=" cursor:pointer">
            <Button>
              <MapPin />
              Visit
            </Button>
            <p className="text-xl mt-2 font-semibold tracking-tight">Visit Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              Drop by our office for a chat.
            </p>
            <div className="font-bold">
              {properties["contact.address"].value}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
