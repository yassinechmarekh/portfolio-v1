import React from "react";
import Container from "@/components/container";
import CTA from "@/components/cta";
import HeaderSection from "@/components/header-section";
import { getLocales } from "@/lib/locales";
import { LocaleType } from "@/types";
import ProjectsList from "@/sections/projects/projects-list";
import getProjects from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Browse a selection of my recent web projects — modern, performant applications built with the latest technologies.",
};

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
        title={projects.cta.title}
        parag={projects.cta.description}
        button={projects.cta.button}
      />
    </div>
  );
};

export default ProjectsPage;
