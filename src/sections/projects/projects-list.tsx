"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { ProjectType } from "@/types";
import ProjectCard from "@/components/project-card";
import { Parag } from "@/components/text";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsListProps {
  allProjects: ProjectType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localeContent: any;
}

const ProjectsList = ({ allProjects, localeContent }: ProjectsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const techFilters = [...new Set(allProjects.flatMap((p) => p.stack))].sort();

  const toogleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const toggleFilter = (tech: string) => {
    setActiveFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredAndSortedProjects = useMemo(() => {
    return allProjects
      .filter((project) => {
        const searchMatch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const filterMatch =
          activeFilters.length === 0 ||
          activeFilters.every((filter) => project.stack.includes(filter));
        return searchMatch && filterMatch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();

        if (sortOrder === "asc") {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
  }, [searchTerm, sortOrder, activeFilters, allProjects]);

  const clearFilters = () => {
    setActiveFilters([]);
    setIsFiltersOpen(false);
    setSearchTerm("");
  };

  return (
    <section>
      <Container>
        {/* Search, Sort & Filter Bar */}
        <div
          className="bg-gray-100/80 dark:bg-black/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 mb-12 border border-slate-700/50 dark:border-white/20 animate-fadeInUp"
        >
          {/* Mobile Controls */}
          <div className="md:hidden">
            <div className="flex items-center gap-4">
              <Input
                type="text"
                placeholder={localeContent.searchBar.input}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant={"secondary"}
                className={
                  "[&_svg]:size-4 xs:[&_svg]:size-5 [&_svg]:text-slate-700/80 dark:[&_svg]:text-white/80 rounded-lg"
                }
                onClick={toogleSortOrder}
              >
                {sortOrder === "asc" ? (
                  <ArrowDownNarrowWide />
                ) : (
                  <ArrowUpNarrowWide />
                )}
              </Button>
              <Button
                variant={"secondary"}
                className={
                  "[&_svg]:size-4 xs:[&_svg]:size-5 text-slate-700/80 dark:[&_svg]:text-white/80 rounded-lg"
                }
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <span className="sr-only">Filters</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </Button>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isFiltersOpen ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <div className="space-y-4 pt-4 border-t border-slate-700/50 dark:border-white/20">
                <div className="flex flex-wrap gap-2">
                  {techFilters.map((tech) => (
                    <span
                      key={tech}
                      onClick={() => toggleFilter(tech)}
                      className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-200 ${
                        activeFilters.includes(tech)
                          ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-700 dark:text-cyan-300 shadow-md"
                          : "bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-cyan-500/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant={"default"}
                  className="w-full rounded-sm bg-black/80 hover:bg-black dark:bg-white/90 dark:hover:bg-white"
                  onClick={clearFilters}
                >
                  {localeContent.searchBar.clear}
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4 mb-4">
              <Input
                type="text"
                placeholder={localeContent.searchBar.input}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={"flex-1"}
              />
              <Button
                variant={"secondary"}
                className={
                  "flex-1 [&_svg]:size-5 text-slate-700/80 dark:text-white/80 [&_svg]:text-slate-700/80 dark:[&_svg]:text-white/80 rounded-lg hover:border-slate-700 dark:hover:border-white hover:text-slate-700 dark:hover:text-white hover:[&_svg]:text-slate-700 dark:hover:[&_svg]:text-white"
                }
                onClick={toogleSortOrder}
              >
                {sortOrder === "asc" ? (
                  <div className={"flex items-center justify-between w-full"}>
                    <span>{localeContent.searchBar.sort}</span>
                    <ArrowDownNarrowWide />
                  </div>
                ) : (
                  <div className={"flex items-center justify-between w-full"}>
                    <span>{localeContent.searchBar.sort}</span>
                    <ArrowUpNarrowWide />
                  </div>
                )}
              </Button>
              <Button
                variant={"default"}
                className="rounded-sm bg-black/80 hover:bg-black dark:bg-white/90 dark:hover:bg-white"
                onClick={clearFilters}
              >
                {localeContent.searchBar.clear}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {techFilters.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-200 ${
                    activeFilters.includes(tech)
                      ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-700 dark:text-cyan-300 shadow-md"
                      : "bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-cyan-500/50"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredAndSortedProjects.length === 0 && (
          <div className="text-center py-16 animate-fadeInUp">
            <Parag>{localeContent.noResult}</Parag>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectsList;
