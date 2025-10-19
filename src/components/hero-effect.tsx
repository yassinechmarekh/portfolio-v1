"use client";

import { useTheme } from "next-themes";
import React from "react";
import LightRays from "./react-bits/LightRays";
import GridDistortion from "./react-bits/GridDistortion";

const HeroEffect = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" && (
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      )}
      {theme === "light" && (
        <GridDistortion
          imageSrc="/images/hero-light.jpg"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
      )}
      {/* {theme === "light" && (
        <BubbleBackground
          interactive
          className="absolute inset-0 flex items-center justify-center -z-10"
          colors={{
            first: "173,216,230", // LightSkyBlue
            second: "255,182,193", // LightPink
            third: "144,238,144", // LightGreen
            fourth: "255,218,185", // PeachPuff
            fifth: "221,160,221", // Plum
            sixth: "240,230,140", // Khaki
          }}
        />
      )} */}
    </>
  );
};

export default HeroEffect;
