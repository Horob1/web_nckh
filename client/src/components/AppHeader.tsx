import { AvatarMenu } from "./AvatarMenu";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

export const AppHeader = () => {
  const { state } = useSidebar();
  return (
    <div id="app-header" className="p-3 flex items-center sticky top-0 shadow-sm z-10">
      {state === "collapsed" && <SidebarTrigger />}
      <div className="flex-1"></div>
      <AvatarMenu />
    </div>
  );
};
