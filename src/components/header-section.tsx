import React from "react";
import { Parag, Title } from "./text";
import GradientText from "./react-bits/GradientText";

interface HeaderSectionProps {
  title: string;
  description: string;
}

const HeaderSection = ({title, description}: HeaderSectionProps) => {
  return (
    <div className={'max-w-3xl text-center mx-auto'}>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        <Title>{title}</Title>
      </GradientText>
      <Parag className={'mt-3'}>{description}</Parag>
    </div>
  );
};

export default HeaderSection;
