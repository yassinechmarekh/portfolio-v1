"use client";

import { useTheme } from "next-themes";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Cookies from "js-cookie";
import { CookiesKey } from "@/lib/constants";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Theme :", theme);
    setTheme(newTheme);
    Cookies.set(CookiesKey.THEME, newTheme, { expires: 365 });
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <span>D</span>
      ) : (
        <span>L</span>
      )}
    </Button>
  );
};

export default ThemeButton;
