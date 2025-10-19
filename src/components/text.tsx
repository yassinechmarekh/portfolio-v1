import React from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

export const Parag = ({ className, children }: TextProps) => {
  return <p className={cn("text-xs xs:text-base", className)}>{children}</p>;
};
