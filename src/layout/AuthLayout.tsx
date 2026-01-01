import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/sections/navbar";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
