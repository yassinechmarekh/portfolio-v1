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
      image: "/images/certificates/advanced-react.png",
      title: certificatesTilte.advancedreact,
      platform: "Codecademy",
      isFavorite: true,
      type: "Frontend",
    },
    {
      image: "/images/certificates/express.png",
      title: certificatesTilte.express,
      platform: "Codecademy",
      isFavorite: true,
      type: "Backend",
    },
    {
      image: "/images/certificates/express-skills.png",
      title: certificatesTilte.expressskills,
      platform: "Codecademy",
      isFavorite: false,
      type: "Backend",
    },
    {
      image: "/images/certificates/mongodb.png",
      title: certificatesTilte.mongodb,
      platform: "Codecademy",
      isFavorite: false,
      type: "Backend",
    },
    {
      image: "/images/certificates/redux-toolkit.png",
      title: certificatesTilte.redux,
      platform: "Codecademy",
      isFavorite: false,
      type: "Frontend",
    },
    {
      image: "/images/certificates/react-redux.png",
      title: certificatesTilte.reactredux,
      platform: "Codecademy",
      isFavorite: false,
      type: "Frontend",
    },
    {
      image: "/images/certificates/git-github.png",
      title: certificatesTilte.gitgithub,
      platform: "Codecademy",
      isFavorite: true,
      type: "Tools",
    },
    {
      image: "/images/certificates/typescript.png",
      title: certificatesTilte.typescript,
      platform: "Codecademy",
      isFavorite: true,
      type: "Tools",
    },
  ];
};

export default getCertificates;
