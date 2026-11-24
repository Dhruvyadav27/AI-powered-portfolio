import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { TechnologyIcon } from "@/components/technology-icon";

const BLUR_FADE_DELAY = 0.04;
const chip =
  "border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 text-sm font-medium text-foreground";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        {DATA.skillGroups.map((group, g) => (
          <div key={group.title} className="flex flex-col gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 10 + g * 0.03}>
              <h3 className="text-sm font-semibold text-muted-foreground">
                {group.title}
              </h3>
            </BlurFade>
            <div
              className={
                group.items.some((i) => i.topics)
                  ? "flex flex-col gap-3"
                  : "flex flex-wrap gap-2"
              }
            >
              {group.items.map((skill, i) => {
                const content = (
                  <>
                    {skill.icon ? (
                      <skill.icon
                        className="size-4 rounded overflow-hidden object-contain"
                        style={{ color: skill.iconColor }}
                      />
                    ) : (
                      <TechnologyIcon
                        name={skill.name}
                        className="size-4 shrink-0"
                      />
                    )}
                    <span>{skill.name}</span>
                  </>
                );
                const el = skill.href ? (
                  <a
                    href={skill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${chip} hover:bg-muted transition-colors`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={chip}>{content}</div>
                );
                return (
                  <BlurFade
                    key={skill.name}
                    delay={BLUR_FADE_DELAY * 10 + g * 0.03 + i * 0.03}
                  >
                    {skill.topics ? (
                      <div className="flex flex-wrap items-center gap-2">
                        {el}
                        <span className="text-muted-foreground">→</span>
                        {skill.topics.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                          >
                            <TechnologyIcon
                              name={t}
                              className="mr-1 inline size-3.5 align-[-2px]"
                            />
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : (
                      el
                    )}
                  </BlurFade>
                );
              })}
            </div>
            {group.note && (
              <p className="text-xs text-muted-foreground">{group.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
