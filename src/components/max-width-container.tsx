import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div className={cn("max-w-[1600px] mx-auto ", className)}>{children}</div>
  );
};

export default MaxWidthContainer;
