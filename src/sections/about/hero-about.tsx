"use client";

import React from "react";
import Container from "@/components/container";
import TiltedCard from "@/components/react-bits/TiltedCard";
import ParagEffect from "@/components/parag-effect";
import { Parag } from "@/components/text";
import { socialLinks } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TrueFocus from "@/components/react-bits/TrueFocus";
import { useTheme } from "next-themes";

interface HeroAboutProps {
  heroContent: any;
}

const HeroAbout = ({ heroContent }: HeroAboutProps) => {
  const { theme } = useTheme();

  return (
    <section>
      <Container className={"flex flex-col items-center md:flex-row gap-10"}>
        <TiltedCard
          imageSrc={
            theme === "light"
              ? "/images/about-profile-light.png"
              : "/images/about-profile-dark.png"
          }
          altText="Yassine CHMAREKH"
          captionText="Yassine CHMAREKH"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Yassine CHMAREKH</p>
          }
        />
        <div className={"space-y-4"}>
          <div className={"flex items-center flex-wrap gap-4"}>
            <span className={"text-lg xs:text-2xl font-bold"}>
              {heroContent.hi}
            </span>
            <TrueFocus
              sentence="Yassine Chmarekh"
              manualMode={false}
              blurAmount={5}
              borderColor="#53eafd"
              animationDuration={0.3}
              pauseBetweenAnimations={1}
            />
          </div>
          <h3
            className={
              "font-bold text-cyan-600 dark:text-cyan-300 text-base xs:text-lg"
            }
          >
            {heroContent.jobPost}
          </h3>
          <ParagEffect paragraph={heroContent.aboutText} />
          <ul className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      className={cn(
                        "border border-input bg-background  hover:text-accent-foreground size-9  flex items-center justify-center rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2",
                        social.className
                      )}
                      aria-label={social.name}
                      target="_blank"
                      rel="external"
                    >
                      <social.icon size={18} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <span>{social.name}</span>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HeroAbout;
