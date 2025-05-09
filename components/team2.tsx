import { Dribbble, Github, Linkedin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { people } from "./people";
import { Button } from "./ui/button";



const Team2 = () => {
  return (
    <section className="py-32 items-center">
      <div className="items-center flex flex-col items-start text-left">
        <p className="semibold">Our team</p>
        <h2 className="my-6 text-2xl font-bold tracking-tight text-pretty lg:text-4xl">
          The team you&apos;ll be working with
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="items-center mt-16 grid gap-x-12 gap-y-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col lg:items-start items-center h-full justify-start">
            <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="font-bold tracking-tighter">{person.name}</p>
            <p className="text-muted-foreground text-xs uppercase">{person.role}</p>
            <p className="py-3 text-sm text-muted-foreground text-center lg:text-left">
              {person.description}
            </p>
            <div className="mt-2 flex flex-col justify-end items-stretch w-full gap-2 flex-1 items-end">
              <Button key = {person.id}>Buy Now</Button>
              <Button key = {person.id} variant={"outline"}>Get Price</Button>
              {/* <a href="#">
                <Github className="size-5 text-muted-foreground" />
              </a>
              <a href="#">
                <Linkedin className="size-5 text-muted-foreground" />
              </a>
              <a href="#">
                <Dribbble className="size-5 text-muted-foreground" />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team2 };
