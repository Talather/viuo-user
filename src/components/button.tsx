import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "button py-[10px] px-[18px] rounded-2xl font-semibold text-sm text-white bg-[#0f4a3f] cursor-pointer flex items-center justify-center gap-4 mx-auto",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
