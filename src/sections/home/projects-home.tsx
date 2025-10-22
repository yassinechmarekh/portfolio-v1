import React from "react";
import Container from "@/components/container";
import { AppRoutes, MenuLinks } from "@/lib/constants";
import HeaderSection from "@/components/header-section";
import ProjectCard from "@/components/project-card";
import projects from "@/data/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocaleType } from "@/types";
import getProjects from "@/data/projects";

interface ProjectsHomeProps {
  projectsContent: any;
  lang: LocaleType;
}

const ProjectsHome = async ({ projectsContent, lang }: ProjectsHomeProps) => {
  const projects = await getProjects(lang);
  return (
    <section className={"py-10"} id={MenuLinks.PROJECTS}>
      <Container className={"space-y-6"}>
        <HeaderSection
          title={projectsContent.title}
          description={projectsContent.description}
        />
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
          {projects.map((project, index) => {
            if (project.isFavorite) {
              return <ProjectCard key={index} project={project} />;
            }
          })}
        </div>
        <div className={"flex justify-center"}>
          <Button variant={"secondary"} asChild>
            <Link href={`/${lang}/${AppRoutes.PROJECTS}`}>{projectsContent.button}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsHome;
