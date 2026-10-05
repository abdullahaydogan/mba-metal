import type {
  PropsWithChildren,
} from 'react';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

type RevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'none';

interface RevealProps
  extends PropsWithChildren {
  direction?: RevealDirection;

  distance?: number;

  delay?: number;

  duration?: number;

  once?: boolean;

  amount?: number;
}

export function Reveal({
  children,
  direction = 'up',
  distance = 32,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion =
    useReducedMotion();

  const getOffset = () => {
    if (
      direction === 'none' ||
      reduceMotion
    ) {
      return {
        x: 0,
        y: 0,
      };
    }

    switch (direction) {
      case 'down':
        return {
          x: 0,
          y: -distance,
        };

      case 'left':
        return {
          x: distance,
          y: 0,
        };

      case 'right':
        return {
          x: -distance,
          y: 0,
        };

      case 'up':
      default:
        return {
          x: 0,
          y: distance,
        };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: reduceMotion
          ? 1
          : 0,

        x: offset.x,

        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration:
          reduceMotion
            ? 0
            : duration,

        delay:
          reduceMotion
            ? 0
            : delay,

        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
    >
      {children}
    </motion.div>
  );
}