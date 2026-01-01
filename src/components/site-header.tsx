import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { ChevronRight } from "lucide-react";

export function SiteHeader() {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean); // remove empty parts

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-secondary-my">
            Home
          </Link>

          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            const href = "/" + segments.slice(0, index + 1).join("/");

            return (
              <span key={href} className="flex items-center gap-1">
                <span className="text-muted-foreground"><ChevronRight className="size-4 text-secondary-my" /></span>

                {isLast ? (
                  <span className="capitalize text-foreground">
                    {segment.replace(/-/g, " ")}
                  </span>
                ) : (
                  <Link
                    to={href}
                    className="capitalize text-muted-foreground hover:text-secondary-my"
                  >
                    {segment.replace(/-/g, " ")}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
