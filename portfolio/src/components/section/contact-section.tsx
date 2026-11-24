import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Profiles</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Find me online
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            Open to a Java Backend Internship. Reach out on LinkedIn or
            explore my code and problem-solving profiles.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {DATA.profiles.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border bg-background border-border ring-2 ring-border/20 rounded-xl h-9 px-4 flex items-center gap-2 text-sm font-medium hover:bg-muted transition-colors"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
