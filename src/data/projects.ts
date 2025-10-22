import { getLocales } from "@/lib/locales";
import { LocaleType, ProjectType } from "@/types";

const getProjects = async (lang: LocaleType): Promise<ProjectType[]> => {
  const locales = await getLocales(lang);
  const projectsItems = locales.projects.items;

  return [
    {
      title: projectsItems.titles.selfiecadeau,
      description: projectsItems.descriptions.selfiecadeau,
      image:
        "https://faisal-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluma.39da721d.png&w=3840&q=75",
      video: "/video/test.mp4",
      stack: ["Next.js", "TypeScript", "Stripe", "CSS-in-JS"],
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
      stack: ["React", "Node.js", "MongoDB", "Socket.io"],
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
      stack: ["Laravel", "MySQL", "Bootstrap", "Mailtrap"],
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
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
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
      stack: ["Laravel", "Blade", "MySQL", "JavaScript"],
      url: "https://apprentiscenter.com/",
      github: "https://github.com/",
      publishedAt: new Date("2025-06-02"),
      isOnline: false,
      isFavorite: false,
    },
  ];
};

export default getProjects;
