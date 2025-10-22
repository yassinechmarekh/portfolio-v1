import React from "react";
import Container from "@/components/container";
import { Title } from "@/components/text";
import CertificateCard from "@/components/certificate-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocaleType } from "@/types";
import getCertificates from "@/data/certificates";

interface CertificatesAboutProps {
  lang: LocaleType;
}

const CertificatesAbout = async ({ lang }: CertificatesAboutProps) => {
  const certificates = (await getCertificates(lang)).filter(
    (certicate) => certicate.isFavorite && certicate
  );

  return (
    <section>
      <Container>
        <Title
          className={"text-lg xs:text-xl md:text-2xl xl:text-3xl font-bold text-cyan-500 dark:text-cyan-300"}
        >
          Certificates
        </Title>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 my-4"
          }
        >
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={"last:block last:lg:hidden last:2xl:block"}
            >
              <CertificateCard
                certificate={certificate}
              />
            </div>
          ))}
        </div>
        <div className={"flex justify-center"}>
          <Button variant={"secondary"} asChild>
            <Link href={"/"}>View More</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CertificatesAbout;
