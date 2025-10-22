import React from "react";
import CareerCard from "@/components/career-card";
import Container from "@/components/container";
import { Title } from "@/components/text";
import { LocaleType } from "@/types";
import { getLocales } from "@/lib/locales";

interface ExperienceSectionProps {
  lang: LocaleType;
}

const ExperienceSection = async ({lang}: ExperienceSectionProps) => {
  const experienceContent = (await getLocales(lang)).about.experience;
  return (
    <section>
      <Container>
        <Title
          className={"text-lg xs:text-xl md:text-2xl xl:text-3xl font-bold text-cyan-500 dark:text-cyan-300"}
        >
          {experienceContent.title}
        </Title>
        <div className={"space-y-6 mt-4"}>
          {experienceContent.items.map((item, index) => (
            <CareerCard
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
              details={item.details}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
