import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components";
import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/AppHeader";
import { useEffect, useState } from "react";

export default function Layout() {
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    const resizeApp = () => {
      const header = document.getElementById("app-header");
      if (header) {
        console.log(1)
        setContentHeight(window.innerHeight - header.offsetHeight);
      }
    };

    window.addEventListener("resize", resizeApp);

    return () => {
      window.removeEventListener("resize", resizeApp);
    };
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1">
        <AppHeader />
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: contentHeight,
          }}
        >
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
