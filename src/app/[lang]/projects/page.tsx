import React from "react";
import Container from "@/components/container";
import CTA from "@/components/cta";
import HeaderSection from "@/components/header-section";
import { getLocales } from "@/lib/locales";
import { LocaleType } from "@/types";
import ProjectsList from "@/sections/projects/projects-list";
import getProjects from "@/data/projects";

interface ProjectsPageProps {
  params: Promise<{ lang: LocaleType }>;
}

const ProjectsPage = async ({ params }: ProjectsPageProps) => {
  const { lang } = await params;
  const { projects } = await getLocales(lang);
  const allProjects = await getProjects(lang);
  return (
    <div className={"mt-10 md:mt-30 space-y-10"}>
      <section>
        <Container>
          <HeaderSection
            title={projects.title}
            description={projects.description}
          />
        </Container>
      </section>
      <ProjectsList allProjects={allProjects} localeContent={projects} />
      <CTA
        title={"Let’s Build Something Amazing Together"}
        parag={
          "I’m always open to new projects, collaborations, or just a friendly chat about code."
        }
        button={"📩 Contact Me"}
      />
    </div>
  );
};

export default ProjectsPage;
