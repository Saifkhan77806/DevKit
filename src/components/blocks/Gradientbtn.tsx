import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const Gradientbtn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "bg-gradient cursor-pointer hover:scale-105 transition-all",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default Gradientbtn;
