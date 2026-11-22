import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function CTAButton({ disabled, onClick, children }: Props) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.015 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      className="bm-cta"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
