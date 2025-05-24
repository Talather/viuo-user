
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