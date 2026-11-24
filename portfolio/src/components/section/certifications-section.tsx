import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { Award, ArrowUpRight, Clock } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <h2 className="text-xl font-bold">Certifications</h2>
        </BlurFade>
        <div className="flex flex-col gap-5">
          {DATA.certifications.map((c, i) => (
            <BlurFade key={c.title} delay={BLUR_FADE_DELAY * 21 + i * 0.05}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-x-4"
              >
                <div className="size-10 flex-none rounded-full border bg-muted ring-2 ring-border flex items-center justify-center overflow-hidden">
                  {c.logoUrl ? (
                    <Image
                      src={c.logoUrl}
                      alt=""
                      width={40}
                      height={40}
                      className="size-full object-contain"
                    />
                  ) : (
                    <Award className="size-5 text-foreground/80" />
                  )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex flex-wrap items-center gap-2 font-semibold leading-none">
                    {c.title}
                    {c.status && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                        <Clock className="size-3" />
                        {c.status}
                      </span>
                    )}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {c.issuer}
                  </div>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
