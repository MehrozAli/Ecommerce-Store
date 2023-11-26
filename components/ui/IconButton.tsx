import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton = ({ onClick, icon, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};
