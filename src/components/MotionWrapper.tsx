'use client';

import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = (props: MotionDivProps) => {
  return <motion.div {...props} />;
};
