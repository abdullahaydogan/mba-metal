import {
  useRef,
  type PropsWithChildren,
} from 'react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

interface ParallaxProps
  extends PropsWithChildren {
  offset?: number;

  direction?: 'up' | 'down';
}

export function Parallax({
  children,
  offset = 80,
  direction = 'up',
}: ParallaxProps) {
  const ref =
    useRef<HTMLDivElement>(null);

  const reduceMotion =
    useReducedMotion();

  const {
    scrollYProgress,
  } = useScroll({
    target: ref,

    offset: [
      'start end',
      'end start',
    ],
  });

  const movement =
    direction === 'up'
      ? [offset, -offset]
      : [-offset, offset];

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [0, 0]
      : movement
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}