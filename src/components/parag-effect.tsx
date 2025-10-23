"use client";

import React, { RefObject, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import { annotate, annotationGroup } from "rough-notation";
import {
  RoughAnnotationConfig,
  RoughAnnotationGroup,
} from "rough-notation/lib/model";
import useMediaQuery from "@/hooks/use-media";
import { Parag } from "./text";

interface ParagEffectProps {
  paragraph: string[];
}

const ParagEffect = ({ paragraph }: ParagEffectProps) => {
  const { theme } = useTheme();
  const isSmallDevice = useMediaQuery("(max-width: 500px)");

  const annotationRefs = useMemo(() => {
    const refs: RefObject<HTMLSpanElement | HTMLAnchorElement | null>[] = [];
    paragraph.forEach((text) => {
      const matches = text.match(/<bold>.*?<\/bold>|<link.*?>.*?<\/link>/g);
      if (matches) {
        matches.forEach(() => {
          refs.push(React.createRef<HTMLSpanElement | HTMLAnchorElement>());
        });
      }
    });
    return refs;
  }, [paragraph]);

  const annotationsConfig = useMemo(() => {
    const configs: RoughAnnotationConfig[] = [];
    // let index = 0;

    paragraph.forEach((text) => {
      const matches = text.match(/<bold>.*?<\/bold>|<link.*?>.*?<\/link>/g);
      if (matches) {
        matches.forEach((match) => {
          if (match.startsWith("<bold>")) {
            configs.push({
              type: "underline",
              color: theme === "dark" ? "#fff" : "#000",
              multiline: true,
              iterations: 1,
            });
          } else if (match.startsWith("<link")) {
            configs.push({
              type: "underline",
              color: theme === "dark" ? "#53eafd" : "#00b8db",
              strokeWidth: 2,
              padding: 4,
              iterations: 8,
            });
          }
          // index++;
        });
      }
    });

    return configs;
  }, [paragraph, theme]);

  useEffect(() => {
    if (annotationRefs.length === 0) return;

    const annotations = annotationRefs.map((ref, i) =>
      annotate(ref.current!, annotationsConfig[i])
    );

    const group: RoughAnnotationGroup = annotationGroup(annotations);

    if (!isSmallDevice) {
      group.show();
    }

    return () => group.hide();
  }, [annotationRefs, annotationsConfig, isSmallDevice]);

  const parseParagraphs = (
    paragraphs: string[],
    refs: RefObject<HTMLSpanElement | HTMLAnchorElement | null>[]
  ) => {
    let refIndex = 0;

    const parseSingleText = (text: string, pIndex: number) => {
      const parts = text.split(/(<bold>.*?<\/bold>|<link.*?>.*?<\/link>)/g);

      return parts.map((part, i) => {
        if (!part) return null;

        const boldMatch = part.match(/<bold>(.*?)<\/bold>/);
        if (boldMatch) {
          const ref = refs[refIndex++] as RefObject<HTMLSpanElement>;
          return (
            <span
              key={`${pIndex}-bold-${i}`}
              ref={ref}
              className="dark:text-white text-black font-semibold"
            >
              {boldMatch[1]}
            </span>
          );
        }

        const linkMatch = part.match(
          /<link(?:\s+href="([^"]*)")?\s*>(.*?)<\/link>/
        );
        if (linkMatch) {
          const ref = refs[refIndex++] as RefObject<HTMLAnchorElement>;
          const href = linkMatch[1];
          const linkText = linkMatch[2];
          const isMailto = href.includes("mailto:");

          return (
            <a
              key={`${pIndex}-link-${i}`}
              ref={ref}
              href={href}
              {...(!isMailto && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="dark:text-cyan-300 text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-500 hover-effect font-bold"
              aria-label="Link"
            >
              {linkText}
            </a>
          );
        }

        return (
          <React.Fragment key={`${pIndex}-text-${i}`}>{part}</React.Fragment>
        );
      });
    };

    return paragraphs.map((p, idx) => (
      <Parag key={`paragraph-${idx}`} className="mb-4 leading-relaxed">
        {parseSingleText(p, idx)}
      </Parag>
    ));
  };

  return <>{parseParagraphs(paragraph, annotationRefs)}</>;
};

export default ParagEffect;
