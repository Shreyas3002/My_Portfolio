import { ReactNode } from "react";

interface LayoutContainerProps {
  children: ReactNode;
  className?: string;
}

export default function LayoutContainer({
  children,
  className = "",
}: LayoutContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}