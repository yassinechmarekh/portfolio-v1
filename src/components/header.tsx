"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";
import { CookiesKey, MenuLinks } from "@/lib/constants";
import {
  BookOpen,
  Code,
  Grid3x3,
  Home,
  ImageIcon,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types";

interface HeaderProps {
  lang: LocaleType;
  menu: Record<string, string>;
}

const Header = ({ lang, menu }: HeaderProps) => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: "home", icon: Home, label: menu.home, href: `/#${MenuLinks.HOME}` },
    { id: "about", icon: User, label: menu.about, href: `/#${MenuLinks.ABOUT}` },
    { id: "skills", icon: Code, label: menu.skills, href: `/#${MenuLinks.SKILLS}` },
    { id: "projects", icon: BookOpen, label: menu.projects, href: `/#${MenuLinks.PROJECTS}` },
    { id: "contact", icon: Mail, label: menu.contact, href: `/#${MenuLinks.CONTACT}` },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Theme :", theme);
    setTheme(newTheme);
    Cookies.set(CookiesKey.THEME, newTheme, { expires: 365 });
  };

  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";

    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of navItems) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed bottom-6 md:bottom-auto top-auto md:top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 bg-slate-100/70 dark:bg-background/80 border border-slate-700/50 dark:border-white/20 rounded-full backdrop-blur-sm z-50">
      {/* Home button - always visible and highlighted */}
      <Link
        href={`/`}
        className={cn(
          "flex items-center justify-center w-9 h-9 rounded-full  hover-effect",
          activeSection === "home"
            ? "menu-item-active [&_svg]:text-slate-700 dark:[&_svg]:text-cyan-300"
            : "menu-item-inactive [&_svg]:text-slate-700 dark:[&_svg]:text-white dark:hover:[&_svg]:text-cyan-300"
        )}
      >
        <Home size={18} />
      </Link>

      {/* Divider */}
      <div className="w-px h-6 bg-slate-700/50 dark:bg-white/20 mx-1" />

      {/* Desktop navigation items - hidden on mobile */}
      <div className="hidden md:flex items-center gap-2 px-4">
        {navItems.slice(1).map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full group hover-effect",
                activeSection === item.id
                  ? "menu-item-active [&_svg]:text-slate-700 dark:[&_svg]:text-cyan-300"
                  : "menu-item-inactive [&_svg]:text-slate-700 hover:[&_svg]:text-slate-700 dark:[&_svg]:text-white dark:hover:[&_svg]:text-cyan-300"
              )}
            >
              <Icon
                size={18}
                className="text-slate-900 group-hover:text-slate-200"
              />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>

      {/* Mobile navigation items - icon only, visible on mobile */}
      <div className="flex md:hidden items-center gap-2">
        {navItems.slice(1).map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full",
                activeSection === item.id
                  ? "menu-item-active [&_svg]:text-slate-700 dark:[&_svg]:text-cyan-300"
                  : "menu-item-inactive [&_svg]:text-slate-700 hover:[&_svg]:text-slate-700 dark:[&_svg]:text-white dark:hover:[&_svg]:text-cyan-300"
              )}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Divider before language button toggle */}
      <div className="w-px h-6 bg-slate-700/50 dark:bg-white/20 mx-1" />

      {/* Language toggle button */}
      <span
        onClick={toggleLanguage}
        className="flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer menu-item-inactive"
      >
        {lang === "en" ? <span>FR</span> : <span>EN</span>}
      </span>

      {/* Divider before theme toggle */}
      <div className="w-px h-6 bg-slate-700/50 dark:bg-white/20 mx-1" />

      {/* Theme toggle button */}
      <span
        onClick={toggleTheme}
        className="flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer menu-item-inactive"
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </header>
  );
};

export default Header;
