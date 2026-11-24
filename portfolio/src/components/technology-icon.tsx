import { Icons } from "@/components/icons";
import { SkillIcons } from "@/components/skill-icons";
import { Java } from "@/components/ui/svgs/java";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Database, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import Image from "next/image";

const TECHNOLOGY_LOGOS: Record<
  string,
  { src: string; width: number; className?: string }
> = {
  Mockito: {
    src: "/mockito-logo.png",
    width: 44,
    className: "h-4 w-11 shrink-0 object-contain",
  },
  "VS Code": {
    src: "/vscode-logo.svg",
    width: 16,
    className: "size-4 shrink-0 object-contain",
  },
};

const TECHNOLOGY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Java,
  "C++": SkillIcons.cpp,
  "Spring Boot": SkillIcons.springboot,
  "Spring Security": SkillIcons.springsecurity,
  "Spring Data JPA": SkillIcons.spring,
  Hibernate: SkillIcons.hibernate,
  JWT: SkillIcons.jwt,
  "Google OAuth": SkillIcons.google,
  MongoDB: SkillIcons.mongodb,
  "REST APIs": Icons.globe,
  RAG: Database,
  "Gemini API": Sparkles,
  PostgreSQL: Postgresql,
  Docker: SkillIcons.docker,
  "Redis (Spring Cache)": SkillIcons.redis,
  "Swagger / OpenAPI": SkillIcons.swagger,
};

export function TechnologyIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const logo = TECHNOLOGY_LOGOS[name];
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt=""
        width={logo.width}
        height={16}
        className={logo.className}
        aria-hidden="true"
      />
    );
  }

  const Icon = TECHNOLOGY_ICONS[name];
  if (!Icon) return null;

  return <Icon className={className} aria-hidden="true" />;
}
