import { type LucideIcon } from "lucide-react";

import { Link } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="poppins">
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem>
            <Link to={item.url}>
              <SidebarMenuButton tooltip={item.name}>
                {item.icon && (
                  <div
                    className="flex items-center justify-center rounded-full text-white p-1
        bg-gradient-to-r from-[#2cb4ff] via-[#2e75fd] to-[#3e61a6]"
                  >
                    <item.icon className="size-3" />
                  </div>
                )}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
