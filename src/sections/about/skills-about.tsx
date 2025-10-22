import React from "react";
import Container from "@/components/container";
import { Title } from "@/components/text";
import skills from "@/data/skills";
import SkillItem from "@/components/skill-item";
import { LocaleType } from "@/types";
import { getLocales } from "@/lib/locales";

interface SkillsAboutProps {
  lang: LocaleType;
}

const SkillsAbout = async ({ lang }: SkillsAboutProps) => {
  const skillsContent = (await getLocales(lang)).about.skills;
  return (
    <section>
      <Container>
        <Title
          className={
            "text-lg xs:text-xl md:text-2xl xl:text-3xl font-bold text-cyan-500 dark:text-cyan-300"
          }
        >
          {skillsContent.title}
        </Title>
        <div className={"space-y-6 mt-4 ml-6"}>
          <div className={"space-y-4"}>
            <h3 className={"font-semibold text-base xs:text-lg"}>
              {skillsContent.frontend}
            </h3>
            <div className={"flex flex-wrap gap-6"}>
              {skills
                .filter((skill) => skill.type === "Frontend" && skill)
                .map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
            </div>
          </div>
          <div className={"space-y-4"}>
            <h3 className={"font-semibold text-base xs:text-lg"}>
              {skillsContent.backend}
            </h3>
            <div className={"flex flex-wrap gap-6"}>
              {skills
                .filter((skill) => skill.type === "Backend" && skill)
                .map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
            </div>
          </div>
          <div className={"space-y-4"}>
            <h3 className={"font-semibold text-base xs:text-lg"}>
              {skillsContent.tools}
            </h3>
            <div className={"flex flex-wrap gap-6"}>
              {skills
                .filter((skill) => skill.type === "Tools" && skill)
                .map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsAbout;
