import { Link, useNavigate } from "react-router-dom";
import Gradientbtn from "../../blocks/Gradientbtn";
import { useScrolled } from "../../../hooks/useScrolled";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

export default function DashboardNavbar() {
  const isLoggedin = true;
  const isScrolled = useScrolled();
  const navigate = useNavigate();

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

          {isLoggedin ? (
            <>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <Gradientbtn onClick={() => navigate("/signin")}>
              Try for free
            </Gradientbtn>
          )}
        </div>
      </div>
    </nav>
  );
}
