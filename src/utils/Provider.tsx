import React from "react";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
};

export default Provider;
