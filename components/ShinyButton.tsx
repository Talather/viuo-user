// src/components/ShinyButton.tsx
import React from "react";

interface ShinyButtonProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
  className = "",
  children,
  href,
}) => {
  return (
    <a
      href={href}
      className={`${className} bg-button-gpt text-white py-2 px-6 rounded-full transition-all duration-300 hover:scale-105`}
    >
      {children}
    </a>
  );
};

export default ShinyButton;
