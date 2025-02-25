"use client";

import { motion, TargetAndTransition, VariantLabels } from "motion/react";

interface AnimatedDivProps {
  children: React.ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  transition?: object;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  initial,
  animate,
  exit,
  transition,
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    exit={exit}
    transition={transition}
  >
    {children}
  </motion.div>
);

export default AnimatedDiv;
