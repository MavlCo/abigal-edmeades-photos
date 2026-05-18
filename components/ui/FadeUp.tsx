"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
};

export default function FadeUp({
  children,
  delay = 0,
  className,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
