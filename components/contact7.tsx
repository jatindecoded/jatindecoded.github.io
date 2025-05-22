import { Mail, MapPin, Phone } from "lucide-react";
import properties from "../data/properties.json"

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
          <div>
            <span className="mb-3 flex size-12 bg-(--color-primary) flex-col items-center justify-center rounded-xl text-white">
              <img src={"/whatsapp.svg"} className="h-6 w-auto text-white!" />
            </span>
            <p className="text-lg font-semibold tracking-tight">WhatsApp or Call Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              We&apos;re available Mon-Fri, 10am-6pm.
            </p>
            <a href={`tel:+91-${properties["contact.phone.visible"].value}`} className="font-bold hover:underline">
              {/* <a href={`https://wa.me/91${properties["contact.phone.whatsapp"].value}?text=Hello%20Kenrax`} className="font-bold hover:underline"> */}
              +91-{properties["contact.phone.whatsapp"].value}
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 bg-(--color-primary) flex-col items-center justify-center rounded-xl text-white">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="text-lg font-semibold tracking-tight">Email Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              Our team is ready to assist.
            </p>
            <a href={`mailto:${properties["contact.email"].value}`} className="font-bold hover:underline">
              {properties["contact.email"].value}
            </a>
          </div>
          {/* <div>
            <span className="mb-3 flex size-12 bg-(--color-primary) flex-col items-center justify-center rounded-xl text-white">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="text-lg font-semibold tracking-tight">Call Us</p>
            <p className="mb-4 text-muted-foreground text-sm">
              We&apos;re available Mon-Fri, 10am-6pm.
            </p>
            <a href={`tel:+91-${properties["contact.phone.visible"].value}`} className="font-bold hover:underline">
              +91-{properties["contact.phone.visible"].value}
            </a>
          </div> */}
          <div>
            <span className="mb-3 flex size-12 bg-(--color-primary) flex-col items-center justify-center rounded-xl text-white">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="text-lg font-semibold tracking-tight">Visit Us</p>
            {/* <p className="mb-2 text-lg font-semibold">Visit Us</p> */}
            <p className="mb-4 text-muted-foreground text-sm">
              Drop by our office for a chat.
            </p>
            <a target="_blank" href={`${properties["contact.location"].value}`} className="font-bold hover:underline">
              {properties["contact.address"].value}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
