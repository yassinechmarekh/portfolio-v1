import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cookies } from "next/headers";
import { CookiesKey } from "@/lib/constants";
import SplashCursor from "@/components/react-bits/SplashCursor";
import { getLocales } from "@/lib/locales";
import { LocaleType } from "@/types";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LoaderWrapper from "@/providers/loader-wrapper";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yassine Chmarekh | Portfolio",
    template: "%s | Yassine Chmarekh",
  },
  description:
    "Explore the portfolio of Yassine Chmarekh — a passionate web developer specializing in modern technologies such as Next.js, React, and Laravel.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Yassine Chmarekh | Portfolio",
    description:
      "Discover my projects, certifications, and professional background in modern web development.",
    url: process.env.NEXT_PUBLIC_DOMAIN as string,
    siteName: "Yassine Chmarekh Portfolio",
    images: [
      {
        url: "/images/about-profile-dark.png",
        width: 1056,
        height: 992,
        alt: "Preview of Yassine Chmarekh’s Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Chmarekh | Portfolio",
    description:
      "Explore my web development projects, certifications, and career journey.",
    images: ["/images/about-profile-dark.png"],
    creator: "@yassinechmarekh",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = (await params).lang as LocaleType;
  const locales = await getLocales(lang);

  const cookieStore = await cookies();
  const savedTheme = cookieStore.get(CookiesKey.THEME)?.value || "dark";

  return (
    <html lang={lang}>
      <body className={` ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={savedTheme}
          enableSystem
          disableTransitionOnChange
          storageKey={CookiesKey.THEME}
        >
          <SplashCursor />
          <LoaderWrapper>
            <Header lang={lang} menu={locales.header.navigation} />
            {children}
            <Footer />
          </LoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
