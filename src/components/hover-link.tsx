import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const HoverLink = ({
  href,
  children,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <NavLink
      to={href ?? ""}
      className={
        "bg-green-800 text-green-100 no-underline font-display font-medium px-6 py-3 block rounded-sm relative isolate before:block before:absolute before:bottom-1 before:left-2 before:right-2 before:h-[3px] before:rounded-sm before:bg-green-200 before:translate-y-2 hover:before:translate-y-0 focus:before:translate-y-0 before:transition-all focus:outline-none overflow-hidden select-none"
      }
    >
      {children}
    </NavLink>
  );
};

export default HoverLink;
