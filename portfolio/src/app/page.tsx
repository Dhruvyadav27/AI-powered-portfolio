/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BeyondCodeSection from "@/components/section/beyond-code-section";
import CertificationsSection from "@/components/section/certifications-section";
import DsaSection from "@/components/section/dsa-section";
import SkillsSection from "@/components/section/skills-section";
import AboutSection from "@/components/section/about-section";
import HeroSection from "@/components/section/hero-section";
import GetInTouchSection from "@/components/section/get-in-touch-section";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <DsaSection />
      <BeyondCodeSection />
      <CertificationsSection />
      <section id="profiles">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <GetInTouchSection />
        </BlurFade>
      </section>
    </main>
  );
}
