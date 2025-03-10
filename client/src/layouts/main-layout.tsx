import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const header = document.getElementById("app-header");
      if (header) {
        setContentHeight(window.innerHeight - header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          id="app-header"
          className="flex px-4 h-16 shrink-0 items-center shadow-md transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
        >
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1"></div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </header>
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: contentHeight,
          }}
        >
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
