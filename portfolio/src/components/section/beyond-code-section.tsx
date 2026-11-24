import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Markdown from "react-markdown";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function BeyondCodeSection() {
  return (
    <section id="beyond-code">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 className="text-xl font-bold">Beyond Code</h2>
          <p className="text-sm text-muted-foreground">
            Hackathons, leadership and design work outside my projects
          </p>
        </BlurFade>
        <div className="flex flex-col gap-6">
          {DATA.beyondCode.map((item, i) => {
            return (
              <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 17 + i * 0.05}>
                <div className="flex items-start gap-4">
                  {item.logoUrl && (
                    <Image
                      src={item.logoUrl}
                      alt={`${item.title} logo`}
                      width={56}
                      height={56}
                      className="size-14 shrink-0 rounded-xl border border-border bg-background object-contain ring-2 ring-border/20"
                    />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold leading-none">{item.title}</h3>
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                        {item.tag}
                      </span>
                    </div>
                    <div className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert prose-strong:text-foreground prose-strong:font-semibold">
                      <Markdown>{item.description}</Markdown>
                    </div>
                    {"certificateUrl" in item && (
                      item.certificateUrl ? (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          View Certificate
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <span className="mt-1 inline-flex w-fit items-center gap-1 text-xs text-muted-foreground">
                          Certificate link to be added
                        </span>
                      )
                    )}
                    {"chips" in item && item.chips && (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {item.chips.map((c: string) => {
                          return (
                            <span
                              key={c}
                              className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-7 px-3 flex items-center text-xs font-medium"
                            >
                              {c}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
