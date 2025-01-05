import { History, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../../../public/assets/icons/logo.png";
import { useAuth } from "@/hooks/useAuth";
import { FileText, Award, Settings, User, File } from "lucide-react";

// Define the type for the `user` object.
interface User {
  displayName: string;
  photoURL: string | null;
}

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: FileText,
  },
  {
    title: "Bills",
    url: "/bills",
    icon: Award,
  },
  {
    title: "Credits Tracker",
    url: "/reward-tracker",
    icon: Award,
  },
  {
    title: "Payments History",
    url: "/payment-history",
    icon: History,
  },
  {
    title: "Upcoming Bills",
    url: "/upcoming-bills",
    icon: Settings,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: File,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Refer to Friend",
    url: "/refer",
    icon: User,
  },
  {
    title: "Support",
    url: "/contact-us",
    icon: User,
  },
];

export function AppSidebar() {
  const { logout } = useAuth();
  // const { user } = useAuth() as { user: User | null };

  return (
    <div className="flex flex-col w-64 min-h-screen p-4 overflow-auto text-white bg-active-color">
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
                  `flex items-center gap-4 p-3 rounded-xl ${
                    isActive
                      ? "bg-button-gpt-dark text-white font-semibold"
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
      <div
        className="mt-auto"
        onClick={() => {
          logout();
        }}
      >
        <NavLink
          to="/"
          className="flex items-center gap-4 p-3 rounded-md hover:bg-button-gpt-hover"
        >
          {/* <Settings className="w-5 h-5" /> */}
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </NavLink>
        {/* Assuming NavUser is a simple user profile component */}
        {/* {user && (
          <div className="flex items-center gap-4 mt-4">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">{user.displayName}</span>
          </div>
        )} */}
      </div>
    </div>
  );
}
