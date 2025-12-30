import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../navigation-menu";
import Gradientbtn from "../../blocks/Gradientbtn";
import { useScrolled } from "../../../hooks/useScrolled";
import { Menu } from "lucide-react";
import { Button } from "../button";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";

const links = [
  { name: "DevKit", path: "/", auth: undefined },
  { name: "Docs", path: "/docs", auth: false },
  { name: "Dashboard", path: "/dashboard", auth: true },
  { name: "Apis", path: "/apis", auth: true },
  { name: "Schemas", path: "/schemas", auth: true },
  { name: "Databases", path: "/databases", auth: true },
  { name: "Api key", path: "/api-key", auth: true },
  { name: "Settings", path: "/settings", auth: true },
];

export default function Navbar() {
  const isLoggedin = true;
  const isScrolled = useScrolled();
  const navigate = useNavigate();

  const filteredLinks = links.filter(
    (item) => item.auth === isLoggedin || item.auth === undefined
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white px-4 py-3 transition-shadow ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/images/logo.png"
            alt="DevKit developer tools platform logo"
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {filteredLinks.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    to={item.path}
                    className="capitalize text-sm font-medium text-gray-700 hover:text-black hover:font-semibold transition-all"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Gradientbtn onClick={() => navigate("/signin")}>
            Try for free
          </Gradientbtn>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 sm:w-80 px-4">
              <div className="flex flex-col gap-6 mt-6">
                {/* Links */}
                <nav className="flex flex-col gap-4 text-center">
                  {filteredLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="text-base font-medium text-gray-700 hover:text-black transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* CTA */}
                <div className="pt-4 border-t">
                  <Gradientbtn
                    className="w-full"
                    onClick={() => navigate("signin")}
                  >
                    Try for free
                  </Gradientbtn>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
