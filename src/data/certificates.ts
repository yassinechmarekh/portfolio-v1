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
      date: new Date("2024-03-10"),
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      date: new Date("2024-03-10"),
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      date: new Date("2024-03-10"),
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      date: new Date("2024-03-10"),
    },
    {
      image: "/images/certificates/react.jpg",
      title: certificatesTilte.react,
      platform: "Codecademy",
      isFavorite: true,
      date: new Date("2024-03-10"),
    },
  ];
};

export default getCertificates;
