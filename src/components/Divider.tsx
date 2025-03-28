import { cn } from "@/lib/utils";
import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("my-10 h-0.5 w-full bg-gray-200", className)} />;
};

export default Divider;
