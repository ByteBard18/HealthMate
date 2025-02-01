import React from "react";
import { cn } from "@/lib/utils"; // Utility for class merging

export const Avatar = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const AvatarFallback = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
