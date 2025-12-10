"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-flex animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent pb-2",
        className
      )}
      style={
        {
          "--bg-size": "300%",
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
