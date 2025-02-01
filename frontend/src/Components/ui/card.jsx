import React from "react";
import { cn } from "@/lib/utils"; // Ensure you have this utility function

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-4 border-b dark:border-gray-800", className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3 className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h3>
  );
};

export const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
};
