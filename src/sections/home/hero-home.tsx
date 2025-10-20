import React from "react";
import Container from "@/components/container";
import StarBorder from "@/components/react-bits/StarBorder";
import { Parag } from "@/components/text";
import AnimatedHeading from "@/components/animated-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getLocales } from "@/lib/locales";
import { LocaleType } from "@/types";
import HeroEffect from "@/components/hero-effect";
import { MenuLinks } from "@/lib/constants";

interface HeroHomeProps {
  lang: LocaleType;
}

const HeroHome = async ({ lang }: HeroHomeProps) => {
  const { home } = await getLocales(lang);
  const content = home.hero;
  return (
    <section className={"relative min-h-screen"} id={MenuLinks.HOME}>
      <HeroEffect />
      <Container
        className={
          "flex flex-col items-center justify-center space-y-4 max-w-5xl min-h-screen py-10 z-10"
        }
      >
        <StarBorder
          as="button"
          className="custom-class"
          color="cyan"
          speed="3s"
        >
          <Parag>{content.intro_badge}</Parag>
        </StarBorder>
        <AnimatedHeading roles={content.title} />
        <Parag className={"text-center"}>{content.description}</Parag>
        <Parag
          className={"italic text-center text-cyan-600/80 dark:text-cyan-400"}
        >
          {content.quote}
        </Parag>
        <div className={"flex flex-wrap justify-center gap-4"}>
          <Button variant={"primary"} size={"lg"} asChild>
            <Link href={"/"}>{content.buttons.projects}</Link>
          </Button>
          <Button variant={"secondary"} size={"lg"} asChild>
            <Link href={"/"}>{content.buttons.contact}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroHome;
