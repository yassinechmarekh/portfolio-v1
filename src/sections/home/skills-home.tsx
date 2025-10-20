import React from "react";
import Container from "@/components/container";
import HeaderSection from "@/components/header-section";
import { MenuLinks } from "@/lib/constants";
import SkillItem from "@/components/skill-item";
import { SkillType } from "@/types";

const skillsData : SkillType[] = [
  { name: "HTML5", proficiency: "Expert", logo: "html5" },
  { name: "Css", proficiency: "Advanced", logo: "css" },
  { name: "JavaScript", proficiency: "Intermediate", logo: "javascript" },
  { name: "TailwindCSS", proficiency: "Advanced", logo: "tailwindcss" },
  { name: "TypeScript", proficiency: "Intermediate", logo: "typescript" },
  { name: 'React', proficiency: 'Intermediate', logo: 'react' },
  { name: "Next.js", proficiency: "Intermediate", logo: "nextdotjs" },
  { name: "ShadCn", proficiency: "Intermediate", logo: "shadcnui" },
  { name: "Node.js", proficiency: "Intermediate", logo: "nodedotjs" },
  { name: "Express.js", proficiency: "Intermediate", logo: "express" },
  { name: "MongoDB", proficiency: "Intermediate", logo: "mongodb" },
  { name: "Git", proficiency: "Intermediate", logo: "git" },
  { name: "Github", proficiency: "Intermediate", logo: "github" },
  { name: "Postman", proficiency: "Intermediate", logo: "postman" },
  { name: "Vercel", proficiency: "Intermediate", logo: "vercel" },
];

const SkillsHome = () => {
  return (
    <section className={"py-10"} id={MenuLinks.SKILLS}>
      <Container>
        <HeaderSection
          title="My Skills"
          description="Explore my range of technical skills, from front-end design to back-end development, showcasing my ability to build efficient, modern, and user-friendly web solutions."
        />
        <div className={'flex flex-wrap gap-4 justify-center mt-10'}>
          {skillsData.map((skill, index) => (
            <div key={index}>
              <SkillItem
                key={skill.name}
                skill={skill}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsHome;
