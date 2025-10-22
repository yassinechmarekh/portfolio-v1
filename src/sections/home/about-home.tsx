"use client";

import React from "react";
import Container from "@/components/container";
import HeaderSection from "@/components/header-section";
import ProfileCard from "@/components/react-bits/ProfileCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppRoutes, MenuLinks } from "@/lib/constants";
import ParagEffect from "@/components/parag-effect";
import { LocaleType } from "@/types";

interface AboutHomeProps {
  aboutContent: any;
  lang: LocaleType
}

const AboutHome = ({ aboutContent, lang }: AboutHomeProps) => {
  const { theme } = useTheme();

  return (
    <section className={"py-10"} id={MenuLinks.ABOUT}>
      <Container>
        <HeaderSection
          title="About Me"
          description="Who I am, what I do, and what drives me to create."
        />
        <div className={"mt-6 flex flex-col lg:flex-row gap-8 items-center"}>
          <ProfileCard
            name={aboutContent.profileCard.fullName}
            title={aboutContent.profileCard.job}
            handle={aboutContent.profileCard.user}
            status={aboutContent.profileCard.status}
            contactText={aboutContent.profileCard.contact}
            avatarUrl={
              theme === "dark"
                ? "/images/about-home-dark.png"
                : "/images/about-home-light.png"
            }
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            showBehindGradient={false}
            onContactClick={() =>
              (window.location.href = "mailto:yassinechmarekh88@gmail.com")
            }
          />
          <div className="space-y-3">
            <h1 className="font-semibold text-lg sm:text-xl font-ubuntu">
              {aboutContent.text.title}
            </h1>

            <ParagEffect paragraph={aboutContent.text.parag} />

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutContent.cards.map(
                (
                  card: { title: string; description: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover-effect"
                  >
                    <p className="font-bold text-cyan-600 dark:text-cyan-400">
                      {card.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* discover more button */}
            <Button variant={"secondary"} className={"mt-4 rounded-sm"} asChild>
              <Link href={`/${lang}/${AppRoutes.ABOUT}`}>{aboutContent.button}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHome;
