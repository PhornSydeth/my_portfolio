// components/ui/Gradient.tsx
import type { ReactNode } from "react";

interface GradientProps {
  children: ReactNode;
  className?: string;
}

export default function Gradient({ children, className = "" }: GradientProps) {
  return (
    <span
      className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
