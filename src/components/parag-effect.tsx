// "use client";

// import React, { RefObject, useEffect, useRef } from "react";
// import { useTheme } from "next-themes";
// import {
//   RoughAnnotationConfig,
//   RoughAnnotationGroup,
// } from "rough-notation/lib/model";
// import { annotate, annotationGroup } from "rough-notation";
// import useMediaQuery from "@/hooks/use-media";
// import { Parag } from "./text";

// const parseParagraphs = (
//   paragraphs: string[],
//   annotationRefs: RefObject<HTMLSpanElement | HTMLAnchorElement | null>[]
// ) => {
//   let refIndex = 0;

//   const parseSingleText = (text: string, paragraphIndex: number) => {
//     const parts = text.split(/(<bold>.*?<\/bold>|<link>.*?<\/link>)/g);

//     return parts.map((part, i) => {
//       if (!part) return null;

//       const boldMatch = part.match(/<bold>(.*?)<\/bold>/);
//       if (boldMatch) {
//         const content = boldMatch[1];
//         const ref = annotationRefs[refIndex] as RefObject<HTMLSpanElement>;
//         refIndex += 1;
//         return (
//           <span
//             key={`${paragraphIndex}-bold-${i}`}
//             className="dark:text-white text-black font-semibold"
//             ref={ref}
//           >
//             {content}
//           </span>
//         );
//       }

//       const linkMatch = part.match(/<link>(.*?)<\/link>/);
//       if (linkMatch) {
//         const content = linkMatch[1];
//         const ref = annotationRefs[refIndex] as RefObject<HTMLAnchorElement>;
//         refIndex += 1;
//         return (
//           <a
//             key={`${paragraphIndex}-link-${i}`}
//             className="dark:text-cyan-300 text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-500 hover-effect font-bold"
//             ref={ref}
//             href="mailto:yassinechmarekh88@gmail.com"
//             aria-label="Hire me"
//           >
//             {content}
//           </a>
//         );
//       }

//       // texte normal
//       return (
//         <React.Fragment key={`${paragraphIndex}-text-${i}`}>
//           {part}
//         </React.Fragment>
//       );
//     });
//   };

//   // Retourne chaque paragraphe parsé dans un <p>
//   const parsedParagraphs = paragraphs.map((p, idx) => (
//     <Parag key={`paragraph-${idx}`} className="mb-4 leading-relaxed">
//       {parseSingleText(p, idx)}
//     </Parag>
//   ));

//   return parsedParagraphs;
// };

// interface AnnotateConfig extends RoughAnnotationConfig {
//   ref: string;
// }

// interface ParagEffectProps {
//     paragraph: string[];
// }

// const ParagEffect = ({ paragraph }: ParagEffectProps) => {
//   const { theme } = useTheme();

//   const annotationsConfig: AnnotateConfig[] = [
//     {
//       ref: "a1Ref",
//       type: "underline",
//       color: theme === "dark" ? "#fff" : "#000",
//       multiline: true,
//       iterations: 1,
//     },

//     {
//       ref: "a2Ref",
//       type: "underline",
//       color: theme === "dark" ? "white" : "black",
//       multiline: true,
//       iterations: 1,
//     },
//     {
//       ref: "a3Ref",
//       type: "underline",
//       color: theme === "dark" ? "white" : "black",
//       multiline: true,
//       iterations: 1,
//     },
//     {
//       ref: "a4Ref",
//       type: "underline",
//       color: theme === "dark" ? "white" : "black",
//       multiline: true,
//       iterations: 1,
//     },
//     {
//       ref: "a5Ref",
//       type: "underline",
//       color: theme === "dark" ? "white" : "black",
//       multiline: true,
//       iterations: 1,
//     },
//     {
//       ref: "a6Ref",
//       type: "underline",
//       color: theme === "dark" ? "#53eafd" : "#00b8db",
//       strokeWidth: 2,
//       padding: 4,
//       iterations: 8,
//     },
//   ];

//   const isSmallDevice = useMediaQuery("(max-width: 500px)");
//   const annotationRefs = annotationsConfig.map(() =>
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useRef<HTMLSpanElement | HTMLAnchorElement>(null)
//   );

//   useEffect(() => {
//     const annotations = annotationsConfig.map((config, index) => {
//       const { ref, ...options } = config;
//       return annotate(
//         annotationRefs[index]!.current!,
//         options as RoughAnnotationConfig
//       );
//     });

//     const annotationGroupInstance: RoughAnnotationGroup =
//       annotationGroup(annotations);

//     if (!isSmallDevice) {
//       annotationGroupInstance.show();
//     }

//     return () => annotationGroupInstance.hide();
//   }, [annotationRefs, isSmallDevice]);

//   return <>{parseParagraphs(paragraph, annotationRefs)}</>;
// };

// export default ParagEffect;

// ************************

// "use client";

