export type LocaleType = "en" | "fr";

export type SkillType = {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  logo: string;
  type: "Frontend" | "Backend" | "Tools";
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  video: string;
  stack: string[];
  url: string;
  publishedAt: Date;
  github: string;
  isOnline: boolean;
  isFavorite: boolean;
}

export type CertificateType = {
  image: string;
  title: string;
  platform: string;
  isFavorite: boolean;
  type: "Frontend" | "Backend" | "Tools";
}