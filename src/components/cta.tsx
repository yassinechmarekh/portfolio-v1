"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Container from "./container";
import ShinyText from "./react-bits/ShinyText";
import { Parag } from "./text";
import Link from "next/link";

interface CTAProps {
  title: string;
  parag: string;
  button: string;
}

const CTA = ({ title, parag, button }: CTAProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className={"my-10"}>
      <Container>
        <div
          ref={containerRef}
          className="relative w-full rounded-sm bg-slate-100/70 dark:bg-background/80 backdrop-blur-sm border border-slate-700/50 dark:border-white/20 overflow-hidden flex items-center justify-center"
        >
          <div
            className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-100 ease-out pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(85, 223, 247, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)",
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
            }}
          />

          <div
            className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl transition-all duration-150 ease-out pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgb(0, 217, 255) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)",
              left: `${mousePosition.x - 160}px`,
              top: `${mousePosition.y - 160}px`,
            }}
          />

          {/* Content */}
          <div className="relative p-10 text-center max-w-5xl">
            <ShinyText
              text={title}
              disabled={false}
              speed={3}
              className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6"
            />
            <Parag className="text-base xs:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mx-auto mb-8 text-balance">
              {parag}
            </Parag>
            <Button
              variant={"secondary"}
              size="lg"
              className="font-semibold px-8 py-6 text-base xs:text-lg"
              asChild
            >
              <Link href={"mailto:yassinechmarekh88@gmail.com"}>
                {button}
              </Link>
            </Button>
          </div>

          {/* Decorative grid background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
