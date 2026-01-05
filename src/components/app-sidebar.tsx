import {
  BookOpen,
  Bot,
  ChartBarStackedIcon,
  Frame,
  Icon,
  Layout,
  Map,
  PieChart,
  PlaneTakeoff,
  Projector,
  Route,
  Settings2,
  ShoppingBag,
  SquareTerminal,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { NavMain } from "./nav-main";
import { url } from "zod";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: {
    name: "DevKit",
    logo: "/android-chrome-512x512.png",
    plan: "Development kit",
  },

  navMain: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: false,
    },
    {
      name: "Projects",
      url: "/projects",
      icon: Projector,
    },
    {
      name: "SChema",
      url: "/schema",
      icon: Layout,
    },
    {
      name: "Apis",
      url: "/apis",
      icon: Route,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Leave tracker & expense manager",
      url: "/project/123",
      icon: PlaneTakeoff,
    },
    {
      name: "Sales & Marketing",
      url: "/project/456",
      icon: PieChart,
    },
    {
      name: "Travelling manager",
      url: "/project/789",
      icon: Map,
    },
    {
      name: "Travelling manager",
      url: "/project/789",
      icon: Map,
    },
    {
      name: "Travelling manager",
      url: "/project/789",
      icon: Map,
    },
    {
      name: "Crud operation",
      url: "/project/5456",
      icon: ChartBarStackedIcon,
    },
    {
      name: "E-commerce app",
      url: "/project/343",
      icon: ShoppingBag,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        {/* <Link to={"/"}>
        <img src="/images/logo.png" className="w-24 object-cover h-12 object-left" alt="" />
        </Link> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
