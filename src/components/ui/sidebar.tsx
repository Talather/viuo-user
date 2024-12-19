// src/components/ui/sidebar.js

// import { useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"

export const SidebarTrigger = ({ onClick:any }) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <button
      className={"hamburger-icon"}
      onClick={onClick}
    >
      {/* {isOpen ? "Close Sidebar" : "Open Sidebar"} */}

    <i class="fas fa-bars"></i> 

    </button>
  )
}

export const SidebarProvider = ({ children:any }) => {
  return <div className="flex">{children}</div>
}
