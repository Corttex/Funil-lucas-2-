import type { ReactNode } from 'react';

interface Props {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function CTAButton({ disabled, onClick, children }: Props) {
  return <button className="bm-cta" disabled={disabled} onClick={onClick}>{children}</button>;
}