// import React, { RefObject, useEffect, useRef, useMemo } from "react";
// import { useTheme } from "next-themes";
// import { annotate, annotationGroup } from "rough-notation";
// import {
//   RoughAnnotationConfig,
//   RoughAnnotationGroup,
// } from "rough-notation/lib/model";
// import useMediaQuery from "@/hooks/use-media";
// import { Parag } from "./text";

// interface ParagEffectProps {
//   paragraph: string[];
//   email?: string; // optionnel → pour personnaliser le lien
// }

// const ParagEffect = ({
//   paragraph,
//   email = "yassinechmarekh88@gmail.com",
// }: ParagEffectProps) => {
//   const { theme } = useTheme();
//   const isSmallDevice = useMediaQuery("(max-width: 500px)");

//   // --- Étape 1 : Extraire toutes les occurrences de <bold> et <link> pour créer dynamiquement les refs ---
//   const annotationRefs = useMemo(() => {
//     const refs: RefObject<HTMLSpanElement | HTMLAnchorElement | null>[] = [];
//     paragraph.forEach((text) => {
//       const matches = text.match(/<bold>.*?<\/bold>|<link>.*?<\/link>/g);
//       if (matches) {
//         matches.forEach(() => {
//           refs.push(React.createRef<HTMLSpanElement | HTMLAnchorElement>());
//         });
//       }
//     });
//     return refs;
//   }, [paragraph]);

//   // --- Étape 2 : Créer dynamiquement les configurations selon le type ---
//   const annotationsConfig = useMemo(() => {
//     const configs: RoughAnnotationConfig[] = [];
//     let index = 0;

//     paragraph.forEach((text) => {
//       const matches = text.match(/<bold>.*?<\/bold>|<link>.*?<\/link>/g);
//       if (matches) {
//         matches.forEach((match) => {
//           if (match.startsWith("<bold>")) {
//             configs.push({
//               type: "underline",
//               color: theme === "dark" ? "#fff" : "#000",
//               multiline: true,
//               iterations: 1,
//             });
//           } else if (match.startsWith("<link>")) {
//             configs.push({
//               type: "underline",
//               color: theme === "dark" ? "#53eafd" : "#00b8db",
//               strokeWidth: 2,
//               padding: 4,
//               iterations: 8,
//             });
//           }
//           index++;
//         });
//       }
//     });

//     return configs;
//   }, [paragraph, theme]);

//   // --- Étape 3 : Appliquer les annotations ---
//   useEffect(() => {
//     if (annotationRefs.length === 0) return;

//     const annotations = annotationRefs.map((ref, i) =>
//       annotate(ref.current!, annotationsConfig[i])
//     );

//     const group: RoughAnnotationGroup = annotationGroup(annotations);

//     if (!isSmallDevice) {
//       group.show();
//     }

//     return () => group.hide();
//   }, [annotationRefs, annotationsConfig, isSmallDevice]);

//   // --- Étape 4 : Parser le texte ---
//   const parseParagraphs = (
//     paragraphs: string[],
//     refs: RefObject<HTMLSpanElement | HTMLAnchorElement | null>[]
//   ) => {
//     let refIndex = 0;

//     const parseSingleText = (text: string, pIndex: number) => {
//       const parts = text.split(/(<bold>.*?<\/bold>|<link>.*?<\/link>)/g);

//       return parts.map((part, i) => {
//         if (!part) return null;

//         const boldMatch = part.match(/<bold>(.*?)<\/bold>/);
//         if (boldMatch) {
//           const ref = refs[refIndex++] as RefObject<HTMLSpanElement>;
//           return (
//             <span
//               key={`${pIndex}-bold-${i}`}
//               ref={ref}
//               className="dark:text-white text-black font-semibold"
//             >
//               {boldMatch[1]}
//             </span>
//           );
//         }

//         const linkMatch = part.match(/<link>(.*?)<\/link>/);
//         if (linkMatch) {
//           const ref = refs[refIndex++] as RefObject<HTMLAnchorElement>;
//           return (
//             <a
//               key={`${pIndex}-link-${i}`}
//               ref={ref}
//               href={`mailto:${email}`}
//               className="dark:text-cyan-300 text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-500 hover-effect font-bold"
//               aria-label="Hire me"
//             >
//               {linkMatch[1]}
//             </a>
//           );
//         }

//         return (
//           <React.Fragment key={`${pIndex}-text-${i}`}>{part}</React.Fragment>
//         );
//       });
//     };

//     return paragraphs.map((p, idx) => (
//       <Parag key={`paragraph-${idx}`} className="mb-4 leading-relaxed">
//         {parseSingleText(p, idx)}
//       </Parag>
//     ));
//   };

//   // --- Étape 5 : Rendu final ---
//   return <>{parseParagraphs(paragraph, annotationRefs)}</>;
// };

// export default ParagEffect;

// ***************************

"use client";

import React, { RefObject, useEffect, useRef, useMemo } from "react";
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
    let index = 0;

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
          index++;
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
