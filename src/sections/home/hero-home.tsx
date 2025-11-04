"use client";

import React from "react";
import Container from "@/components/container";
import StarBorder from "@/components/react-bits/StarBorder";
import { Parag } from "@/components/text";
import AnimatedHeading from "@/components/animated-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroEffect from "@/components/hero-effect";
import { MenuLinks } from "@/lib/constants";
import { motion } from "framer-motion";
import { LocaleType } from "@/types";

interface HeroHomeProps {
  lang: LocaleType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroContent: any;
}

const HeroHome = ({ lang, heroContent }: HeroHomeProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className={"relative sm:min-h-screen"} id={MenuLinks.HOME}>
      <HeroEffect />
      <Container>
        <motion.div
          className={
            "flex flex-col items-center justify-center min-h-screen space-y-4 max-w-5xl py-10 mx-auto z-10"
          }
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.div variants={badgeVariants}>
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="3s"
              >
                <Parag>{heroContent.intro_badge}</Parag>
              </StarBorder>
            </motion.div>
            <motion.div variants={itemVariants}>
              <AnimatedHeading roles={heroContent.title} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Parag className={"text-center"}>{heroContent.description}</Parag>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Parag
                className={
                  "italic text-center text-cyan-600/80 dark:text-cyan-400"
                }
              >
                {heroContent.quote}
              </Parag>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className={"flex flex-wrap justify-center gap-4"}
            >
              <Button variant={"primary"} size={"lg"} asChild>
                <Link href={`/${lang}/#${MenuLinks.PROJECTS}`}>
                  {heroContent.buttons.projects}
                </Link>
              </Button>
              <Button variant={"secondary"} size={"lg"} asChild>
                <Link href={`/${lang}/#${MenuLinks.CONTACT}`}>
                  {heroContent.buttons.contact}
                </Link>
              </Button>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroHome;
