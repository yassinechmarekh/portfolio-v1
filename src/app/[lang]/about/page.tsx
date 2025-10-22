import React from "react";
import HeaderSection from "@/components/header-section";
import Container from "@/components/container";
import HeroAbout from "@/sections/about/hero-about";
import { getLocales } from "@/lib/locales";
import { LocaleType } from "@/types";
import EducationSection from "@/sections/about/education-section";
import ExperienceSection from "@/sections/about/experience-section";
import CTA from "@/components/cta";
import CertificatesAbout from "@/sections/about/certificates-about";
import SkillsAbout from "@/sections/about/skills-about";

interface AboutPageProps {
  params: Promise<{ lang: LocaleType }>;
}

const AboutPage = async ({ params }: AboutPageProps) => {
  const { lang } = await params;
  const { about } = await getLocales(lang);
  return (
    <div className={"mt-10 md:mt-30 space-y-10"}>
      <section>
        <Container>
          <HeaderSection
            title={about.title}
            description={about.description}
          />
        </Container>
      </section>
      <HeroAbout heroContent={about.hero} />
      <EducationSection lang={lang} />
      <ExperienceSection lang={lang} />
      <SkillsAbout />
      <CertificatesAbout lang={lang} />
      <CTA
          title={"Let’s Build Something Amazing Together"}
          parag={"I’m always open to new projects, collaborations, or just a friendly chat about code."}
          button={"📩 Contact Me"}
        />
    </div>
  );
};

export default AboutPage;
