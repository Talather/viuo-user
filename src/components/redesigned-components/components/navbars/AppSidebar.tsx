import { History } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../../../public/assets/icons/logo.png";
import { useAuth } from "@/hooks/useAuth";
import { FileText, Award, Settings, User } from "lucide-react";

// Define the type for the `user` object.
interface User {
  displayName: string;
  photoURL: string | null;
}

// Menu items.
const items = [
  {
    title: "Bills",
    url: "/dashboard",
    icon: FileText,
  },
  {
    title: "Rewards Tracker",
    url: "/select",
    icon: Award,
  },
  {
    title: "Payments History",
    url: "/select",
    icon: History,
  },
  {
    title: "Account Settings",
    url: "/select",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "/select",
    icon: User,
  },
];

export function AppSidebar() {
  const { user } = useAuth() as { user: User | null };

  return (
    <div className="flex flex-col w-64 p-4 text-white bg-active-color min-h-screen overflow-auto">
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
                      ? "bg-button-gpt-hover text-white font-semibold"
                      : null
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
  );
}
