"use client";

import React, { RefObject, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  RoughAnnotationConfig,
  RoughAnnotationGroup,
} from "rough-notation/lib/model";
import { annotate, annotationGroup } from "rough-notation";
import useMediaQuery from "@/hooks/use-media";
import { Parag } from "./text";


const parseParagraphs = (
  paragraphs: string[],
  annotationRefs: RefObject<HTMLSpanElement | HTMLAnchorElement | null>[]
) => {
  let refIndex = 0;

  const parseSingleText = (text: string, paragraphIndex: number) => {
    const parts = text.split(/(<bold>.*?<\/bold>|<link>.*?<\/link>)/g);

    return parts.map((part, i) => {
      if (!part) return null;

      const boldMatch = part.match(/<bold>(.*?)<\/bold>/);
      if (boldMatch) {
        const content = boldMatch[1];
        const ref = annotationRefs[refIndex] as RefObject<HTMLSpanElement>;
        refIndex += 1;
        return (
          <span
            key={`${paragraphIndex}-bold-${i}`}
            className="dark:text-white text-black font-semibold"
            ref={ref}
          >
            {content}
          </span>
        );
      }

      const linkMatch = part.match(/<link>(.*?)<\/link>/);
      if (linkMatch) {
        const content = linkMatch[1];
        const ref = annotationRefs[refIndex] as RefObject<HTMLAnchorElement>;
        refIndex += 1;
        return (
          <a
            key={`${paragraphIndex}-link-${i}`}
            className="dark:text-cyan-300 text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-500 hover-effect font-bold"
            ref={ref}
            href="mailto:yassinechmarekh88@gmail.com"
            aria-label="Hire me"
          >
            {content}
          </a>
        );
      }

      // texte normal
      return (
        <React.Fragment key={`${paragraphIndex}-text-${i}`}>
          {part}
        </React.Fragment>
      );
    });
  };

  // Retourne chaque paragraphe parsé dans un <p>
  const parsedParagraphs = paragraphs.map((p, idx) => (
    <Parag key={`paragraph-${idx}`} className="mb-4 leading-relaxed">
      {parseSingleText(p, idx)}
    </Parag>
  ));

  return parsedParagraphs;
};

interface AnnotateConfig extends RoughAnnotationConfig {
  ref: string;
}

interface ParagEffectProps {
    paragraph: string[];
}

const ParagEffect = ({ paragraph }: ParagEffectProps) => {
  const { theme } = useTheme();

  const annotationsConfig: AnnotateConfig[] = [
    {
      ref: "a1Ref",
      type: "underline",
      color: theme === "dark" ? "#fff" : "#000",
      multiline: true,
      iterations: 1,
    },

    {
      ref: "a2Ref",
      type: "underline",
      color: theme === "dark" ? "white" : "black",
      multiline: true,
      iterations: 1,
    },
    {
      ref: "a3Ref",
      type: "underline",
      color: theme === "dark" ? "white" : "black",
      multiline: true,
      iterations: 1,
    },
    {
      ref: "a4Ref",
      type: "underline",
      color: theme === "dark" ? "white" : "black",
      multiline: true,
      iterations: 1,
    },
    {
      ref: "a5Ref",
      type: "underline",
      color: theme === "dark" ? "white" : "black",
      multiline: true,
      iterations: 1,
    },
    {
      ref: "a6Ref",
      type: "underline",
      color: theme === "dark" ? "#53eafd" : "#00b8db",
      strokeWidth: 2,
      padding: 4,
      iterations: 8,
    },
  ];

  const isSmallDevice = useMediaQuery("(max-width: 500px)");
  const annotationRefs = annotationsConfig.map(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLSpanElement | HTMLAnchorElement>(null)
  );

  useEffect(() => {
    const annotations = annotationsConfig.map((config, index) => {
      const { ref, ...options } = config;
      return annotate(
        annotationRefs[index]!.current!,
        options as RoughAnnotationConfig
      );
    });

    const annotationGroupInstance: RoughAnnotationGroup =
      annotationGroup(annotations);

    if (!isSmallDevice) {
      annotationGroupInstance.show();
    }

    return () => annotationGroupInstance.hide();
  }, [annotationRefs, isSmallDevice]);

  return <>{parseParagraphs(paragraph, annotationRefs)}</>;
};

export default ParagEffect;
