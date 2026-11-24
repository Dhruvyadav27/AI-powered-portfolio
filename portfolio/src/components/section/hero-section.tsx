import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
          <div className="gap-3 flex flex-col order-2 md:order-1">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground ring-2 ring-border/20">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {DATA.status}
              </div>
            </BlurFade>
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
              text={DATA.name}
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 3}
              className="text-xl font-medium tracking-tight sm:text-2xl"
              text={DATA.role}
            />
            <BlurFadeText
              className="text-muted-foreground max-w-[600px] md:text-lg"
              delay={BLUR_FADE_DELAY * 4}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
              <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
              <AvatarFallback className="text-2xl font-semibold md:text-3xl">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/#projects">
                View Projects <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={DATA.resumeUrl} download>
                <Download className="mr-2 size-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">
                <Mail className="mr-2 size-4" /> Contact Me
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
