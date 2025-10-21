import { Github, Instagram, Linkedin } from "lucide-react";

export enum Locales {
  ENGLISH = "en",
  FRENCH = "fr",
}

export enum CookiesKey {
  THEME = "theme",
  LOCALE = "locale",
}

export enum MenuLinks {
  HOME = "home",
  ABOUT = "about",
  SKILLS = "skills",
  PROJECTS = "projects",
  CONTACT = "contact",
}

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
  },
];
