import CTA from "@/components/cta";
import Header from "@/components/header";
import { MenuLinks } from "@/lib/constants";
import { getLocales } from "@/lib/locales";
import AboutHome from "@/sections/home/about-home";
import HeroHome from "@/sections/home/hero-home";
import ProjectsHome from "@/sections/home/projects-home";
import SkillsHome from "@/sections/home/skills-home";
import { LocaleType } from "@/types";
import { cookies } from "next/headers";

interface HomeProps {
  params: Promise<{ lang: LocaleType }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const locales = await getLocales(lang);

  return (
    <div>
      <HeroHome lang={lang} />
      <AboutHome aboutContent={locales.home.about} />
      <SkillsHome skillsContent={locales.home.skills} />
      <ProjectsHome lang={lang} projectsContent={locales.home.projects} />
      <section id={MenuLinks.CONTACT}>
        <CTA
          title={locales.home.cta.title}
          parag={locales.home.cta.description}
          button={locales.home.cta.button}
        />
      </section>
    </div>
  );
}
