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

export const metadata = {
  title: "About",
  description:
    "Learn more about me — my background, skills, and passion for modern web development using technologies like Next.js, React and Node.js.",
};

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
          <HeaderSection title={about.title} description={about.description} />
        </Container>
      </section>
      <HeroAbout heroContent={about.hero} />
      <EducationSection lang={lang} />
      <ExperienceSection lang={lang} />
      <SkillsAbout lang={lang} />
      <CertificatesAbout lang={lang} />
      <CTA
        title={about.cta.title}
        parag={about.cta.description}
        button={about.cta.button}
      />
    </div>
  );
};

export default AboutPage;
