import { useState } from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: string;
    plan: string;
  };
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = useState(teams);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild> */}
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground poppins"
        >
          {/* <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"> */}
          <img src={teams.logo} className="size-10" />
          {/* </div> */}
          <div className="grid flex-1 text-left text-sm leading-tight ">
            <span className="truncate font-medium">{teams.name}</span>
            <span className="truncate text-xs">{teams.plan}</span>
          </div>
        </SidebarMenuButton>
        {/* </DropdownMenuTrigger>
        </DropdownMenu> */}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
