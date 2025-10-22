"use client";

import React, { useEffect, useState } from "react";
import Container from "./container";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface LoaderProps {
  loaderTime: number;
}

const Loader = ({ loaderTime }: LoaderProps) => {
  const [index, setIndex] = useState(0);

  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = segments[1];

  const loadingTexts =
    lang === "fr"
      ? [
          "Initialisation des composants...",
          "Compilation des ressources...",
          "Connexion au serveur quantique...",
          "Déploiement terminé.",
        ]
      : [
          "Initializing Components...",
          "Compiling Assets...",
          "Connecting to Quantum Server...",
          "Deployment Complete.",
        ];

  useEffect(() => {
    const stepDuration = loaderTime / loadingTexts.length;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < loadingTexts.length - 1) return prev + 1;
        return prev;
      });
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, loaderTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.section
      className={
        "bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#e0f2fe] dark:from-[#0a011a] dark:via-black dark:to-[#1a0221] z-[9999]"
      }
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeIn" },
      }}
    >
      <Container
        className={"flex flex-col items-center justify-center min-h-screen"}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-5xl md:text-7xl font-bold font-mono text-cyan-500 dark:text-cyan-300 tracking-widest">
            <span className="animate-neon-flicker">&lt;YC /&gt;</span>
          </div>
          <motion.div
            className="absolute inset-0 blur-2xl bg-cyan-500/20 dark:bg-cyan-400/30 z-[-1]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="mt-10 h-8 text-center w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingTexts[index]}
              className="text-md md:text-lg text-purple-600 dark:text-purple-300 font-mono"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {loadingTexts[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </Container>
    </motion.section>
  );
};

export default Loader;
