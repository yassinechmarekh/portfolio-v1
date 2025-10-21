import { getLocales } from "@/lib/locales";
import { LocaleType, ProjectType } from "@/types";

const getProjects = async (lang: LocaleType): Promise<ProjectType[]> => {
  const locales = await getLocales(lang);
  const projectsItems = locales.home.projects.projectItems;

  return [
    {
      title: projectsItems.titles.selfiecadeau,
      description: projectsItems.descriptions.selfiecadeau,
      image:
        "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
      video: "/video/test.mp4",
      stacks: ["Next.js", "TypeScript", "Stripe", "CSS-in-JS"],
      url: "https://lu.ma/",
      github: "https://github.com/",
      publishedAt: new Date("2024-03-10"),
      isOnline: true,
      isFavorite: true,
    },
    {
      title: projectsItems.titles.sydigital,
      description: projectsItems.descriptions.sydigital,
      image:
        "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
      video: "/video/test.mp4",
      stacks: ["React", "Node.js", "MongoDB", "Socket.io"],
      url: "https://codespace.dev/",
      github: "https://github.com/",
      publishedAt: new Date("2024-07-18"),
      isOnline: true,
      isFavorite: true,
    },
    {
      title: projectsItems.titles.blogify,
      description: projectsItems.descriptions.blogify,
      image:
        "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
      video: "/video/test.mp4",
      stacks: ["Laravel", "MySQL", "Bootstrap", "Mailtrap"],
      url: "https://selfiecadeau.com/",
      github: "https://github.com/",
      publishedAt: new Date("2025-01-25"),
      isOnline: true,
      isFavorite: true,
    },
    {
      title: projectsItems.titles.msmvoyages,
      description: projectsItems.descriptions.msmvoyages,
      image:
        "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
      video: "/video/test.mp4",
      stacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
      url: "https://msmvoyages.ma/",
      github: "https://github.com/",
      publishedAt: new Date("2025-03-15"),
      isOnline: true,
      isFavorite: true,
    },
    {
      title: projectsItems.titles.apprentis,
      description: projectsItems.descriptions.apprentis,
      image:
        "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
      video: "/video/test.mp4",
      stacks: ["Laravel", "Blade", "MySQL", "JavaScript"],
      url: "https://apprentiscenter.com/",
      github: "https://github.com/",
      publishedAt: new Date("2025-06-02"),
      isOnline: false,
      isFavorite: false,
    },
  ];
};

const projects: ProjectType[] = [
  {
    title: "Luma - Delightful events start here.",
    description:
      "Find Luma events, join groups, or start your own. Make new friends and connect with like-minded people. Meet people near you who share your interests.",
    image:
      "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
    video: "/video/test.mp4",
    stacks: ["Next.js", "TypeScript", "Stripe", "CSS-in-JS"],
    url: "https://lu.ma/",
    github: "https://github.com/",
    publishedAt: new Date("2024-03-10"),
    isOnline: true,
    isFavorite: true,
  },
  {
    title: "CodeSpace - Developer community platform",
    description:
      "A modern community platform for developers to share projects, collaborate, and grow together. Features include chat, blog posts, and project showcases.",
    image:
      "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
    video: "/video/test.mp4",
    stacks: ["React", "Node.js", "MongoDB", "Socket.io"],
    url: "https://codespace.dev/",
    github: "https://github.com/",
    publishedAt: new Date("2024-07-18"),
    isOnline: true,
    isFavorite: true,
  },
  {
    title: "Selfie Cadeau - Personalized gift shop",
    description:
      "An e-commerce platform for customizable gifts, featuring photo uploads, live previews, and secure online payments.",
    image:
      "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
    video: "/video/test.mp4",
    stacks: ["Laravel", "MySQL", "Bootstrap", "Mailtrap"],
    url: "https://selfiecadeau.com/",
    github: "https://github.com/",
    publishedAt: new Date("2025-01-25"),
    isOnline: true,
    isFavorite: false,
  },
  {
    title: "MSM Voyages - Travel agency website",
    description:
      "A responsive travel agency website showcasing destinations, travel packages, and easy booking functionality with an admin dashboard.",
    image:
      "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
    video: "/video/test.mp4",
    stacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://msmvoyages.ma/",
    github: "https://github.com/",
    publishedAt: new Date("2025-03-15"),
    isOnline: true,
    isFavorite: true,
  },
  {
    title: "Apprentis Center - Language tutoring platform",
    description:
      "An educational website for language tutoring with course listings, student registration, and a blog section managed by admins.",
    image:
      "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
    video: "/video/test.mp4",
    stacks: ["Laravel", "Blade", "MySQL", "JavaScript"],
    url: "https://apprentiscenter.com/",
    github: "https://github.com/",
    publishedAt: new Date("2025-06-02"),
    isOnline: false,
    isFavorite: true,
  },
];

export default getProjects;
