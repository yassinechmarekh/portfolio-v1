import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
