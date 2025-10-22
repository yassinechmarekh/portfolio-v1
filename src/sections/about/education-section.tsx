import React from "react";
import Container from "@/components/container";
import { Title } from "@/components/text";
import CareerCard from "@/components/career-card";
import { LocaleType } from "@/types";
import { getLocales } from "@/lib/locales";

interface EducationSectionProps {
  lang: LocaleType;
}

const EducationSection = async ({ lang }: EducationSectionProps) => {
  const educationContent = (await getLocales(lang)).about.education;
  return (
    <section>
      <Container>
        <Title
          className={"text-lg xs:text-xl md:text-2xl xl:text-3xl font-bold text-cyan-500 dark:text-cyan-300"}
        >
          {educationContent.title}
        </Title>
        <div className={"space-y-6 mt-4"}>
          {educationContent.items.map((item, index) => (
            <CareerCard
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
