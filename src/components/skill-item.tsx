"use client";

import React from "react";
import { useTheme } from "next-themes";
import { SkillType } from "@/types";

interface SkillItemProps {
  skill: SkillType;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  const {theme} = useTheme();

  return (
    <div
      className="group relative flex flex-col items-center"
      style={{ animationDelay: `${Math.random() * 0.5}s` }}
    >
      <div
        className="w-16 h-16 md:w-20 md:h-20 p-3 bg-gray-100 dark:bg-gray-900/50 rounded-full border border-gray-200 dark:border-gray-800/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-cyan-500/30 group-hover:shadow-lg group-hover:border-cyan-500/50 animate-float"
        style={{ animationDuration: `${3 + Math.random() * 2}s` }}
      >
        <img
          src={`https://cdn.simpleicons.org/${skill.logo}/${
            theme === "dark" ? "white" : "color"
          }`}
          alt={`${skill.name} logo`}
          className="w-10/12 h-10/12 object-contain"
        />
      </div>
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white border border-gray-400 dark:border-0 text-sm rounded-lg px-3 py-1.5 pointer-events-none whitespace-nowrap shadow-lg">
        {skill.name} -{" "}
        <span className="font-bold text-cyan-500 dark:text-cyan-400">{skill.proficiency}</span>
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-400 dark:border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default SkillItem;
