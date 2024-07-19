"use client";
import React from "react";
import SmoothScroll from "./SmoothScroll";

function ContainerScrool({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <SmoothScroll>{children}</SmoothScroll>;
    </div>
  );
}

export default ContainerScrool;
