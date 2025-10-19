import "server-only";

import { LocaleType } from "@/types";

const locales = {
  en: () => import("@/app/locales/en.json").then((module) => module.default),
  fr: () => import("@/app/locales/fr.json").then((module) => module.default),
};

export const getLocales = async (locale: LocaleType) =>
  locales[locale]?.() ?? locales.en();
