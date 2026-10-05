import type {
  PropsWithChildren,
} from 'react';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

interface StaggerProps
  extends PropsWithChildren {
  stagger?: number;

  delay?: number;

  once?: boolean;
}

export function Stagger({
  children,
  stagger = 0.1,
  delay = 0,
  once = true,
}: StaggerProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.15,
      }}
      variants={{
        hidden: {},

        visible: {
          transition: {
            delayChildren:
              reduceMotion
                ? 0
                : delay,

            staggerChildren:
              reduceMotion
                ? 0
                : stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}