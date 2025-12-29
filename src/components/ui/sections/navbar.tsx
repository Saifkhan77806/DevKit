
// import { useIsMobile } from "@/hooks/use-mobile"

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../navigation-menu";
import { Button } from "../button";

const links = [
  {
    name: "DevKit",
    path: "/",
    auth: undefined,
  },
  {
    name: "Docs",
    path: "/docs",
    auth: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    auth: true,
  },
  {
    name: "Apis",
    path: "/apis",
    auth: true,
  },
  {
    name: "Schemas",
    path: "/schemas",
    auth: true,
  },
  {
    name: "Databases",
    path: "/databases",
    auth: true,
  },
  {
    name: "Api key",
    path: "/api-key",
    auth: true,
  },
  {
    name: "Settings",
    path: "/settings",
    auth: true,
  },
];

export default function Navbar() {
  const isLoggedin = true;

  return (
    <nav className="flex py-3 px-4 justify-between items-center">
      <div className="logo ">
        {/* Todo:// enchange the alt of this logo in seo format friendly format */}
        <img
          src="/images/logo.png"
          alt="DevKit logo"
          className="h-14 w-36 object-center "
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap space-x-3">
          {links
            .filter(
              (item) => item.auth === isLoggedin || item.auth === undefined
            )
            .map((item, index) => (
              <NavigationMenuItem key={index}>
                {/* <NavigationMenuLink> */}
                <Link to={item.path} className="capitalize hover:font-semibold transition-all">
                  {item.name}
                </Link>
                {/* </NavigationMenuLink> */}
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="auth-btn">
        <Button>Try for free</Button>
      </div>
    </nav>
  );
}
