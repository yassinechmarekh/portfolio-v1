import Header from "@/components/header";
import { getLocales } from "@/lib/locales";
import HeroHome from "@/sections/home/hero-home";
import { LocaleType } from "@/types";
import { cookies } from "next/headers";

interface HomeProps {
  params: Promise<{ lang: LocaleType }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const locales = await getLocales(lang);

  return (
    <div>
      <HeroHome lang={lang} />
    </div>
  );
}
