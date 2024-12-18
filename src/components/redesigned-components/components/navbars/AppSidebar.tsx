import { Home, LucidePaperclip, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"
import logo from "../../../../../public/assets/icons/logo.png"
import { useAuth } from "@/hooks/useAuth"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Templates",
    url: "/select",
    icon: LucidePaperclip,
  },
]

export function AppSidebar() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col w-64 p-4 text-white bg-gray-800" style={{height:"100vh"}}>
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-6">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </NavLink>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col flex-grow">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-md ${
                    isActive
                      ? "bg-blue-600 text-white font-semibold"
                      : "hover:bg-gray-700"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-auto">
        <NavLink
          to="/dashboard/settings"
          className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-700"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
        {/* Assuming NavUser is a simple user profile component */}
        {user && (
          <div className="flex items-center gap-4 mt-4">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">{user.displayName}</span>
          </div>
        )}
      </div>
    </div>
  )
}
