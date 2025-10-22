import React from "react";
import Container from "@/components/container";
import CTA from "@/components/cta";
import HeaderSection from "@/components/header-section";
import { getLocales } from "@/lib/locales";
import CertificatesList from "@/sections/certificates/certificates-list";
import { LocaleType } from "@/types";
import getCertificates from "@/data/certificates";

export const metadata = {
  title: "Certificates",
  description:
    "Explore my professional certificates showcasing my expertise in web development, React, JavaScript, and modern technologies.",
};

interface CertificatesPageProps {
  params: Promise<{ lang: LocaleType }>;
}

const CertificatesPage = async ({ params }: CertificatesPageProps) => {
  const { lang } = await params;
  const { certificates } = await getLocales(lang);
  const allCertificates = await getCertificates(lang);

  return (
    <div className={"mt-10 md:mt-30 space-y-10"}>
      <section>
        <Container>
          <HeaderSection
            title={certificates.title}
            description={certificates.description}
          />
        </Container>
      </section>
      <CertificatesList
        allCertificates={allCertificates}
        localeContent={certificates}
      />
      <CTA
        title={certificates.cta.title}
        parag={certificates.cta.description}
        button={certificates.cta.button}
      />
    </div>
  );
};

export default CertificatesPage;
