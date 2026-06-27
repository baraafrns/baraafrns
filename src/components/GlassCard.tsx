import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}

export default function GlassCard({ children, className = '', strong = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-3xl p-6 md:p-8 ${strong ? 'liquid-glass-strong' : 'liquid-glass'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
