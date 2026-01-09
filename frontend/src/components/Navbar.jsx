import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  LogOutIcon,
  ShipWheelIcon,
  MenuIcon,
} from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = ({ onMenuClick }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-14 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full">
          {/* HAMBURGER (mobile only) */}
          <button
            onClick={onMenuClick}
            className="btn btn-ghost btn-sm mr-2 lg:hidden"
          >
            <MenuIcon className="size-5" />
          </button>

          {/* LOGO (chat page only) */}
          {isChatPage && (
            <Link to="/" className="flex items-center gap-2">
              <ShipWheelIcon className="size-7 text-primary" />
              <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Streamify
              </span>
            </Link>
          )}

          <div className="flex items-center gap-3 ml-auto">
            {/* Notifications */}
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-5 w-5 opacity-70" />
              </button>
            </Link>

            <ThemeSelector />

            {/* Avatar */}
            {authUser && (
              <div className="relative">
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/40">
                  <img
                    src={
                      authUser.profilePic ||
                      "https://avatar.iran.liara.run/public/1.png"
                    }
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-success ring-2 ring-base-200" />
              </div>
            )}

            {/* Logout */}
            <button
              className="btn btn-ghost btn-circle"
              onClick={logoutMutation}
            >
              <LogOutIcon className="h-5 w-5 opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
