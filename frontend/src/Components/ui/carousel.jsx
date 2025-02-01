import * as React from "react";
import { cn } from "@/lib/utils";

export const Carousel = ({ className, children, ...props }) => {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
};

export const CarouselContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("flex transition-transform", className)} {...props}>
      {children}
    </div>
  );
};

export const CarouselItem = ({ className, children, ...props }) => {
  return (
    <div className={cn("flex-shrink-0 w-full", className)} {...props}>
      {children}
    </div>
  );
};

export const CarouselPrevious = ({ className, ...props }) => {
  return (
    <button
      className={cn("absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full", className)}
      {...props}
    >
      ◀
    </button>
  );
};

export const CarouselNext = ({ className, ...props }) => {
  return (
    <button
      className={cn("absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full", className)}
      {...props}
    >
      ▶
    </button>
  );
};
