"use client";

import useTypingEffect from "@/hooks/useTypingEffect";
import React from "react";

interface AnimatedHeadingProps {
  roles: string[];
}

const AnimatedHeading = ({ roles }: AnimatedHeadingProps) => {
  const typedText = useTypingEffect(roles);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mx-auto text-center font-bold tracking-tight mb-6 h-20 md:h-24">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        {typedText}
      </span>
      <span className="animate-blink border-r-4 border-cyan-400 ml-1"></span>
    </h1>
  );
};

export default AnimatedHeading;
