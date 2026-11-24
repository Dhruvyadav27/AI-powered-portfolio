import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TechnologyIcon } from "@/components/technology-icon";

const BLUR_FADE_DELAY = 0.04;
const tag =
  "rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground";

export default function DsaSection() {
  const { dsa } = DATA;
  return (
    <section id="dsa">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold">Problem Solving</h2>
          <p className="text-sm text-muted-foreground">
            Data Structures &amp; Algorithms
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="flex flex-col gap-4 rounded-xl border p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-5xl font-bold tracking-tighter">
                {dsa.solved}
              </span>
              <span className="text-sm text-muted-foreground">
                problems solved
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <span className="text-xs font-semibold text-muted-foreground">
                Languages used
              </span>
              <div className="flex gap-2">
                {dsa.languages.map((l) => (
                  <span
                    key={l}
                    className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 px-4 flex items-center gap-2 text-sm font-medium"
                  >
                    <TechnologyIcon name={l} className="size-4" />
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Topics covered</h3>
            <div className="flex flex-wrap gap-2">
              {dsa.covered.map((t) => (
                <span key={t} className={`${tag} inline-flex items-center gap-1`}>
                  <TechnologyIcon name={t} className="size-3.5" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Currently building on</h3>
            <div className="flex flex-wrap gap-2">
              {dsa.next.map((t) => (
                <span
                  key={t}
                  className={`${tag} inline-flex items-center gap-1 border border-dashed`}
                >
                  <TechnologyIcon name={t} className="size-3.5" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex flex-wrap gap-2">
            {dsa.profiles.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 px-4 flex items-center gap-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                {p.logoUrl ? (
                  <Image
                    src={p.logoUrl}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 object-contain"
                  />
                ) : (
                  <p.icon className="size-4" style={{ color: p.iconColor }} />
                )}
                {p.name}
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
