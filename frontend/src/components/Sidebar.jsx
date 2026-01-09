import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  HomeIcon,
  ShipWheelIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";

const Sidebar = ({ closeSidebar }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItemClass = (path) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all
     ${
       currentPath === path
         ? "bg-primary/10 text-primary font-semibold"
         : "hover:bg-base-300/60"
     }`;

  return (
    <aside className="flex flex-col h-full w-64 bg-base-200 border-r border-base-300">
      {/* HEADER */}
      <div className="p-5 border-b border-base-300 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <ShipWheelIcon className="size-8 text-primary" />
          <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Streamify
          </span>
        </Link>

        {/* CLOSE BUTTON (mobile only) */}
        <button
          onClick={closeSidebar}
          className="btn btn-ghost btn-sm lg:hidden"
        >
          <XIcon className="size-5" />
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <Link to="/" onClick={closeSidebar} className={navItemClass("/")}>
          <HomeIcon className="size-5 opacity-80" />
          <span>Home</span>
        </Link>

        <Link
          to="/friends"
          onClick={closeSidebar}
          className={navItemClass("/friends")}
        >
          <UsersIcon className="size-5 opacity-80" />
          <span>Friends</span>
        </Link>

        <Link
          to="/notifications"
          onClick={closeSidebar}
          className={navItemClass("/notifications")}
        >
          <BellIcon className="size-5 opacity-80" />
          <span>Notifications</span>
        </Link>
      </nav>

      {/* USER PROFILE */}
      <div className="p-4 border-t border-base-300">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40">
              <img
                src={
                  authUser?.profilePic ||
                  "https://avatar.iran.liara.run/public/1.png"
                }
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Online indicator */}
            <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-success ring-2 ring-base-200" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">
              {authUser?.fullName}
            </p>
            <p className="text-xs text-success">Online</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
