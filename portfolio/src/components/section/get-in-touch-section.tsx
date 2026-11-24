import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Mail } from "lucide-react";
import { Icons } from "@/components/icons";

export default function GetInTouchSection() {
  const email = DATA.contact.email;
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
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
            Get in Touch
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            Have a <strong className="text-foreground">Java Backend Internship</strong>{" "}
            opportunity or want to collaborate? Message me on LinkedIn or send
            an email, and I&apos;ll respond whenever I can.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="mr-2 size-4" /> Message on LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-2 size-4" /> Send an Email
            </a>
          </Button>
        </div>
        <a
          href={`mailto:${email}`}
          className="break-all text-sm font-medium text-primary underline underline-offset-4"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
