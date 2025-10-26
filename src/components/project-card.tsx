"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Parag } from "./text";
import { ProjectType } from "@/types";
import { usePathname } from "next/navigation";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = segments[1];

  return (
    <div
      className="grid  gap-4 group rounded-md"
      onMouseEnter={(e) => {
        const video = e.currentTarget.querySelector("video");
        if (video) {
          video.play();
          video.playbackRate = 2;
        }
      }}
      onMouseLeave={(e) => {
        const video = e.currentTarget.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }}
    >
      <div className="aspect-video relative">
        <Image
          alt={project.title}
          width={600}
          height={600}
          priority
          src={project.image}
          className="size-full object-cover object-top rounded-md transition-opacity duration-300 group-hover:opacity-0"
        />

        <video
          className="absolute hidden md:block size-full inset-0 object-cover rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="space-y-2 sm:space-y-1">
        <h2 className="font-medium text-sm xs:text-base">{project.title}</h2>

        <span className={"text-xs text-cyan-600 dark:text-cyan-300"}>
          {project.stack.join(" / ")}
        </span>

        <Parag className={cn("line-clamp-6 sm:line-clamp-3 !mt-4")}>
          {project.description}
        </Parag>

        <div className="flex items-center gap-4 !mt-2">
          {project.isOnline && (
            <Button variant={"link"} asChild>
              <Link href={project.url} target="_blank">
                <ExternalLink size={12} />
                {lang === "fr" ? (
                  <span>Voir le site</span>
                ) : (
                  <span>Live Preview</span>
                )}
              </Link>
            </Button>
          )}
          <Button variant={"link"} asChild>
            <Link href={project.github} target="_blank">
              <Github size={12} />
              {lang === "fr" ? (
                <span>Dépôt Github</span>
              ) : (
                <span>Github Repository</span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
