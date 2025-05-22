import { ChevronLeft } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Blog10 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
            <a
              className="mb-5 flex items-center gap-1 text-muted-foreground hover:text-primary"
              href="#"
            >
              <ChevronLeft className="h-full w-4" />
              Return to home
            </a>
            <h1 className="mb-5 text-3xl font-bold text-balance lg:text-4xl">
              10 Best Practices for Building a Large Scale Design System
            </h1>
            <div className="flex gap-3">
              <Avatar className="size-7 rounded-full">
                <AvatarImage
                  src="https://shadcnblocks.com/images/block/avatar-1.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </aside>

          <article className="mx-auto prose">
            <div>
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder"
                className="mt-0 mb-8 aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <h1>The Joke Tax Chronicles</h1>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <h2>The King&apos;s Plan</h2>
            <p>
              The king thought long and hard, and finally came up with{" "}
              <a href="#">a brilliant plan</a>: he would tax the jokes in the
              kingdom.
            </p>
            <blockquote>
              &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
              joke, so it&apos;s only fair that they should pay for the
              privilege.&rdquo;
            </blockquote>
            <h3>The Joke Tax</h3>
            <p>
              The king&apos;s subjects were not amused. They grumbled and
              complained, but the king was firm:
            </p>
            <ul>
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p>
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king&apos;s foolishness get him down: a court jester named
              Jokester.
            </p>
            <h3>Jokester&apos;s Revolt</h3>
            <p>
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king&apos;s
              pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn&apos;t seem to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn&apos;t help
              but laugh. And once they started laughing, they couldn&apos;t
              stop.
            </p>
            <h3>The People&apos;s Rebellion</h3>
            <p>
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>King&apos;s Treasury</th>
                    <th>People&apos;s happiness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empty</td>
                    <td>Overflowing</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td>Modest</td>
                    <td>Satisfied</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td>Full</td>
                    <td>Ecstatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>
            <p>
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export { Blog10 };
