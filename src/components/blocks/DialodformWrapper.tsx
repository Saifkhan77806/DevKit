import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type Props = {
  children: React.ReactNode;
  header: string;
  description: string;
  isOpen: boolean;
  openChange: () => void;
};

const DialodformWrapper = ({
  children,
  header,
  description,
  isOpen,
  openChange,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={openChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialodformWrapper;
