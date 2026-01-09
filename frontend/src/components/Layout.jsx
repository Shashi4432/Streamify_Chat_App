import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full">
        {/* MOBILE OVERLAY */}
        {showSidebar && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        {showSidebar && (
          <aside
            className={`
              fixed lg:static z-50 lg:z-auto
              w-64 h-full bg-base-200 border-r border-base-300
              transform transition-transform duration-300
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >
            <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
          </aside>
        )}

        {/* MAIN */}
        <div className="flex-1 flex flex-col h-full">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
