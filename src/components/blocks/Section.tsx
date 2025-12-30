import React from "react";
import { cn } from "../../lib/utils";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cn("pt-20", className)}>{children}</section>;
};

export default Section;
