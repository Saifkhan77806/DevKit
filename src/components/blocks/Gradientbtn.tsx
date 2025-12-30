import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const Gradientbtn = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      className={cn(
        "bg-gradient cursor-pointer hover:scale-105 transition-all",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Gradientbtn;
