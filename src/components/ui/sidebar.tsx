// import React, { ReactNode, createContext, useContext, useState } from "react";

// interface SidebarMenuProps {
//   children: ReactNode;
// }

// export const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
//   return <div className="sidebar-menu">{children}</div>;
// };

// export const SidebarMenuItem: React.FC<SidebarMenuProps> = ({ children }) => {
//   return <div className="sidebar-menu-item">{children}</div>;
// };

// interface SidebarMenuButtonProps {
//   children: ReactNode;
//   size?: "sm" | "md" | "lg";
//   className?: string;
// }

// interface SidebarTriggerProps {
//   onClick?: () => void;
//   className?: string;
//   isOpen?: boolean;
// }

// export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({ onClick }) => {
//   return (
//     <button className="hamburger-icon" onClick={onClick}>
//       <i className="fas fa-bars"></i>
//     </button>
//   );
// };

// // export const SidebarProvider = ({ children:any }) => {
// //   return <div className="flex">{children}</div>
// // }

// export const SidebarMenuButton: React.FC<SidebarMenuButtonProps> = ({
//   children,
//   size = "md",
//   className,
// }) => {
//   return (
//     <button className={`sidebar-menu-button size-${size} ${className}`}>
//       {children}
//     </button>
//   );
// };

// interface SidebarContextType {
//   isMobile: boolean;
// }

// const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// export const useSidebar = (): SidebarContextType => {
//   const context = useContext(SidebarContext);
//   if (!context) {
//     throw new Error("useSidebar must be used within a SidebarProvider");
//   }
//   return context;
// };

// export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [isMobile] = useState(false); // Replace this logic with your own responsive detection

//   return (
//     <SidebarContext.Provider value={{ isMobile }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// };





// src/components/ui/sidebar.js

// import { useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
interface SidebarTriggerProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
 // Include this if needed
}
export const SidebarTrigger = ({ onClick }: SidebarTriggerProps) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <button className={"hamburger-icon"} onClick={onClick}>
      {/* {isOpen ? "Close Sidebar" : "Open Sidebar"} */}

      <i className="fas fa-bars"></i>
    </button>
  )
}

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex">{children}</div>
}