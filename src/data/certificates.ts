import { getLocales } from "@/lib/locales";
import { CertificateType, LocaleType } from "@/types";

const getCertificates = async (
  lang: LocaleType
): Promise<CertificateType[]> => {
  const certificatesTilte = (await getLocales(lang)).certificates.items;
  return [
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: false,
      type: "Frontend",
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      type: "Backend",
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      type: "Tools",
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      type: "Backend",
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      type: "Frontend",
    },
  ];
};

export default getCertificates;
