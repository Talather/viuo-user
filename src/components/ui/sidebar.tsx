// src/components/ui/sidebar.js

import { useState } from "react"

export const SidebarTrigger = ({ className,onClick,isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <button
      className={`${className} p-2 text-white bg-blue-500 rounded-full`}
      onClick={onClick}
    >
      {isOpen ? "Close Sidebar" : "Open Sidebar"}
    </button>
  )
}

export const SidebarProvider = ({ children }) => {
  return <div className="flex">{children}</div>
}
