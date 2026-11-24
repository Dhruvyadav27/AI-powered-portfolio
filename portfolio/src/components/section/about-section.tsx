import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";
import { TechnologyIcon } from "@/components/technology-icon";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About Me</h2>
        </BlurFade>
        {DATA.about.map((paragraph, i) => (
          <BlurFade key={i} delay={BLUR_FADE_DELAY * (4 + i)}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-strong:text-foreground prose-strong:font-semibold">
              <Markdown>{paragraph}</Markdown>
            </div>
          </BlurFade>
        ))}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Currently learning</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.learning.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-1 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {item.logoUrl && (
                    <Image
                      src={item.logoUrl}
                      alt=""
                      width={16}
                      height={16}
                      className="size-4 object-contain"
                    />
                  )}
                  {!item.logoUrl && (
                    <TechnologyIcon
                      name={item.name}
                      className="size-4 shrink-0"
                    />
                  )}
                  {item.name}
                  <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
