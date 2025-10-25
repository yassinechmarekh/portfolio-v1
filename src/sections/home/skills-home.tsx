import React from "react";
import Container from "@/components/container";
import HeaderSection from "@/components/header-section";
import { MenuLinks } from "@/lib/constants";
import SkillItem from "@/components/skill-item";
import skills from "@/data/skills";

interface SkillsHomeProps {
  skillsContent: Record<string, string>;
}

const SkillsHome = ({ skillsContent }: SkillsHomeProps) => {
  return (
    <section className={"py-10 overflow-hidden"} id={MenuLinks.SKILLS}>
      <Container>
        <HeaderSection
          title={skillsContent.title}
          description={skillsContent.description}
        />
        <div className={"flex flex-wrap gap-4 justify-center mt-10"}>
          {skills.map((skill, index) => (
            <div key={index}>
              <SkillItem key={skill.name} skill={skill} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsHome;
