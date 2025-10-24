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

export enum AppRoutes {
  ROOT = "/",
  ABOUT = "about",
  PROJECTS = "projects",
  CERTIFICATES = "certificates",
}

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yassinechmarekh",
    icon: Github,
    className: "hover:bg-gray-400 hover:text-black",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yassine-chmarekh",
    icon: Linkedin,
    className: "hover:bg-blue-700 hover:text-white",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yassinechmarekh",
    icon: Instagram,
    className:
      " hover:bg-gradient-to-r from-rose-400 to-red-500 hover:text-white",
  },
];
