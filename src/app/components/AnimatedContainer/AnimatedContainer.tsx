"use client";
import { useEffect } from "react";
import Aos from "aos";

interface AnimatedContainerProps {
  children: React.ReactNode;
  animationType: string;
  animationDelay: number;
}

const AnimatedContainer = (props: AnimatedContainerProps) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos={props.animationType} data-aos-delay={props.animationDelay}>
      {props.children}
    </div>
  );
};

export default AnimatedContainer;
